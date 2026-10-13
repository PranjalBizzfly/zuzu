/*
  Small payment-method badges for the footer -- original SVG recreations of
  each brand's own colours and logotype (Mastercard's two overlapping
  circles; Visa/Amex/PayPal/UPI's own wordmark styling), not copies of an
  official logo file. This is the same "accepted payment methods" badge
  treatment virtually every checkout footer uses, and is what the card
  networks' own merchant brand guidelines describe as acceptable card-mark
  usage -- still no bundled third-party logo assets, just small inline SVG.

  Unlike icons.jsx's icon set (decorative, always paired with a visible
  text label, so aria-hidden), these badges ARE the label -- there's no
  adjacent "Visa" text anymore -- so each one carries its own
  role="img" + aria-label instead.

  Common card shape: a 48x30 rounded-rect chip (the same ~1.6:1 aspect
  ratio real card-network icon sets use), kept in its own light/brand
  background regardless of site theme -- altering a payment mark's colours
  for dark mode would read as an unofficial recolour, the same reason
  Stripe/Shopify-style checkouts keep these on a white chip everywhere.
*/
const chip = {
  viewBox: '0 0 48 30',
  role: 'img',
}

function ChipBg({ fill = '#ffffff', stroke = true }) {
  return (
    <>
      <rect width="48" height="30" rx="5" fill={fill} />
      {stroke && <rect x="0.5" y="0.5" width="47" height="29" rx="4.5" fill="none" stroke="#E2E8F0" />}
    </>
  )
}

export function VisaIcon(props) {
  return (
    <svg {...chip} aria-label="Visa" {...props}>
      <ChipBg />
      <text
        x="24"
        y="20"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontStyle="italic"
        fontWeight="800"
        fontSize="13"
        fill="#1434CB"
        letterSpacing="0.3"
      >
        VISA
      </text>
    </svg>
  )
}

export function MastercardIcon(props) {
  return (
    <svg {...chip} aria-label="Mastercard" {...props}>
      <ChipBg />
      <circle cx="20" cy="15" r="8.5" fill="#EB001B" />
      <circle cx="28" cy="15" r="8.5" fill="#F79E1B" />
      <path d="M24 8.2a8.48 8.48 0 0 1 0 13.6 8.48 8.48 0 0 1 0-13.6Z" fill="#FF5F00" />
    </svg>
  )
}

export function AmexIcon(props) {
  return (
    <svg {...chip} aria-label="American Express" {...props}>
      <ChipBg fill="#006FCF" stroke={false} />
      <text
        x="24"
        y="19"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="10.5"
        fill="#ffffff"
        letterSpacing="0.4"
      >
        AMEX
      </text>
    </svg>
  )
}

export function UpiIcon(props) {
  return (
    <svg {...chip} aria-label="UPI" {...props}>
      <ChipBg />
      <text
        x="24"
        y="20"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="13"
        letterSpacing="0.4"
      >
        <tspan fill="#ED752E">UP</tspan>
        <tspan fill="#097939">I</tspan>
      </text>
    </svg>
  )
}

export function PayPalIcon(props) {
  return (
    <svg {...chip} aria-label="PayPal" {...props}>
      <ChipBg />
      <text
        x="24"
        y="19"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="10.5"
      >
        <tspan fill="#003087">Pay</tspan>
        <tspan fill="#009cde">Pal</tspan>
      </text>
    </svg>
  )
}
