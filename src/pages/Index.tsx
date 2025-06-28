import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedFarmers from "@/components/FeaturedFarmers";
import SeasonalProducts from "@/components/SeasonalProducts";
import OrganicSection from "@/components/OrganicSection";
import DeliveryOptions from "@/components/DeliveryOptions";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

const Index = () => {
  // Показываем только первые 6 категорий на главной
  const featuredCategories = categories.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Популярные категории */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-800 mb-4">
              Популярные категории
            </h2>
            <p className="text-lg text-gray-600 font-open-sans max-w-2xl mx-auto">
              Выберите категорию и найдите свежие продукты от лучших фермеров
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <SeasonalProducts />
      <OrganicSection />
      <FeaturedFarmers />
      <DeliveryOptions />
      <Footer />
    </div>
  );
};

export default Index;