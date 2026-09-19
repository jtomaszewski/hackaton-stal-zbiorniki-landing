import type { Product } from '@/lib/product'

export const product = {
  sku: 'ZCH-3000',
  title: 'Zbiornik na kwasy 3000 l',
  subtitle: 'Stal kwasoodporna 1.4571',
  category: 'chemia',
  inStock: false,
  capacityLiters: 3000,
  material: '1.4571',
  certifications: [],
  dimensionsMm: { width: 1500, height: 2200, depth: 1500 },
  weightKg: 380,
  priceNetPln: 31200,
  vatRate: 23,
  shape: 'vertical',
} satisfies Product
