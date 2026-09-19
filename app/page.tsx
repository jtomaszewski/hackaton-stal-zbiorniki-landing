import Image from 'next/image'
import Link from 'next/link'
import { ProductGrid } from '@/components/product-card'
import { products } from '@/app/produkty'
import { CATEGORIES, COMPANY, productPhoto, type Category } from '@/lib/product'
import { REALIZATIONS, realizationPath } from '@/lib/realizations'

const CERTIFICATES = [
  { code: 'PZH', text: 'Atest higieniczny na kontakt z wodą pitną.' },
  { code: 'UDT', text: 'Zbiorniki paliwowe pod dozorem technicznym.' },
  { code: 'CNBOP', text: 'Zbiorniki na wodę przeciwpożarową.' },
]

const FACTS = [
  { value: `${new Date().getFullYear() - COMPANY.since}+`, label: 'lat produkcji' },
  { value: '20+', label: 'klientów przemysłowych' },
  { value: '4–6 tyg.', label: 'realizacji na zamówienie' },
]

const STRENGTHS = [
  {
    title: 'Własna hala w Kobierzycach',
    text: 'Cięcie, walcowanie, spawanie i malowanie pod jednym dachem. Każdy zbiornik przechodzi próbę szczelności przed wysyłką.',
  },
  {
    title: 'Projekt pod Twoją instalację',
    text: 'Króćce, włazy, drabiny i podesty według Twojego rysunku. Dokumentację do UDT przygotowujemy za Ciebie.',
  },
  {
    title: 'Dostawa i posadowienie',
    text: 'Przywozimy zbiornik własnym transportem i ustawiamy go na miejscu, także dźwigiem.',
  },
]

export default function Home() {
  const inStock = products.filter((product) => product.inStock)
  const categories = (Object.keys(CATEGORIES) as Category[])
    .map((category) => ({ category, items: products.filter((product) => product.category === category) }))
    .filter((group) => group.items.length > 0)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image src="/photos/hero-transport.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="mx-auto max-w-6xl px-4 py-20 lg:py-32">
          <p className="font-semibold uppercase tracking-widest text-signal-500">Producent od {COMPANY.since} r.</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
            Zbiorniki stalowe
            <br />
            na wymiar i od ręki
          </h1>
          <p className="mt-6 max-w-xl text-lg text-steel-100">
            Woda pitna, paliwa, chemikalia i woda ppoż. Stal nierdzewna, kwasoodporna i czarna, z atestami PZH
            i dozorem UDT. Od pojedynczych sztuk po serie produkcyjne.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/od-reki/" className="rounded-md bg-signal-500 px-6 py-3 font-semibold shadow-lg shadow-signal-600/30 transition hover:bg-signal-600">
              Zobacz zbiorniki od ręki
            </Link>
            <a href={`mailto:${COMPANY.email}`} className="rounded-md border border-white/40 px-6 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/10">
              Wyślij zapytanie
            </a>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col">
                <dt className="text-sm text-steel-300">{fact.label}</dt>
                <dd className="order-first font-display text-4xl font-bold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="branze" className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-signal-600">Dla kogo pracujemy</p>
        <h2 id="branze" className="mt-1 font-display text-4xl font-bold uppercase">
          Zbiorniki do każdej branży
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((group, index) => (
            <li key={group.category} className={index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}>
              <Link
                href={`/#${group.category}`}
                className="group relative flex h-56 items-end overflow-hidden rounded-md bg-navy-900 p-5 text-white shadow-sm"
              >
                <Image
                  src={productPhoto(group.items[0])}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                <span className="relative">
                  <span className="block font-display text-xl font-bold leading-tight">{CATEGORIES[group.category]}</span>
                  <span className="mt-1 block text-sm text-steel-300">
                    {group.items.length} {group.items.length === 1 ? 'produkt' : group.items.length < 5 ? 'produkty' : 'produktów'} →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="od-reki" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-signal-600">Z magazynu</p>
              <h2 id="od-reki" className="mt-1 font-display text-4xl font-bold uppercase">
                Od ręki
              </h2>
              <p className="text-steel-700">Gotowe zbiorniki z magazynu, wysyłka w kilka dni.</p>
            </div>
            <Link href="/od-reki/" className="font-semibold text-signal-600 hover:underline">
              Wszystkie od ręki ({inStock.length}) →
            </Link>
          </div>
          <div className="mt-8">
            <ProductGrid products={inStock.slice(0, 3)} />
          </div>
        </div>
      </section>

      {REALIZATIONS.length > 0 && (
        <section aria-labelledby="zaufali-nam" data-trusted-by className="border-y border-steel-100 bg-steel-50">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-signal-600">Referencje</p>
                <h2 id="zaufali-nam" className="mt-1 font-display text-4xl font-bold uppercase">
                  Zaufali nam
                </h2>
                <p className="text-steel-700">Zbiorniki z Kobierzyc pracują u klientów z przemysłu, energetyki i rekreacji.</p>
              </div>
              <Link href="/realizacje/" className="font-semibold text-signal-600 hover:underline">
                Wszystkie realizacje ({REALIZATIONS.length}) →
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {REALIZATIONS.map((realization) => (
                <li key={realization.slug}>
                  <Link
                    href={realizationPath(realization)}
                    data-trusted-logo={realization.slug}
                    title={realization.title}
                    className="group grid h-28 place-items-center rounded-md bg-white p-6 shadow-sm ring-1 ring-steel-100 transition hover:shadow-md hover:ring-signal-500"
                  >
                    <Image
                      src={realization.logo}
                      alt={realization.customerName}
                      width={180}
                      height={48}
                      className="max-h-12 w-auto opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="produkty" aria-labelledby="produkty-heading" className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-signal-600">Oferta</p>
        <h2 id="produkty-heading" className="mt-1 font-display text-4xl font-bold uppercase">
          Produkty
        </h2>
        {categories.map((group) => (
          <div key={group.category} id={group.category} className="mt-12">
            <h3 className="mb-5 border-l-4 border-signal-500 pl-3 font-display text-2xl font-bold">{CATEGORIES[group.category]}</h3>
            <ProductGrid products={group.items} />
          </div>
        ))}
      </section>

      <section aria-labelledby="produkcja" className="bg-navy-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-md">
              <Image src="/photos/hala-zbiornik-niebieski.webp" alt="Zbiornik poziomy przed wysyłką z hali" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image src="/photos/zbiorniki-cisnieniowe.webp" alt="Zbiorniki ciśnieniowe po malowaniu" fill sizes="(min-width: 1024px) 270px, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image src="/photos/zbiornik-poziomy-bialy.webp" alt="Zbiornik z drabiną i podestem" fill sizes="(min-width: 1024px) 270px, 50vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-signal-500">Produkcja</p>
            <h2 id="produkcja" className="mt-1 font-display text-4xl font-bold uppercase">
              Od blachy do gotowego zbiornika
            </h2>
            <ul className="mt-8 space-y-6">
              {STRENGTHS.map((strength, index) => (
                <li key={strength.title} className="flex gap-4">
                  <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-signal-500 font-display text-lg font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{strength.title}</h3>
                    <p className="mt-1 text-steel-300">{strength.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="atesty" className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-signal-600">Bezpieczeństwo</p>
        <h2 id="atesty" className="mt-1 font-display text-4xl font-bold uppercase">
          Atesty i dozór
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {CERTIFICATES.map((certificate) => (
            <li key={certificate.code} className="rounded-md border-t-4 border-signal-500 bg-white p-6 shadow-sm ring-1 ring-steel-100">
              <p className="font-display text-3xl font-bold text-navy-800">{certificate.code}</p>
              <p className="mt-1 text-steel-700">{certificate.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="zapytanie" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-md bg-signal-500 px-8 py-10 text-white shadow-lg sm:flex-row sm:items-center">
          <div>
            <h2 id="zapytanie" className="font-display text-3xl font-bold uppercase">
              Potrzebujesz zbiornika na wymiar?
            </h2>
            <p className="mt-1 text-white/90">Wyślij rysunek lub parametry, a przygotujemy wycenę w 2 dni robocze.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${COMPANY.email}`} className="rounded-md bg-navy-950 px-6 py-3 font-semibold transition hover:bg-navy-800">
              Wyślij zapytanie
            </a>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="rounded-md border border-white/60 px-6 py-3 font-semibold transition hover:bg-white/10">
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
