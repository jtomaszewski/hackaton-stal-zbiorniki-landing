import Image from 'next/image'
import Link from 'next/link'
import { ProductGrid } from '@/components/product-card'
import { products } from '@/app/produkty'
import { COMPANY } from '@/lib/product'
import { REALIZATIONS, realizationPath } from '@/lib/realizations'

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <Image src="/photos/hero-transport.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="mx-auto max-w-6xl px-4 py-20 lg:py-28">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">{COMPANY.tagline}</h1>
          <p className="mt-5 max-w-xl text-lg text-steel-300">
            Polski producent zbiorników ciśnieniowych, dwupłaszczowych i nierdzewnych. Realizacje od {COMPANY.since} roku.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${COMPANY.email}`}
              className="rounded-sm bg-white px-6 py-3 font-bold uppercase tracking-wide text-navy-700 transition hover:bg-steel-100"
            >
              Wyślij zapytanie
            </a>
            <Link
              href="/#produkty"
              className="rounded-sm border border-white/50 px-6 py-3 font-bold uppercase tracking-wide backdrop-blur-sm transition hover:bg-white/10"
            >
              Zobacz ofertę
            </Link>
          </div>
        </div>
      </section>

      <section id="produkty" aria-labelledby="produkty-heading" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-steel-500">Oferta</p>
            <h2 id="produkty-heading" className="mt-1 text-2xl font-bold text-navy-700 sm:text-3xl">
              Produkty
            </h2>
          </div>
          <Link href="/od-reki/" className="font-bold uppercase tracking-wide text-navy-700 hover:underline">
            Zbiorniki od ręki →
          </Link>
        </div>
        <div className="mt-8">
          <ProductGrid products={products} />
        </div>
      </section>

      {REALIZATIONS.length > 0 && (
        <section aria-labelledby="realizacje-heading" data-trusted-by className="bg-steel-100">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-steel-500">Zaufali nam</p>
                <h2 id="realizacje-heading" className="mt-1 text-2xl font-bold text-navy-700 sm:text-3xl">
                  Realizacje
                </h2>
              </div>
              <Link href="/realizacje/" className="font-bold uppercase tracking-wide text-navy-700 hover:underline">
                Wszystkie realizacje ({REALIZATIONS.length}) →
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
              {REALIZATIONS.map((realization) => (
                <li key={realization.slug}>
                  <Link
                    href={realizationPath(realization)}
                    data-trusted-logo={realization.slug}
                    title={realization.title}
                    className="group grid h-20 place-items-center rounded-sm px-4 transition hover:bg-white"
                  >
                    <Image
                      src={realization.logo}
                      alt={realization.customerName}
                      width={180}
                      height={48}
                      // Supplied logos vary wildly in aspect ratio; cap both axes so the strip reads as a grid.
                      className="max-h-10 w-auto max-w-[150px] object-contain opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
