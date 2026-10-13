import Container from './Container'
import ZuzuImage from './ZuzuImage'
import DashboardPreview from './DashboardPreview'
import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'

/*
  Split image/text layout for photography- or product-visual-led sections.
  Accepts either `visual` (e.g. <DashboardPreview />) or `image` ({ src, alt }).
*/
export default function ImageSection({
  eyebrow,
  title,
  description,
  image,
  visual,
  reverse = false,
  depth3d = false,
  children,
  className = '',
}) {
  // Text and visual reveal from opposite sides so the motion echoes
  // the layout itself, with the visual arriving slightly after the
  // copy -- reversed to match `reverse` so it's always "text, then
  // the column next to it," not always "left, then right."
  const textDirection = reverse ? 'right' : 'left'
  const visualDirection = reverse ? 'left' : 'right'

  // A dashboard visual animates itself (DashboardPreview is a ProductReveal
  // main container), so wrapping it in a slide as well would stack two
  // entrances; it only gets a plain fade here. A photo has no motion of its
  // own, so it keeps the slide.
  const isPhoto = !visual && Boolean(image?.src)

  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <Container>
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <Reveal direction={textDirection} className="flex flex-col gap-5">
            {eyebrow}
            <TypewriterHeading as="h2">{title}</TypewriterHeading>
            {description && <p className="text-base sm:text-lg text-muted">{description}</p>}
            {children}
          </Reveal>

          <Reveal direction={isPhoto ? visualDirection : 'fade'} delay={isPhoto ? 100 : 0}>
            {visual ? (
              depth3d ? (
                <div className={`showcase-3d-scene ${reverse ? 'showcase-3d-scene--reverse' : ''}`}>
                  <div className="showcase-3d-float">
                    <div className="showcase-3d-card tilt-3d">{visual}</div>
                  </div>
                </div>
              ) : (
                visual
              )
            ) : image?.src ? (
              <ZuzuImage
                src={image.src}
                alt={image.alt || `${title}`}
                aspectRatio="aspect-[4/3]"
                className="shadow-lg transition-transform duration-500 ease-[var(--ease-emphasized)] hover:scale-[1.02]"
              />
            ) : (
              <DashboardPreview type="analytics" />
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
