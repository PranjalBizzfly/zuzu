import Container from './Container'
import EyebrowBadge from './EyebrowBadge'
import Button from './Button'
import { XCircleIcon, CheckCircleIcon } from './icons'
import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'
import ProductReveal from '../motion/ProductReveal'
import { seq } from '../motion/seq'

/*
  "Instead of / Use" comparisons, grounded in real ZUZU capabilities
  already documented elsewhere on the site (Time & Attendance, Manager
  Workspace, AI Reports, Workforce Analytics, Employee Activity) --
  same underlying facts as /how-it-works/zuzu-advantage, condensed to
  short before/after pairs for the landing page.
*/
const COMPARISONS = [
  { instead: 'Manual timesheets', use: 'Automated work tracking' },
  { instead: 'Scattered activity information', use: 'Centralized activity monitoring' },
  { instead: 'Manually preparing daily summaries', use: 'Day-End Reports' },
  { instead: 'Checking individual records', use: 'Dashboard analytics' },
  { instead: 'Guessing productivity', use: 'Activity-based productivity information' },
  { instead: 'No visual work context', use: 'Periodic screenshot captures' },
]

export default function AdvantageSection({ className = '', shimmer = false, showActions = true }) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
          <Reveal delay={0}>
            <EyebrowBadge>The ZUZU Advantage</EyebrowBadge>
          </Reveal>
          <TypewriterHeading as="h2" startDelay={80} className="text-3xl sm:text-4xl">
            Replace Manual Tracking With a Connected System
          </TypewriterHeading>
          <Reveal as="p" delay={140} className="text-base sm:text-lg text-muted">
            See the clear difference when moving from fragmented manual timesheets to ZUZU&rsquo;s
            automated workday telemetry.
          </Reveal>
        </div>

        {/* A two-sided flip card per comparison (see
            styles/advantage-flip-3d.css): both lines below stay on the
            always-visible front face exactly as before -- hovering only
            flips the card to a decorative glowing checkmark back face,
            a small reward for the "old way vs. new way" the section is
            already making in words. */}
        <ProductReveal className="advantage-flip-scene grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((row, i) => (
            <div key={row.instead} className="advantage-flip-card h-full" style={seq(i)}>
              <div className="advantage-flip-inner">
                <div className="advantage-flip-face flex h-full flex-col gap-3 rounded-xl card-glass p-5">
                  <div className="flex items-start gap-2 text-sm">
                    <XCircleIcon className="h-4 w-4 mt-0.5 shrink-0 text-danger/70" />
                    <span className="text-muted">
                      Instead of:{' '}
                      <span className="text-muted line-through decoration-danger/60 decoration-1">{row.instead}</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircleIcon className="h-4 w-4 mt-0.5 shrink-0 text-success" />
                    <span className="text-ink">
                      <span className="font-semibold">Use:</span>{' '}
                      <span className="font-semibold text-purple-400">{row.use}</span>
                    </span>
                  </div>
                </div>
                <div className="advantage-flip-face advantage-flip-back rounded-xl card-glass" aria-hidden="true">
                  <span className="advantage-flip-check">
                    <CheckCircleIcon className="h-7 w-7" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </ProductReveal>

        {showActions && (
          <Reveal delay={100} className="flex flex-wrap justify-center gap-3">
            <Button to="/free-trial" variant="primary" size="lg" className={shimmer ? 'btn-landing-shimmer' : ''}>
              Start Free Trial
            </Button>
            <Button to="/how-it-works/zuzu-advantage" variant="outline" size="lg" className={shimmer ? 'btn-landing-shimmer' : ''}>
              See the Full Comparison
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
