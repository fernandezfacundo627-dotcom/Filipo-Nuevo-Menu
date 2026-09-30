import { useState, useEffect, useCallback } from "react";
import { MenuCategory, MenuItem } from "../types/menu";
import { fetchMenuData } from "../services/menuService";
import { MENU_CATEGORIES, ALL_MENU_ITEMS } from "../data/menu";

export interface UseMenuReturn {
  categories: MenuCategory[];
  allItems: MenuItem[];
  isLoading: boolean;
  error: string | null;
  source: "sheets" | "fallback";
  reload: () => Promise<void>;
}

export function useMenu(csvUrl?: string): UseMenuReturn {
  const [categories, setCategories] = useState<MenuCategory[]>(MENU_CATEGORIES);
  const [allItems, setAllItems] = useState<MenuItem[]>(ALL_MENU_ITEMS);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<"sheets" | "fallback">("fallback");

  const loadMenu = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await fetchMenuData(csvUrl);
      setCategories(result.categories);
      setAllItems(result.allItems);
      setSource(result.source);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar el menú");
      // Fallback a los datos locales
      setCategories(MENU_CATEGORIES);
      setAllItems(ALL_MENU_ITEMS);
      setSource("fallback");
    } finally {
      setIsLoading(false);
    }
  }, [csvUrl]);

  useEffect(() => {
    loadMenu();
  }, [loadMenu]);

  return {
    categories,
    allItems,
    isLoading,
    error,
    source,
    reload: loadMenu,
  };
}

