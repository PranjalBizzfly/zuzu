import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, SearchIcon } from './icons'
import { COUNTRY_CODES } from '../../data/countryCodes'

/*
  A hand-built dropdown standing in for a native <select> specifically
  because the native control was the problem: Chrome/Edge paint a
  closed <select>'s box using their own autofill-preview highlight
  (light background + dark text) whenever it sits near other
  autofillable fields, and that highlight is drawn outside the normal
  style cascade -- no CSS override (including !important autofill
  overrides) can reach it. Building the control from plain
  button/div/input markup instead means the site's own dark theme is
  always what paints it, in every browser. A search box is included
  since 200+ countries is too long to scan by scrolling alone.
*/
export default function CountryCodeSelect({ value, onChange, id, className = '' }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const rootRef = useRef(null)
  const searchRef = useRef(null)

  const selected = COUNTRY_CODES.find((c) => c.code === value) || COUNTRY_CODES[0]
  const query = search.trim().toLowerCase()
  const filtered = query ? COUNTRY_CODES.filter((c) => c.label.toLowerCase().includes(query)) : COUNTRY_CODES

  useEffect(() => {
    if (!open) return undefined
    const handleClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    searchRef.current?.focus()
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setOpen((o) => !o)
          setSearch('')
        }}
        className="flex h-full w-full items-center justify-between gap-1 rounded-xl border border-line bg-elevated px-2.5 text-sm text-ink transition-colors duration-150 focus:border-green focus:outline-none focus:ring-1 focus:ring-green"
      >
        <span className="truncate">{selected.label}</span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 shrink-0 text-muted transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Country code"
          className="absolute left-0 top-full z-50 mt-1.5 w-72 max-w-[calc(100vw-2rem)] rounded-xl border border-line bg-elevated shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-line px-3 py-2">
            <SearchIcon className="h-3.5 w-3.5 shrink-0 text-faint" />
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-muted/60 focus:outline-none"
            />
          </div>
          <ul className="max-h-56 overflow-y-auto p-1.5">
            {filtered.length === 0 && <li className="px-3 py-2 text-sm text-muted">No matches</li>}
            {filtered.map((c) => {
              const isSelected = c.code === value && c.label === selected.label
              return (
                <li key={c.code + c.label}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(c.code)
                      setOpen(false)
                      setSearch('')
                    }}
                    className={`flex w-full items-center rounded-lg px-3 py-1.5 text-left text-sm transition-colors duration-100 ${
                      isSelected ? 'bg-green/10 text-green' : 'text-ink hover:bg-surface'
                    }`}
                  >
                    <span className="truncate">{c.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
