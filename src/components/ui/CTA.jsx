import Container from './Container'
import Button from './Button'
import ProductReveal from '../motion/ProductReveal'
import { seq } from '../motion/seq'
import TypewriterHeading from '../motion/TypewriterHeading'

/*
  The closing call-to-action panel follows the site theme: a light,
  brand-tinted panel in light mode and the deep midnight-blue one in dark
  mode. Text and buttons take their colours from the normal theme tokens, so
  nothing here is forced; only the panel's background differs per theme (see
  .cta-panel in layout.css).
*/
export default function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className = '',
}) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <Container>
        <ProductReveal
          className="pr-main cta-panel border-beam-container relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-16 sm:py-20"
        >
          {/* Roving gradient beam along the panel border */}
          <div className="border-beam" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-5">
            <TypewriterHeading as="h2" className="pr-item max-w-2xl sm:text-4xl" style={seq(1)}>{title}</TypewriterHeading>
            {description && <p className="pr-item max-w-xl text-base sm:text-lg" style={seq(2)}>{description}</p>}
            <div className="pr-item mt-4 flex flex-wrap justify-center gap-3" style={seq(3)}>
              {primaryAction && (
                <Button to={primaryAction.href} variant="primary" size="lg" className={primaryAction.className || ''}>
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button to={secondaryAction.href} variant="outline" size="lg" className={secondaryAction.className || ''}>
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>
        </ProductReveal>
      </Container>
    </section>
  )
}
