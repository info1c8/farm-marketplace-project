import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Каталог", href: "/catalog" },
    { name: "Фермеры", href: "/farmers" },
    { name: "О нас", href: "/about" },
    { name: "Как купить", href: "/how-to-buy" },
    { name: "Акции", href: "/promotions" },
    { name: "Блог", href: "/blog" },
    { name: "Контакты", href: "/contacts" }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sprout" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-montserrat font-bold text-gray-800">
              ФермаМаркет
            </h1>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-open-sans transition-colors text-sm ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Действия */}
          <div className="flex items-center space-x-4">
            {/* Поиск */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="Search" size={20} />
            </Button>

            {/* Корзина */}
            <Button variant="ghost" size="sm" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Профиль */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="User" size={20} />
            </Button>

            {/* Вход */}
            <Button className="bg-primary hover:bg-primary-600 hidden md:flex">
              Войти
            </Button>

            {/* Мобильное меню */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-lg font-open-sans transition-colors ${
                        isActive(item.href)
                          ? "text-primary font-semibold"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t pt-4 space-y-4">
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon name="Search" size={20} className="mr-2" />
                      Поиск
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon name="User" size={20} className="mr-2" />
                      Профиль
                    </Button>
                    <Button className="w-full bg-primary hover:bg-primary-600">
                      Войти
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;