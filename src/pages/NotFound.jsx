import Container from '../components/ui/Container'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import Button from '../components/ui/Button'
import FeatureCard from '../components/ui/FeatureCard'
import Seo from '../components/Seo'
import TypewriterHeading from '../components/motion/TypewriterHeading'
import SectionTitle from '../components/ui/SectionTitle'

const HELPFUL_LINKS = [
  { title: 'Homepage', description: 'Back to the ZUZU homepage.', href: '/' },
  { title: 'Pricing', description: 'Plans and free trial details.', href: '/pricing' },
  { title: 'Knowledge Base', description: 'Every setup and configuration guide.', href: '/knowledge-base' },
  { title: 'Support', description: 'Get help or contact our team.', href: '/resources/support' },
]

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | ZUZU" description="The page you're looking for doesn't exist or may have moved." path="/404" noindex />

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <EyebrowBadge>404</EyebrowBadge>
          <TypewriterHeading as="h1" trigger="mount">Page Not Found</TypewriterHeading>
          <p className="text-base sm:text-lg max-w-xl text-muted">
            The page you're looking for doesn't exist or may have moved. Try one of the
            links below, or head back to the homepage.
          </p>
          <Button to="/" variant="primary">
            Back to homepage
          </Button>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="Explore" align="center" className="text-xl sm:text-2xl text-center">You Might Be Looking For</SectionTitle>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto w-full">
            {HELPFUL_LINKS.map((link) => (
              <FeatureCard key={link.href} title={link.title} description={link.description} href={link.href} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
