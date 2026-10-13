import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'

/*
  Section intro used across the site: eyebrow, heading, optional lead and
  actions. Centered by default (every full-width grid/table on the site is
  introduced this way); pass align="left" only where the header sits in a
  narrow column of its own. The measure is capped so long headings and leads
  wrap to a comfortable line length instead of running edge to edge.
*/
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  actions,
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignment} ${className}`}>
      {eyebrow && <Reveal delay={0}>{eyebrow}</Reveal>}
      <TypewriterHeading as="h2" startDelay={80}>
        {title}
      </TypewriterHeading>
      {description && (
        <Reveal as="p" delay={140} className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
          {description}
        </Reveal>
      )}
      {actions && (
        <Reveal delay={180} className="flex flex-wrap gap-3 mt-2">
          {actions}
        </Reveal>
      )}
    </div>
  )
}
