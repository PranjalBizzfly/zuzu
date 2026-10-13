import { Navigate, Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import DashboardPreview from '../../components/ui/DashboardPreview'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import ZuzuImage from '../../components/ui/ZuzuImage'
import { ShieldIcon, CheckCircleIcon } from '../../components/ui/icons'
import { findPage, getResolvedFeatures, getRelatedPages } from '../../data/clusterUtils'
import { getClusterVisual } from '../../data/visualAssets'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import ExpandedContentSection from '../../components/ui/ExpandedContentSection'
import SectionHeader from '../../components/ui/SectionHeader'
import SectionTitle from '../../components/ui/SectionTitle'

/*
  Generic leaf-page template for any content cluster (src/data/clusters/*).
  Publishing a new page in a cluster is a data-file edit; this
  component and its route are shared across every cluster.
*/
export default function ClusterPage({ cluster, slug }) {
  const page = findPage(cluster, slug)
  if (!page) return <Navigate to={cluster.basePath} replace />

  const path = `${cluster.basePath}/${page.slug}`
  const features = getResolvedFeatures(page)
  const related = getRelatedPages(cluster, page)
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: cluster.badgeLabel, href: cluster.basePath },
    { label: page.title },
  ]

  const visualConfig = getClusterVisual(cluster.key, page)

  // Middle section blocks, keyed so page data can reorder them
  // (page.sectionOrder) instead of every page reading top-to-bottom
  // the same way. Default order matches the original fixed layout.
  const middleBlocks = {
    visual: (
      <section key="visual" className="py-14 sm:py-20">
        <Container>
          {page.visual === 'photo' ? (
            <ZuzuImage
              src={visualConfig.image?.src || visualConfig.bgImage}
              alt={`${page.title} workforce in practice`}
              aspectRatio="aspect-[21/9]"
              className="shadow-lg"
            />
          ) : (
            <DashboardPreview type={visualConfig.dashboardType || 'analytics'} />
          )}
        </Container>
      </section>
    ),
    benefits:
      page.benefits?.length || page.useCases?.length ? (
        <section key="benefits" className="py-14 sm:py-20 border-t border-line">
          <Container className="grid gap-10 lg:grid-cols-2">
            {page.benefits?.length > 0 && (
              <div className="flex flex-col gap-5">
                <SectionTitle eyebrow="Why It Helps" className="text-xl sm:text-2xl">Benefits</SectionTitle>
                <ul className="flex flex-col gap-3">
                  {page.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm sm:text-base text-muted leading-relaxed">
                      <CheckCircleIcon className="mt-1 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {page.useCases?.length > 0 && (
              <div className="flex flex-col gap-5">
                <SectionTitle eyebrow="In Practice" className="text-xl sm:text-2xl">Use Cases</SectionTitle>
                <div className="flex flex-col gap-4">
                  {page.useCases.map((useCase) => (
                    <div key={useCase.title} className="rounded-xl border border-line bg-surface p-5 hover:border-line-strong transition-colors">
                      <p className="text-base sm:text-lg font-semibold text-ink mb-1.5">{useCase.title}</p>
                      <p className="text-[0.9375rem] sm:text-base text-muted leading-relaxed">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>
      ) : null,
    features: (
      <section key="features" className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Capabilities" className="text-xl sm:text-2xl">Relevant Features</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
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
        </Container>
      </section>
    ),
    howItWorks: (
      <section key="howItWorks" className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-4 max-w-3xl">
          <SectionTitle eyebrow="How It Works" className="text-xl sm:text-2xl">How ZUZU Works Here</SectionTitle>
          <p className="text-base sm:text-lg text-muted leading-relaxed">{page.howItWorksNote}</p>
        </Container>
      </section>
    ),
  }
  const middleOrder = page.sectionOrder || ['visual', 'benefits', 'features', 'howItWorks']

  return (
    <>
      <Seo
        title={`${page.title} | ZUZU`}
        description={page.metaDescription}
        path={path}
        breadcrumbs={breadcrumbItems}
        faq={page.faq}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge={cluster.badgeLabel}
        badgeVariant={cluster.badgeVariant || 'purple'}
        title={page.title}
        description={page.intro || page.description}
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Explore Cluster', href: cluster.basePath }}
        visualType={visualConfig.visualType}
        dashboardType={visualConfig.dashboardType}
        image={visualConfig.image}
        bgImage={visualConfig.bgImage}
        humanImage={visualConfig.humanImage}
      />

      {middleOrder.map((key) => middleBlocks[key])}

      <ExpandedContentSection path={path} />

      {page.privacy && (
        <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
          <Container>
            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 sm:p-9 max-w-3xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <ShieldIcon className="h-6 w-6" />
              </div>
              <SectionTitle eyebrow="Trust &amp; Privacy" className="text-xl sm:text-2xl">Privacy &amp; Security</SectionTitle>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Privacy controls let admins configure what's monitored and how, so visibility doesn't come
                at the expense of employee trust.
              </p>
              <div className="pt-1">
                <Link to="/security" className="inline-flex items-center gap-1.5 text-sm font-semibold text-green hover:text-green-600 transition-colors">
                  <span>Learn more about security</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-14 sm:py-20 border-t border-line">
          <Container className="flex flex-col gap-8">
            <SectionTitle eyebrow="Keep Exploring" className="text-xl sm:text-2xl">Related Pages</SectionTitle>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <FeatureCard
                  key={item.slug}
                  index={i}
                  title={item.title}
                  description={item.metaDescription}
                  href={`${cluster.basePath}/${item.slug}`}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {page.externalLinks?.length > 0 && (
        <section className="py-14 sm:py-20 border-t border-line">
          <Container className="flex flex-col gap-8">
            <SectionTitle eyebrow="Across ZUZU" className="text-xl sm:text-2xl">See Also Across ZUZU</SectionTitle>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {page.externalLinks.map((link, i) => (
                <FeatureCard key={link.href} index={i} title={link.title} description={link.description} href={link.href} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={page.faq} />
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
