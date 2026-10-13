import { getAccentRange } from './accentRange'

/*
  Renders a plain (non-animated) heading string with its last two words in
  the heading accent colour -- for h1/h2 elements that are not built with
  TypewriterHeading (legal-page section titles, modal titles, etc.). Anything
  that is not a plain string is returned untouched.
*/
export default function AccentWords({ children }) {
  if (typeof children !== 'string') return children
  const range = getAccentRange(children)
  if (!range) return children

  return (
    <>
      {children.slice(0, range.start)}
      <span className="heading-accent">{children.slice(range.start, range.end)}</span>
      {children.slice(range.end)}
    </>
  )
}
