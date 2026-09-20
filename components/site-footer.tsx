import Image from 'next/image'
import Link from 'next/link'
import { COMPANY } from '@/lib/product'

const MENU = [
  { href: '/#produkty', label: 'Produkty' },
  { href: '/od-reki/', label: 'Od ręki' },
  { href: '/realizacje/', label: 'Realizacje' },
  { href: '/regulamin/', label: 'Regulamin' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-steel-300">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-8">
        <Link href="/" aria-label={`${COMPANY.shortName} — strona główna`}>
          {/* One logo file for both backgrounds: the navy footer inverts it to white. */}
          <Image
            src="/images/logo.svg"
            alt={COMPANY.shortName}
            width={188}
            height={70}
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>
        <nav aria-label="Menu stopki">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {MENU.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                Wyślij zapytanie
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-sm text-steel-500">
        © {new Date().getFullYear()} {COMPANY.name} · strona demonstracyjna
      </p>
    </footer>
  )
}
