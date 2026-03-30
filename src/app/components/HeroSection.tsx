import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles, ArrowRight, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20criar%20meu%20cat%C3%A1logo';

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#008060_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#e6f7ef] text-[#008060] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#008060]/10">
              <Sparkles className="size-4" />
              <span>Novo! Catalogo Digital Profissional</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              Monte seu Catalogo{' '}
              <span className="text-[#008060] relative">
                Profissional
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="#95BF47" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg leading-relaxed">
              Crie uma vitrine digital bonita e moderna para seus produtos.
              Seus clientes pedem direto pelo WhatsApp, sem complicacao.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center gap-2.5 bg-[#008060] hover:bg-[#004c3f] text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-lg shadow-[#008060]/25 hover:shadow-xl hover:shadow-[#008060]/30 transition-all duration-300 w-full sm:w-auto">
                  <MessageCircle className="size-5" />
                  Criar Meu Catalogo
                  <ArrowRight className="size-5" />
                </button>
              </a>
              <a href="#produtos">
                <button className="flex items-center justify-center gap-2 border-2 border-[#e2e8f0] hover:border-[#008060] text-[#1a1a1a] hover:text-[#008060] text-lg font-semibold px-8 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto">
                  Ver Produtos
                </button>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#008060] to-[#95BF47] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-3.5 fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <span>+500 lojistas confiam</span>
              </div>
            </div>
          </motion.div>

          {/* Right - product grid mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Phone frame mockup */}
              <div className="bg-white rounded-3xl p-6 border border-[#e2e8f0] shadow-2xl shadow-[#008060]/5">
                {/* Mockup header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-[#95BF47]" />
                  <div className="flex-1 bg-[#FAFAFA] rounded-full h-6 mx-4 border border-[#e2e8f0]" />
                </div>

                {/* Mini product grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Bolsa Premium', price: 'R$ 189,90', color: 'from-[#e6f7ef] to-[#d1fae5]' },
                    { name: 'Vestido Floral', price: 'R$ 149,90', color: 'from-[#f0fdf4] to-[#dcfce7]' },
                    { name: 'Tenis Branco', price: 'R$ 299,90', color: 'from-[#ecfdf5] to-[#d1fae5]' },
                    { name: 'Oculos de Sol', price: 'R$ 129,90', color: 'from-[#f7fee7] to-[#ecfccb]' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      className="bg-white rounded-2xl p-3 shadow-sm border border-[#e2e8f0] hover:shadow-md hover:border-[#008060]/20 transition-all"
                    >
                      <div className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} mb-2 flex items-center justify-center`}>
                        <ShoppingBagIcon />
                      </div>
                      <p className="text-xs font-semibold text-[#1a1a1a] truncate">{item.name}</p>
                      <p className="text-xs font-bold text-[#008060]">{item.price}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Mockup WhatsApp bar */}
                <div className="mt-4 bg-[#008060] rounded-xl py-2.5 px-4 flex items-center justify-center gap-2 text-white text-sm font-semibold">
                  <MessageCircle className="size-4" />
                  Pedir pelo WhatsApp
                </div>
              </div>

              {/* Decorative floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#95BF47] text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              >
                Gratis!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function ShoppingBagIcon() {
  return (
    <svg className="size-8 text-[#008060]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  );
}
