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
  ShieldIcon,
  SettingsIcon,
  UsersIcon,
  LayersIcon,
  CheckCircleIcon,
  LockIcon,
} from '../../components/ui/icons'

const SUPER_ADMIN_PILLARS = [
  {
    title: 'Organization-Wide Governance',
    description: 'Oversight of the whole organization\'s monitoring policy and audit logs from the admin portal.',
    icon: LayersIcon,
    href: '/admin',
  },
  {
    title: 'Role-Scoped Access Control',
    description: 'Strict administrative hierarchy ensuring each manager sees only their own team and cannot change settings, while admins keep organization-wide visibility.',
    icon: UsersIcon,
    href: '/admin',
  },
  {
    title: 'Privacy & Redaction Enforcement',
    description: 'Mandate organizational privacy policies: on-device private-region redaction of screenshots and one organization-wide monitoring policy.',
    icon: ShieldIcon,
    href: '/screenshot-privacy',
  },
  {
    title: 'Data Retention Policy',
    description: 'Retention is an organization-wide policy: 90 days by default and configurable by admins.',
    icon: LockIcon,
    href: '/security',
  },
]

const SUPER_ADMIN_FAQS = [
  {
    question: 'What is the difference between an Admin and a Super Admin in ZUZU?',
    answer: 'Managers review their own team and cannot change settings. Admins run the admin portal: employees, managers, reports, the monitoring policy and audit logs. The super admin layer describes that organization-wide view of policy and audit-log oversight.',
  },
  {
    question: 'How does ZUZU control who can reach workforce data?',
    answer: 'Capability-based access controls what each role can do, admin and manager accounts use two-factor authentication, and private regions such as passwords and banking pages are redacted on the device before anything is stored or uploaded.',
  },
  {
    question: 'Can Super Admins audit manager actions?',
    answer: 'Yes. The admin portal provides audit trails covering categories such as employee, team, manager and report events, with severity filtering, timeline viewing and export.',
  },
  {
    question: 'How are Windows Agent policies distributed?',
    answer: 'Screenshot cadence, retention and password redaction are one organization-wide monitoring policy set in the admin portal. Agents receive updates through the release feed.',
  },
  {
    question: 'How does ZUZU protect personal privacy on employee-owned devices?',
    answer: 'On personal laptops, tracking is consent-gated and session-gated to only the period between punch-in and punch-out, through a short-lived permission the agent has to keep renewing, it does not run outside that work session.',
  },
  {
    question: 'What can a manager see?',
    answer: 'Managers see only their own team and cannot change settings; changes to policy are made by admins in the admin portal.',
  },
  {
    question: 'What data retention window applies?',
    answer: 'Retention defaults to 90 days and admins can configure it as part of the organization-wide monitoring policy.',
  },
  {
    question: 'Who can access the Super Admin Layer within an organization?',
    answer: "Only users explicitly assigned the super admin role can access this layer; standard admins and managers see their own scoped views and cannot escalate their own permissions.",
  },
]

export default function SuperAdminLayer() {
  return (
    <>
      <Seo
        title="Super Admin Layer: Enterprise Governance & Control — ZUZU"
        description="Comprehensive enterprise governance, role-scoped access control, organization-wide privacy policy, and audit-log oversight for ZUZU administrators."
        path="/dashboard/super-admin"
      />

      <FullWidthHumanHero
        backgroundImage="/images/workforce/zuzu-security-audit.webp"
        imagePosition="center-right"
        badge="Enterprise Governance"
        badgeVariant="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Super Admin Layer' },
        ]}
        title="Super Admin Layer: Higher-Level Administrative Visibility"
        description="Maintain organization-wide oversight, apply one privacy policy, manage manager permissions, and review audit logs across your organization."
        primaryCta={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryCta={{
          label: 'Admin Portal',
          href: '/dashboard/admin-portal',
        }}
        featureTags={[
          { label: 'Global Policies', href: '/admin', icon: ShieldIcon },
          { label: 'Role Permissions', href: '/admin', icon: UsersIcon },
          { label: 'Audit Logging', href: '/security', icon: LockIcon },
          { label: 'Data Retention', href: '/security', icon: SettingsIcon },
        ]}
      />

      {/* Enterprise Governance View */}
      <section className="py-14 sm:py-20 border-b border-line">
        <Container className="flex flex-col gap-12">
          <div className="max-w-3xl">
            <EyebrowBadge>Central Command</EyebrowBadge>
            <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
              Enterprise Control Built Upon Privacy and Principle
            </TypewriterHeading>
            <p className="mt-3 text-base text-muted leading-relaxed">
              The super admin layer provides executives and IT leadership with the structural governance tools required
              to run workforce visibility at enterprise scale. Enforce uniform compliance standards while granting
              delegated autonomy to team managers.
            </p>
          </div>

          {/* Admin Mockup */}
          <div className="rounded-2xl border border-line bg-surface p-2 sm:p-4 shadow-xl">
            <DashboardPreview type="admin" />
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUPER_ADMIN_PILLARS.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} icon={<pillar.icon className="h-5 w-5" />} />
            ))}
          </div>
        </Container>
      </section>

      {/* Security Governance Checklist */}
      <section className="py-14 sm:py-20 bg-surface/50 border-b border-line">
        <Container className="flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <EyebrowBadge>Security Controls</EyebrowBadge>
              <TypewriterHeading as="h2" className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                Governance Safeguards Enforced by Architecture
              </TypewriterHeading>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                ZUZU is engineered so that employee privacy and organizational governance are not conflicting goals.
                On personal laptops, tracking is consent-gated and session-gated to only the punch-in-to-punch-out
                work session, through a short-lived permission the agent has to keep renewing.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'On-device redaction of private regions before storage or upload',
                  'Consent-gated, session-gated tracking on personal laptops',
                  'Retention of 90 days by default, configurable by admins',
                  'Managers see only their own team and cannot change settings',
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
                Administrative Connections
              </h3>
              <p className="text-xs text-muted">
                Quickly jump between high-level governance and granular operations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  { name: 'Admin Portal', path: '/dashboard/admin-portal', desc: 'Workspace settings' },
                  { name: 'Security Overview', path: '/security', desc: 'Privacy & access controls' },
                  { name: 'Workforce Analytics', path: '/dashboard/workforce-analytics', desc: 'Org-wide analytics' },
                  { name: 'Manager Dashboard', path: '/dashboard/manager-dashboard', desc: 'Team review tools' },
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
          <SectionHeader eyebrow={<EyebrowBadge>Super Admin FAQ</EyebrowBadge>} title="Frequently Asked Questions About the Super Admin Layer" />
          <FAQ items={SUPER_ADMIN_FAQS} />
        </Container>
      </section>

      <CTA
        title="Put Enterprise Governance in One Layer"
        description="Start a free trial to manage global privacy policies, role permissions, and audit logs across your organization."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Explore the Admin Portal', href: '/dashboard/admin-portal' }}
      />
    </>
  )
}
