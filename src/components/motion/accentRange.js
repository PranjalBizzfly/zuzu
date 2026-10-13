/*
  Site-wide heading rule: every h1/h2 shows its last two words in the brand
  accent colour (the .heading-accent gradient in styles/base.css, the same
  blue as the home hero's rotating phrase). This is the one place that decides
  which slice that is, so TypewriterHeading (animated headings) and
  AccentWords (plain headings) can never disagree.

  Returns the [start, end) character range of the last `count` whitespace-
  separated words in `text` (trailing whitespace ignored), or null when the
  text has no words. A heading with fewer than `count` words is accented in
  full.

  `keepFirstWhite` is for page banners (h1): the first word always stays in
  the normal heading colour, so a two-word banner such as "Workforce
  Monitoring" reads white + blue, matching "Time & Attendance" (white +
  "& Attendance"). A one-word banner is still accented in full.
*/
export function getAccentRange(text, count = 2, keepFirstWhite = false) {
  const trimmed = text.trimEnd()
  if (!trimmed) return null
  const words = [...trimmed.matchAll(/\S+/g)]
  const accentCount = keepFirstWhite ? Math.min(count, Math.max(1, words.length - 1)) : count
  const first = words[Math.max(0, words.length - accentCount)]
  return { start: first.index, end: trimmed.length }
}
