import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import ExpandedContentSection from '../../components/ui/ExpandedContentSection'
import SectionHeader from '../../components/ui/SectionHeader'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import {
  UsersIcon,
  BarChartIcon,
  ShieldIcon,
  ActivityIcon,
  UserCheckIcon,
  SettingsIcon,
  FileTextIcon,
  ArrowRightIcon,
} from '../../components/ui/icons'

const DASHBOARD_VIEWS = [
  {
    title: 'Team at a Glance',
    description: "Instant real-time overview of your team's live status, shift progress, and active work ratios.",
    href: '/dashboard/team-at-a-glance',
    icon: UsersIcon,
    tag: 'Operational',
  },
  {
    title: 'Manager Dashboard',
    description: 'Comprehensive workspace for team leads to review daily activity, periodic screenshots, and project focus.',
    href: '/dashboard/manager-dashboard',
    icon: BarChartIcon,
    tag: 'Management',
  },
  {
    title: 'Super Admin Layer',
    description: 'Higher-level governance, global security policies and audit logging.',
    href: '/dashboard/super-admin',
    icon: ShieldIcon,
    tag: 'Governance',
  },
  {
    title: 'Workforce Analytics',
    description: 'Data-driven intelligence across productivity distributions, application usage share, and activity by time of day.',
    href: '/dashboard/workforce-analytics',
    icon: ActivityIcon,
    tag: 'Intelligence',
  },
  {
    title: 'Employee Profile',
    description: 'Transparent individual workday history, daily attendance logs, and on-device privacy protections.',
    href: '/dashboard/employee-profile',
    icon: UserCheckIcon,
    tag: 'Individual',
  },
  {
    title: 'Admin Portal',
    description: 'Centralized workspace administration, Windows agent client rollouts, and privacy policy configuration.',
    href: '/dashboard/admin-portal',
    icon: SettingsIcon,
    tag: 'Administration',
  },
  {
    title: 'Day-End Report',
    description: 'Automated end-of-day workforce summaries with verified hours, productive ratios, and AI executive digests.',
    href: '/dashboard/day-end-report',
    icon: FileTextIcon,
    tag: 'Reporting',
  },
]

const HUB_FAQS = [
  {
    question: 'How do the different ZUZU Dashboard layers work together?',
    answer: 'ZUZU structures workforce visibility into role-scoped layers: employees view their personal profiles; managers inspect team operations and day-end reports; admins manage agents and policy; the super admin layer covers organization-wide governance.',
  },
  {
    question: 'Can role permissions be customized per user?',
    answer: 'Yes. Administrators can assign users to manager, admin, or super admin roles, with each manager seeing only their own team.',
  },
  {
    question: 'Are all dashboard views accessible on mobile devices?',
    answer: 'Yes. ZUZU dashboard views and reports use a responsive layout that adapts to mobile browsers and tablets.',
  },
  {
    question: 'How many dashboard views are included in the ZUZU Dashboard Suite?',
    answer: 'Seven views: team at a glance, manager dashboard, workforce analytics, employee profile, admin portal, super admin layer, and day-end report, each scoped to a specific role.',
  },
  {
    question: "Where do I start if I'm new to the ZUZU Dashboard Suite?",
    answer: 'Most teams start with team at a glance for a live operational overview, then move into manager dashboard or workforce analytics as they need deeper review or trend data.',
  },
  {
    question: 'Do I need separate logins for each dashboard view?',
    answer: 'No. A single ZUZU account carries your role and permissions across every view in the suite; the views you can open depend on your assigned role.',
  },
  {
    question: 'Is data shared consistently across every dashboard view?',
    answer: "Yes. Every view reads from the same underlying Windows agent telemetry, so attendance, activity, and screenshot data stay consistent whether you're looking at team at a glance or the day-end report.",
  },
  {
    question: 'Can I bookmark or link directly to a specific dashboard view?',
    answer: 'Yes. Each dashboard view has its own URL (e.g. /dashboard/manager-dashboard), so you can bookmark or share a direct link to any view in the suite.',
  },
]

export default function DashboardHub() {
  return (
    <>
      <Seo
        title="ZUZU Dashboard Suite: Unified Workforce Visibility & Management"
        description="Explore the complete ZUZU dashboard suite: team at a glance, manager workspace, super admin layer, workforce analytics, employee profiles, and day-end reports."
        path="/dashboard"
      />

      <FullWidthHumanHero
        backgroundImage="/images/workforce/zuzu-platform-architect.webp"
        imagePosition="center-right"
        badge="Unified Management"
        badgeVariant="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard' },
        ]}
        title="ZUZU Dashboard Suite: Role-Scoped Workforce Intelligence"
        description="Connect desktop telemetry with centralized operational dashboards. From team presence and manager reviews to enterprise governance and automated day-end reports."
        primaryCta={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryCta={{
          label: 'Team at a Glance',
          href: '/dashboard/team-at-a-glance',
        }}
        featureTags={[
          { label: '7 Views', href: '/dashboard/team-at-a-glance', icon: UsersIcon },
          { label: 'Manager Review', href: '/dashboard/manager-dashboard', icon: BarChartIcon },
          { label: 'Super Admin', href: '/dashboard/super-admin', icon: ShieldIcon },
          { label: 'Day-End Summary', href: '/dashboard/day-end-report', icon: FileTextIcon },
        ]}
      />

      {/* Grid of 7 Dashboard Views */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <EyebrowBadge>Dashboard Directory</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Select an Operational View
            </TypewriterHeading>
            <p className="mt-3 text-base text-muted leading-relaxed">
              Every layer of the ZUZU platform is tailored for specific roles and operational needs.
              Choose a dashboard view below to explore its capabilities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DASHBOARD_VIEWS.map((view) => {
              const Icon = view.icon
              return (
                <Link
                  key={view.title}
                  to={view.href}
                  className="group rounded-2xl card-glass p-6 flex flex-col justify-between transition-all duration-300 hover:border-line-strong hover:bg-elevated hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-elevated border border-line text-green group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-elevated border border-line px-2.5 py-0.5 text-[10px] font-semibold text-muted">
                        {view.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-ink group-hover:text-green transition-colors">
                      {view.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                      {view.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-green">
                    <span>Open Dashboard</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      <ExpandedContentSection path="/dashboard" />

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader eyebrow={<EyebrowBadge>Dashboard Suite FAQ</EyebrowBadge>} title="Frequently Asked Questions About the Dashboard Suite" />
          <FAQ items={HUB_FAQS} />
        </Container>
      </section>

      <CTA
        title="Explore the Full ZUZU Dashboard Suite"
        description="Start a free trial to unlock team at a glance, manager dashboard, workforce analytics, and every operational view."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Talk to Our Team', href: '/company/contact' }}
      />
    </>
  )
}
