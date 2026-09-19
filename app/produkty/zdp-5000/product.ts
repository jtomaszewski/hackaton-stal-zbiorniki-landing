import type { Product } from '@/lib/product'

export const product = {
  sku: 'ZDP-5000',
  title: 'Zbiornik dwupłaszczowy na olej napędowy 5000 l',
  subtitle: 'Naziemny, stal S235JR, dozór UDT',
  category: 'paliwa',
  inStock: true,
  capacityLiters: 5000,
  material: 'S235JR',
  certifications: ['UDT'],
  dimensionsMm: null,
  weightKg: 980,
  priceNetPln: 18900,
  vatRate: 23,
  shape: 'horizontal',
  photo: '/photos/zbiornik-dwuplaszczowy.webp',
} satisfies Product
