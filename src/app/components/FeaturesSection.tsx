import React from 'react';
import { motion } from 'motion/react';
import { Globe, Smartphone, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Site Profissional',
    description: 'Vitrine digital elegante e moderna para seus produtos',
  },
  {
    icon: Smartphone,
    title: 'Funciona no Celular',
    description: 'Totalmente responsivo, perfeito para qualquer dispositivo',
  },
  {
    icon: Zap,
    title: 'Rápido e Acessível',
    description: 'Seus clientes compram com poucos cliques',
  },
  {
    icon: Shield,
    title: 'Simples e Seguro',
    description: 'Atendimento direto pelo WhatsApp, sem complicação',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que usar um Catálogo Online?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A forma mais simples e profissional de vender online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="inline-flex p-3 rounded-lg bg-green-100 mb-4">
                <feature.icon className="size-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
