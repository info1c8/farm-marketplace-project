import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  isOrganic: boolean;
  isSeasonal: boolean;
  inStock: boolean;
  farmers: string[];
}

interface ProductFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  availableCategories: { id: string; name: string }[];
  availableFarmers: { id: string; name: string }[];
  maxPrice: number;
}

const ProductFilters = ({
  filters,
  onFiltersChange,
  availableCategories,
  availableFarmers,
  maxPrice
}: ProductFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilters = (updates: Partial<FilterOptions>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const clearFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: [0, maxPrice],
      isOrganic: false,
      isSeasonal: false,
      inStock: false,
      farmers: []
    });
  };

  const activeFiltersCount = 
    filters.categories.length +
    filters.farmers.length +
    (filters.isOrganic ? 1 : 0) +
    (filters.isSeasonal ? 1 : 0) +
    (filters.inStock ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice ? 1 : 0);

  return (
    <Card className="sticky top-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-montserrat">Фильтры</CardTitle>
          <div className="flex items-center gap-2">
            {activeFiltersCount > 0 && (
              <Badge variant="secondary">{activeFiltersCount}</Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="lg:hidden"
            >
              <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
            </Button>
          </div>
        </div>
        {activeFiltersCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="w-full"
          >
            <Icon name="X" size={14} className="mr-1" />
            Очистить фильтры
          </Button>
        )}
      </CardHeader>

      <CardContent className={`space-y-6 ${!isExpanded ? 'hidden lg:block' : ''}`}>
        {/* Ценовой диапазон */}
        <div>
          <h4 className="font-medium mb-3">Цена, ₽</h4>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
            max={maxPrice}
            step={10}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{filters.priceRange[0]} ₽</span>
            <span>{filters.priceRange[1]} ₽</span>
          </div>
        </div>

        {/* Категории */}
        <div>
          <h4 className="font-medium mb-3">Категории</h4>
          <div className="space-y-2">
            {availableCategories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={filters.categories.includes(category.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateFilters({
                        categories: [...filters.categories, category.id]
                      });
                    } else {
                      updateFilters({
                        categories: filters.categories.filter(c => c !== category.id)
                      });
                    }
                  }}
                />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Особенности */}
        <div>
          <h4 className="font-medium mb-3">Особенности</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="organic"
                checked={filters.isOrganic}
                onCheckedChange={(checked) => updateFilters({ isOrganic: !!checked })}
              />
              <label htmlFor="organic" className="text-sm">Органические</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="seasonal"
                checked={filters.isSeasonal}
                onCheckedChange={(checked) => updateFilters({ isSeasonal: !!checked })}
              />
              <label htmlFor="seasonal" className="text-sm">Сезонные</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="inStock"
                checked={filters.inStock}
                onCheckedChange={(checked) => updateFilters({ inStock: !!checked })}
              />
              <label htmlFor="inStock" className="text-sm">В наличии</label>
            </div>
          </div>
        </div>

        {/* Фермеры */}
        <div>
          <h4 className="font-medium mb-3">Фермеры</h4>
          <div className="space-y-2">
            {availableFarmers.map((farmer) => (
              <div key={farmer.id} className="flex items-center space-x-2">
                <Checkbox
                  id={farmer.id}
                  checked={filters.farmers.includes(farmer.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      updateFilters({
                        farmers: [...filters.farmers, farmer.id]
                      });
                    } else {
                      updateFilters({
                        farmers: filters.farmers.filter(f => f !== farmer.id)
                      });
                    }
                  }}
                />
                <label
                  htmlFor={farmer.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {farmer.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;