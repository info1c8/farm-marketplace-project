import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sprout" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-montserrat font-bold text-gray-800">
              ФермаМаркет
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors font-open-sans"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors font-open-sans"
            >
              Фермеры
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors font-open-sans"
            >
              Продукты
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors font-open-sans"
            >
              Доставка
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button className="bg-primary hover:bg-primary-600">Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
