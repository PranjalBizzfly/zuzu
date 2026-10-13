import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import DashboardPreview from '../../components/ui/DashboardPreview'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import {
  DownloadIcon,
  InstallationIcon,
  UserCheckIcon,
  MonitorIcon,
  ActivityIcon,
  CameraIcon,
  ServerIcon,
  BarChartIcon,
} from '../../components/ui/icons'

const STEPS = [
  {
    icon: DownloadIcon,
    title: 'Download',
    description: "Download the Windows agent, a roughly 80 MB installer, made available through your ZUZU account after starting a trial or subscribing.",
    href: '/windows-agent/download',
  },
  {
    icon: InstallationIcon,
    title: 'Installation',
    description: 'Run the installer on the employee\'s Windows device. No separate configuration step is required beyond running it.',
    href: '/installation/windows',
  },
  {
    icon: UserCheckIcon,
    title: 'Sign In',
    description: "Activation connects the installed agent to your organization's ZUZU account, linking that device to the right team.",
    href: '/installation/activation',
  },
  {
    icon: MonitorIcon,
    title: 'Desktop Agent',
    description: 'Once active, the agent runs quietly from the Windows system tray, a visible sign, for both the employee and IT, that it\'s running.',
    href: '/windows-agent/system-tray',
  },
  {
    icon: ActivityIcon,
    title: 'Activity Capture',
    description: 'The agent captures activity and attendance in the background as the employee works.',
    href: '/product/employee-activity',
  },
  {
    icon: CameraIcon,
    title: 'Screenshot Capture',
    description: 'Where enabled, screenshots are captured on an interval configurable between 1 and 5 minutes, set through the admin portal, with private regions redacted on-device before storage or upload.',
    href: '/screenshot-privacy/screenshot-intervals',
  },
  {
    icon: ServerIcon,
    title: 'Offline Queue',
    description: "If the device loses connectivity, the agent keeps capturing locally and queues that data, syncing once the connection returns, nothing is lost in the gap.",
    href: '/windows-agent/offline-capture',
  },
  {
    icon: BarChartIcon,
    title: 'Review & Reporting',
    description: 'Captured data becomes available in the manager workspace, with AI reports available for a day-end summary.',
    href: '/product/manager-workspace',
  },
]

const FAQ_ITEMS = [
  { question: 'How large is the ZUZU Windows Agent installer?', answer: 'Approximately 80 MB.' },
  { question: 'What operating system does the desktop agent run on?', answer: "Windows. The agent is a Windows desktop installer; there is no macOS or Linux agent." },
  { question: 'How do I know the agent is running?', answer: 'It shows in the Windows system tray, the icon area near the clock, once installed and active.' },
  { question: 'What happens if a device goes offline during the day?', answer: 'The agent continues capturing activity and attendance locally, queues it, and syncs automatically once the device reconnects.' },
  { question: 'How does the agent stay up to date?', answer: 'Through a release-feed update mechanism, so devices can receive the latest agent version without IT manually reinstalling it on every machine.' },
  { question: 'Can screenshot capture intervals be customized?', answer: 'Yes, the interval is configurable between 1 and 5 minutes, set per organization through the admin portal.' },
  { question: 'Is sensitive on-screen information protected in screenshots?', answer: 'Yes, private regions are redacted on the device itself, before a screenshot is ever stored or uploaded.' },
  { question: 'What do I need to activate the agent after installing it?', answer: 'A 16-character activation code generated for your organization. Entering it connects the installed agent to the right account and team.' },
]

export default function DesktopAppWorkflow() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Desktop App Workflow' },
  ]

  return (
    <>
      <Seo
        title="Desktop App Workflow | ZUZU"
        description="How the ZUZU Windows agent works day to day: download, install, sign in, activity and screenshot capture, offline queuing, and updates."
        path="/how-it-works/desktop-app-workflow"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Desktop App Workflow"
        badgeVariant="blue"
        title="From Download to Daily Workforce Tracking"
        description="How the ZUZU Windows agent gets onto a device, and how it behaves once it's there, download, install, sign in, and the day-to-day capture that follows."
        cta={{ label: 'Download the Windows Agent', href: '/windows-agent/download' }}
        secondaryCta={{ label: 'How It Works overview', href: '/how-it-works' }}
        visualType="dashboard"
        dashboardType="windows"
        bgImage="/images/workforce/zuzu-installation-setup.webp"
        humanImage={{
          src: '/images/workforce/zuzu-installation-setup.webp',
          title: 'IT Infrastructure Admin',
          subtitle: 'Windows Agent Setup',
        }}
      />

      {/* Steps */}
      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>Workflow</EyebrowBadge>}
            title="Download → Install → Sign In → Track"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Link
                key={step.title}
                to={step.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand font-mono font-bold text-xs ring-1 ring-brand/20">
                      0{i + 1}
                    </span>
                    <div className="h-8 w-8 rounded-lg bg-surface-alt flex items-center justify-center text-muted group-hover:text-brand transition-colors">
                      <step.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-ink mb-1 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Agent behavior detail */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <EyebrowBadge>Agent behavior</EyebrowBadge>
            <TypewriterHeading as="h2" className="text-xl sm:text-2xl font-bold text-ink">What the Desktop Agent Does Once It's Installed</TypewriterHeading>
            <ul className="flex flex-col gap-3.5">
              <li className="text-sm sm:text-base text-muted leading-relaxed flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-brand shrink-0 mt-2" />
                <span><strong className="text-ink font-semibold">System tray presence:</strong> the agent runs visibly from the Windows system tray, confirming for both employee and IT that it's active.</span>
              </li>
              <li className="text-sm sm:text-base text-muted leading-relaxed flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-brand shrink-0 mt-2" />
                <span><strong className="text-ink font-semibold">Offline capture queue:</strong> activity and attendance keep being captured locally during a connectivity gap, then sync once reconnected.</span>
              </li>
              <li className="text-sm sm:text-base text-muted leading-relaxed flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-brand shrink-0 mt-2" />
                <span><strong className="text-ink font-semibold">Release-feed updates:</strong> the agent stays current through a release-feed mechanism, so devices get the latest version without a manual reinstall on every machine.</span>
              </li>
              <li className="text-sm sm:text-base text-muted leading-relaxed flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-brand shrink-0 mt-2" />
                <span><strong className="text-ink font-semibold">Configurable screenshot interval:</strong> admins set the capture cadence, between 1 and 5 minutes, through the Admin Portal.</span>
              </li>
              <li className="text-sm sm:text-base text-muted leading-relaxed flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-brand shrink-0 mt-2" />
                <span><strong className="text-ink font-semibold">Private-region redaction:</strong> sensitive regions of a screenshot are redacted on-device, before the image is ever stored or uploaded.</span>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl border border-line shadow-lg">
            <DashboardPreview type="windows" />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Desktop app FAQ" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Get the Windows Agent Running"
        description="Start a 7-day free trial, no card required, for up to 10 employees."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Download the Windows Agent', href: '/windows-agent/download' }}
      />
    </>
  )
}
