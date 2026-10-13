import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import SectionHeader from '../../components/ui/SectionHeader'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import { LEARNING_PAGES } from '../../data/clusters/learning'
import SectionTitle from '../../components/ui/SectionTitle'

const FAQ_ITEMS = [
  {
    question: 'What is the difference between this Guides page and the Learning Center?',
    answer: 'This page is an entry point into the learning center, the plain-language, conceptual pages covering topics like attendance, activity tracking, and privacy live at /learning, and this page links directly to each one.',
  },
  {
    question: 'Are these guides specific to ZUZU, or general workforce-visibility concepts?',
    answer: "They're plain-language, architectural explanations of general workforce visibility concepts, like how time tracking or privacy redaction work, illustrated through how ZUZU approaches each one.",
  },
  {
    question: 'Where do I find step-by-step instructions instead of conceptual explanations?',
    answer: 'The how-to page covers practical, step-by-step walkthroughs, installing the agent, activating an account, exporting reports, rather than conceptual guides.',
  },
  {
    question: 'Does this page help me evaluate workforce visibility software, not just learn about ZUZU?',
    answer: 'Yes, there\'s a short section on evaluation criteria, activity capture, privacy protections, reporting and export options, remote/hybrid support, with a link to the alternatives page for a fuller breakdown.',
  },
  {
    question: "Is there a guide explaining ZUZU's screenshot privacy and redaction approach?",
    answer: 'Yes, the workforce privacy guide, linked from this page, covers how on-device redaction works.',
  },
  {
    question: 'Is there a guide specifically about remote team visibility?',
    answer: 'Yes, remote team visibility is one of the featured learning center topics linked from this page.',
  },
  {
    question: 'How is the Learning Center itself organized?',
    answer: 'As one page per concept, what employee monitoring is, how time tracking works, the workforce privacy guide, remote team visibility, and others, rather than one long combined document.',
  },
  {
    question: 'Can I start a free trial directly from this page?',
    answer: 'Yes, the page ends with a CTA to start the free trial or browse the knowledge base if you want documentation instead.',
  },
]

/*
  Enriches the existing Phase 02 /resources/guides stub in place --
  a directory into the new Learning Center (/learning/*) plus a short
  evaluation-criteria section, folding in what the phase brief called
  "buyer/evaluation guides" rather than publishing 5 separate pages
  that would differ only by a swapped-in noun.
*/
export default function GuidesPage() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Guides' }]

  return (
    <>
      <Seo
        title="Guides | ZUZU"
        description="Educational guides on employee activity monitoring, attendance, workforce analytics, AI reports, screenshots, and remote and hybrid workforce management."
        path="/resources/guides"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <FullWidthHumanHero
        backgroundImage="/images/resources/zuzu-resource-guides.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Resource Guides"
        badgeVariant="blue"
        title="Guides & Best Practices"
        description="Plain-language, architectural explanations of workforce visibility software, from time attendance and activity tracking to privacy-first redaction."
        primaryCta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Explore Learning Center', href: '/learning' }}
        featureTags={[
          { label: 'Activity Tracking', href: '/learning/employee-activity-monitoring' },
          { label: 'Attendance Synthesis', href: '/learning/workday-tracking' },
          { label: 'Privacy Controls', href: '/learning/privacy-aware-monitoring' },
          { label: 'Remote Teams', href: '/learning/remote-workforce-monitoring' },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle eyebrow="Guides" className="text-xl sm:text-2xl">Learning Center</SectionTitle>
            <Link to="/learning" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-line bg-surface hover:border-brand/40 text-sm font-semibold text-brand transition-colors">
              Browse all learning pages &rarr;
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEARNING_PAGES.map((page) => (
              <FeatureCard key={page.slug} title={page.title} description={page.metaDescription} href={`/learning/${page.slug}`} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex justify-center">
          <div className="rounded-2xl border border-line bg-surface p-7 sm:p-9 max-w-3xl w-full shadow-sm">
            <SectionTitle eyebrow="Evaluation" className="text-xl sm:text-2xl">Evaluating Workforce Visibility Software</SectionTitle>
            <p className="text-sm sm:text-base text-muted leading-relaxed mt-3">
              Whatever tool you're considering, the same criteria tend to matter: how
              activity and attendance are captured, whether privacy protections are built
              in, what reporting and export options exist, and whether it works
              consistently for remote and hybrid teams. See{' '}
              <Link to="/resources/alternatives" className="font-semibold text-brand hover:underline">
                Alternatives
              </Link>{' '}
              for a fuller breakdown of these criteria.
            </p>
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
        title="Ready to See ZUZU in Action?"
        description="Start a free trial or explore the knowledge base."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Knowledge Base', href: '/knowledge-base' }}
      />
    </>
  )
}
