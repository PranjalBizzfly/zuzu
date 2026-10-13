const VARIANTS = {
  blue: 'text-blue-400 bg-blue/10 border-blue/25',
  purple: 'text-purple-400 bg-purple/10 border-purple/25',
  neutral: 'text-muted bg-elevated border-line',
  success: 'text-success bg-success/10 border-success/25',
  warning: 'text-warning bg-warning/10 border-warning/25',
}

export default function Badge({ variant = 'blue', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1
        text-xs font-medium tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
