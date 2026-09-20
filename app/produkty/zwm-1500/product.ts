import type { Product } from '@/lib/product'

export const product = {
  sku: 'ZWM-1500',
  title: 'Zbiornik mobilny na wodę pitną 1500 l',
  subtitle: 'Stal nierdzewna 1.4301, atest PZH',
  category: 'woda-pitna',
  inStock: true,
  capacityLiters: 1500,
  material: '1.4301',
  certifications: ['PZH'],
  dimensionsMm: null,
  priceNetPln: null,
  vatRate: 23,
  shape: 'vertical',
} satisfies Product
