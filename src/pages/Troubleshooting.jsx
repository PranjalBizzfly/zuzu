import Container from '../components/ui/Container'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import SectionHeader from '../components/ui/SectionHeader'
import FAQ from '../components/ui/FAQ'
import CTA from '../components/ui/CTA'
import Seo from '../components/Seo'
import ExpandedContentSection from '../components/ui/ExpandedContentSection'
import SectionTitle from '../components/ui/SectionTitle'
import InternalPageHero from '../components/ui/InternalPageHero'
import { MonitorIcon, GlobeIcon, UsersIcon, SettingsIcon } from '../components/ui/icons'

/*
  Deliberately one page, not five. One page keeps troubleshooting honest: no specific error codes or
  per-scenario fixes are listed, and inventing five thin pages of steps
  would be worse than one page pointing to the real mechanics
  (system tray, offline queue, Admin Portal settings) plus support.
*/
const CHECKS = [
  {
    icon: MonitorIcon,
    title: 'Is the Windows Agent Installed and Visible?',
    description: 'Check the system tray for the ZUZU icon. If it\'s not there, the agent may not be installed or running.',
  },
  {
    icon: GlobeIcon,
    title: 'Is the Device Connected to the Internet?',
    description: 'The agent queues data locally when offline and syncs once reconnected, a temporary gap in reported data can simply mean a connectivity gap.',
  },
  {
    icon: UsersIcon,
    title: 'Has the Employee Been Set Up in the Admin Portal?',
    description: 'An installed agent still needs the employee configured correctly in the admin portal to report data as expected.',
  },
  {
    icon: SettingsIcon,
    title: 'Are Monitoring Settings Configured as Expected?',
    description: 'Screenshot intervals, privacy controls and attendance policy are all set centrally, check the admin portal if something looks off.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'The Windows Agent icon isn\'t showing in the system tray. What should I check first?',
    answer: 'Confirm the installer completed successfully, and that the device has been restarted if the installer required it.',
  },
  {
    question: "A device isn't showing activity or attendance data. What could cause that?",
    answer: 'Check that the agent is running (system tray), that the device has internet connectivity, and that the employee is configured in the admin portal.',
  },
  {
    question: 'Where can I get help beyond this page?',
    answer: 'Contact the ZUZU team directly, this page covers general checks, not every possible scenario.',
  },
  {
    question: "My activation code isn't working. What should I check?",
    answer: "Activation codes are 16 characters long and tied to your organization, double-check for typos, and confirm you're using a code that hasn't already been used to activate a different device.",
  },
  {
    question: 'A screenshot has blacked-out or blank areas, is that a bug?',
    answer: "No, that's private-region redaction working as intended. Passwords, banking, webmail, messaging, password managers and desktop notifications are redacted on-device before a screenshot is ever stored, so those areas appear blocked out by design.",
  },
  {
    question: 'The device was offline for a while, did that data get lost?',
    answer: "The agent queues activity, attendance and screenshot data locally while offline and syncs automatically once the device reconnects. If data still looks missing after reconnecting, check that the agent is running and the device has stayed online long enough to finish syncing.",
  },
  {
    question: 'Tracking on a personal laptop seems to stop partway through the day. Why?',
    answer: "On personal devices, tracking is session-gated to run only between punch-in and punch-out, through a short-lived permission the agent has to keep renewing. If that permission isn't renewed, tracking pauses until the next punch-in.",
  },
  {
    question: 'The agent looks out of date. How do updates get applied?',
    answer: "The agent updates automatically from your organization's release feed, without a manual download. A device that's been offline for a long stretch may take a little longer to catch up once it reconnects.",
  },
]

export default function Troubleshooting() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Troubleshooting' }]

  return (
    <>
      <Seo
        title="Troubleshooting | ZUZU"
        description="General troubleshooting checks for the ZUZU Windows agent, installation, and reporting."
        path="/troubleshooting"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Troubleshooting"
        title="Troubleshooting"
        description="A starting point if something looks wrong, these checks cover the most common causes."
        cta={{ label: 'Contact support', href: '/company/contact' }}
        secondaryCta={{ label: 'Browse Knowledge Base', href: '/knowledge-base' }}
        visualType="illustration"
        illustrationVariant="grid"
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Start Here" className="text-xl sm:text-2xl">Common Starting Points</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2">
            {CHECKS.map((check, idx) => {
              const Icon = check.icon
              return (
                <div key={check.title} className="group relative rounded-2xl border border-line bg-surface p-6 sm:p-7 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-brand/10 text-brand font-mono text-xs font-bold ring-1 ring-brand/20">
                          0{idx + 1}
                        </span>
                        <div className="h-8 w-8 rounded-lg bg-surface-alt flex items-center justify-center text-muted group-hover:text-brand transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-muted tracking-wider uppercase">Diagnostic Check</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-ink mb-2 leading-snug group-hover:text-brand transition-colors">
                      {check.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted leading-relaxed">
                      {check.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <ExpandedContentSection path="/troubleshooting" />

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Still Stuck?"
        description="Reach out to our team directly rather than guessing further."
        primaryAction={{ label: 'Contact support', href: '/company/contact' }}
        secondaryAction={{ label: 'Browse the Knowledge Base', href: '/knowledge-base' }}
      />
    </>
  )
}

