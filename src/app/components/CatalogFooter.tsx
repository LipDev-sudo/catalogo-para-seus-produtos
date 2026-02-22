import React from 'react';
import { MessageCircle, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export const CatalogFooter: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5511999999999';

  return (
    <footer className="bg-gray-900 text-gray-300" id="contato">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Minha Loja</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Sua loja online com catálogo profissional. Venda de forma simples e direta pelo WhatsApp.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-green-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#produtos" className="hover:text-green-500 transition-colors">
                  Ver Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-green-500 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MessageCircle className="size-4 mt-0.5 flex-shrink-0 text-green-500" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <span>contato@minhaloja.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 Minha Loja. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500">
            Catálogo online profissional com pedidos via WhatsApp
          </p>
        </div>
      </div>
    </footer>
  );
};
