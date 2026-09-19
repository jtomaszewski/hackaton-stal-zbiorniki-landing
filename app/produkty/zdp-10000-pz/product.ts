import type { Product } from '@/lib/product'

export const product = {
  sku: 'ZDP-10000-PZ',
  title: 'Zbiornik dwupłaszczowy podziemny na olej opałowy 10 000 l',
  subtitle: 'Podziemny, izolacja epoksydowa, dozór UDT',
  category: 'paliwa',
  inStock: false,
  capacityLiters: 10000,
  material: 'S235JR',
  certifications: ['UDT'],
  dimensionsMm: { width: 2000, height: 2000, depth: 3700 },
  weightKg: 1850,
  priceNetPln: 38400,
  vatRate: 23,
  shape: 'underground',
} satisfies Product
