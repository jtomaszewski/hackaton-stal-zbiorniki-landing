import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Mieszalnik procesowy o pojemności roboczej 500 l. Stal nierdzewna 1.4404 (AISI 316L), mieszadło ramowe z motoreduktorem 1,5 kW, płaszcz grzewczy.</p>
    </ProductPage>
  )
}
