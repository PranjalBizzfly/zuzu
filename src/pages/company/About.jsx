import Container from '../../components/ui/Container'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import InternalPageHero from '../../components/ui/InternalPageHero'
import ZuzuImage from '../../components/ui/ZuzuImage'
import { EyeIcon, ShieldIcon, SparklesIcon, UsersIcon } from '../../components/ui/icons'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import SectionHeader from '../../components/ui/SectionHeader'
import TypewriterHeading from '../../components/motion/TypewriterHeading'

const FAQ_ITEMS = [
  {
    question: 'What problem is ZUZU trying to solve for managers?',
    answer: 'As teams split across offices, homes and time zones, managers lose the everyday visibility that used to come from being in the same room. ZUZU aims to give clear, aggregate visibility into workload and activity without requiring intrusive surveillance.',
  },
  {
    question: 'What does "privacy by design" mean in practice at ZUZU?',
    answer: "Concretely, it means on-device private-region redaction: confidential and personal on-screen information is blocked out before a screenshot ever leaves the employee's device, not after it's uploaded.",
  },
  {
    question: 'How does ZUZU turn raw activity data into something a manager can actually use?',
    answer: 'Through AI daily reports and workforce analytics that convert raw timestamps and activity logs into structured, readable reporting, executive highlights, department benchmarking and recommendations, rather than leaving managers to dig through logs themselves.',
  },
  {
    question: 'Is ZUZU only built for large enterprises?',
    answer: "No. The platform is engineered to scale across dozens of devices with centralized governance for larger organizations, but it also offers a 7-day free trial for up to 10 employees, so smaller teams can use it too.",
  },
  {
    question: 'Does ZUZU work for fully remote teams, or just hybrid ones?',
    answer: "Both. ZUZU was built with distributed teams generally in mind, people working from offices, homes, and different time zones, rather than assuming everyone is on the same physical schedule.",
  },
  {
    question: "What are the three parts that make up the ZUZU platform?",
    answer: 'A Windows desktop agent that captures activity, attendance and screenshots on-device; an admin portal for central configuration and governance; and a manager workspace scoped to each manager\'s own team.',
  },
  {
    question: 'Is ZUZU meant to replace day-to-day management, or support it?',
    answer: "ZUZU is positioned as transparency over surveillance, objective activity and attendance data meant to inform how managers check in with their teams, not a replacement for those conversations.",
  },
  {
    question: "Where can I read more about ZUZU's specific security and data-handling practices?",
    answer: 'The security page covers this in more depth, including two-factor authentication, capability-based access, audit trails and screenshot retention.',
  },
]

export default function About() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Company', href: '/company/about' },
    { label: 'About' },
  ]

  return (
    <>
      <Seo
        title="About ZUZU | ZUZU"
        description="ZUZU is an AI-powered workforce visibility and intelligence platform built to help organizations understand how the workday actually happens."
        path="/company/about"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Company"
        badgeVariant="blue"
        title="About ZUZU"
        description="ZUZU is an AI-powered workforce visibility and intelligence platform designed to help modern organizations understand how work actually happens, without compromising employee trust."
        cta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Contact Us', href: '/company/contact' }}
        visualType="photo"
        image={{
          src: '/images/people/zuzu-team-leaders.webp',
          alt: 'ZUZU workforce intelligence leadership team in modern collaborative space',
        }}
        bgImage="/images/people/zuzu-team-leaders.webp"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-5">
              <EyebrowBadge>Our Mission</EyebrowBadge>
              <TypewriterHeading as="h2" className="text-2xl sm:text-3xl font-bold text-ink mt-3">Built for Distributed Teams and Modern Managers</TypewriterHeading>
              <p className="text-base text-muted leading-relaxed">
                Work has fundamentally shifted. As teams split across offices, homes, and time zones, managers need clear, aggregate visibility into workload distribution and productivity without intrusive surveillance.
              </p>
              <p className="text-base text-muted leading-relaxed">
                ZUZU was engineered from the ground up to unite on-device activity tracking, automated shift attendance, and privacy-preserving screenshot redaction into a single intelligent platform.
              </p>
            </div>
            <div className="lg:col-span-6">
              <ZuzuImage
                src="/images/people/zuzu-team-culture.webp"
                alt="ZUZU core engineering and platform team collaborating in modern office"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl shadow-xl border border-line"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/40">
        <Container>
          <div className="flex flex-col gap-10">
            <div>
              <EyebrowBadge>Core Principles</EyebrowBadge>
              <TypewriterHeading as="h2" className="text-2xl sm:text-3xl font-bold text-ink mt-3">What Drives Our Platform?</TypewriterHeading>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: EyeIcon,
                  title: 'Transparency Over Surveillance',
                  desc: 'Objective telemetry and activity metrics that empower employees rather than micromanage them.',
                },
                {
                  icon: ShieldIcon,
                  title: 'Privacy by Design',
                  desc: 'On-device private region redaction ensures confidential and personal data never leaves the client device.',
                },
                {
                  icon: SparklesIcon,
                  title: 'Actionable AI Synthesis',
                  desc: 'Converting millions of raw timestamps into concise, meaningful executive reports and trend insights.',
                },
                {
                  icon: UsersIcon,
                  title: 'Enterprise Scalability',
                  desc: 'Engineered for smooth deployment across dozens of devices with centralized policy governance.',
                },
              ].map((item) => (
                <div key={item.title} className="group flex flex-col justify-between gap-3 rounded-2xl border border-line bg-surface p-6 sm:p-7 hover:border-brand/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-ink group-hover:text-brand transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
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
        title="Ready to See ZUZU in Action?"
        description="Experience modern workforce visibility across your team with a 7-day free trial."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Contact our team', href: '/company/contact' }}
      />
    </>
  )
}
