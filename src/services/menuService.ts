import Papa from "papaparse";
import { MenuItem, MenuCategory } from "../types/menu";
import { MENU_CATEGORIES, ALL_MENU_ITEMS } from "../data/menu";
import { GOOGLE_SHEET_CSV_URL } from "../config/sheets";
import { resolveAssetUrl } from "../utils/asset";

export interface MenuDataResult {
  categories: MenuCategory[];
  allItems: MenuItem[];
  source: "sheets" | "fallback";
}

/**
 * Busca un campo en la fila sin importar variaciones de mayúsculas o tildes.
 */
function getField(row: Record<string, unknown>, candidates: string[]): string {
  const keys = Object.keys(row);
  for (const candidate of candidates) {
    const normalizedCandidate = candidate
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const matchedKey = keys.find((k) => {
      const normalizedKey = k
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return normalizedKey === normalizedCandidate;
    });

    if (matchedKey && row[matchedKey] !== undefined && row[matchedKey] !== null) {
      return String(row[matchedKey]).trim();
    }
  }
  return "";
}

/**
 * Sanitiza y convierte distintos formatos de precio a un número entero o flotante válido.
 * Soporta: 15000, "$15.000", "$ 15.000,00", "15,000.50", etc.
 */
export function parsePrice(raw: unknown): number {
  if (typeof raw === "number") return isNaN(raw) ? 0 : raw;
  if (!raw) return 0;

  let str = String(raw).trim().replace(/[$\s]/g, "");

  // Manejo de separadores de miles y decimales
  if (str.includes(",") && str.includes(".")) {
    if (str.lastIndexOf(",") > str.lastIndexOf(".")) {
      // Formato argentino: 15.000,50
      str = str.replace(/\./g, "").replace(",", ".");
    } else {
      // Formato anglosajón: 15,000.50
      str = str.replace(/,/g, "");
    }
  } else if (str.includes(",")) {
    const parts = str.split(",");
    if (parts.length === 2 && parts[1].length === 2) {
      str = str.replace(",", ".");
    } else if (parts.length === 2 && parts[1].length === 3) {
      str = str.replace(",", "");
    } else {
      str = str.replace(",", ".");
    }
  } else if (str.includes(".")) {
    const parts = str.split(".");
    if (parts.length === 2 && parts[1].length === 3) {
      // Ej: 15.000 (quince mil)
      str = str.replace(".", "");
    } else if (parts.length > 2) {
      // Ej: 1.500.000
      str = str.replace(/\./g, "");
    }
  }

  str = str.replace(/[^0-9.]/g, "");
  const parsed = parseFloat(str);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Genera un slug limpio a partir de un texto.
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Consulta la planilla de Google Sheets publicada como CSV y la procesa.
 * Si la URL no está configurada o hay un error, devuelve los datos locales de respaldo.
 */
export async function fetchMenuData(csvUrl: string = GOOGLE_SHEET_CSV_URL): Promise<MenuDataResult> {
  // Si no hay URL configurada o es el placeholder de ejemplo, usar datos locales
  if (!csvUrl || csvUrl.includes("placeholder")) {
    return {
      categories: MENU_CATEGORIES,
      allItems: ALL_MENU_ITEMS,
      source: "fallback",
    };
  }

  try {
    // Cache buster para evitar que el navegador guarde la respuesta vieja
    const urlWithCacheBust = `${csvUrl}${csvUrl.includes("?") ? "&" : "?"}_t=${Date.now()}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(urlWithCacheBust, {
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Error al descargar la hoja de cálculo (${response.status}: ${response.statusText})`);
    }

    const csvText = await response.text();

    return new Promise<MenuDataResult>((resolve) => {
      Papa.parse<Record<string, unknown>>(csvText, {
        header: true,
        skipEmptyLines: "greedy",
        complete: (results) => {
          const rows = results.data;

          if (!rows || rows.length === 0) {
            return resolve({
              categories: MENU_CATEGORIES,
              allItems: ALL_MENU_ITEMS,
              source: "fallback",
            });
          }

          const categoryMap = new Map<string, MenuItem[]>();
          const categoryCoverMap = new Map<string, string | undefined>();
          const categoryOrder: string[] = [];

          let globalItemIndex = 1;

          rows.forEach((row) => {
            const nombre = getField(row, ["nombre", "plato", "item", "name"]);
            // Ignorar filas sin nombre
            if (!nombre) return;

            let categoria = getField(row, ["categoria", "seccion", "rubro", "category"]);
            if (!categoria) {
              categoria = "General";
            }

            const descripcion = getField(row, ["descripcion", "detalle", "ingredientes", "description"]);
            const precioRaw = getField(row, ["precio", "valor", "importe", "price"]);
            const imagenRaw = getField(row, ["imagen_url", "imagen", "foto", "foto_url", "image", "url_imagen"]);
            const imagen = resolveAssetUrl(imagenRaw);

            const catFotoRaw = getField(row, ["categoria_foto", "foto_categoria", "cover", "cover_image"]);
            if (catFotoRaw && !categoryCoverMap.has(categoria)) {
              categoryCoverMap.set(categoria, resolveAssetUrl(catFotoRaw));
            }

            const precio = parsePrice(precioRaw);

            if (!categoryMap.has(categoria)) {
              categoryMap.set(categoria, []);
              categoryOrder.push(categoria);
            }

            const currentCategoryIndex = categoryOrder.indexOf(categoria);
            const currentItemNumber = (categoryMap.get(categoria)?.length || 0) + 1;

            const disponibleRaw = getField(row, ["disponible", "activo", "visible", "habilitado"]).toLowerCase();
            // Si el plato está marcado explícitamente como no disponible en la planilla, omitirlo
            if (disponibleRaw === "no" || disponibleRaw === "false" || disponibleRaw === "0" || disponibleRaw === "agotado") {
              return;
            }

            const etiquetasRaw = getField(row, ["etiquetas", "etiqueta", "tags", "tag"]);
            const tags = etiquetasRaw
              ? etiquetasRaw.split(",").map((t) => t.trim()).filter(Boolean)
              : undefined;

            const destacadoRaw = getField(row, ["destacado", "featured", "recomendado"]).toLowerCase();
            const featured = destacadoRaw === "si" || destacadoRaw === "true" || destacadoRaw === "1";

            const item: MenuItem = {
              id: `dish-${currentCategoryIndex}-${currentItemNumber}-${globalItemIndex++}`,
              name: nombre,
              description: descripcion || undefined,
              price: precio,
              category: categoria,
              categoryId: currentCategoryIndex,
              image: imagen || undefined,
              tags: tags && tags.length > 0 ? tags : undefined,
              featured: featured || undefined,
            };

            categoryMap.get(categoria)!.push(item);
          });

          if (categoryOrder.length === 0) {
            return resolve({
              categories: MENU_CATEGORIES,
              allItems: ALL_MENU_ITEMS,
              source: "fallback",
            });
          }

          // Asegurar que la categoría "Cafetería" quede ubicada al final de toda la carta
          const cafeteriaIndex = categoryOrder.findIndex(
            (cat) => cat.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === "cafeteria"
          );
          if (cafeteriaIndex !== -1 && cafeteriaIndex !== categoryOrder.length - 1) {
            const [cafeteriaCat] = categoryOrder.splice(cafeteriaIndex, 1);
            categoryOrder.push(cafeteriaCat);
          }

          // Armar la lista estructurada de categorías respetando el orden de la planilla
          const categories: MenuCategory[] = categoryOrder.map((catName, index) => {
            const items = categoryMap.get(catName) || [];
            // Reasignar categoryId consistente
            items.forEach((item) => {
              item.categoryId = index;
            });

            const matchedFallbackCat = MENU_CATEGORIES.find(
              (c) => c.name.toLowerCase() === catName.toLowerCase() || c.slug === slugify(catName)
            );

            return {
              id: index,
              name: catName,
              slug: slugify(catName),
              coverImage: categoryCoverMap.get(catName) || matchedFallbackCat?.coverImage,
              description: matchedFallbackCat?.description,
              icon: matchedFallbackCat?.icon,
              itemsCount: items.length,
              items: items,
            };
          });

          const allItems = categories.flatMap((c) => c.items);

          resolve({
            categories,
            allItems,
            source: "sheets",
          });
        },
        error: () => {
          resolve({
            categories: MENU_CATEGORIES,
            allItems: ALL_MENU_ITEMS,
            source: "fallback",
          });
        },
      });
    });
  } catch {
    return {
      categories: MENU_CATEGORIES,
      allItems: ALL_MENU_ITEMS,
      source: "fallback",
    };
  }
}

