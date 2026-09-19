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

function productPathsFromSitemap(): string[] {
  const xml = readFileSync(join(process.cwd(), 'out/sitemap.xml'), 'utf8')
  return [...xml.matchAll(/<loc>[^<]*?(\/produkty\/[^<]+)<\/loc>/g)].map((match) => match[1]).sort()
}

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

test('terms of sale render with the warranty clause', async ({ page }) => {
  await page.goto('/regulamin/')
  await expect(page.getByRole('heading', { level: 1, name: 'Regulamin sprzedaży' })).toBeVisible()
  await expect(page.locator('[data-warranty]')).toContainText('gwarancji')
})
