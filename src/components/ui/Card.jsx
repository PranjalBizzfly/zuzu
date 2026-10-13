export default function Card({ hover = true, glass = true, padding = 'md', className = '', children, as: Tag = 'div', ...rest }) {
  const paddings = {
    sm: 'p-5',
    md: 'p-7',
    lg: 'p-9',
  }

  const baseClass = glass ? 'card-glass' : 'bg-surface border border-line'
  const hoverClass = hover && !glass
    ? 'transition-all duration-300 ease-[var(--ease-emphasized)] hover:border-line-strong hover:bg-elevated hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-lg'
    : ''

  return (
    <Tag
      className={`rounded-xl ${baseClass} ${paddings[padding]} ${hoverClass} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
