import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { COMPANY } from '@/lib/product'
import './globals.css'

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.shortName} — producent zbiorników stalowych`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    'Polski producent zbiorników ciśnieniowych, dwupłaszczowych i nierdzewnych. Woda pitna, paliwa, chemikalia i woda ppoż. Realizacje od 2008 roku, atest PZH i uprawnienia UDT.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pl" className={`${openSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
