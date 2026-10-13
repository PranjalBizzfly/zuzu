/*
  Small set of original, generic line icons (24x24, stroke-based) used
  across homepage sections -- not copies of any icon library or brand
  mark, just simple geometric glyphs consistent with the design tokens.
*/
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  'aria-hidden': 'true',
}

const stroke = { stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function EyeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" {...stroke} />
      <circle cx="12" cy="12" r="3" {...stroke} />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M12 7v5l3.5 2" {...stroke} />
    </svg>
  )
}

export function ActivityIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h4l2 7 4-14 2 7h6" {...stroke} />
    </svg>
  )
}

export function SparklesIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" {...stroke} />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" {...stroke} />
      <path d="M9 12l2 2 4-4" {...stroke} />
    </svg>
  )
}

export function UsersIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" {...stroke} />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...stroke} />
      <circle cx="17" cy="8" r="2.5" {...stroke} />
      <path d="M15.5 14.2c2.5.6 4.5 2.8 4.5 5.8" {...stroke} />
    </svg>
  )
}

export function MonitorIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" {...stroke} />
      <path d="M8 20h8M12 16v4" {...stroke} />
    </svg>
  )
}

export function BarChartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V10M12 20V4M20 20v-7" {...stroke} />
      <path d="M2 20h20" {...stroke} />
    </svg>
  )
}

export function LayersIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" {...stroke} />
      <path d="M3 13l9 5 9-5" {...stroke} />
    </svg>
  )
}

export function CameraIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" {...stroke} />
      <path d="M8 7l1.5-3h5L16 7" {...stroke} />
      <circle cx="12" cy="13.5" r="3.2" {...stroke} />
    </svg>
  )
}

export function SettingsIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" {...stroke} />
      <path
        d="M12 3v2M12 19v2M21 12h-2M5 12H3M18.4 5.6l-1.4 1.4M7 16l-1.4 1.4M18.4 18.4 17 17M7 8 5.6 5.6"
        {...stroke}
      />
    </svg>
  )
}

export function GlobeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" {...stroke} />
    </svg>
  )
}

export function BuildingIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="11" height="18" rx="1" {...stroke} />
      <rect x="15" y="9" width="5" height="12" rx="1" {...stroke} />
      <path d="M7.5 7h1M7.5 11h1M7.5 15h1M11 7h1M11 11h1M11 15h1" {...stroke} />
    </svg>
  )
}

export function HeadsetIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" {...stroke} />
      <rect x="3" y="13" width="4" height="6" rx="1.5" {...stroke} />
      <rect x="17" y="13" width="4" height="6" rx="1.5" {...stroke} />
      <path d="M19 19v1a2 2 0 0 1-2 2h-3" {...stroke} />
    </svg>
  )
}

export function CodeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 8 3 12l5 4M16 8l5 4-5 4M13 5l-2 14" {...stroke} />
    </svg>
  )
}

export function PaletteIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.6 1.8-1.6H16a5 5 0 0 0 5-5c0-4-4-6.2-9-6.2Z" {...stroke} />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BriefcaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="12" rx="2" {...stroke} />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" {...stroke} />
      <path d="M3 13h18" {...stroke} />
    </svg>
  )
}

export function RocketIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3 1 5 4 5 8 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-7 5-8Z" {...stroke} />
      <circle cx="12" cy="10" r="1.6" {...stroke} />
      <path d="M9 17l-2 4M15 17l2 4" {...stroke} />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2Z" {...stroke} />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" {...stroke} />
    </svg>
  )
}

export function SunIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.5" {...stroke} />
      <path d="M12 2.5v2.5M12 19v2.5M4.5 12H2M22 12h-2.5M5.3 5.3l1.8 1.8M17 17l1.8 1.8M18.7 5.3l-1.8 1.8M7 17l-1.8 1.8" {...stroke} />
    </svg>
  )
}

export function MoonIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" {...stroke} />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" {...stroke} />
    </svg>
  )
}

export function ChevronUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 15l7-7 7 7" {...stroke} />
    </svg>
  )
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 9l7 7 7-7" {...stroke} />
    </svg>
  )
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" {...stroke} />
    </svg>
  )
}

export function InstallationIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" {...stroke} />
      <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" {...stroke} />
    </svg>
  )
}

export function FileTextIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" {...stroke} />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" {...stroke} />
    </svg>
  )
}

export function FileSpreadsheetIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" {...stroke} />
      <path d="M14 2v6h6M8 13h8M8 17h8M12 13v8" {...stroke} />
    </svg>
  )
}

export function HelpCircleIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" {...stroke} />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" {...stroke} />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="8" {...stroke} />
      <path d="m21 21-4.35-4.35" {...stroke} />
    </svg>
  )
}

export function ServerIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2" width="20" height="8" rx="2" {...stroke} />
      <rect x="2" y="14" width="20" height="8" rx="2" {...stroke} />
      <path d="M6 6h.01M6 18h.01" {...stroke} />
    </svg>
  )
}

export function LockIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" {...stroke} />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" {...stroke} />
    </svg>
  )
}

export function UserCheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...stroke} />
      <circle cx="8.5" cy="7" r="4" {...stroke} />
      <path d="m17 11 2 2 4-4" {...stroke} />
    </svg>
  )
}

export function FilterIcon(props) {
  return (
    <svg {...base} {...props}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" {...stroke} />
    </svg>
  )
}

export function CalendarIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" {...stroke} />
      <path d="M16 2v4M8 2v4M3 10h18" {...stroke} />
    </svg>
  )
}

export function CpuIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" {...stroke} />
      <rect x="9" y="9" width="6" height="6" {...stroke} />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" {...stroke} />
    </svg>
  )
}

export function TrendingUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" {...stroke} />
      <polyline points="17 6 23 6 23 12" {...stroke} />
    </svg>
  )
}

export function DatabaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" {...stroke} />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" {...stroke} />
    </svg>
  )
}

export function CheckCircleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" {...stroke} />
      <polyline points="22 4 12 14.01 9 11.01" {...stroke} />
    </svg>
  )
}

export function XCircleIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" {...stroke} />
      <path d="M14.5 9.5l-5 5M9.5 9.5l5 5" {...stroke} />
    </svg>
  )
}

export function AlertCircleIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" {...stroke} />
      <line x1="12" y1="8" x2="12" y2="12" {...stroke} />
      <line x1="12" y1="16" x2="12.01" y2="16" {...stroke} />
    </svg>
  )
}

export function LaptopIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" {...stroke} />
      <path d="M2 20h20" {...stroke} />
    </svg>
  )
}

export function SlidersIcon(props) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="21" x2="4" y2="14" {...stroke} />
      <line x1="4" y1="10" x2="4" y2="3" {...stroke} />
      <line x1="12" y1="21" x2="12" y2="12" {...stroke} />
      <line x1="12" y1="8" x2="12" y2="3" {...stroke} />
      <line x1="20" y1="21" x2="20" y2="16" {...stroke} />
      <line x1="20" y1="12" x2="20" y2="3" {...stroke} />
      <line x1="1" y1="14" x2="7" y2="14" {...stroke} />
      <line x1="9" y1="8" x2="15" y2="8" {...stroke} />
      <line x1="17" y1="16" x2="23" y2="16" {...stroke} />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" {...stroke} />
      <polyline points="22,6 12,13 2,6" {...stroke} />
    </svg>
  )
}

// Social icons below: simplified, recognizable line-glyphs in the same
// stroke style as the rest of this file, not reproductions of the
// official brand marks (same approach as every other icon here).
export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M14 8h-1.5c-1.1 0-1.5.6-1.5 1.6V11h3l-.4 3h-2.6v6" {...stroke} />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" {...stroke} />
      <circle cx="12" cy="12" r="4" {...stroke} />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedInIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" {...stroke} />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" {...stroke} />
      <circle cx="7.5" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      <line x1="12" y1="16.5" x2="12" y2="11.5" {...stroke} />
      <path d="M12 13c0-1.4 1-2 2-2s2 .8 2 2v3.5" {...stroke} />
    </svg>
  )
}

export function YoutubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" {...stroke} />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" {...stroke} />
      <circle cx="12" cy="9.5" r="2.3" {...stroke} />
    </svg>
  )
}

// Filled 4-point sparkle glyph -- the default mark inside EyebrowBadge
// (see EyebrowBadge.jsx), matching the reference "Why ZUZU" pill's icon.
// Solid fill rather than this file's usual stroke style since a thin
// stroke reads as a faint asterisk at 14px; a filled shape holds up at
// badge size and catches the pill's glow the way the reference does.
export function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  )
}


