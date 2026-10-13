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
  MonitorIcon,
  ShieldIcon,
  UsersIcon,
  CheckCircleIcon,
  LockIcon,
} from '../../components/ui/icons'

const ADMIN_PILLARS = [
  {
    title: 'Workspace & Team Management',
    description: 'Manage employees and managers from the admin portal; each manager sees only their own team and cannot change settings.',
    icon: UsersIcon,
    href: '/admin',
  },
  {
    title: 'Windows Agent Deployment',
    description: 'Get every teammate up and running with the same ~80 MB Windows installer and a 16-character activation code to link each device to your organization.',
    icon: MonitorIcon,
    href: '/product/windows-agent',
  },
  {
    title: 'Privacy Policy Engine',
    description: 'Set company-wide privacy rules: set the screenshot interval (1–5 minutes or custom) and the on-device private-region redaction that runs before anything is stored or uploaded.',
    icon: ShieldIcon,
    href: '/screenshot-privacy',
  },
  {
    title: 'Retention & Security Controls',
    description: 'Set the retention window (90 days by default, configurable) and review audit logs, which can be exported as CSV.',
    icon: LockIcon,
    href: '/security',
  },
]

const ADMIN_FAQS = [
  {
    question: 'How do administrators deploy the ZUZU Windows Agent across many endpoints?',
    answer: 'Admins download the roughly 80 MB Windows installer from the admin portal for each device, then enter the same organization activation code so every device connects to the right team.',
  },
  {
    question: 'What does installing the Windows Agent involve?',
    answer: 'It\'s a lightweight, roughly 80 MB installer that runs quietly from the Windows system tray once installed and activated. See the Windows agent pages for the full download-to-tracking steps.',
  },
  {
    question: 'Can admins set one monitoring policy for the whole organization?',
    answer: 'Yes. Screenshot cadence, retention and password redaction work as one organization-wide monitoring policy, configured by admins in the admin portal.',
  },
  {
    question: 'How do admins handle employee onboarding and offboarding?',
    answer: 'Admins can invite employees by email through the admin portal. When an employee leaves, their agent access can be revoked from the same portal.',
  },
  {
    question: 'Can the Admin Portal manage managers and their teams?',
    answer: "Yes. Admins add managers from the managers section. Each manager sees only their own team and cannot change settings.",
  },
  {
    question: 'How is audit data exported from the Admin Portal?',
    answer: "Audit logs records who did what (actor, action, target and timestamp) and can be exported as CSV, with a table or timeline view.",
  },
  {
    question: "What's the difference between the Admin Portal and the Super Admin Layer?",
    answer: 'The admin portal handles day-to-day workspace administration, agent deployment, teams, and privacy rules. The super admin layer sits above it for organization-wide governance and audit-log oversight.',
  },
  {
    question: 'Can screenshot capture frequency be changed after the Windows Agent is deployed?',
    answer: "Yes. Capture cadence is part of the organization-wide monitoring policy, which admins can adjust in the admin portal.",
  },
]

export default function AdminPortalPage() {
  return (
    <>
      <Seo
        title="Admin Portal: Centralized Workspace Configuration & Agent Controls — ZUZU"
        description="Centralized administrative console for managing ZUZU workspaces, Windows agent deployments, privacy redaction rules, and the organization-wide monitoring policy."
        path="/dashboard/admin-portal"
      />

      <FullWidthHumanHero
        backgroundImage="/images/workforce/zuzu-admin-governance.webp"
        imagePosition="center-right"
        badge="Workspace Administration"
        badgeVariant="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Admin Portal' },
        ]}
        title="Admin Portal: Centralized Workspace & Agent Controls"
        description="Configure organization policies, manage teams and managers, deploy Windows desktop agents, and set privacy rules from one management console."
        primaryCta={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryCta={{
          label: 'Super Admin Layer',
          href: '/dashboard/super-admin',
        }}
        featureTags={[
          { label: 'Agent Deployment', href: '/product/windows-agent', icon: MonitorIcon },
          { label: 'Team Settings', href: '/admin', icon: UsersIcon },
          { label: 'Privacy Controls', href: '/screenshot-privacy', icon: ShieldIcon },
          { label: 'Security Policies', href: '/security', icon: LockIcon },
        ]}
      />

      {/* Main Admin View */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <EyebrowBadge>System Control Center</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Centralized Management for IT Administrators and Operations Teams
            </TypewriterHeading>
            <p className="mt-3 text-base text-muted leading-relaxed">
              The ZUZU admin portal streamlines endpoint management and workspace governance. Set the monitoring
              policy, deploy the Windows agent, and manage managers and employees from one place.
            </p>
          </div>

          {/* Admin Mockup */}
          <div className="rounded-2xl border border-line bg-surface p-2 sm:p-4 shadow-xl">
            <DashboardPreview type="admin" />
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADMIN_PILLARS.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} icon={<pillar.icon className="h-5 w-5" />} />
            ))}
          </div>
        </Container>
      </section>

      {/* Deployment & Policies */}
      <section className="py-14 sm:py-20 bg-surface/50 border-b border-line">
        <Container className="flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <EyebrowBadge>Endpoint Administration</EyebrowBadge>
              <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                Effortless Mass Deployment With Zero Endpoint Friction
              </TypewriterHeading>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                Whether rolling out to a small team or a large distributed organization, ZUZU uses the same
                straightforward installer and activation flow across every Windows device.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'The same ~80 MB installer and activation-code flow for every device',
                  'Automated agent updates delivered through the release feed',
                  'Offline queue that captures locally and syncs when the device reconnects',
                  'Managers scoped to their own team, with capability-based access',
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
                Administrative Shortcuts
              </h3>
              <p className="text-xs text-muted">
                Navigate between configuration and operational oversight:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { name: 'Super Admin Layer', path: '/dashboard/super-admin', desc: 'Higher-level governance' },
                  { name: 'Windows Agent Client', path: '/windows-agent', desc: 'Desktop client download' },
                  { name: 'Installation Guide', path: '/installation', desc: 'Deployment instructions' },
                  { name: 'Security Overview', path: '/security', desc: 'Privacy & access controls' },
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
          <SectionHeader eyebrow={<EyebrowBadge>Admin FAQ</EyebrowBadge>} title="Frequently Asked Questions About the Admin Portal" />
          <FAQ items={ADMIN_FAQS} />
        </Container>
      </section>

      <CTA
        title="Centralize Your Workspace Administration"
        description="Start a free trial to configure policies, deploy the Windows agent, and manage privacy settings from one console."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'See the Super Admin Layer', href: '/dashboard/super-admin' }}
      />
    </>
  )
}
