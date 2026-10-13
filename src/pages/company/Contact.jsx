import { useEffect, useState } from 'react'
import Container from '../../components/ui/Container'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import { MailIcon, ClockIcon, ShieldIcon, CheckIcon, PhoneIcon, AlertCircleIcon } from '../../components/ui/icons'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import Reveal from '../../components/motion/Reveal'
import ConfettiBurst from '../../components/motion/ConfettiBurst'
import SubmitButton from '../../components/ui/SubmitButton'
import CountryCodeSelect from '../../components/ui/CountryCodeSelect'
import useReducedMotion from '../../hooks/useReducedMotion'

// Phone digit length kept loose (7-15, ITU E.164 max) since
// requirements vary by country rather than hardcoding one.

const NAME_PATTERN = /^[A-Za-z][A-Za-z\s'-]*$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^\d{7,15}$/

function ErrorText({ children }) {
  if (!children) return null
  return (
    <span className="flex items-center gap-1 text-xs text-danger">
      <AlertCircleIcon className="h-3.5 w-3.5 shrink-0" />
      {children}
    </span>
  )
}

export default function Contact() {
  const reducedMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  // 'idle' | 'loading' | 'success' -- drives SubmitButton's own
  // click->loading->success micro-interaction. Only ever reaches
  // 'loading' once validate() has already passed below.
  const [status, setStatus] = useState('idle')
  const [shake, setShake] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    teamSize: '10-50 employees',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Company', href: '/company/about' },
    { label: 'Contact' },
  ]

  const validate = (data) => {
    const next = {}
    if (!NAME_PATTERN.test(data.name.trim())) {
      next.name = 'Enter a name using letters only.'
    }
    if (!EMAIL_PATTERN.test(data.email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!PHONE_PATTERN.test(data.phone.trim())) {
      next.phone = 'Enter a valid phone number (digits only).'
    }
    return next
  }

  const handleBlur = () => {
    setErrors((prev) => ({ ...prev, ...validate(formData) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(formData)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      // Same real failure mode this form has: client-side validation.
      // There's no backend call here to fail separately, so this is
      // the one path that plays the error-state (shake, no success).
      setShake(true)
      window.setTimeout(() => setShake(false), 400)
      return
    }
    setStatus('loading')
  }

  // Loading -> success as soon as the (synchronous, client-only) submit
  // actually resolves -- the short pause below is the button's own
  // loading-state dwell time the design calls for, not a fake
  // "processing" delay standing in for a real request.
  useEffect(() => {
    if (status !== 'loading') return undefined
    const t = window.setTimeout(() => setStatus('success'), reducedMotion ? 0 : 250)
    return () => window.clearTimeout(t)
  }, [status, reducedMotion])

  // Success -> the existing confirmation panel, once the button's own
  // checkmark-draw + confetti moment has had time to play.
  useEffect(() => {
    if (status !== 'success') return undefined
    const t = window.setTimeout(() => setSubmitted(true), reducedMotion ? 0 : 1200)
    return () => window.clearTimeout(t)
  }, [status, reducedMotion])

  return (
    <>
      <Seo
        title="Contact Us | ZUZU"
        description="Get in touch with the ZUZU team for product demonstrations, enterprise deployment consultations, or technical inquiries."
        path="/company/contact"
        breadcrumbs={breadcrumbItems}
      />

      {/* 1. Full-Width Hero Banner */}
      <FullWidthHumanHero
        backgroundImage="/images/people/zuzu-contact-support.webp"
        imagePosition="object-[80%_29%]"
        breadcrumbs={breadcrumbItems}
        badge="Get in Touch"
        badgeVariant="blue"
        title="Contact ZUZU"
        description="Have questions about deploying ZUZU across your team? Our workforce intelligence specialists and support engineers are here to help."
        primaryCta={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryCta={{ label: 'Knowledge Base', href: '/knowledge-base' }}
      />

      {/* 2. Contact Information & Interactive Form */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left: Contact Details Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <EyebrowBadge>Direct Assistance</EyebrowBadge>
                <TypewriterHeading as="h2" className="text-2xl font-bold text-ink mt-3">How Can We Help Your Team?</TypewriterHeading>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  Whether you are planning an enterprise rollout across hundreds of endpoints or need rapid assistance with Windows agent setup, our team responds quickly.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Card padding="md" className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Enterprise Inquiries</h3>
                    <p className="text-xs text-muted mt-0.5">Custom pilot programs and security audits.</p>
                    <p className="text-xs font-semibold text-green mt-1">support@UseZuzu.com</p>
                  </div>
                </Card>

                <Card padding="md" className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green shrink-0">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Support Hours</h3>
                    <p className="text-xs text-muted mt-0.5">Our team reviews and responds to inquiries during business hours.</p>
                  </div>
                </Card>

                <Card padding="md" className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                    <ShieldIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Privacy & Security Questions</h3>
                    <p className="text-xs text-muted mt-0.5">Compliance reviews and data retention queries.</p>
                    <p className="text-xs font-semibold text-blue-400 mt-1">security@UseZuzu.com</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div
                className={`rounded-2xl border border-line bg-surface p-7 sm:p-9 shadow-lg ${
                  submitted ? 'animate-card-success-glow' : ''
                }`}
              >
                {submitted ? (
                  <Reveal trigger="mount" direction="scale" className="flex flex-col items-center justify-center text-center py-12 gap-4">
                    <div className="relative flex h-24 w-24 items-center justify-center">
                      <ConfettiBurst />
                      <div className="animate-success-pop shadow-glow-green flex h-20 w-20 items-center justify-center rounded-full bg-green/15 text-green">
                        <CheckIcon className="h-9 w-9" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-ink">Message Received</h3>
                    <p className="text-sm text-muted max-w-md">
                      Thank you for contacting ZUZU. A workforce specialist will review your inquiry and get back to you shortly.
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
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-xl font-bold text-ink">Send an Inquiry</h3>
                      <p className="text-xs text-muted mt-1">Fill out the details below and we will get back to you promptly.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-ink">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          inputMode="text"
                          autoComplete="name"
                          value={formData.name}
                          onKeyDown={(e) => {
                            if (/[0-9]/.test(e.key)) e.preventDefault()
                          }}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value.replace(/[^A-Za-z\s'-]/g, '') })
                          }
                          onBlur={handleBlur}
                          placeholder="e.g. Sarah Jenkins"
                          aria-invalid={Boolean(errors.name)}
                          className={`rounded-xl border bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1 ${
                            errors.name ? 'border-danger focus:border-danger focus:ring-danger' : 'border-line focus:border-green focus:ring-green'
                          }`}
                        />
                        <ErrorText>{errors.name}</ErrorText>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-ink">
                          Work Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onBlur={handleBlur}
                          placeholder="name@company.com"
                          aria-invalid={Boolean(errors.email)}
                          className={`rounded-xl border bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1 ${
                            errors.email ? 'border-danger focus:border-danger focus:ring-danger' : 'border-line focus:border-green focus:ring-green'
                          }`}
                        />
                        <ErrorText>{errors.email}</ErrorText>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-ink">
                        Phone Number
                      </label>
                      <div className="flex items-stretch gap-2">
                        <CountryCodeSelect
                          id="phone-country-code"
                          value={formData.countryCode}
                          onChange={(code) => setFormData({ ...formData, countryCode: code })}
                          className="w-32 shrink-0"
                        />
                        <div className="relative flex-1">
                          <PhoneIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                          <input
                            id="phone"
                            type="tel"
                            required
                            inputMode="numeric"
                            pattern="[0-9]*"
                            autoComplete="tel-national"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 15) })
                            }
                            onBlur={handleBlur}
                            placeholder="98765 43210"
                            aria-invalid={Boolean(errors.phone)}
                            className={`w-full rounded-xl border bg-elevated py-2.5 pl-10 pr-3.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-1 ${
                              errors.phone ? 'border-danger focus:border-danger focus:ring-danger' : 'border-line focus:border-green focus:ring-green'
                            }`}
                          />
                        </div>
                      </div>
                      <ErrorText>{errors.phone}</ErrorText>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-ink">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Inc."
                        className="rounded-xl border border-line bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-green focus:outline-none focus:ring-1 focus:ring-green"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="teamSize" className="text-xs font-semibold text-ink">
                        Team Headcount
                      </label>
                      <select
                        id="teamSize"
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="rounded-xl border border-line bg-elevated px-3.5 py-2.5 text-sm text-ink focus:border-green focus:outline-none focus:ring-1 focus:ring-green"
                      >
                        <option value="1-10 employees">1-10 employees (Free Trial)</option>
                        <option value="10-50 employees">10-50 employees</option>
                        <option value="50-250 employees">50-250 employees</option>
                        <option value="250+ employees">250+ employees (Enterprise)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-ink">
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your workforce visibility requirements..."
                        className="rounded-xl border border-line bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-green focus:outline-none focus:ring-1 focus:ring-green"
                      />
                    </div>

                    <div className="mt-2 flex flex-col items-start gap-2">
                      <SubmitButton status={status} shake={shake} />
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
          </div>
        </Container>
      </section>
    </>
  )
}
