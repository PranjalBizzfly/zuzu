import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import FullWidthHumanHero from '../components/ui/FullWidthHumanHero'
import DashboardPreview from '../components/ui/DashboardPreview'
import FeatureCard from '../components/ui/FeatureCard'
import FAQ from '../components/ui/FAQ'
import CTA from '../components/ui/CTA'
import Seo from '../components/Seo'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import SectionHeader from '../components/ui/SectionHeader'
import TypewriterHeading from '../components/motion/TypewriterHeading'
import {
  SparklesIcon,
  ClockIcon,
  ActivityIcon,
  CheckCircleIcon,
  DownloadIcon,
} from '../components/ui/icons'

const REPORT_PILLARS = [
  {
    title: 'Daily Hours Summary',
    description: 'Daily clock-in times, tracked hours, and active versus idle time in one summary.',
    icon: ClockIcon,
    href: '/product/time-attendance',
  },
  {
    title: 'Application Engagement Digest',
    description: 'Time spent across applications and websites during the workday.',
    icon: ActivityIcon,
    href: '/product/employee-activity',
  },
  {
    title: 'AI Summary',
    description: 'A written summary of the day\'s activity, produced with ZUZU\'s AI reports.',
    icon: SparklesIcon,
    href: '/product/ai-reports',
  },
  {
    title: 'CSV Export',
    description: 'Export report data as CSV for further review.',
    icon: DownloadIcon,
    href: '/product/ai-reports',
  },
]

const REPORT_FAQS = [
  {
    question: 'When is the Day-End Report generated?',
    answer: 'The day-end report summarizes a workday\'s tracked hours and activity so managers can review it once the day is done.',
  },
  {
    question: 'Who can see a Day-End Report?',
    answer: 'Managers review the reports of their own team. Managers cannot change settings, and admins manage reports from the admin portal.',
  },
  {
    question: 'Are screenshots included in the Day-End Report?',
    answer: 'The day-end report summarizes hours and application activity. Screenshots, where the organization has enabled them, are reviewed separately with private regions already redacted on the device.',
  },
  {
    question: 'Do employees have to submit anything for the Day-End Report?',
    answer: 'No. The report is built from what the Windows agent tracked; there is no employee submission step.',
  },
  {
    question: 'What does the AI Summary include in a Day-End Report?',
    answer: 'A written summary of the day\'s tracked activity for quick review. ZUZU does not rank people or rate performance.',
  },
  {
    question: 'What export format does the Day-End Report support?',
    answer: 'Report data can be exported as CSV for further analysis.',
  },
  {
    question: 'Does the Day-End Report flag burnout risk?',
    answer: 'No. Burnout forecasting lives in wellbeing, which shows drivers and weeks-to-risk as patterns worth attention, not a diagnosis.',
  },
  {
    question: 'Can the Day-End Report be used for payroll or billing?',
    answer: "No. ZUZU does not produce payroll, invoices or billable hours; it reports tracked hours and activity.",
  },
]

export default function DayEndReportPage() {
  return (
    <>
      <Seo
        title="Day-End Report: Automated Daily Workday Summaries & Exports — ZUZU"
        description="End-of-day workforce reports: tracked hours, active and idle time, application activity, and AI-written summaries."
        path="/dashboard/day-end-report"
      />

      <FullWidthHumanHero
        backgroundImage="/images/workforce/zuzu-reports-executive.webp"
        imagePosition="center-right"
        badge="Daily Reporting"
        badgeVariant="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Day-End Report' },
        ]}
        title="Day-End Report: Complete End-of-Day Workforce Summaries"
        description="Review each workday with reports covering tracked hours, active and idle time, application breakdowns, and AI-written summaries."
        primaryCta={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryCta={{
          label: 'Manager Dashboard',
          href: '/dashboard/manager-dashboard',
        }}
        featureTags={[
          { label: 'Daily Synthesis', href: '/product/ai-reports', icon: SparklesIcon },
          { label: 'Tracked Hours', href: '/product/time-attendance', icon: ClockIcon },
          { label: 'Activity Digest', href: '/product/employee-activity', icon: ActivityIcon },
          { label: 'CSV Export', href: '/product/ai-reports', icon: DownloadIcon },
        ]}
      />

      {/* Main Report View */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <EyebrowBadge>Executive Summary</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              A Complete, Automated Summary of Every Workday
            </TypewriterHeading>
            <p className="mt-3 text-base text-muted leading-relaxed">
              Eliminate end-of-day reporting friction for employees and manual compilation for managers.
              ZUZU tracks activity through the Windows agent during the day and summarizes it
              in a report managers can review.
            </p>
          </div>

          {/* AI Executive Report Mockup */}
          <div className="rounded-2xl border border-line bg-surface p-2 sm:p-4 shadow-xl">
            <DashboardPreview type="ai" />
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {REPORT_PILLARS.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} icon={<pillar.icon className="h-5 w-5" />} />
            ))}
          </div>
        </Container>
      </section>

      {/* Report Structure */}
      <section className="py-14 sm:py-20 bg-surface/50 border-b border-line">
        <Container className="flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <EyebrowBadge>Report Details</EyebrowBadge>
              <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                Everything Leadership Needs in a Single Page
              </TypewriterHeading>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                Whether tracking distributed software developers, agency creatives, or customer operations specialists,
                the day-end report consolidates tracked hours and activity into one clear summary.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Clock-in times with total tracked hours',
                  'Active versus idle time',
                  'Top applications and websites by time spent',
                  'AI-written summary of the day\'s activity',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircleIcon className="h-5 w-5 text-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-elevated p-6 flex flex-col gap-4">
              <h3 className="text-sm font-bold text-ink uppercase tracking-wide">
                Connected Operations
              </h3>
              <p className="text-xs text-muted">
                Explore related dashboard layers and export workflows:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { name: 'Manager Dashboard', path: '/dashboard/manager-dashboard', desc: 'Detailed task reviews' },
                  { name: 'Workforce Analytics', path: '/dashboard/workforce-analytics', desc: 'Long-term trends' },
                  { name: 'Employee Profile', path: '/dashboard/employee-profile', desc: 'Individual member history' },
                  { name: 'Ready-to-Use Templates', path: '/templates', desc: 'Pre-built report formats' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="p-3 rounded-xl border border-line bg-surface hover:border-green transition-colors"
                  >
                    <div className="text-xs font-bold text-ink">{link.name}</div>
                    <div className="text-[11px] text-muted mt-0.5">{link.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader eyebrow={<EyebrowBadge>Report FAQ</EyebrowBadge>} title="Frequently Asked Questions About Day-End Reports" />
          <FAQ items={REPORT_FAQS} />
        </Container>
      </section>

      <CTA
        title="See Your Own Day-End Report Tonight"
        description="Install the Windows agent and start a free trial to get your first automated shift summary at the end of today's workday."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Explore AI Reports', href: '/product/ai-reports' }}
      />
    </>
  )
}
