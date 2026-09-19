import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { expect, test, type Page } from '@playwright/test'

// Data-driven: everything below is derived from the built site, so a new product page
// needs no new test. See SPEC-005 "Weryfikacja".

type RenderedProduct = { path: string; sku: string; title: string; priceNet: string; inStock: boolean }

const productDirs = readdirSync(join(process.cwd(), 'app/produkty'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()

function pathsFromSitemap(section: 'produkty' | 'realizacje'): string[] {
  const xml = readFileSync(join(process.cwd(), 'out/sitemap.xml'), 'utf8')
  return [...xml.matchAll(new RegExp(`<loc>[^<]*?(/${section}/[^<]+)</loc>`, 'g'))].map((match) => match[1]).sort()
}

const productPathsFromSitemap = () => pathsFromSitemap('produkty')

async function readProduct(page: Page, path: string): Promise<RenderedProduct> {
  await page.goto(path)
  const root = page.locator('[data-product-page]')
  await expect(root).toHaveCount(1)
  return {
    path,
    sku: (await root.getAttribute('data-sku')) ?? '',
    title: (await root.getAttribute('data-title')) ?? '',
    priceNet: (await root.getAttribute('data-price-net')) ?? '',
    inStock: (await root.getAttribute('data-in-stock')) === 'true',
  }
}

async function readAllProducts(page: Page): Promise<RenderedProduct[]> {
  const products: RenderedProduct[] = []
  for (const path of productPathsFromSitemap()) products.push(await readProduct(page, path))
  return products
}

test('every product directory is in the registry (sitemap)', () => {
  expect(productPathsFromSitemap()).toEqual(productDirs.map((dir) => `/produkty/${dir}/`))
})

test('every product page shows its name, SKU and price, under a unique SKU-based URL', async ({ page }) => {
  const products = await readAllProducts(page)
  const skus = products.map((product) => product.sku)
  expect(new Set(skus).size, 'duplicate SKU').toBe(skus.length)
  for (const product of products) {
    expect(product.path, `URL of ${product.sku}`).toBe(`/produkty/${product.sku.toLowerCase()}/`)
    await page.goto(product.path)
    await expect(page.getByRole('heading', { level: 1, name: product.title })).toBeVisible()
    await expect(page.getByText(`SKU: ${product.sku}`)).toBeVisible()
    if (product.priceNet === '') {
      await expect(page.getByText('Cena na zapytanie')).toBeVisible()
    } else {
      await expect(page.getByText(/netto/).first()).toBeVisible()
    }
  }
})

test('"Od ręki" lists exactly the products in stock', async ({ page }) => {
  const expected = (await readAllProducts(page)).filter((product) => product.inStock).map((product) => product.sku).sort()
  await page.goto('/od-reki/')
  const listed = await page.locator('[data-in-stock-list] [data-product-card]').evaluateAll((cards) =>
    cards.map((card) => card.getAttribute('data-product-card') ?? ''),
  )
  expect(listed.sort()).toEqual(expected)
})

// Realizations (SPEC-006): one registry entry = one logo on the home page + one card page.

type RenderedRealization = { path: string; slug: string; customer: string; skus: string[] }

async function readAllRealizations(page: Page): Promise<RenderedRealization[]> {
  const realizations: RenderedRealization[] = []
  for (const path of pathsFromSitemap('realizacje')) {
    await page.goto(path)
    const root = page.locator('[data-realization-page]')
    await expect(root).toHaveCount(1)
    realizations.push({
      path,
      slug: (await root.getAttribute('data-slug')) ?? '',
      customer: (await root.getAttribute('data-customer')) ?? '',
      skus: ((await root.getAttribute('data-skus')) ?? '').split(',').filter(Boolean),
    })
  }
  return realizations
}

test('the home page shows every customer logo, linked to its realization', async ({ page }) => {
  const realizations = await readAllRealizations(page)
  await page.goto('/')
  if (realizations.length === 0) {
    // No references yet: the strip stays hidden rather than rendering an empty section.
    await expect(page.locator('[data-trusted-by]')).toHaveCount(0)
    return
  }
  for (const realization of realizations) {
    const logo = page.locator(`[data-trusted-by] [data-trusted-logo="${realization.slug}"]`)
    await expect(logo).toHaveAttribute('href', realization.path)
    await expect(logo.getByRole('img', { name: realization.customer })).toBeVisible()
  }
})

test('every realization page is noindex and links to products that exist', async ({ page }) => {
  const realizations = await readAllRealizations(page)
  const productSkus = (await readAllProducts(page)).map((product) => product.sku)
  for (const realization of realizations) {
    expect(realization.path, `URL of ${realization.slug}`).toBe(`/realizacje/${realization.slug}/`)
    expect(realization.skus.length, `${realization.slug} has order lines`).toBeGreaterThan(0)
    await page.goto(realization.path)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.getByRole('link', { name: `${realization.customer} →` })).toBeVisible()
    for (const sku of new Set(realization.skus)) {
      expect(productSkus, `${realization.slug} references ${sku}`).toContain(sku)
      const link = page.locator(`[data-realization-product="${sku}"]`)
      await expect(link).toHaveAttribute('href', `/produkty/${sku.toLowerCase()}/`)
    }
    await expect(page.locator('[data-realization-gallery]')).toHaveCount(0)
  }
  await page.goto('/realizacje/')
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
  const listed = await page.locator('[data-realizations-list] [data-realization-card]').evaluateAll((cards) =>
    cards.map((card) => card.getAttribute('data-realization-card') ?? ''),
  )
  expect(listed.sort()).toEqual(realizations.map((realization) => realization.slug).sort())
})

test('Suntago is on the home page and its card lists the ordered tanks', async ({ page }) => {
  await page.goto('/')
  await page.locator('[data-trusted-logo="park-of-poland"]').click()
  await expect(page).toHaveURL(/\/realizacje\/park-of-poland\/$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Suntago')
  await expect(page.locator('[data-realization-product="ZPPOZ-20"]')).toBeVisible()
  await expect(page.locator('[data-realization-product="ZCH-3000"]')).toBeVisible()
  await expect(page.locator('[data-realization-page]')).toHaveAttribute('data-capacity-liters', '26000')
})

test('terms of sale render with the warranty clause', async ({ page }) => {
  await page.goto('/regulamin/')
  await expect(page.getByRole('heading', { level: 1, name: 'Regulamin sprzedaży' })).toBeVisible()
  await expect(page.locator('[data-warranty]')).toContainText('gwarancji')
})
