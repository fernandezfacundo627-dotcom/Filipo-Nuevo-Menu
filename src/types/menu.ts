export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  categoryId: number;
  image?: string;
  tags?: string[];
  featured?: boolean;
}

export interface MenuCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  coverImage?: string;
  itemsCount: number;
  items: MenuItem[];
}

