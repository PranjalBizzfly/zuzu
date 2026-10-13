import { Link } from 'react-router-dom'
import Card from './Card'
import { StaggerItem } from '../motion/Stagger'
import { ArrowRightIcon } from './icons'

/*
  `index` is optional (default 0): pass the `.map((item, i) => ...)`
  index at a call site to stagger a grid of these; omitted, the card
  still gets its own fade-up-on-scroll with no extra delay. This is
  what lets every FeatureCard grid across the site (product/cluster
  hubs, industries, resources, how-it-works) inherit the entrance
  animation for free, without editing each page individually.

  The trailing arrow chip is the site's one internal-navigation indicator
  (same brand-blue accent + translate-on-hover language as the inline
  "Label &rarr;" links elsewhere): it only renders when `href` is set,
  so purely informational cards stay arrow-free automatically instead
  of needing a per-instance flag. On hover it fills with the accent.

  Surface, hover line and cursor spotlight come from the shared
  .card-glass styles (styles/motion.css).
*/
export default function FeatureCard({ icon, title, description, href, index = 0, className = '' }) {
  const Tag = href ? Link : 'div'

  return (
    <StaggerItem index={index} className="h-full">
      <Card as={Tag} to={href} hover glass padding="lg" className={`group flex flex-col gap-5 h-full ${className}`}>
        {icon && (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-green/20 bg-gradient-to-br from-green/15 to-green/5 text-green shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 ease-[var(--ease-emphasized)] group-hover:scale-105 group-hover:border-green/45 group-hover:from-green/25 group-hover:to-green/10"
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-2.5">
          <h3 className="text-[1.0625rem] font-semibold leading-snug sm:text-lg">{title}</h3>
          {description && <p className="text-[0.9375rem] leading-relaxed">{description}</p>}
        </div>
        {href && (
          <span
            className="mt-auto flex h-8 w-8 items-center justify-center self-end rounded-full border border-line bg-elevated text-green transition-all duration-300 ease-[var(--ease-emphasized)] group-hover:translate-x-0.5 group-hover:border-green group-hover:bg-green group-hover:text-surface"
            aria-hidden="true"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        )}
      </Card>
    </StaggerItem>
  )
}
