import { Navigate, Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import DashboardPreview from '../../components/ui/DashboardPreview'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import { ShieldIcon } from '../../components/ui/icons'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import { findSection, findItem } from '../../data/navigation'
import { INDUSTRY_CONTENT } from '../../data/industryContent'
import { FEATURE_LIBRARY } from '../../data/productPages'
import { findPage } from '../../data/clusterUtils'
import { useCasesCluster } from '../../data/clusters/useCases'
import { rolesCluster } from '../../data/clusters/roles'
import { getIndustryVisual } from '../../data/visualAssets'
import SectionTitle from '../../components/ui/SectionTitle'

/*
  Richer template for the industry nav items that have an entry in
  src/data/industryContent.js -- same URLs as the Phase 02 nav
  (/industries/:slug), just a deeper page than the generic
  CategoryItem stub. Items without content (call-centers,
  remote-companies) keep rendering through CategoryItem as before.
*/
export default function IndustryPage({ slug }) {
  const section = findSection('industries')
  const item = findItem('industries', slug)
  const content = INDUSTRY_CONTENT[slug]
  if (!section || !item || !content) return <Navigate to="/industries" replace />

  const path = `/industries/${slug}`
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
    { label: item.label },
  ]
  const capabilities = content.capabilities.map((key) => FEATURE_LIBRARY[key])
  const relatedRolePages = content.relatedRoles.map((s) => findPage(rolesCluster, s)).filter(Boolean)
  const relatedUseCasePages = content.relatedUseCases.map((s) => findPage(useCasesCluster, s)).filter(Boolean)

  const industryVisual = getIndustryVisual(slug)

  return (
    <>
      <Seo
        title={`${item.label} | ZUZU`}
        description={content.problemStatement}
        path={path}
        breadcrumbs={breadcrumbItems}
        faq={content.faq}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Industries"
        badgeVariant="purple"
        title={item.label}
        description={content.problemStatement}
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Schedule Industry Demo', href: '/company/contact' }}
        visualType="photo"
        image={industryVisual}
        bgImage={industryVisual.bgImage}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-2xl border border-line bg-surface/50 p-6 sm:p-8">
            <div className="max-w-xl mb-6">
              <EyebrowBadge>Product Capability</EyebrowBadge>
              <h3 className="text-lg font-bold text-ink mt-3">The ZUZU Admin Portal, applied to {item.label}</h3>
              <p className="text-xs text-muted mt-1">An illustrative preview of the activity, attendance and analytics views an administrator works with. The notes below explain how each one applies to this industry.</p>
            </div>
            <DashboardPreview type={slug === 'it-saas' || slug === 'startups' ? 'activity' : slug === 'call-centers' || slug === 'bpo' ? 'attendance' : 'analytics'} />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-3 max-w-2xl">
          <SectionTitle eyebrow="Overview" className="text-xl sm:text-2xl">Why Workforce Visibility Matters Here?</SectionTitle>
          <p>{content.whyItMatters}</p>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Capabilities" className="text-xl sm:text-2xl">Relevant ZUZU Capabilities</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((feature) => (
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

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface p-6 flex flex-col gap-2">
              <h3 className="text-lg">How It Works</h3>
              <p className="text-sm">{content.workflow}</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6 flex flex-col gap-2">
              <h3 className="text-lg">Reporting &amp; Analytics</h3>
              <p className="text-sm">{content.reportingNote}</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6 flex flex-col gap-2">
              <h3 className="text-lg">Manager Visibility</h3>
              <p className="text-sm">{content.managerVisibilityNote}</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6 flex flex-col gap-2">
              <h3 className="text-lg">Remote Work &amp; Device Coverage</h3>
              <p className="text-sm">{content.remoteHybridNote}</p>
              <Link to="/remote-workforce" className="text-sm font-medium text-blue-400 hover:text-blue-300 mt-1">
                Explore Remote &amp; Hybrid Workforce &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {content.privacyNote && (
        <section className="py-14 sm:py-20">
          <Container>
            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:p-9 max-w-3xl">
              <ShieldIcon className="h-7 w-7 text-blue-400" />
              <SectionTitle eyebrow="Privacy" className="text-xl sm:text-2xl">Privacy Considerations</SectionTitle>
              <p>{content.privacyNote}</p>
              <div>
                <Link to="/security" className="text-sm font-medium text-blue-400 hover:text-blue-300">
                  Learn more about security &rarr;
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Use Cases" className="text-xl sm:text-2xl">Common Use Cases</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2">
            {content.useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-xl border border-line bg-surface p-5">
                <p className="text-base sm:text-lg font-semibold text-ink mb-1.5">{useCase.title}</p>
                <p className="text-[0.9375rem] sm:text-base text-muted leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Related" className="text-xl sm:text-2xl">Related Roles &amp; Use Cases</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedRolePages.map((role) => (
              <FeatureCard key={role.slug} title={role.title} description={role.metaDescription} href={`/roles/${role.slug}`} />
            ))}
            {relatedUseCasePages.map((useCase) => (
              <FeatureCard key={useCase.slug} title={useCase.title} description={useCase.metaDescription} href={`/use-cases/${useCase.slug}`} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={content.faq} />
        </Container>
      </section>

      <CTA
        title="Start Your 7-Day Free Trial"
        description="See ZUZU across your team, with no commitment required."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Explore the full platform', href: '/platform' }}
      />
    </>
  )
}
