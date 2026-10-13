import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import FeatureCard from '../components/ui/FeatureCard'
import FAQ from '../components/ui/FAQ'
import Seo from '../components/Seo'
import InternalPageHero from '../components/ui/InternalPageHero'
import CTA from '../components/ui/CTA'
import SectionHeader from '../components/ui/SectionHeader'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import { FEATURE_LIBRARY } from '../data/productPages'
import SectionTitle from '../components/ui/SectionTitle'

/*
  This site has no signup backend -- the CTA here honestly routes to
  Contact rather than pretending to create an account. Everything else
  is the documented trial: 7 days, up to 10 employees, no card.
*/
const INCLUDED_FEATURES = ['windowsAgent', 'employeeActivity', 'timeAttendance', 'screenshotMonitoring', 'aiReports', 'managerWorkspace']

const FAQ_ITEMS = [
  { question: 'How long does the free trial last?', answer: '7 days.' },
  { question: 'How many employees can I add during the trial?', answer: 'Up to 10 employees.' },
  { question: 'Do I need a credit card to start?', answer: 'No, the trial does not require a card.' },
  { question: 'What happens after the trial ends?', answer: 'Continuing beyond the trial requires paid activation, after payment, with pricing based on employee headcount during checkout.' },
  { question: 'What do I need to do to start?', answer: 'Install the Windows agent on your team\'s devices and activate your account.' },
  {
    question: 'What features are included in the trial?',
    answer: 'The full core platform: the Windows agent, employee activity, time & attendance, screenshot monitoring, AI reports, and the manager workspace, so you can evaluate the whole workflow rather than a limited preview.',
  },
  {
    question: 'Can I add my whole team to the trial?',
    answer: 'You can add up to 10 employees during the 7-day trial. Adding more would mean moving to a paid plan, where pricing is based on employee headcount at checkout.',
  },
  {
    question: 'Does the trial require installing anything, or is it browser-based?',
    answer: "It requires the Windows agent, the desktop installer that actually records activity, attendance and screenshots. There's no browser-only version of the trial.",
  },
]

export default function FreeTrial() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Free Trial' }]
  const includedFeatures = INCLUDED_FEATURES.map((key) => FEATURE_LIBRARY[key])

  return (
    <>
      <Seo
        title="Start Your 7-Day Free Trial | ZUZU"
        description="Start a 7-day ZUZU free trial for up to 10 employees, no card required."
        path="/free-trial"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Free Trial"
        title="Start Your 7-Day Free Trial"
        description="Try ZUZU with your team for 7 days, for up to 10 employees, with no card required. Instant activation, full platform access, and zero commitment."
        cta={{ label: 'Contact Us to Get Started', href: '/company/contact' }}
        secondaryCta={{ label: 'Getting Started Guide', href: '/getting-started' }}
        visualType="dashboard"
        dashboardType="analytics"
        bgImage="/images/workforce/zuzu-hybrid-workforce.webp"
        imagePosition="center-right"
      />

      <section className="py-12 sm:py-16 bg-surface/30 border-b border-line">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            <Card padding="lg" className="flex flex-col gap-1.5 text-center border-line hover:border-brand/30 transition-colors">
              <p className="text-3xl sm:text-4xl font-extrabold text-gradient-brand">7 days</p>
              <p className="text-sm font-medium text-muted">Trial duration</p>
            </Card>
            <Card padding="lg" className="flex flex-col gap-1.5 text-center border-line hover:border-brand/30 transition-colors">
              <p className="text-3xl sm:text-4xl font-extrabold text-gradient-brand">Up to 10</p>
              <p className="text-sm font-medium text-muted">Employees included</p>
            </Card>
            <Card padding="lg" className="flex flex-col gap-1.5 text-center border-line hover:border-brand/30 transition-colors">
              <p className="text-3xl sm:text-4xl font-extrabold text-gradient-brand">No card</p>
              <p className="text-sm font-medium text-muted">Required to start</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Free Trial" className="text-xl sm:text-2xl">What's Included?</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={<feature.icon className="h-5 w-5" />}
                title={feature.title}
                description={feature.description}
                href={feature.href}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-brand/30 transition-all duration-300">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span className="text-xs font-semibold text-muted tracking-wider uppercase">Next Phase</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-ink">After the Trial</h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Continuing beyond the 7 days requires paid activation, after payment.
                  Paid pricing is based on employee headcount during the applicable
                  checkout process.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-brand/30 transition-all duration-300">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span className="text-xs font-semibold text-muted tracking-wider uppercase">Quick Start</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-ink">Getting Started</h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Install the Windows agent, activate your account, and follow the guided
                  setup path.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-line/60">
                <Button to="/getting-started" variant="outline" size="sm" className="self-start">
                  Getting Started guide
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Documentation" className="text-xl sm:text-2xl">Related Documentation</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Windows Installation Guide" description="Step-by-step installation." href="/installation/windows" />
            <FeatureCard title="Activation" description="How trial and paid activation work." href="/installation/activation" />
            <FeatureCard title="Knowledge Base" description="Every setup and configuration guide." href="/knowledge-base" />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Trial questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Ready to Start Your Trial?"
        description="This site doesn't process signups directly, contact our team and we'll get your 7-day trial workspace configured for up to 10 employees."
        primaryAction={{ label: 'Contact Us to Get Started', href: '/company/contact' }}
        secondaryAction={{ label: 'Getting Started Guide', href: '/getting-started' }}
      />
    </>
  )
}
