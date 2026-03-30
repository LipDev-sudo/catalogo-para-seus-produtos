import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Cart: React.FC = () => {
  const {
    cart,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCart();

  const total = getTotalPrice();

  const generateWhatsAppOrder = () => {
    const phoneNumber = '5511999999999';
    let message = 'Ola! Gostaria de fazer o seguinte pedido:\n\n';
    cart.forEach((item) => {
      message += `- ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total: R$ ${total.toFixed(2)}*`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 z-50"
          />
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-3">
                <div className="bg-[#e6f7ef] p-2 rounded-xl">
                  <ShoppingBag className="size-5 text-[#008060]" />
                </div>
                <h2 className="text-xl font-bold text-[#1a1a1a]">Carrinho</h2>
              </div>
              <Button
                onClick={toggleCart}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-[#1a1a1a] hover:bg-[#e6f7ef]"
              >
                <X className="size-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <div className="bg-[#e6f7ef] p-6 rounded-full mb-4">
                    <ShoppingBag className="size-12 text-[#008060]/40" />
                  </div>
                  <p className="font-medium text-[#1a1a1a]">Seu carrinho esta vazio</p>
                  <p className="text-sm mt-1">Adicione produtos para comecar</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 bg-[#FAFAFA] p-4 rounded-xl border border-[#e2e8f0]"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-[#e2e8f0]">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[#1a1a1a] mb-1 truncate">
                          {item.name}
                        </h3>
                        <p className="text-[#008060] font-bold mb-2">
                          R$ {item.price.toFixed(2)}
                        </p>

                        <div className="flex items-center gap-2">
                          <Button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            variant="outline"
                            size="icon"
                            className="size-8 border-[#e2e8f0] hover:border-[#008060] hover:text-[#008060] hover:bg-[#e6f7ef]"
                          >
                            <Minus className="size-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold text-[#1a1a1a]">
                            {item.quantity}
                          </span>
                          <Button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            variant="outline"
                            size="icon"
                            className="size-8 border-[#e2e8f0] hover:border-[#008060] hover:text-[#008060] hover:bg-[#e6f7ef]"
                          >
                            <Plus className="size-3" />
                          </Button>
                        </div>
                      </div>

                      <Button
                        onClick={() => removeFromCart(item.id)}
                        variant="ghost"
                        size="icon"
                        className="text-red-400 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-[#e2e8f0] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Total:</span>
                  <span className="text-2xl font-extrabold text-[#008060]">
                    R$ {total.toFixed(2)}
                  </span>
                </div>

                {/* WhatsApp order button */}
                <a
                  href={generateWhatsAppOrder()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white py-3.5 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="size-5" />
                  Finalizar pelo WhatsApp
                </a>

                {/* Regular checkout */}
                <Button className="w-full gap-2 bg-[#008060] hover:bg-[#004c3f] text-white" size="lg">
                  <ShoppingBag className="size-5" />
                  Finalizar Compra
                </Button>

                <p className="text-xs text-center text-gray-400">
                  Pagamento via PIX, Cartao ou pelo WhatsApp
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
