import { Navigate } from 'react-router-dom'
import Container from '../components/ui/Container'
import FeatureCard from '../components/ui/FeatureCard'
import CTA from '../components/ui/CTA'
import FAQSection from '../components/ui/FAQSection'
import Seo from '../components/Seo'
import InternalPageHero from '../components/ui/InternalPageHero'
import ExpandedContentSection from '../components/ui/ExpandedContentSection'
import { findSection, findItem } from '../data/navigation'
import { NAV_ITEM_VISUALS } from '../data/visualAssets'
import { CATEGORY_ITEM_FAQS } from '../data/categoryItemFaqs'
import { CATEGORY_ITEM_CONTENT } from '../data/categoryItemContent'
import { FEATURE_LIBRARY } from '../data/productPages'
import { getPageFeatureContent } from '../data/pageFeatureContent'
import { LayersIcon } from '../components/ui/icons'
import SectionTitle from '../components/ui/SectionTitle'

// Nav items (product or solutions) that have a deeper SEO cluster
// (src/data/clusters/*) built around them get a callout linking to it,
// keyed by `${sectionKey}:${slug}`.
const NAV_ITEM_CLUSTER_LINKS = {
  'product:time-attendance': { href: '/time-attendance', label: 'Explore the full Time & Attendance Ecosystem' },
  'product:employee-activity': { href: '/activity', label: 'Explore the full Activity & Attendance Ecosystem' },
  'product:workforce-monitoring': { href: '/screenshot-privacy', label: 'Explore the full Screenshot & Privacy Ecosystem' },
  'product:ai-reports': { href: '/ai-analytics', label: 'Explore the full AI Reports & Analytics Ecosystem' },
  'product:workforce-analytics': { href: '/ai-analytics', label: 'Explore the full AI Reports & Analytics Ecosystem' },
  'product:manager-workspace': { href: '/manager', label: 'Explore the full Manager Workspace' },
  'solutions:behaviour-intelligence': { href: '/manager', label: 'Explore Behaviour Intelligence' },
  'product:admin-portal': { href: '/admin', label: 'Explore Centralized Admin & Governance' },
  'solutions:remote-workforce': { href: '/remote-workforce', label: 'Explore Remote & Hybrid Solutions' },
  'solutions:hybrid-workforce': { href: '/remote-workforce', label: 'Explore Remote & Hybrid Solutions' },
  'product:windows-agent': { href: '/windows-agent', label: 'Explore the ZUZU Windows Agent' },
}

export default function CategoryItem({ sectionKey, slug }) {
  const section = findSection(sectionKey)
  const item = findItem(sectionKey, slug)

  if (!section || !item) return <Navigate to={section?.href || '/'} replace />

  const path = `${section.href}/${item.slug}`
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: section.label, href: section.href },
    { label: item.label },
  ]

  const visualConfig = NAV_ITEM_VISUALS[`${sectionKey}:${slug}`] || {
    visualType: 'dashboard',
    dashboardType: 'analytics',
  }

  const faqItems = CATEGORY_ITEM_FAQS[`${sectionKey}:${slug}`] || []
  const content = CATEGORY_ITEM_CONTENT[`${sectionKey}:${slug}`]
  const capabilities = content?.capabilities.map((key) => FEATURE_LIBRARY[key]).filter(Boolean) || []

  return (
    <>
      <Seo title={`${item.label} | ZUZU`} description={item.description} path={path} breadcrumbs={breadcrumbItems} />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge={section.label}
        badgeVariant="purple"
        title={item.label}
        description={item.description}
        clusterLink={NAV_ITEM_CLUSTER_LINKS[`${sectionKey}:${slug}`]}
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Schedule Demo', href: '/company/contact' }}
        visualType={visualConfig.visualType}
        dashboardType={visualConfig.dashboardType}
        image={visualConfig.image}
        bgImage={visualConfig.bgImage}
        humanImage={visualConfig.humanImage}
        imagePosition={visualConfig.imagePosition}
      />

      {content && (
        <section className="py-14 sm:py-20 border-b border-line">
          <Container className="flex flex-col gap-14">
            {/* Overview & Connected System Callout */}
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <SectionTitle eyebrow="Overview" className="text-2xl sm:text-3xl font-bold text-ink">Why It Matters?</SectionTitle>
                <p className="text-base sm:text-lg text-muted leading-relaxed">{content.whyItMatters}</p>
              </div>

              {content.connectedSystemNote && (
                <div className="lg:col-span-5 flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 sm:p-7 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <LayersIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-ink">Part of One Connected System</h3>
                  <p className="text-sm text-muted leading-relaxed">{content.connectedSystemNote}</p>
                </div>
              )}
            </div>

            {/* Relevant Capabilities */}
            {capabilities.length > 0 && (
              <div className="flex flex-col gap-8 pt-10 border-t border-line">
                <SectionTitle eyebrow="Capabilities" className="text-xl sm:text-2xl">Relevant ZUZU Capabilities</SectionTitle>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {capabilities.map((feature, i) => (
                    <FeatureCard
                      key={feature.title}
                      index={i}
                      icon={<feature.icon className="h-5 w-5" />}
                      title={feature.title}
                      description={feature.description}
                      href={feature.href}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Practical Use Cases */}
            {content.useCases?.length > 0 && (
              <div className="flex flex-col gap-8 pt-10 border-t border-line">
                <SectionTitle eyebrow="In Practice" className="text-xl sm:text-2xl">Practical Use Cases</SectionTitle>
                <div className="grid gap-5 sm:grid-cols-2">
                  {content.useCases.map((useCase) => (
                    <div key={useCase.title} className="rounded-xl border border-line bg-surface p-6 hover:border-line-strong transition-colors">
                      <p className="text-base sm:text-lg font-semibold text-ink mb-2">{useCase.title}</p>
                      <p className="text-[0.9375rem] sm:text-base text-muted leading-relaxed">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>
      )}

      <ExpandedContentSection path={path} />

      <ExpandedContentSection sections={getPageFeatureContent(sectionKey, slug)} />

      <FAQSection
        title="Frequently asked questions"
        description={`Common questions about ${item.label} on ZUZU.`}
        items={faqItems}
      />

      <CTA
        title="Ready to See ZUZU in Action?"
        description="Start a free trial or get in touch with our team."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Contact us', href: '/company/contact' }}
      />
    </>
  )
}
