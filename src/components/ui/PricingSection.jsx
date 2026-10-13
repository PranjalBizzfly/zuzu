import { useState } from 'react'
import Container from './Container'
import EyebrowBadge from './EyebrowBadge'
import Button from './Button'
import { CheckIcon } from './icons'
import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'
import { StaggerItem } from '../motion/Stagger'

const CURRENCIES = {
  USD: { symbol: '$' },
  INR: { symbol: '₹' },
}

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Ideal for early-stage teams & freelancers needing essential time logs.',
    price: { USD: 3.99, INR: 299 },
    annualPrice: { USD: 3.19, INR: 239 },
    features: [
      'Time Tracking & Session Logs',
      'Daily Workday Summaries',
      'Basic Idle Time Detection',
      'Standard Export Formats (CSV)',
      'Email Support',
    ],
    cta: { label: 'Start Free Trial', href: '/free-trial' },
  },
  {
    id: 'team-focus',
    name: 'Team Focus',
    badge: 'Most Popular',
    highlighted: true,
    description: 'Most popular for growing teams requiring periodic screenshots.',
    price: { USD: 6.99, INR: 499 },
    annualPrice: { USD: 5.59, INR: 399 },
    features: [
      'Everything in Starter',
      'Automated Periodic Screenshots (1–5 min or custom)',
      'Application & Activity Usage Tracking',
      'Consolidated Day-End Reports',
      'Manager-to-Employee Assignment',
      'On-Device Private-Region Redaction',
    ],
    cta: { label: 'Start 7-Day Free Trial', href: '/free-trial' },
  },
  {
    id: 'growth-agency',
    name: 'Growth & Agency',
    description: 'For scaling companies with multiple teams and managers.',
    price: { USD: 11.99, INR: 899 },
    annualPrice: { USD: 9.59, INR: 719 },
    features: [
      'Everything in Team Focus',
      'Date-Filtered Screenshot Galleries',
      'Productivity Scores',
      'Multi-Manager Role Hierarchies',
    ],
    cta: { label: 'Start Free Trial', href: '/free-trial' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise Organization',
    description: 'Super admin governance and advanced access controls.',
    price: { USD: 19.99, INR: 1499 },
    annualPrice: { USD: 15.99, INR: 1199 },
    features: [
      'Everything in Growth',
      'Super Admin Platform Governance',
      'Capability-Based Access Controls',
    ],
    cta: { label: 'Contact Enterprise Sales', href: '/company/contact' },
  },
]

function formatPrice(plan, billing, currency) {
  const value = billing === 'annual' ? plan.annualPrice[currency] : plan.price[currency]
  const symbol = CURRENCIES[currency].symbol
  return currency === 'USD' ? `${symbol}${value.toFixed(2)}` : `${symbol}${value}`
}

/*
  `float3d` is opt-in (default off) so /pricing -- the real pricing page,
  where every plan should read as equally weighted while comparing them --
  stays perfectly still. The landing page passes it to make its own point
  about the recommended plan without new words: it just floats, gently,
  persistently, above the other three (see .pricing-3d-float in
  styles/home-3d-extras.css) -- a translateY drift, not a tilt or
  rotation, so it doesn't repeat any other 3D device already used
  elsewhere on that page.
*/
export default function PricingSection({ className = '', shimmer = false, float3d = false }) {
  const [billing, setBilling] = useState('annual')
  const [currency, setCurrency] = useState('USD')

  return (
    <section id="pricing" className={`py-14 sm:py-20 ${className}`}>
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
          <Reveal delay={0}>
            <EyebrowBadge>Simple &amp; transparent pricing</EyebrowBadge>
          </Reveal>
          <TypewriterHeading as="h2" startDelay={80} className="text-3xl sm:text-4xl">
            Predictable Plans for High-Performance Teams
          </TypewriterHeading>
          <Reveal as="p" delay={140} className="text-base sm:text-lg text-muted">
            No hidden setup fees. No long-term lock-in. Pick the tier that fits your workforce and
            scale seamlessly.
          </Reveal>
        </div>

        <Reveal delay={200} className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center rounded-full border border-line bg-surface p-1">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                billing === 'monthly' ? 'text-white bg-[image:var(--gradient-brand)]' : 'text-muted hover:text-ink'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                billing === 'annual' ? 'text-white bg-[image:var(--gradient-brand)]' : 'text-muted hover:text-ink'
              }`}
            >
              Annual
              <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-success">
                SAVE 20%
              </span>
            </button>
          </div>

          <div className="inline-flex items-center rounded-full border border-line bg-surface p-1">
            {Object.keys(CURRENCIES).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setCurrency(code)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  currency === code ? 'text-white bg-[image:var(--gradient-brand)]' : 'text-muted hover:text-ink'
                }`}
              >
                {code === 'USD' ? 'USD ($)' : 'INR (₹)'}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {PLANS.map((plan, i) => (
            // The float (when float3d is on) lives on this outer wrapper,
            // not the inner card -- the badge below is a sibling of the
            // card, not a child of it, so only floating the shared
            // ancestor keeps the badge riding along with the card
            // instead of hanging in place while the card bobs under it.
            <StaggerItem
              key={plan.id}
              index={i}
              className={`relative h-full ${plan.highlighted && float3d ? 'pricing-3d-float' : ''}`}
            >
            {/* Rendered as a sibling of the card, not a child -- .card-glass
                has overflow:hidden (for its shine-sweep hover effect), which
                was clipping this badge's top half since it's positioned
                partly above the card's own edge. */}
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[image:var(--gradient-brand)] px-3 py-1 text-[11px] font-semibold tracking-wide text-white whitespace-nowrap">
                ★ {plan.badge.toUpperCase()}
              </span>
            )}
            <div
              className={`relative flex h-full flex-col gap-5 rounded-2xl p-7 transition-all duration-300 ease-[var(--ease-emphasized)] hover:-translate-y-2 hover:shadow-2xl card-glass ${
                plan.highlighted
                  ? 'border-2 border-indigo-500/80 shadow-[0_0_40px_rgba(var(--color-green-rgb),0.28)] ring-1 ring-indigo-500/50'
                  : 'border border-line/80'
              }`}
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-ink">{formatPrice(plan, billing, currency)}</span>
                <span className="text-sm text-muted">/ user / mo</span>
              </div>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckIcon className="h-4 w-4 mt-0.5 shrink-0 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2">
                <Button
                  to={plan.cta.href}
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  fullWidth
                  className={shimmer ? 'btn-landing-shimmer' : ''}
                >
                  {plan.cta.label}
                </Button>
              </div>
            </div>
            </StaggerItem>
          ))}
        </div>
      </Container>
    </section>
  )
}
