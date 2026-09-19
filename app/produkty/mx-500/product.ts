import type { Product } from '@/lib/product'

export const product = {
  sku: 'MX-500',
  title: 'Mieszalnik procesowy 500 l',
  subtitle: 'Stal nierdzewna 1.4404, mieszadło ramowe',
  category: 'urzadzenia',
  inStock: false,
  capacityLiters: 500,
  material: '1.4404',
  certifications: [],
  dimensionsMm: { width: 900, height: 1900, depth: 900 },
  weightKg: 320,
  priceNetPln: 42800,
  vatRate: 23,
  shape: 'mixer',
  photo: '/photos/mieszalnik.webp',
} satisfies Product
