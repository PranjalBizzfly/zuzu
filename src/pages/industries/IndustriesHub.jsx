import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import {
  ShieldIcon,
  CodeIcon,
  HeadsetIcon,
  PhoneIcon,
  PaletteIcon,
  BriefcaseIcon,
  RocketIcon,
  BuildingIcon,
  GlobeIcon,
} from '../../components/ui/icons'
import { findSection } from '../../data/navigation'
import SectionTitle from '../../components/ui/SectionTitle'

const INDUSTRY_ICONS = {
  'it-saas': CodeIcon,
  bpo: HeadsetIcon,
  'call-centers': PhoneIcon,
  'digital-agencies': PaletteIcon,
  consulting: BriefcaseIcon,
  startups: RocketIcon,
  enterprise: BuildingIcon,
  'remote-companies': GlobeIcon,
}

const CONNECTED_ECOSYSTEMS = [
  { title: 'Remote & Hybrid Workforce', description: 'Visibility for distributed and hybrid teams.', href: '/remote-workforce' },
  { title: 'Reports + Exports Ecosystem', description: 'Reporting and analytics across any industry.', href: '/reports' },
  { title: 'Use Cases', description: 'ZUZU organized by business problem.', href: '/use-cases' },
  { title: 'Roles', description: 'ZUZU organized by who uses it.', href: '/roles' },
]

export default function IndustriesHub() {
  const section = findSection('industries')
  if (!section) return null

  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Industries' }]

  return (
    <>
      <Seo
        title="Industries | ZUZU"
        description="How ZUZU supports different business environments, from IT and professional services to healthcare administration, logistics and government, with workforce visibility, reporting and analytics."
        path="/industries"
        breadcrumbs={breadcrumbItems}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Industries"
        badgeVariant="purple"
        title="ZUZU by Industry"
        description="Every business environment has a different workforce visibility challenge, a distributed engineering team, a shift-based operations floor, a firm of consultants who rarely share an office. ZUZU's underlying capabilities stay the same; how they're applied differs by industry."
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Contact Industry Specialist', href: '/company/contact' }}
        visualType="illustration"
        illustrationVariant="network"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-8">
            <div>
              <SectionTitle eyebrow="Industries" className="text-xl sm:text-2xl">Supported Industry Sectors</SectionTitle>
              <p className="text-sm text-muted mt-1">Select an industry to explore tailored workforce workflows and visibility patterns.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, i) => {
                const IconComponent = INDUSTRY_ICONS[item.slug] || BuildingIcon
                return (
                  <FeatureCard
                    key={item.slug}
                    index={i}
                    icon={<IconComponent className="h-5 w-5 text-green" />}
                    title={item.label}
                    description={item.description}
                    href={`${section.href}/${item.slug}`}
                  />
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <SectionTitle eyebrow="Ecosystems" className="text-xl sm:text-2xl">Connected Ecosystems</SectionTitle>
            <p className="text-sm text-muted">Other ways to explore ZUZU's workforce management capabilities.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONNECTED_ECOSYSTEMS.map((item, i) => (
              <FeatureCard key={item.href} index={i} title={item.title} description={item.description} href={item.href} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:p-9 max-w-3xl">
            <ShieldIcon className="h-7 w-7 text-blue-400" />
            <SectionTitle eyebrow="Privacy" className="text-xl sm:text-2xl">Privacy Across Every Industry</SectionTitle>
            <p>
              Whether you're in financial consulting or healthcare-adjacent IT, ZUZU's on-device private-region redaction
              ensures visibility doesn't compromise confidentiality.
            </p>
            <div>
              <Link to="/security" className="text-sm font-medium text-blue-400 hover:text-blue-300">
                Learn more about security &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to See ZUZU in Action?"
        description="Start a free trial or get in touch with our team."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Contact us', href: '/company/contact' }}
      />
    </>
  )
}
