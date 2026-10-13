import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import FAQ from '../components/ui/FAQ'
import CTA from '../components/ui/CTA'
import PricingSection from '../components/ui/PricingSection'
import GetInTouchSection from '../components/ui/GetInTouchSection'
import InternalPageHero from '../components/ui/InternalPageHero'
import Seo from '../components/Seo'
import TypewriterHeading from '../components/motion/TypewriterHeading'
import SectionHeader from '../components/ui/SectionHeader'
import EyebrowBadge from '../components/ui/EyebrowBadge'

const FAQ_ITEMS = [
  { question: 'How long is the ZUZU free trial?', answer: 'Every plan includes a 7-day free trial for up to 10 employees, no card required.' },
  { question: 'Do I need a credit card to start the trial?', answer: 'No, starting a free trial does not require a card.' },
  {
    question: 'What is included in annual billing?',
    answer: 'Choosing annual billing saves 20% compared to the monthly price on every plan.',
  },
  {
    question: 'Which plan should I choose?',
    answer: 'Starter suits early-stage teams and freelancers. Team focus is our most popular plan for growing teams. Growth & agency fits scaling companies with multiple teams and managers. Enterprise organization is built for super admin governance and advanced security needs like two-factor authentication.',
  },
  { question: 'Can I switch plans later?', answer: 'Yes, you can upgrade or downgrade your plan at any time as your team grows.' },
  { question: 'Do you offer pricing in INR?', answer: 'Yes, use the currency toggle above the pricing table to switch between USD and INR.' },
  {
    question: 'Is pricing based on how many employees I have?',
    answer: 'Yes, every plan is priced per user per month, and the amount charged at checkout is calculated from your employee headcount.',
  },
  {
    question: 'Are there setup fees or long-term contracts?',
    answer: 'No, there are no hidden setup fees. Annual billing saves 20% but isn\'t required, monthly billing is available on every plan with no long-term lock-in.',
  },
]

export default function Pricing() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Pricing' }]

  return (
    <>
      <Seo
        title="Pricing | ZUZU"
        description="ZUZU pricing plans: Starter, team focus, growth & agency, and Enterprise organization. 7-day free trial, monthly or annual billing (save 20%), priced per user in USD or INR."
        path="/pricing"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <InternalPageHero
        breadcrumbItems={breadcrumbItems}
        badge="Pricing"
        badgeVariant="purple"
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your team size and needs. No hidden fees. No long-term commitments."
        cta={{ label: 'View Plans', href: '#pricing' }}
        secondaryCta={{ label: 'Compare Plans', href: '/resources/comparisons' }}
        bgImage="/images/people/zuzu-executive-manager.webp"
        imagePosition="center-right"
      />

      <PricingSection />

      <GetInTouchSection />

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex justify-center">
          <div className="rounded-2xl border border-line bg-surface p-7 sm:p-10 max-w-3xl w-full shadow-sm hover:border-brand/30 transition-colors">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <TypewriterHeading as="h2" className="text-lg sm:text-xl font-bold text-ink">How Activation Works</TypewriterHeading>
            </div>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Installing the Windows agent gets it running; activation connects a device to
              your organization's account. Start on any plan's free trial with no card
              required, then continue on your selected plan after the trial ends.
            </p>
            <div className="mt-6">
              <Button to="/installation/activation" variant="outline" size="sm">
                Learn more about activation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Pricing & trial questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Talk to Us About Pricing"
        description="Get current pricing details and a walkthrough tailored to your team."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Contact sales', href: '/company/contact' }}
      />
    </>
  )
}
