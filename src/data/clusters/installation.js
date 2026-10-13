/*
  Structured content for the ZUZU Installation ecosystem (Phase 14).
  Same shape as the other cluster data files. Trial/activation facts
  (7-day trial, up to 10 employees, no card required, paid activation
  after payment) come directly from this phase's brief, the same way
  every other user-stated capability in this project has been used.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const INSTALLATION_GROUPS = [{ key: 'setup', label: 'Installation & Activation' }]

export const INSTALLATION_PAGES = [
  {
    slug: 'windows',
    title: 'Windows Installation Guide',
    cluster: 'setup',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Step-by-step guide to installing the ZUZU Windows agent: download, install, launch, and verify.',
    intro:
      "A practical walkthrough of getting the ZUZU Windows agent running: download the installer, run it, confirm it's active in the system tray, and connect it to your organization.",
    howItWorksNote: 'Installation follows a simple path for the Windows agent: download the ~80 MB installer, run it, and confirm system tray presence.',
    features: ['windowsAgent', 'adminPortal', 'timeAttendance', 'employeeActivity'],
    privacy: false,
    benefits: ['A clear, practical installation path', 'Just download, run and confirm', 'Confirmed visually through the system tray'],
    useCases: [
      { title: 'First-Time Setup for a New Organization', description: 'Walk through installation for the first device.' },
      { title: "Onboarding a New Employee's Device", description: 'Repeat the same steps for each new device.' },
    ],
    faq: [
      { question: 'What are the steps to install the ZUZU Windows Agent?', answer: "Download the installer, run it on the Windows device, and confirm it's active in the system tray." },
      { question: 'How do I know installation succeeded?', answer: 'The agent icon appears in the system tray once running.' },
      { question: 'How large is the ZUZU Windows Agent installer?', answer: 'About 80 MB, a lightweight download that installs and then runs quietly from the system tray.' },
      { question: 'Does the Windows Agent run on macOS or Linux?', answer: "No, ZUZU's desktop agent is Windows-only; there is no macOS or Linux agent to install." },
      { question: 'What happens if the device loses its internet connection right after installation?', answer: 'The agent keeps queuing captured data locally while offline and uploads it once the connection is restored, so a temporary disconnect after install is not a problem.' },
      { question: 'Does the Windows Agent update itself after installation?', answer: "Yes, once installed, it receives updates automatically from your organization's release feed, without a separate manual update step." },
      { question: 'What does the Windows Agent start capturing once it\'s running?', answer: "Activity, attendance, application usage and screenshots, according to whatever your organization has configured, capture begins as soon as the agent is active." },
      { question: 'Does the agent need to be running for ZUZU to capture anything?', answer: "Yes, capture only happens while the agent is active in the system tray; if it isn't running, nothing is being recorded for that device." },
    ],
    related: ['activation', 'employee-setup', 'verification'],
    externalLinks: [{ title: 'Download the Windows Agent', description: 'Get the installer to begin.', href: '/windows-agent/download' }],
  },
  {
    slug: 'activation',
    title: 'Activation',
    cluster: 'setup',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'How activation works for ZUZU: a 7-day free trial for up to 10 employees with no card required, with paid activation after payment.',
    intro:
      "Installing the Windows agent gets it running; activation is what connects a device to your organization's ZUZU account. The trial runs for 7 days without a card, supporting up to 10 employees, activation for continued use happens after payment.",
    howItWorksNote: 'During the 7-day trial, up to 10 employees can be added without payment; continuing beyond the trial requires paid activation.',
    features: ['adminPortal', 'windowsAgent', 'timeAttendance', 'managerWorkspace'],
    privacy: false,
    benefits: ['A 7-day free trial with no card required', 'Trial supports up to 10 employees', 'Paid activation only after the trial, once you decide to continue'],
    useCases: [
      { title: 'Starting a Trial', description: 'Try ZUZU for 7 days with up to 10 employees, no card required.' },
      { title: 'Continuing After the Trial', description: "Activate a paid account once you're ready to continue." },
    ],
    faq: [
      { question: 'Do I need a credit card to start the ZUZU trial?', answer: "No, the 7-day trial doesn't require a card." },
      { question: 'How many employees can I add during the trial?', answer: 'Up to 10 employees.' },
      { question: 'When does paid activation happen?', answer: 'After payment, once you decide to continue beyond the trial.' },
      { question: 'What is the activation code, and where does it come from?', answer: "A 16-character activation code, issued by your organization, is what connects an installed Windows agent to your organization's ZUZU account." },
      { question: 'Does activation require reinstalling the Windows Agent?', answer: 'No, activation uses the agent you already installed; entering the 16-character code simply connects it to your account, with no reinstall needed.' },
      { question: 'Is the activation code entered once per device or once per organization?', answer: 'The same organization activation code is used to connect each device during setup, linking every installed agent to the same ZUZU account.' },
      { question: 'Can I keep using ZUZU after the 7-day trial?', answer: "Yes, activate a paid account once you're ready to continue." },
      { question: 'How is pricing determined once I move past the trial?', answer: "Pricing is confirmed by employee headcount at checkout, so what you pay is based on how many employees your paid organization covers." },
    ],
    related: ['windows', 'employee-setup', 'verification'],
    externalLinks: [{ title: 'Start 7-Day Free Trial', description: 'Start your 7-day trial with up to 10 employees.', href: '/free-trial' }],
  },
  {
    slug: 'employee-setup',
    title: 'Employee Setup',
    cluster: 'setup',
    visual: 'photo',
    sectionOrder: ORDER_C,
    metaDescription: 'How to set up a new employee in ZUZU: install the Windows agent on their device and configure them in the admin portal.',
    intro:
      "Getting an employee up and running means two things: installing the Windows agent on their device, and making sure they're set up correctly in the admin portal. This page connects the two.",
    howItWorksNote: 'Employee setup combines installing the Windows agent on a device with the employee management workflow in the admin portal.',
    features: ['windowsAgent', 'adminPortal', 'timeAttendance', 'employeeActivity'],
    privacy: false,
    benefits: ['One clear path from new hire to reporting data', 'Links directly to admin portal employee management', 'Consistent for every new employee'],
    useCases: [
      { title: 'Onboarding a New Hire', description: 'Install the agent and configure their account together.' },
      { title: 'Setting Up a Batch of New Employees', description: 'Repeat the same process consistently for multiple hires.' },
    ],
    faq: [
      { question: 'Do I need to configure something in the Admin Portal as well as installing the agent?', answer: 'Yes, installing the Windows agent and organizing the employee in the admin portal are both part of setup.' },
      { question: 'Where do I manage employee records?', answer: "In the admin portal's employee management." },
      { question: "Does a new employee need the Windows Agent installed before or after they're added in the Admin Portal?", answer: 'Either order works in practice, but both steps, installing the agent on their device and adding them in the admin portal, need to happen before activity and attendance data will appear.' },
      { question: 'Can a manager set up a new employee, or does it require admin access?', answer: "Employee setup happens through the admin portal, which is built for admin-level access, it's separate from the manager workspace managers use day to day." },
      { question: 'Does employee setup include configuring what the Windows Agent captures for that person?', answer: 'Yes, monitoring policy, including what activity and screenshot data is captured, is configured centrally in the admin portal alongside the employee record itself.' },
      { question: 'Is there a different setup process for an employee using a personal laptop instead of a company device?', answer: "Yes, on a personal laptop, capture is consent-gated and session-based: a short-lived permission ties recording to between punch-in and punch-out, and the agent has to keep renewing it, so nothing is captured outside a work session." },
      { question: 'Does setup differ for a remote new hire versus an in-office one?', answer: 'No, installing the Windows agent and adding the employee in the admin portal work the same way regardless of whether the device is in an office or remote.' },
      { question: 'What data starts appearing once an employee is fully set up?', answer: 'Activity, attendance, application usage and, where enabled, screenshots, the same data captured for any employee, beginning once the agent is active and the employee is added.' },
    ],
    related: ['windows', 'activation', 'verification'],
    externalLinks: [{ title: 'Employee Management', description: 'The full admin workflow for organizing employees.', href: '/admin/employees' }],
  },
  {
    slug: 'verification',
    title: 'Verifying Installation',
    cluster: 'setup',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'How to confirm the ZUZU Windows agent is installed, activated and capturing data correctly.',
    intro:
      'After installing and activating the Windows agent, it\'s worth confirming everything is actually working, the system tray shows the agent running, and activity or attendance data should start appearing in the manager workspace shortly after.',
    howItWorksNote: 'Verification means checking the system tray for the agent and checking the manager workspace or admin portal for incoming activity and attendance data.',
    features: ['windowsAgent', 'managerWorkspace', 'timeAttendance', 'adminPortal'],
    privacy: false,
    benefits: ['A simple way to confirm setup worked', 'No separate verification tool needed', 'Visible in both the system tray and the manager workspace'],
    useCases: [
      { title: 'Confirming a New Device Is Reporting Data', description: 'Check that a newly installed device is capturing activity.' },
      { title: "Troubleshooting a Device That Isn't Reporting", description: 'Use verification steps before escalating to support.' },
    ],
    faq: [
      { question: 'How do I confirm the Windows Agent is capturing data?', answer: 'Check the system tray for the agent, and check the manager workspace or admin portal for incoming activity and attendance data.' },
      { question: 'When does data start appearing after installation?', answer: "Data begins appearing once the agent is active and the employee has been added in the admin portal." },
      { question: 'Where can I check that screenshots are being captured, not just activity?', answer: 'Screenshot data appears in the same manager workspace and admin portal views as activity and attendance, once screenshot monitoring is enabled for that device.' },
      { question: 'Should I verify from the Admin Portal or the Manager Workspace?', answer: 'Either can confirm data is flowing, the admin portal gives an organization-wide view, while the manager workspace shows it scoped to a manager\'s own team.' },
      { question: 'What if the agent shows in the system tray but no data appears yet?', answer: "The tray icon only shows the agent is running. Data appears once the agent is active (activated with the 16-character code) and the employee has been added in the admin portal, so confirm both." },
      { question: 'Does verification look different for a device that was offline right after installation?', answer: 'No, data queued while offline should appear once the device reconnects; if it still does not, that points to an installation issue rather than expected offline behavior.' },
      { question: 'Does confirming the system tray icon also confirm activation?', answer: 'Not on its own, the tray icon shows the agent is running, but confirming data reaches the manager workspace or admin portal is what verifies activation actually connected the device to your organization.' },
      { question: 'Can an employee verify their own installation, or is that an admin task?', answer: 'Checking the system tray icon is something anyone at the device can do; confirming data appears in reports depends on who has manager workspace or admin portal access.' },
    ],
    related: ['windows', 'activation', 'employee-setup'],
    externalLinks: [{ title: 'Troubleshooting', description: 'What to check if a device still isn\'t reporting data.', href: '/troubleshooting' }],
  },
]

export const installationCluster = {
  key: 'installation',
  basePath: '/installation',
  badgeLabel: 'Installation',
  hubTitle: 'Installing ZUZU',
  hubDescription:
    'The installation journey from download to a fully reporting device: install the Windows agent, activate your account, set up employees, and verify everything is working.',
  hubMetaDescription:
    'How to install the ZUZU Windows agent, activate your account, set up employees, and verify installation.',
  groups: INSTALLATION_GROUPS,
  pages: INSTALLATION_PAGES,
  // The hub page had no FAQ section. Reused verbatim from this cluster's own
  // 'windows' page (same array reference, not a copy) rather than writing new
  // questions -- already-verified, on-topic content for this cluster.
  faq: INSTALLATION_PAGES.find((page) => page.slug === 'windows').faq,
  crossLinks: [
    { label: 'ZUZU Windows Agent', href: '/windows-agent' },
    { label: 'Getting Started', href: '/getting-started' },
    { label: 'Knowledge Base', href: '/knowledge-base' },
  ],
}
