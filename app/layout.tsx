import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { COMPANY } from '@/lib/product'
import './globals.css'

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
})

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.shortName} — producent zbiorników stalowych`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    'Zbiorniki stalowe na wodę pitną, paliwa, chemikalia i wodę ppoż. Produkcja od 2008 roku, atesty PZH i dozór UDT.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pl" className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
