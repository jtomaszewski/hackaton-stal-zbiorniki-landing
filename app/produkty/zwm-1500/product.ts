import type { Product } from '@/lib/product'

export const product = {
  sku: 'ZWM-1500',
  title: 'Zbiornik mobilny na wodę pitną 1500 l',
  subtitle: 'Na przyczepie, atest PZH',
  category: 'woda-pitna',
  inStock: true,
  capacityLiters: 1500,
  material: '1.4301',
  certifications: ['PZH'],
  dimensionsMm: null,
  weightKg: 410,
  priceNetPln: 11900,
  vatRate: 23,
  shape: 'vertical',
} satisfies Product
