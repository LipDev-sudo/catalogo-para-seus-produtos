import React from 'react';
import { Link } from 'react-router';
import { ShoppingCart, Store, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';

export const Header: React.FC = () => {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="rounded-xl bg-[#008060] p-2 shadow-sm">
            <Store className="size-5 text-white" />
          </div>
          <span className="text-xl font-bold text-[#1a1a1a] tracking-tight">TechStore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-[#008060] transition-colors">
            Produtos
          </Link>
          <Link to="/admin" className="text-sm font-medium text-gray-600 hover:text-[#008060] transition-colors">
            Painel Admin
          </Link>
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-[#008060] transition-colors">
            Sobre
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#008060] transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-[#008060] hover:bg-[#e6f7ef]"
          >
            <Search className="size-5" />
          </Button>

          <Button
            onClick={toggleCart}
            variant="outline"
            size="icon"
            className="relative border-[#e2e8f0] hover:border-[#008060] hover:text-[#008060] hover:bg-[#e6f7ef]"
          >
            <ShoppingCart className="size-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 size-5 rounded-full bg-[#008060] text-white text-xs flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
