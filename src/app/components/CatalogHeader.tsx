import { MessageCircle, Search } from 'lucide-react';
import { generalWhatsAppLink } from '../data/catalog';
import { BrandMark } from './BrandMark';

interface CatalogHeaderProps { query: string; onQueryChange: (value: string) => void }

export function CatalogHeader({ query, onQueryChange }: CatalogHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ded9d1] bg-[#fdfcf9]/95 backdrop-blur-lg">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c4f38] focus-visible:ring-offset-4"><BrandMark /></a>
        <label className="relative ml-auto hidden w-full max-w-sm md:block">
          <span className="sr-only">Buscar no catálogo</span>
          <Search aria-hidden="true" className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#716c65]" />
          <input type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar peça, material ou categoria" className="h-10 w-full rounded-full border border-[#d8d2ca] bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#9c4f38] focus:ring-2 focus:ring-[#9c4f38]/20" />
        </label>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 lg:flex">
          <a href="#catalogo" className="nav-link">Peças</a><a href="#como-funciona" className="nav-link">Como funciona</a>
        </nav>
        <a href={generalWhatsAppLink} target="_blank" rel="noreferrer" className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#272421] px-4 text-sm font-semibold text-white transition hover:bg-[#9c4f38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c4f38] focus-visible:ring-offset-2">
          <MessageCircle aria-hidden="true" className="size-4" /><span className="hidden sm:inline">Conversar</span><span className="sr-only sm:hidden">Conversar pelo WhatsApp</span>
        </a>
      </div>
      <div className="border-t border-[#ece8e2] px-4 py-2.5 md:hidden">
        <label className="relative mx-auto block max-w-7xl">
          <span className="sr-only">Buscar no catálogo</span>
          <Search aria-hidden="true" className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#716c65]" />
          <input type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar no catálogo" className="h-11 w-full rounded-full border border-[#d8d2ca] bg-white pl-10 pr-4 text-base outline-none transition focus:border-[#9c4f38] focus:ring-2 focus:ring-[#9c4f38]/20" />
        </label>
      </div>
    </header>
  );
}
