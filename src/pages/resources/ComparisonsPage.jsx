import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import { CheckCircleIcon, SlidersIcon } from '../../components/ui/icons'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import { FEATURE_LIBRARY } from '../../data/productPages'
import SectionTitle from '../../components/ui/SectionTitle'

const DIMENSIONS = [
  'employeeActivity', 'timeAttendance', 'screenshotMonitoring', 'privacyControls',
  'aiReports', 'workforceAnalytics', 'behaviourIntelligence', 'managerWorkspace',
  'adminPortal', 'windowsAgent', 'remoteHybrid',
]

const COMPARISON_MATRIX = [
  { dimension: 'Time & Attendance Tracking', zuzu: 'Automatic hours and attendance tracking via the Windows agent', traditional: 'Some teams rely on manual timesheets or physical punch clocks' },
  { dimension: 'Activity Categorization', zuzu: 'Application and window-level activity tracking', traditional: 'Some tools rely on keystroke counters or raw idle logs' },
  { dimension: 'Screenshot Privacy', zuzu: 'On-device private region redaction before upload', traditional: 'Some tools capture screens without masking private content' },
  { dimension: 'Reporting Synthesis', zuzu: 'AI daily reports with executive highlights and anomaly review', traditional: 'Some tools stop at raw exports that need manual analysis' },
  { dimension: 'Deployment Architecture', zuzu: '~80 MB Windows installer, running from the system tray with an offline capture queue', traditional: 'Some monitoring software is heavier to deploy and run' },
  { dimension: 'Access Governance', zuzu: 'Capability-based access scoped between managers and admins', traditional: 'Some tools offer only all-or-nothing viewer permissions' },
]

const FAQ_ITEMS = [
  {
    question: 'Is the "Approaches Some Other Tools Take" column describing one specific competitor?',
    answer: 'No. It describes approaches some tools or teams take, manual timesheets, unmasked screen capture, raw exports, not any named product, and not every tool works this way. This page intentionally avoids naming or characterizing specific competitors.',
  },
  {
    question: 'What does "Deployment Architecture" mean in the comparison matrix?',
    answer: "For ZUZU, it's the ~80 MB Windows installer that runs from the system tray with an offline capture queue, contrasted in the table with monitoring software that is heavier to deploy.",
  },
  {
    question: 'How does the "Screenshot Privacy" row describe ZUZU\'s approach?',
    answer: 'As on-device private-region redaction applied before a screenshot is uploaded, versus unmasked or continuous screen capture.',
  },
  {
    question: 'What is meant by "Access Governance" in the table?',
    answer: "Capability-based access that lets admins scope exactly what managers and other admins can see or do, rather than an all-or-nothing viewer permission model.",
  },
  {
    question: 'Can I use this table to compare ZUZU directly against a specific product I\'m evaluating?',
    answer: "Not as-is, the table is a framework based on ZUZU's own documented capabilities, not a live comparison against any named tool. Check your specific alternative against its own current documentation.",
  },
  {
    question: 'Where do the "Dimensions worth comparing" cards below the table link to?',
    answer: 'Each card links to the specific ZUZU feature or product page that covers that capability in depth, activity, attendance, screenshots, privacy, AI reports, analytics, behaviour intelligence, and more.',
  },
  {
    question: "Does ZUZU's AI reporting replace raw data exports, or work alongside them?",
    answer: 'Alongside. The table\'s "reporting synthesis" row contrasts AI daily reports with unfiltered raw exports, but ZUZU still supports CSV, Excel and PDF exports in addition to AI-generated reports.',
  },
  {
    question: 'Does this comparison matrix stay up to date as ZUZU adds capabilities?',
    answer: "The matrix reflects ZUZU's currently documented capabilities, and each dimension card links through to the relevant feature page for the most current detail on that specific area.",
  },
]

export default function ComparisonsPage() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Comparisons' }]
  const dimensions = DIMENSIONS.map((key) => FEATURE_LIBRARY[key])

  return (
    <>
      <Seo
        title="Comparisons | ZUZU"
        description="A neutral framework for comparing workforce visibility software, based on ZUZU's own documented capabilities, not a ranking or a claim about any named competitor."
        path="/resources/comparisons"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <FullWidthHumanHero
        backgroundImage="/images/workforce/zuzu-comparisons-evaluation.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Comparisons &amp; Evaluation"
        badgeVariant="blue"
        title="Comparing Workforce Visibility Software"
        description="Evaluating workforce monitoring tools usually comes down to core dimensions, verified telemetry, privacy redaction, AI synthesis, and seamless Windows deployment."
        primaryCta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Explore Platform Library', href: '/platform' }}
        featureTags={[
          { label: 'Time Tracking', href: '/product/time-attendance' },
          { label: 'Privacy Redaction', href: '/screenshot-privacy' },
          { label: 'AI Summaries', href: '/product/ai-reports' },
          { label: 'Lightweight Agent', href: '/installation/windows' },
        ]}
      />

      {/* Neutral Feature Matrix Visual */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-8">
            <div>
              <EyebrowBadge icon={<SlidersIcon className="h-3.5 w-3.5" />}>Evaluation Matrix</EyebrowBadge>
              <TypewriterHeading as="h2" className="text-xl sm:text-2xl font-bold text-ink mt-3">Modern vs. Legacy Workforce Software</TypewriterHeading>
              <p className="text-sm text-muted mt-1">A structured comparison framework based on architectural capabilities.</p>
            </div>

            <div className="rounded-2xl border border-line bg-surface overflow-hidden shadow-lg">
              <div className="grid grid-cols-12 border-b border-line bg-elevated/70 px-5 py-4 text-xs font-bold text-muted uppercase tracking-wider">
                <span className="col-span-12 sm:col-span-3">Capability Dimension</span>
                <span className="hidden sm:block sm:col-span-5 text-brand">ZUZU Intelligent Architecture</span>
                <span className="hidden sm:block sm:col-span-4 text-muted">Approaches Some Other Tools Take</span>
              </div>

              {COMPARISON_MATRIX.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 px-5 py-4 sm:py-5 border-b border-line last:border-0 items-start gap-y-3 sm:gap-y-0 text-xs sm:text-sm hover:bg-surface-alt/40 transition-colors">
                  <span className="col-span-12 sm:col-span-3 font-bold text-ink sm:pr-4">{row.dimension}</span>
                  <div className="col-span-12 sm:col-span-5 flex items-start gap-2.5 pr-4">
                    <CheckCircleIcon className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <div>
                      <span className="inline-block sm:hidden text-[11px] font-bold uppercase tracking-wider text-brand mb-1">ZUZU: </span>
                      <span className="text-ink font-medium leading-relaxed">{row.zuzu}</span>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-4 text-muted">
                    <span className="inline-block sm:hidden text-[11px] font-bold uppercase tracking-wider text-muted/70 mb-1">Other Tools: </span>
                    <span className="leading-relaxed">{row.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Comparison" className="text-xl sm:text-2xl">Dimensions Worth Comparing</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dimensions.map((d) => (
              <FeatureCard key={d.title} icon={<d.icon className="h-5 w-5 text-brand" />} title={d.title} description={d.description} href={d.href} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex justify-center">
          <div className="rounded-2xl border border-line bg-surface p-7 sm:p-9 max-w-3xl w-full shadow-sm hover:border-brand/30 transition-colors">
            <TypewriterHeading as="h2" className="text-lg sm:text-xl mb-3 font-bold text-ink">A Note on Named Comparisons</TypewriterHeading>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              This page intentionally doesn't name or characterize specific competing products. Vendor features and pricing change, and this site doesn't have verified, current information about any specific alternative to present as fact. When comparing ZUZU against another tool, we recommend checking that vendor's own current documentation directly against the dimensions above.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Resources" className="text-xl sm:text-2xl">Related Resources</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Alternatives" description="What to consider when evaluating alternatives." href="/resources/alternatives" />
            <FeatureCard title="Guides" description="Educational guides on workforce visibility concepts." href="/resources/guides" />
            <FeatureCard title="FAQ's" description="Frequently asked questions about ZUZU." href="/resources/faqs" />
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
        secondaryAction={{ label: 'Explore the full platform', href: '/platform' }}
      />
    </>
  )
}
