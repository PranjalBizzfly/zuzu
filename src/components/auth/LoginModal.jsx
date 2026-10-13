import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginModal } from '../../context/LoginModalContext'
import Logo from '../ui/Logo'
import EyebrowBadge from '../ui/EyebrowBadge'
import AccentWords from '../motion/AccentWords'
import { MailIcon, LockIcon, EyeIcon, CheckCircleIcon, ArrowRightIcon, UserCheckIcon, AlertCircleIcon } from '../ui/icons'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NAME_HAS_DIGIT = /\d/

function FieldError({ children }) {
  if (!children) return null
  return (
    <span className="flex items-center gap-1 text-xs text-danger">
      <AlertCircleIcon className="h-3.5 w-3.5 shrink-0" />
      {children}
    </span>
  )
}

const WORKSPACE_HIGHLIGHTS = [
  'Real-time activity, attendance & AI reports',
  'Centralized user management from the Admin Portal',
  'Privacy controls managers and admins can configure',
]

const TRIAL_HIGHLIGHTS = [
  '7-day free trial, up to 10 employees',
  'No credit card required to start',
  'Windows Agent included',
]

/*
  Always mounted (portaled to document.body) and toggled purely via
  CSS opacity/pointer-events off `isOpen`, the same pattern MobileMenu
  uses -- no mount/unmount state machine, which is what caused the
  earlier "Log In does nothing" bug (a derive-state-during-render
  pattern racing with Strict Mode's double-invoke). There's no signup
  backend on this site, so both Sign In and Create Account honestly
  close the modal and hand off to Contact rather than faking success.
*/
export default function LoginModal() {
  const { isOpen, closeLogin } = useLoginModal()
  const navigate = useNavigate()
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [signupErrors, setSignupErrors] = useState({})

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) closeLogin()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeLogin])

  useEffect(() => {
    if (isOpen) return undefined
    const resetTimer = setTimeout(() => {
      setMode('signin')
      setEmail('')
      setPassword('')
      setShowPassword(false)
      setName('')
      setConfirmPassword('')
      setShowConfirmPassword(false)
      setSignupErrors({})
    }, 250)
    return () => clearTimeout(resetTimer)
  }, [isOpen])

  const goToContact = () => {
    closeLogin()
    navigate('/company/contact')
  }

  const handleCreateAccount = () => {
    const errors = {}
    if (!name.trim()) errors.name = 'Enter your full name.'
    else if (NAME_HAS_DIGIT.test(name)) errors.name = 'Full name cannot contain numbers.'
    if (!email.trim()) errors.email = 'Enter your work email.'
    else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address.'
    if (!password) errors.password = 'Create a password.'
    else if (password.length < 8) errors.password = 'Password must be at least 8 characters.'
    if (confirmPassword !== password) errors.confirmPassword = 'Passwords do not match.'

    setSignupErrors(errors)
    if (Object.keys(errors).length === 0) goToContact()
  }

  const highlights = mode === 'signin' ? WORKSPACE_HIGHLIGHTS : TRIAL_HIGHLIGHTS

  return createPortal(
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center p-4 transition-opacity duration-200 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Log in to ZUZU"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={closeLogin}
        tabIndex={isOpen ? 0 : -1}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <div
        className={`relative w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl transition-all duration-200 ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-3 scale-[0.98]'
        }`}
      >
        <button
          type="button"
          onClick={closeLogin}
          aria-label="Close"
          tabIndex={isOpen ? 0 : -1}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-elevated text-ink transition-colors hover:bg-surface"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left: brand panel */}
          <div className="flex flex-col justify-between gap-8 bg-elevated p-8">
            <div className="flex flex-col gap-5">
              <Link to="/" onClick={closeLogin} aria-label="ZUZU home" className="inline-flex w-fit items-center">
                <Logo size="md" />
              </Link>
              <EyebrowBadge>Admin &amp; Manager Portal</EyebrowBadge>
              <div>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  <AccentWords>
                    {mode === 'signin' ? 'Sign in to your ZUZU workspace' : 'Start your ZUZU free trial'}
                  </AccentWords>
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {mode === 'signin'
                    ? 'Manage users, review activity and attendance, and access reports across your ZUZU deployment.'
                    : 'Try the full ZUZU platform for 7 days with up to 10 employees, no card required.'}
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form panel */}
          <div className="flex flex-col gap-6 p-8">
            <div className="inline-flex w-fit rounded-full border border-line bg-elevated p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`rounded-full px-4 py-1.5 transition-colors ${
                  mode === 'signin' ? 'bg-green text-surface' : 'text-muted hover:text-ink'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`rounded-full px-4 py-1.5 transition-colors ${
                  mode === 'signup' ? 'bg-green text-surface' : 'text-muted hover:text-ink'
                }`}
              >
                Create Account
              </button>
            </div>

            {mode === 'signin' ? (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-login-email" className="text-xs font-semibold text-ink">
                    Work Email
                  </label>
                  <div className="relative">
                    <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="modal-login-email"
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
                    <label htmlFor="modal-login-password" className="text-xs font-semibold text-ink">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={goToContact}
                      className="text-xs font-semibold text-green hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="modal-login-password"
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

                <button
                  type="button"
                  onClick={goToContact}
                  className="btn btn-primary btn-md w-full"
                >
                  <span className="relative z-[2] inline-flex items-center gap-2">
                    Log In to Workspace
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </button>

                <p className="text-center text-xs text-muted">
                  Sign-in connects to your organization&rsquo;s ZUZU workspace. Log-in requests are
                  currently routed to our team.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted">
                  This site doesn&rsquo;t process signups directly. Contact our team and we&rsquo;ll
                  get your 7-day trial workspace configured for up to 10 employees.
                </p>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-signup-name" className="text-xs font-semibold text-ink">
                    Full Name
                  </label>
                  <div className="relative">
                    <UserCheckIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="modal-signup-name"
                      type="text"
                      autoComplete="name"
                      inputMode="text"
                      pattern="[^0-9]*"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => {
                        // Strips digits as they're typed/pasted rather than only
                        // flagging them on submit, so a number can never actually
                        // land in this field in the first place.
                        setName(e.target.value.replace(/\d/g, ''))
                        setSignupErrors((prev) => (prev.name ? { ...prev, name: undefined } : prev))
                      }}
                      className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-3.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:border-green focus:ring-green"
                    />
                  </div>
                  <FieldError>{signupErrors.name}</FieldError>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-signup-email" className="text-xs font-semibold text-ink">
                    Work Email
                  </label>
                  <div className="relative">
                    <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="modal-signup-email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setSignupErrors((prev) => (prev.email ? { ...prev, email: undefined } : prev))
                      }}
                      className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-3.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:border-green focus:ring-green"
                    />
                  </div>
                  <FieldError>{signupErrors.email}</FieldError>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-signup-password" className="text-xs font-semibold text-ink">
                    Password
                  </label>
                  <div className="relative">
                    <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="modal-signup-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="Create a password"
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
                  <FieldError>{signupErrors.password}</FieldError>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-signup-confirm-password" className="text-xs font-semibold text-ink">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="modal-signup-confirm-password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-10 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:border-green focus:ring-green"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((v) => !v)}
                      aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-ink"
                    >
                      <EyeIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <FieldError>{signupErrors.confirmPassword}</FieldError>
                </div>

                <button
                  type="button"
                  onClick={handleCreateAccount}
                  className="btn btn-primary btn-md w-full"
                >
                  <span className="relative z-[2] inline-flex items-center gap-2">
                    Create Account
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </button>

                <p className="text-center text-xs text-muted">
                  Sign-up requests route to our team, who&rsquo;ll set up your workspace &mdash;
                  this form doesn&rsquo;t create a live account directly.
                </p>

                <p className="text-center text-xs text-muted">
                  Already have a workspace?{' '}
                  <Link to="/login" onClick={closeLogin} className="font-semibold text-green hover:underline">
                    Sign in instead
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
