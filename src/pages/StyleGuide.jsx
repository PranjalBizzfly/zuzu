import Container from '../components/ui/Container'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import Breadcrumb from '../components/ui/Breadcrumb'
import CTA from '../components/ui/CTA'
import FAQ from '../components/ui/FAQ'
import FeatureCard from '../components/ui/FeatureCard'
import ImageSection from '../components/ui/ImageSection'
import DashboardPreview from '../components/ui/DashboardPreview'
import StatsBlock from '../components/ui/StatsBlock'
import Logo from '../components/ui/Logo'
import Seo from '../components/Seo'
import TypewriterHeading from '../components/motion/TypewriterHeading'

function Block({ title, children }) {
  return (
    <section className="flex flex-col gap-6 py-12 border-b border-line">
      <TypewriterHeading as="h2" className="text-xl sm:text-2xl">{title}</TypewriterHeading>
      {children}
    </section>
  )
}

const SAMPLE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export default function StyleGuide() {
  return (
    <>
    <Seo title="Component Library | ZUZU" description="Internal component library, not a public page." path="/style-guide" noindex />
    <Container className="py-12">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Style guide' }]} className="mb-10" />

      <div className="flex flex-col gap-3 mb-4">
        <Badge variant="blue">Internal &middot; not a public page</Badge>
        <TypewriterHeading as="h1" trigger="mount">Component Library</TypewriterHeading>
        <p className="max-w-2xl">
          Every reusable component from the phase 01 foundation, rendered with sample
          (non-ZUZU) placeholder content for visual QA.
        </p>
      </div>

      <Block title="Logo">
        <div className="flex flex-wrap items-center gap-8">
          <Logo size="sm" />
          <Logo size="md" />
          <Logo size="lg" />
        </div>
      </Block>

      <Block title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </Block>

      <Block title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge variant="blue">Blue</Badge>
          <Badge variant="purple">Purple</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </Block>

      <Block title="Card">
        <div className="grid gap-5 sm:grid-cols-3">
          <Card hover>
            <h3 className="text-lg mb-2">Card Title</h3>
            <p className="text-sm">Supporting copy for a standard content card.</p>
          </Card>
          <Card hover>
            <h3 className="text-lg mb-2">Card Title</h3>
            <p className="text-sm">Supporting copy for a standard content card.</p>
          </Card>
          <Card hover>
            <h3 className="text-lg mb-2">Card Title</h3>
            <p className="text-sm">Supporting copy for a standard content card.</p>
          </Card>
        </div>
      </Block>

      <Block title="Section Header">
        <SectionHeader
          eyebrow={<Badge variant="purple">Section eyebrow</Badge>}
          title="Section headline goes here"
          description="Supporting description used to introduce a page section."
          actions={<Button variant="primary">Primary action</Button>}
        />
      </Block>

      <Block title="Feature Cards">
        <div className="grid gap-5 sm:grid-cols-3">
          <FeatureCard icon={SAMPLE_ICON} title="Feature Title" description="Short description of the capability." />
          <FeatureCard icon={SAMPLE_ICON} title="Feature Title" description="Short description of the capability." />
          <FeatureCard icon={SAMPLE_ICON} title="Feature Title" description="Short description of the capability." />
        </div>
      </Block>

      <Block title="Stats Block">
        <StatsBlock
          stats={[
            { value: '01', label: 'Sample metric' },
            { value: '02', label: 'Sample metric' },
            { value: '03', label: 'Sample metric' },
            { value: '04', label: 'Sample metric' },
          ]}
        />
      </Block>

      <Block title="Dashboard Preview">
        <DashboardPreview />
      </Block>

      <Block title="Image Section">
        <ImageSection
          eyebrow={<Badge variant="blue">Eyebrow</Badge>}
          title="Split image/text layout"
          description="Used for photography-led sections. Shows a placeholder frame until a real image is supplied."
        />
      </Block>

      <Block title="FAQ">
        <FAQ
          items={[
            { question: 'Sample question one?', answer: 'Sample answer text for the first FAQ item.' },
            { question: 'Sample question two?', answer: 'Sample answer text for the second FAQ item.' },
          ]}
        />
      </Block>

      <Block title="Breadcrumb">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Category', href: '/' }, { label: 'Current page' }]} />
      </Block>

    </Container>

    <CTA
      title="CTA Component Sample"
      description="Full-width call-to-action band used to close out a page section."
      primaryAction={{ label: 'Primary action', href: '/' }}
      secondaryAction={{ label: 'Secondary action', href: '/' }}
    />
    </>
  )
}
