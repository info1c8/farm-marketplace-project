import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Помидоры черри органические",
    description: "Сладкие помидоры черри, выращенные без химических удобрений",
    price: 350,
    unit: "кг",
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "vegetables",
    subcategory: "nightshades",
    farmer: {
      id: "farmer1",
      name: "Михаил Иванов",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Московская область"
    },
    rating: 4.9,
    reviewCount: 45,
    isOrganic: true,
    isSeasonal: true,
    isPreorder: false,
    inStock: true,
    stockQuantity: 50,
    tags: ["органик", "сезонное", "местное"]
  },
  {
    id: "2",
    name: "Клубника садовая",
    description: "Ароматная клубника с собственных грядок",
    price: 450,
    unit: "кг",
    image: "https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "fruits",
    subcategory: "berries",
    farmer: {
      id: "farmer2",
      name: "Анна Петрова",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332752c?w=100&h=100&fit=crop&crop=face",
      location: "Тульская область"
    },
    rating: 4.8,
    reviewCount: 67,
    isOrganic: true,
    isSeasonal: true,
    isPreorder: false,
    inStock: true,
    stockQuantity: 30,
    tags: ["органик", "сезонное", "ягоды"]
  },
  {
    id: "3",
    name: "Говядина мраморная",
    description: "Мраморная говядина от коров травяного откорма",
    price: 1200,
    unit: "кг",
    image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "meat",
    subcategory: "beef",
    farmer: {
      id: "farmer3",
      name: "Сергей Козлов",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Калужская область"
    },
    rating: 4.7,
    reviewCount: 89,
    isOrganic: false,
    isSeasonal: false,
    isPreorder: false,
    inStock: true,
    stockQuantity: 15,
    tags: ["мраморная", "травяной откорм", "премиум"]
  },
  {
    id: "4",
    name: "Молоко цельное",
    description: "Свежее цельное молоко от коров на свободном выпасе",
    price: 80,
    unit: "л",
    image: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "dairy",
    subcategory: "milk",
    farmer: {
      id: "farmer2",
      name: "Анна Петрова",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332752c?w=100&h=100&fit=crop&crop=face",
      location: "Тульская область"
    },
    rating: 4.9,
    reviewCount: 123,
    isOrganic: true,
    isSeasonal: false,
    isPreorder: false,
    inStock: true,
    stockQuantity: 100,
    tags: ["свежее", "цельное", "органик"]
  },
  {
    id: "5",
    name: "Мед липовый",
    description: "Натуральный липовый мед с собственной пасеки",
    price: 600,
    unit: "кг",
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "grocery",
    subcategory: "honey",
    farmer: {
      id: "farmer4",
      name: "Владимир Пчелкин",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      location: "Рязанская область"
    },
    rating: 5.0,
    reviewCount: 78,
    isOrganic: true,
    isSeasonal: false,
    isPreorder: false,
    inStock: true,
    stockQuantity: 25,
    tags: ["липовый", "натуральный", "пасека"]
  },
  {
    id: "6",
    name: "Яблочный сок прямого отжима",
    description: "100% натуральный яблочный сок без добавок",
    price: 150,
    unit: "л",
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "beverages",
    subcategory: "juices",
    farmer: {
      id: "farmer5",
      name: "Елена Садовая",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "Владимирская область"
    },
    rating: 4.6,
    reviewCount: 34,
    isOrganic: true,
    isSeasonal: true,
    isPreorder: false,
    inStock: true,
    stockQuantity: 60,
    tags: ["прямой отжим", "без добавок", "сезонное"]
  }
];