import Container from './Container'
import FAQ from './FAQ'
import SectionHeader from './SectionHeader'
import EyebrowBadge from './EyebrowBadge'

export default function FAQSection({
  eyebrow = 'FAQ',
  title = 'Frequently asked questions',
  description,
  items = [],
  className = '',
}) {
  if (!items.length) return null

  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <Container className="flex flex-col gap-10">
        <SectionHeader eyebrow={<EyebrowBadge>{eyebrow}</EyebrowBadge>} title={title} description={description} />
        <FAQ items={items} />
      </Container>
    </section>
  )
}
