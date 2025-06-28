import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/catalog/${category.slug}`}>
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 font-open-sans mb-3">
            {category.description}
          </p>
          <div className="text-sm text-primary font-medium">
            {category.subcategories.length} подкатегорий
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;