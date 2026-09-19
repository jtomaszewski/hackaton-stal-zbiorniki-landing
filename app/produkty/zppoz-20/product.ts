import type { Product } from '@/lib/product'

export const product = {
  sku: 'ZPPOZ-20',
  title: 'Zbiornik przeciwpożarowy 20 m³',
  subtitle: 'Naziemny, stal ocynkowana, izolacja termiczna',
  category: 'ppoz',
  inStock: true,
  capacityLiters: 20000,
  material: 'S235JR+Zn',
  certifications: ['CNBOP'],
  dimensionsMm: { width: 2500, height: 4500, depth: 2500 },
  weightKg: 2600,
  priceNetPln: 64000,
  vatRate: 23,
  shape: 'vertical',
  photo: '/photos/zbiornik-ppoz.webp',
} satisfies Product
