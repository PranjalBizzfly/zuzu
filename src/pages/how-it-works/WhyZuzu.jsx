import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import ZuzuImage from '../../components/ui/ZuzuImage'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import {
  ActivityIcon,
  CameraIcon,
  BarChartIcon,
  EyeIcon,
  FileTextIcon,
  ClockIcon,
  LayersIcon,
  ShieldIcon,
} from '../../components/ui/icons'
import SectionTitle from '../../components/ui/SectionTitle'

const CONCEPTS = [
  {
    key: 'track',
    icon: ActivityIcon,
    title: 'Track',
    description:
      "ZUZU tracks time & attendance (clock-ins and hours) and employee activity (apps, sites and tasks) through the Windows agent, without employees needing to log anything manually.",
    links: [
      { label: 'Time & Attendance', href: '/product/time-attendance' },
      { label: 'Employee Activity', href: '/product/employee-activity' },
    ],
  },
  {
    key: 'monitor',
    icon: CameraIcon,
    title: 'Monitor',
    description:
      "Where enabled, ZUZU adds visual context through screenshot monitoring on a configurable interval, with the agent visible in the system tray so monitoring is never hidden from the device it's on.",
    links: [
      { label: 'Screenshot Monitoring', href: '/screenshot-privacy/screenshot-monitoring' },
      { label: 'ZUZU Windows Agent', href: '/windows-agent' },
    ],
  },
  {
    key: 'understand',
    icon: BarChartIcon,
    title: 'Understand',
    description:
      'Managers turn captured activity, attendance and screenshot data into understanding through the manager workspace, workforce analytics and behaviour intelligence, not raw exports.',
    links: [
      { label: 'Manager Workspace', href: '/product/manager-workspace' },
      { label: 'Workforce Analytics', href: '/product/workforce-analytics' },
      { label: 'Behaviour Intelligence', href: '/solutions/behaviour-intelligence' },
    ],
  },
  {
    key: 'review',
    icon: EyeIcon,
    title: 'Review',
    description:
      "Screenshots are reviewed alongside activity and attendance data for the same period, in the manager workspace, a review workflow, not a live surveillance feed.",
    links: [{ label: 'Screenshot Review Workflow', href: '/screenshot-privacy/screenshot-review-workflow' }],
  },
  {
    key: 'report',
    icon: FileTextIcon,
    title: 'Report',
    description:
      'AI reports and the broader reports + exports ecosystem summarize the day, week or period for managers and admins, instead of leaving reporting as a manual compilation task.',
    links: [
      { label: 'AI Reports', href: '/product/ai-reports' },
      { label: 'Reports + Exports Ecosystem', href: '/reports' },
    ],
  },
]

const FAQ_ITEMS = [
  {
    question: 'What does "Why ZUZU" actually mean?',
    answer: 'It\'s a summary of how ZUZU approaches workforce visibility: track activity and attendance, monitor visually where needed, help managers understand what happened, support a deliberate review workflow, and turn all of it into reports.',
  },
  {
    question: 'Is monitoring hidden from employees?',
    answer: 'No, the Windows agent runs visibly from the system tray, giving both the employee and IT a clear sign that it\'s active.',
  },
  {
    question: 'How does ZUZU protect privacy while monitoring?',
    answer: 'Through privacy controls and on-device private-region redaction, which removes sensitive regions from a screenshot before it is ever stored or uploaded.',
  },
  {
    question: 'Does ZUZU replace the need for a manager to actually check in with their team?',
    answer: "No, ZUZU gives managers information (activity, attendance, screenshots, AI reports) to inform that check-in, not a replacement for it.",
  },
  {
    question: 'Does "Understand" include forecasting things like burnout, or only reporting raw activity?',
    answer: "It includes a wellbeing & burnout forecast that projects risk per employee from working-hour patterns, long days, weekend work, late-night activity, with a weeks-to-risk estimate. It's framed as a forecast meant to prompt a conversation, not a clinical diagnosis or a performance ranking.",
  },
  {
    question: 'Does "Understand" mean predicting who might quit?',
    answer: "No. Behaviour intelligence detects changes from an individual's own baseline and routes flagged activity to a review queue, it doesn't predict turnover or attrition.",
  },
  {
    question: 'Does monitoring work the same way on a personal laptop as a company device?',
    answer: 'No, on personal devices, tracking is session-gated to only run between punch-in and punch-out, through a short-lived permission the agent has to keep renewing, rather than running continuously the way it does on a company-owned device.',
  },
  {
    question: 'What\'s the actual difference between "Monitor" and "Review" in this model?',
    answer: 'Monitor is the capture step, a screenshot taken on a configured interval. Review happens afterward, when a manager looks at that screenshot alongside activity and attendance data for the same period.',
  },
]

export default function WhyZuzu() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Why ZUZU' },
  ]

  return (
    <>
      <Seo
        title="Why ZUZU | ZUZU"
        description="The ZUZU approach to workforce visibility in five parts: track, monitor, understand, review and report."
        path="/how-it-works/why-zuzu"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Why ZUZU"
        badgeVariant="purple"
        title="Track, Monitor, Understand, Review, Report."
        description="Five ideas that describe how ZUZU turns a workday into information managers and admins can actually use, grounded in what the platform does, not marketing language."
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'How It Works overview', href: '/how-it-works' }}
        visualType="dashboard"
        dashboardType="manager"
        bgImage="/images/workforce/zuzu-manager-one-on-one.webp"
        humanImage={{
          src: '/images/workforce/zuzu-manager-one-on-one.webp',
          title: 'Engineering Manager',
          subtitle: 'Supportive 1-on-1 Review',
        }}
      />

      {/* Five concepts */}
      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>The five ideas</EyebrowBadge>}
            title="Five concepts, one workflow"
          />
          <div className="flex flex-col gap-6">
            {CONCEPTS.map((concept, i) => (
              <div
                key={concept.key}
                className="group relative rounded-2xl border border-line bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-brand/40 hover:shadow-lg grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <concept.icon className="h-6 w-6" />
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold text-muted bg-surface-alt border border-line">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-brand transition-colors">
                    {concept.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {concept.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {concept.links.map((link) => (
                      <Link key={link.href} to={link.href} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-surface hover:border-brand/40 text-xs sm:text-sm font-medium text-ink transition-colors">
                        {link.label} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Privacy callout */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ZuzuImage
            src="/images/workforce/zuzu-security-audit.webp"
            alt="Security and privacy review of workforce monitoring configuration"
            aspectRatio="aspect-[4/3]"
            className="rounded-xl shadow-lg"
          />
          <div className="flex flex-col gap-4">
            <EyebrowBadge>Privacy, built in</EyebrowBadge>
            <TypewriterHeading as="h2" className="text-xl sm:text-2xl font-bold text-ink">Visibility and Privacy, Addressed Together</TypewriterHeading>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Every concept above works alongside privacy controls and on-device private-region
              redaction, sensitive parts of a screen, like login or financial pages, are redacted
              before a screenshot is ever stored or uploaded. Monitoring boundaries are configured by
              your organization, not left as an all-or-nothing default.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/screenshot-privacy/private-region-redaction" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-line bg-surface hover:border-brand/40 text-sm font-semibold text-brand transition-colors">
                Private Region Redaction &rarr;
              </Link>
              <Link to="/security" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-line bg-surface hover:border-brand/40 text-sm font-semibold text-brand transition-colors">
                Security overview &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Resources" className="text-xl sm:text-2xl">Related ZUZU Resources</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<ClockIcon className="h-5 w-5" />} title="Time & Attendance" description="Clock-ins, hours and attendance in one place." href="/product/time-attendance" />
            <FeatureCard icon={<LayersIcon className="h-5 w-5" />} title="Behaviour Intelligence" description="Patterns and behaviour across your teams." href="/solutions/behaviour-intelligence" />
            <FeatureCard icon={<ShieldIcon className="h-5 w-5" />} title="Security" description="How ZUZU handles workforce data." href="/security" />
            <FeatureCard icon={<FileTextIcon className="h-5 w-5" />} title="Reports" description="The reports + exports ecosystem." href="/reports" />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Why ZUZU FAQ" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="See Track, Monitor, Understand, Review and Report in Action"
        description="Start a 7-day free trial, no card required, for up to 10 employees."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Explore the ZUZU Advantage', href: '/how-it-works/zuzu-advantage' }}
      />
    </>
  )
}
