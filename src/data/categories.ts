import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "vegetables",
    name: "Овощи",
    slug: "vegetables",
    description: "Свежие овощи прямо с грядки",
    image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400",
    subcategories: [
      { id: "leafy", name: "Листовые", slug: "leafy", description: "Салаты, шпинат, руккола" },
      { id: "nightshades", name: "Пасленовые", slug: "nightshades", description: "Томаты, баклажаны, перцы" },
      { id: "root", name: "Корнеплоды", slug: "root", description: "Морковь, свекла, редис" },
      { id: "cabbage", name: "Капустные", slug: "cabbage", description: "Капуста, брокколи, цветная капуста" },
      { id: "onion", name: "Луковые", slug: "onion", description: "Лук, чеснок, лук-порей" },
      { id: "cucurbits", name: "Тыквенные", slug: "cucurbits", description: "Огурцы, кабачки, тыквы" }
    ]
  },
  {
    id: "fruits",
    name: "Фрукты и Ягоды",
    slug: "fruits",
    description: "Сочные фрукты и ароматные ягоды",
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
    subcategories: [
      { id: "pome", name: "Семечковые", slug: "pome", description: "Яблоки, груши" },
      { id: "stone", name: "Косточковые", slug: "stone", description: "Сливы, абрикосы, вишня" },
      { id: "berries", name: "Ягоды", slug: "berries", description: "Клубника, малина, смородина" },
      { id: "citrus", name: "Цитрусовые", slug: "citrus", description: "Лимоны, апельсины (тепличные)" }
    ]
  },
  {
    id: "meat",
    name: "Мясо и Птица",
    slug: "meat",
    description: "Свежее мясо от фермерских хозяйств",
    image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400",
    subcategories: [
      { id: "beef", name: "Говядина", slug: "beef", description: "Мраморная говядина травяного откорма" },
      { id: "pork", name: "Свинина", slug: "pork", description: "Свинина от свободного выгула" },
      { id: "lamb", name: "Баранина", slug: "lamb", description: "Молодая баранина" },
      { id: "chicken", name: "Курица", slug: "chicken", description: "Домашняя курица" },
      { id: "turkey", name: "Индейка", slug: "turkey", description: "Диетическое мясо индейки" },
      { id: "duck", name: "Утка/Гусь", slug: "duck", description: "Водоплавающая птица" }
    ]
  },
  {
    id: "dairy",
    name: "Молочные продукты",
    slug: "dairy",
    description: "Натуральные молочные продукты и яйца",
    image: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400",
    subcategories: [
      { id: "milk", name: "Молоко и сливки", slug: "milk", description: "Цельное молоко, сливки" },
      { id: "fermented", name: "Кисломолочные", slug: "fermented", description: "Кефир, йогурт, ряженка" },
      { id: "cheese", name: "Сыры", slug: "cheese", description: "Мягкие, твердые, рассольные сыры" },
      { id: "cottage", name: "Творог и сметана", slug: "cottage", description: "Домашний творог, сметана" },
      { id: "eggs", name: "Яйца", slug: "eggs", description: "Куриные, перепелиные яйца" }
    ]
  },
  {
    id: "grocery",
    name: "Бакалея",
    slug: "grocery",
    description: "Крупы, мука, масла и готовые продукты",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    subcategories: [
      { id: "grains", name: "Мука и крупы", slug: "grains", description: "Цельнозерновые продукты" },
      { id: "oils", name: "Масла", slug: "oils", description: "Растительные масла холодного отжима" },
      { id: "honey", name: "Мед и продукты пчеловодства", slug: "honey", description: "Натуральный мед, прополис" },
      { id: "preserves", name: "Варенье и джемы", slug: "preserves", description: "Домашние заготовки" },
      { id: "bread", name: "Хлеб и выпечка", slug: "bread", description: "Фермерский хлеб на закваске" }
    ]
  },
  {
    id: "beverages",
    name: "Напитки",
    slug: "beverages",
    description: "Натуральные соки и напитки",
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400",
    subcategories: [
      { id: "juices", name: "Соки", slug: "juices", description: "Соки прямого отжима" },
      { id: "teas", name: "Травяные чаи", slug: "teas", description: "Сборы из луговых трав" },
      { id: "kvass", name: "Квас и морсы", slug: "kvass", description: "Традиционные напитки" }
    ]
  }
];