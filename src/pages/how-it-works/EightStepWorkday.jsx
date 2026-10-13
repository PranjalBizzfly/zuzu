import Container from '../../components/ui/Container'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import ZuzuImage from '../../components/ui/ZuzuImage'
import DashboardPreview from '../../components/ui/DashboardPreview'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import {
  UserCheckIcon,
  ClockIcon,
  MonitorIcon,
  ActivityIcon,
  CameraIcon,
  EyeIcon,
  BarChartIcon,
  FileTextIcon,
} from '../../components/ui/icons'

const STEPS = [
  {
    icon: UserCheckIcon,
    title: 'Sign In',
    description:
      "The ZUZU Windows agent is already installed and running from the system tray. The employee's day starts by signing in on their Windows device, which the agent recognizes as an active session for their organization.",
  },
  {
    icon: ClockIcon,
    title: 'Start Work',
    description:
      'Once signed in, the workday itself begins. Time & attendance starts recording from this point, giving a clock-in time and the start of the hours logged for the day.',
  },
  {
    icon: MonitorIcon,
    title: 'Work Activity',
    description:
      'The employee moves through their actual work: applications, sites, and tasks over the course of the day. This is the real work ZUZU is built to give visibility into, not something ZUZU changes or interferes with.',
  },
  {
    icon: ActivityIcon,
    title: 'Activity Capture',
    description:
      'In the background, the Windows agent automatically records that activity, which applications and sites were used, and for how long, without the employee needing to log anything manually.',
  },
  {
    icon: CameraIcon,
    title: 'Screenshot Capture',
    description:
      "Where screenshot monitoring is enabled, the agent captures a screenshot on a configured interval. Private regions of the screen are redacted on the device itself, before the screenshot is ever stored or uploaded.",
  },
  {
    icon: EyeIcon,
    title: 'Information Review',
    description:
      'Activity, attendance and screenshot data captured throughout the day become available together in the manager workspace, rather than sitting in separate tools.',
  },
  {
    icon: BarChartIcon,
    title: 'Manager Understanding',
    description:
      'Managers use that consolidated view in the manager workspace to understand how the day actually went for their team, checking in on attendance, activity patterns, and screenshot context where it is useful.',
  },
  {
    icon: FileTextIcon,
    title: 'Day-End Reporting',
    description:
      'AI reports turn the day\'s activity, attendance and review into a day-end summary for managers and admins, rather than requiring a manual compilation of raw logs.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Does the 8-step workday happen automatically?',
    answer: 'Sign-in, activity capture, and (where enabled) screenshot capture happen automatically once the Windows agent is installed and active. Manager review and reporting are steps managers and admins take using the data that produces.',
  },
  {
    question: 'What happens if an employee loses their internet connection during the day?',
    answer: 'The Windows agent continues capturing activity and attendance locally and queues it, syncing once connectivity returns, the workday continues uninterrupted from the employee\'s side.',
  },
  {
    question: 'Is screenshot capture part of every workday?',
    answer: 'Screenshot monitoring is a configurable capability, it runs on an interval an organization sets, where enabled, rather than being a fixed, mandatory part of every deployment.',
  },
  {
    question: 'Where do managers actually see this information?',
    answer: 'In the manager workspace, alongside AI reports for a day-end summary.',
  },
  {
    question: 'Does the employee have to do anything to trigger activity or screenshot capture?',
    answer: "No, once signed in, capture happens automatically in the background for the rest of the day. There's no manual step to start or pause tracking.",
  },
  {
    question: 'Can an employee see their own day-end data, or is it manager-only?',
    answer: "Employees can review their own activity and attendance through the employee profile, day-end data isn't restricted to managers.",
  },
  {
    question: 'Is the Day-End Report available immediately, or does it take time to generate?',
    answer: "AI reports are generated automatically from the day's activity and attendance data, without requiring a manager to compile it manually first.",
  },
  {
    question: 'Does the 8-step workday change for a fully remote employee?',
    answer: 'No, because the Windows agent runs per device rather than per location, the same 8 steps apply whether an employee is in-office, remote, or hybrid.',
  },
]

export default function EightStepWorkday() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'The 8-Step Workday' },
  ]

  return (
    <>
      <Seo
        title="The 8-Step Workday | ZUZU"
        description="How a typical ZUZU-tracked workday unfolds, from signing in through activity and screenshot capture to manager review and the day-end report."
        path="/how-it-works/8-step-workday"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="The 8-Step Workday"
        badgeVariant="blue"
        title="From Starting Work to the Day-End Report"
        description="A practical walkthrough of what happens during a ZUZU-tracked workday, for the employee doing the work, and for the manager reviewing it afterward."
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'How It Works overview', href: '/how-it-works' }}
        visualType="dashboard"
        dashboardType="attendance"
        bgImage="/images/workforce/zuzu-attendance-workplace.webp"
        humanImage={{
          src: '/images/workforce/zuzu-attendance-workplace.webp',
          title: 'Attendance Specialist',
          subtitle: 'Full-Day Workflow Overview',
        }}
      />

      {/* Timeline */}
      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>Workflow overview</EyebrowBadge>}
            title="8 steps, start to finish"
            description="A step-by-step breakdown of how activity, attendance, and intelligence connect throughout each workday."
          />
          <ol className="grid gap-5 sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand font-mono font-bold text-sm ring-1 ring-brand/20">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-8 w-8 rounded-lg bg-surface-alt flex items-center justify-center text-muted group-hover:text-brand transition-colors">
                      <step.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-ink mb-2 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Employee vs manager perspective */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
            <EyebrowBadge>Operational Perspectives</EyebrowBadge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">Two Views of the Same Workday</h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Transparent visibility for managers with clear, non-intrusive feedback for team members.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-muted tracking-wider uppercase">Employee perspective</span>
              </div>
              <TypewriterHeading as="h3" className="text-xl sm:text-2xl font-bold text-ink">What the Employee Sees</TypewriterHeading>
              <ZuzuImage
                src="/images/workforce/zuzu-developer-focused.webp"
                alt="Indian software engineer focused on dual monitors during tracked workday in modern tech office"
                aspectRatio="aspect-[16/10]"
                className="rounded-xl shadow-md"
              />
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                The Windows agent runs visibly in the system tray, so it's clear it's active. If the
                device loses connectivity, capture continues locally and queues until the connection
                returns, the employee's day isn't interrupted either way.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <span className="text-xs font-semibold text-muted tracking-wider uppercase">Manager perspective</span>
              </div>
              <TypewriterHeading as="h3" className="text-xl sm:text-2xl font-bold text-ink">What the Manager Sees</TypewriterHeading>
              <div className="overflow-hidden rounded-xl border border-line">
                <DashboardPreview type="manager" />
              </div>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Activity, attendance and screenshot context (where enabled) are reviewed together in the
                Manager workspace, with AI reports available for a day-end summary rather than raw,
                unfiltered logs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Workday FAQ" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Try the Full Workday Yourself"
        description="Start a 7-day free trial, no card required, for up to 10 employees."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Explore Desktop App Workflow', href: '/how-it-works/desktop-app-workflow' }}
      />
    </>
  )
}
