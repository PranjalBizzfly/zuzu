import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import SectionHeader from '../../components/ui/SectionHeader'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionTitle from '../../components/ui/SectionTitle'

/*
  Enriches the existing Phase 02 /resources/alternatives stub in
  place. Same constraint as ComparisonsPage.jsx: no specific
  alternative product is named or characterized, since no verified,
  current information about one has ever been provided in this
  project. This page focuses entirely on evaluation criteria.
*/
const CRITERIA = [
  { title: 'Activity Visibility', description: 'How work activity is captured and reviewed.', href: '/use-cases/employee-activity' },
  { title: 'Attendance', description: 'How attendance and working hours are recorded.', href: '/use-cases/attendance' },
  { title: 'Screenshots & Privacy', description: 'Whether screenshot capture includes privacy protections.', href: '/screenshot-privacy' },
  { title: 'Analytics', description: 'Whether trends over time are surfaced, not just snapshots.', href: '/use-cases/workforce-analytics' },
  { title: 'Reports', description: 'What report types exist and whether they export.', href: '/use-cases/workforce-reporting' },
  { title: 'Remote & Hybrid Support', description: 'Whether the tool works the same regardless of location.', href: '/remote-workforce' },
  { title: 'Administration', description: 'How employees, teams and settings are managed.', href: '/admin' },
  { title: 'Installation', description: 'How the tool gets deployed and what it requires.', href: '/installation' },
  { title: 'Documentation & Support', description: 'Whether setup and troubleshooting are well documented.', href: '/knowledge-base' },
]

const FAQ_ITEMS = [
  {
    question: 'Does this page tell me which alternative to ZUZU is the best choice?',
    answer: 'No. This page intentionally avoids naming or ranking competing products, it lays out evaluation criteria you can apply to whatever tools you\'re actually considering.',
  },
  {
    question: 'What are the criteria this page recommends evaluating alternatives against?',
    answer: 'Nine core areas: activity visibility, attendance, screenshots and privacy, analytics, reports, remote and hybrid support, administration, installation, and documentation and support.',
  },
  {
    question: "Why doesn't this page name specific competing products?",
    answer: "This site doesn't have verified, current information about specific alternatives to present as fact, and vendor features change. The recommendation is to check any alternative against its own current documentation.",
  },
  {
    question: "How does ZUZU's own screenshot privacy approach map onto the 'Screenshots & privacy' criterion?",
    answer: 'ZUZU redacts private regions, passwords, banking, webmail, messaging, password managers, notifications, on-device before a screenshot is stored or uploaded, which is the kind of protection this criterion is checking for.',
  },
  {
    question: "What does the 'Installation' criterion look like for ZUZU specifically?",
    answer: 'ZUZU installs as an ~80 MB Windows agent that runs from the system tray, queues data while offline, and updates automatically, Windows-only, with no macOS or Linux support.',
  },
  {
    question: 'Is this evaluation checklist specific to Windows-based tools?',
    answer: "Not inherently, but ZUZU itself currently supports Windows devices only through the Windows agent. If cross-platform support matters to you, check that specifically against any alternative you're evaluating.",
  },
  {
    question: "Can I use this checklist if I've already chosen ZUZU, just to double-check the decision?",
    answer: 'Yes, the same nine criteria work as a sanity check on an existing choice, not only as a first-pass comparison tool.',
  },
  {
    question: 'Where can I see these same criteria compared directly against ZUZU\'s documented capabilities?',
    answer: 'The comparisons page lays out a structured matrix against these kinds of dimensions, based on what ZUZU documents about itself.',
  },
]

export default function AlternativesPage() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Alternatives' }]

  return (
    <>
      <Seo
        title="Alternatives | ZUZU"
        description="What to consider when evaluating workforce visibility alternatives, evaluation criteria, not a ranking or characterization of specific competing products."
        path="/resources/alternatives"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <FullWidthHumanHero
        backgroundImage="/images/resources/zuzu-resource-alternatives.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Software Evaluation"
        badgeVariant="purple"
        title="Evaluating Workforce Visibility Alternatives"
        description="A neutral evaluation checklist for organizations comparing workforce monitoring tools, focusing on privacy standards, lightweight deployment, and deep reporting."
        primaryCta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Compare Capabilities', href: '/resources/comparisons' }}
        featureTags={[
          { label: 'Evaluation Matrix', href: '/resources/comparisons' },
          { label: 'Privacy Standards', href: '/screenshot-privacy' },
          { label: 'System Overhead', href: '/installation/windows' },
          { label: 'Export Depth', href: '/reports/export-reports' },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Evaluation" className="text-xl sm:text-2xl">What to Consider When Evaluating Alternatives</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CRITERIA.map((c) => (
              <FeatureCard key={c.href} title={c.title} description={c.description} href={c.href} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex justify-center">
          <div className="rounded-2xl border border-line bg-surface p-7 sm:p-9 max-w-3xl w-full shadow-sm hover:border-brand/30 transition-colors">
            <TypewriterHeading as="h2" className="text-lg sm:text-xl mb-3 font-bold text-ink">A Note on Named Alternatives</TypewriterHeading>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              This page intentionally doesn't list or describe specific competing products.
              Recommend checking any alternative you're considering against its own current
              documentation, using the criteria above as a starting point.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Resources" className="text-xl sm:text-2xl">Related Resources</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Comparisons" description="A framework for comparing workforce visibility software." href="/resources/comparisons" />
            <FeatureCard title="Guides" description="Educational guides on workforce visibility concepts." href="/resources/guides" />
            <FeatureCard title="ZUZU Platform Overview" description="Explore ZUZU's own documented capabilities." href="/platform" />
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
        title="See ZUZU's Capabilities for Yourself"
        description="Start a 7-day free trial, no card required."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Talk to us', href: '/company/contact' }}
      />
    </>
  )
}
