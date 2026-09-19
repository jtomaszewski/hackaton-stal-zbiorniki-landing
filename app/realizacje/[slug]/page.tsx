import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { RealizationPage } from '@/components/realization-page'
import { REALIZATIONS } from '@/lib/realizations'

export const dynamicParams = false

export function generateStaticParams() {
  return REALIZATIONS.map((realization) => ({ slug: realization.slug }))
}

function findRealization(slug: string) {
  return REALIZATIONS.find((realization) => realization.slug === slug)
}

export async function generateMetadata({ params }: PageProps<'/realizacje/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const realization = findRealization(slug)
  if (!realization) return {}
  return {
    title: realization.title,
    description: realization.summary,
    robots: { index: false },
  }
}

export default async function Page({ params }: PageProps<'/realizacje/[slug]'>) {
  const { slug } = await params
  const realization = findRealization(slug)
  if (!realization) notFound()
  return <RealizationPage realization={realization} />
}
