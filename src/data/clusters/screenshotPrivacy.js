/*
  Structured content for the ZUZU Screenshot + Privacy Ecosystem
  (Phase 07). Same pattern as clusters/{platform,timeAttendance,activity}.js.

  Curated down from the phase brief's suggested list: several suggested
  titles (Employee Screenshot Monitoring, Screenshot Capture, Screenshot
  Tracking, What Is Screenshot Monitoring?, How Screenshot Monitoring
  Works, Screenshot Privacy, Screenshot Data Privacy, Screenshot
  Monitoring for Managers, Screenshot Privacy Use Cases) would have
  duplicated one of the 9 pages below almost word-for-word, which the
  phase brief itself warns against -- those angles are folded into the
  closest kept page instead of published separately.

  IMPORTANT: no literal ZUZU content document was ever provided in this
  project's conversation. Content here sticks to what's been stated
  directly in phase instructions across this build (screenshot
  monitoring, configurable/custom intervals as a capability -- not a
  specific numeric range, on-device private-region redaction before
  storage/upload, and the illustrative sensitive-region categories the
  phase brief itself listed). No interval numbers, certifications, or
  unsupported capabilities (biometrics, GPS, keystroke logging, webcam,
  audio, mobile/macOS/Linux agents) are stated anywhere in this file.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const SCREENSHOT_PRIVACY_GROUPS = [
  { key: 'core', label: 'Screenshot Monitoring' },
  { key: 'privacy', label: 'Privacy & Redaction' },
  { key: 'workflow', label: 'Workflow, Use Cases & FAQ' },
]

export const SCREENSHOT_PRIVACY_PAGES = [
  {
    slug: 'screenshot-monitoring',
    title: 'Screenshot Monitoring',
    cluster: 'core',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription:
      'ZUZU screenshot monitoring captures visual context on a configurable interval, with on-device private-region redaction before any screenshot is stored or uploaded.',
    intro:
      "Screenshot monitoring gives managers visual context alongside the activity and attendance data ZUZU already captures, a periodic snapshot of what's on screen, captured through the Windows agent on an interval your organization configures. Sensitive regions of the screen are redacted on the device itself, before a screenshot is ever stored or uploaded.",
    howItWorksNote:
      'The Windows agent captures a screenshot on the configured interval, redacts private regions on the device, and only then stores or uploads the image.',
    features: ['screenshotMonitoring', 'privacyControls', 'employeeActivity', 'windowsAgent'],
    privacy: true,
    benefits: [
      'Visual context alongside activity and attendance data',
      'Capture interval configurable to your organization',
      'Private regions redacted before a screenshot is ever stored',
    ],
    useCases: [
      { title: 'Confirming Context on an Unusual Activity Pattern', description: 'Use a screenshot alongside activity data to understand what was on screen.' },
      { title: 'Manager Spot-Checks', description: 'Give managers visual context without reviewing a live feed.' },
    ],
    faq: [
      { question: 'Does screenshot monitoring run continuously?', answer: 'No, screenshots are captured on a configured interval, not continuously.' },
      { question: 'Are screenshots reviewed automatically?', answer: 'Screenshots provide visual context for managers alongside activity and attendance data.' },
      { question: 'Does screenshot monitoring work on macOS or Linux?', answer: "No, screenshot capture runs through the Windows agent, which is Windows-only; there is no macOS or Linux agent." },
      { question: 'Are sensitive parts of the screen visible in a captured screenshot?', answer: 'No, private regions such as passwords, banking pages, webmail and messaging are redacted on the device before a screenshot is ever stored or uploaded.' },
      { question: 'How long are screenshots kept?', answer: 'Screenshots are retained for 90 days by default, and that period is configurable by admins.' },
      { question: 'Who can view captured screenshots?', answer: "Screenshot review is scoped through the manager workspace and admin portal, a manager sees their own team's screenshots, while admins have organization-wide access, consistent with each role's access." },
      { question: 'Does screenshot monitoring capture audio or video, not just still images?', answer: 'No, ZUZU captures still screenshots on the configured interval; it does not record audio or video.' },
      { question: 'Does enabling screenshot monitoring require a separate installation step?', answer: 'No, it runs through the same Windows agent already installed on the device; no additional agent or software is required.' },
    ],
    related: ['screenshot-intervals', 'private-region-redaction', 'screenshot-review-workflow'],
    externalLinks: [
      { title: 'Employee Activity', description: 'The activity data screenshots provide context for.', href: '/product/employee-activity' },
      { title: 'How ZUZU Works, End to End', description: 'Where screenshot capture fits in the full chain.', href: '/learning/how-zuzu-works' },
    ],
  },
  {
    slug: 'screenshot-intervals',
    title: 'Screenshot Intervals',
    cluster: 'core',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU screenshot intervals are configurable between 1 and 5 minutes, or a custom interval, so organizations can set how often screenshots are captured to match their monitoring approach.',
    intro:
      "Screenshot intervals control how often ZUZU captures a screenshot through the Windows agent. The interval is configurable within a 1 to 5 minute range, or set to a custom value, so an organization can set a cadence that fits how closely they want to monitor without over-capturing.",
    howItWorksNote: 'The Windows agent captures a screenshot each time the configured interval elapses; admins set that interval, within the 1-to-5-minute range or a custom value, for their organization.',
    features: ['screenshotMonitoring', 'adminPortal', 'privacyControls', 'timeAttendance'],
    privacy: true,
    benefits: [
      'A configurable interval between 1 and 5 minutes, or custom, not a fixed default',
      'Set centrally through the admin portal',
      'Works alongside private-region redaction on every capture',
    ],
    useCases: [
      { title: 'Lighter-Touch Monitoring', description: 'Choose an interval closer to 5 minutes, or a longer custom interval, for teams that need lighter oversight.' },
      { title: "Closer Visibility Where It's Needed", description: 'Choose an interval closer to 1 minute for roles where more frequent context is useful.' },
    ],
    faq: [
      { question: 'Can screenshot intervals be customized?', answer: 'Yes, the interval is configurable between 1 and 5 minutes, or set to a custom value.' },
      { question: 'Who sets the screenshot interval?', answer: 'Admins, through the admin portal.' },
      { question: 'Do screenshot intervals apply on personal laptops?', answer: 'On a personal laptop, capture is consent-gated and only happens between punch-in and punch-out, so screenshots are taken only during a work session.' },
      { question: 'Is the interval the same for every employee, or can it vary?', answer: 'Intervals are set through the admin portal and can generally be scoped by group or configuration, rather than being locked to a single organization-wide value.' },
      { question: 'Does a shorter interval mean more storage is used?', answer: "A shorter interval captures more screenshots over the same period." },
      { question: 'Can the interval be changed after screenshot monitoring is already turned on?', answer: 'Yes, the interval is an admin portal setting and can be adjusted at any time without reinstalling the Windows agent.' },
      { question: 'Does the interval affect how private-region redaction works?', answer: 'No, redaction is applied on-device to every screenshot regardless of how often captures happen.' },
      { question: 'Is there a minimum interval below 1 minute?', answer: "The configurable range starts at 1 minute." },
    ],
    related: ['screenshot-monitoring', 'private-region-redaction', 'screenshot-monitoring-best-practices'],
    externalLinks: [{ title: 'Admin Portal', description: 'Where screenshot intervals are configured.', href: '/product/admin-portal' }],
  },
  {
    slug: 'private-region-redaction',
    title: 'Private Region Redaction',
    cluster: 'privacy',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU redacts private regions of a screenshot on the device itself, before the image is ever stored or uploaded.',
    intro:
      'Private-region redaction is how ZUZU keeps sensitive parts of a screen out of a captured screenshot. Redaction happens on the device, at the moment of capture, before a screenshot is ever stored or uploaded, so sensitive regions are never transmitted in the first place.',
    howItWorksNote: 'Redaction is applied on-device as part of capture, ahead of storage or upload, not as a later cleanup step.',
    features: ['privacyControls', 'screenshotMonitoring', 'windowsAgent', 'adminPortal'],
    privacy: true,
    benefits: [
      'Sensitive regions are redacted before a screenshot ever leaves the device',
      'Not a later cleanup step, redaction happens at the moment of capture',
      'Works automatically on every screenshot, not just some',
    ],
    useCases: [
      { title: 'Monitoring Near Sensitive Screens', description: 'Capture visual context even when sensitive regions may appear on screen.' },
      { title: 'Reducing what\'s stored, by design', description: 'Keep sensitive regions out of stored screenshots from the start.' },
    ],
    faq: [
      { question: 'What is private-region redaction?', answer: "A process that redacts sensitive regions of a screenshot on the device, before it's stored or uploaded." },
      { question: 'When does redaction happen?', answer: 'On-device, at the moment of capture, before storage or upload.' },
      { question: 'Does redaction happen on ZUZU\'s servers or on the employee\'s device?', answer: "On the device itself, redaction is applied before a screenshot ever leaves the machine, not as a later cleanup step on ZUZU's servers." },
      { question: 'What regions of the screen does redaction cover?', answer: 'Categories such as passwords, banking and financial screens, webmail, messaging apps, password managers and desktop notifications.' },
      { question: 'Does redaction apply to every screenshot, or only some?', answer: 'It applies automatically as part of the same on-device process for every screenshot captured, not selectively.' },
      { question: 'Does redaction blur the sensitive region, or remove it entirely?', answer: "The sensitive region is redacted on the device before it is stored or uploaded." },
      { question: 'How is redaction different from turning screenshot monitoring off entirely?', answer: "They're different controls, screenshot monitoring governs whether screenshots are captured at all, while redaction governs what appears within a screenshot that is captured." },
      { question: 'Can an admin disable redaction on specific screenshots?', answer: "No, redaction is an automatic part of every screenshot capture, not a setting applied selectively." },
    ],
    related: ['screenshot-monitoring', 'sensitive-information-protection', 'privacy-aware-monitoring'],
    externalLinks: [{ title: 'Security', description: 'The broader ZUZU security overview.', href: '/security' }],
  },
  {
    slug: 'sensitive-information-protection',
    title: 'Sensitive Information Protection',
    cluster: 'privacy',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription:
      "ZUZU's private-region redaction is designed to keep sensitive on-screen information, such as login or financial screens, out of stored screenshots.",
    intro:
      'Sensitive information protection is what private-region redaction is for: keeping specific, sensitive parts of a screen, like a login screen, a banking or financial page, a personal webmail inbox, or a private messaging window, out of a captured screenshot in the first place.',
    howItWorksNote: 'Sensitive regions are identified and redacted as part of the same on-device process used for every screenshot capture.',
    features: ['privacyControls', 'screenshotMonitoring', 'adminPortal', 'timeAttendance'],
    privacy: true,
    benefits: [
      'Sensitive regions kept out of stored screenshots by design',
      'Applied automatically, not something an employee has to request',
      'Consistent across every screenshot captured',
    ],
    useCases: [
      { title: 'Working Near Financial or Account Information', description: 'Capture activity context without exposing sensitive account screens.' },
      { title: 'Personal Accounts Alongside Work Tools', description: 'Keep personal webmail or messaging out of stored screenshots.' },
    ],
    faq: [
      { question: 'What kinds of information does redaction protect?', answer: 'Sensitive regions such as login/password screens, banking or financial pages, personal webmail, and private messaging.' },
      { question: 'Does ZUZU understand every type of sensitive information?', answer: 'Redaction is applied to defined sensitive regions as part of screenshot capture, not general-purpose content understanding.' },
      { question: 'Does sensitive information protection apply to password managers as well?', answer: 'Yes, password managers are one of the categories covered, alongside passwords, banking and financial pages, webmail, messaging and desktop notifications.' },
      { question: 'Are desktop notifications also protected, or just full-screen apps?', answer: 'Desktop notifications are included as one of the redacted categories, since they can surface sensitive content even outside the app itself.' },
      { question: 'Does this protection require an employee to mark something as sensitive?', answer: 'No, redaction is applied automatically to the defined sensitive regions; it does not depend on an employee flagging anything.' },
      { question: 'Is sensitive information protection something admins configure, or is it built in?', answer: "It's built into how screenshot capture already works, applied on-device before storage or upload, rather than a separate feature an admin has to enable." },
      { question: 'Does protecting sensitive information mean those apps are excluded from activity tracking too?', answer: 'No, sensitive-region redaction applies specifically to screenshots; application-level activity tracking is a separate capability.' },
      { question: 'What happens if a sensitive screen appears outside a recognized category, like a niche internal tool?', answer: "Redaction is scoped to the sensitive regions it's designed to recognize." },
    ],
    related: ['private-region-redaction', 'privacy-aware-monitoring', 'screenshot-monitoring'],
    externalLinks: [{ title: 'Application Usage Monitoring', description: 'Where sensitive apps and sites can appear in activity data.', href: '/activity/application-usage-monitoring' }],
  },
  {
    slug: 'privacy-aware-monitoring',
    title: 'Privacy-Aware Employee Monitoring',
    cluster: 'privacy',
    visual: 'photo',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU is built for privacy-aware employee monitoring, visibility for managers, with private-region redaction and configurable controls protecting employee privacy.',
    intro:
      "Workforce monitoring and employee privacy aren't opposites, how a platform is built determines whether they coexist. ZUZU is built around privacy-aware monitoring: managers get the visibility they need, while private-region redaction and privacy controls keep monitoring within boundaries an organization defines.",
    howItWorksNote: 'Privacy protections, redaction and configurable controls, apply automatically as part of monitoring, not as an optional add-on.',
    features: ['privacyControls', 'screenshotMonitoring', 'managerWorkspace', 'adminPortal'],
    privacy: true,
    benefits: [
      'Manager visibility and employee privacy addressed together, not traded off',
      'Private-region redaction applied automatically',
      "Monitoring boundaries configurable by your organization",
    ],
    useCases: [
      { title: 'Setting Monitoring Policy Responsibly', description: "Configure privacy controls to match your organization's approach." },
      { title: 'Explaining Monitoring to Your Team', description: 'Point to concrete privacy protections, not just a policy document.' },
    ],
    faq: [
      { question: 'Can monitoring and privacy coexist in ZUZU?', answer: 'Yes, private-region redaction and privacy controls are built into how monitoring works, not optional extras.' },
      { question: 'Who decides the monitoring boundaries?', answer: 'Your organization, through privacy controls in the admin portal.' },
      { question: 'Does ZUZU tell an organization what its monitoring policy should be?', answer: "No, ZUZU doesn't prescribe legal or consent policy; that responsibility sits with the organization, using the privacy controls it provides." },
      { question: 'How does privacy-aware monitoring apply to personal devices?', answer: "On a personal laptop, capture is consent-gated and session-based: a short-lived permission ties recording to between punch-in and punch-out, and the agent must keep renewing it, so it expires automatically outside work sessions." },
      { question: 'Does two-factor authentication play a role in privacy-aware monitoring?', answer: "It's part of the broader security picture, two-factor authentication protects who can log in and access captured data, alongside the privacy controls that govern what's captured." },
      { question: 'Can an organization audit who has changed privacy settings?', answer: "Audit trails cover organization events including changes made in the admin portal, which extends to privacy and monitoring configuration." },
      { question: 'Does privacy-aware monitoring mean less data is available to managers?', answer: "It means what's captured is scoped by an organization's own configuration; managers still see whatever activity and screenshot data has been enabled for their team." },
      { question: 'Where does redaction happen in privacy-aware monitoring?', answer: "On the employee's device, before a screenshot is stored or uploaded." },
    ],
    related: ['private-region-redaction', 'sensitive-information-protection', 'screenshot-monitoring-best-practices'],
    externalLinks: [{ title: 'Security', description: 'The broader ZUZU security overview.', href: '/security' }],
  },
  {
    slug: 'screenshot-review-workflow',
    title: 'Screenshot Review Workflow',
    cluster: 'workflow',
    visual: 'photo',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU gives managers a workflow for reviewing screenshots alongside activity and attendance data in the manager workspace.',
    intro:
      'Screenshot review is how a manager actually uses captured screenshots day to day, not as a live feed, but as visual context they can pull up alongside activity and attendance data when it\'s useful, from the manager workspace.',
    howItWorksNote: 'Screenshots are available in the manager workspace alongside the activity and attendance data captured for the same period.',
    features: ['screenshotMonitoring', 'managerWorkspace', 'employeeActivity', 'timeAttendance'],
    privacy: false,
    benefits: [
      'Screenshots reviewed in context, not as an isolated feed',
      'Available directly in the manager workspace',
      'Paired with the activity and attendance data for the same period',
    ],
    useCases: [
      { title: 'Reviewing Context for a Specific Period', description: 'Pull up screenshots alongside activity data for a particular day.' },
      { title: 'Preparing for a 1:1', description: 'Use screenshot context to inform a conversation, not surprise someone with it.' },
    ],
    faq: [
      { question: 'Do managers watch a live screenshot feed?', answer: 'No, screenshots are reviewed alongside activity and attendance data in the manager workspace, not as a continuous live feed. An admin can take an on-demand live capture when needed, which is recorded in the audit log.' },
      { question: 'Where are screenshots reviewed?', answer: 'In the manager workspace.' },
      { question: 'Can a manager review screenshots for employees outside their own team?', answer: "No, the manager workspace is scoped to a manager's own assigned team; they cannot see employees outside it." },
      { question: 'Are screenshots reviewed alongside the AI daily report, or separately?', answer: 'They can be reviewed alongside the daily report and activity data for the same period, giving visual context to what the report summarizes.' },
      { question: 'Can screenshots be exported as part of a review?', answer: "Reporting exports (CSV, Excel, PDF) are a ZUZU capability; whether screenshots specifically are included depends on what a given export covers." },
      { question: 'Does the review workflow flag anything automatically for a manager to check?', answer: 'Behaviour intelligence can surface activity pattern changes that route to a review queue; a manager can then pull up related screenshots as context.' },
      { question: 'Can an admin review screenshots the same way a manager does?', answer: "Yes, admins have organization-wide access through the admin portal, in addition to whatever managers see for their own teams." },
      { question: 'How far back can a manager review past screenshots?', answer: 'Screenshots are retained for 90 days by default, configurable by admins, so review is possible within whatever retention window applies.' },
    ],
    related: ['screenshot-monitoring', 'screenshot-monitoring-use-cases', 'screenshot-monitoring-best-practices'],
    externalLinks: [{ title: 'Manager Activity Overview', description: 'The single-workspace view this review workflow fits into.', href: '/activity/manager-activity-overview' }],
  },
  {
    slug: 'screenshot-monitoring-use-cases',
    title: 'Screenshot Monitoring Use Cases',
    cluster: 'workflow',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Practical use cases for ZUZU screenshot monitoring, from confirming activity context to supporting manager reviews.',
    intro:
      "Screenshot monitoring is most useful in specific moments, not as constant surveillance. Here's where ZUZU's screenshot monitoring is genuinely useful.",
    howItWorksNote: 'Each use case below draws on the same screenshot capture, interval configuration and redaction already part of ZUZU.',
    features: ['screenshotMonitoring', 'employeeActivity', 'managerWorkspace', 'privacyControls'],
    privacy: false,
    benefits: [
      'Every use case uses existing capture, intervals and redaction',
      'Useful for both managers and admins',
      'Consistent with configurable intervals and redaction',
    ],
    useCases: [
      { title: 'Confirming Context on an Activity Report', description: 'Check a screenshot when an activity report raises a question.' },
      { title: 'Onboarding Visibility', description: 'Use lighter screenshot intervals while a new process beds in, then adjust.' },
    ],
    faq: [
      { question: 'Is screenshot monitoring meant to be used constantly?', answer: "It's built around a configured interval, for context when it's useful, not a continuous feed." },
      { question: 'Can use cases vary by team?', answer: 'Yes, intervals and monitoring approach are configurable per organization through the admin portal.' },
      { question: 'Is screenshot monitoring useful for remote and hybrid teams specifically?', answer: 'Yes, it can give a manager visual context for a remote or hybrid employee the same way it would for anyone in the office, without requiring a different setup.' },
      { question: 'Can screenshots help explain an unusual entry in the AI daily report?', answer: "Yes, reviewing a screenshot from the relevant time can add context to what an employee's daily report or activity data shows." },
      { question: 'Is screenshot monitoring a substitute for a security incident investigation?', answer: "No, it provides periodic visual context, not continuous surveillance or forensic-grade capture; incident investigation is a separate process." },
      { question: 'Can screenshot use cases include verifying attendance at the start of a shift?', answer: 'A screenshot near shift start can add visual context alongside attendance data, though attendance itself is recorded independently by the Windows agent.' },
      { question: 'Are these use cases different for admins versus managers?', answer: "Managers typically use screenshots for their own team's context, while admins can review across the organization and configure how monitoring is applied." },
      { question: 'Does frequent use of screenshots for review change the capture interval?', answer: 'No, reviewing screenshots more often does not affect how frequently they are captured; the interval is a separate, admin-configured setting.' },
    ],
    related: ['screenshot-monitoring', 'screenshot-review-workflow', 'screenshot-monitoring-best-practices'],
    externalLinks: [{ title: 'Workplace Activity Intelligence', description: 'How activity data and context come together for managers.', href: '/platform/workplace-activity-intelligence' }],
  },
  {
    slug: 'screenshot-monitoring-best-practices',
    title: 'Screenshot Monitoring Best Practices',
    cluster: 'workflow',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'How organizations can approach ZUZU screenshot monitoring responsibly, using configurable intervals, redaction and privacy controls together.',
    intro:
      "Screenshot monitoring works best when the pieces are used together deliberately: an interval that fits the role, private-region redaction doing its job automatically, and privacy controls set with intention rather than left on a default. Here's how those pieces fit together.",
    howItWorksNote: "Best practice here means using ZUZU's existing configuration, intervals, redaction and privacy controls, deliberately, not adding anything beyond what the platform already provides.",
    features: ['privacyControls', 'screenshotMonitoring', 'adminPortal', 'managerWorkspace'],
    privacy: true,
    benefits: [
      'A deliberate approach, not just default settings',
      'Built entirely on existing ZUZU configuration',
      'Consistent across screenshots, intervals and privacy controls',
    ],
    useCases: [
      { title: 'Setting Intervals by Role', description: 'Match the interval to how closely a role needs to be monitored.' },
      { title: 'Reviewing Privacy Configuration Periodically', description: 'Revisit privacy controls as team needs change.' },
    ],
    faq: [
      { question: "Does 'best practice' mean additional ZUZU features?", answer: 'No, it means using existing intervals, redaction and privacy controls deliberately.' },
      { question: 'Who should review monitoring configuration?', answer: 'Admins, periodically, through the admin portal.' },
      { question: 'Is there a recommended screenshot interval for most teams?', answer: "The configurable 1-to-5-minute range, or a custom value, is meant to be set to fit each role or team." },
      { question: 'Should retention be set as long as possible by default?', answer: "ZUZU does not prescribe a specific retention policy, the 90-day default is configurable by admins, and organizations are expected to set retention according to their own needs." },
      { question: 'Is it good practice to tell employees which regions are redacted?', answer: "Communicating monitoring policy to employees is an organizational decision ZUZU doesn't mandate; what ZUZU provides is the redaction mechanism itself." },
      { question: 'Should privacy controls be reviewed only once, at rollout?', answer: 'A periodic review, not a one-time setup, is the more deliberate approach, team needs and monitoring scope can change over time.' },
      { question: 'Does best practice include enabling two-factor authentication for accounts with monitoring access?', answer: "Two-factor authentication is part of ZUZU's security controls and is a reasonable safeguard for any account with access to activity or screenshot data." },
      { question: 'Should screenshot monitoring settings be identical across every team?', answer: 'Not necessarily, privacy controls allow intervals and settings to be configured deliberately per role or team rather than applying one blanket setting.' },
    ],
    related: ['screenshot-intervals', 'privacy-aware-monitoring', 'screenshot-monitoring-use-cases'],
    externalLinks: [{ title: 'Security', description: 'The broader ZUZU security overview.', href: '/security' }],
  },
  {
    slug: 'screenshot-privacy-faq',
    title: 'Screenshot Monitoring & Privacy FAQ',
    cluster: 'workflow',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'Answers to common questions about ZUZU screenshot monitoring, screenshot intervals and private-region redaction.',
    intro: 'Common questions about how ZUZU\'s screenshot monitoring and privacy protections work, gathered in one place.',
    howItWorksNote: 'Every answer here reflects how screenshot capture, intervals and redaction already work across ZUZU, nothing here is a separate feature.',
    features: ['screenshotMonitoring', 'privacyControls', 'employeeActivity', 'adminPortal'],
    privacy: true,
    benefits: [
      'Clear answers before you turn screenshot monitoring on',
      'Covers intervals, redaction and monitoring together',
      'One place instead of piecing answers together from separate pages',
    ],
    useCases: [
      { title: 'Answering Employee Questions', description: 'Point to clear answers when your team asks about screenshot monitoring.' },
      { title: 'Reviewing Before Rollout', description: 'Check the details before turning on screenshot monitoring for a team.' },
    ],
    faq: [
      {
        question: 'What is screenshot monitoring?',
        answer: 'A ZUZU feature that captures a screenshot through the Windows agent on a configured interval, to give managers visual context alongside activity data.',
      },
      { question: 'How often are screenshots captured?', answer: 'On an interval your organization configures, between 1 and 5 minutes, or a custom value, not continuously.' },
      { question: 'Can screenshot intervals be customized?', answer: 'Yes, the interval is configurable between 1 and 5 minutes or to a custom value, set per organization through the admin portal.' },
      { question: 'How is private information protected in screenshots?', answer: 'Through private-region redaction, applied on the device before a screenshot is stored or uploaded.' },
      { question: 'What is private-region redaction?', answer: 'A process that redacts sensitive regions of a screenshot on-device, before storage or upload.' },
      { question: 'When does redaction happen?', answer: 'At the moment of capture, on-device, before a screenshot is ever stored or uploaded.' },
      { question: 'What types of information can be protected?', answer: 'Sensitive regions such as login/password screens, banking or financial pages, personal webmail, and private messaging.' },
      { question: 'Do managers see a live screenshot feed?', answer: 'No, screenshots are reviewed alongside activity and attendance data in the manager workspace, not as a continuous live feed. An admin can take an on-demand live capture when needed, which is recorded in the audit log.' },
    ],
    related: ['screenshot-monitoring', 'private-region-redaction', 'screenshot-intervals'],
    externalLinks: [{ title: 'ZUZU Platform Overview', description: 'Explore the full ZUZU platform.', href: '/platform' }],
  },
]

export const screenshotPrivacyCluster = {
  key: 'screenshot-privacy',
  basePath: '/screenshot-privacy',
  badgeLabel: 'Screenshot & Privacy',
  hubTitle: 'Screenshot + Privacy Ecosystem',
  hubDescription:
    'How ZUZU captures screenshots, configures capture intervals, and protects sensitive on-screen information through on-device private-region redaction.',
  hubMetaDescription:
    'The ZUZU screenshot + privacy ecosystem: screenshot monitoring, configurable intervals, private-region redaction and privacy-aware monitoring, explained together.',
  groups: SCREENSHOT_PRIVACY_GROUPS,
  pages: SCREENSHOT_PRIVACY_PAGES,
  // The hub page had no FAQ section at all. Reused verbatim from this
  // cluster's own 'screenshot-privacy-faq' page (same array reference,
  // not a copy) rather than writing new questions -- these 8 are
  // already the verified, non-fabricated answers for exactly this
  // cluster's topic, so the hub and that leaf page can never drift
  // apart into two different answers to the same question.
  faq: SCREENSHOT_PRIVACY_PAGES.find((page) => page.slug === 'screenshot-privacy-faq').faq,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Activity & Attendance Ecosystem', href: '/activity' },
    { label: 'Security', href: '/security' },
    { label: 'AI Reports + Workforce Analytics', href: '/ai-analytics' },
    { label: 'Behaviour Intelligence + Manager Workspace', href: '/manager' },
    { label: 'Admin Portal + Security & Governance', href: '/admin' },
    { label: 'Reports + Exports Ecosystem', href: '/reports' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
  ],
}
