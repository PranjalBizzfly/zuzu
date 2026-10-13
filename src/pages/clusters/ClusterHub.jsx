import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import SectionHeader from '../../components/ui/SectionHeader'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import ExpandedContentSection from '../../components/ui/ExpandedContentSection'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import { getPagesByGroup } from '../../data/clusterUtils'
import { getClusterVisual } from '../../data/visualAssets'
import SectionTitle from '../../components/ui/SectionTitle'

/*
  Generic hub template for any content cluster (src/data/clusters/*).
  Renders that cluster's pages grouped by theme. Used for /platform and
  /time-attendance today; a new cluster needs a data file, not a new
  component.

  The FAQ section is optional (only rendered when the cluster's data
  file sets `faq`) -- most cluster hubs don't define one today, so this
  stays invisible for them exactly as before.
*/
export default function ClusterHub({ cluster }) {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: cluster.badgeLabel }]
  const visualConfig = getClusterVisual(cluster.key)

  return (
    <>
      <Seo
        title={`${cluster.hubTitle} | ZUZU`}
        description={cluster.hubMetaDescription}
        path={cluster.basePath}
        breadcrumbs={breadcrumbItems}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge={cluster.badgeLabel}
        badgeVariant="purple"
        title={cluster.hubTitle}
        description={cluster.hubDescription}
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Schedule Demo', href: '/company/contact' }}
        visualType={visualConfig.visualType}
        dashboardType={visualConfig.dashboardType}
        image={visualConfig.image}
        bgImage={visualConfig.bgImage}
        humanImage={visualConfig.humanImage}
        illustrationVariant={visualConfig.illustrationVariant}
      />

      {cluster.crossLinks?.length > 0 && (
        <section className="py-6 border-b border-line bg-surface/50">
          <Container>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
              <span className="font-semibold text-muted uppercase tracking-wider">Related Clusters:</span>
              {cluster.crossLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-medium text-green hover:text-green-600 transition-colors"
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {cluster.directorySections?.map((section) => (
        <section key={section.label} className="py-14 sm:py-20 border-t border-line">
          <Container className="flex flex-col gap-8">
            <SectionTitle eyebrow={cluster.badgeLabel || 'Explore'} className="text-xl sm:text-2xl">{section.label}</SectionTitle>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, i) => (
                <FeatureCard key={item.href} index={i} title={item.title} description={item.description} href={item.href} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      {cluster.groupsHeading && (
        <Container className="pt-10 sm:pt-14 pb-2">
          <SectionTitle eyebrow="Browse" wrapperClassName="border-t border-line pt-10 sm:pt-14" className="text-xl sm:text-2xl">{cluster.groupsHeading}</SectionTitle>
        </Container>
      )}

      {cluster.groups.map((group, idx) => {
        const pages = getPagesByGroup(cluster, group.key)
        if (!pages.length) return null

        return (
          <section key={group.key} className={`py-14 sm:py-20 ${idx > 0 || !cluster.groupsHeading ? 'border-t border-line' : ''}`}>
            <Container className="flex flex-col gap-8">
              <SectionTitle eyebrow={cluster.badgeLabel || 'Category'} className="text-xl sm:text-2xl">{group.label}</SectionTitle>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {pages.map((page, i) => (
                  <FeatureCard
                    key={page.slug}
                    index={i}
                    title={page.title}
                    description={page.metaDescription}
                    href={`${cluster.basePath}/${page.slug}`}
                  />
                ))}
              </div>
            </Container>
          </section>
        )
      })}

      <ExpandedContentSection path={cluster.basePath} />

      {cluster.faq?.length > 0 && (
        <section className="py-14 sm:py-20 border-t border-line">
          <Container className="flex flex-col gap-8">
            <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
            <FAQ items={cluster.faq} />
          </Container>
        </section>
      )}

      <CTA
        title="Start Your 7-Day Free Trial"
        description="See ZUZU across your team, with no commitment required."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Explore product features', href: '/product' }}
      />
    </>
  )
}
