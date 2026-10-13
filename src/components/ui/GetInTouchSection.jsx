import { useEffect, useState } from 'react'
import Container from './Container'
import Button from './Button'
import { MailIcon, ClockIcon, MapPinIcon, CheckIcon, AlertCircleIcon } from './icons'
import Reveal from '../motion/Reveal'
import AccentWords from '../motion/AccentWords'
import ConfettiBurst from '../motion/ConfettiBurst'
import SubmitButton from './SubmitButton'
import EyebrowBadge from './EyebrowBadge'
import useReducedMotion from '../../hooks/useReducedMotion'

// Same rules as the Contact page form: names are letters only (spaces,
// apostrophes, hyphens and periods allowed, no digits); email needs a real
// address shape with a domain and a 2+ letter ending, e.g. name@company.com.
const NAME_PATTERN = /^\p{L}[\p{L}\s'.-]*$/u
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/

const FIELD_BASE =
  'rounded-xl border bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1'
const fieldClass = (hasError) =>
  `${FIELD_BASE} ${
    hasError
      ? 'border-danger focus:border-danger focus:ring-danger'
      : 'border-line focus:border-indigo-400 focus:ring-indigo-400'
  }`

function ErrorText({ id, children }) {
  if (!children) return null
  return (
    <span id={id} role="alert" className="flex items-center gap-1 text-xs text-danger">
      <AlertCircleIcon className="h-3.5 w-3.5 shrink-0" />
      {children}
    </span>
  )
}

function validate(data) {
  const next = {}
  if (!NAME_PATTERN.test(data.name.trim())) {
    next.name = 'Enter a name using letters only.'
  }
  if (!EMAIL_PATTERN.test(data.email.trim())) {
    next.email = 'Enter a valid email address, like name@company.com.'
  }
  if (!data.message.trim()) {
    next.message = 'Tell us how we can help.'
  }
  return next
}

export default function GetInTouchSection() {
  const reducedMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  // 'idle' | 'loading' | 'success' -- see SubmitButton.
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})

  const setField = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }))

  // Numbers can't be typed (or pasted) into the name: they're removed as
  // they arrive, with a short note so it doesn't look like a broken key.
  const handleNameChange = (e) => {
    const raw = e.target.value
    const cleaned = raw.replace(/\p{N}/gu, '')
    setField('name', cleaned)
    setErrors((prev) => {
      const next = { ...prev }
      if (cleaned !== raw) next.name = "Numbers aren't allowed in the name."
      else delete next.name
      return next
    })
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setField('email', value)
    // Clear the message as soon as the address becomes valid.
    if (errors.email && EMAIL_PATTERN.test(value.trim())) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.email
        return next
      })
    }
  }

  const handleBlur = (field) => () => {
    const found = validate(formData)
    setErrors((prev) => {
      const next = { ...prev }
      if (found[field] && formData[field] !== '') next[field] = found[field]
      return next
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(formData)
    setErrors(found)
    const firstInvalid = ['name', 'email', 'message'].find((k) => found[k])
    if (firstInvalid) {
      document.getElementById(`git-${firstInvalid}`)?.focus()
      return
    }
    setStatus('loading')
  }

  useEffect(() => {
    if (status !== 'loading') return undefined
    const t = window.setTimeout(() => setStatus('success'), reducedMotion ? 0 : 250)
    return () => window.clearTimeout(t)
  }, [status, reducedMotion])

  useEffect(() => {
    if (status !== 'success') return undefined
    const t = window.setTimeout(() => setSubmitted(true), reducedMotion ? 0 : 1200)
    return () => window.clearTimeout(t)
  }, [status, reducedMotion])

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-10">
          <EyebrowBadge>Get in Touch</EyebrowBadge>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">
            <AccentWords>Get in Touch With the ZUZU Team</AccentWords>
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Have questions about desktop deployment, manager permissions, or team rollouts? Our
            workforce specialists are ready to assist.
          </p>
        </Reveal>

        <Reveal direction="scale" className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left: Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-bold text-ink">We're Here to Help Your Team Succeed</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  Reach out to our workforce solutions team for product demonstrations, custom
                  deployment guidance, or billing inquiries.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Email Support &amp; Sales</h4>
                    <a href="mailto:support@UseZuzu.com" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">
                      support@UseZuzu.com
                    </a>
                    <p className="text-xs text-muted mt-0.5">Our team responds during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Live Walkthroughs</h4>
                    <p className="text-xs text-muted mt-0.5">Schedule a 1-on-1 personalized discovery session</p>
                    <a href="/company/contact" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 mt-0.5">
                      Book a Demo Slot
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Global Workforce Support</h4>
                    <p className="text-xs text-muted mt-0.5">Supporting distributed teams across all major timezones</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto rounded-xl border border-line bg-elevated p-4 text-xs text-muted leading-relaxed">
                <span aria-hidden="true">💡</span>{' '}
                <span className="font-semibold text-ink">Instant setup:</span> You don't need sales
                approval to start. You can download the desktop application and start your 7-day
                free trial immediately.
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <Reveal trigger="mount" direction="scale" className="flex h-full flex-col items-center justify-center text-center py-12 gap-3">
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <ConfettiBurst />
                    <div className="animate-success-pop flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-400 shadow-[0_0_0_1px_rgba(var(--color-green-rgb),0.3),0_4px_16px_rgba(15,23,42,0.08)]">
                      <CheckIcon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-ink">Message Received</h3>
                  <p className="text-sm text-muted max-w-sm">
                    Thanks for reaching out. A workforce specialist will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setStatus('idle')
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-2"
                  >
                    Send another message
                  </Button>
                </Reveal>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-ink">Send an Inquiry</h3>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="git-name" className="text-xs font-semibold text-ink">
                      Full Name
                    </label>
                    <input
                      id="git-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleNameChange}
                      onBlur={handleBlur('name')}
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'git-name-error' : undefined}
                      placeholder="e.g. David Miller"
                      className={fieldClass(errors.name)}
                    />
                    <ErrorText id="git-name-error">{errors.name}</ErrorText>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="git-email" className="text-xs font-semibold text-ink">
                      Work Email
                    </label>
                    <input
                      id="git-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      onBlur={handleBlur('email')}
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={errors.email ? 'git-email-error' : undefined}
                      placeholder="name@company.com"
                      className={fieldClass(errors.email)}
                    />
                    <ErrorText id="git-email-error">{errors.email}</ErrorText>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="git-company" className="text-xs font-semibold text-ink">
                      Company / Organization Name
                    </label>
                    <input
                      id="git-company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company name"
                      className="rounded-xl border border-line bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="git-message" className="text-xs font-semibold text-ink">
                      How can we assist your team?
                    </label>
                    <textarea
                      id="git-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setField('message', e.target.value)
                        if (errors.message && e.target.value.trim()) {
                          setErrors((prev) => {
                            const next = { ...prev }
                            delete next.message
                            return next
                          })
                        }
                      }}
                      aria-invalid={errors.message ? 'true' : undefined}
                      aria-describedby={errors.message ? 'git-message-error' : undefined}
                      placeholder="Tell us about your team size, remote requirements, or specific features you need..."
                      className={fieldClass(errors.message)}
                    />
                    <ErrorText id="git-message-error">{errors.message}</ErrorText>
                  </div>

                  <div className="mt-1 flex flex-col items-center gap-2">
                    <SubmitButton status={status} fullWidth />
                    {status === 'success' && (
                      <p className="animate-content-fade-in text-xs text-muted">
                        Thank you! We&rsquo;ll get back to you soon.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
