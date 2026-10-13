import { PRODUCT_PAGES, CLUSTERS } from '../productPages'

/*
  Thin config wrapper around the existing Phase 04 platform content
  (src/data/productPages.js, left untouched) so it can run through the
  same generic ClusterHub/ClusterPage templates as every later cluster.
*/

// Hub-level FAQ for /platform, the whole-product overview page -- stays at
// "what is ZUZU, broadly" altitude rather than repeating any single
// sub-cluster's own FAQ (see timeAttendance.js for the same pattern on a
// narrower hub). Reuses facts already established across the other
// clusters (Windows-only agent, no payroll integration, 7-day trial) so
// nothing here contradicts a deeper page's answer.
const PLATFORM_HUB_FAQ = [
  {
    question: 'What is ZUZU?',
    answer:
      'An AI-powered workforce visibility platform built around time & attendance, employee activity, screenshot monitoring, AI reports and an admin portal, all built from the same underlying Windows agent data.',
  },
  {
    question: 'How does ZUZU collect data across the platform?',
    answer: "Through a single Windows desktop agent installed on each employee's device, which captures attendance, activity and, where enabled, screenshots.",
  },
  {
    question: 'What operating systems does ZUZU support?',
    answer: 'The Windows agent supports Windows devices. ZUZU does not currently track macOS or Linux devices.',
  },
  {
    question: 'Does the platform include privacy controls?',
    answer: 'Yes, privacy controls sit alongside time & attendance, employee activity and AI reports as a core part of the platform, configurable by admins.',
  },
  {
    question: 'Can I try the whole platform before committing?',
    answer: 'Yes, ZUZU offers a 7-day free trial for up to 10 employees, no card required.',
  },
  {
    question: 'Does ZUZU integrate with payroll or HR systems?',
    answer: 'No, ZUZU does not process payroll or integrate with payroll or accounting systems. Data can be exported as CSV, Excel or PDF for use in other systems.',
  },
  {
    question: 'Who is the ZUZU platform built for?',
    answer: 'Managers and admins overseeing remote, hybrid or in-office teams, through the manager workspace and admin portal respectively.',
  },
  {
    question: 'How is pricing structured across the platform?',
    answer: 'Paid plans are priced by employee headcount at checkout, with the same 7-day free trial available regardless of plan.',
  },
]

export const platformCluster = {
  key: 'platform',
  basePath: '/platform',
  badgeLabel: 'Platform',
  hubTitle: 'ZUZU Platform Overview',
  hubDescription:
    'ZUZU brings workforce monitoring, time tracking, AI reporting and admin controls into a single platform. This overview connects each part of the system to the page where you can explore it in more depth.',
  hubMetaDescription:
    "An overview of the ZUZU platform: workforce monitoring, time tracking, AI reporting and admin controls, grouped by what you're trying to do.",
  groups: CLUSTERS,
  pages: PRODUCT_PAGES,
  faq: PLATFORM_HUB_FAQ,
  crossLinks: [
    { label: 'Time & Attendance Management', href: '/time-attendance' },
    { label: 'Activity & Attendance Ecosystem', href: '/activity' },
    { label: 'Screenshot + Privacy Ecosystem', href: '/screenshot-privacy' },
    { label: 'AI Reports + Workforce Analytics', href: '/ai-analytics' },
    { label: 'Behaviour Intelligence + Manager Workspace', href: '/manager' },
    { label: 'Admin Portal + Security & Governance', href: '/admin' },
    { label: 'Reports + Exports Ecosystem', href: '/reports' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
  ],
}
