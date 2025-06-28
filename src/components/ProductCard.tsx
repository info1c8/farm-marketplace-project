import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import RatingDisplay from "./RatingDisplay";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
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
            {product.isPreorder && (
              <Badge
                variant="outline"
                className="bg-white border-primary text-primary"
              >
                Предзаказ
              </Badge>
            )}
          </div>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
              <Badge variant="outline" className="bg-white text-gray-800">
                Нет в наличии
              </Badge>
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-2">
          <div className="text-2xl font-bold text-primary">
            {product.price} ₽
            <span className="text-sm text-gray-500 font-normal">
              /{product.unit}
            </span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>

        <Link 
          to={`/farmers/${product.farmer.id}`}
          className="flex items-center text-gray-600 text-sm mb-3 hover:text-primary transition-colors"
        >
          <Icon name="User" size={14} className="mr-1" />
          Фермер: {product.farmer.name}
        </Link>

        <RatingDisplay
          rating={product.rating}
          reviewCount={product.reviewCount}
          size="small"
        />

        {product.isPreorder && product.availableFrom && (
          <div className="flex items-center text-orange-600 text-sm mt-2">
            <Icon name="Clock" size={14} className="mr-1" />
            Доступно с {product.availableFrom}
          </div>
        )}

        <Button
          className="w-full mt-4 bg-primary hover:bg-primary-600"
          disabled={!product.inStock && !product.isPreorder}
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          {product.isPreorder ? "Предзаказать" : "В корзину"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;