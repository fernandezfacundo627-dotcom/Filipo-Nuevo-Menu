# Cómo agregar fotos a los platos de Filipo

¡El sistema está preparado para que puedas sumar fotos de cada plato de forma súper sencilla y flexible!

Existen **dos formas** de agregar fotos a los platos:

---

### Opción 1: Guardar la foto con el ID del plato (Automático)

Simplemente guardá la foto en esta carpeta (`public/platos/`) con el número de ID del plato o su nombre:

- Ejemplo: `285.jpg` (para el *Lomo Strogonoff Menú*, cuyo ID es 285)
- O con extensión `.webp`, `.png`, `.jpg`.

Formatos aceptados: JPG, WebP, PNG.

---

### Opción 2: Especificar la ruta en `src/data/menu.ts` (Personalizado)

Abrí el archivo `src/data/menu.ts`, buscá el plato que querés y agregale la propiedad `image`:

```ts
{
  id: "285",
  name: "Lomo Strogonoff Menú",
  price: 24900,
  category: "Menu Ejecutivo",
  categoryId: 0,
  image: "/platos/lomo-strogonoff.jpg", // <--- Solo ponés el nombre del archivo aquí
}
```

También podés usar URLs externas si alojás las imágenes en la nube o en Instagram/Google Drive:
```ts
image: "https://tudominio.com/fotos/lomo.jpg"
```

---

### ¿Qué pasa si un plato todavía no tiene foto?

No te preocupes: los platos sin foto tienen un **diseño editorial gastronómico prémium**, elegante y tipográfico con detalles en dorado, sin mostrar cuadros vacíos ni íconos rotos. Podés ir subiendo fotos a tu propio ritmo.

---

### Recomendación para fotos rápidas en celulares:
- Tamaño ideal: **600×450 px** o **800×600 px** (proporción 4:3 o 1:1 cuadrada).
- Peso recomendado: **80 KB a 250 KB** (podés usar [squoosh.app](https://squoosh.app) para comprimirlas en 2 segundos).

