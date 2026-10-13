import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import DashboardPreview from '../../components/ui/DashboardPreview'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import {
  ActivityIcon,
  ClockIcon,
  SparklesIcon,
  CheckCircleIcon,
  TrendingUpIcon,
} from '../../components/ui/icons'

const ANALYTICS_PILLARS = [
  {
    title: 'Productivity Distribution',
    description: 'Track aggregate productivity trends across departments to understand deep work capacity and focus distribution.',
    icon: TrendingUpIcon,
    href: '/product/workforce-analytics',
  },
  {
    title: 'Application Share Analysis',
    description: 'Auto-categorize software engagement across development environments, design tools, communications, and documentation.',
    icon: ActivityIcon,
    href: '/product/employee-activity',
  },
  {
    title: 'Activity by Time of Day',
    description: 'See how active and idle time are distributed across the working day.',
    icon: ClockIcon,
    href: '/product/time-attendance',
  },
  {
    title: 'AI Executive Synthesis',
    description: "AI reports that summarize workforce activity, alongside wellbeing forecasts that flag patterns worth a manager's attention.",
    icon: SparklesIcon,
    href: '/product/ai-reports',
  },
]

const ANALYTICS_FAQS = [
  {
    question: 'How does ZUZU classify productive versus non-productive applications?',
    answer: 'ZUZU records time by application and website, and workforce analytics groups that usage by category so you can see where time went. Role context describes each role so a productivity score has context.',
  },
  {
    question: 'Can analytics be filtered across custom date ranges?',
    answer: 'Yes. Administrators and managers can filter analytics by date range.',
  },
  {
    question: 'What is the Productivity Rate index?',
    answer: 'The productivity rate reflects the percentage of logged shift time spent actively interacting with productive applications and websites versus idle periods or unclassified activity.',
  },
  {
    question: 'Does Workforce Analytics surface burnout-risk indicators?',
    answer: "Yes. It surfaces burnout-risk indicators, such as drivers and weeks-to-risk, in wellbeing as patterns worth a manager's attention, not as a diagnosis or a ranking.",
  },
  {
    question: 'Can Workforce Analytics show when during the day activity happens?',
    answer: 'Yes. Activity by time of day shows how active and idle time are distributed across the working day.',
  },
  {
    question: 'Does Workforce Analytics show data for individuals or only teams?',
    answer: "Workforce analytics is built for aggregate, department-level trends; for an individual's own history, use the employee profile view instead.",
  },
  {
    question: 'Can analytics data be exported for executive reporting?',
    answer: 'Yes. Reports can be exported as CSV for further analysis.',
  },
  {
    question: 'Does Workforce Analytics measure meetings?',
    answer: 'No. ZUZU tracks application and website usage, not meeting content, calendars or call quality.',
  },
]

export default function WorkforceAnalyticsPage() {
  return (
    <>
      <Seo
        title="Workforce Analytics: Data-Driven Productivity & Focus Insights — ZUZU"
        description="Transform workforce activity into actionable intelligence with productivity trends, application share breakdowns, and automated AI executive reports."
        path="/dashboard/workforce-analytics"
      />

      <FullWidthHumanHero
        backgroundImage="/images/people/zuzu-analyst-working.webp"
        imagePosition="center-right"
        badge="Workforce Intelligence"
        badgeVariant="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Workforce Analytics' },
        ]}
        title="Workforce Analytics: Understand Team Productivity & Focus"
        description="Transform raw desktop telemetry into actionable operational insights. Track weekly productivity distributions, measure application share, and optimize team focus windows."
        primaryCta={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryCta={{
          label: 'Team at a Glance',
          href: '/dashboard/team-at-a-glance',
        }}
        featureTags={[
          { label: 'Productivity Trends', href: '/product/workforce-analytics', icon: TrendingUpIcon },
          { label: 'App Distribution', href: '/product/employee-activity', icon: ActivityIcon },
          { label: 'Focus Windows', href: '/product/time-attendance', icon: ClockIcon },
          { label: 'AI Synthesis', href: '/product/ai-reports', icon: SparklesIcon },
        ]}
      />

      {/* Main Analytics View */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <EyebrowBadge>Analytics Dashboard</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Actionable Data Behind Every Working Hour
            </TypewriterHeading>
            <p className="mt-3 text-base text-muted leading-relaxed">
              Modern workforce leaders need more than crude attendance counts. ZUZU workforce analytics provides
              deep insights into how teams work, highlighting peak energy blocks, collaboration overhead, and
              long-term productivity trajectories.
            </p>
          </div>

          {/* Analytics Mockup */}
          <div className="rounded-2xl border border-line bg-surface p-2 sm:p-4 shadow-xl">
            <DashboardPreview type="analytics" />
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ANALYTICS_PILLARS.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} icon={<pillar.icon className="h-5 w-5" />} />
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Insights Section */}
      <section className="py-14 sm:py-20 bg-surface/50 border-b border-line">
        <Container className="flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <EyebrowBadge>Strategic Insights</EyebrowBadge>
              <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                See Where Team Time Goes
              </TypewriterHeading>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                By visualizing application and website usage across the team, leadership can see where
                time goes and where idle time builds up, without asking for status updates.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Productivity Rate across the team',
                  'Active and idle time across the working day',
                  'Application usage share across the team',
                  'CSV export of report data',
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
                Ecosystem Links
              </h3>
              <p className="text-xs text-muted">
                Explore connected reporting and monitoring capabilities:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { name: 'Day-End Report', path: '/dashboard/day-end-report', desc: 'Daily automated summaries' },
                  { name: 'AI Reports Suite', path: '/product/ai-reports', desc: 'Synthesized digests' },
                  { name: 'Employee Profile', path: '/dashboard/employee-profile', desc: 'Individual work logs' },
                  { name: 'Manager Dashboard', path: '/dashboard/manager-dashboard', desc: 'Real-time review' },
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
          <SectionHeader eyebrow={<EyebrowBadge>Analytics FAQ</EyebrowBadge>} title="Frequently Asked Questions About Workforce Analytics" />
          <FAQ items={ANALYTICS_FAQS} />
        </Container>
      </section>

      <CTA
        title="Turn Activity Data Into Team Insights"
        description="Start a free trial to see productivity trends, application share, and focus windows for your own team."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Explore the Admin Portal', href: '/dashboard/admin-portal' }}
      />
    </>
  )
}
