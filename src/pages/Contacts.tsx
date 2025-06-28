import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      title: "Общие вопросы",
      phone: "+7 (800) 123-45-67",
      email: "info@fermamarket.ru",
      hours: "Пн-Вс: 8:00-22:00",
      icon: "Phone"
    },
    {
      title: "Отдел доставки",
      phone: "+7 (800) 123-45-68",
      email: "delivery@fermamarket.ru",
      hours: "Пн-Вс: 8:00-20:00",
      icon: "Truck"
    },
    {
      title: "Поддержка клиентов",
      phone: "+7 (800) 123-45-69",
      email: "support@fermamarket.ru",
      hours: "Круглосуточно",
      icon: "Headphones"
    },
    {
      title: "Сотрудничество",
      phone: "+7 (495) 123-45-70",
      email: "partners@fermamarket.ru",
      hours: "Пн-Пт: 9:00-18:00",
      icon: "Handshake"
    }
  ];

  const pickupPoints = [
    {
      name: "Центральный офис",
      address: "г. Москва, ул. Фермерская, 123",
      metro: "Тверская",
      hours: "Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-18:00",
      phone: "+7 (495) 123-45-67",
      services: ["Самовывоз", "Консультации", "Дегустации"]
    },
    {
      name: "Пункт выдачи Арбат",
      address: "г. Москва, ул. Арбат, 28",
      metro: "Арбатская",
      hours: "Пн-Вс: 9:00-21:00",
      phone: "+7 (495) 123-45-71",
      services: ["Самовывоз", "Возврат товаров"]
    },
    {
      name: "Пункт выдачи Сокольники",
      address: "г. Москва, Сокольническая пл., 15",
      metro: "Сокольники",
      hours: "Пн-Вс: 8:00-22:00",
      phone: "+7 (495) 123-45-72",
      services: ["Самовывоз", "Экспресс-заказы"]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", url: "#", followers: "25K" },
    { name: "Facebook", icon: "Facebook", url: "#", followers: "15K" },
    { name: "VKontakte", icon: "Users", url: "#", followers: "30K" },
    { name: "Telegram", icon: "MessageCircle", url: "#", followers: "12K" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary">Главная</a>
          <Icon name="ChevronRight" size={14} />
          <span className="text-gray-800">Контакты</span>
        </nav>

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-6">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
          </p>
        </div>

        {/* Контактная информация */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8 text-center">
            Как с нами связаться
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">
                    {contact.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <Icon name="Phone" size={14} className="mr-2 text-primary" />
                      <a href={`tel:${contact.phone}`} className="hover:text-primary">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Icon name="Mail" size={14} className="mr-2 text-primary" />
                      <a href={`mailto:${contact.email}`} className="hover:text-primary">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Icon name="Clock" size={14} className="mr-2 text-primary" />
                      <span>{contact.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Форма обратной связи и карта */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Форма */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8">
                Напишите нам
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Имя *
                        </label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Телефон *
                        </label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тема обращения
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order">Вопрос по заказу</SelectItem>
                          <SelectItem value="delivery">Доставка</SelectItem>
                          <SelectItem value="quality">Качество товара</SelectItem>
                          <SelectItem value="partnership">Сотрудничество</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Сообщение *
                      </label>
                      <Textarea 
                        placeholder="Опишите ваш вопрос или предложение..."
                        rows={5}
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-600">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Карта */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8">
                Мы на карте
              </h2>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={64} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Интерактивная карта</p>
                  <p className="text-sm text-gray-500 mt-2">
                    г. Москва, ул. Фермерская, 123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Пункты самовывоза */}
        <section className="mb-16">
          <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8 text-center">
            Пункты самовывоза
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {pickupPoints.map((point, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                    {point.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-800 font-medium">{point.address}</p>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Icon name="Train" size={14} className="mr-1 text-primary" />
                        м. {point.metro}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Clock" size={14} className="mr-2 text-primary" />
                      {point.hours}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="Phone" size={14} className="mr-2 text-primary" />
                      <a href={`tel:${point.phone}`} className="hover:text-primary">
                        {point.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Услуги:</p>
                      <div className="flex flex-wrap gap-1">
                        {point.services.map((service, idx) => (
                          <span key={idx} className="text-xs bg-primary-50 text-primary px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Социальные сети */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Мы в социальных сетях
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Следите за новостями и акциями в наших социальных сетях
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={social.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-2">
                    {social.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {social.followers} подписчиков
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;