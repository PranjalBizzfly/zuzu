import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'
import EyebrowBadge from './EyebrowBadge'

/*
  A section heading with the global eyebrow pill above it -- for headings
  that sit inside a page's own layout (a template's sub-section, a card
  grid's title) rather than a full SectionHeader intro. Keeps every
  section on the site introduced the same way: pill, then heading.

  `align="center"` centers the pill for headings inside centered layouts.
  `className` styles the heading itself, as on TypewriterHeading.
*/
export default function SectionTitle({
  eyebrow,
  as = 'h2',
  align = 'left',
  className = '',
  wrapperClassName = '',
  children,
  ...rest
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${wrapperClassName}`}>
      <Reveal delay={0}>
        <EyebrowBadge>{eyebrow}</EyebrowBadge>
      </Reveal>
      <TypewriterHeading as={as} className={className} {...rest}>
        {children}
      </TypewriterHeading>
    </div>
  )
}
