import Container from '../../components/ui/Container'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import { UsersIcon, SparklesIcon, GlobeIcon, ShieldIcon } from '../../components/ui/icons'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import SectionTitle from '../../components/ui/SectionTitle'

const FAQ_ITEMS = [
  {
    question: 'Does ZUZU hire remote employees?',
    answer: "Yes, ZUZU describes itself as distributed-first, with people working from wherever they're most productive and collaborating asynchronously rather than requiring a single office.",
  },
  {
    question: 'What does ZUZU look for when hiring, based on how it describes itself?',
    answer: "The company frames its culture around high ownership (small, empowered teams where engineers and designers shape product direction directly) and modern tooling (React, Windows-native agent work, and AI analysis pipelines).",
  },
  {
    question: "Are there specific open roles listed on this page?",
    answer: "Not as fixed job listings. ZUZU says it's actively reviewing expressions of interest across systems engineering, full-stack product development, and customer success, and asks interested candidates to reach out directly.",
  },
  {
    question: "How do I apply if I don't see a role that matches what I do?",
    answer: 'Contact the ZUZU team directly and share your background or portfolio, the careers page is set up as an open expression-of-interest channel rather than a fixed list of postings.',
  },
  {
    question: 'What kind of teams exist at ZUZU?',
    answer: "The page describes small, empowered engineering and product teams, rather than large, layered departments, consistent with the 'high ownership' value it lists.",
  },
  {
    question: "Does ZUZU's stated privacy stance as a company match what the product does for customers?",
    answer: "ZUZU describes its own culture as 'privacy obsessed,' referencing on-device redaction and avoiding intrusive tracking, the same on-device private-region redaction approach the product applies to customer screenshot data.",
  },
  {
    question: 'What technologies does the ZUZU engineering team actually work with?',
    answer: 'Per the modern tooling section on this page: modern React on the front end, lightweight Windows-native agents, and AI analysis pipelines for reporting.',
  },
  {
    question: 'Where can I read more about ZUZU as a company before applying?',
    answer: "The about page covers ZUZU's mission and platform in more depth than this careers page does.",
  },
]

export default function Careers() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Company', href: '/company/about' },
    { label: 'Careers' },
  ]

  return (
    <>
      <Seo
        title="Careers at ZUZU | ZUZU"
        description="Join the team building modern, privacy-first workforce visibility and intelligence for distributed and hybrid teams."
        path="/company/careers"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      {/* 1. Full-Width Hero Banner */}
      <FullWidthHumanHero
        backgroundImage="/images/workforce/zuzu-team-collaboration.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Join Our Team"
        badgeVariant="purple"
        title="Careers at ZUZU"
        description="We are building the future of workforce intelligence, where transparency, on-device data privacy, and objective productivity metrics empower modern teams."
        primaryCta={{ label: 'Explore Open Roles', href: '#open-roles' }}
        secondaryCta={{ label: 'About ZUZU', href: '/company/about' }}
      />

      {/* 2. Values / Culture */}
      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-12">
          <div>
            <EyebrowBadge>Life at ZUZU</EyebrowBadge>
            <TypewriterHeading as="h2" className="text-2xl sm:text-3xl font-bold text-ink mt-3">Why Build With Us?</TypewriterHeading>
            <p className="text-sm text-muted mt-2 max-w-xl">
              We practice what we build. Autonomous, distributed engineering and product teams focused on high-impact work.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card padding="md" className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 hover:border-brand/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                <GlobeIcon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-ink">Distributed-First</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Work from wherever you are most productive, with flexible asynchronous collaboration rhythms.
              </p>
            </Card>

            <Card padding="md" className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 hover:border-brand/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
                <ShieldIcon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-ink">Privacy Obsessed</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We believe in ethical telemetry: zero intrusive spyware, on-device redaction, and total employee trust.
              </p>
            </Card>

            <Card padding="md" className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 hover:border-brand/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20">
                <SparklesIcon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-ink">High Ownership</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Small, empowered teams where every engineer and designer directly shapes product direction.
              </p>
            </Card>

            <Card padding="md" className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 hover:border-brand/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20">
                <UsersIcon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-ink">Modern Tooling</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Modern React, high-performance telemetry, lightweight Windows native agents, and AI analysis pipelines.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* 3. Open Positions Notice */}
      <section id="open-roles" className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex justify-center">
          <div className="rounded-2xl border border-line bg-surface p-7 sm:p-10 max-w-3xl w-full shadow-sm">
            <SectionTitle eyebrow="Careers" className="text-xl sm:text-2xl font-bold text-ink">Current Openings</SectionTitle>
            <p className="text-sm sm:text-base text-muted leading-relaxed mt-3">
              We are actively reviewing expressions of interest for upcoming positions across systems engineering, full-stack product development, and customer success. Reach out to our team with your portfolio.
            </p>
            <div className="mt-6 pt-5 border-t border-line/60">
              <Button to="/company/contact" variant="outline" size="sm">
                Submit Expression of Interest &rarr;
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Interested in Joining ZUZU?"
        description="Send your background or resume directly to our team."
        primaryAction={{ label: 'Contact our team', href: '/company/contact' }}
        secondaryAction={{ label: 'About ZUZU', href: '/company/about' }}
      />
    </>
  )
}
