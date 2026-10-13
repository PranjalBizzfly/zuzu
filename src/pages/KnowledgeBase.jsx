import Container from '../components/ui/Container'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'
import FAQ from '../components/ui/FAQ'
import CTA from '../components/ui/CTA'
import Seo from '../components/Seo'
import InternalPageHero from '../components/ui/InternalPageHero'
import { KNOWLEDGE_BASE_CATEGORIES } from '../data/knowledgeBaseDirectory'
import SectionTitle from '../components/ui/SectionTitle'

/*
  Pure directory/index page -- organizes links to real pages across
  every ecosystem (Phases 04-14) into the categories this phase's
  brief specifies. No content is duplicated here; every card links to
  the actual page that covers that topic in depth.
*/
const FAQ_ITEMS = [
  {
    question: 'How is the Knowledge Base organized?',
    answer: 'By topic category, getting started, activity and attendance, screenshots and privacy, reports and analytics, manager and admin tools, remote and hybrid support, and troubleshooting, with each category linking to the pages that cover it in depth.',
  },
  {
    question: "Where should I start if I'm new to ZUZU?",
    answer: 'The getting started guide, linked from this page, walks through the first-time setup journey from trial to first reports.',
  },
  {
    question: 'Can I search the Knowledge Base, or do I have to browse by category?',
    answer: "This page is organized as a category index rather than a free-text search tool, browse the category closest to your topic and follow through to the specific page.",
  },
  {
    question: 'Does the Knowledge Base include troubleshooting steps?',
    answer: 'Yes. The troubleshooting category links to common starting checks, like confirming the agent is visible in the system tray or that a device has internet connectivity.',
  },
  {
    question: 'Is the Knowledge Base kept current as ZUZU adds features?',
    answer: "Each card links directly to the actual page covering that topic, rather than duplicating its content here, so it reflects whatever is currently documented on those pages.",
  },
  {
    question: 'Is the Knowledge Base useful for managers, or is it admin-focused?',
    answer: 'Both. Categories cover manager-facing topics like the manager workspace and reports, alongside admin-facing topics like employee setup and monitoring policy.',
  },
  {
    question: "What if my question isn't covered by any category here?",
    answer: 'Reach out to the ZUZU team directly, the CTA on this page links straight to contact.',
  },
  {
    question: 'Does the Knowledge Base explain how screenshot redaction works?',
    answer: 'Yes, under the screenshots and privacy category, including the pages on private-region redaction and privacy-aware monitoring.',
  },
]

export default function KnowledgeBase() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Knowledge Base' }]

  return (
    <>
      <Seo
        title="Knowledge Base | ZUZU"
        description="The ZUZU knowledge base: getting started, activity and attendance, screenshots and privacy, reports and analytics, manager and admin tools, remote and hybrid support, and troubleshooting."
        path="/knowledge-base"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Documentation"
        badgeVariant="purple"
        title="ZUZU Knowledge Base"
        description="Everything about setting up and using ZUZU, organized by topic. Each category links directly to the page that covers it in depth."
        cta={{ label: 'Getting Started Guide', href: '/getting-started' }}
        secondaryCta={{ label: 'Contact Support', href: '/company/contact' }}
        visualType="illustration"
        illustrationVariant="security"
      />

      {/* Quick Topic Navigation Bar */}
      <section className="py-6 border-b border-line bg-surface/50 sticky top-16 z-20 backdrop-blur-md">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-semibold text-muted uppercase tracking-wider shrink-0 mr-2">Jump to:</span>
            {KNOWLEDGE_BASE_CATEGORIES.map((category) => (
              <a
                key={category.label}
                href={`#${category.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="shrink-0 px-3 py-1.5 rounded-lg border border-line bg-surface font-medium text-ink hover:border-green hover:text-green transition-all"
              >
                {category.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {KNOWLEDGE_BASE_CATEGORIES.map((category, idx) => (
        <section
          key={category.label}
          id={category.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          className={`py-14 sm:py-20 ${idx > 0 ? 'border-t border-line' : ''} ${idx % 2 === 1 ? 'bg-surface/30' : ''}`}
        >
          <Container className="flex flex-col gap-8">
            <div>
              <SectionTitle eyebrow="Topic Guide" className="text-xl sm:text-2xl font-bold text-ink">{category.label}</SectionTitle>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <FeatureCard key={item.href} title={item.title} description={item.description} href={item.href} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Not Sure Where to Start?"
        description="Follow the getting started guide, or reach out to our team."
        primaryAction={{ label: 'Getting Started', href: '/getting-started' }}
        secondaryAction={{ label: 'Contact us', href: '/company/contact' }}
      />
    </>
  )
}
