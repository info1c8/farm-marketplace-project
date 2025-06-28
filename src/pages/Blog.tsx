import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все статьи" },
    { id: "recipes", name: "Рецепты" },
    { id: "storage", name: "Хранение продуктов" },
    { id: "health", name: "Польза продуктов" },
    { id: "news", name: "Новости фермы" },
    { id: "interviews", name: "Интервью" },
    { id: "gardening", name: "Садоводство" }
  ];

  const articles = [
    {
      id: "1",
      title: "Сезонные рецепты: что приготовить из летних овощей",
      excerpt: "Лучшие рецепты блюд из свежих летних овощей прямо с грядки. Простые и вкусные идеи для всей семьи.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "recipes",
      categoryName: "Рецепты",
      author: "Анна Кулинарова",
      date: "15 января 2024",
      readTime: "5 мин",
      featured: true
    },
    {
      id: "2",
      title: "Как правильно хранить фермерские продукты",
      excerpt: "Секреты длительного хранения свежих продуктов без потери качества и полезных свойств.",
      image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "storage",
      categoryName: "Хранение",
      author: "Дмитрий Эксперт",
      date: "12 января 2024",
      readTime: "7 мин",
      featured: false
    },
    {
      id: "3",
      title: "Польза органических продуктов: научные факты",
      excerpt: "Исследования показывают, чем органические продукты отличаются от обычных и почему стоит их выбирать.",
      image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "health",
      categoryName: "Польза продуктов",
      author: "Елена Здоровье",
      date: "10 января 2024",
      readTime: "8 мин",
      featured: true
    },
    {
      id: "4",
      title: "Интервью с фермером: история успеха Михаила Иванова",
      excerpt: "Как городской житель стал успешным фермером и создал процветающее органическое хозяйство.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      category: "interviews",
      categoryName: "Интервью",
      author: "Редакция",
      date: "8 января 2024",
      readTime: "12 мин",
      featured: false
    },
    {
      id: "5",
      title: "Новости фермы: открытие нового тепличного комплекса",
      excerpt: "Мы расширяем производство! Новый тепличный комплекс позволит выращивать овощи круглый год.",
      image: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "news",
      categoryName: "Новости",
      author: "Пресс-служба",
      date: "5 января 2024",
      readTime: "3 мин",
      featured: false
    },
    {
      id: "6",
      title: "Советы по садоводству: как вырастить идеальные помидоры",
      excerpt: "Пошаговое руководство по выращиванию сочных и вкусных помидоров в домашних условиях.",
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "gardening",
      categoryName: "Садоводство",
      author: "Игорь Садовод",
      date: "3 января 2024",
      readTime: "10 мин",
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary">Главная</a>
          <Icon name="ChevronRight" size={14} />
          <span className="text-gray-800">Рецепты и блог</span>
        </nav>

        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-6">
            Рецепты и блог
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
            Полезные советы, вкусные рецепты и интересные истории из мира фермерства
          </p>
        </div>

        {/* Поиск и фильтры */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Input
              placeholder="Поиск статей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Рекомендуемые статьи */}
        {selectedCategory === "all" && (
          <section className="mb-16">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-8">
              Рекомендуемые статьи
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent hover:bg-accent">
                      Рекомендуем
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{article.categoryName}</Badge>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-open-sans mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Icon name="User" size={14} className="mr-1" />
                        {article.author}
                        <span className="mx-2">•</span>
                        {article.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Читать далее
                        <Icon name="ArrowRight" size={14} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Все статьи */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800">
              {selectedCategory === "all" ? "Все статьи" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-500">
              {filteredArticles.length} статей
            </span>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === "all" ? regularArticles : filteredArticles).map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{article.categoryName}</Badge>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-open-sans text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Icon name="User" size={12} className="mr-1" />
                        {article.author}
                      </div>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="FileText" size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Статьи не найдены
              </h3>
              <p className="text-gray-500">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </section>

        {/* Подписка на новости */}
        <section className="bg-gradient-to-r from-primary-50 to-green-100 rounded-2xl p-8 mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-4">
              Подпишитесь на наши новости
            </h3>
            <p className="text-gray-600 font-open-sans mb-6 max-w-2xl mx-auto">
              Получайте свежие рецепты, полезные советы и новости фермы прямо на почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Ваш email"
                className="flex-1"
              />
              <Button className="bg-primary hover:bg-primary-600">
                <Icon name="Mail" size={16} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;