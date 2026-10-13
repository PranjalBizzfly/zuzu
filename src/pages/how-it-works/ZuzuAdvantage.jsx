import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import ZuzuImage from '../../components/ui/ZuzuImage'
import DashboardPreview from '../../components/ui/DashboardPreview'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import AdvantageSection from '../../components/ui/AdvantageSection'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import { CheckCircleIcon } from '../../components/ui/icons'

const COMPARISONS = [
  {
    area: 'Activity Visibility',
    legacy: 'Relies on manual check-ins or self-reported status updates.',
    zuzu: 'The Windows agent automatically captures application, site and task activity in the background.',
  },
  {
    area: 'Attendance Tracking',
    legacy: 'Manual timesheets or a physical punch clock, filled in after the fact.',
    zuzu: 'Time & attendance is recorded automatically as part of the same Windows agent session.',
  },
  {
    area: 'Visual Context',
    legacy: 'Either no visual context at all, or an unmasked, continuously recorded screen feed.',
    zuzu: 'Screenshots on a configurable interval, with private regions redacted on-device before storage or upload.',
  },
  {
    area: 'Reporting',
    legacy: 'Raw exports or logs that still need to be manually compiled into something readable.',
    zuzu: 'AI reports summarize activity and attendance into a day-end report for managers and admins.',
  },
  {
    area: 'Remote & Hybrid Visibility',
    legacy: "Visibility that weakens once an employee is out of the office, with no consistent record while offline.",
    zuzu: 'The Windows agent works the same way regardless of location, and queues data locally during a connectivity gap before syncing.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Is this comparison against a specific competitor?',
    answer: "No. This page compares ZUZU's documented capabilities against traditional, manual workforce-visibility methods in general, it doesn't name or characterize any specific competing product.",
  },
  {
    question: 'Does ZUZU claim to increase productivity by a specific percentage?',
    answer: 'No, what ZUZU\'s Windows agent, screenshot monitoring and reporting deliver is visibility, not a projected or measured productivity outcome.',
  },
  {
    question: 'What should I check before switching from a manual process?',
    answer: 'Review the specific capability areas above against your current process, and try the 7-day free trial to see the Windows agent, manager workspace and AI reports directly.',
  },
  {
    question: 'Does this comparison include payroll or accounting integrations?',
    answer: "No, ZUZU doesn't integrate with payroll or accounting software. This comparison is scoped to activity, attendance, screenshot and reporting capabilities, not payroll processing.",
  },
  {
    question: 'Does moving from timesheets to ZUZU require employees to do anything differently?',
    answer: "No, attendance is recorded automatically once the Windows agent is running, so employees don't need to fill in a timesheet or manually clock in.",
  },
  {
    question: "Does the 'Remote & Hybrid Visibility' row mean ZUZU works differently for in-office teams?",
    answer: "No, the same Windows agent and manager workspace apply either way. That row is highlighted because it's where legacy methods tend to break down most, not because ZUZU behaves differently in-office.",
  },
  {
    question: 'Does switching to ZUZU mean giving up familiar report formats?',
    answer: 'No, ZUZU supports CSV, Excel and PDF exports, so reporting can still be shared or archived in the formats a team already uses.',
  },
  {
    question: 'How long does it take to see the Windows Agent replace a manual process?',
    answer: "Activity and attendance start recording as soon as the agent is installed and activated, there's no separate rollout period before the automatic side of tracking begins.",
  },
]

export default function ZuzuAdvantage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'The ZUZU Advantage' },
  ]

  return (
    <>
      <Seo
        title="The ZUZU Advantage | ZUZU"
        description="A factual, capability-based comparison between traditional workforce-visibility methods and ZUZU's Windows agent, screenshot monitoring and reporting."
        path="/how-it-works/zuzu-advantage"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="The ZUZU Advantage"
        badgeVariant="blue"
        title="A More Structured Approach to Workforce Visibility"
        description="Five concrete areas where ZUZU's Windows agent, screenshot monitoring and reporting work differently from manual, legacy workforce-visibility methods."
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'How It Works overview', href: '/how-it-works' }}
        visualType="photo"
        image={{
          src: '/images/people/zuzu-person-laptop.webp',
          alt: 'Operations specialist analyzing structured workforce metrics',
        }}
        bgImage="/images/people/zuzu-person-laptop.webp"
        humanImage={{
          src: '/images/people/zuzu-person-laptop.webp',
          title: 'Operations Specialist',
          subtitle: 'Structured Workforce Visibility',
        }}
      />

      {/* Comparison table */}
      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionHeader
            eyebrow={<EyebrowBadge>Comparison</EyebrowBadge>}
            title="Legacy methods vs. ZUZU's approach"
            description="Five areas worth comparing directly, based on ZUZU's documented capabilities."
          />

          <div className="rounded-2xl border border-line bg-surface overflow-hidden shadow-lg">
            <div className="grid grid-cols-12 border-b border-line bg-elevated/70 px-5 py-4 text-xs font-bold text-muted uppercase tracking-wider">
              <span className="col-span-12 sm:col-span-3">Area</span>
              <span className="hidden sm:block sm:col-span-4 text-muted">Traditional / Legacy Method</span>
              <span className="hidden sm:block sm:col-span-5 text-brand">ZUZU's Approach</span>
            </div>

            {COMPARISONS.map((row) => (
              <div key={row.area} className="grid grid-cols-12 px-5 py-4 sm:py-5 border-b border-line last:border-0 items-start gap-y-3 sm:gap-y-0 text-xs sm:text-sm hover:bg-surface-alt/40 transition-colors">
                <span className="col-span-12 sm:col-span-3 font-bold text-ink sm:pr-4">{row.area}</span>
                <div className="col-span-12 sm:col-span-4 text-muted pr-4">
                  <span className="inline-block sm:hidden text-[11px] font-bold uppercase tracking-wider text-muted/70 mb-1">Legacy: </span>
                  <span>{row.legacy}</span>
                </div>
                <div className="col-span-12 sm:col-span-5 flex items-start gap-2.5">
                  <CheckCircleIcon className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="inline-block sm:hidden text-[11px] font-bold uppercase tracking-wider text-brand mb-1">ZUZU: </span>
                    <span className="text-ink font-medium leading-relaxed">{row.zuzu}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product visual */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <EyebrowBadge>In practice</EyebrowBadge>
            <TypewriterHeading as="h2" className="text-xl sm:text-2xl font-bold text-ink">What This Looks Like Day to Day</TypewriterHeading>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Instead of piecing together timesheets, screen recordings and manual reports from separate
              tools, activity, attendance and screenshot data all flow into the same manager workspace,
              with AI reports turning that into a day-end summary automatically.
            </p>
            <div className="pt-2">
              <Link to="/product/manager-workspace" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-line bg-surface hover:border-brand/40 text-sm font-semibold text-brand transition-colors">
                Explore Manager Workspace &rarr;
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-line shadow-lg">
            <DashboardPreview type="analytics" />
          </div>
        </Container>
      </section>

      {/* Instead of / Use comparison cards (same section as on the home page) */}
      <AdvantageSection className="border-t border-line" showActions={false} />

      {/* Related image */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container>
          <ZuzuImage
            src="/images/workforce/zuzu-comparisons-evaluation.webp"
            alt="Enterprise decision-maker evaluating workforce intelligence platforms on a large curved display in modern office"
            aspectRatio="aspect-[21/9]"
            className="rounded-2xl shadow-lg border border-line"
          />
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="The ZUZU Advantage FAQ" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="See the ZUZU Advantage for Yourself"
        description="Start a 7-day free trial, no card required, for up to 10 employees."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Talk to sales', href: '/company/contact' }}
      />
    </>
  )
}
