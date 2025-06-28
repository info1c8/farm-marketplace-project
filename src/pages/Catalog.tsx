import { useState, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import ProductFilters from "@/components/ProductFilters";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const Catalog = () => {
  const { categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "name");
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 2000] as [number, number],
    isOrganic: false,
    isSeasonal: false,
    inStock: false,
    farmers: []
  });

  const currentCategory = categories.find(cat => cat.slug === categorySlug);
  const isMainCatalog = !categorySlug;

  // Фильтрация и сортировка продуктов
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Фильтр по категории
    if (currentCategory) {
      filtered = filtered.filter(product => product.category === currentCategory.id);
    }

    // Поиск
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Применение фильтров
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    if (filters.farmers.length > 0) {
      filtered = filtered.filter(product => filters.farmers.includes(product.farmer.id));
    }

    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    if (filters.isOrganic) {
      filtered = filtered.filter(product => product.isOrganic);
    }

    if (filters.isSeasonal) {
      filtered = filtered.filter(product => product.isSeasonal);
    }

    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Сортировка
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [currentCategory, searchQuery, filters, sortBy]);

  const availableCategories = categories.map(cat => ({ id: cat.id, name: cat.name }));
  const availableFarmers = Array.from(
    new Set(products.map(p => p.farmer.id))
  ).map(farmerId => {
    const farmer = products.find(p => p.farmer.id === farmerId)?.farmer;
    return { id: farmerId, name: farmer?.name || "" };
  });

  const maxPrice = Math.max(...products.map(p => p.price));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary">Главная</a>
          <Icon name="ChevronRight" size={14} />
          <a href="/catalog" className="hover:text-primary">Каталог</a>
          {currentCategory && (
            <>
              <Icon name="ChevronRight" size={14} />
              <span className="text-gray-800">{currentCategory.name}</span>
            </>
          )}
        </nav>

        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
            {currentCategory ? currentCategory.name : "Каталог товаров"}
          </h1>
          {currentCategory && (
            <p className="text-lg text-gray-600 font-open-sans">
              {currentCategory.description}
            </p>
          )}
        </div>

        {/* Показать категории если это главная страница каталога */}
        {isMainCatalog && (
          <div className="mb-12">
            <h2 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">
              Категории товаров
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        )}

        {/* Поиск и сортировка */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <Input
              placeholder="Поиск товаров..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Icon name="Search" size={16} />
            </Button>
          </form>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">По названию</SelectItem>
              <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
              <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
              <SelectItem value="rating">По рейтингу</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Основной контент */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <div className="lg:col-span-1">
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              availableCategories={availableCategories}
              availableFarmers={availableFarmers}
              maxPrice={maxPrice}
            />
          </div>

          {/* Список товаров */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Найдено товаров: {filteredProducts.length}
              </p>
            </div>
            
            <ProductGrid 
              products={filteredProducts} 
              showTitle={false}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;