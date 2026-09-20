import Image from 'next/image'
import Link from 'next/link'
import { COMPANY, CONTACTS } from '@/lib/product'

const MENU = [
  { href: '/#produkty', label: 'Produkty' },
  { href: '/od-reki/', label: 'Od ręki' },
  { href: '/realizacje/', label: 'Realizacje' },
  { href: '/regulamin/', label: 'Regulamin sprzedaży' },
]

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-navy-900 text-steel-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          {/* One logo file for both backgrounds: the navy footer inverts it to white. */}
          <Image
            src="/images/logo.svg"
            alt={COMPANY.shortName}
            width={188}
            height={70}
            className="mb-4 h-14 w-auto brightness-0 invert"
          />
          <p className="font-bold text-white">{COMPANY.name}</p>
          <p className="mt-2">
            {COMPANY.street}
            <br />
            {COMPANY.city}
          </p>
          <a href={COMPANY.mapUrl} className="mt-2 inline-block text-navy-300 hover:text-white">
            Pokaż na mapie →
          </a>
          <p className="mt-4 text-sm text-steel-500">
            NIP {COMPANY.nip} / REGON {COMPANY.regon} / KRS {COMPANY.krs}
          </p>
        </div>
        <div>
          <p className="font-bold uppercase tracking-wide text-white">Kontakt</p>
          <ul className="mt-3 space-y-3">
            {CONTACTS.map((contact) => (
              <li key={contact.email}>
                <p className="text-sm text-steel-500">{contact.role}</p>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="block hover:text-white">
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="block hover:text-white">
                  {contact.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold uppercase tracking-wide text-white">Menu</p>
          <ul className="mt-3 space-y-1">
            {MENU.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-5 inline-block rounded-sm bg-navy-700 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-navy-800"
          >
            Wyślij zapytanie
          </a>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-sm text-steel-500">
        © {new Date().getFullYear()} {COMPANY.name}
      </p>
    </footer>
  )
}
