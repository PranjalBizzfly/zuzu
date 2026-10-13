import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import DashboardPreview from '../components/ui/DashboardPreview'
import ImageSection from '../components/ui/ImageSection'
import FeatureCard from '../components/ui/FeatureCard'
import CoreFeaturesOrbit from '../components/ui/CoreFeaturesOrbit'
import FlowSteps from '../components/ui/FlowSteps'
import WhyZuzuSection from '../components/ui/WhyZuzuSection'
import BeforeAfterSection from '../components/ui/BeforeAfterSection'
import PricingSection from '../components/ui/PricingSection'
import AdvantageSection from '../components/ui/AdvantageSection'
import FAQ from '../components/ui/FAQ'
import CTA from '../components/ui/CTA'
import HomeWorkdayHero from '../components/ui/HomeWorkdayHero'
import FeatureMarquee from '../components/ui/FeatureMarquee'
import TypewriterHeading from '../components/motion/TypewriterHeading'
import ProductReveal from '../components/motion/ProductReveal'
import { seq } from '../components/motion/seq'
import { findSection } from '../data/navigation'
import { INDUSTRY_VISUALS } from '../data/visualAssets'
import {
  EyeIcon,
  ClockIcon,
  ActivityIcon,
  SparklesIcon,
  ShieldIcon,
  UsersIcon,
  MonitorIcon,
  BarChartIcon,
  LayersIcon,
  CameraIcon,
  LockIcon,
  FileTextIcon,
  SettingsIcon,
  GlobeIcon,
  BuildingIcon,
  HeadsetIcon,
  CodeIcon,
  PaletteIcon,
  BriefcaseIcon,
  RocketIcon,
  PhoneIcon,
} from '../components/ui/icons'

const FLOW = [
  { label: 'Employee', icon: UsersIcon },
  { label: 'Windows Agent', icon: MonitorIcon },
  { label: 'Activity + Attendance', icon: ActivityIcon },
  { label: 'Privacy Controls', icon: ShieldIcon },
  { label: 'AI Reports', icon: SparklesIcon },
  { label: 'Manager Workspace', icon: BarChartIcon },
  { label: 'Admin Portal', icon: SettingsIcon },
  { label: 'Workforce Intelligence', icon: LayersIcon },
]

const CORE_FEATURES = [
  {
    icon: ClockIcon,
    title: 'Time & Attendance',
    description: 'Clock-ins, hours and attendance in one place.',
    href: '/product/time-attendance',
    dataIn: 'Clock-in / clock-out timestamps',
    insightOut: 'Daily hours & attendance record',
  },
  {
    icon: ActivityIcon,
    title: 'Employee Activity',
    description: 'Activity across apps, sites and tasks.',
    href: '/product/employee-activity',
    dataIn: 'App, site & task-level signals',
    insightOut: 'Where the workday actually went',
  },
  {
    icon: CameraIcon,
    title: 'Screenshot Monitoring',
    description: 'Visual context alongside activity data.',
    href: '/product/workforce-monitoring',
    dataIn: 'Periodic, privacy-controlled captures',
    insightOut: 'Visual timeline of the workday',
  },
  {
    icon: SparklesIcon,
    title: 'AI Reports',
    description: 'AI-assisted reporting for managers and admins.',
    href: '/product/ai-reports',
    dataIn: 'Raw activity & attendance data',
    insightOut: 'AI-written daily summary',
  },
  {
    icon: BarChartIcon,
    title: 'Workforce Analytics',
    description: 'Trends and analytics across your workforce.',
    href: '/product/workforce-analytics',
    dataIn: 'Team-wide activity trends',
    insightOut: 'Productivity charts & benchmarks',
  },
  {
    icon: LayersIcon,
    title: 'Behaviour Intelligence',
    description: 'Patterns and behaviour across your teams.',
    href: '/solutions/behaviour-intelligence',
    dataIn: 'Patterns across people & teams',
    insightOut: 'Early risk & behaviour signals',
  },
]

// Feeds the auto-scrolling FeatureMarquee strip -- same six features as
// CORE_FEATURES below, with a short colored "badge" + "meta" pair added
// so each card reads like a highlight rather than a duplicate section.
const FEATURE_MARQUEE = [
  { icon: ClockIcon, title: 'Time & Attendance', badge: 'Real-Time', meta: 'Windows Agent', tint: 'bg-green/10', color: 'text-green-400' },
  { icon: ActivityIcon, title: 'Employee Activity', badge: 'AI-Powered', meta: 'Apps & Sites', tint: 'bg-blue/10', color: 'text-blue-400' },
  { icon: CameraIcon, title: 'Screenshot Monitoring', badge: 'Visual Context', meta: 'Configurable Capture', tint: 'bg-purple/10', color: 'text-purple-400' },
  { icon: SparklesIcon, title: 'AI Reports', badge: 'Auto-Generated', meta: 'Manager Digests', tint: 'bg-green/10', color: 'text-green-400' },
  { icon: BarChartIcon, title: 'Workforce Analytics', badge: 'Trend Insights', meta: 'Team & Org Level', tint: 'bg-blue/10', color: 'text-blue-400' },
  { icon: LayersIcon, title: 'Behaviour Intelligence', badge: 'Pattern Detection', meta: 'Baseline Alerts', tint: 'bg-purple/10', color: 'text-purple-400' },
]

const USE_CASES = [
  {
    icon: ClockIcon,
    title: 'Track Attendance Across Distributed Teams',
    description: 'Consistent attendance records, wherever people work from.',
    href: '/product/time-attendance',
  },
  {
    icon: EyeIcon,
    title: 'Understand Activity Without Micromanaging',
    description: 'Visibility into work patterns, not constant oversight.',
    href: '/solutions/workforce-visibility',
  },
  {
    icon: SparklesIcon,
    title: 'Turn Activity Data Into Manager-Ready Reports',
    description: 'AI reports summarize what matters for each manager.',
    href: '/product/ai-reports',
  },
  {
    icon: SettingsIcon,
    title: 'Give Admins the Right Level of Control',
    description: 'Centralized settings through the admin portal.',
    href: '/product/admin-portal',
  },
]

const USE_CASE_SPOTLIGHTS = [
  {
    image: '/images/workforce/zuzu-story-tech.webp?v=2',
    alt: 'Software engineering team collaborating on distributed sprint delivery',
    badge: 'Distributed Engineering',
    role: 'IT & SaaS Teams',
    title: 'Visibility Across Engineers in Different Time Zones',
    points: ['Employee Activity and Time & Attendance apply the same way regardless of location', 'Automated day-end reports replace manual status check-ins'],
    summary:
      'Engineering and support leads can review activity and attendance for a distributed team through the manager workspace, without needing everyone in one office.',
    href: '/industries/it-saas',
  },
  {
    image: '/images/workforce/zuzu-story-ops.webp?v=2',
    alt: 'Operations team collaborating on shift schedules and SLA adherence',
    badge: 'Shift-Based Operations',
    role: 'BPO & Support Teams',
    title: 'Consistent Attendance Records Across Shifts',
    points: ['Attendance is captured automatically through the Windows Agent', 'Team-level reporting supports operational review across shifts'],
    summary:
      'Operations leads use workforce analytics and manager workspace to keep attendance and activity records consistent across shifts and teams.',
    href: '/industries/bpo',
  },
  {
    image: '/images/workforce/zuzu-story-enterprise.webp?v=2',
    alt: 'Indian enterprise executive leadership team collaborating in a corporate boardroom',
    badge: 'Multi-Department Governance',
    role: 'Enterprise Operations',
    title: 'Organization-Wide Visibility With Privacy Controls',
    points: ['On-device redaction protects sensitive information before it is stored', 'Audit logs and capability-based access support governance at scale'],
    summary:
      'Admins unify attendance and activity visibility across departments and locations through the admin portal, with privacy controls configured centrally.',
    href: '/industries/enterprise',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is ZUZU?',
    answer:
      'ZUZU is an AI-powered workforce visibility and intelligence platform that helps organizations understand how work actually happens.',
  },
  {
    question: 'How does ZUZU collect activity data?',
    answer: 'ZUZU uses a Windows agent installed on employee devices to capture activity and attendance data.',
  },
  {
    question: 'Does ZUZU include privacy controls?',
    answer: 'Yes. Privacy controls are part of the core ZUZU system, alongside activity, attendance and AI reports.',
  },
  {
    question: 'Who is ZUZU for?',
    answer: 'ZUZU is built for managers and admins overseeing remote, hybrid or in-office teams.',
  },
  {
    question: 'Can I try ZUZU before committing?',
    answer: 'Yes, ZUZU offers a 7-day free trial.',
  },
  {
    question: 'What platforms does ZUZU support?',
    answer: 'ZUZU currently supports Windows devices through the Windows agent.',
  },
  {
    question: 'Does ZUZU predict which employees are about to quit?',
    answer: "No. ZUZU's behaviour intelligence flags changes from an individual's own baseline and routes them to a review queue, it does not predict turnover or attrition.",
  },
  {
    question: 'How is ZUZU priced?',
    answer: 'Paid plans are priced by employee headcount at checkout. Every organization can start with a 7-day free trial for up to 10 employees, no card required.',
  },
]

// Sourced directly from the product brief's security/compliance section
// (capability-based access, two-factor authentication, audit trails,
// configurable screenshot retention, consent-gated personal-laptop
// monitoring) -- not generic security marketing copy.
const SECURITY_HIGHLIGHTS = [
  {
    icon: LockIcon,
    title: 'Two-Factor Authentication',
    description: 'An extra verification step for admin and manager accounts, on top of capability-based access.',
  },
  {
    icon: FileTextIcon,
    title: 'Workforce Audit Trails',
    description: 'Employee, team, manager and organisation-level events, filterable by severity and exportable.',
  },
  {
    icon: CameraIcon,
    title: 'Configurable Screenshot Retention',
    description: 'Admin-configured retention windows, with consent-gated monitoring for personal laptops.',
  },
]

const INDUSTRY_ICONS = {
  'it-saas': CodeIcon,
  bpo: HeadsetIcon,
  'call-centers': PhoneIcon,
  'digital-agencies': PaletteIcon,
  consulting: BriefcaseIcon,
  startups: RocketIcon,
  enterprise: BuildingIcon,
  'remote-companies': GlobeIcon,
}

export default function Home() {
  const industries = findSection('industries')

  return (
    <div data-landing-page="true">
      {/* 2. Hero matching reference screenshot (media_1789549064602.png) */}
      <HomeWorkdayHero />

      {/* 2.4 Feature highlights -- infinite auto-scrolling marquee strip.
          Full-bleed (outside Container) so cards can scroll edge-to-edge. */}
      <section className="border-t border-line py-6 sm:py-7">
        <FeatureMarquee items={FEATURE_MARQUEE} />
      </section>

      {/* 3.5 Why ZUZU */}
      <WhyZuzuSection className="border-t border-line" />

      {/* 4. Explain the ZUZU system */}
      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>How it works</EyebrowBadge>}
            title="One system, from device to insight"
            description="ZUZU connects every employee device to a single workforce intelligence layer for managers and admins."
          />
          <FlowSteps steps={FLOW} />
        </Container>
      </section>

      {/* 5. Core features */}
      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>Core features</EyebrowBadge>}
            title="Everything you need to see how work happens"
          />
          <CoreFeaturesOrbit features={CORE_FEATURES} />
        </Container>
      </section>

      {/* 5.5 ZUZU Advantage */}
      <AdvantageSection className="border-t border-line" shimmer />

      {/* 6. Privacy-first section */}
      <ImageSection
        eyebrow={<EyebrowBadge>Privacy Controls</EyebrowBadge>}
        title="Visibility that respects employee trust"
        description="Privacy controls sit at the center of the ZUZU system, alongside activity, attendance and AI reports, giving admins the ability to configure what's monitored and how."
        visual={<DashboardPreview type="privacy" />}
        depth3d
        className="border-t border-line"
      >
        <Button to="/security" variant="outline" className="btn-landing-shimmer">
          Learn more about security
        </Button>
      </ImageSection>

      {/* 7. AI reporting section */}
      <ImageSection
        eyebrow={<EyebrowBadge>AI Reports</EyebrowBadge>}
        title="AI Reports, built for managers and admins"
        description="AI reports turn raw activity and attendance data into structured reporting, so managers and admins can see what matters without digging through raw logs."
        visual={<DashboardPreview type="ai" />}
        depth3d
        reverse
        className="border-t border-line"
      >
        <Button to="/product/ai-reports" variant="outline" className="btn-landing-shimmer">
          Explore AI Reports
        </Button>
      </ImageSection>

      {/* 8. Manager Workspace section */}
      <ImageSection
        eyebrow={<EyebrowBadge>Manager Workspace</EyebrowBadge>}
        title="A workspace built for day-to-day management"
        description="Activity, attendance and reports in one place, so managers can check in on their team without switching tools."
        visual={<DashboardPreview type="manager" />}
        depth3d
        className="border-t border-line"
      >
        <Button to="/product/manager-workspace" variant="outline" className="btn-landing-shimmer">
          Explore Manager Workspace
        </Button>
      </ImageSection>

      {/* 9. Admin Portal section */}
      <ImageSection
        eyebrow={<EyebrowBadge>Admin Portal</EyebrowBadge>}
        title="Centralized administration and controls"
        description="Manage users, policies and settings for the entire ZUZU deployment from a single admin portal."
        visual={<DashboardPreview type="admin" />}
        depth3d
        reverse
        className="border-t border-line"
      >
        <Button to="/product/admin-portal" variant="outline" className="btn-landing-shimmer">
          Explore Admin Portal
        </Button>
      </ImageSection>

      {/* 10. Remote and hybrid workforce */}
      <ImageSection
        eyebrow={<EyebrowBadge>Remote &amp; hybrid</EyebrowBadge>}
        title="Built for remote and hybrid teams"
        description="ZUZU gives distributed teams the same visibility as an in-office team, wherever people work from."
        visual={<DashboardPreview type="remote" />}
        depth3d
        className="border-t border-line"
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/solutions/remote-workforce" variant="outline" className="btn-landing-shimmer">
            Remote Workforce
          </Button>
          <Button to="/solutions/hybrid-workforce" variant="outline" className="btn-landing-shimmer">
            Hybrid Workforce
          </Button>
        </div>
      </ImageSection>

      {/* 11. Industry solutions */}
      {industries && (
        <section className="py-14 sm:py-20 border-t border-line">
          <Container className="flex flex-col gap-10">
            <SectionHeader
              eyebrow={<EyebrowBadge>Industries</EyebrowBadge>}
              title="Built for every kind of team"
              description="Tailored visibility patterns and telemetry workflows tuned for your operating environment."
              actions={
                <Button to="/industries" variant="ghost" className="btn-landing-shimmer">
                  View all industries
                </Button>
              }
            />
            {/* Photo parallax (see styles/home-3d-extras.css): the card
                tilts toward the cursor, and the photo behind its frame
                drifts the opposite way, a touch faster -- a depth cue
                distinct from every other tilt on this page, none of
                which have a photo layer to move independently. */}
            <div className="industry-3d-scene grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {industries.items.slice(0, 8).map((item) => {
                const visual = INDUSTRY_VISUALS[item.slug] || {
                  src: '/images/industries/zuzu-industry-enterprise.webp',
                  alt: `${item.label}`,
                }
                const Icon = INDUSTRY_ICONS[item.slug] || BuildingIcon
                return (
                  <Link
                    key={item.slug}
                    to={`${industries.href}/${item.slug}`}
                    className="industry-3d-card tilt-3d group flex flex-col rounded-2xl border border-line bg-surface overflow-hidden shadow-sm hover:shadow-xl hover:border-line-strong transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-elevated">
                      <img
                        src={visual.src}
                        alt={visual.alt || item.label}
                        loading="lazy"
                        className="industry-3d-photo h-full w-full object-cover object-[50%_20%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060A13]/85 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#060A13]/80 backdrop-blur-md px-2 py-1 text-[11px] font-semibold text-white">
                        <Icon className="h-3.5 w-3.5 text-green-400" />
                        <span>{item.label}</span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1 justify-between gap-2">
                      <p className="text-xs text-muted leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center text-xs font-semibold text-green group-hover:text-green-400 transition-colors mt-1">
                        Explore Workflows &rarr;
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </Container>
        </section>
      )}

      {/* 11.5 Before vs After ZUZU */}
      <BeforeAfterSection className="border-t border-line" />

      {/* 11.7 Use case spotlights */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>Use Case Spotlights</EyebrowBadge>}
            title="One Platform for Every Team Structure"
            description="The same underlying capabilities, activity, attendance, reports and privacy controls, apply differently depending on how a team is structured."
          />
          {/* Layered parallax (see styles/home-3d-extras.css): the photo,
              the badge chip and the body copy each drift a different
              amount on hover -- three depths in one card, distinct from
              the single-plane tilt everywhere else on this page. */}
          <div className="spotlight-3d-scene grid gap-6 md:grid-cols-3">
            {USE_CASE_SPOTLIGHTS.map((story) => (
              <div
                key={story.title}
                className="spotlight-3d-card tilt-3d group flex flex-col rounded-2xl border border-line bg-surface overflow-hidden shadow-md hover:shadow-xl hover:border-line-strong transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-elevated">
                  <img
                    src={story.image}
                    alt={story.alt || `${story.title}`}
                    loading="lazy"
                    className="spotlight-3d-photo h-full w-full object-cover object-[50%_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060A13]/85 via-[#060A13]/25 to-transparent pointer-events-none" />
                  <div className="spotlight-3d-badge absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#060A13]/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                      <span>{story.badge}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-3 inset-x-3 text-[11px] font-medium text-slate-300">
                    <span>{story.role}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold text-ink group-hover:text-indigo-400 transition-colors leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {story.summary}
                    </p>
                  </div>

                  <ul className="pt-3 border-t border-line/60 flex flex-col gap-1.5">
                    {story.points.map((point) => (
                      <li key={point} className="text-xs text-muted leading-relaxed flex items-start gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-green mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={story.href}
                    className="inline-flex items-center text-xs font-semibold text-green group-hover:text-green-400 transition-colors mt-1 pt-1"
                  >
                    <span>Explore this use case</span>
                    <span aria-hidden="true" className="ml-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 12. Practical use cases */}
      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={<EyebrowBadge>Use cases</EyebrowBadge>}
            title="Practical, everyday use cases"
          />
          {/* The shared FeatureCard (used across dozens of other pages,
              left untouched) wrapped here, landing-page-only, in the
              same cursor-tilt mechanic as "Why ZUZU" -- see
              styles/home-3d-extras.css. */}
          <div className="usecase-3d-scene grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((useCase, i) => (
              <div key={useCase.title} className="usecase-3d-card tilt-3d h-full">
                <FeatureCard index={i} {...useCase} icon={<useCase.icon className="h-5 w-5" />} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 13. Security section */}
      <section className="py-14 sm:py-20 border-t border-line bg-surface/60">
        <Container className="flex flex-col items-center gap-5 text-center">
          <EyebrowBadge>Security</EyebrowBadge>
          <ShieldIcon className="h-8 w-8 text-blue-400" />
          <TypewriterHeading as="h2" className="max-w-2xl">Security Is Built Into Every Layer</TypewriterHeading>
          <p className="max-w-xl">
            From the Windows agent through to the admin portal, security is part of how ZUZU
            handles workforce data. Full details are available on our security page.
          </p>

          {/* Materialize entrance (see styles/home-3d-extras.css): each
              card scales up from behind the page with a spring
              overshoot, a Z-axis "landing" distinct from every
              rotate-based tilt used elsewhere on this page. Hover
              continues that same Z-axis language (the card lifts further
              forward, no rotation) rather than reusing the rotate-tilt
              already used by Industries/Spotlights/Practical use
              cases/Feature marquee. */}
          <ProductReveal className="security-3d-scene grid w-full max-w-4xl gap-5 sm:grid-cols-3">
            {SECURITY_HIGHLIGHTS.map((item, i) => (
              <div
                key={item.title}
                className="group security-3d-card flex flex-col items-center gap-2.5 rounded-xl border border-line bg-elevated p-5 text-center"
                style={seq(i)}
              >
                {/* shadow-none opts this chip out of layout.css's generic
                    "border-line + bg-surface + rounded-*" auto-shadow rule
                    -- that rule's higher specificity was silently winning
                    over .security-3d-icon's own hover glow below. */}
                <div className="security-3d-icon flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-blue-400 shadow-none">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </ProductReveal>

          <Button to="/security" variant="outline" className="btn-landing-shimmer">
            Learn more about security
          </Button>
        </Container>
      </section>

      {/* 13.5 Pricing */}
      <PricingSection className="border-t border-line" shimmer float3d />

      {/* 14. Free trial CTA */}
      <CTA
        title="Start Your 7-Day Free Trial"
        description="See ZUZU across your team, with no commitment required."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial', className: 'btn-landing-shimmer' }}
        secondaryAction={{ label: 'Talk to sales', href: '/company/contact', className: 'btn-landing-shimmer' }}
      />

      {/* 15. FAQ */}
      <section className="pb-14 sm:pb-20">
        <Container className="flex flex-col gap-10">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>
    </div>
  )
}
