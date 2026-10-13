import Container from '../../components/ui/Container'
import Breadcrumb from '../../components/ui/Breadcrumb'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import AccentWords from '../../components/motion/AccentWords'
import Seo from '../../components/Seo'

const LAST_UPDATED = 'September 17, 2026'

export default function TermsOfService() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Legal' }, { label: 'Terms of Service' }]

  return (
    <>
      <Seo
        title="Terms of Service | ZUZU"
        description="The terms that govern use of the ZUZU Windows agent, workforce dashboards, and usezuzu.com."
        path="/legal/terms-of-service"
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-14 sm:py-20 border-b border-line bg-surface/30">
        <Container className="flex flex-col gap-5 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex flex-col gap-3">
            <EyebrowBadge>Legal Documentation</EyebrowBadge>
            <TypewriterHeading as="h1" trigger="mount" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Terms of Service</TypewriterHeading>
            <p className="text-xs font-mono uppercase tracking-wider text-muted">Last updated: {LAST_UPDATED}</p>
          </div>
          <p className="text-base sm:text-lg text-ink font-medium leading-relaxed max-w-3xl">
            These terms of service ("terms") govern access to and use of the ZUZU Windows agent, the
            manager and admin dashboards, and usezuzu.com (together, the "service"), provided by ZUZU
            ("ZUZU," "we," "us"). By creating a workspace, starting a free trial, or otherwise using the
            Service, an organization ("customer") and its authorized users agree to these terms.
          </p>
        </Container>
      </section>

      {/* Quick Jump Bar */}
      <section className="sticky top-16 z-20 border-b border-line bg-page/90 backdrop-blur-md py-3 shadow-xs">
        <Container className="max-w-4xl">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider shrink-0 mr-1">Clauses:</span>
            {[
              { id: 'section-1', label: '1. Service' },
              { id: 'section-2', label: '2. Accounts' },
              { id: 'section-3', label: '3. Trial & Plans' },
              { id: 'section-4', label: '4. License' },
              { id: 'section-5', label: '5. Compliance' },
              { id: 'section-6', label: '6. Acceptable Use' },
              { id: 'section-7', label: '7. Ownership' },
              { id: 'section-8', label: '8. Availability' },
              { id: 'section-9', label: '9. Termination' },
              { id: 'section-10', label: '10. Liability' },
              { id: 'section-11', label: '11. Indemnity' },
              { id: 'section-12', label: '12. Updates' },
              { id: 'section-13', label: '13. Law' },
              { id: 'section-14', label: '14. Contact' },
            ].map((clause) => (
              <a
                key={clause.id}
                href={`#${clause.id}`}
                className="shrink-0 px-2.5 py-1 rounded-md border border-line bg-surface hover:border-brand/40 text-xs font-medium text-ink transition-colors"
              >
                {clause.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-12 max-w-4xl">
          <div id="section-1" className="flex flex-col gap-4 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>1. The Service</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              ZUZU is a workforce visibility and intelligence platform. It connects a lightweight Windows
              desktop application (the "Windows agent") installed on customer-authorized devices to a set
              of centralized dashboards, time &amp; attendance, employee activity, screenshot monitoring,
              AI reports, workforce analytics, manager workspace, and admin portal, that give a customer's
              managers and admins visibility into how work happens across their team.
            </p>
          </div>

          <div id="section-2" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>2. Eligibility and Account Registration</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              You must be able to form a binding contract to use the service on behalf of an organization,
              and you represent that you have authority to do so. Admin accounts are created with a work
              email; you're responsible for keeping your credentials confidential and for all activity that
              occurs under your account.
            </p>
          </div>

          <div id="section-3" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>3. Free Trial and Subscription Plans</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              New workspaces can start a 7-day free trial for up to 10 employees, with no credit card
              required. Continuing beyond the trial requires activating a paid plan, Starter, team focus,
              Growth &amp; agency, or Enterprise organization, billed monthly or annually, priced per
              employee as shown on the pricing page at the time of purchase. Fees are non-refundable except
              where required by law or explicitly stated at checkout. We may change plan pricing prospectively,
              with notice before it applies to your next billing cycle.
            </p>
          </div>

          <div id="section-4" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>4. License to Use the Service</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Subject to these terms and payment of applicable fees, ZUZU grants the customer a
              non-exclusive, non-transferable, revocable license to install the Windows agent on
              Customer-authorized devices and to access the dashboards for the customer's own internal
              workforce-management purposes. This license does not include any right to resell, sublicense,
              reverse engineer, or create derivative works from the service.
            </p>
          </div>

          <div id="section-5" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>5. Customer Responsibilities and Lawful Use</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Workplace monitoring is subject to labor, privacy, and data-protection law that varies by
              jurisdiction. As the party that decides who is monitored and why, the customer is responsible
              for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted leading-relaxed">
              <li>Deploying the Windows Agent only on devices and to employees it is legally entitled to monitor.</li>
              <li>Providing any notice, consent, or works-council approval required under applicable local law before enabling monitoring.</li>
              <li>Configuring monitoring schedules, screenshot capture, and redaction settings in a way that complies with those laws.</li>
              <li>Not using the Service to discriminate against, harass, or unlawfully surveil any individual.</li>
            </ul>
          </div>

          <div id="section-6" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>6. Acceptable Use</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted leading-relaxed">
              <li>Attempt to disable, bypass, or interfere with the Windows Agent's security or redaction controls.</li>
              <li>Access another Customer's workspace, or data outside your assigned role, without authorization.</li>
              <li>Use the Service to build a competing product, or to scrape or resell any part of it.</li>
              <li>Upload malicious code or attempt to disrupt the availability of the Service for others.</li>
            </ul>
          </div>

          <div id="section-7" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>7. Data Ownership</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              As between ZUZU and the customer, the customer owns the activity, attendance, screenshot, and
              report data collected from its own workspace ("customer data"). ZUZU processes customer data
              solely to provide the service, as described in our{' '}
              <a href="/legal/privacy-policy" className="font-semibold text-brand hover:underline">Privacy policy</a>.
              ZUZU retains all rights to the underlying software, dashboards, and any aggregated or
              anonymized data that does not identify a customer or its employees.
            </p>
          </div>

          <div id="section-8" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>8. Service Availability</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We work to keep the service reliably available but do not guarantee uninterrupted access.
              Scheduled maintenance, third-party infrastructure issues, or events outside our reasonable
              control may cause temporary downtime. Enterprise customers with a separately signed SLA are
              governed by the terms of that agreement where they conflict with this section.
            </p>
          </div>

          <div id="section-9" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>9. Termination</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              A customer may cancel at any time from the admin portal; cancellation takes effect at the end
              of the current billing period. We may suspend or terminate access if these terms are
              materially breached, if fees go unpaid, or if use of the service creates legal or security
              risk to ZUZU or others. Upon termination, customer data is retained only as described in the
              Privacy policy before deletion.
            </p>
          </div>

          <div id="section-10" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>10. Disclaimers and Limitation of Liability</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              The service is provided "as is" and "as available." To the maximum extent permitted by law,
              ZUZU disclaims all implied warranties, and ZUZU's total liability arising from these terms or
              use of the service will not exceed the fees paid by the customer in the 12 months preceding
              the claim. Neither party is liable for indirect, incidental, or consequential damages.
            </p>
          </div>

          <div id="section-11" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>11. Indemnification</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              The customer agrees to indemnify and hold ZUZU harmless from claims arising out of the
              Customer's unlawful use of the service, including any failure to obtain required employee
              notice or consent for workplace monitoring under applicable law.
            </p>
          </div>

          <div id="section-12" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>12. Changes to These Terms</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We may update these terms from time to time. Material changes will be reflected by updating
              the "last updated" date above, and where appropriate, through direct notice to workspace
              admins before the change takes effect.
            </p>
          </div>

          <div id="section-13" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>13. Governing Law</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              These terms are governed by the laws of the jurisdiction in which ZUZU is incorporated,
              without regard to conflict-of-law principles, except where local law mandates otherwise for a
              given customer.
            </p>
          </div>

          <div id="section-14" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>14. Contact Us</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Questions about these terms can be sent to{' '}
              <a href="mailto:support@UseZuzu.com" className="font-semibold text-brand hover:underline">support@UseZuzu.com</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
