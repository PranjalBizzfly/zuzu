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
  CameraIcon,
  ClockIcon,
  ActivityIcon,
  SparklesIcon,
} from '../../components/ui/icons'

const MANAGER_PILLARS = [
  {
    title: 'Workforce Activity Review',
    description: 'Detailed view of active tasks, application categories, and deep work focus sessions across all reporting team members.',
    icon: ActivityIcon,
    href: '/product/employee-activity',
  },
  {
    title: 'Visual Screenshot Context',
    description: 'Periodic visual captures taken through the Windows agent, equipped with on-device private data redaction.',
    icon: CameraIcon,
    href: '/screenshot-privacy',
  },
  {
    title: 'Attendance & Tracked Hours',
    description: 'Clock-in times, away time and tracked hours for each team member, with approved away time shown beside tracked hours.',
    icon: ClockIcon,
    href: '/product/time-attendance',
  },
  {
    title: 'Automated Day-End Review',
    description: 'Consolidated end-of-day reports with tracked hours and application activity.',
    icon: SparklesIcon,
    href: '/dashboard/day-end-report',
  },
]

const MANAGER_FAQS = [
  {
    question: 'How do managers review periodic screenshots?',
    answer: 'Managers can view periodic screenshots for their own team, captured at the interval the organization sets (1–5 minutes or custom). Private regions such as passwords, banking, webmail and messaging apps are redacted on the employee device before upload.',
  },
  {
    question: 'Can managers export daily timesheets?',
    answer: 'Yes. Timesheets, attendance logs, and active work ratios can be exported as CSV from the manager workspace.',
  },
  {
    question: 'How are idle periods handled during the workday?',
    answer: 'ZUZU tracks active application and window usage. When an employee is away from their workstation beyond the inactivity threshold, the time is categorized as idle or screen-off time, giving managers accurate working session data.',
  },
  {
    question: 'Can managers change capture settings for their team?',
    answer: 'No. Screenshot cadence, retention and password redaction are one organization-wide monitoring policy set by admins in the admin portal; managers cannot change settings.',
  },
  {
    question: 'What does a manager typically review each morning in the Manager Dashboard?',
    answer: 'Managers check who has clocked in and when, as employees start the Windows agent, along with early application activity.',
  },
  {
    question: 'How does the Manager Dashboard show activity during the day?',
    answer: 'It shows active-versus-idle time and periodic screenshots for each team member, so managers can see how the day is going without asking for updates.',
  },
  {
    question: 'Is the Day-End Report available directly from the Manager Dashboard?',
    answer: "Yes. Managers can open each team member's day-end report from the manager dashboard to review tracked hours and application activity for the day.",
  },
  {
    question: 'Can a manager see application usage for their whole team at once?',
    answer: 'Yes. Managers can review application usage across every member of their team in one view.',
  },
]

export default function ManagerDashboard() {
  return (
    <>
      <Seo
        title="Manager Dashboard: Complete Workforce Oversight & Review — ZUZU"
        description="Empower managers to review team activity, inspect visual context, review attendance, and access day-end reports."
        path="/dashboard/manager-dashboard"
      />

      <FullWidthHumanHero
        backgroundImage="/images/workforce/zuzu-manager-review.webp"
        imagePosition="center-right"
        badge="Manager Workspace"
        badgeVariant="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Manager Dashboard' },
        ]}
        title="Manager Dashboard: Review Activity, Screenshots & Reports"
        description="A dedicated operational workspace built for team leads and managers. Inspect real-time progress, review visual screenshot context, and verify workday hours without micromanagement."
        primaryCta={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryCta={{
          label: 'Day-End Report',
          href: '/dashboard/day-end-report',
        }}
        featureTags={[
          { label: 'Team Activity', href: '/product/employee-activity', icon: ActivityIcon },
          { label: 'Screenshots', href: '/screenshot-privacy', icon: CameraIcon },
          { label: 'Attendance', href: '/product/time-attendance', icon: ClockIcon },
          { label: 'AI Synthesis', href: '/product/ai-reports', icon: SparklesIcon },
        ]}
      />

      {/* Main Review Section */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <EyebrowBadge>Workforce Verification</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Actionable Oversight for Engineering, Support, and Operations Leads
            </TypewriterHeading>
            <p className="mt-3 text-base text-muted leading-relaxed">
              The ZUZU manager dashboard eliminates guesswork by combining objective desktop telemetry with visual
              work context. Managers can see which applications and websites their team's time went to,
              and how attendance and idle time looked across the day.
            </p>
          </div>

          {/* Manager Mockup */}
          <div className="rounded-2xl border border-line bg-surface p-2 sm:p-4 shadow-xl">
            <DashboardPreview type="manager" />
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MANAGER_PILLARS.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} icon={<pillar.icon className="h-5 w-5" />} />
            ))}
          </div>
        </Container>
      </section>

      {/* Review Steps */}
      <section className="py-14 sm:py-20 bg-surface/50 border-b border-line">
        <Container className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <EyebrowBadge>Daily Workflow</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              A 3-Step Daily Review Process for Managers
            </TypewriterHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-line bg-elevated p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-ink">Morning Attendance Check</h3>
              <p className="text-sm text-muted leading-relaxed">
                Check who has clocked in, and when, as employees start the Windows agent.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-elevated p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-ink">Midday Activity Check</h3>
              <p className="text-sm text-muted leading-relaxed">
                Examine active vs. idle ratios and periodic screenshots to see how the day is going.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-elevated p-6 flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-ink">Day-End Report Review</h3>
              <p className="text-sm text-muted leading-relaxed">
                Review each team member's day-end report covering tracked hours and application activity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader eyebrow={<EyebrowBadge>Manager FAQ</EyebrowBadge>} title="Frequently Asked Questions About the Manager Dashboard" />
          <FAQ items={MANAGER_FAQS} />
        </Container>
      </section>

      <CTA
        title="Give Every Manager a Clear Daily View"
        description="Start a free trial to see team activity, screenshot context, and attendance in one manager workspace."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'See Team at a Glance', href: '/dashboard/team-at-a-glance' }}
      />
    </>
  )
}
