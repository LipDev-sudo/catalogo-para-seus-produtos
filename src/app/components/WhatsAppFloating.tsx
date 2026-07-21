import { MessageCircle } from 'lucide-react';
import { generalWhatsAppLink } from '../data/catalog';

export function WhatsAppFloating() {
  return <a href={generalWhatsAppLink} target="_blank" rel="noreferrer" aria-label="Conversar sobre uma encomenda pelo WhatsApp" className="fixed bottom-4 right-4 z-40 inline-flex size-14 items-center justify-center rounded-full border border-white/30 bg-[#2d6a4f] text-white shadow-lg shadow-black/15 transition hover:bg-[#24583f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c4f38] focus-visible:ring-offset-4 sm:bottom-6 sm:right-6"><MessageCircle aria-hidden="true" className="size-6" /></a>;
}
