import { product as zwp2000 } from './zwp-2000/product'
import { product as zwp5000 } from './zwp-5000/product'
import { product as zdp5000 } from './zdp-5000/product'
import { product as zdp10000Pz } from './zdp-10000-pz/product'
import { product as zch3000 } from './zch-3000/product'
import { product as zppoz20 } from './zppoz-20/product'
import { product as mx500 } from './mx-500/product'
import { product as zwm1500 } from './zwm-1500/product'
import type { Product } from '@/lib/product'

/** Every product page, in display order. A new product page must be added here. */
export const products: Product[] = [
  zwp2000,
  zwp5000,
  zdp5000,
  zdp10000Pz,
  zch3000,
  zppoz20,
  mx500,
  zwm1500,
]
