import type { Product } from '@/lib/product'

export const product = {
  sku: 'ZWP-2000',
  title: 'Zbiornik na wodę pitną 2500 l',
  subtitle: 'Stal nierdzewna 1.4301, atest PZH',
  category: 'woda-pitna',
  inStock: true,
  capacityLiters: 2500,
  material: '1.4301',
  certifications: ['PZH'],
  dimensionsMm: { width: 1200, height: 2100, depth: 1200 },
  weightKg: 210,
  priceNetPln: 14900,
  vatRate: 23,
  shape: 'vertical',
  photo: '/photos/zbiorniki-pionowe.webp',
} satisfies Product
