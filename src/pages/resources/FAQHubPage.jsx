import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import { FAQ_CATEGORIES } from '../../data/faqData'
import SectionTitle from '../../components/ui/SectionTitle'

/*
  Enriches the existing Phase 02 /resources/faqs stub in place. Every
  answer restates a fact already established elsewhere in the project
  (see faqData.js) -- this page organizes them, it doesn't introduce
  new claims.
*/
const ALL_FAQ_ITEMS = FAQ_CATEGORIES.flatMap((c) => c.items)

export default function FAQHubPage() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: "FAQ's" }]

  return (
    <>
      <Seo
        title="Frequently Asked Questions | ZUZU"
        description="Answers to common questions about ZUZU, organized by topic, activity, attendance, screenshots, privacy, AI reports, remote and hybrid teams, the Windows agent, reports, and trial and pricing."
        path="/resources/faqs"
        breadcrumbs={breadcrumbItems}
        faq={ALL_FAQ_ITEMS}
      />

      <FullWidthHumanHero
        backgroundImage="/images/resources/zuzu-resource-faqs.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Frequently Asked Questions"
        badgeVariant="blue"
        title="Questions &amp; Answers"
        description="Clear, verified answers to common questions about automatic time tracking, screenshot frequency, employee privacy redaction, and Windows agent deployment."
        primaryCta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Contact Support', href: '/resources/support' }}
        featureTags={[
          { label: 'Time Tracking', href: '/product/time-attendance' },
          { label: 'Screenshot Privacy', href: '/screenshot-privacy' },
          { label: 'Agent Security', href: '/security' },
          { label: 'Workforce Reports', href: '/product/ai-reports' },
        ]}
      />

      {/* Category quick-jump bar */}
      <section className="sticky top-16 z-20 border-b border-line bg-page/90 backdrop-blur-md py-3 shadow-xs">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider shrink-0 mr-1">Jump to:</span>
            {FAQ_CATEGORIES.map((cat) => {
              const catId = cat.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
              return (
                <a
                  key={cat.label}
                  href={`#${catId}`}
                  className="shrink-0 px-3 py-1.5 rounded-lg border border-line bg-surface hover:border-brand/40 text-xs font-medium text-ink transition-colors"
                >
                  {cat.label}
                </a>
              )
            })}
          </div>
        </Container>
      </section>

      {FAQ_CATEGORIES.map((category, idx) => {
        const catId = category.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        return (
          <section
            key={category.label}
            id={catId}
            className={`py-14 sm:py-20 border-t border-line scroll-mt-28 ${idx % 2 === 1 ? 'bg-surface/30' : ''}`}
          >
            <Container className="flex flex-col gap-8 max-w-4xl">
              <SectionTitle eyebrow="FAQ's" align="center" className="text-xl sm:text-2xl">{category.label}</SectionTitle>
              <FAQ items={category.items} />
            </Container>
          </section>
        )
      })}

      <section className="py-14 sm:py-20 border-t border-line">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Support" className="text-xl sm:text-2xl">Still Have Questions?</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Support" description="The central help entry point." href="/resources/support" />
            <FeatureCard title="Knowledge Base" description="Every setup and configuration guide." href="/knowledge-base" />
            <FeatureCard title="Troubleshooting" description="General checks if something looks wrong." href="/troubleshooting" />
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to See ZUZU in Action?"
        description="Start a free trial or get in touch with our team."
        primaryAction={{ label: 'Start Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Contact us', href: '/company/contact' }}
      />
    </>
  )
}
