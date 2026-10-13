import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import FeatureCard from '../components/ui/FeatureCard'
import CTA from '../components/ui/CTA'
import Seo from '../components/Seo'
import InternalPageHero from '../components/ui/InternalPageHero'
import SectionTitle from '../components/ui/SectionTitle'
import { findSection } from '../data/navigation'
import { SECTION_VISUALS } from '../data/visualAssets'
import {
  ClockIcon,
  ActivityIcon,
  SparklesIcon,
  BarChartIcon,
  UsersIcon,
  SettingsIcon,
  MonitorIcon,
  GlobeIcon,
  BuildingIcon,
  EyeIcon,
  TrendingUpIcon,
  FileTextIcon,
  LayersIcon,
  HeadsetIcon,
  HelpCircleIcon,
  InstallationIcon,
  SlidersIcon,
  BriefcaseIcon,
} from '../components/ui/icons'

const SLUG_ICONS = {
  'workforce-monitoring': EyeIcon,
  'employee-activity': ActivityIcon,
  'time-attendance': ClockIcon,
  'ai-reports': SparklesIcon,
  'workforce-analytics': BarChartIcon,
  'manager-workspace': UsersIcon,
  'admin-portal': SettingsIcon,
  'windows-agent': MonitorIcon,
  'remote-workforce': GlobeIcon,
  'hybrid-workforce': BuildingIcon,
  'workforce-visibility': EyeIcon,
  'employee-productivity': TrendingUpIcon,
  'workforce-reporting': FileTextIcon,
  'behaviour-intelligence': LayersIcon,
  guides: FileTextIcon,
  'how-to': InstallationIcon,
  'knowledge-hub': HelpCircleIcon,
  comparisons: SlidersIcon,
  alternatives: LayersIcon,
  faqs: HelpCircleIcon,
  support: HeadsetIcon,
}

export default function CategoryHub({ sectionKey }) {
  const section = findSection(sectionKey)
  if (!section) return null

  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: section.label }]
  const visualConfig = SECTION_VISUALS[sectionKey] || { visualType: 'dashboard', dashboardType: 'analytics' }

  return (
    <>
      <Seo
        title={`${section.label} | ZUZU`}
        description={section.description}
        path={section.href}
        breadcrumbs={breadcrumbItems}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge={section.label}
        badgeVariant="purple"
        title={section.label}
        description={section.description}
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={
          sectionKey === 'product'
            ? { label: 'Explore Platform', href: '/platform' }
            : { label: 'Contact Team', href: '/company/contact' }
        }
        visualType={visualConfig.visualType}
        dashboardType={visualConfig.dashboardType}
        image={visualConfig.image}
        bgImage={visualConfig.bgImage}
        humanImage={visualConfig.humanImage}
        illustrationVariant={visualConfig.illustrationVariant}
      />

      {section.overview && (
        <section className="py-14 sm:py-20 border-b border-line bg-surface/30">
          <Container className="max-w-4xl">
            <div className="rounded-2xl border border-line bg-surface p-7 sm:p-10 shadow-sm flex flex-col gap-4">
              <SectionTitle eyebrow="Architecture" className="text-xl sm:text-2xl font-bold text-ink">Ecosystem Overview</SectionTitle>
              <p className="text-base sm:text-lg text-muted leading-relaxed">{section.overview}</p>
            </div>
          </Container>
        </section>
      )}

      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-10">
            <div>
              <SectionTitle eyebrow="Explore" className="text-xl sm:text-2xl">{`Explore ${section.label}`}</SectionTitle>
              <p className="text-sm sm:text-base text-muted mt-2">Select a capability below to view documentation and features.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, i) => {
                const IconComponent = SLUG_ICONS[item.slug] || BriefcaseIcon
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

            {sectionKey === 'product' && (
              <div className="pt-4 flex items-center">
                <Link
                  to="/platform"
                  className="group inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink hover:border-green hover:text-green transition-all shadow-sm"
                >
                  <span>Explore the full ZUZU platform</span>
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1 text-green">&rarr;</span>
                </Link>
              </div>
            )}
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
