import { describe, expect, it } from 'vitest';
import { filterProducts, generateWhatsAppLink, products } from './catalog';

describe('filterProducts', () => {
  it('matches names and descriptions without requiring accents', () => {
    expect(filterProducts(products, 'xicara', 'Todos').map((product) => product.id)).toEqual(['xicara-serra']);
  });

  it('filters the demonstrative catalog by category', () => {
    expect(filterProducts(products, '', 'Decoração').every((product) => product.category === 'Decoração')).toBe(true);
  });

  it('combines category and search filters', () => {
    expect(filterProducts(products, 'terracota', 'Mesa').map((product) => product.id)).toEqual(['prato-horizonte']);
  });
});

describe('generateWhatsAppLink', () => {
  it('creates a contextual demonstrative inquiry', () => {
    const link = generateWhatsAppLink(products[0]);
    const url = new URL(link);
    const message = url.searchParams.get('text');

    expect(url.hostname).toBe('wa.me');
    expect(message).toContain(products[0].name);
    expect(message).toContain('Pratele');
    expect(message).toContain('demonstração');
  });
});
