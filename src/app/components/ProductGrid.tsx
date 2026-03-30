import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { Button } from './ui/button';
import { ShoppingCart, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = ['Todos', ...Array.from(new Set(products.map((p) => p.category)))];

export const ProductGrid: React.FC = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-[#FAFAFA]" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#e6f7ef] text-[#008060] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#008060]/10">
            Catalogo
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-3 tracking-tight">Nossos Produtos</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore nossa selecao de produtos de alta qualidade com
            precos competitivos e entrega garantida.
          </p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-xl hover:shadow-[#008060]/5 hover:border-[#008060]/20 transition-all duration-500"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden aspect-square bg-[#FAFAFA]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#008060] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm border border-[#e2e8f0]">
                    <Tag className="size-3" />
                    {product.category}
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-bold mb-2 text-[#1a1a1a] hover:text-[#008060] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-[#008060]">
                      R$ {product.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {product.stock} unidades
                    </div>
                  </div>
                  <Button
                    onClick={() => addToCart(product)}
                    size="sm"
                    className="gap-2 bg-[#008060] hover:bg-[#004c3f] text-white rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <ShoppingCart className="size-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
