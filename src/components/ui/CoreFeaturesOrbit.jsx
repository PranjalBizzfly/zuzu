import { useEffect, useState } from 'react'
import useReducedMotion from '../../hooks/useReducedMotion'
import Reveal from '../motion/Reveal'

const CYCLE_MS = 2600

/*
  The animated "node graph" version of the Core Features section: a
  glowing center card auto-cycles through each feature while two side
  columns ("Data in" / "Insight out") list what feeds that feature and
  what it produces, connected by a thin rail + pulse line on each side.
  Below `lg` the rail/columns are dropped for a simpler stacked layout
  (see the reasoning in hero-3d.css for why 3D depth cues get dropped
  on mobile rather than shrunk).
*/
export default function CoreFeaturesOrbit({ features }) {
  const reducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reducedMotion || paused) return undefined
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % features.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [reducedMotion, paused, features.length])

  return (
    <Reveal className="core-orbit">
      {/* Mobile / tablet: stacked, no side columns or connector rails. */}
      <div className="flex flex-col gap-8 lg:hidden">
        <CenterCard
          features={features}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          showProgress={!reducedMotion && !paused}
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="core-orbit-mobile-chip">
              <p className="core-orbit-mobile-chip-title">{feature.title}</p>
              <p className="core-orbit-mobile-chip-row">
                <span className="core-orbit-mobile-chip-label">Data in</span>
                {feature.dataIn}
              </p>
              <p className="core-orbit-mobile-chip-row">
                <span className="core-orbit-mobile-chip-label">Insight out</span>
                {feature.insightOut}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: full node-graph. */}
      <div
        className="core-orbit-desktop relative hidden lg:grid lg:grid-cols-[minmax(0,1fr)_128px_minmax(340px,460px)_128px_minmax(0,1fr)] lg:items-stretch"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <span className="core-orbit-bg-glow" aria-hidden="true" />
        <span className="core-orbit-bg-grid" aria-hidden="true" />

        <SideChips items={features.map((f) => f.dataIn)} activeIndex={activeIndex} />
        <Rail side="left" label="Data in" />
        <CenterCard
          features={features}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          showProgress={!reducedMotion && !paused}
        />
        <Rail side="right" label="Insight out" />
        <SideChips items={features.map((f) => f.insightOut)} activeIndex={activeIndex} />
      </div>
    </Reveal>
  )
}

function CenterCard({ features, activeIndex, onSelect, showProgress }) {
  return (
    <div className="core-orbit-card">
      <div className="mb-4 flex flex-col gap-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">What ZUZU tracks</span>
        <h3 className="text-base font-semibold text-ink sm:text-lg">Six Ways to See the Workday</h3>
      </div>
      <ul className="flex flex-col gap-1.5">
        {features.map((feature, i) => {
          const isActive = i === activeIndex
          const Icon = feature.icon
          return (
            <li key={feature.title}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                className={`core-orbit-row ${isActive ? 'is-active' : ''}`}
              >
                <span className="core-orbit-row-badge">{i + 1}</span>
                <Icon className="core-orbit-row-icon h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="core-orbit-row-title">{feature.title}</span>
                {isActive && showProgress && <span key={activeIndex} className="core-orbit-progress" aria-hidden="true" />}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function SideChips({ items, activeIndex }) {
  return (
    <div className="core-orbit-side">
      {items.map((item, i) => (
        <div key={item} className={`core-orbit-chip ${i === activeIndex ? 'is-active' : ''}`}>
          <span className="core-orbit-chip-dot" aria-hidden="true" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

function Rail({ side, label }) {
  return (
    <div className={`core-orbit-rail core-orbit-rail--${side}`} aria-hidden="true">
      <span className="core-orbit-rail-line" />
      <span className="core-orbit-rail-tick">
        <span className="core-orbit-rail-pulse" />
      </span>
      <span className="core-orbit-node">{label}</span>
    </div>
  )
}
