import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido';

  return (
    <section className="relative bg-gradient-to-br from-[#e6f7ef] via-white to-[#f0fdf4] py-20 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#008060_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.04]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#e6f7ef] text-[#008060] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#008060]/10">
              <ShoppingBag className="size-4" />
              <span>Loja Virtual Automatizada</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Venda Online com
              <span className="block text-[#008060]">Pagamento Automatico</span>
            </h1>

            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Sistema completo de e-commerce com carrinho inteligente, checkout
              automatizado e painel administrativo. Faca seu pedido pelo WhatsApp!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-[#008060] hover:bg-[#004c3f] text-white shadow-lg shadow-[#008060]/25 hover:shadow-xl px-8">
                  <MessageCircle className="size-5" />
                  Faca seu Pedido
                  <ArrowRight className="size-5" />
                </Button>
              </a>
              <a href="#products">
                <Button size="lg" variant="outline" className="border-[#e2e8f0] hover:border-[#008060] hover:text-[#008060] px-8">
                  Ver Produtos
                </Button>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-[#008060]">24/7</div>
                <div className="text-sm text-gray-500">Disponivel</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-[#008060]">100%</div>
                <div className="text-sm text-gray-500">Automatico</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-[#95BF47]">WhatsApp</div>
                <div className="text-sm text-gray-500">Integrado</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
