import type { Metadata } from 'next'
import { ProductGrid } from '@/components/product-card'
import { products } from '@/app/produkty'

export const metadata: Metadata = {
  title: 'Zbiorniki od ręki',
  description: 'Gotowe zbiorniki stalowe dostępne z magazynu.',
}

export default function InStockPage() {
  const inStock = products.filter((product) => product.inStock)
  return (
    <section data-in-stock-list className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-navy-700">Zbiorniki od ręki</h1>
      <p className="mt-2 text-steel-700">Gotowe zbiorniki z magazynu w Jarocinie. Wysyłka w kilka dni roboczych.</p>
      <div className="mt-8">
        {inStock.length ? (
          <ProductGrid products={inStock} />
        ) : (
          <p className="rounded-sm border border-steel-200 bg-white p-6">
            Obecnie nie mamy zbiorników na magazynie. Wyślij zapytanie, a przygotujemy ofertę na wykonanie.
          </p>
        )}
      </div>
    </section>
  )
}
