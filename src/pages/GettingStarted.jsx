import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import FAQ from '../components/ui/FAQ'
import CTA from '../components/ui/CTA'
import Seo from '../components/Seo'
import InternalPageHero from '../components/ui/InternalPageHero'
import SectionHeader from '../components/ui/SectionHeader'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import ExpandedContentSection from '../components/ui/ExpandedContentSection'
import {
  DownloadIcon,
  InstallationIcon,
  UserCheckIcon,
  SettingsIcon,
  ActivityIcon,
  CameraIcon,
  FileTextIcon,
  BarChartIcon,
  HelpCircleIcon,
  RocketIcon,
} from '../components/ui/icons'
import SectionTitle from '../components/ui/SectionTitle'

const STEPS = [
  { icon: RocketIcon, title: 'Start Your Free Trial', description: '7 days, up to 10 employees, no card required.', href: '/free-trial' },
  { icon: DownloadIcon, title: 'Install the Windows Agent', description: 'Download and run the ~80 MB installer on each device.', href: '/windows-agent/download' },
  { icon: InstallationIcon, title: 'Activate', description: "Connect the installed agent to your organization's account.", href: '/installation/activation' },
  { icon: UserCheckIcon, title: 'Set Up Employees', description: 'Organize employees and teams in the admin portal.', href: '/admin/employees' },
  { icon: SettingsIcon, title: 'Configure Monitoring', description: 'Set screenshot intervals, privacy controls and attendance policy.', href: '/admin/monitoring-settings' },
  { icon: ActivityIcon, title: 'Review Activity & Attendance', description: 'Check that data is coming in as expected.', href: '/activity' },
  { icon: CameraIcon, title: 'Review Screenshots, Where Enabled', description: 'Check screenshot capture and on-device redaction.', href: '/screenshot-privacy/screenshot-monitoring' },
  { icon: FileTextIcon, title: 'Generate Reports', description: 'Pull an activity, attendance or AI report.', href: '/reports' },
  { icon: BarChartIcon, title: 'Review Analytics', description: 'Look at trends and focus benchmarks across your workforce.', href: '/ai-analytics' },
  { icon: HelpCircleIcon, title: 'Explore the Knowledge Base', description: 'Go deeper on any topic as you need it.', href: '/knowledge-base' },
]

const FAQ_ITEMS = [
  {
    question: 'How large is the Windows Agent installer?',
    answer: "The installer is about 80 MB. It's a standard Windows install, download it, run it, and it sets up in the background.",
  },
  {
    question: "Where do I get the 16-character activation code?",
    answer: "The activation code is generated for your organization and is 16 characters long. Enter it during setup to connect an installed agent to your organization's account.",
  },
  {
    question: 'What happens if a device is offline during the first setup?',
    answer: 'The agent still installs and activates. Once activity capture begins, anything recorded while offline is queued locally and synced automatically once the device reconnects.',
  },
  {
    question: 'Do I need to add employees before or after installing the agent?',
    answer: 'Either order works, but data only reports correctly once both are done: the agent needs to be installed and running, and the employee needs to be set up in the admin portal.',
  },
  {
    question: 'Can I go through this setup with just a few employees first?',
    answer: 'Yes. The 7-day free trial covers up to 10 employees with no card required, which is enough to walk through the full setup roadmap before rolling out further.',
  },
  {
    question: 'Should I configure monitoring settings before or after installing the agent on every device?',
    answer: "It's worth configuring screenshot intervals, privacy controls and attendance policy in the admin portal early, since those settings apply centrally to every device you activate afterward.",
  },
  {
    question: 'How soon after activation will reports be available?',
    answer: "Once the agent is active and capturing data, activity and attendance start flowing, and AI daily reports become browsable as each day's data comes in.",
  },
  {
    question: 'Does getting started require IT involvement?',
    answer: 'Not necessarily. The agent installs like a normal Windows application and runs from the system tray, the main organization-wide steps, like activation codes and monitoring policy, are handled centrally through the admin portal.',
  },
]

export default function GettingStarted() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Getting Started' }]

  return (
    <>
      <Seo
        title="Getting Started | ZUZU"
        description="The first-time setup journey for ZUZU: start a trial, install the Windows agent, activate, configure employees and monitoring, and review your first reports."
        path="/getting-started"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Getting Started"
        badgeVariant="purple"
        title="Getting Started With ZUZU"
        description="The step-by-step path from starting your free trial to deploying the lightweight Windows agent and reviewing your first AI-assisted workforce reports."
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Download Agent', href: '/windows-agent' }}
        visualType="dashboard"
        dashboardType="windows"
        bgImage="/images/workforce/zuzu-onboarding-setup.webp"
        humanImage={{
          src: '/images/workforce/zuzu-onboarding-setup.webp',
          title: 'Onboarding Specialist',
          subtitle: 'Guided Setup & Activation',
        }}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-10">
            <div>
              <SectionTitle eyebrow="Getting Started" className="text-2xl sm:text-3xl font-bold text-ink">First-Time Setup Roadmap</SectionTitle>
              <p className="text-sm sm:text-base text-muted mt-2">Follow these 10 straightforward steps to launch workforce intelligence across your team.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {STEPS.map((step, i) => (
                <Link
                  key={step.href}
                  to={step.href}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:border-green/40 hover:bg-elevated hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green font-bold text-sm group-hover:scale-105 transition-transform">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-green shrink-0" />
                      <span className="text-base font-bold text-ink group-hover:text-green transition-colors">{step.title}</span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                  </div>
                  <span className="text-muted text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1 text-green shrink-0 mt-1">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ExpandedContentSection path="/getting-started" />

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Need Help Setting Up?"
        description="Our support team is available to assist with deployment and configuration."
        primaryAction={{ label: 'Contact Support', href: '/company/contact' }}
        secondaryAction={{ label: 'Read Knowledge Base', href: '/knowledge-base' }}
      />
    </>
  )
}
