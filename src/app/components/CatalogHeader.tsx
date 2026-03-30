import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Search, Menu, X } from 'lucide-react';

export const CatalogHeader: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = 'https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20cat%C3%A1logo%20online';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="rounded-xl bg-[#008060] p-2 shadow-sm">
            <ShoppingBag className="size-5 text-white" />
          </div>
          <span className="text-xl font-bold text-[#1a1a1a] tracking-tight">
            Minha Loja
          </span>
        </a>

        {/* Search bar - centered, desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-[#e2e8f0] bg-[#FAFAFA] text-sm text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008060]/30 focus:border-[#008060] transition-all"
            />
          </div>
        </div>

        {/* Navigation - desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#produtos" className="text-sm font-medium text-gray-600 hover:text-[#008060] transition-colors">
            Produtos
          </a>
          <a href="#vantagens" className="text-sm font-medium text-gray-600 hover:text-[#008060] transition-colors">
            Vantagens
          </a>
          <a href="#contato" className="text-sm font-medium text-gray-600 hover:text-[#008060] transition-colors">
            Contato
          </a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile search toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 rounded-xl text-gray-500 hover:text-[#008060] hover:bg-[#e6f7ef] transition-colors"
            aria-label="Buscar"
          >
            <Search className="size-5" />
          </button>

          {/* WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#008060] hover:bg-[#004c3f] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-500 hover:text-[#008060] hover:bg-[#e6f7ef] transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 border-b border-[#e2e8f0]">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              autoFocus
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#e2e8f0] bg-[#FAFAFA] text-sm text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008060]/30 focus:border-[#008060] transition-all"
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden px-4 pb-4 border-b border-[#e2e8f0] bg-white">
          <ul className="space-y-1">
            <li>
              <a href="#produtos" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-[#1a1a1a] hover:bg-[#e6f7ef] hover:text-[#008060] transition-colors">
                Produtos
              </a>
            </li>
            <li>
              <a href="#vantagens" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-[#1a1a1a] hover:bg-[#e6f7ef] hover:text-[#008060] transition-colors">
                Vantagens
              </a>
            </li>
            <li>
              <a href="#contato" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-[#1a1a1a] hover:bg-[#e6f7ef] hover:text-[#008060] transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
