import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import CartIcon from "./ui/cart-icon";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-dior text-2xl font-bold tracking-wider">
              MOMENTUM
            </span>
          </Link>
        </div>

        <nav className={`${isMenuOpen ? "block absolute top-16 left-0 w-full bg-white animate-fade-in p-4 shadow-md z-50" : "hidden"} md:block`}>
          <ul className={`${isMenuOpen ? "flex flex-col space-y-2" : "flex items-center gap-6"}`}>
            <li>
              <Link to="/" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-lg font-medium hover:text-gray-600 transition-colors md:hidden">
                Корзина
              </Link>
            </li>
          </ul>
        </nav>

        <CartIcon itemCount={totalItems} />
      </div>
    </header>
  );
};

export default Header;
