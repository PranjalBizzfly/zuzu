import { ArrowRightIcon } from './icons'
import ProductReveal from '../motion/ProductReveal'
import { seq } from '../motion/seq'

/*
  Sequential process/flow diagram: a single horizontal row of steps
  connected by arrows, presented as a small 3D product scene (see
  styles/flow-steps-3d.css) rather than a flat card row -- each step tilts
  into place as the row scrolls into view, then tilts toward the cursor on
  hover, and a soft pulse travels along the connecting arrows to echo the
  "one connected system" idea the section is actually making.

  On desktop the row stretches to fill its container (each step shares the
  space equally) instead of stopping short at a fixed width; on narrow
  viewports the steps keep a readable minimum width and the row scrolls
  rather than wrapping (which would break the connecting arrows). Generic
  enough to reuse for any "how it works" style section, not just the
  homepage.
*/
export default function FlowSteps({ steps = [], className = '' }) {
  return (
    <ProductReveal className={`flow-3d-scene flow-steps scrollbar-hide overflow-x-auto pb-2 -m-3 p-3 ${className}`}>
      <ol className="relative flex items-stretch gap-0">
        {/* Soft glowing line threading through the row at card-center height,
            hinting at the pipeline the steps describe -- purely decorative,
            scrolls with the row since it lives inside the same track. */}
        <div className="flow-3d-baseline" aria-hidden="true" />

        {steps.map((step, i) => {
          const isLast = i === steps.length - 1
          const Icon = step.icon

          return (
            <li key={step.label} className={`flex items-stretch ${isLast ? 'flex-1' : 'flex-[1_1_0]'} min-w-[8.5rem]`}>
              <div className="flow-3d-card tilt-3d flex flex-1 items-stretch" style={seq(i)}>
                <div className="group flex w-full flex-col items-center gap-3.5 rounded-2xl card-glass px-3 py-6 text-center">
                  <div className="flow-3d-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green/20 bg-gradient-to-br from-green/15 to-green/5 text-green">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <span className="text-sm font-medium text-ink leading-snug">{step.label}</span>
                </div>
              </div>

              {!isLast && (
                <div className="flow-3d-arrow flex w-7 shrink-0 items-center justify-center text-green/60" aria-hidden="true">
                  <ArrowRightIcon className="h-4 w-4" />
                  <span className="flow-3d-pulse" style={seq(i)} />
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </ProductReveal>
  )
}
