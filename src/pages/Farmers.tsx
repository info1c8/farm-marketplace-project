import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FarmerCard from "@/components/FarmerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Farmers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const farmers = [
    {
      id: "farmer1",
      name: "Михаил Иванов",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      reviewCount: 127,
      location: "Московская область",
      specialties: ["Овощи", "Зелень", "Ягоды"],
      isOrganic: true,
      isVerified: true,
      description: "Семейная ферма с 15-летним опытом органического земледелия. Специализируемся на выращивании овощей и ягод без использования химических удобрений."
    },
    {
      id: "farmer2",
      name: "Анна Петрова",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332752c?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      reviewCount: 89,
      location: "Тульская область",
      specialties: ["Молочные продукты", "Мёд"],
      isOrganic: true,
      isVerified: true,
      description: "Молочная ферма с собственным стадом коров. Производим натуральные молочные продукты и мед с собственной пасеки."
    },
    {
      id: "farmer3",
      name: "Сергей Козлов",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4.7,
      reviewCount: 156,
      location: "Калужская область",
      specialties: ["Фрукты", "Орехи", "Консервы"],
      isOrganic: false,
      isVerified: true,
      description: "Фруктовый сад с многолетней историей. Выращиваем яблоки, груши, сливы. Производим домашние консервы и варенья."
    },
    {
      id: "farmer4",
      name: "Владимир Пчелкин",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      rating: 5.0,
      reviewCount: 78,
      location: "Рязанская область",
      specialties: ["Мёд", "Продукты пчеловодства"],
      isOrganic: true,
      isVerified: true,
      description: "Пасека в экологически чистом районе. Производим различные сорта меда и продукты пчеловодства высшего качества."
    },
    {
      id: "farmer5",
      name: "Елена Садовая",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 4.6,
      reviewCount: 34,
      location: "Владимирская область",
      specialties: ["Соки", "Напитки", "Фрукты"],
      isOrganic: true,
      isVerified: true,
      description: "Производство натуральных соков прямого отжима и фруктовых напитков из собственного сада."
    }
  ];

  const filteredFarmers = farmers
    .filter(farmer =>
      farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary">Главная</a>
          <Icon name="ChevronRight" size={14} />
          <span className="text-gray-800">Фермеры</span>
        </nav>

        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">
            Наши фермеры
          </h1>
          <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
            Познакомьтесь с нашими партнерами — фермерами, которые выращивают 
            качественные продукты с заботой о природе и вашем здоровье
          </p>
        </div>

        {/* Поиск и сортировка */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Input
              placeholder="Поиск фермеров по имени, региону или специализации..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">По имени</SelectItem>
              <SelectItem value="rating">По рейтингу</SelectItem>
              <SelectItem value="reviews">По количеству отзывов</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{farmers.length}</div>
            <div className="text-gray-600">Фермеров</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {farmers.filter(f => f.isOrganic).length}
            </div>
            <div className="text-gray-600">Органических</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {farmers.filter(f => f.isVerified).length}
            </div>
            <div className="text-gray-600">Проверенных</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Math.round(farmers.reduce((sum, f) => sum + f.rating, 0) / farmers.length * 10) / 10}
            </div>
            <div className="text-gray-600">Средний рейтинг</div>
          </div>
        </div>

        {/* Результаты поиска */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-montserrat font-bold text-gray-800">
            Фермеры ({filteredFarmers.length})
          </h2>
        </div>

        {/* Список фермеров */}
        {filteredFarmers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFarmers.map((farmer) => (
              <FarmerCard key={farmer.id} farmer={farmer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon name="Users" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Фермеры не найдены
            </h3>
            <p className="text-gray-500">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-primary-50 to-green-100 rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-4">
            Хотите стать нашим партнером?
          </h3>
          <p className="text-gray-600 font-open-sans mb-6 max-w-2xl mx-auto">
            Если вы фермер и хотите продавать свои продукты через нашу платформу, 
            мы будем рады сотрудничеству!
          </p>
          <Button className="bg-primary hover:bg-primary-600">
            <Icon name="UserPlus" size={16} className="mr-2" />
            Стать фермером
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Farmers;