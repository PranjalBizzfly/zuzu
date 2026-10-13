import Container from '../components/ui/Container'
import FeatureCard from '../components/ui/FeatureCard'
import FAQ from '../components/ui/FAQ'
import CTA from '../components/ui/CTA'
import Seo from '../components/Seo'
import InternalPageHero from '../components/ui/InternalPageHero'
import SectionHeader from '../components/ui/SectionHeader'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import { ShieldIcon, SettingsIcon, LockIcon, ServerIcon } from '../components/ui/icons'

const RELATED_PRIVACY_PAGES = [
  {
    title: 'Private Region Redaction',
    description: 'Sensitive regions of a screenshot are redacted on-device, before storage or upload.',
    href: '/screenshot-privacy/private-region-redaction',
  },
  {
    title: 'Sensitive Information Protection',
    description: 'What kinds of on-screen information redaction is designed to keep out of screenshots.',
    href: '/screenshot-privacy/sensitive-information-protection',
  },
  {
    title: 'Privacy-Aware Employee Monitoring',
    description: 'How monitoring visibility and employee privacy are addressed together in ZUZU.',
    href: '/screenshot-privacy/privacy-aware-monitoring',
  },
]

const RELATED_GOVERNANCE_PAGES = [
  {
    title: 'Access & Permissions',
    description: 'How access is scoped between the org-wide admin portal and the team-scoped manager workspace.',
    href: '/admin/permissions',
  },
  {
    title: 'Monitoring Settings',
    description: 'Where screenshot intervals, privacy controls and attendance policy are configured.',
    href: '/admin/monitoring-settings',
  },
  {
    title: 'Governance',
    description: 'How admin configuration, scoped access and privacy controls work together.',
    href: '/admin/governance',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Does ZUZU support two-factor authentication?',
    answer: 'Yes. ZUZU supports real MFA/OTP-based two-factor authentication for admin portal and manager workspace logins, on top of standard credentials.',
  },
  {
    question: 'What does capability-based access mean in the Admin Portal?',
    answer: "Instead of all-or-nothing roles, admins can scope exactly which capabilities a given admin or manager has, viewing certain data, managing employees, editing monitoring policy, rather than granting broad, undifferentiated access.",
  },
  {
    question: 'What shows up in an audit trail?',
    answer: 'Audit trails cover employee, team, manager, shift, leave, report, payment, live-capture and organisation event categories, with severity filtering, a timeline view, and export.',
  },
  {
    question: 'How long are screenshots kept before they are deleted?',
    answer: "The default screenshot retention is 90 days, and it's configurable from the admin portal if your organization needs a shorter or longer window.",
  },
  {
    question: 'Can tracking on a personal laptop run outside of work hours?',
    answer: "No. Personal-laptop tracking is consent-gated and session-gated, active only between punch-in and punch-out, through a short-lived permission the agent has to keep renewing. It auto-expires rather than running continuously.",
  },
  {
    question: 'Is API key usage logged and auditable?',
    answer: 'Yes, API key logs are a distinct category inside the audit system, so key usage can be reviewed alongside other organisation activity.',
  },
  {
    question: 'Is sensitive on-screen content ever uploaded before it gets reviewed?',
    answer: 'No. Private regions, passwords, banking, webmail, messaging, password managers, desktop notifications, are redacted on-device before a screenshot is ever stored or uploaded, not after the fact.',
  },
  {
    question: 'Can managers see security settings and audit logs for the whole organization?',
    answer: "No. Manager workspace is scoped to a manager's own assigned team. Audit trails, security settings and API keys are managed centrally through the admin portal.",
  },
]

export default function Security() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Security' }]

  return (
    <>
      <Seo
        title="Security at ZUZU | ZUZU"
        description="How ZUZU approaches security, data handling and privacy, including on-device private-region redaction."
        path="/security"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Security & Governance"
        badgeVariant="blue"
        title="Security & Privacy"
        description="Your data is protected with capability-based access, two-factor authentication and audit trails, with privacy controls giving you say over what's monitored and how."
        cta={{ label: 'Get Started', href: '/free-trial' }}
        secondaryCta={{ label: 'Learn More', href: '#privacy-controls' }}
        bgImage="/images/workforce/zuzu-security-privacy.webp"
        imagePosition="center-right"
      />

      <section id="privacy-controls" className="py-14 sm:py-20">
        <Container className="flex flex-col gap-14">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">
                  <ShieldIcon className="h-3.5 w-3.5" />
                  Privacy
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                Screenshot &amp; Data Privacy
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {RELATED_PRIVACY_PAGES.map((page) => (
                <FeatureCard
                  key={page.href}
                  icon={<LockIcon className="h-5 w-5 text-emerald-500" />}
                  title={page.title}
                  description={page.description}
                  href={page.href}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 pt-10 border-t border-line">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand ring-1 ring-brand/20">
                  <SettingsIcon className="h-3.5 w-3.5" />
                  Governance
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                Governance &amp; Access Control
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {RELATED_GOVERNANCE_PAGES.map((page) => (
                <FeatureCard
                  key={page.href}
                  icon={<ServerIcon className="h-5 w-5 text-brand" />}
                  title={page.title}
                  description={page.description}
                  href={page.href}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Have Specific Security Requirements?"
        description="Talk to our team about screenshot retention windows and privacy controls."
        primaryAction={{ label: 'Contact Security Team', href: '/company/contact' }}
        secondaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
      />
    </>
  )
}
