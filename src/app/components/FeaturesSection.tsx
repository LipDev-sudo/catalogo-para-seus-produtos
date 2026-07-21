import { MessageCircle, ScanSearch, Smartphone } from 'lucide-react';

const steps = [
  { icon: ScanSearch, number: '01', title: 'Encontre com contexto', description: 'Categoria, material, valor inicial e prazo aparecem antes da conversa.' },
  { icon: MessageCircle, number: '02', title: 'Pergunte pela peça certa', description: 'O WhatsApp abre com o nome do item e a intenção de compra já organizados.' },
  { icon: Smartphone, number: '03', title: 'Continue no seu ritmo', description: 'A experiência prioriza o celular, sem exigir cadastro ou simular um checkout.' },
];

export function FeaturesSection() {
  return (
    <section className="border-y border-[#483f38] bg-[#302b27] py-16 text-white md:py-20" id="como-funciona">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#e2a48f]">Catálogo conversacional</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Da descoberta à conversa, sem passos artificiais.</h2></div>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/15 md:grid-cols-3">
          {steps.map((step) => <li key={step.number} className="bg-[#302b27] p-6 sm:p-8"><div className="flex items-center justify-between"><step.icon aria-hidden="true" className="size-5 text-[#e2a48f]" /><span className="text-xs font-bold tracking-[.18em] text-white/60">{step.number}</span></div><h3 className="mt-8 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-white/70">{step.description}</p></li>)}
        </ol>
      </div>
    </section>
  );
}
