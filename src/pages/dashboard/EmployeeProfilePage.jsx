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
  UserCheckIcon,
  ClockIcon,
  ActivityIcon,
  ShieldIcon,
  CheckCircleIcon,
  CameraIcon,
} from '../../components/ui/icons'

const PROFILE_PILLARS = [
  {
    title: 'Individual Activity Timeline',
    description: 'A visual timeline of the workday showing active time, idle time and screen-off time.',
    icon: ActivityIcon,
    href: '/product/employee-activity',
  },
  {
    title: 'Clock-In & Attendance',
    description: 'Start times and tracked hours recorded by the Windows agent, with approved away time shown beside tracked hours.',
    icon: ClockIcon,
    href: '/product/time-attendance',
  },
  {
    title: 'Application Breakdown',
    description: 'Time spent across applications and websites, by tool and category.',
    icon: UserCheckIcon,
    href: '/product/workforce-monitoring',
  },
  {
    title: 'On-Device Privacy Protection',
    description: 'Private regions such as passwords, banking, webmail and messaging apps are redacted on the device before a screenshot is stored or uploaded.',
    icon: ShieldIcon,
    href: '/screenshot-privacy',
  },
]

const PROFILE_FAQS = [
  {
    question: 'Can employees view their own Employee Profile?',
    answer: 'Managers review their own team\'s profiles and cannot change settings. Whether and how employees see their own data depends on how your organization uses ZUZU; the Windows agent itself runs visibly in the system tray.',
  },
  {
    question: 'What happens when an employee stops working?',
    answer: 'The agent tracks idle and screen-off time separately from active time. On company-managed devices clock-in happens automatically when the agent starts recording; on personal laptops the session runs from punch-in to punch-out.',
  },
  {
    question: 'Does Employee Profile track private browsing or personal tabs?',
    answer: "No. Private-region redaction masks sensitive areas, like passwords, banking, webmail, messaging and password managers, on-device before a screenshot is ever stored or uploaded.",
  },
  {
    question: 'What can a manager do on an employee profile?',
    answer: 'Managers review activity for members of their own team. They cannot change settings.',
  },
  {
    question: 'What does the Individual Activity Timeline actually show?',
    answer: 'A visual timeline of the workday, showing active, idle and screen-off time in the order they happened.',
  },
  {
    question: 'How can an employee confirm their privacy controls are working?',
    answer: 'The Windows agent runs visibly in the system tray, and private regions are redacted on the device before a screenshot is stored or uploaded.',
  },
  {
    question: 'Does the Application Breakdown show which specific files or documents were open?',
    answer: 'No. It shows time by application and website, not individual file or document names.',
  },
  {
    question: 'What if time away from the keyboard was legitimate?',
    answer: 'Away time can be reviewed by an admin (needs review, approved, rejected). Approved away time is added beside tracked hours and never rewrites them.',
  },
]

export default function EmployeeProfilePage() {
  return (
    <>
      <Seo
        title="Employee Profile: Transparent Workday History & Activity Log — ZUZU"
        description="View individual employee work sessions, tracked attendance hours, application engagement timelines, and privacy protection controls."
        path="/dashboard/employee-profile"
      />

      <FullWidthHumanHero
        backgroundImage="/images/workforce/zuzu-developer-focused.webp"
        imagePosition="center-right"
        badge="Individual Transparency"
        badgeVariant="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Employee Profile' },
        ]}
        title="Employee Profile: Transparent Individual Workday History"
        description="Provide employees and managers with clear, objective visibility into daily working sessions, active task durations, and attendance, protected by on-device privacy redaction."
        primaryCta={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryCta={{
          label: 'Team at a Glance',
          href: '/dashboard/team-at-a-glance',
        }}
        featureTags={[
          { label: 'Activity Log', href: '/product/employee-activity', icon: ActivityIcon },
          { label: 'Attendance', href: '/product/time-attendance', icon: ClockIcon },
          { label: 'App Context', href: '/product/workforce-monitoring', icon: CameraIcon },
          { label: 'Privacy Redaction', href: '/screenshot-privacy', icon: ShieldIcon },
        ]}
      />

      {/* Main Profile View */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <EyebrowBadge>Individual Telemetry</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Fair, Transparent, and Objective Workday Records
            </TypewriterHeading>
            <p className="mt-3 text-base text-muted leading-relaxed">
              When workforce visibility is shared openly between team members and leadership, it builds mutual trust.
              The ZUZU employee profile documents achievements, tracks accurate shift hours, and provides a clean record
              of daily deep work without requiring invasive surveillance.
            </p>
          </div>

          {/* Profile Mockup */}
          <div className="rounded-2xl border border-line bg-surface p-2 sm:p-4 shadow-xl">
            <DashboardPreview type="activity" />
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROFILE_PILLARS.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} icon={<pillar.icon className="h-5 w-5" />} />
            ))}
          </div>
        </Container>
      </section>

      {/* Transparency Standards */}
      <section className="py-14 sm:py-20 bg-surface/50 border-b border-line">
        <Container className="flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <EyebrowBadge>Ethical Monitoring</EyebrowBadge>
              <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                Empower Employees With Full Access to Their Own Data
              </TypewriterHeading>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                Unlike clandestine monitoring tools, ZUZU operates with complete openness. The Windows agent
                runs visibly in the system tray, and private regions are redacted on the device before anything is stored
                or uploaded.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Visible Windows Agent system tray presence with clear active status',
                  'Clock-in times and tracked hours, with approved Away Time shown beside them',
                  'On-device redaction of passwords, banking and other private regions',
                  'Active versus idle time across applications and websites',
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
                Explore connected views across the ZUZU platform:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { name: 'Team at a Glance', path: '/dashboard/team-at-a-glance', desc: 'Team presence view' },
                  { name: 'Manager Dashboard', path: '/dashboard/manager-dashboard', desc: 'Manager review tools' },
                  { name: 'Day-End Report', path: '/dashboard/day-end-report', desc: 'Daily summary card' },
                  { name: 'Windows Agent Client', path: '/windows-agent', desc: 'Desktop client features' },
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
          <SectionHeader eyebrow={<EyebrowBadge>Profile FAQ</EyebrowBadge>} title="Frequently Asked Questions About Employee Profiles" />
          <FAQ items={PROFILE_FAQS} />
        </Container>
      </section>

      <CTA
        title="Give Every Employee a Transparent Workday Record"
        description="Start a free trial to see attendance, activity timelines, and privacy controls for each team member."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'See Team at a Glance', href: '/dashboard/team-at-a-glance' }}
      />
    </>
  )
}
