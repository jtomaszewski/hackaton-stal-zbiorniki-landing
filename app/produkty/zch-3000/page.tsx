import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Pionowy zbiornik na kwasy i ługi o pojemności 3000 l. Stal kwasoodporna 1.4571 (AISI 316Ti), odpowietrzenie z filtrem, wanna wychwytowa w zestawie.</p>
    </ProductPage>
  )
}
