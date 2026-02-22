export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Bolsa Premium de Couro',
    description: 'Bolsa elegante de couro sintético com acabamento premium. Ideal para o dia a dia.',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaGFuZGJhZyUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3MTc3MTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Acessórios',
  },
  {
    id: '2',
    name: 'Vestido Casual Floral',
    description: 'Vestido leve e confortável com estampa floral. Perfeito para o verão.',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1664894626626-65ab49e0077d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNhc3VhbCUyMGRyZXNzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzE3NzE4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Roupas',
  },
  {
    id: '3',
    name: 'Tênis Esportivo Branco',
    description: 'Tênis confortável e estiloso. Design minimalista e moderno.',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1651371409956-20e79c06a8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwd2hpdGV8ZW58MXx8fHwxNzcxNzU5Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Calçados',
  },
  {
    id: '4',
    name: 'Óculos de Sol Moderno',
    description: 'Óculos de sol com proteção UV e design contemporâneo.',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1764722755184-9863f7b11ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3MTczODUxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Acessórios',
  },
  {
    id: '5',
    name: 'Relógio Clássico',
    description: 'Relógio elegante com pulseira de couro e mostrador minimalista.',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1762513461072-5008c7f6511d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3MTczODUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Acessórios',
  },
  {
    id: '6',
    name: 'Colar Minimalista',
    description: 'Colar delicado e elegante. Perfeito para qualquer ocasião.',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1762505464426-7467c051ea76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbmVja2xhY2UlMjBlbGVnYW50fGVufDF8fHx8MTc3MTc3MTgwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Joias',
  },
];

// WhatsApp helper function
export const generateWhatsAppLink = (product: Product): string => {
  const phoneNumber = '5511999999999'; // Replace with your WhatsApp number
  const message = `Olá! Gostaria de saber mais sobre:\n\n*${product.name}*\nPreço: R$ ${product.price.toFixed(2)}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
