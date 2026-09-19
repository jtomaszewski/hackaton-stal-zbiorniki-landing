import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

// Product pages are change class `content`: a green check lets the factory merge them
// without a human (SPEC-005). So they may hold data and description, nothing else.
const onlyImports = (allowed, where) => [
  'error',
  {
    patterns: [
      {
        regex: `^(?!(${allowed.join('|')})$).*`,
        message: `${where} may only import: ${allowed.map((a) => a.replace(/\\/g, '')).join(', ')}. See AGENTS.md.`,
      },
    ],
  },
]

const noCodeBeyondTemplate = [
  'error',
  {
    selector: 'JSXOpeningElement[name.name=/^(script|iframe|style|object|embed)$/]',
    message: 'Product pages render text only. See AGENTS.md.',
  },
  {
    selector: 'CallExpression[callee.name=/^(fetch|eval|useEffect|useState)$/]',
    message: 'Product pages have no behaviour. See AGENTS.md.',
  },
  { selector: 'ImportExpression', message: 'No dynamic imports in product pages.' },
  { selector: "Literal[value='use client']", message: 'Product pages are server-rendered only.' },
]

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ['app/produkty/*/page.tsx'],
    rules: {
      'no-restricted-imports': onlyImports(['@/components/product-page', '\\./product'], 'A product page'),
      'no-restricted-syntax': noCodeBeyondTemplate,
      'react/no-danger': 'error',
    },
  },
  {
    files: ['app/produkty/*/product.ts'],
    rules: {
      'no-restricted-imports': onlyImports(['@/lib/product'], 'A product data file'),
      'no-restricted-syntax': noCodeBeyondTemplate,
    },
  },
  {
    files: ['app/produkty/index.ts'],
    rules: {
      'no-restricted-imports': onlyImports(['@/lib/product', '\\./[a-z0-9-]+/product'], 'The product registry'),
      'no-restricted-syntax': noCodeBeyondTemplate,
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'playwright-report/**', 'test-results/**']),
])

export default eslintConfig
