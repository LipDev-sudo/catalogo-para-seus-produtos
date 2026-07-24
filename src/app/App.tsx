import { useState } from 'react';
import { CatalogFooter } from './components/CatalogFooter';
import { CatalogHeader } from './components/CatalogHeader';
import { FeaturesSection } from './components/FeaturesSection';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  const [query, setQuery] = useState('');
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#272421]">
      <a className="skip-link" href="#catalogo">Ir para o catálogo</a>
      <CatalogHeader query={query} onQueryChange={setQuery} />
      <main>
        <HeroSection />
        <ProductCatalog query={query} onQueryChange={setQuery} />
        <FeaturesSection />
      </main>
      <CatalogFooter />
      <WhatsAppFloating />
    </div>
  );
}
