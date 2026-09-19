import type { Product } from '@/lib/product'

export const product = {
  sku: 'ZWP-5000',
  title: 'Zbiornik na wodę pitną 5000 l',
  subtitle: 'Stal nierdzewna 1.4301, atest PZH',
  category: 'woda-pitna',
  inStock: false,
  capacityLiters: 5000,
  material: '1.4301',
  certifications: ['PZH'],
  dimensionsMm: { width: 1800, height: 2400, depth: 1800 },
  weightKg: 420,
  priceNetPln: 27500,
  vatRate: 23,
  shape: 'vertical',
  photo: '/photos/zbiorniki-woda.webp',
} satisfies Product
