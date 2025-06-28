export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  subcategory: string;
  farmer: {
    id: string;
    name: string;
    avatar: string;
    location: string;
  };
  rating: number;
  reviewCount: number;
  isOrganic: boolean;
  isSeasonal: boolean;
  isPreorder: boolean;
  availableFrom?: string;
  inStock: boolean;
  stockQuantity?: number;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Farmer {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  location: string;
  specialties: string[];
  isOrganic: boolean;
  isVerified: boolean;
  description: string;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  productId?: string;
  farmerId?: string;
}