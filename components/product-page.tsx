import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  CATEGORIES,
  COMPANY,
  formatCapacity,
  formatPln,
  grossPrice,
  productPhoto,
  type Product,
} from '@/lib/product'

export function productMetadata(product: Product): Metadata {
  return {
    title: product.title,
    description: [product.subtitle, formatCapacity(product.capacityLiters), product.material].filter(Boolean).join(' · '),
  }
}

/**
 * The only renderer of a product page. The `data-*` attributes on the root are a contract
 * with tests/site.spec.ts and with the factory's catalog-match check: keep them.
 */
export function ProductPage({ product, children }: { product: Product; children: ReactNode }) {
  const gross = grossPrice(product)
  const rows: Array<[string, string]> = [
    ['Pojemność', formatCapacity(product.capacityLiters)],
    ['Materiał', product.material],
  ]
  if (product.dimensionsMm) {
    const { width, height, depth } = product.dimensionsMm
    rows.push(['Wymiary (szer. × wys. × gł.)', `${width} × ${height} × ${depth} mm`])
  }
  if (product.weightKg !== undefined) rows.push(['Masa', `${product.weightKg} kg`])
  rows.push(['Atesty i dozór', product.certifications.length ? product.certifications.join(', ') : '—'])
  const inquiry = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Zapytanie: ${product.sku} ${product.title}`)}`

  return (
    <article
      data-product-page
      data-sku={product.sku}
      data-title={product.title}
      data-price-net={product.priceNetPln ?? ''}
      data-in-stock={String(product.inStock)}
      data-capacity-liters={product.capacityLiters}
      className="mx-auto max-w-6xl px-4 py-10"
    >
      <nav aria-label="Ścieżka" className="text-sm text-steel-500">
        <Link href="/" className="hover:text-navy-900">
          Strona główna
        </Link>{' '}
        /{' '}
        <Link href={`/#${product.category}`} className="hover:text-navy-900">
          {CATEGORIES[product.category]}
        </Link>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] self-start overflow-hidden rounded-md bg-steel-100 shadow-sm ring-1 ring-steel-100">
          <Image src={productPhoto(product)} alt={product.title} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          {product.inStock && (
            <span className="absolute left-4 top-4 rounded-sm bg-signal-500 px-3 py-1 text-sm font-bold uppercase text-white shadow">
              Od ręki
            </span>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-steel-500">SKU: {product.sku}</p>
          <h1 className="mt-1 font-display text-4xl font-bold leading-tight">{product.title}</h1>
          {product.subtitle && <p className="mt-2 text-lg text-steel-700">{product.subtitle}</p>}
          <div className="mt-6 rounded-md bg-white p-6 shadow-sm ring-1 ring-steel-100">
            {product.priceNetPln === null || gross === null ? (
              <p className="text-2xl font-bold">Cena na zapytanie</p>
            ) : (
              <>
                <p className="text-3xl font-bold">
                  {formatPln(product.priceNetPln)} <span className="text-base font-medium text-steel-500">netto</span>
                </p>
                <p className="text-steel-700">
                  {formatPln(gross)} brutto (VAT {product.vatRate}%)
                </p>
              </>
            )}
            <a
              href={inquiry}
              className="mt-4 inline-block rounded-sm bg-signal-500 px-5 py-3 font-semibold text-white hover:bg-signal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900"
            >
              Wyślij zapytanie
            </a>
          </div>
          <table className="mt-6 w-full border-collapse overflow-hidden rounded-md bg-white text-left shadow-sm ring-1 ring-steel-100">
            <caption className="sr-only">Parametry techniczne</caption>
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label} className="border-b border-steel-100 last:border-0">
                  <th scope="row" className="px-4 py-3 font-medium text-steel-700">
                    {label}
                  </th>
                  <td className="px-4 py-3 font-semibold">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 space-y-3 leading-relaxed text-steel-700">{children}</div>
        </div>
      </div>
    </article>
  )
}
