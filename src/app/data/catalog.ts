export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Café' | 'Mesa' | 'Decoração';
  material: string;
  leadTime: string;
}

export const products: Product[] = [
  { id: 'xicara-serra', name: 'Xícara Serra', description: 'Xícara de linhas simples, feita em pequenos lotes para cafés sem pressa.', price: 68, image: '/images/products/xicara-serra.webp', category: 'Café', material: 'Grés esmaltado', leadTime: 'Pronta em até 7 dias' },
  { id: 'prato-horizonte', name: 'Prato Horizonte', description: 'Prato raso com borda terracota e acabamento pontilhado, pensado para a mesa diária.', price: 82, image: '/images/products/prato-horizonte.webp', category: 'Mesa', material: 'Cerâmica de alta temperatura', leadTime: 'Pronto em até 10 dias' },
  { id: 'tigela-vale', name: 'Tigela Vale', description: 'Tigela funda de formato orgânico para servir caldos, frutas ou acompanhamentos.', price: 74, image: '/images/products/tigela-vale.webp', category: 'Mesa', material: 'Porcelana fosca', leadTime: 'Pronta em até 10 dias' },
  { id: 'vaso-caminho', name: 'Vaso Caminho', description: 'Vaso escultórico de superfície natural; cada unidade preserva marcas do trabalho manual.', price: 148, image: '/images/products/vaso-caminho.webp', category: 'Decoração', material: 'Argila clara sem esmalte', leadTime: 'Feito sob encomenda' },
  { id: 'porta-vela-bruma', name: 'Porta-vela Bruma', description: 'Peça compacta com contorno irregular para velas aromáticas e pontos de luz suaves.', price: 58, image: '/images/products/castical-brasa.webp', category: 'Decoração', material: 'Cerâmica esmaltada', leadTime: 'Pronto em até 5 dias' },
  { id: 'copo-noite', name: 'Copo Noite', description: 'Copo sem alça com textura mineral e esmalte escuro, ideal para café ou chá.', price: 62, image: '/images/products/jarra-campo.webp', category: 'Café', material: 'Grés pigmentado', leadTime: 'Pronto em até 7 dias' },
];

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim();

export const filterProducts = (catalog: Product[], query: string, category: string) => {
  const normalizedQuery = normalize(query);
  return catalog.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category;
    const searchable = normalize([product.name, product.description, product.material, product.category].join(' '));
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });
};

export const generateWhatsAppLink = (product: Product): string => {
  const message = [
    'Olá! Encontrei esta peça na demonstração da Pratele:',
    '',
    `*${product.name}*`,
    `A partir de R$ ${product.price.toFixed(2).replace('.', ',')}`,
    '',
    'Quero conversar sobre disponibilidade e acabamento.',
  ].join('\n');
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
};

export const generalWhatsAppLink = `https://wa.me/?text=${encodeURIComponent('Olá! Vi o catálogo demonstrativo da Pratele e quero conversar sobre uma encomenda.')}`;
