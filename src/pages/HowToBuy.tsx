import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HowToBuy = () => {
  const steps = [
    {
      number: 1,
      title: "Выберите товары",
      description: "Просмотрите каталог и добавьте понравившиеся продукты в корзину",
      icon: "ShoppingCart"
    },
    {
      number: 2,
      title: "Оформите заказ",
      description: "Укажите адрес доставки и выберите удобное время",
      icon: "MapPin"
    },
    {
      number: 3,
      title: "Выберите способ оплаты",
      description: "Оплатите онлайн или при получении заказа",
      icon: "CreditCard"
    },
    {
      number: 4,
      title: "Получите заказ",
      description: "Курьер доставит свежие продукты к вашей двери",
      icon: "Package"
    }
  ];

  const paymentMethods = [
    {
      title: "Онлайн оплата",
      description: "Банковской картой на сайте",
      icon: "CreditCard",
      features: ["Visa, MasterCard, МИР", "Безопасные платежи", "Мгновенное подтверждение"]
    },
    {
      title: "Оплата курьеру",
      description: "Наличными или картой при получении",
      icon: "Banknote",
      features: ["Наличные", "Банковская карта", "Без комиссии"]
    },
    {
      title: "Банковский перевод",
      description: "Для юридических лиц",
      icon: "Building",
      features: ["По счету", "НДС включен", "Документооборот"]
    }
  ];

  const deliveryOptions = [
    {
      title: "Экспресс-доставка",
      time: "2-4 часа",
      price: "от 200 ₽",
      description: "Для срочных заказов в пределах МКАД",
      icon: "Zap",
      features: [
        "Доставка в день заказа",
        "SMS уведомления",
        "Контроль температуры",
        "Только свежие продукты"
      ]
    },
    {
      title: "Стандартная доставка",
      time: "На следующий день",
      price: "от 100 ₽",
      description: "Бесплатно при заказе от 2000 ₽",
      icon: "Truck",
      features: [
        "Планирование времени",
        "Эко-упаковка",
        "Доставка по Москве и МО",
        "Отслеживание заказа"
      ]
    },
    {
      title: "Самовывоз",
      time: "В удобное время",
      price: "Бесплатно",
      description: "50+ пунктов выдачи по Москве",
      icon: "MapPin",
      features: [
        "Круглосуточные пункты",
        "Скидка 5% на заказ",
        "Хранение до 3 дней",
        "Уведомления о готовности"
      ]
    }
  ];

  const pickupPoints = [
    {
      address: "ул. Тверская, 15",
      hours: "Пн-Вс: 08:00-22:00",
      metro: "Тверская"
    },
    {
      address: "Ленинский пр-т, 45",
      hours: "Круглосуточно",
      metro: "Ленинский проспект"
    },
    {
      address: "ул. Арбат, 28",
      hours: "Пн-Вс: 09:00-21:00",
      metro: "Арбатская"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary">Главная</a>
          <Icon name="ChevronRight" size={14} />
          <span className="text-gray-800">Как купить</span>
        </nav>

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-6">
            Как сделать заказ
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Простой процесс заказа свежих фермерских продуктов с доставкой на дом
          </p>
        </div>

        {/* Процесс заказа */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8 text-center">
            Процесс заказа
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <Card key={step.number} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Icon name={step.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Способы оплаты */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8 text-center">
            Способы оплаты
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                      <Icon name={method.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-montserrat font-semibold text-gray-800">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={14} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Варианты доставки */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8 text-center">
            Варианты доставки
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={option.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">
                      {option.title}
                    </h3>
                    <div className="flex justify-center gap-2 mb-3">
                      <Badge className="bg-primary hover:bg-primary">{option.time}</Badge>
                      <Badge variant="outline">{option.price}</Badge>
                    </div>
                    <p className="text-gray-600 font-open-sans">
                      {option.description}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={14} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Пункты самовывоза */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8 text-center">
            Пункты самовывоза
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-6">
                Популярные точки выдачи
              </h3>
              <div className="space-y-4">
                {pickupPoints.map((point, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">
                            {point.address}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">{point.hours}</p>
                          <Badge variant="outline" className="text-xs">
                            <Icon name="Train" size={12} className="mr-1" />
                            {point.metro}
                          </Badge>
                        </div>
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={64} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Интерактивная карта пунктов выдачи</p>
                <p className="text-sm text-gray-500 mt-2">
                  Более 50 точек по всей Москве
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Условия заказа */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8 text-center">
            Условия заказа
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShoppingBag" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Минимальный заказ</h4>
              <p className="text-gray-600">от 500 ₽</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Время доставки</h4>
              <p className="text-gray-600">с 8:00 до 22:00</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RefreshCw" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Возврат</h4>
              <p className="text-gray-600">100% гарантия качества</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Поддержка</h4>
              <p className="text-gray-600">24/7 онлайн</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HowToBuy;