import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import Button from '../../components/ui/Button'
import SectionHeader from '../../components/ui/SectionHeader'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import HumanImage from '../../components/ui/HumanImage'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import ProductReveal from '../../components/motion/ProductReveal'
import { HOW_IT_WORKS_SECTION } from '../../data/navigation'
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

const WORKFLOW_STEPS = [
  { icon: UserCheckIcon, title: 'Sign In', description: "The Windows agent is already running; the employee's tracked session begins." },
  { icon: ClockIcon, title: 'Start Work', description: 'Work begins, and time & attendance starts recording.' },
  { icon: MonitorIcon, title: 'Work Activity', description: 'The employee moves through apps, sites and tasks for the day.' },
  { icon: ActivityIcon, title: 'Activity Capture', description: 'The Windows agent records that activity automatically in the background.' },
  { icon: CameraIcon, title: 'Screenshot Capture', description: 'Screenshots are captured on a configured interval, with private regions redacted on-device.' },
  { icon: EyeIcon, title: 'Information Review', description: 'Activity, attendance and screenshot data become available in the manager workspace.' },
  { icon: BarChartIcon, title: 'Manager Understanding', description: 'Managers review that data to understand how the day actually went.' },
  { icon: FileTextIcon, title: 'Day-End Reporting', description: 'AI reports summarize the day for managers and admins.' },
]

const ECOSYSTEM_PAGES = HOW_IT_WORKS_SECTION.items.map((item) => ({
  ...item,
  href: `${HOW_IT_WORKS_SECTION.href}/${item.slug}`,
}))

const FAQ_ITEMS = [
  {
    question: 'What is the "8-Step Workday"?',
    answer: 'A description of the typical path a workday follows in ZUZU, from signing in through to the day-end report, see the 8-step workday for the full breakdown.',
  },
  {
    question: 'Do I need to install anything for ZUZU to work?',
    answer: 'Yes, the ZUZU Windows agent, a roughly 80 MB installer, runs on each employee\'s Windows device. See desktop app workflow for the full path from download to daily tracking.',
  },
  {
    question: 'Does ZUZU protect employee privacy while tracking activity?',
    answer: "Yes. Screenshots are captured on a configured interval, and private regions are redacted on the device itself before a screenshot is ever stored or uploaded.",
  },
  {
    question: 'How is ZUZU different from a manual or legacy approach?',
    answer: 'See the ZUZU advantage for a direct, factual comparison between traditional workforce-visibility methods and how ZUZU\'s Windows agent, screenshot monitoring and reporting work instead.',
  },
  {
    question: 'Does ZUZU change how employees actually do their work?',
    answer: "No. ZUZU observes and records activity, attendance and screenshots in the background, it doesn't alter applications, restrict access, or interfere with the tasks an employee is doing.",
  },
  {
    question: 'Is this information available in real time, or only after the day ends?',
    answer: 'Both. Activity and attendance data appear in the manager workspace as the day happens, while the AI report adds a written, day-end summary once the day is complete.',
  },
  {
    question: 'What roles are involved in this workflow, and how does their access differ?',
    answer: "Managers review their own team's day through the manager workspace; admins configure monitoring settings and see across the organization through the admin portal.",
  },
  {
    question: 'Does this workflow work the same way for remote and hybrid teams?',
    answer: 'Yes. Because the Windows agent is tied to the device rather than a physical location, the same sign-in-to-day-end-report workflow applies regardless of where an employee is working.',
  },
]

export default function HowItWorksHub() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'How It Works' }]

  return (
    <>
      <Seo
        title="How ZUZU Works | ZUZU"
        description="Understand the complete ZUZU workflow: the Windows agent, activity and screenshot capture, manager review and day-end reporting, from sign-in to insight."
        path="/how-it-works"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="How ZUZU Works"
        badgeVariant="purple"
        title="Understand How ZUZU Works From Start to Day-End Reporting"
        description="ZUZU connects a lightweight Windows agent, configurable screenshot monitoring and AI-assisted reporting into a single day-to-day workflow, from an employee signing in to a manager reviewing the day-end report."
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Desktop App Workflow', href: '/how-it-works/desktop-app-workflow' }}
        visualType="dashboard"
        dashboardType="analytics"
        bgImage="/images/workforce/zuzu-manager-workspace.webp"
        humanImage={{
          src: '/images/workforce/zuzu-manager-workspace.webp',
          title: 'Operations Specialist',
          subtitle: 'End-to-End Workflow Overview',
        }}
      />

      {/* Overview */}
      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <EyebrowBadge>Workflow Architecture</EyebrowBadge>
            <TypewriterHeading as="h2" className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">The ZUZU Workflow, in One Place</TypewriterHeading>
            <p className="text-base text-muted leading-relaxed">
              Every ZUZU deployment follows the same underlying path: install the Windows agent on an
              employee's device, let it capture activity, attendance and, where configured, screenshots
              throughout the day, and give managers and admins a way to review and report on that
              information.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The four guides below break that path down from different angles: the workday
              itself, the desktop app that powers it, why ZUZU is built the way it is, and how it compares
              to legacy, manual approaches.
            </p>
          </div>
          <div className="lg:col-span-5">
            <HumanImage
              src="/images/workforce/zuzu-workplace-employee.webp"
              alt="Focused employee working in modern workstation"
              aspectRatio="aspect-[4/3]"
              glow
              className="shadow-xl"
              badge="Employee Experience"
            />
          </div>
        </Container>
      </section>

      {/* 8-step condensed workflow */}
      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>The workday</EyebrowBadge>}
            title="8 steps, from sign-in to day-end report"
            description="A condensed view of the full workday, see the 8-step workday for the detailed breakdown."
            actions={
              <Button to="/how-it-works/8-step-workday" variant="ghost">
                Read the full 8-Step Workday
              </Button>
            }
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green/10 text-green font-bold text-xs">
                    {i + 1}
                  </span>
                  <step.icon className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{step.title}</p>
                  <p className="text-xs text-muted mt-1">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Ecosystem cards */}
      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>Explore further</EyebrowBadge>}
            title="The How It Works ecosystem"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ECOSYSTEM_PAGES.map((page, i) => (
              <FeatureCard
                key={page.slug}
                index={i}
                icon={<page.icon className="h-5 w-5" />}
                title={page.label}
                description={page.description}
                href={page.href}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Product visual & Manager Review */}
      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <EyebrowBadge>Manager Workspace</EyebrowBadge>
            <TypewriterHeading as="h2">Everything Comes Together for Managers and Admins</TypewriterHeading>
            <p className="text-base text-muted">
              Activity, attendance and screenshot data captured through the workday all surface in the
              Manager workspace and admin portal, where AI reports turn it into a day-end summary.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/product/manager-workspace" className="text-sm font-semibold text-green hover:text-green-600">
                Manager Workspace &rarr;
              </Link>
              <Link to="/product/ai-reports" className="text-sm font-semibold text-green hover:text-green-600">
                AI Reports &rarr;
              </Link>
            </div>
          </div>
          <div className="relative">
            <HumanImage
              src="/images/workforce/zuzu-manager-one-on-one.webp"
              alt="Indian engineering manager and team member having a supportive, collaborative one-on-one discussion in modern enterprise office"
              aspectRatio="aspect-[16/10]"
              glow
              className="shadow-2xl"
              badge="Manager 1-on-1 Review"
            />
            <ProductReveal base={400} className="pr-badge absolute -bottom-5 right-4 sm:-bottom-6 sm:right-6 rounded-xl border border-line bg-surface/95 backdrop-blur-xl p-3 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 max-w-[240px]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
                <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
                <span>Objective Review</span>
              </div>
              <p className="text-[11px] text-muted mt-1 leading-snug">
                Transparent data replaces guesswork in daily check-ins
              </p>
            </ProductReveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Common questions about how ZUZU works" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="See the Full ZUZU Workflow for Yourself"
        description="Start a 7-day free trial, no card required, for up to 10 employees."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Talk to sales', href: '/company/contact' }}
      />
    </>
  )
}
