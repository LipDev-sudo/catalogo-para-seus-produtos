import { ExternalLink } from 'lucide-react';
import { BrandMark } from './BrandMark';

export function CatalogFooter() {
  return (
    <footer className="bg-[#211e1b] text-white"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end"><div><BrandMark inverse /><p className="mt-4 max-w-md text-sm leading-6 text-white/60">Demonstração funcional de um catálogo para pequenos ateliês. Ateliê, peças, preços e prazos são fictícios.</p></div><nav aria-label="Links externos" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a className="footer-link" href="https://github.com/LipDev-sudo/pratele" target="_blank" rel="noreferrer">Código <ExternalLink aria-hidden="true" className="size-3.5" /></a><a className="footer-link" href="https://lipdev.vercel.app/" target="_blank" rel="noreferrer">Portfólio <ExternalLink aria-hidden="true" className="size-3.5" /></a><a className="footer-link" href="#inicio">Voltar ao início</a></nav></div>
      <p className="pt-6 text-xs text-white/60">© 2026 LipDev. Projeto demonstrativo.</p>
    </div></footer>
  );
}
