import { MessageCircle, SearchX } from 'lucide-react';
import { useState } from 'react';
import { filterProducts, generateWhatsAppLink, products } from '../data/catalog';

const categories = ['Todos', 'Café', 'Mesa', 'Decoração'];
interface ProductCatalogProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function ProductCatalog({ query, onQueryChange }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filteredProducts = filterProducts(products, query, activeCategory);
  return (
    <section className="py-16 md:py-24" id="catalogo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-[#d8d2ca] pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="section-kicker">Ateliê Aurora de Barro</p><h2 className="section-title">Peças para mesa e casa</h2><p className="mt-3 max-w-2xl text-[#625d57]">Cada item representa uma peça demonstrativa. Acabamentos e disponibilidade seriam confirmados diretamente com o ateliê.</p></div>
          <p aria-live="polite" className="text-sm font-medium text-[#716c65]">{filteredProducts.length} {filteredProducts.length === 1 ? 'peça encontrada' : 'peças encontradas'}</p>
        </div>
        <div className="my-7 flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar por categoria">
          {categories.map((category) => {
            const selected = activeCategory === category;
            return <button key={category} type="button" aria-pressed={selected} onClick={() => setActiveCategory(category)} className={`filter-pill ${selected ? 'filter-pill-active' : ''}`}>{category}</button>;
          })}
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group min-w-0">
                <div className="overflow-hidden rounded-[1.25rem] border border-[#ded9d1] bg-white"><img src={product.image} alt={product.name} width="960" height="960" loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transition-none" /></div>
                <div className="px-1 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div><p className="text-xs font-bold uppercase tracking-[.14em] text-[#9c4f38]">{product.category}</p><h3 className="mt-1 text-xl font-semibold tracking-[-.025em]">{product.name}</h3></div>
                    <p className="shrink-0 text-right text-sm text-[#716c65]">a partir de<strong className="block text-lg text-[#272421]">R$ {product.price.toFixed(2).replace('.', ',')}</strong></p>
                  </div>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#625d57]">{product.description}</p>
                  <dl className="mt-4 grid grid-cols-2 gap-3 border-y border-[#ded9d1] py-3 text-xs">
                    <div><dt className="text-[#6f6a63]">Material</dt><dd className="mt-1 font-semibold text-[#47433f]">{product.material}</dd></div>
                    <div><dt className="text-[#6f6a63]">Prazo demonstrativo</dt><dd className="mt-1 font-semibold text-[#47433f]">{product.leadTime}</dd></div>
                  </dl>
                  <a href={generateWhatsAppLink(product)} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#3f3a35] px-4 text-sm font-semibold transition hover:bg-[#272421] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c4f38] focus-visible:ring-offset-2"><MessageCircle aria-hidden="true" className="size-4" />Consultar esta peça</a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-[#cfc7bd] bg-white px-6 py-16 text-center">
            <SearchX aria-hidden="true" className="mx-auto size-8 text-[#9c4f38]" /><h3 className="mt-4 text-xl font-semibold">Nenhuma peça por aqui</h3><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#716c65]">Tente outro termo ou escolha “Todos” para voltar ao catálogo completo.</p><button type="button" onClick={() => { setActiveCategory('Todos'); onQueryChange(''); }} className="mt-5 text-sm font-bold text-[#9c4f38] underline underline-offset-4">Mostrar todas as peças</button>
          </div>
        )}
      </div>
    </section>
  );
}
