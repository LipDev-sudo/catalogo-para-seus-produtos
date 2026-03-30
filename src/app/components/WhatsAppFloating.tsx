import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = 'https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20cat%C3%A1logo%20online%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ delay: 2, duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-xl border border-[#e2e8f0] px-4 py-3 max-w-[200px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-0.5 transition-colors"
              aria-label="Fechar"
            >
              <X className="size-3 text-gray-500" />
            </button>
            <p className="text-sm font-medium text-[#1a1a1a]">Fale conosco!</p>
            <p className="text-xs text-gray-500 mt-0.5">Tire suas duvidas pelo WhatsApp</p>
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-[#e2e8f0] transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#1EBE5A] transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Fale pelo WhatsApp"
      >
        <MessageCircle className="size-7" />

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20 pointer-events-none" />

        {/* Second pulse ring (delayed) */}
        <span className="absolute inset-0 rounded-full animate-pulse bg-[#25D366] opacity-10 pointer-events-none" />
      </motion.a>
    </div>
  );
};
