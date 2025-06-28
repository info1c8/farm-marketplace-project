import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RatingDisplay from "@/components/RatingDisplay";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
            <Link to="/catalog" className="text-primary hover:underline">
              Вернуться в каталог
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Дополнительные изображения (для демонстрации)
  const productImages = [
    product.image,
    product.image,
    product.image
  ];

  const reviews = [
    {
      id: "1",
      userName: "Мария К.",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b332752c?w=50&h=50&fit=crop&crop=face",
      rating: 5,
      comment: "Отличный продукт! Очень свежий и вкусный. Рекомендую!",
      date: "2024-01-15"
    },
    {
      id: "2",
      userName: "Алексей П.",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      rating: 4,
      comment: "Хорошее качество, быстрая доставка. Буду заказывать еще.",
      date: "2024-01-10"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-primary">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to="/catalog" className="hover:text-primary">Каталог</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Изображения */}
          <div>
            <div className="mb-4">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о товаре */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.isOrganic && (
                <Badge className="bg-green-500 hover:bg-green-500">
                  <Icon name="Leaf" size={12} className="mr-1" />
                  Органик
                </Badge>
              )}
              {product.isSeasonal && (
                <Badge className="bg-accent hover:bg-accent">
                  <Icon name="Calendar" size={12} className="mr-1" />
                  Сезонное
                </Badge>
              )}
              {product.inStock ? (
                <Badge variant="outline" className="border-green-500 text-green-600">
                  <Icon name="Check" size={12} className="mr-1" />
                  В наличии
                </Badge>
              ) : (
                <Badge variant="outline" className="border-red-500 text-red-600">
                  <Icon name="X" size={12} className="mr-1" />
                  Нет в наличии
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <RatingDisplay
                rating={product.rating}
                reviewCount={product.reviewCount}
                size="large"
              />
            </div>

            <div className="text-3xl font-bold text-primary mb-6">
              {product.price} ₽
              <span className="text-lg text-gray-500 font-normal">
                /{product.unit}
              </span>
            </div>

            <p className="text-gray-600 font-open-sans mb-6">
              {product.description}
            </p>

            {/* Фермер */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={product.farmer.avatar}
                    alt={product.farmer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{product.farmer.name}</h4>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {product.farmer.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Добавление в корзину */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Icon name="Minus" size={16} />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={!product.inStock}
                >
                  <Icon name="Plus" size={16} />
                </Button>
              </div>
              <Button
                className="flex-1 bg-primary hover:bg-primary-600"
                disabled={!product.inStock}
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Добавить в корзину
              </Button>
            </div>

            {/* Теги */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({reviews.length})</TabsTrigger>
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Подробное описание</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Характеристики:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Категория: {product.category}</li>
                    <li>• Фермер: {product.farmer.name}</li>
                    <li>• Регион: {product.farmer.location}</li>
                    {product.isOrganic && <li>• Органическое производство</li>}
                    {product.isSeasonal && <li>• Сезонный продукт</li>}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{review.userName}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <RatingDisplay rating={review.rating} showCount={false} size="small" />
                        <p className="text-gray-600 mt-2">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="delivery" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Условия доставки</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Экспресс-доставка</h4>
                    <p className="text-gray-600">Доставка в течение 2-4 часов - от 200 ₽</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Стандартная доставка</h4>
                    <p className="text-gray-600">Доставка на следующий день - от 100 ₽ (бесплатно от 2000 ₽)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Самовывоз</h4>
                    <p className="text-gray-600">Бесплатно из 50+ пунктов выдачи</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;