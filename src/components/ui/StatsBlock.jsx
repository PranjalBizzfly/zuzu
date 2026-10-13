import AnimatedCounter from '../motion/AnimatedCounter'
import { StaggerItem } from '../motion/Stagger'

/*
  Renders whatever stats are passed in — this component holds no ZUZU
  numbers itself. Populate `stats` only from the verified ZUZU content
  source; never with invented figures. The numeric portion of each
  `stat.value` counts up once it scrolls into view (AnimatedCounter
  preserves the exact original formatting -- "10K+", "99%", "24/7" --
  it only animates the digits).
*/
export default function StatsBlock({ stats = [], className = '' }) {
  return (
    <dl className={`grid grid-cols-2 gap-6 sm:grid-cols-4 ${className}`}>
      {stats.map((stat, i) => (
        <StaggerItem key={stat.label} index={i} as="div" className="flex flex-col gap-1 text-center sm:text-left">
          <dt className="order-2 text-sm text-muted">{stat.label}</dt>
          <dd className="order-1 text-3xl sm:text-4xl font-bold tracking-tight">
            <AnimatedCounter value={stat.value} className="text-gradient-brand" />
          </dd>
        </StaggerItem>
      ))}
    </dl>
  )
}
