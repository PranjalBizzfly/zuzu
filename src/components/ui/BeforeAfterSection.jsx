import Container from './Container'
import EyebrowBadge from './EyebrowBadge'
import Button from './Button'
import { XCircleIcon, CheckCircleIcon, AlertCircleIcon, SparklesIcon } from './icons'
import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'

const BEFORE_POINTS = [
  'Work hours are tracked through disconnected or manual processes.',
  'Managers have limited visibility into daily work activity.',
  'Activity information is difficult to review in one place.',
  'End-of-day work summaries require manual effort.',
  'Teams lack a clear view of work patterns and productivity.',
]

const AFTER_POINTS = [
  'Work time and activity are brought into a centralized ZUZU workflow.',
  'Managers can review relevant team activity and work information.',
  'Periodic screenshots can provide visual work context where supported.',
  'Day-end reporting helps summarize the workday.',
  'Productivity insights help teams understand work patterns.',
]

export default function BeforeAfterSection({ className = '' }) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto text-center">
          <Reveal delay={0}>
            <EyebrowBadge>Before vs After ZUZU</EyebrowBadge>
          </Reveal>
          <TypewriterHeading as="h2" startDelay={80} className="text-3xl sm:text-4xl">
            Feel the Difference. Centralized Visibility.
          </TypewriterHeading>
          <Reveal as="p" delay={140} className="text-base sm:text-lg text-muted">
            Eliminate manual guesswork and bring complete transparency, time tracking, and automated
            reports to your team.
          </Reveal>
        </div>

        {/* Depth contrast (see styles/home-3d-extras.css): "Before" sits
            permanently pushed back a touch, "After" permanently pulled
            forward -- not a hover state, the section's own point made
            in literal depth rather than a cursor-tilt. */}
        <div className="before-after-3d-scene grid gap-6 lg:grid-cols-2">
          <Reveal delay={100} className="h-full">
            <div className="before-3d-panel flex h-full flex-col gap-6 rounded-xl border border-line bg-surface p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-overlay/40 px-3 py-1 text-xs font-semibold tracking-wide text-muted">
                  <AlertCircleIcon className="h-3.5 w-3.5" />
                  Before, ZUZU Context
                </span>
                <span className="text-xs font-medium tracking-wide text-faint uppercase">Manual &amp; fragmented</span>
              </div>

              <TypewriterHeading as="h3" className="text-xl sm:text-2xl">
                Scattered Work Data, Manual Tracking &amp; Limited Visibility
              </TypewriterHeading>

              <ul className="flex flex-col gap-3">
                {BEFORE_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                    <XCircleIcon className="h-4 w-4 mt-0.5 shrink-0 text-faint" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-line text-sm text-muted">
                Result: High administrative overhead, lost productivity, and incomplete work records.
              </div>
            </div>
          </Reveal>

          <Reveal delay={180} className="h-full">
            <div className="after-3d-panel relative flex h-full flex-col gap-6 rounded-xl border border-green/30 bg-surface p-7 shadow-[var(--shadow-glow-green)]">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green/25 bg-green/10 px-3 py-1 text-xs font-semibold tracking-wide text-green">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  After, ZUZU Context
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-green px-3 py-1 text-xs font-semibold text-surface">
                  ★ Recommended
                </span>
              </div>

              <TypewriterHeading as="h3" className="text-xl sm:text-2xl">
                Centralized Time Tracking, Activity Visibility &amp; Clear Insights
              </TypewriterHeading>

              <ul className="flex flex-col gap-3">
                {AFTER_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircleIcon className="h-4 w-4 mt-0.5 shrink-0 text-green" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-4 pt-4 border-t border-line">
                <p className="text-sm text-green">
                  Result: automated attendance records, visual work context, and day-end reports.
                </p>
                <Button to="/free-trial" variant="primary" className="self-start btn-landing-shimmer">
                  Get Free Access
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
