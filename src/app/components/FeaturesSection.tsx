import React from 'react';
import { motion } from 'motion/react';
import { BadgeDollarSign, MessageCircle, MousePointerClick, Smartphone } from 'lucide-react';

const features = [
  {
    icon: BadgeDollarSign,
    title: 'Sem Mensalidade',
    description: 'Comece a vender online sem pagar nada. Sem taxas escondidas, sem surpresas.',
    color: 'from-[#008060] to-[#004c3f]',
    bgLight: 'bg-[#e6f7ef]',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integrado',
    description: 'Seus clientes pedem direto pelo WhatsApp com um clique. Simples e direto.',
    color: 'from-[#25D366] to-[#128C7E]',
    bgLight: 'bg-[#e6f7ef]',
  },
  {
    icon: MousePointerClick,
    title: 'Facil de Usar',
    description: 'Sem complicacao. Configure seu catalogo em poucos minutos, sem conhecimento tecnico.',
    color: 'from-[#95BF47] to-[#7da638]',
    bgLight: 'bg-[#f7fee7]',
  },
  {
    icon: Smartphone,
    title: 'Design Responsivo',
    description: 'Funciona perfeitamente no celular, tablet e computador. Bonito em qualquer tela.',
    color: 'from-[#008060] to-[#95BF47]',
    bgLight: 'bg-[#e6f7ef]',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f0fdf4]" id="vantagens">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-white text-[#008060] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#008060]/10">
              Vantagens
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-3 tracking-tight">
              Por que escolher nosso Catalogo?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              A forma mais simples e profissional de vender online
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-7 hover:shadow-xl hover:shadow-[#008060]/5 transition-all duration-500 border border-[#e2e8f0] hover:border-[#008060]/20 relative overflow-hidden"
            >
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#e6f7ef] to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className={`inline-flex p-3.5 rounded-2xl ${feature.bgLight} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`bg-gradient-to-br ${feature.color} p-2 rounded-xl`}>
                  <feature.icon className="size-5 text-white" />
                </div>
              </div>

              <h3 className="font-bold text-[#1a1a1a] text-lg mb-2 group-hover:text-[#008060] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
