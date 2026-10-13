import { Link } from 'react-router-dom'

/*
  Central button component for the whole site -- every CTA, nav
  action, form submit and card link should render through this rather
  than hand-rolling pill-shaped markup, so the visual language (see
  src/styles/buttons.css + the --btn-* tokens in tokens.css) only has
  one place to change. Variants share the same shape/motion/states and
  differ only in color/border/glow: primary (the reference "Why ZUZU"
  pill -- highest emphasis), secondary (filled, for supporting actions
  that still need real weight), outline (quiet CTA), ghost (lowest
  emphasis, text only). No variant appends an arrow by default --
  pass iconLeft/iconRight explicitly for the rare case a button
  genuinely needs one (search, download, external link, etc).
*/
const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
}

const SIZES = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  as,
  to,
  href,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (to ? Link : href ? 'a' : 'button')
  const destinationProps = to ? { to } : href ? { href } : {}

  return (
    <Tag
      className={`btn group ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...destinationProps}
      {...rest}
    >
      <span className="relative z-[2] inline-flex items-center gap-2">
        {iconLeft}
        {children}
        {iconRight}
      </span>
    </Tag>
  )
}
