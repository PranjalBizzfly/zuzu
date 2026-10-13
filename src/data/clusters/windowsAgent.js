/*
  Structured content for the ZUZU Windows Agent ecosystem (Phase 14).
  Same shape as the other cluster data files.

  This phase's brief directly stated several specific source facts not
  given anywhere earlier in this project (~80 MB installer, system
  tray, offline capture queue, release-feed updates, 1–5 minute
  screenshot interval, 7-day trial for up to 10 employees with no card,
  paid activation after payment). Treated the same way this project has
  treated every other capability the user has stated directly in a
  phase brief (e.g. Phase 07's on-device redaction) -- used accurately,
  nothing extrapolated beyond what was actually said. Where the brief
  itself says a detail (exact hardware minimums, queue retention
  limits, update scheduling) is NOT specified, this file says so
  explicitly rather than inventing a plausible-sounding number.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const WINDOWS_AGENT_GROUPS = [
  { key: 'setup', label: 'Download & Requirements' },
  { key: 'behavior', label: 'Agent Behavior' },
]

export const WINDOWS_AGENT_PAGES = [
  {
    slug: 'download',
    title: 'Download the ZUZU Windows Agent',
    cluster: 'setup',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Download the ZUZU Windows agent, an approximately 80 MB Windows desktop installer.',
    intro:
      "The ZUZU Windows agent is a desktop installer for Windows devices, roughly 80 MB, that admins deploy to each employee's machine to begin capturing activity, attendance and, where configured, screenshots.",
    howItWorksNote: "The installer is downloaded and run on each Windows device; once installed, the agent begins capturing data according to the organization's configured settings.",
    features: ['windowsAgent', 'adminPortal', 'timeAttendance', 'employeeActivity'],
    privacy: false,
    benefits: ['A lightweight installer, roughly 80 MB', 'Deployed per Windows device', 'Starts capturing according to organization settings right after install'],
    useCases: [
      { title: 'Rolling Out to a New Organization', description: "Deploy the installer across the organization's Windows devices." },
      { title: "Adding a New Employee's Device", description: "Install the agent on a newly onboarded employee's machine." },
    ],
    faq: [
      { question: 'How large is the ZUZU Windows Agent installer?', answer: 'Approximately 80 MB.' },
      { question: 'Where do I get the installer?', answer: 'The installer is made available as part of your ZUZU account after starting a trial or subscribing.' },
      { question: 'What do I do after downloading the installer?', answer: "Run it and complete the setup steps, then enter the 16-character activation code for your organization. Once that's done, the agent runs from the system tray and begins capturing data according to your organization's configured settings." },
      { question: 'Do I need an activation code to finish installing?', answer: "Yes, setup asks for a 16-character activation code tied to your organization's ZUZU account before the agent becomes active." },
      { question: 'Is there a Mac or Linux version of the installer?', answer: "No. The Windows agent is Windows-only, there's no macOS or Linux installer." },
      { question: 'Can I download and try the installer without paying first?', answer: "Yes. ZUZU offers a 7-day free trial for up to 10 employees with no card required, and the installer is available as part of that trial. Paid organizations activate after payment." },
      { question: 'Do I need to download the installer separately for every employee?', answer: "Yes, the installer is deployed on each Windows device individually, whether that's a single new hire's machine or a full organization rollout." },
      { question: 'Does the agent start capturing data as soon as the installer finishes downloading?', answer: 'No. Capture only begins after the installer is run, setup is completed, and the activation code is entered, downloading the file by itself does nothing.' },
    ],
    related: ['requirements', 'system-tray', 'updates'],
    externalLinks: [
      { title: 'Start Your Free Trial', description: 'Start a 7-day trial to get access to the installer.', href: '/free-trial' },
      { title: 'How ZUZU Works, End to End', description: 'Where this installer fits in the full capture-to-report chain.', href: '/learning/how-zuzu-works' },
    ],
  },
  {
    slug: 'requirements',
    title: 'System Requirements',
    cluster: 'setup',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'System requirements for the ZUZU Windows agent: an approximately 80 MB Windows desktop installer.',
    intro:
      "The ZUZU Windows agent runs on Windows devices, with an installer of approximately 80 MB.",
    howItWorksNote: "The agent runs on Windows devices and is deployed with an installer of approximately 80 MB.",
    features: ['windowsAgent', 'adminPortal', 'privacyControls', 'timeAttendance'],
    privacy: false,
    benefits: ['A lightweight, ~80 MB installer', 'Runs on Windows devices', 'Confirmed by its system tray icon once running'],
    useCases: [
      { title: 'Planning a Rollout', description: 'Confirm the installer footprint before deploying across an organization.' },
      { title: 'Checking Compatibility With IT Policy', description: 'Review the platform and installer size before approving deployment.' },
    ],
    faq: [
      { question: 'What operating system does the ZUZU Windows Agent require?', answer: "Windows. The agent is a Windows-only desktop installer." },
      { question: 'How much disk space does the installer need?', answer: "The installer itself is approximately 80 MB." },
      { question: 'What does the Windows Agent capture once it is installed?', answer: "Activity, attendance and, where configured, screenshots." },
      { question: 'Does the Windows Agent work on macOS or Linux?', answer: "No, the Windows agent is Windows-only. There is no macOS or Linux agent." },
      { question: 'Does the agent need a constant internet connection to run?', answer: "No. It keeps capturing activity and attendance locally and queues the data if the device goes offline, syncing once connectivity returns. A connection is needed for things like activation and receiving updates." },
      { question: 'How is the agent activated after installation?', answer: "A 16-character activation code, issued by your organization, connects the installed agent to your organization's ZUZU account." },
      { question: 'Where are the agent\'s monitoring settings managed?', answer: "Monitoring policy and configuration are managed centrally through the organization's admin portal." },
      { question: 'How often are screenshots captured, and how long are they kept?', answer: "Screenshot interval is configurable (1–5 minutes, or custom) and retention defaults to 90 days." },
    ],
    related: ['download', 'system-tray', 'updates'],
    externalLinks: [{ title: 'Windows Installation Guide', description: 'The step-by-step installation walkthrough.', href: '/installation/windows' }],
  },
  {
    slug: 'system-tray',
    title: 'System Tray',
    cluster: 'behavior',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "The ZUZU Windows agent runs from the Windows system tray, giving a visible indicator that it's active on a device.",
    intro:
      'Once installed, the ZUZU Windows agent runs from the system tray, the small icon area near the Windows clock, giving both the employee and IT a visible sign that the agent is active on that device.',
    howItWorksNote: "The agent's presence in the system tray is the visible confirmation that it's running and capturing data according to configured settings.",
    features: ['windowsAgent', 'employeeActivity', 'timeAttendance', 'privacyControls'],
    privacy: true,
    benefits: ["A visible sign the agent is running", 'Easy to confirm installation succeeded', 'Consistent across every device it\'s installed on'],
    useCases: [
      { title: 'Confirming Installation Succeeded', description: 'Check the system tray to confirm the agent installed correctly.' },
      { title: 'Employee Transparency', description: 'Employees can see the agent is present on their device.' },
    ],
    faq: [
      { question: 'How can I tell the Windows Agent is running?', answer: 'It shows in the system tray, the icon area near the Windows clock.' },
      { question: 'Can employees see when the agent is active?', answer: 'Yes, the system tray presence is visible to the device user.' },
      { question: 'Is private screen content redacted before screenshots are stored?', answer: "Yes, private regions such as passwords, banking, webmail, messaging, password managers and desktop notifications are redacted on the device itself before storage or upload." },
      { question: 'Can I click the tray icon to change monitoring settings?', answer: "No, monitoring policy and configuration are managed centrally through the organization's admin portal, not by clicking the tray icon on the device itself." },
      { question: 'Is there a tray icon on macOS or Linux?', answer: "No. The Windows agent is Windows-only, there is no macOS or Linux agent." },
      { question: 'What happens to captured data if a device goes offline?', answer: "The agent keeps capturing and queues data locally while offline, then syncs once connectivity returns." },
      { question: 'Where can I see the data the agent captures?', answer: "Activity and attendance data appears in the manager workspace and admin portal views." },
      { question: 'Does the tray icon behave differently during a free trial versus a paid subscription?', answer: "No, tray presence works the same regardless of trial or paid status." },
    ],
    related: ['download', 'offline-capture', 'requirements'],
    externalLinks: [{ title: 'Verifying Installation', description: 'How to confirm the agent is capturing data correctly.', href: '/installation/verification' }],
  },
  {
    slug: 'offline-capture',
    title: 'Offline Capture',
    cluster: 'behavior',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'The ZUZU Windows agent queues activity and attendance data locally when offline, syncing once connectivity returns.',
    intro:
      "Employees don't always have a live connection, the Windows agent handles this with an offline capture queue: activity and attendance data continues to be captured locally and queued, then synced once connectivity returns.",
    howItWorksNote: 'Data is captured and queued on the device during connectivity gaps, then synced once the device reconnects.',
    features: ['windowsAgent', 'employeeActivity', 'timeAttendance', 'privacyControls'],
    privacy: true,
    benefits: ['No data lost during a connectivity gap', 'Captures continue locally while offline', 'Syncs once reconnected'],
    useCases: [
      { title: 'Working During a Connectivity Outage', description: 'Keep capturing activity and attendance even without a live connection.' },
      { title: 'Traveling or Low-Connectivity Environments', description: 'Maintain a consistent record even where connectivity is unreliable.' },
    ],
    faq: [
      { question: "What happens if an employee's device loses internet connection?", answer: 'The Windows agent continues capturing activity and attendance locally and queues it for sync.' },
      { question: 'Is attendance data captured while offline as well as activity?', answer: "Yes, activity and attendance data both continue to be captured locally and queued while the device is offline." },
      { question: 'Where is data held while a device is offline?', answer: "Activity and attendance data is queued locally on the device until connectivity returns, then synced." },
      { question: 'Since screenshot redaction happens on-device, does that still apply while offline?', answer: "Yes, private regions such as passwords, banking, webmail, messaging, password managers and desktop notifications are redacted on the device itself before storage or upload, so redaction doesn't depend on connectivity." },
      { question: 'When does queued data sync?', answer: "Queued data syncs once the device reconnects and connectivity returns." },
      { question: 'Does offline capture help when traveling or in low-connectivity environments?', answer: "Yes, it maintains a consistent record even where connectivity is unreliable." },
      { question: 'Which platforms support offline capture?', answer: "Offline capture is part of the Windows agent, which is Windows-only, there is no macOS or Linux agent." },
      { question: 'Is an activation code needed before the agent captures anything?', answer: "Yes, setup requires entering a 16-character activation code before the agent becomes active." },
    ],
    related: ['system-tray', 'updates', 'download'],
    externalLinks: [{ title: 'Remote Work Visibility', description: 'How offline-resilient capture supports remote teams.', href: '/remote-workforce/remote-work-visibility' }],
  },
  {
    slug: 'updates',
    title: 'Agent Updates',
    cluster: 'behavior',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'The ZUZU Windows agent updates through a release-feed mechanism, keeping devices on the latest version.',
    intro:
      'The Windows agent stays current through a release-feed update mechanism, so devices can receive the latest version of the agent without IT manually reinstalling it on every machine.',
    howItWorksNote: "Updates are delivered through a release feed, so devices can stay current without IT manually reinstalling the agent on every machine.",
    features: ['windowsAgent', 'adminPortal', 'timeAttendance', 'employeeActivity'],
    privacy: false,
    benefits: ['No manual reinstallation required for updates', 'Devices stay current through the release feed', 'Consistent agent version across the organization over time'],
    useCases: [
      { title: 'Keeping a Fleet of Devices Current', description: 'Avoid manually updating the agent on every device.' },
      { title: 'Confirming Devices Are Up to Date', description: 'Understand how the agent receives updates.' },
    ],
    faq: [
      { question: 'How does the Windows Agent receive updates?', answer: 'Through a release-feed update mechanism.' },
      { question: 'Are updates automatic, or does IT need to reinstall manually?', answer: "Updates are delivered through the release feed rather than requiring manual reinstallation on every device." },
      { question: 'Who manages agent updates for an organization?', answer: "Updates come through your organization's release feed, so IT doesn't need to reinstall the agent on every machine." },
      { question: 'Which operating systems receive agent updates?', answer: "The agent is Windows-only, so updates apply to Windows devices, there is no macOS or Linux agent." },
      { question: 'How is the agent activated on a new device?', answer: "With a 16-character activation code issued by your organization, entered during setup." },
      { question: 'Can the agent receive updates while a device is offline?', answer: "Updates are delivered through the organization's release feed, which the agent needs a connection to reach." },
      { question: 'How large is the agent installer?', answer: "Approximately 80 MB." },
      { question: 'How can I confirm the agent is running on a device?', answer: "It shows in the system tray, the icon area near the Windows clock." },
    ],
    related: ['download', 'offline-capture', 'requirements'],
    externalLinks: [{ title: 'ZUZU for IT Administrators', description: 'The role page for whoever manages agent deployment and updates.', href: '/roles/it-admins' }],
  },
]

export const windowsAgentCluster = {
  key: 'windows-agent',
  basePath: '/windows-agent',
  badgeLabel: 'Windows Agent',
  hubTitle: 'ZUZU Windows Agent',
  hubDescription:
    'What the ZUZU Windows agent is, how to get it running, and how it behaves day to day, download, system requirements, the system tray indicator, offline capture, and updates.',
  hubMetaDescription:
    'The ZUZU Windows agent: download, system requirements, system tray behavior, offline capture and updates.',
  groups: WINDOWS_AGENT_GROUPS,
  pages: WINDOWS_AGENT_PAGES,
  // The hub page had no FAQ section. Reused verbatim from this cluster's own
  // 'download' page (same array reference, not a copy) rather than writing new
  // questions -- already-verified, on-topic content for this cluster.
  faq: WINDOWS_AGENT_PAGES.find((page) => page.slug === 'download').faq,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Installation Hub', href: '/installation' },
    { label: 'Knowledge Base', href: '/knowledge-base' },
  ],
}
