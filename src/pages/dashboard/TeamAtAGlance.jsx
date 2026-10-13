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
  UsersIcon,
  ClockIcon,
  ActivityIcon,
  MonitorIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '../../components/ui/icons'

const TEAM_METRICS = [
  {
    title: 'Live Team Presence',
    description: 'Visibility into who is clocked in and how their tracked time splits between active, idle and away time.',
    icon: UsersIcon,
    href: '/product/employee-activity',
  },
  {
    title: 'Real-Time Hours Logged',
    description: 'Cumulative tracked hours and attendance for each team member as the day progresses.',
    icon: ClockIcon,
    href: '/product/time-attendance',
  },
  {
    title: 'Active Engagement Index',
    description: 'Automated calculation of active versus idle ratios across software applications, web tabs, and productive tasks.',
    icon: ActivityIcon,
    href: '/product/workforce-monitoring',
  },
  {
    title: 'Windows Agent Sync',
    description: 'Activity comes from the Windows desktop agent, which queues data locally while a device is offline and syncs when it reconnects.',
    icon: MonitorIcon,
    href: '/product/windows-agent',
  },
]

const TEAM_FAQS = [
  {
    question: 'What information does Team at a Glance display?',
    answer: 'Team at a glance provides managers with real-time status across team members: clock-in times, current application activity, total hours tracked today, and active versus idle time.',
  },
  {
    question: 'How quickly does team activity update?',
    answer: 'Activity syncs from the ZUZU Windows agent. If a device is offline, the agent captures locally and syncs when the device reconnects, so gaps fill in afterwards.',
  },
  {
    question: 'Does Team at a Glance respect employee privacy?',
    answer: "Yes. Team at a glance surfaces presence, tracked hours and application activity for managers' own team. Private regions such as passwords and banking pages are redacted on the device before screenshots are stored.",
  },
  {
    question: 'Which team members can a manager see?',
    answer: 'A manager sees only their own team. Managers cannot change settings; admins manage employees and managers in the admin portal.',
  },
  {
    question: 'Does Team at a Glance show time away from the keyboard?',
    answer: 'Yes. Idle and screen-off time are tracked separately from active time, and away time that an admin approves is shown beside tracked hours without rewriting them.',
  },
  {
    question: 'Can I see a late start from the Team at a Glance view?',
    answer: 'Yes. Clock-in times and cumulative tracked hours show who has started and how much time has been tracked so far today.',
  },
  {
    question: 'How is the Active Engagement Index calculated?',
    answer: "It's an automated calculation of active versus idle time across applications, browser tabs, and tasks, giving a quick read on engagement without manual tracking.",
  },
  {
    question: "Where do I go from Team at a Glance for a deeper look at one person's day?",
    answer: "Click through to that team member's employee profile for their individual activity timeline, tracked hours, and application breakdown.",
  },
]

export default function TeamAtAGlance() {
  return (
    <>
      <Seo
        title="Team at a Glance: Real-Time Team Activity Overview — ZUZU"
        description="Get an instant overview of your team's live activity, active working hours, application engagement, and presence across distributed workforces."
        path="/dashboard/team-at-a-glance"
      />

      <FullWidthHumanHero
        backgroundImage="/images/people/zuzu-team-culture.webp"
        imagePosition="center-right"
        badge="Workforce Operations"
        badgeVariant="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Team at a Glance' },
        ]}
        title="Team at a Glance: Instant Activity & Presence Overview"
        description="Monitor active working sessions, track shift progress in real time, and understand how your distributed team collaborates, all from one clean operational overview."
        primaryCta={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryCta={{
          label: 'Manager Dashboard',
          href: '/dashboard/manager-dashboard',
        }}
        featureTags={[
          { label: 'Live Presence', href: '/product/employee-activity', icon: UsersIcon },
          { label: 'Shift Progress', href: '/product/time-attendance', icon: ClockIcon },
          { label: 'Activity Ratios', href: '/product/workforce-monitoring', icon: ActivityIcon },
          { label: 'Day-End Reports', href: '/dashboard/day-end-report', icon: SparklesIcon },
        ]}
      />

      {/* Live Overview Breakdown */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <EyebrowBadge>Operational Telemetry</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              One Unified Screen for Team Presence and Productivity
            </TypewriterHeading>
            <p className="mt-3 text-base text-muted leading-relaxed">
              Managing remote, hybrid, or in-office teams requires continuous clarity without intrusive oversight.
              ZUZU team at a glance connects directly with installed desktop agents to provide attendance, active
              activity metrics, and daily status in a single consolidated interface.
            </p>
          </div>

          {/* Interactive Mockup */}
          <div className="rounded-2xl border border-line bg-surface p-2 sm:p-4 shadow-xl">
            <DashboardPreview type="manager" />
          </div>

          {/* Core Feature Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM_METRICS.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} icon={<pillar.icon className="h-5 w-5" />} />
            ))}
          </div>
        </Container>
      </section>

      {/* Operational Highlights */}
      <section className="py-14 sm:py-20 bg-surface/50 border-b border-line">
        <Container className="flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <EyebrowBadge>Manager Workflow</EyebrowBadge>
              <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                Understand Work Patterns Without Constant Check-Ins
              </TypewriterHeading>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                Rather than interrupting employees with status messages or reviewing disconnected timesheets,
                managers can see who has clocked in and how each person's tracked time is split.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Status indicators for active, idle and offline devices',
                  'Cumulative tracked hours for each team member',
                  'Application usage share across the team',
                  'One-click progression into detailed individual Employee Profiles',
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
                Related Dashboard Views
              </h3>
              <p className="text-xs text-muted">
                Navigate directly between operational layers to investigate trends or manage workspace policies:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { name: 'Manager Dashboard', path: '/dashboard/manager-dashboard', desc: 'Detailed task reviews' },
                  { name: 'Employee Profile', path: '/dashboard/employee-profile', desc: 'Individual member history' },
                  { name: 'Workforce Analytics', path: '/dashboard/workforce-analytics', desc: 'Organization-wide trends' },
                  { name: 'Day-End Report', path: '/dashboard/day-end-report', desc: 'Automated shift summaries' },
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
          <SectionHeader eyebrow={<EyebrowBadge>Questions & Answers</EyebrowBadge>} title="Frequently Asked Questions About Team at a Glance" />
          <FAQ items={TEAM_FAQS} />
        </Container>
      </section>

      <CTA
        title="See Your Own Team's Live Activity"
        description="Start a free trial to get real-time presence, shift progress, and engagement metrics for your distributed team."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Explore Workforce Analytics', href: '/dashboard/workforce-analytics' }}
      />
    </>
  )
}
