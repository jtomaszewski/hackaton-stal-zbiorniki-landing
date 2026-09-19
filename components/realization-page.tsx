import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/app/produkty'
import { formatCapacity, productPath, productPhoto, type Product } from '@/lib/product'
import { formatDeliveredAt, type Realization } from '@/lib/realizations'

/** Order lines grouped by SKU; throws at build time when a SKU is not in the product registry. */
function orderLines(realization: Realization): Array<{ product: Product; quantity: number }> {
  const lines = new Map<string, { product: Product; quantity: number }>()
  for (const sku of realization.productSkus) {
    const line = lines.get(sku)
    if (line) {
      line.quantity += 1
      continue
    }
    const product = products.find((candidate) => candidate.sku === sku)
    if (!product) throw new Error(`Realization "${realization.slug}": unknown product SKU "${sku}"`)
    lines.set(sku, { product, quantity: 1 })
  }
  return [...lines.values()]
}

/** Until a realization has its own photos, it is illustrated by the photo of its first product. */
function coverPhoto(realization: Realization): string {
  return realization.photos[0] ?? productPhoto(orderLines(realization)[0].product)
}

export function RealizationCard({ realization }: { realization: Realization }) {
  return (
    <li
      data-realization-card={realization.slug}
      className="group relative flex flex-col overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-steel-100 transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-steel-100">
        <Image
          src={coverPhoto(realization)}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 grid h-14 w-36 place-items-center rounded-md bg-white/95 p-2 shadow-md">
          <Image src={realization.logo} alt={realization.customerName} width={128} height={40} className="max-h-10 w-auto" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-steel-500">{realization.customerName}</p>
        <h3 className="font-display text-xl font-bold leading-tight">
          <Link href={`/realizacje/${realization.slug}/`} className="after:absolute after:inset-0 group-hover:text-signal-600">
            {realization.title}
          </Link>
        </h3>
        <p className="mt-auto border-t border-steel-100 pt-3 text-sm text-steel-700">
          {formatCapacity(realization.capacityLiters)} · {formatDeliveredAt(realization.deliveredAt)}
        </p>
      </div>
    </li>
  )
}

/**
 * The only renderer of a realization page. The `data-*` attributes on the root are a contract
 * with tests/site.spec.ts and with the factory's catalog-match check: keep them.
 */
export function RealizationPage({ realization }: { realization: Realization }) {
  const lines = orderLines(realization)

  return (
    <article
      data-realization-page
      data-slug={realization.slug}
      data-customer={realization.customerName}
      data-skus={realization.productSkus.join(',')}
      data-capacity-liters={realization.capacityLiters}
      className="mx-auto max-w-6xl px-4 py-10"
    >
      <nav aria-label="Ścieżka" className="text-sm text-steel-500">
        <Link href="/" className="hover:text-navy-900">
          Strona główna
        </Link>{' '}
        /{' '}
        <Link href="/realizacje/" className="hover:text-navy-900">
          Realizacje
        </Link>
      </nav>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="self-start overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-steel-100">
          <div className="relative aspect-[4/3] bg-steel-100">
            <Image src={coverPhoto(realization)} alt="" fill priority sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
          </div>
          <div className="flex items-center justify-between gap-4 p-6">
            <Image src={realization.logo} alt={realization.customerName} width={180} height={48} className="max-h-12 w-auto" />
            <a href={realization.customerUrl} rel="noopener noreferrer" className="font-semibold text-signal-600 hover:underline">
              {realization.customerName} →
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-steel-500">Realizacja · {formatDeliveredAt(realization.deliveredAt)}</p>
          <h1 className="mt-1 font-display text-4xl font-bold leading-tight">{realization.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-steel-700">{realization.summary}</p>
          <h2 className="mt-8 font-display text-2xl font-bold">Zakres dostawy</h2>
          <ul className="mt-3 divide-y divide-steel-100 rounded-md bg-white shadow-sm ring-1 ring-steel-100">
            {lines.map(({ product, quantity }) => (
              <li key={product.sku} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3">
                <span>
                  <span className="font-semibold">{quantity} ×</span>{' '}
                  <Link href={productPath(product)} data-realization-product={product.sku} className="font-semibold text-signal-600 hover:underline">
                    {product.title}
                  </Link>
                </span>
                <span className="text-sm text-steel-500">
                  {product.sku} · {formatCapacity(product.capacityLiters)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-md bg-white shadow-sm ring-1 ring-steel-100 p-4">
              <dt className="text-sm text-steel-500">Łączna pojemność</dt>
              <dd className="font-display text-2xl font-bold">{formatCapacity(realization.capacityLiters)}</dd>
            </div>
            <div className="rounded-md bg-white shadow-sm ring-1 ring-steel-100 p-4">
              <dt className="text-sm text-steel-500">Termin realizacji</dt>
              <dd className="font-display text-2xl font-bold">{formatDeliveredAt(realization.deliveredAt)}</dd>
            </div>
          </dl>
        </div>
      </div>
      {realization.photos.length > 0 && (
        <section aria-labelledby="galeria" data-realization-gallery className="mt-12">
          <h2 id="galeria" className="font-display text-2xl font-bold">
            Zdjęcia z montażu
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {realization.photos.map((photo, index) => (
              <li key={photo} className="overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-steel-100">
                <Image src={photo} alt={`${realization.customerName} — zdjęcie ${index + 1}`} width={1600} height={1067} className="h-auto w-full" />
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
