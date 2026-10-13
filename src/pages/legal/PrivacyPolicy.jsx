import Container from '../../components/ui/Container'
import Breadcrumb from '../../components/ui/Breadcrumb'
import EyebrowBadge from '../../components/ui/EyebrowBadge'
import TypewriterHeading from '../../components/motion/TypewriterHeading'
import AccentWords from '../../components/motion/AccentWords'
import Seo from '../../components/Seo'

const LAST_UPDATED = 'September 17, 2026'

export default function PrivacyPolicy() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Legal' }, { label: 'Privacy Policy' }]

  return (
    <>
      <Seo
        title="Privacy Policy | ZUZU"
        description="How ZUZU collects, uses, stores, and protects data across the Windows agent, dashboards, and website."
        path="/legal/privacy-policy"
        breadcrumbs={breadcrumbItems}
      />

      <section className="py-14 sm:py-20 border-b border-line bg-surface/30">
        <Container className="flex flex-col gap-5 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex flex-col gap-3">
            <EyebrowBadge>Legal Documentation</EyebrowBadge>
            <TypewriterHeading as="h1" trigger="mount" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Privacy Policy</TypewriterHeading>
            <p className="text-xs font-mono uppercase tracking-wider text-muted">Last updated: {LAST_UPDATED}</p>
          </div>
          <p className="text-base sm:text-lg text-ink font-medium leading-relaxed max-w-3xl">
            This privacy policy explains how ZUZU ("ZUZU," "we," "us") collects, uses, stores, and protects
            information through the ZUZU Windows agent, the manager and admin dashboards, and usezuzu.com.
            It's written for two audiences at once: the organizations that deploy ZUZU across their
            workforce, and the individual employees whose devices run the Windows agent.
          </p>
        </Container>
      </section>

      {/* Quick Jump Bar */}
      <section className="sticky top-16 z-20 border-b border-line bg-page/90 backdrop-blur-md py-3 shadow-xs">
        <Container className="max-w-4xl">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider shrink-0 mr-1">Clauses:</span>
            {[
              { id: 'section-1', label: '1. Scope' },
              { id: 'section-2', label: '2. Windows Agent' },
              { id: 'section-3', label: '3. Direct Info' },
              { id: 'section-4', label: '4. Usage' },
              { id: 'section-5', label: '5. Controls' },
              { id: 'section-6', label: '6. Storage & Retention' },
              { id: 'section-7', label: '7. Sharing' },
              { id: 'section-8', label: '8. Rights' },
              { id: 'section-9', label: '9. Transfers' },
              { id: 'section-10', label: '10. Children' },
              { id: 'section-11', label: '11. Changes' },
              { id: 'section-12', label: '12. Contact' },
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
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>1. Who This Policy Applies To</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              ZUZU is a business-to-business product. When an organization ("customer") deploys ZUZU, the
              Customer is generally the <strong className="text-ink font-semibold">data controller</strong> for the
              workforce data collected from its own employees, it decides who is monitored, when, and
              why. ZUZU acts as a <strong className="text-ink font-semibold">data processor</strong> on the customer's
              behalf for that data, processing it only as instructed by the customer and as described here.
              For visitors to usezuzu.com and for the admins and billing contacts who sign up for ZUZU
              directly, ZUZU is the data controller.
            </p>
          </div>

          <div id="section-2" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>2. Information Collected Through the Windows Agent</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              When a customer installs the ZUZU Windows agent on an employee device, the agent can collect:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted leading-relaxed">
              <li>Clock-in and clock-out timestamps, plus idle and screen-off time (Time &amp; Attendance).</li>
              <li>
                Application, window, and website usage, including active versus idle time, used to build
                Employee Activity and Workforce Analytics views.
              </li>
              <li>
                Periodic screenshots, captured at an interval the Customer configures, with private regions
                (such as banking, personal email, or credential fields) redacted on-device before upload
                where the Customer has enabled that control.
              </li>
              <li>
                Device and connection metadata (device name, agent version, last-sync time) used to keep the
                Agent connected and up to date.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              The Windows agent does not collect keystroke content, microphone or webcam input, or data
              from personal devices unless a customer has explicitly enrolled that device.
            </p>
          </div>

          <div id="section-3" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>3. Information Collected Directly From You</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">We also collect information you or your organization provide directly, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted leading-relaxed">
              <li>Account information: name, work email, company name, and role, when an admin creates a workspace or invites a user.</li>
              <li>Billing information, handled by our payment processor rather than stored directly on ZUZU servers.</li>
              <li>Support and contact-form submissions, including anything submitted through the Contact page.</li>
              <li>Standard website analytics (pages visited, referring site, approximate location from IP) for usezuzu.com itself.</li>
            </ul>
          </div>

          <div id="section-4" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>4. How This Information Is Used</AccentWords></h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted leading-relaxed">
              <li>To power the dashboards a Customer's admins and managers use, Team at a Glance, Manager Dashboard, Workforce Analytics, Employee Profile, and the Day-End Report.</li>
              <li>To generate AI-assisted summaries and reports from the underlying activity and attendance data.</li>
              <li>To operate, maintain, and secure the Windows Agent, the dashboards, and usezuzu.com.</li>
              <li>To respond to support requests and enterprise or security inquiries.</li>
              <li>To send account, billing, and service-related communications, and, where permitted, product updates.</li>
            </ul>
            <p className="text-sm sm:text-base text-muted leading-relaxed">We do not sell personal information, and we do not use employee monitoring data to serve third-party advertising.</p>
          </div>

          <div id="section-5" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>5. Privacy Controls Built Into the Product</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Because ZUZU processes workplace activity data, privacy controls are part of the product
              itself, configurable by each customer's admins:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted leading-relaxed">
              <li>On-device private-region redaction, so sensitive windows never leave the employee's device as a readable screenshot.</li>
              <li>One organization-wide monitoring policy, set by admins, covering screenshot interval (1–5 minutes or custom), retention and password redaction.</li>
              <li>Role-scoped access, so a manager only sees their own team's data and cannot change settings; admins control organization-wide policy.</li>
              <li>A visible Windows Agent in the system tray, and consent-gated tracking on personal laptops that runs only between punch-in and punch-out.</li>
            </ul>
          </div>

          <div id="section-6" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>6. Data Storage, Security, and Retention</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Retention of historical activity and screenshot data is 90 days by default, and a customer's
              admins can configure it. Account and billing records are
              retained for as long as the workspace is active, plus a limited period afterward as required
              for legal, tax, or dispute-resolution purposes.
            </p>
          </div>

          <div id="section-7" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>7. Who We Share Information With</AccentWords></h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted leading-relaxed">
              <li>Within a Customer's organization, according to the roles and permissions that Customer's admins configure.</li>
              <li>With service providers who help us run the service, such as cloud hosting and payment processing.</li>
              <li>When required to comply with a valid legal process, or to protect the rights, safety, or property of ZUZU, our Customers, or others.</li>
              <li>In connection with a merger, acquisition, or asset sale, with continuity of the protections described in this policy.</li>
            </ul>
          </div>

          <div id="section-8" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>8. Your Rights and Choices</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Depending on your location and applicable law (such as the GDPR or CCPA), you may have the
              right to request access to, correction of, deletion of, or an export of your personal data.
              If you are an employee monitored through a customer's ZUZU workspace, the fastest path is
              usually your employer's admin, since they control the underlying workspace; you're also
              welcome to contact us directly and we will route the request appropriately. Website visitors
              can manage cookie preferences through their browser settings.
            </p>
          </div>

          <div id="section-9" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>9. International Data Transfers</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              ZUZU may process and store data in countries other than where you or your organization are
              located. Where required by law, we use appropriate safeguards for cross-border transfers of
              personal data.
            </p>
          </div>

          <div id="section-10" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>10. Children's Privacy</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              ZUZU is a workplace product intended for use by organizations and their employees. It is not
              directed at, and we do not knowingly collect information from, children under 16.
            </p>
          </div>

          <div id="section-11" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>11. Changes to This Policy</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We may update this privacy policy from time to time. Material changes will be reflected by
              updating the "last updated" date above, and where appropriate, through direct notice to
              workspace admins.
            </p>
          </div>

          <div id="section-12" className="flex flex-col gap-4 border-t border-line pt-10 scroll-mt-28">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink"><AccentWords>12. Contact Us</AccentWords></h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Questions about this policy or a specific data request can be sent to{' '}
              <a href="mailto:support@UseZuzu.com" className="font-semibold text-brand hover:underline">support@UseZuzu.com</a>{' '}
              for general inquiries, or{' '}
              <a href="mailto:security@UseZuzu.com" className="font-semibold text-brand hover:underline">security@UseZuzu.com</a>{' '}
              for privacy, security, and compliance-specific requests.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
