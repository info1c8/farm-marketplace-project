import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { products } from "@/data/products";
import { useState } from "react";

const Promotions = () => {
  const [promoCode, setPromoCode] = useState("");

  const weeklyDeals = products.slice(0, 3);
  const seasonalDeals = products.slice(3, 6);

  const giftSets = [
    {
      id: "set1",
      name: "Завтрак фермера",
      description: "Молоко, яйца, хлеб, масло, мед",
      originalPrice: 800,
      discountPrice: 650,
      discount: 19,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "set2",
      name: "Шашлычный набор",
      description: "Мясо, овощи для гриля, специи",
      originalPrice: 2500,
      discountPrice: 2000,
      discount: 20,
      image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "set3",
      name: "Сырная тарелка",
      description: "Ассорти фермерских сыров с медом",
      originalPrice: 1200,
      discountPrice: 950,
      discount: 21,
      image: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const promoCodes = [
    {
      code: "NEWBIE10",
      description: "Скидка 10% для новых покупателей",
      discount: "10%",
      validUntil: "31.12.2024"
    },
    {
      code: "ORGANIC15",
      description: "15% скидка на органические продукты",
      discount: "15%",
      validUntil: "15.02.2024"
    },
    {
      code: "DELIVERY0",
      description: "Бесплатная доставка при заказе от 1500₽",
      discount: "Доставка",
      validUntil: "28.02.2024"
    }
  ];

  const loyaltyProgram = {
    bronze: { name: "Бронза", minSpent: 0, discount: 3, color: "bg-amber-600" },
    silver: { name: "Серебро", minSpent: 10000, discount: 5, color: "bg-gray-400" },
    gold: { name: "Золото", minSpent: 25000, discount: 7, color: "bg-yellow-500" },
    platinum: { name: "Платина", minSpent: 50000, discount: 10, color: "bg-purple-600" }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary">Главная</a>
          <Icon name="ChevronRight" size={14} />
          <span className="text-gray-800">Акции и спецпредложения</span>
        </nav>

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-6">
            Акции и спецпредложения
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Выгодные предложения на свежие фермерские продукты. Экономьте с нашими акциями!
          </p>
        </div>

        {/* Баннер главной акции */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary to-primary-600 text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-accent hover:bg-accent text-white mb-4">
                    Акция недели
                  </Badge>
                  <h2 className="text-3xl font-montserrat font-bold mb-4">
                    Скидка 25% на все органические продукты
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Попробуйте лучшие органические продукты от наших фермеров 
                    со скидкой 25%. Акция действует до конца месяца!
                  </p>
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    <Icon name="ShoppingBag" size={16} className="mr-2" />
                    Перейти в каталог
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">25%</div>
                  <div className="text-xl">СКИДКА</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Товары недели */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800">
              Товары недели
            </h2>
            <Badge className="bg-accent hover:bg-accent text-white">
              <Icon name="Clock" size={14} className="mr-1" />
              До конца акции: 3 дня
            </Badge>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyDeals.map((product) => (
              <div key={product.id} className="relative">
                <Badge className="absolute top-3 right-3 z-10 bg-red-500 hover:bg-red-500">
                  -20%
                </Badge>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>

        {/* Сезонные скидки */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8">
            Сезонные предложения
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonalDeals.map((product) => (
              <div key={product.id} className="relative">
                <Badge className="absolute top-3 right-3 z-10 bg-orange-500 hover:bg-orange-500">
                  Сезонная цена
                </Badge>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>

        {/* Подарочные наборы */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8">
            Подарочные наборы со скидкой
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {giftSets.map((set) => (
              <Card key={set.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={set.image}
                    alt={set.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-500">
                    -{set.discount}%
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">
                    {set.name}
                  </h3>
                  <p className="text-gray-600 font-open-sans mb-4">
                    {set.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        {set.discountPrice} ₽
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {set.originalPrice} ₽
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-600">
                    <Icon name="Gift" size={16} className="mr-2" />
                    Добавить набор
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Промокоды */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8">
            Промокоды
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-6">
                Активные промокоды
              </h3>
              <div className="space-y-4">
                {promoCodes.map((promo, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-primary hover:bg-primary font-mono">
                              {promo.code}
                            </Badge>
                            <Badge variant="outline">{promo.discount}</Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-1">
                            {promo.description}
                          </p>
                          <p className="text-xs text-gray-500">
                            Действует до {promo.validUntil}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Copy" size={14} className="mr-1" />
                          Копировать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Tag" size={20} className="mr-2 text-primary" />
                    Применить промокод
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Введите промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-600">
                      Применить
                    </Button>
                    <div className="text-sm text-gray-600">
                      <p>• Промокоды не суммируются</p>
                      <p>• Один промокод на заказ</p>
                      <p>• Действуют ограничения по товарам</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Программа лояльности */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Программа лояльности
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Покупайте больше — получайте больше скидок!
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(loyaltyProgram).map(([key, level]) => (
              <Card key={key} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-2">
                    {level.name}
                  </h3>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {level.discount}%
                  </div>
                  <p className="text-sm text-gray-600">
                    От {level.minSpent.toLocaleString()} ₽
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-primary-600">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Присоединиться к программе
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Promotions;