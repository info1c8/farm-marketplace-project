import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const About = () => {
  const values = [
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Поддерживаем органическое земледелие и экологически чистое производство"
    },
    {
      icon: "Heart",
      title: "Этичное животноводство",
      description: "Гуманное обращение с животными и естественные условия содержания"
    },
    {
      icon: "MapPin",
      title: "Поддержка локального",
      description: "Работаем с местными фермерами и развиваем региональную экономику"
    },
    {
      icon: "Shield",
      title: "Качество и безопасность",
      description: "Строгий контроль качества на всех этапах производства и доставки"
    }
  ];

  const certificates = [
    {
      name: "Органик сертификат",
      description: "Международный стандарт органического производства",
      icon: "Award"
    },
    {
      name: "ХАССП",
      description: "Система анализа опасностей и критических контрольных точек",
      icon: "Shield"
    },
    {
      name: "ISO 22000",
      description: "Международный стандарт безопасности пищевых продуктов",
      icon: "CheckCircle"
    }
  ];

  const team = [
    {
      name: "Анна Волкова",
      position: "Основатель и CEO",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332752c?w=200&h=200&fit=crop&crop=face",
      description: "15 лет опыта в агробизнесе"
    },
    {
      name: "Дмитрий Соколов",
      position: "Директор по качеству",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      description: "Эксперт по органическому производству"
    },
    {
      name: "Елена Морозова",
      position: "Менеджер по работе с фермерами",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      description: "Координирует работу с поставщиками"
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
          <span className="text-gray-800">О нас</span>
        </nav>

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-6">
            О нашей ферме
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Мы объединяем лучших фермеров России, чтобы доставлять вам самые свежие 
            и качественные продукты прямо с полей и ферм
          </p>
        </div>

        {/* Наша история */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-gray-600 font-open-sans">
                <p>
                  ФермаМаркет начался как семейный проект в 2018 году, когда мы решили 
                  помочь местным фермерам найти прямой путь к покупателям, минуя 
                  длинные цепочки посредников.
                </p>
                <p>
                  Сегодня мы работаем с более чем 500 фермерскими хозяйствами по всей 
                  России, обеспечивая свежими и качественными продуктами тысячи семей.
                </p>
                <p>
                  Наша миссия — сделать здоровое питание доступным каждому, поддерживая 
                  при этом местных производителей и заботясь об окружающей среде.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Наша ферма"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Фотогалерея */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Наши фермы
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Взгляните на места, где выращиваются ваши продукты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Овощные поля"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img
                src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Коровы на пастбище"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Фруктовый сад"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img
                src="https://images.pexels.com/photos/1459501/pexels-photo-1459501.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Теплицы"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/1595103/pexels-photo-1595103.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Пасека"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img
                src="https://images.pexels.com/photos/1459502/pexels-photo-1459502.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Птичий двор"
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </section>

        {/* Сертификаты */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Сертификаты и стандарты
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Мы соответствуем высочайшим стандартам качества
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert.icon as any} size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 font-open-sans">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Наша команда */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Люди, которые делают ФермаМаркет лучше каждый день
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <Badge className="mb-3 bg-primary-100 text-primary-700 hover:bg-primary-100">
                    {member.position}
                  </Badge>
                  <p className="text-gray-600 font-open-sans">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Контакты ферм */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Контакты наших ферм
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Свяжитесь с нами для экскурсий и прямых закупок
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Главная ферма</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2 text-primary" />
                    <span>Московская область, д. Фермерское</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" size={16} className="mr-2 text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={16} className="mr-2 text-primary" />
                    <span>farm@fermamarket.ru</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Молочная ферма</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2 text-primary" />
                    <span>Тульская область, с. Молочное</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" size={16} className="mr-2 text-primary" />
                    <span>+7 (487) 234-56-78</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={16} className="mr-2 text-primary" />
                    <span>dairy@fermamarket.ru</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Пасека</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2 text-primary" />
                    <span>Рязанская область, д. Медовая</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" size={16} className="mr-2 text-primary" />
                    <span>+7 (491) 345-67-89</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={16} className="mr-2 text-primary" />
                    <span>honey@fermamarket.ru</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;