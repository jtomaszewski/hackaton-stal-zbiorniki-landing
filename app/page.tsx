import Image from 'next/image'
import Link from 'next/link'
import { ProductGrid } from '@/components/product-card'
import { products } from '@/app/produkty'
import { CERTIFICATIONS, FAQ, INDUSTRIES, OFFER, TESTIMONIALS } from '@/lib/content'
import { COMPANY } from '@/lib/product'
import { REALIZATIONS, realizationPath } from '@/lib/realizations'

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

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

      <section aria-labelledby="branze" className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-steel-500">Dla kogo pracujemy</p>
        <h2 id="branze" className="mt-2 text-center text-2xl font-bold text-navy-700 sm:text-3xl">
          Zbiorniki dla każdej branży — od wodociągów po przemysł chemiczny
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <li
              key={industry.slug}
              className="flex flex-col overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-steel-200"
            >
              <div className="relative aspect-[16/9] bg-steel-100">
                <Image
                  src={industry.photo}
                  alt={industry.name}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-lg font-bold text-navy-700">{industry.name}</h3>
                <p className="text-sm leading-relaxed text-steel-700">{industry.description}</p>
              </div>
            </li>
          ))}
          <li className="flex flex-col justify-center gap-3 rounded-md bg-steel-100 p-6">
            <p className="text-lg font-bold text-navy-700">Nie znalazłeś swojej branży?</p>
            <p className="text-sm leading-relaxed text-steel-700">
              Realizujemy też konstrukcje na zamówienie — od pojedynczych sztuk po serie produkcyjne.
            </p>
            <a href={`mailto:${COMPANY.email}`} className="font-bold text-navy-700 hover:underline">
              Wyślij zapytanie →
            </a>
          </li>
        </ul>
      </section>

      {REALIZATIONS.length > 0 && (
        <section aria-labelledby="zaufali-nam" data-trusted-by className="bg-steel-100">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2
              id="zaufali-nam"
              className="text-center text-sm font-semibold uppercase tracking-widest text-steel-500"
            >
              Zaufali nam liderzy w swoich branżach
            </h2>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
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
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-t border-steel-300 pt-8 text-sm font-semibold text-steel-700">
              {CERTIFICATIONS.map((certification) => (
                <li key={certification} className="flex items-center gap-2">
                  <span aria-hidden className="text-navy-700">
                    ◆
                  </span>
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="oferta-heading" className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-steel-500">Oferta</p>
        <h2 id="oferta-heading" className="mt-2 text-center text-2xl font-bold text-navy-700 sm:text-3xl">
          Zbiorniki i konstrukcje stalowe
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-steel-700">
          Produkujemy zbiorniki typowe wg naszej dokumentacji oraz nietypowe na indywidualne zamówienie — od
          pojedynczych sztuk po serie produkcyjne.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {OFFER.map((item) => (
            <li
              key={item}
              className="rounded-sm bg-white px-4 py-3 text-sm font-semibold text-navy-700 shadow-sm ring-1 ring-steel-200"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <Link href="/realizacje/" className="font-bold uppercase tracking-wide text-navy-700 hover:underline">
            Zobacz więcej realizacji →
          </Link>
        </p>
      </section>

      <section id="produkty" aria-labelledby="produkty-heading" className="bg-steel-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-steel-500">Produkty</p>
              <h2 id="produkty-heading" className="mt-1 text-2xl font-bold text-navy-700 sm:text-3xl">
                Zbiorniki z katalogu
              </h2>
            </div>
            <Link href="/od-reki/" className="font-bold uppercase tracking-wide text-navy-700 hover:underline">
              Zbiorniki od ręki →
            </Link>
          </div>
          <div className="mt-8">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <section aria-labelledby="wycena" className="bg-navy-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 id="wycena" className="text-2xl font-bold sm:text-3xl">
            Potrzebujesz zbiornika na zamówienie?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-steel-300">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę. Realizujemy zamówienia od pojedynczych sztuk po serie
            produkcyjne.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${COMPANY.email}`}
              className="rounded-sm bg-white px-6 py-3 font-bold uppercase tracking-wide text-navy-700 transition hover:bg-steel-100"
            >
              Zapytaj o wycenę
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="rounded-sm border border-white/50 px-6 py-3 font-bold uppercase tracking-wide transition hover:bg-white/10"
            >
              Zadzwoń: {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="opinie" className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="opinie" className="text-sm font-semibold uppercase tracking-widest text-steel-500">
          Opinie naszych klientów
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <li
              key={testimonial.author}
              className="flex flex-col rounded-md bg-white p-6 shadow-sm ring-1 ring-steel-200"
            >
              <p className="leading-relaxed text-steel-700">„{testimonial.quote}”</p>
              <footer className="mt-auto flex items-center gap-3 pt-5">
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-steel-100 text-sm font-bold text-navy-700"
                >
                  {initials(testimonial.author)}
                </span>
                <span>
                  <span className="block font-bold text-navy-700">{testimonial.author}</span>
                  <span className="block text-sm text-steel-500">{testimonial.company}</span>
                </span>
              </footer>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="faq" className="bg-steel-100">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 id="faq" className="text-center text-sm font-semibold uppercase tracking-widest text-steel-500">
            Najczęściej zadawane pytania
          </h2>
          <ul className="mt-8 space-y-3">
            {FAQ.map((entry) => (
              <li key={entry.question}>
                <details className="group rounded-sm bg-white px-5 py-4 shadow-sm ring-1 ring-steel-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy-700">
                    {entry.question}
                    <span aria-hidden className="text-steel-500 transition group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-steel-700">{entry.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
