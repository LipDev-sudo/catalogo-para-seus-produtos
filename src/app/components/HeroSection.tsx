import { ArrowDown, CircleCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="inicio" className="overflow-hidden border-b border-[#ded9d1] bg-[#fdfcf9]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#9c4f38]">Catálogo demonstrativo · Ateliê Aurora de Barro</p>
          <h1 className="max-w-xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.055em] text-[#272421] sm:text-6xl lg:text-7xl">Seu trabalho à vista.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a54]">Uma seleção fictícia de cerâmicas autorais, organizada para escolher com calma e conversar sobre cada encomenda pelo WhatsApp.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#catalogo" className="primary-action">Explorar peças <ArrowDown aria-hidden="true" className="size-4" /></a>
            <span className="inline-flex items-center gap-2 text-sm text-[#716c65]"><CircleCheck aria-hidden="true" className="size-4 text-[#617363]" />Valores e prazos são demonstrativos</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl" aria-label="Seleção de cerâmicas do catálogo">
          <div className="grid grid-cols-[1.1fr_.9fr] gap-3 sm:gap-4">
            <img src="/images/products/vaso-caminho.webp" alt="Conjunto de vasos de cerâmica clara sobre pedestal" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" width="960" height="960" fetchPriority="high" />
            <div className="grid gap-3 pt-8 sm:gap-4 sm:pt-12">
              <img src="/images/products/prato-horizonte.webp" alt="Prato artesanal de borda terrosa" className="aspect-square w-full rounded-[1.25rem] object-cover" width="960" height="960" fetchPriority="high" />
              <div className="rounded-[1.25rem] bg-[#b85f43] p-5 text-white sm:p-6"><p className="text-xs font-bold uppercase tracking-[.16em] text-white/75">Pequenos lotes</p><p className="mt-2 text-xl font-semibold leading-tight">Feito à mão, confirmado em conversa.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
