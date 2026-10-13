const MAX_WIDTHS = {
  sm: 'max-w-(--container-sm)',
  md: 'max-w-(--container-md)',
  lg: 'max-w-(--container-lg)',
  xl: 'max-w-(--container-xl)',
  '2xl': 'max-w-(--container-2xl)',
}

export default function Container({ size = '2xl', className = '', children, as: Tag = 'div' }) {
  return (
    <Tag className={`w-full mx-auto px-5 sm:px-8 lg:px-12 ${MAX_WIDTHS[size]} ${className}`}>
      {children}
    </Tag>
  )
}
