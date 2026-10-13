import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import Container from '../ui/Container'
import { getFooterGroups, LEGAL_LINKS } from '../../data/navigation'
import { CheckIcon, MonitorIcon, DownloadIcon } from '../ui/icons'
import { VisaIcon, MastercardIcon, AmexIcon, UpiIcon, PayPalIcon } from '../ui/PaymentIcons'
import Reveal from '../motion/Reveal'
import { StaggerItem } from '../motion/Stagger'

const { columns: FOOTER_COLUMNS, sidebar: FOOTER_SIDEBAR } = getFooterGroups()

// A link is treated as a "view all" / hub link -- rendered bolder, in the
// accent color, with a trailing arrow -- when its label already marks it as
// one in the underlying nav data (getFooterGroups: "All Product", "All
// Industries", "How It Works Overview", ...). This is purely a style hook,
// no new links or destinations are introduced.
function isHubLink(label) {
  return /^All |Overview$/.test(label)
}

// Every other footer column already stays short (6-11 curated links plus
// its own "All X"/"Overview" hub link) except Platform, which was passing
// through all 22 raw cluster-hub pages -- more than double any sibling,
// several of them (BPO & Call Centers, Marketing Agencies, Consulting...)
// already duplicating the dedicated Industries column. That one oversized
// column was single-handedly stretching its whole grid row and leaving a
// huge empty gap under every shorter column beside it. Capped here (not in
// navigation.js, so the header mega menu keeps the full list) to the most
// platform-core pages, with the existing "Platform Overview" hub link
// -- already present as item 0 -- moved to the end so every column's
// "view all" link lands in the same place.
const MAX_COLUMN_LINKS = 9
function curateColumn(column) {
  if (!column.links) return column
  const links = column.links.length > MAX_COLUMN_LINKS ? column.links.slice(0, MAX_COLUMN_LINKS) : column.links
  const hubIndex = links.findIndex((link) => isHubLink(link.label))
  if (hubIndex === -1 || hubIndex === links.length - 1) return { ...column, links }
  const reordered = [...links.slice(0, hubIndex), ...links.slice(hubIndex + 1), links[hubIndex]]
  return { ...column, links: reordered }
}

const CURATED_COLUMNS = FOOTER_COLUMNS.map(curateColumn)

// Two visual tiers instead of one undifferentiated 8-column block: the
// core product surface (Product/Solutions/Industries/Platform) reads as
// row one, the more supporting/meta categories (How It Works/Dashboard/
// Resources/Company) as row two, separated by a divider -- same data,
// clearer hierarchy. Mobile ignores the split and just stacks all 8.
const PRIMARY_COLUMNS = CURATED_COLUMNS.slice(0, 4)
const SECONDARY_COLUMNS = [...CURATED_COLUMNS.slice(4), FOOTER_SIDEBAR]
const ALL_FOOTER_COLUMNS = [...PRIMARY_COLUMNS, ...SECONDARY_COLUMNS]

// Verified, existing hero eyebrow copy (HomeWorkdayHero.jsx) reused
// verbatim as the short brand-rail tagline.
const BRAND_TAGLINE = 'Employee Time Tracking & Activity Management'

// Verified, existing hero copy (HomeWorkdayHero.jsx) reused verbatim as the
// brand-rail description, rather than writing new marketing claims.
const BRAND_DESCRIPTION =
  "Track working hours, monitor activity, capture screenshots, understand productivity, and generate a complete summary of the workday with ZUZU."

// Same trial facts already shown on /free-trial and the homepage CTA,
// reused here so the brand rail carries real content instead of empty
// space next to the much taller nav grid.
const TRIAL_HIGHLIGHTS = ['Free for 7 days', 'No credit card required', 'Windows Agent included']

// Real support/security inboxes, already used the same way on the Contact
// page, Privacy Policy and Terms of Service -- not new addresses.
const CONTACT_EMAILS = [
  { label: 'Support', email: 'support@UseZuzu.com' },
  { label: 'Security', email: 'security@UseZuzu.com' },
]

// Confirmed by the user as actually supported by checkout/billing. Each
// renders as a small brand-coloured SVG badge (see PaymentIcons.jsx), not
// a bundled third-party logo file.
const PAYMENT_METHODS = [
  { label: 'Visa', Icon: VisaIcon },
  { label: 'Mastercard', Icon: MastercardIcon },
  { label: 'Amex', Icon: AmexIcon },
  { label: 'UPI', Icon: UpiIcon },
  { label: 'PayPal', Icon: PayPalIcon },
]

function ChevronDownIcon({ open, className = '' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`shrink-0 text-faint transition-transform duration-200 ease-[var(--ease-emphasized)] ${open ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FooterLinkList({ links }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => {
        const hub = isHubLink(link.label)
        return (
          <li key={link.href}>
            <Link
              to={link.href}
              className={
                hub
                  ? 'inline-flex items-center gap-1 text-sm font-semibold text-green transition-colors duration-150 hover:text-green-400'
                  : 'text-sm text-muted underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-ink hover:decoration-green-400/50'
              }
            >
              {link.label}
              {hub && <span aria-hidden="true">&rarr;</span>}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function FooterColumnBody({ column }) {
  return (
    <div className="flex flex-col gap-5">
      {column.links && <FooterLinkList links={column.links} />}
      {column.groups?.map((sub) => (
        <div key={sub.title} className="flex flex-col gap-2.5">
          {sub.title !== column.heading && (
            // Same treatment as the column heading above (FooterColumn):
            // text-xs, wide tracking, ink colour and the short brand-
            // gradient underline, so a second group title (e.g. Security
            // under Company) reads as an equal-level heading.
            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-ink">{sub.title}</h4>
              <span className="mt-2.5 block h-0.5 w-6 rounded-full bg-[image:var(--gradient-brand)]" />
            </div>
          )}
          <FooterLinkList links={sub.links} />
        </div>
      ))}
    </div>
  )
}

// Desktop / tablet: always-visible column, heading with a short brand-
// gradient underline accent for hierarchy.
function FooterColumn({ column }) {
  return (
    <div className="hidden sm:flex sm:flex-col sm:items-start sm:gap-5">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-ink">{column.heading}</h3>
        <span className="mt-2.5 block h-0.5 w-6 rounded-full bg-[image:var(--gradient-brand)]" />
      </div>
      <FooterColumnBody column={column} />
    </div>
  )
}

// Mobile: a collapsible row per category, closed by default -- the same
// controlled-button + aria-expanded/aria-controls + accordion-rows pattern
// FAQ.jsx already uses -- so eight nav categories don't dump every link
// open in one long stacked list on small screens.
function FooterAccordionColumn({ column, index }) {
  const [open, setOpen] = useState(false)
  const panelId = `footer-panel-${index}`
  const buttonId = `footer-trigger-${index}`

  return (
    <div className="border-b border-line py-1 sm:hidden">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 py-3.5 text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink"
        >
          {column.heading}
          <ChevronDownIcon open={open} className="h-4 w-4" />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={`accordion-rows ${open ? 'is-open' : ''}`}>
        <div className="pb-4">
          <FooterColumnBody column={column} />
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      data-theme="dark"
      className="surface-dark relative border-t border-line bg-surface transition-colors duration-150
        dark:[background-image:radial-gradient(60%_45%_at_50%_0%,rgba(var(--color-green-rgb),0.10),transparent_70%),repeating-linear-gradient(135deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_14px)]"
    >
      <Container size="2xl">
        <div className="flex flex-col gap-12 pb-14 pt-12 sm:pt-14 lg:flex-row lg:items-start lg:gap-10 xl:gap-16">
          {/* Brand rail -- logo, value proposition, and the same trial
              facts already shown on /free-trial, so this column carries
              real weight instead of leaving dead space beside the much
              taller nav grid. */}
          <Reveal className="flex flex-col gap-5 lg:w-64 lg:shrink-0">
            <Link to="/" aria-label="ZUZU home" className="inline-flex w-fit items-center">
              <Logo size="md" onDark />
            </Link>
            <p className="text-sm font-semibold text-ink">{BRAND_TAGLINE}</p>
            <p className="text-sm leading-relaxed text-muted">{BRAND_DESCRIPTION}</p>

            <ul className="flex flex-col gap-2 rounded-xl border border-line bg-elevated p-4">
              {TRIAL_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Real download, not a decorative badge -- /windows-agent/download
                is the same route the homepage hero's "Download Desktop App"
                button uses. No macOS/Linux button: the site's own FAQ says
                ZUZU only supports Windows today. */}
            <Link
              to="/windows-agent/download"
              className="group flex items-center gap-3 rounded-xl border border-line bg-elevated p-3 transition-all duration-200 ease-[var(--ease-emphasized)] hover:border-line-strong hover:-translate-y-0.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-overlay text-green transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:scale-110">
                <MonitorIcon className="h-4 w-4" />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-faint">Download for</span>
                <span className="text-sm font-semibold text-ink">Windows Desktop</span>
              </span>
              <DownloadIcon className="ml-auto h-4 w-4 shrink-0 text-faint transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:translate-y-0.5" />
            </Link>

            {/* Payment badges -- sits above the support/security emails
                below, per request. */}
            <div className="flex flex-wrap items-center gap-2">
              {PAYMENT_METHODS.map(({ label, Icon }) => (
                <Icon key={label} className="h-6 w-auto rounded-md shadow-sm" />
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              {CONTACT_EMAILS.map(({ label, email }) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="text-sm text-muted transition-colors duration-150 hover:text-green"
                >
                  {label}:{' '}
                  <span className="font-medium text-ink">{email}</span>
                </a>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-1 flex-col gap-10">
            {/* Nav columns -- desktop/tablet: two visual tiers, always open. */}
            <Reveal className="hidden sm:grid sm:grid-cols-3 sm:items-start sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4">
              {PRIMARY_COLUMNS.map((column, i) => (
                <StaggerItem key={column.heading} index={i} step={40}>
                  <FooterColumn column={column} />
                </StaggerItem>
              ))}
            </Reveal>
            <Reveal className="hidden border-t border-line pt-10 sm:grid sm:grid-cols-3 sm:items-start sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4">
              {SECONDARY_COLUMNS.map((column, i) => (
                <StaggerItem key={column.heading} index={i} step={40}>
                  <FooterColumn column={column} />
                </StaggerItem>
              ))}
            </Reveal>

            {/* Nav columns -- mobile: stacked accordions. */}
            <div className="flex flex-col sm:hidden">
              {ALL_FOOTER_COLUMNS.map((column, i) => (
                <FooterAccordionColumn key={column.heading} column={column} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-line py-6 text-sm text-faint sm:flex-row sm:justify-between sm:gap-4">
          <p>&copy; {new Date().getFullYear()} ZUZU. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li>
              <Link to="/pricing" className="transition-colors duration-150 hover:text-ink">
                Pricing
              </Link>
            </li>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="transition-colors duration-150 hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Human-readable directory of every page (/resources/sitemap),
                plus the generated XML sitemap (scripts/generate-sitemap.mjs)
                served as a static file for search engines. */}
            <li>
              <Link to="/resources/sitemap" className="transition-colors duration-150 hover:text-ink">
                Sitemap
              </Link>
            </li>
            <li>
              <a href="/sitemap.xml" className="transition-colors duration-150 hover:text-ink">
                XML Sitemap
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
