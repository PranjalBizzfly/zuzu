import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import Button from '../components/ui/Button'
import Logo from '../components/ui/Logo'
import TypewriterHeading from '../components/motion/TypewriterHeading'
import AccentWords from '../components/motion/AccentWords'
import { MailIcon, LockIcon, EyeIcon, CheckCircleIcon, ArrowRightIcon } from '../components/ui/icons'
import { AUTH_LINKS } from '../data/navigation'

const WORKSPACE_HIGHLIGHTS = [
  'Real-time activity, attendance & AI reports',
  'Centralized user management from the Admin Portal',
  'Privacy controls managers and admins can configure',
]

/*
  Placeholder sign-in destination. The real ZUZU app/portal login URL
  (likely on a separate subdomain) wasn't provided, so this stays an
  internal route rather than a guessed external link -- wire this up to
  the real portal once that URL is confirmed. The email/password fields
  are interactive for layout parity but don't submit anywhere; the
  primary action honestly routes to Contact instead of faking a
  successful sign-in.
*/
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="py-16 sm:py-24">
      <Container size="lg">
        <div className="grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-2">
          {/* Left: brand panel */}
          <div className="flex flex-col justify-between gap-10 bg-elevated p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6">
              <Link to="/" aria-label="ZUZU home" className="inline-flex w-fit items-center">
                <Logo size="md" />
              </Link>
              <EyebrowBadge>Admin &amp; Manager Portal</EyebrowBadge>
              <div>
                <TypewriterHeading as="h1" trigger="mount" className="text-2xl sm:text-3xl">
                  Sign in to Your ZUZU Workspace
                </TypewriterHeading>
                <p className="mt-3 text-sm text-muted">
                  Sign in to manage users, review activity and attendance, and access reports
                  across your ZUZU deployment.
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {WORKSPACE_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted">
              Access is provisioned per organization by the ZUZU team.
            </p>
          </div>

          {/* Right: form panel */}
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
            <div>
              <h2 className="text-lg font-semibold text-ink"><AccentWords>Sign In</AccentWords></h2>
              <p className="mt-1 text-sm text-muted">
                Enter your registered admin or manager credentials.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-email" className="text-xs font-semibold text-ink">
                  Work Email
                </label>
                <div className="relative">
                  <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    id="login-email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-3.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:border-green focus:ring-green"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="login-password" className="text-xs font-semibold text-ink">
                    Password
                  </label>
                  <Link to="/company/contact" className="text-xs font-semibold text-green hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-10 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:border-green focus:ring-green"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-ink"
                  >
                    <EyeIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button to="/company/contact" variant="primary" fullWidth iconRight={<ArrowRightIcon className="h-4 w-4" />}>
                Log In to Workspace
              </Button>

              <p className="text-center text-xs text-muted">
                Sign-in connects to your organization&rsquo;s ZUZU workspace. Log-in requests are
                currently routed to our team.
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 border-t border-line pt-5 text-xs text-muted">
              <span>
                New to ZUZU?{' '}
                <Link to={AUTH_LINKS.trial.href} className="font-semibold text-green hover:underline">
                  Start a free trial
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
