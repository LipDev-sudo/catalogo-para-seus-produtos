import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const CatalogHeader: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20catálogo%20online';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="rounded-lg bg-green-500 p-2">
            <ShoppingBag className="size-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">Minha Loja</span>
        </a>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button
            size="default"
            className="bg-green-500 hover:bg-green-600 text-white gap-2"
          >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">Fale no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </Button>
        </a>
      </div>
    </header>
  );
};
