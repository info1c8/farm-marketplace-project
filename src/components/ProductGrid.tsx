import ProductCard from "./ProductCard";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  title?: string;
  showTitle?: boolean;
}

const ProductGrid = ({ products, title = "Продукты", showTitle = true }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Товары не найдены</p>
      </div>
    );
  }

  return (
    <div>
      {showTitle && (
        <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">
          {title}
        </h2>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;