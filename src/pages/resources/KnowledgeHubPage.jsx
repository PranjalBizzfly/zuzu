import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import SectionHeader from '../../components/ui/SectionHeader'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import { KNOWLEDGE_BASE_CATEGORIES } from '../../data/knowledgeBaseDirectory'
import SectionTitle from '../../components/ui/SectionTitle'

const FAQ_ITEMS = [
  {
    question: 'What is the difference between the Knowledge Hub and the Knowledge Base?',
    answer: 'The knowledge hub previews a few top categories and links through to the knowledge base, which is the full documentation hub covering every category and guide.',
  },
  {
    question: 'Why does this page only show a few categories instead of everything?',
    answer: "It's designed as a bridge into the full knowledge base, so it previews the top three categories with three items each rather than duplicating the entire directory here.",
  },
  {
    question: 'Where can I see every documentation category ZUZU offers?',
    answer: 'The knowledge base page lists every category and links to the pages covering each one in depth.',
  },
  {
    question: 'Does the Knowledge Hub cover installation and platform architecture topics?',
    answer: 'Yes, the featured tags on this page link to installation, platform architecture, admin security, and troubleshooting.',
  },
  {
    question: 'Should I use the Knowledge Hub or the Knowledge Base as my main reference?',
    answer: 'The knowledge base is the canonical, complete hub, this knowledge hub page is meant as a quick entry point that hands off to it.',
  },
  {
    question: "Is the Knowledge Hub a good starting point if I'm brand new to ZUZU?",
    answer: 'Yes, it also links directly to the getting started guide alongside its documentation previews.',
  },
  {
    question: 'Does this page include troubleshooting steps directly?',
    answer: 'No, it links out to the dedicated troubleshooting page rather than duplicating those checks here.',
  },
  {
    question: 'How do the preview categories on this page relate to the ones in the full Knowledge Base?',
    answer: "They're the same underlying category data, trimmed to the first three categories with three items each, the full knowledge base shows every category and every item.",
  },
]

/*
  Fixes a naming inconsistency from Phase 14: /resources/knowledge-hub
  has existed as a nav stub since Phase 02, but Phase 14 built the real
  documentation hub at a new top-level /knowledge-base instead of using
  this existing route. Rather than restructure completed Phase 14 work,
  this page becomes a clear bridge to the real hub, previewing its top
  categories rather than duplicating them.
*/
export default function KnowledgeHubPage() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Knowledge Hub' }]
  const previewCategories = KNOWLEDGE_BASE_CATEGORIES.slice(0, 3)

  return (
    <>
      <Seo
        title="Knowledge Hub | ZUZU"
        description="ZUZU's full knowledge base and documentation, organized by topic."
        path="/resources/knowledge-hub"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <FullWidthHumanHero
        backgroundImage="/images/resources/zuzu-resource-knowledge-hub.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Documentation Center"
        badgeVariant="blue"
        title="Knowledge Hub &amp; Documentation"
        description="Reference material, architectural specifications, and configuration guides for ZUZU, organized topic-by-topic in the full knowledge base."
        primaryCta={{ label: 'Open Knowledge Base', href: '/knowledge-base' }}
        secondaryCta={{ label: 'Getting Started Guide', href: '/getting-started' }}
        featureTags={[
          { label: 'Installation', href: '/installation' },
          { label: 'Platform Architecture', href: '/platform' },
          { label: 'Admin Security', href: '/admin' },
          { label: 'Troubleshooting', href: '/troubleshooting' },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Start Here" className="text-xl sm:text-2xl">A Few Starting Points</SectionTitle>
          <div className="flex flex-col gap-10">
            {previewCategories.map((category) => (
              <div key={category.label} className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink">{category.label}</h3>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.slice(0, 3).map((item) => (
                    <FeatureCard key={item.href} title={item.title} description={item.description} href={item.href} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Browse the Full Knowledge Base"
        description="Every category and guide, organized by topic."
        primaryAction={{ label: 'Knowledge Base', href: '/knowledge-base' }}
        secondaryAction={{ label: 'Getting Started', href: '/getting-started' }}
      />
    </>
  )
}
