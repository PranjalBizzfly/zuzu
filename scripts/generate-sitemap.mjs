// Generates public/sitemap.xml from the real route table -- computed
// the same way as the Phase-05-onward link-audit scripts: parse
// navigation.js + every src/data/clusters/*.js file rather than
// hand-maintaining a page list that drifts from the actual router.
//
// SITE_URL: this project has never been given a real production
// domain, and inventing one to hardcode here would misrepresent it as
// real. Falls back to the IANA-reserved placeholder domain
// example.com (RFC 2606) so the file is valid and obviously a
// placeholder; set the SITE_URL env var at deploy time to the real
// domain, e.g. `SITE_URL=https://www.usezuzu.com npm run build`.
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const srcRoot = path.join(root, 'src')
const SITE_URL = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '')

// /style-guide is deliberately excluded -- an internal, noindex
// component-library reference page (Phase 01), not public content.
const STATIC_ROUTES = [
  '/', '/knowledge-base', '/getting-started', '/troubleshooting',
  '/security', '/pricing', '/templates', '/login', '/free-trial',
  '/company/about', '/company/careers', '/company/contact',
  '/legal/privacy-policy', '/legal/terms-of-service',
  '/dashboard/day-end-report', '/dashboard/admin-portal', '/dashboard/employee-profile',
]

const routes = new Set(STATIC_ROUTES)

// navigation.js: section hub routes + item leaf routes
const navSrc = readFileSync(path.join(srcRoot, 'data/navigation.js'), 'utf8')
const sectionRe = /key: '([\w-]+)',\s*\n\s*label:[^\n]*\n\s*href: '([^']+)',[\s\S]*?items: \[([\s\S]*?)\n\s*\]/g
for (const m of navSrc.matchAll(sectionRe)) {
  const [, , sectionHref, itemsBlock] = m
  routes.add(sectionHref)
  const itemHrefs = [...itemsBlock.matchAll(/href:\s*'([^']+)'/g)].map((s) => s[1])
  for (const href of itemHrefs) routes.add(href)
  const slugs = [...itemsBlock.matchAll(/slug: '([\w-]+)'/g)].map((s) => s[1])
  for (const slug of slugs) routes.add(`${sectionHref}/${slug}`)
}

// src/data/clusters/*.js: hub route + one leaf route per page. The
// platform cluster is a thin wrapper re-exporting PRODUCT_PAGES from
// ../productPages.js (Phase 04, left untouched) instead of defining
// pages inline -- follow that import too, or its 19 real /platform/*
// routes silently drop out of the sitemap.
const clusterFiles = readdirSync(path.join(srcRoot, 'data/clusters')).filter((f) => f.endsWith('.js'))
for (const f of clusterFiles) {
  const src = readFileSync(path.join(srcRoot, 'data/clusters', f), 'utf8')
  const basePathMatch = src.match(/basePath: '([^']+)'/)
  if (!basePathMatch) continue
  const basePath = basePathMatch[1]
  routes.add(basePath)
  let slugs = [...src.matchAll(/\n\s*slug: '([\w-]+)',/g)].map((s) => s[1])
  if (slugs.length === 0 && /pages:\s*PRODUCT_PAGES/.test(src)) {
    const productPagesSrc = readFileSync(path.join(srcRoot, 'data/productPages.js'), 'utf8')
    slugs = [...productPagesSrc.matchAll(/\n\s*slug: '([\w-]+)',/g)].map((s) => s[1])
  }
  for (const slug of slugs) routes.add(`${basePath}/${slug}`)
}

const sorted = [...routes].sort()

const urlset = sorted
  .map((route) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n  </url>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`

writeFileSync(path.join(root, 'public/sitemap.xml'), xml)

// robots.txt's Sitemap: line is regenerated here too so the two files
// never point at different domains.
const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
writeFileSync(path.join(root, 'public/robots.txt'), robotsTxt)

console.log(`sitemap.xml written with ${sorted.length} routes, robots.txt synced (SITE_URL=${SITE_URL})`)
