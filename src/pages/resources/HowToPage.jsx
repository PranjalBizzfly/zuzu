import Container from '../../components/ui/Container'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQ from '../../components/ui/FAQ'
import CTA from '../../components/ui/CTA'
import Seo from '../../components/Seo'
import FullWidthHumanHero from '../../components/ui/FullWidthHumanHero'
import SectionHeader from '../../components/ui/SectionHeader'
import EyebrowBadge from '../../components/ui/EyebrowBadge'

/*
  Enriches the existing Phase 02 /resources/how-to stub in place.
  Every item here links to a real Phase 14 instructional page rather
  than inventing new steps, per this phase's explicit instruction to
  use the documentation pages instead of duplicating them.
*/
const HOW_TO_ITEMS = [
  { title: 'Install the Windows Agent', description: 'Download, install and confirm the agent is running.', href: '/installation/windows' },
  { title: 'Activate Your Account', description: 'Connect an installed agent to your organization.', href: '/installation/activation' },
  { title: 'Set Up a New Employee', description: 'Install the agent and configure the employee together.', href: '/installation/employee-setup' },
  { title: 'Verify Installation', description: 'Confirm the agent is capturing data correctly.', href: '/installation/verification' },
  { title: 'Configure Monitoring Settings', description: 'Set screenshot intervals, privacy controls and attendance policy.', href: '/admin/monitoring-settings' },
  { title: 'Set Up Employees and Teams', description: 'Organize employees, teams and managers in the admin portal.', href: '/admin/employees' },
  { title: 'Export a Report', description: 'Export a report to CSV, Excel or PDF.', href: '/reports/export-reports' },
  { title: 'Review Activity and Attendance', description: 'Check incoming data in the manager workspace.', href: '/manager/manager-insight-workflow' },
]

const FAQ_ITEMS = [
  {
    question: 'How is this How-To page different from the Guides page?',
    answer: 'This page links to real, step-by-step instructional pages for specific tasks, installing, activating, configuring, while the guides page links to conceptual explanations of how ZUZU works.',
  },
  {
    question: 'How many how-to walkthroughs are listed here?',
    answer: 'Eight, covering installation, activation, employee setup, verification, monitoring configuration, team setup, report exports, and reviewing activity and attendance.',
  },
  {
    question: "Where do I start if I'm installing the Windows Agent for the first time?",
    answer: 'The "install the Windows agent" card links to the full installation walkthrough for downloading, installing and confirming the agent is running.',
  },
  {
    question: 'Is there a how-to for exporting reports?',
    answer: 'Yes, the "export a report" card walks through exporting to CSV, Excel or PDF.',
  },
  {
    question: 'Does this page cover Admin Portal configuration steps, or only agent installation?',
    answer: 'Both. "set up employees and teams" and "configure monitoring settings" cover admin portal configuration, alongside the installation-focused items.',
  },
  {
    question: 'Are any of these how-tos relevant to managers rather than admins?',
    answer: 'Yes, "review activity and attendance" links to the manager workspace insight workflow, which is scoped to a manager\'s own team rather than admin-level setup.',
  },
  {
    question: 'What if the specific how-to I need is not listed on this page?',
    answer: 'Browse the full knowledge base for more topics, or contact the ZUZU team directly.',
  },
  {
    question: 'Does the "Verify installation" step confirm data is actually being captured?',
    answer: "Yes, that walkthrough is specifically about confirming the agent is capturing data correctly after install, separate from the install step itself.",
  },
]

export default function HowToPage() {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'How-To' }]

  return (
    <>
      <Seo
        title="How-To | ZUZU"
        description="Practical, step-by-step guides for installing, configuring and using ZUZU."
        path="/resources/how-to"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      <FullWidthHumanHero
        backgroundImage="/images/resources/zuzu-resource-howto.webp"
        imagePosition="center-right"
        breadcrumbs={breadcrumbItems}
        badge="Hands-On Tutorials"
        badgeVariant="purple"
        title="Practical How-To Guides"
        description="Step-by-step walkthroughs for deploying the Windows agent, configuring organization settings, setting privacy policies, and automating exports."
        primaryCta={{ label: 'Install Windows Agent', href: '/installation/windows' }}
        secondaryCta={{ label: 'Full Documentation', href: '/knowledge-base' }}
        featureTags={[
          { label: 'Windows Setup', href: '/installation/windows' },
          { label: 'Employee Setup', href: '/installation/employee-setup' },
          { label: 'Privacy Settings', href: '/admin/monitoring-settings' },
          { label: 'Export Reports', href: '/reports/export-reports' },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionHeader
            eyebrow={<EyebrowBadge>Tutorials</EyebrowBadge>}
            title="Step-by-step implementation walkthroughs"
            description="Clear, actionable guides to help you deploy, configure, and manage ZUZU across your organization."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_TO_ITEMS.map((item) => (
              <FeatureCard key={item.href} title={item.title} description={item.description} href={item.href} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-line bg-surface/30">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow={<EyebrowBadge>FAQ</EyebrowBadge>} title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      <CTA
        title="Need Something Not Covered Here?"
        description="Browse the full knowledge base or reach out to our team."
        primaryAction={{ label: 'Knowledge Base', href: '/knowledge-base' }}
        secondaryAction={{ label: 'Contact us', href: '/company/contact' }}
      />
    </>
  )
}
