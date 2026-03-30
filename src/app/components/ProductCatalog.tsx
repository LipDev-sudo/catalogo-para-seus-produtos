import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Tag, Heart, Eye } from 'lucide-react';
import { products, generateWhatsAppLink } from '../data/catalog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const categories = ['Todos', ...Array.from(new Set(products.map((p) => p.category)))];

export const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]" id="produtos">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-[#e6f7ef] text-[#008060] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#008060]/10">
              Nosso Catalogo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-3 tracking-tight">
              Nossos Produtos
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Navegue por nosso catalogo e peca diretamente pelo WhatsApp!
            </p>
          </motion.div>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#008060] text-white shadow-md shadow-[#008060]/20'
                  : 'bg-white text-[#1a1a1a] hover:bg-[#e6f7ef] hover:text-[#008060] border border-[#e2e8f0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry product grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3, 1280: 4 }}>
          <Masonry gutter="20px">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-xl hover:shadow-[#008060]/5 hover:border-[#008060]/20 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-[#FAFAFA]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-colors" aria-label="Favoritar">
                      <Heart className="size-4 text-[#1a1a1a]" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white transition-colors" aria-label="Ver detalhes">
                      <Eye className="size-4 text-[#1a1a1a]" />
                    </button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#008060] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm border border-[#e2e8f0]">
                    <Tag className="size-3" />
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-[#1a1a1a] text-lg mb-1.5 line-clamp-1 group-hover:text-[#008060] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-extrabold text-[#008060]">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <p className="text-xs text-gray-400 mt-0.5">
                        ou 3x de R$ {(product.price / 3).toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </div>

                  <a
                    href={generateWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#008060] hover:bg-[#004c3f] text-white py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#008060]/20"
                  >
                    <MessageCircle className="size-4" />
                    Pedir pelo WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};
