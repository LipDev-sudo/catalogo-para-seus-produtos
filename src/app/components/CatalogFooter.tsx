import React from 'react';
import { MessageCircle, Mail, MapPin, Instagram, Facebook, ShoppingBag, Heart } from 'lucide-react';

export const CatalogFooter: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5511999999999';

  return (
    <footer className="bg-[#004c3f] text-gray-300" id="contato">
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="rounded-xl bg-[#008060] p-2">
                <ShoppingBag className="size-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Minha Loja</span>
            </a>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed max-w-xs">
              Sua loja online com catalogo profissional. Venda de forma simples e direta pelo WhatsApp.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-[#008060] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-[#008060] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Links Rapidos</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Ver Produtos', href: '#produtos' },
                { label: 'Vantagens', href: '#vantagens' },
                { label: 'Contato', href: '#contato' },
                { label: 'Sobre Nos', href: '#' },
                { label: 'Politica de Privacidade', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#95BF47] text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#95BF47] rounded transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#25D366] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#25D366]/10 transition-colors">
                    <MessageCircle className="size-4" />
                  </div>
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="p-2 rounded-lg bg-white/5">
                  <Mail className="size-4" />
                </div>
                contato@minhaloja.com.br
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin className="size-4" />
                </div>
                Sao Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>2026 Minha Loja. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="size-3.5 fill-red-500 text-red-500" /> por{' '}
            <a href="#" className="text-[#95BF47] font-semibold hover:underline">
              LipDev.BR
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
