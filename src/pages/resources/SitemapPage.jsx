import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import Card from '../../components/ui/Card'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import { SearchIcon, ArrowRightIcon, CheckCircleIcon } from '../../components/ui/icons'
import {
  NAV_SECTIONS,
  HOW_IT_WORKS_SECTION,
  DASHBOARD_SECTION,
  COMPANY_LINKS,
  LEGAL_LINKS,
} from '../../data/navigation'
import { CLUSTERS } from '../../data/clusters'

// Hand-written pages with no entry in navigation.js / the cluster data --
// everything else below is pulled from the same data the router itself
// builds routes from (see App.jsx), so this directory can't drift out of
// sync with the real site. Kept in the same order STATIC_ROUTES appears
// in scripts/generate-sitemap.mjs.
const STATIC_PAGES = [
  { path: '/', title: 'Home', description: 'ZUZU: employee time tracking, activity monitoring and AI-assisted workforce reporting.', category: 'Main' },
  { path: '/knowledge-base', title: 'Knowledge Base', description: 'Everything about setting up and using ZUZU, organized by topic.', category: 'Main' },
  { path: '/getting-started', title: 'Getting Started', description: 'Start using ZUZU, from installation to your first report.', category: 'Main' },
  { path: '/troubleshooting', title: 'Troubleshooting', description: 'Fixes for common ZUZU setup and tracking issues.', category: 'Main' },
  { path: '/security', title: 'Security', description: 'How ZUZU handles security, privacy and data protection.', category: 'Main' },
  { path: '/pricing', title: 'Pricing', description: 'ZUZU plans and pricing.', category: 'Main' },
  { path: '/login', title: 'Login', description: 'Sign in to your ZUZU workspace.', category: 'Main' },
  { path: '/free-trial', title: 'Free Trial', description: 'Start a free 7-day ZUZU trial.', category: 'Main' },
  { path: '/company/about', title: 'About', description: 'About ZUZU.', category: 'Company' },
  { path: '/company/careers', title: 'Careers', description: 'Careers at ZUZU.', category: 'Company' },
  { path: '/company/contact', title: 'Contact', description: 'Get in touch with the ZUZU team.', category: 'Company' },
  { path: '/legal/privacy-policy', title: 'Privacy Policy', description: "ZUZU's privacy policy.", category: 'Legal' },
  { path: '/legal/terms-of-service', title: 'Terms of Service', description: "ZUZU's terms of service.", category: 'Legal' },
  { path: '/dashboard/day-end-report', title: 'Day-End Report', description: 'Review end-of-day workforce information.', category: 'Dashboard' },
]

// Builds the full page directory from the same data sources App.jsx uses
// to build the router, rather than a separately hand-maintained list --
// so the count below is always the real, current route total, never a
// hardcoded number.
function buildDirectory() {
  const entries = [...STATIC_PAGES]

  NAV_SECTIONS.forEach((section) => {
    entries.push({ path: section.href, title: `${section.label} Overview`, description: section.description, category: section.label })
    section.items.forEach((item) => {
      entries.push({ path: `${section.href}/${item.slug}`, title: item.label, description: item.description, category: section.label })
    })
  })

  entries.push({ path: HOW_IT_WORKS_SECTION.href, title: 'How It Works Overview', description: HOW_IT_WORKS_SECTION.description, category: 'How It Works' })
  HOW_IT_WORKS_SECTION.items.forEach((item) => {
    entries.push({ path: `${HOW_IT_WORKS_SECTION.href}/${item.slug}`, title: item.label, description: item.description, category: 'How It Works' })
  })

  entries.push({ path: DASHBOARD_SECTION.href, title: 'Dashboard Overview', description: DASHBOARD_SECTION.description, category: 'Dashboard' })
  DASHBOARD_SECTION.items.forEach((item) => {
    entries.push({ path: item.href, title: item.label, description: item.description, category: 'Dashboard' })
  })

  CLUSTERS.forEach((cluster) => {
    entries.push({ path: cluster.basePath, title: cluster.hubTitle, description: cluster.hubDescription, category: cluster.badgeLabel })
    cluster.pages.forEach((page) => {
      entries.push({
        path: `${cluster.basePath}/${page.slug}`,
        title: page.title,
        description: page.metaDescription,
        category: cluster.badgeLabel,
      })
    })
  })

  COMPANY_LINKS.forEach((link) => {
    if (!entries.some((e) => e.path === link.href)) {
      entries.push({ path: link.href, title: link.label, description: '', category: 'Company' })
    }
  })
  LEGAL_LINKS.forEach((link) => {
    if (!entries.some((e) => e.path === link.href)) {
      entries.push({ path: link.href, title: link.label, description: '', category: 'Legal' })
    }
  })

  // Same URL can legitimately show up twice above (e.g. /dashboard/day-end-report
  // is both a STATIC_PAGES entry and a Dashboard nav item) -- de-duped by
  // path, first occurrence wins, so the directory lists every real route
  // exactly once.
  const seen = new Set()
  return entries.filter((entry) => {
    if (seen.has(entry.path)) return false
    seen.add(entry.path)
    return true
  })
}

// One entry in the single-row hero stat strip -- label on top, big green
// value below, distinct from the light-mode card grid further down since
// this sits directly on the hero photo/overlay.
function HeroStat({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-slate-400">{label}</span>
      <span className="text-xl sm:text-2xl font-bold text-green-400">{value}</span>
    </div>
  )
}

function SitemapCard({ entry }) {
  return (
    <Card as="div" hover glass={false} padding="md" className="group flex flex-col justify-between gap-3 h-full rounded-2xl border border-line bg-surface p-5 hover:border-brand/40 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between gap-2">
        <span className="w-fit rounded-full border border-line bg-surface-alt px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
          {entry.category}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-brand/20 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand">
          <CheckCircleIcon className="h-3 w-3" />
          Indexable
        </span>
      </div>
      <div className="flex flex-col gap-1.5 my-1">
        <h3 className="text-base font-bold leading-snug">
          <Link to={entry.path} className="text-ink transition-colors duration-150 hover:text-brand">
            {entry.title}
          </Link>
        </h3>
        <p className="truncate font-mono text-[11px] text-faint">{entry.path === '/' ? '/home' : entry.path}</p>
        {entry.description && <p className="line-clamp-2 text-xs sm:text-sm text-muted leading-relaxed mt-1">{entry.description}</p>}
      </div>
      <Link
        to={entry.path}
        className="mt-auto pt-2 border-t border-line/60 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand transition-colors duration-150 hover:text-brand-light"
      >
        Visit Page
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:translate-x-1" />
      </Link>
    </Card>
  )
}

export default function SitemapPage() {
  const [query, setQuery] = useState('')
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Sitemap' }]

  const directory = useMemo(() => buildDirectory(), [])
  const totalPages = directory.length
  const categories = useMemo(() => [...new Set(directory.map((e) => e.category))], [directory])

  const filtered = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    if (words.length === 0) return directory
    return directory.filter((entry) => {
      const haystack = `${entry.title} ${entry.category} ${entry.description || ''} ${entry.path}`.toLowerCase()
      return words.every((word) => haystack.includes(word))
    })
  }, [directory, query])

  const inventoryHeading =
    filtered.length === totalPages
      ? `Page Inventory (${totalPages} Pages Shown)`
      : `Page Inventory (${filtered.length} of ${totalPages} Pages Shown)`

  return (
    <>
      <Seo
        title="Sitemap & Page Directory | ZUZU"
        description="A complete, searchable index of every page on the ZUZU website, organized by section."
        path="/resources/sitemap"
        breadcrumbs={breadcrumbItems}
      />

      <FullWidthHumanHero
        backgroundImage="/images/resources/zuzu-resource-hub.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Complete Page Directory"
        title="Sitemap & Page Directory"
        description="A complete, structured index of every page on the ZUZU website -- product, solutions, industries, platform, resources and support -- organized by section and fully searchable."
        primaryCta={null}
        belowDescription={
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
            <HeroStat label="Total Pages" value={totalPages} />
            <HeroStat label="Indexable URLs" value={totalPages} />
            <HeroStat label="Categories" value={categories.length} />
            <HeroStat label="Content Clusters" value={CLUSTERS.length} />
          </div>
        }
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-3 text-center max-w-2xl mx-auto">
            <EyebrowBadge>Indexed Directory</EyebrowBadge>
            <TypewriterHeading as="h2" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              {inventoryHeading}
            </TypewriterHeading>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Every product, solution, industry, platform, resource and support page ZUZU publishes, each with its
              own category, route and description. Search above filters the full list instantly.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-line bg-surface p-2 sm:p-2.5 shadow-sm transition-all focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
              <div className="pl-2">
                <SearchIcon className="h-5 w-5 shrink-0 text-muted" />
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search across all 500+ pages..."
                aria-label="Search all pages"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="px-2 text-xs font-semibold text-muted hover:text-ink"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center rounded-2xl border border-line bg-surface/50">
              <p className="text-base font-semibold text-ink">No pages match &ldquo;{query}&rdquo;.</p>
              <p className="text-sm text-muted mt-1">Try searching for broader terms like "time", "security", or "reports".</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((entry) => (
                <SitemapCard key={entry.path} entry={entry} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
