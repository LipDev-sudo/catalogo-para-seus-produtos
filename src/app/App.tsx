import React from 'react';
import { CatalogHeader } from './components/CatalogHeader';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { FeaturesSection } from './components/FeaturesSection';
import { CatalogFooter } from './components/CatalogFooter';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-['Inter'] text-[#1a1a1a]">
      <CatalogHeader />
      <HeroSection />
      <ProductCatalog />
      <FeaturesSection />
      <CatalogFooter />
      <WhatsAppFloating />
    </div>
  );
}
