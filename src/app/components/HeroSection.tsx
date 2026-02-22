import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5511999999999?text=Olá!%20Quero%20comprar%20pelo%20catálogo';

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="size-4" />
              <span>Compre direto pelo WhatsApp</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sua Loja Online
              <span className="block text-green-600">Pronta para Vender</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Uma vitrine digital profissional para mostrar seus produtos.
              Seus clientes podem pedir facilmente pelo WhatsApp com apenas um clique.
            </p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white gap-2 text-lg px-8 py-6 h-auto"
              >
                <MessageCircle className="size-5" />
                Comprar pelo WhatsApp
              </Button>
            </a>

            <p className="text-sm text-gray-500 mt-4">
              ✓ Simples e Rápido &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Sem Complicação &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Atendimento Direto
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
