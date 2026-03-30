import React from 'react';
import { Link } from 'react-router';
import { Store, Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5511999999999';

  return (
    <footer className="bg-[#004c3f] text-gray-300" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="rounded-xl bg-[#008060] p-2">
                <Store className="size-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TechStore</span>
            </div>
            <p className="text-sm mb-4 text-gray-400 leading-relaxed">
              Sua loja de tecnologia com pedidos pelo WhatsApp e gestao inteligente de produtos.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#008060] text-gray-400 hover:text-white transition-all">
                <Facebook className="size-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#008060] text-gray-400 hover:text-white transition-all">
                <Instagram className="size-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-[#008060] text-gray-400 hover:text-white transition-all">
                <Twitter className="size-4" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#25D366] text-gray-400 hover:text-white transition-all">
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rapidos</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#95BF47] transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-400 hover:text-[#95BF47] transition-colors">
                  Painel Admin
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#95BF47] transition-colors">
                  Sobre Nos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95BF47] transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-4">Categorias</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95BF47] transition-colors">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95BF47] transition-colors">
                  Computadores
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95BF47] transition-colors">
                  Audio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#95BF47] transition-colors">
                  Cameras
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="about">
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#25D366] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#25D366]/10 transition-colors">
                    <MessageCircle className="size-4" />
                  </div>
                  (11) 98765-4321
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="p-2 rounded-lg bg-white/5">
                  <Mail className="size-4" />
                </div>
                contato@techstore.com.br
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin className="size-4" />
                </div>
                Sao Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p className="text-gray-400">2026 TechStore. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500">
            Sistema de e-commerce com WhatsApp integrado e gestao inteligente
          </p>
        </div>
      </div>
    </footer>
  );
};
