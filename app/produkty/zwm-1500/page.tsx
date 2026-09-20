import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Mobilny zbiornik na wodę pitną o pojemności 1500 l. Stal nierdzewna 1.4301 (AISI 304), atest PZH, rama transportowa z uchwytami widłowymi. Dostępny od ręki z magazynu w Jarocinie.</p>
    </ProductPage>
  )
}
