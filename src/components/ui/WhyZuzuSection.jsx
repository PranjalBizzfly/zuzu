import Container from './Container'
import EyebrowBadge from './EyebrowBadge'
import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'
import ProductReveal from '../motion/ProductReveal'
import { seq } from '../motion/seq'
import { ClockIcon, ActivityIcon, SparklesIcon, CameraIcon, FileTextIcon, UsersIcon } from './icons'

const REASONS = [
  {
    icon: ClockIcon,
    title: 'Track',
    description: 'Know when employees start and finish their work sessions.',
    color: 'text-blue-400',
  },
  {
    icon: ActivityIcon,
    title: 'Monitor',
    description: 'Review activity throughout the working day.',
    color: 'text-success',
  },
  {
    icon: SparklesIcon,
    title: 'Understand',
    description: 'See active time, idle time, activity patterns, and productivity information.',
    color: 'text-warning',
  },
  {
    icon: CameraIcon,
    title: 'Review',
    description: 'Access screenshots and activity timelines for additional context.',
    color: 'text-purple-400',
  },
  {
    icon: FileTextIcon,
    title: 'Report',
    description: 'Get structured daily and historical reports.',
    color: 'text-success',
  },
  {
    icon: UsersIcon,
    title: 'Manage',
    description: 'Give administrators and managers a centralized view of their teams.',
    color: 'text-blue-400',
  },
]

export default function WhyZuzuSection({ className = '' }) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
          <Reveal delay={0}>
            <EyebrowBadge>Why ZUZU</EyebrowBadge>
          </Reveal>
          <TypewriterHeading as="h2" startDelay={80} className="text-3xl sm:text-4xl">
            Everything About the Workday in One Place
          </TypewriterHeading>
          <Reveal as="p" delay={140} className="text-base sm:text-lg text-muted">
            Managing employee work activity shouldn&rsquo;t require multiple disconnected tools.
            ZUZU brings the key parts of employee time and activity management together into one
            connected platform.
          </Reveal>
        </div>

        {/* Presented as a small 3D product scene (see styles/why-zuzu-3d.css)
            rather than a flat card grid: each card tilts up into place as
            the grid scrolls into view, against a soft ambient glow, then
            tilts live toward the cursor on hover.

            The glow lives in this wrapping `relative` div, one level
            OUTSIDE the grid, rather than as a grid child: layout.css's
            "count-aware grids" rule (the one that reflows a 5- or 7-card
            grid so the last row isn't lopsided) counts every DOM child of
            a `grid-cols-3` container, absolutely-positioned or not. With
            the glow as a 7th child it mistook this clean 6-card/2-row
            grid for an unbalanced 7-card one and split the columns into a
            4-wide top row / 3-wide bottom row -- which is exactly the
            mismatched box sizes this was fixed for. Six real children
            (the cards only) is what lets the plain, uniform 3-column
            grid apply. */}
        <div className="relative w-full">
          <span className="reason-3d-glow" aria-hidden="true" />
          <ProductReveal className="reason-3d-scene grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason, i) => (
              <div key={reason.title} className="reason-3d-card tilt-3d h-full" style={seq(i)}>
                <div className="group flex h-full flex-col gap-4 rounded-xl card-glass p-6">
                  <div
                    className={`reason-3d-icon flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-elevated ${reason.color}`}
                    aria-hidden="true"
                  >
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg">{reason.title}</h3>
                    <p className="text-sm text-muted">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </ProductReveal>
        </div>
      </Container>
    </section>
  )
}
