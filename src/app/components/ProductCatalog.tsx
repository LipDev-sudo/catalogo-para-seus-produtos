import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Tag } from 'lucide-react';
import { products, generateWhatsAppLink } from '../data/catalog';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ProductCatalog: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white" id="produtos">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Navegue por nosso catálogo e escolha seus produtos favoritos.
            Peça diretamente pelo WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Tag className="size-3" />
                  {product.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-green-600">
                    R$ {product.price.toFixed(2)}
                  </div>
                </div>

                <a
                  href={generateWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white gap-2"
                  >
                    <MessageCircle className="size-4" />
                    Pedir no WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
