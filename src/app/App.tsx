import React from 'react';
import { CatalogHeader } from './components/CatalogHeader';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { FeaturesSection } from './components/FeaturesSection';
import { CatalogFooter } from './components/CatalogFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <CatalogHeader />
      <HeroSection />
      <ProductCatalog />
      <FeaturesSection />
      <CatalogFooter />
    </div>
  );
}
