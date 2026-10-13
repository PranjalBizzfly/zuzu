import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import SectionHeader from '../../components/ui/SectionHeader'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import ExpandedContentSection from '../../components/ui/ExpandedContentSection'
import { KNOWLEDGE_BASE_CATEGORIES } from '../../data/knowledgeBaseDirectory'
import SectionTitle from '../../components/ui/SectionTitle'

const FAQ_ITEMS = [
  {
    question: 'What is the difference between this Support page and the Knowledge Base page?',
    answer: 'This page reuses the same category directory as the knowledge base, but frames it as a support entry point, getting help fast, rather than a general documentation index.',
  },
  {
    question: 'What is the fastest way to get direct help from the ZUZU team?',
    answer: 'Use the "contact support team" link on this page, which goes straight to the contact page.',
  },
  {
    question: 'Does this page include troubleshooting checklists?',
    answer: 'Yes, it links through to the dedicated troubleshooting page, and troubleshooting is one of the featured tags at the top of this page.',
  },
  {
    question: "How do I activate a newly installed agent if I'm stuck partway through?",
    answer: 'The "agent activation" feature tag links to the activation walkthrough, which covers connecting an installed agent to your organization using its activation code.',
  },
  {
    question: 'Is this page useful for both first-time setup questions and ongoing issues?',
    answer: 'Yes, it links to both the getting started guide for setup and troubleshooting for issues that come up afterward.',
  },
  {
    question: 'Does the Support Hub list every documentation category, or just a few highlights?',
    answer: 'It lists every category from the same directory data as the full knowledge base, not a trimmed preview.',
  },
  {
    question: "Where do I go if my question isn't answered in any of these categories?",
    answer: 'Contact support directly, or browse the FAQ\'s page linked at the bottom of this page.',
  },
  {
    question: 'Can I reach the ZUZU support team through this page?',
    answer: 'Yes, the "support team" panel links directly to the contact support team page to get in touch.',
  },
]

/*
  Enriches the existing Phase 02 /resources/support stub in place.
  Reuses the Phase 14 Knowledge Base directory data directly rather
  than re-authoring a second, competing category list -- this page is
  a topic-based support entry point, not a duplicate of /knowledge-base.
*/
export default function SupportHubPage() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Support' }]

  return (
    <>
      <Seo
        title="Support | ZUZU"
        description="The central ZUZU support entry point, find setup guides, troubleshooting, and how to contact our team."
        path="/resources/support"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <FullWidthHumanHero
        backgroundImage="/images/resources/zuzu-resource-support.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Customer Success"
        badgeVariant="blue"
        title="Support &amp; Help Center"
        description="Find setup guides by topic, diagnostic troubleshooting checklists, or get in touch with our engineering team directly."
        primaryCta={{ label: 'Contact Support Team', href: '/company/contact' }}
        secondaryCta={{ label: 'Getting Started', href: '/getting-started' }}
        featureTags={[
          { label: 'Getting Started', href: '/getting-started' },
          { label: 'Troubleshooting', href: '/troubleshooting' },
          { label: 'Agent Activation', href: '/installation/activation' },
          { label: 'Direct Contact', href: '/company/contact' },
        ]}
      />

      {/* Category quick-jump bar */}
      <section className="sticky top-16 z-20 border-b border-line bg-page/90 backdrop-blur-md py-3 shadow-xs">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider shrink-0 mr-1">Categories:</span>
            {KNOWLEDGE_BASE_CATEGORIES.map((cat) => {
              const catId = cat.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
              return (
                <a
                  key={cat.label}
                  href={`#${catId}`}
                  className="shrink-0 px-3 py-1.5 rounded-lg border border-line bg-surface hover:border-brand/40 text-xs font-medium text-ink transition-colors"
                >
                  {cat.label}
                </a>
              )
            })}
          </div>
        </Container>
      </section>

      {KNOWLEDGE_BASE_CATEGORIES.map((category, idx) => {
        const catId = category.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        return (
          <section
            key={category.label}
            id={catId}
            className={`py-14 sm:py-20 border-t border-line scroll-mt-28 ${idx % 2 === 1 ? 'bg-surface/30' : ''}`}
          >
            <Container className="flex flex-col gap-8">
              <SectionTitle eyebrow="Support" className="text-xl sm:text-2xl">{category.label}</SectionTitle>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <FeatureCard key={item.href} title={item.title} description={item.description} href={item.href} />
                ))}
              </div>
            </Container>
          </section>
        )
      })}

      <ExpandedContentSection path="/resources/support" />

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Can't Find What You Need?"
        description="Reach out to our team directly."
        primaryAction={{ label: 'Contact support', href: '/company/contact' }}
        secondaryAction={{ label: "Browse FAQ's", href: '/resources/faqs' }}
      />
    </>
  )
}
