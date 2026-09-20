import Image from 'next/image'
import Link from 'next/link'
import { COMPANY } from '@/lib/product'

const NAV = [
  { href: '/#produkty', label: 'Produkty' },
  { href: '/od-reki/', label: 'Od ręki' },
  { href: '/realizacje/', label: 'Realizacje' },
  { href: '/regulamin/', label: 'Regulamin' },
]

export function SiteHeader() {
  return (
    <header className="z-40 lg:sticky lg:top-0 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label={`${COMPANY.shortName} — strona główna`}>
          <Image src="/images/logo.svg" alt={COMPANY.shortName} width={188} height={70} priority className="h-12 w-auto" />
        </Link>
        <nav aria-label="Menu główne" className="flex items-center gap-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-bold uppercase tracking-wide text-navy-700 transition hover:text-navy-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${COMPANY.email}`}
            className="hidden rounded-sm bg-navy-700 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-navy-800 lg:inline-block"
          >
            Wyślij zapytanie
          </a>
        </nav>
      </div>
    </header>
  )
}
