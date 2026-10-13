/*
  Structured content for the ZUZU Remote + Hybrid Workforce Ecosystem
  (Phase 12). Same pattern as the other cluster data files, using the
  `directorySections` mechanism (added in Phase 11) to link out to
  relevant industries and every other cluster instead of duplicating
  their content.

  Heaviest pruning decision yet. The phase brief effectively suggests
  ~60 routes across four largely-synonymous framings of one scenario
  (remote / hybrid / distributed / work-from-home all describe
  employees not sharing one office), plus role-based variants (HR,
  managers, business owners, operations, IT admins, executives) and
  industry combinations. Publishing that literally would mean dozens of
  pages differing only by a swapped-in synonym -- exactly what this
  phase's own text repeatedly warns against ("Do NOT create /remote-it,
  /remote-it-remote... with essentially identical text").

  What was actually built instead:
  - "Remote Workforce Monitoring" was NOT recreated: it already exists
    verbatim as a Phase 04 page (src/data/productPages.js, now linked
    from this cluster's hub and from remote-work-visibility below).
  - Hybrid, distributed-team and work-from-home terminology is folded
    into ONE hub plus a dedicated hybrid-workforce-visibility page,
    rather than three parallel hub structures repeating the same
    content under different labels. /solutions/hybrid-workforce (the
    existing Phase 02 nav stub) remains the canonical entry point,
    cross-linked from here.
  - No role-based pages (remote-workforce-for-hr, -for-managers, etc.)
    were built -- they would not introduce any new capability, only a
    reworded audience, which is the definition of thin content this
    phase asks to avoid. The hub's own content briefly addresses
    different roles instead.
  - No industry combination pages (remote-it, remote-bpo, ...) were
    built; the hub's directory links directly to the existing
    /industries/* pages instead.

  No GPS, geofencing, biometric, badge, or physical-location tracking
  is claimed anywhere -- several FAQ answers explicitly state ZUZU does
  NOT track physical location, rather than leaving the question open.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const REMOTE_WORKFORCE_GROUPS = [
  { key: 'visibility', label: 'Visibility & Attendance' },
  { key: 'reporting', label: 'Reporting & Hybrid' },
  { key: 'manager', label: 'Manager & Use Cases' },
]

// Hub-level FAQ for /remote-workforce -- see timeAttendance.js for the
// pattern.
const REMOTE_WORKFORCE_HUB_FAQ = [
  {
    question: 'Does ZUZU work differently for remote employees than in-office employees?',
    answer: 'No, the same Windows agent captures activity, attendance and screenshot data the same way regardless of where an employee is located.',
  },
  {
    question: "Does ZUZU track an employee's physical location while working remotely?",
    answer: "No, ZUZU does not track GPS or physical location. Visibility is based on Windows agent activity on the employee's device.",
  },
  {
    question: 'Can remote and in-office teams be viewed together in the same dashboard?',
    answer: 'Yes, the manager workspace and admin portal show remote, hybrid and in-office employees the same way, without a separate remote-only view.',
  },
  {
    question: 'Does monitoring change on a personal laptop used for remote work?',
    answer: 'Yes, capture on a personal device is session-gated to only between punch-in and punch-out, through a short-lived, renewable permission.',
  },
  {
    question: 'Can reports be generated separately for a distributed team?',
    answer: 'Yes, reports can be reviewed at the individual, team or organization level, regardless of how distributed the team is.',
  },
  {
    question: 'Does remote workforce visibility require a different setup from in-office monitoring?',
    answer: 'No, it uses the same Windows agent installation and activation process used for any employee.',
  },
  {
    question: 'Does ZUZU support asynchronous or distributed working hours?',
    answer: 'Yes, attendance and hours tracking reflect whenever the Windows agent is active, without assuming a fixed office schedule.',
  },
  {
    question: 'Can admins compare remote and in-office attendance patterns?',
    answer: 'Yes, through workforce analytics, which supports team and organization-level comparisons regardless of work location.',
  },
]

export const REMOTE_WORKFORCE_DIRECTORY = [
  {
    label: 'Relevant industries',
    items: [
      { title: 'Remote Companies', description: 'For remote-first organizations.', href: '/industries/remote-companies' },
      { title: 'IT & SaaS', description: 'For IT and SaaS organizations, often distributed.', href: '/industries/it-saas' },
      { title: 'BPO', description: 'For business process outsourcing teams.', href: '/industries/bpo' },
      { title: 'Startups', description: 'For growing, often remote-friendly teams.', href: '/industries/startups' },
    ],
  },
  {
    label: 'Connected ZUZU ecosystems',
    items: [
      { title: 'Activity & Attendance Ecosystem', description: 'The activity and attendance data behind remote visibility.', href: '/activity' },
      { title: 'Screenshot + Privacy Ecosystem', description: 'Visual context and privacy-aware monitoring.', href: '/screenshot-privacy' },
      { title: 'AI Reports + Workforce Analytics', description: 'AI-generated reports and organization-wide analytics.', href: '/ai-analytics' },
      { title: 'Behaviour Intelligence + Manager Workspace', description: 'Work-pattern insights and the manager review workflow.', href: '/manager' },
      { title: 'Admin Portal + Security & Governance', description: 'Organization-wide configuration and access scoping.', href: '/admin' },
      { title: 'Reports + Exports Ecosystem', description: 'Exporting any report to CSV, Excel or PDF.', href: '/reports' },
    ],
  },
]

export const REMOTE_WORKFORCE_PAGES = [
  {
    slug: 'remote-work-visibility',
    title: 'Remote Work Visibility',
    cluster: 'visibility',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "Read a remote team's day from device data: attendance, application activity and a daily AI report per person, in the manager workspace.",
    intro:
      "A manager whose team works from home can't tell who has started the day, or how it is going, without asking. With ZUZU each person's Windows agent records attendance and application activity, so the manager opens the manager workspace and sees their own team's day, and each employee gets a daily AI report that summarises it. What appears is device activity, not location and not typed content, so it is a prompt for a conversation rather than a verdict.",
    howItWorksNote: "The Windows agent runs in each remote employee's system tray and records attendance and application use; the manager reviews their own team's day in the manager workspace, and the daily AI report adds a written summary per person.",
    features: ['workforceVisibility', 'employeeActivity', 'timeAttendance', 'managerWorkspace'],
    privacy: true,
    benefits: [
      "Start-of-day attendance without a status message",
      "Application activity per person, not just online or offline",
      "A daily AI report per employee to read instead of chasing updates",
    ],
    useCases: [
      { title: "Replacing the morning \"logged on\" message", description: "Open the team's attendance in the manager workspace to see who has started and when, instead of waiting for chat messages." },
      { title: "Preparing for a One-to-One", description: "Read the employee's recent daily AI reports before the call, so the conversation starts from the record rather than from memory." },
    ],
    faq: [
      { question: "Does a remote employee need to be on a company network or VPN?", answer: "No. The agent runs on the Windows device wherever it is. If the connection drops it keeps capturing locally and syncs when the device reconnects." },
      { question: "What does a manager see beyond \"online or offline\"?", answer: "Attendance, application and website usage with how long each was used, idle periods recorded separately from active use, and the daily AI report. Keystrokes and typed content are not captured." },
      { question: "Can the employee see that the agent is running?", answer: "Yes. It runs from the system tray, visible to the employee and to IT. Settings are not changed from the tray; they are managed centrally in the admin portal." },
      { question: "Can a manager look at people outside their own team?", answer: "No. The manager workspace is scoped to the manager's own assigned team. Admins see the whole organisation through the admin portal." },
      { question: "Does ZUZU show where a remote employee is working from?", answer: "No. There is no GPS or location tracking. Everything is based on activity on the employee's device." },
      { question: "How does this work when an employee uses a personal laptop?", answer: "Tracking is consent-gated and only runs between punch-in and punch-out, through a short-lived permission the agent must keep renewing." },
      { question: "What if an employee's activity stops appearing?", answer: "The employee's last-seen time shows whether the agent is running. Documented causes are a deactivated employee, or someone on a personal device who has not punched in for the shift." },
      { question: "Does the activity data prove someone is productive?", answer: "No. It shows attendance and application activity, not output or revenue. Treat it as context for a conversation." },
    ],
    related: ['remote-attendance', 'remote-team-activity', 'remote-manager-workspace'],
    externalLinks: [{ title: 'Remote Workforce Monitoring', description: 'How the Windows agent works the same way regardless of location.', href: '/platform/remote-workforce-monitoring' }],
  },
  {
    slug: 'remote-attendance',
    title: 'Remote Attendance',
    cluster: 'visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "Remote attendance from Windows agent sessions instead of \"logging on\" messages: breaks and reconnects show as separate periods, exportable to CSV, Excel or PDF.",
    intro:
      "Remote attendance often rests on a chat message that says \"logging on\". With ZUZU the record comes from the agent: hours are logged in sessions from device activity, so a break or a reconnect shows as a separate tracked period, and on a company-managed laptop clock-in is captured automatically when the agent starts recording. Managers read it in the manager workspace beside activity, and admins can pull the same record into the attendance & activity roster.",
    howItWorksNote: "Each stretch of agent activity becomes a session in the attendance record; managers review sessions beside application activity in the manager workspace, and they appear in the day-end report and the daily attendance reports.",
    features: ['timeAttendance', 'windowsAgent', 'remoteHybrid', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "Attendance recorded in sessions, not typed in",
      "Breaks and reconnects visible as separate periods",
      "CSV, Excel or PDF export for your own records",
    ],
    useCases: [
      { title: "Checking Who Has Started Today", description: "Open attendance in the manager workspace to see which team members have an active session and when it began." },
      { title: "Pulling a Period of Attendance for HR", description: "Run the attendance & activity roster in the admin portal and export it as CSV, Excel or PDF for the employer's own process." },
    ],
    faq: [
      { question: "What creates an attendance record?", answer: "Activity captured by the Windows agent. On a company-managed device clock-in is captured automatically when the agent starts recording, so there is no manual clock-in step." },
      { question: "Why does one day show more than one session?", answer: "Breaks and reconnects show as separate tracked periods, so a lunch break or a restart appears as its own session rather than being averaged away." },
      { question: "Does attendance follow a fixed shift?", answer: "No. It reflects actual working hours, not a scheduled shift, and it works the same for remote, hybrid and in-office staff." },
      { question: "What happens when the home connection drops during the day?", answer: "The agent keeps capturing attendance and activity locally and syncs on reconnect, so the connection drop does not create a hole in the record." },
      { question: "What if a laptop slept or crashed and the agent saw nothing?", answer: "That stretch is listed in away time for an admin to review next to what the employee says they were doing. Approving it adds the time beside tracked hours and never rewrites them." },
      { question: "Does attendance feed into payroll?", answer: "ZUZU does not process payroll or verify it. Attendance can be exported as CSV, Excel or PDF for the employer's own payroll process." },
      { question: "How is attendance captured on a personal laptop?", answer: "Only between punch-in and punch-out. The employee consents, and the agent keeps renewing a short-lived permission for the session." },
      { question: "Where do managers and admins each read attendance?", answer: "Managers use the manager workspace for their own team. Admins use the admin portal for the whole organisation, including the attendance & activity roster in the report library." },
    ],
    related: ['remote-work-visibility', 'remote-team-activity', 'hybrid-workforce-visibility'],
    externalLinks: [{ title: 'Work Time Tracking Software', description: 'How ZUZU keeps attendance consistent across on-site, remote and hybrid teams.', href: '/platform/work-time-tracking-software' }],
  },
  {
    slug: 'remote-team-activity',
    title: 'Remote Team Activity',
    cluster: 'visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "Read a distributed team as a team: team at a glance in the manager workspace, and on shift now and team health across teams for admins.",
    intro:
      "Checking a distributed team person by person is slow, and it hides the shape of the team's week. In the manager workspace, team at a glance summarises the team's activity and attendance first, and the fuller workspace opens any individual behind a number. Admins get the same view across teams: each manager row in the admin portal shows direct reports, on shift now and a team health state of healthy, watch, needs attention or not enough data.",
    howItWorksNote: "The manager workspace opens on team at a glance and drills into individual attendance and activity; admins compare teams on the managers page and in the where time goes and top applications panels.",
    features: ['employeeActivity', 'managerWorkspace', 'workforceAnalytics', 'remoteHybrid'],
    privacy: false,
    benefits: [
      "Team at a glance before any individual detail",
      "On shift now shows who is working at this moment",
      "Where time goes and top applications for the whole team",
    ],
    useCases: [
      { title: "Before the Weekly Team Call", description: "Open team at a glance and note anyone whose activity looks unusually quiet, as a question to ask rather than an assumption." },
      { title: "Comparing Two Remote Teams", description: "As an admin, use the managers page to set team health and on shift now side by side, then open the team marked watch." },
    ],
    faq: [
      { question: "How is Team at a Glance different from the Manager Workspace?", answer: "Team at a glance is the summarised overview of the team. The workspace is the fuller view, with individual attendance, activity, reports and behaviour insights behind it." },
      { question: "Can a manager open one person from the team view?", answer: "Yes. The team summary is built from the same individual records, and a manager can open any member of their own team." },
      { question: "What do the Team Health states mean?", answer: "Healthy, watch, needs attention and not enough data are signals shown to admins on the managers page. They point to a team worth reviewing; they are not a rating of the manager or the people." },
      { question: "Can two managers share one team?", answer: "Yes, more than one manager can be assigned to the same team, and each sees that team in their own workspace." },
      { question: "Can a manager see a team they are not assigned to?", answer: "No. The manager workspace is scoped to the manager's own team, and managers cannot change settings." },
      { question: "Do team views include screenshots?", answer: "Where screenshots are enabled, the manager can review them for their own team in the manager workspace. They are one input among attendance and application activity." },
      { question: "Which applications is the team spending time in?", answer: "Top applications and where time goes show application and website usage and how long each was used. They do not show typed content." },
      { question: "Can a team-level report be exported?", answer: "Yes. The team analytics overview in the report library can be exported as CSV, Excel or PDF." },
    ],
    related: ['remote-work-visibility', 'remote-attendance', 'remote-workforce-analytics'],
    externalLinks: [{ title: 'Team Activity Reports', description: 'The underlying team-level activity report this draws on.', href: '/activity/team-activity-reports' }],
  },
  {
    slug: 'remote-work-reports',
    title: 'Remote Work Reports',
    cluster: 'reporting',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "Daily AI reports per employee, weekly digest emails to a named manager, and CSV, Excel or PDF exports for remote teams.",
    intro:
      "Remote managers often end up writing their own status summaries because nothing else lands in their inbox. ZUZU produces one AI report per employee per day, covering activity, attendance and screenshot context, and the weekly digest email can go organisation-wide or to a specific manager. When the material has to leave ZUZU, the report library exports to CSV, Excel or PDF.",
    howItWorksNote: "The daily AI report is built per employee from captured activity and attendance; managers browse it by year, month and day or receive the weekly digest, and admins choose from the report library for exports.",
    features: ['aiReports', 'timeAttendance', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "One AI report per employee per day",
      "A weekly digest that can go to a named manager",
      "PDF, Excel and CSV exports",
    ],
    useCases: [
      { title: "Monday-Morning Read", description: "Skim the weekly digest, then open the daily AI reports of anyone the digest points to." },
      { title: "Handing a Report to Leadership", description: "Download the team's report as a PDF, or export an Excel file for a leader who wants to sort the data themselves." },
    ],
    faq: [
      { question: "How far back can I browse the daily AI reports?", answer: "Reports are browsable by year, month and day, and the same reports have daily, weekly and monthly views." },
      { question: "Who receives the email digests?", answer: "A digest can be sent organisation-wide or to a specific manager, so a remote lead can get only their own team's summary." },
      { question: "Does the employee need to be online when a report is built?", answer: "No. Reports are built from data the agent has already captured and synced, not from a live connection at report time." },
      { question: "What is in the Attendance & Activity Roster?", answer: "It is a report in the library that lists attendance and activity by employee, and it exports as CSV, Excel or PDF." },
      { question: "Can I compare two periods for a remote team?", answer: "Yes. Period comparison is in the report library, and workforce analytics accepts any date range." },
      { question: "Who can open a remote employee's reports?", answer: "Their manager, in the manager workspace, and admins through the admin portal. Managers see only their own team." },
      { question: "Do screenshots feed into the daily report?", answer: "Screenshot context is one input to the daily AI report where screenshots are enabled. Capture cadence and retention come from the organisation-wide monitoring policy." },
      { question: "Are findings like Top Performers or Overloaded ratings?", answer: "No. Most improved, top performers, overloaded, disengaged and may need coaching are signals for a person to review, each with the activity behind it, not rankings or automatic actions." },
    ],
    related: ['remote-workforce-analytics', 'remote-team-activity', 'remote-workforce-use-cases'],
    externalLinks: [{ title: 'Export Reports', description: 'Exporting any ZUZU report to CSV, Excel or PDF.', href: '/reports/export-reports' }],
  },
  {
    slug: 'remote-workforce-analytics',
    title: 'Remote Workforce Analytics',
    cluster: 'reporting',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "Trends across remote teams over any date range: where time goes, when the organisation works, department benchmarking and plain-English Q&a.",
    intro:
      "One remote day tells a leader very little; a few months of them tell a lot. Workforce analytics keeps the trend: how time splits between applications, when the organisation actually works and how departments compare, over any date range you choose. For questions a chart doesn't answer, workforce intelligence Q&a takes a plain-English question such as which trends are declining. Admins and leaders use these from the admin portal, on the same data for remote, hybrid and office staff.",
    howItWorksNote: "Admins open insights for where time goes, when the organisation works and department benchmarking, and ask workforce intelligence Q&a about topics such as declining trends or burnout signals; results export as CSV, Excel or PDF.",
    features: ['workforceAnalytics', 'behaviourIntelligence', 'employeeActivity', 'remoteHybrid'],
    privacy: false,
    benefits: [
      "Trends over any date range, not one day's snapshot",
      "Department benchmarking across remote and office teams",
      "Plain-English questions through workforce intelligence Q&a",
    ],
    useCases: [
      { title: "Catching a Slow Shift", description: "Ask workforce intelligence Q&a about declining trends, then open the affected team's date range to see where the change begins." },
      { title: "Remote-Heavy Against Office-Based Departments", description: "Use department benchmarking and the period comparison report to set two departments side by side over the same dates." },
    ],
    faq: [
      { question: "What can I ask Workforce Intelligence Q&A?", answer: "Plain-English questions. Predefined ones include workforce productivity, declining trends, overall workforce, burnout signals and attention areas." },
      { question: "What does When the Organisation Works show?", answer: "An insights view of when activity happens across the organisation, useful when a remote team's hours are spread out." },
      { question: "Does analytics include burnout risk for remote employees?", answer: "Yes. The wellbeing & burnout forecast projects risk from working-hour patterns such as long days, weekend work and late-night activity, with a weeks-to-risk view where available. It is a forecast to review, not a performance ranking or a diagnosis." },
      { question: "Can analytics predict who might resign?", answer: "No. ZUZU does not predict turnover or attrition; it surfaces changes in activity and attendance for a person to review." },
      { question: "Can I benchmark a remote department against an office one?", answer: "Department benchmarking compares departments. ZUZU records no location, so you group by department and use what you already know about where each works." },
      { question: "What is Productivity Rate?", answer: "An index built from how time splits between applications and sites categorised as productive and non-productive. It describes time use, not effort or output." },
      { question: "Are recommendations generic advice?", answer: "No. Actionable recommendations are tied to specific observations, so you can see the data behind each one." },
      { question: "Can I take analytics into a leadership meeting?", answer: "Yes. Reports and analytics export as CSV, Excel or PDF, and the weekly digest email can carry a summary to leaders." },
    ],
    related: ['remote-work-reports', 'remote-team-activity', 'hybrid-workforce-visibility'],
    externalLinks: [{ title: 'Workforce Analytics Software', description: 'The underlying analytics capability this page applies to remote teams.', href: '/platform/workforce-analytics-software' }],
  },
  {
    slug: 'hybrid-workforce-visibility',
    title: 'Hybrid Workforce Visibility',
    cluster: 'reporting',
    visual: 'photo',
    sectionOrder: ORDER_C,
    metaDescription: "One continuous attendance and activity record for hybrid employees across office and remote days, with no hybrid mode to switch on.",
    intro:
      "A hybrid employee moves between an office desk and a spare room, and the risk is a record that splits in two: one from the office, one from chat messages. ZUZU keeps one record. The same Windows agent runs on the laptop either way, so attendance and application activity form a continuous history and the daily AI report covers both kinds of day. There is no hybrid mode to enable and no location field, so ZUZU cannot say which days were in the office.",
    howItWorksNote: "The agent, attendance sessions and daily AI reports work the same on every day; the manager reads the whole week as one record in the manager workspace, and period comparison can set two weeks side by side.",
    features: ['remoteHybrid', 'timeAttendance', 'employeeActivity', 'workforceVisibility'],
    privacy: true,
    benefits: [
      "One record across office and remote days",
      "No hybrid mode or separate setup",
      "The same monitoring policy on every day",
    ],
    useCases: [
      { title: "Reading a Hybrid Week as a Whole", description: "Open one employee's week in the manager workspace; office and remote days sit in the same attendance and activity record." },
      { title: "Explaining Hybrid Monitoring to Staff", description: "Tell hybrid employees that the same agent and the same organisation-wide monitoring policy apply whether they are in the office or out of it." },
    ],
    faq: [
      { question: "Do hybrid employees need a different setup?", answer: "No. They use the same agent and activation as everyone else, and there is no hybrid-specific configuration." },
      { question: "Can ZUZU tell whether someone was in the office or at home?", answer: "No. It records device activity, not location, and there is no GPS." },
      { question: "Are screenshots handled the same on office and remote days?", answer: "Yes. Where screenshots are enabled, the same monitoring policy applies, and private regions are redacted on the device before a screenshot is stored or uploaded." },
      { question: "Does a hybrid employee's daily AI report cover both kinds of day?", answer: "Yes. One AI report is generated per employee per day, so office and remote days sit in the same continuous history." },
      { question: "Can a manager filter a hybrid team by office day or remote day?", answer: "Not directly, because there is no location label. The comparison page explains how to set days side by side using the schedule you already know." },
      { question: "What happens on a day the laptop stays at the office?", answer: "Attendance follows the device. If the laptop is not in use, no session is recorded for that person that day." },
      { question: "Who can see a hybrid employee's record?", answer: "Their manager, for their own team in the manager workspace, and admins across the organisation in the admin portal." },
      { question: "What if a hybrid employee also uses a personal laptop?", answer: "On a company-managed device clock-in is automatic when the agent starts recording. On a personal laptop, tracking runs only between punch-in and punch-out." },
    ],
    related: ['remote-attendance', 'remote-workforce-analytics', 'remote-work-visibility'],
    externalLinks: [{ title: 'Hybrid Workforce', description: 'The solutions-page overview of this capability.', href: '/solutions/hybrid-workforce' }],
  },
  {
    slug: 'remote-manager-workspace',
    title: 'Remote Manager Workspace',
    cluster: 'manager',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "The manager workspace for remote leads: own-team attendance, activity, daily AI reports and a behaviour review queue, with no settings to change.",
    intro:
      "A remote manager has no desk to walk to, so the manager workspace is where the working day gets read. It is scoped to the manager's own assigned team and shows activity, attendance, reports, screenshots where enabled, AI reports, behaviour insights and anomaly review. It is built for reviewing, not configuring: managers cannot change settings, which stay with admins in the admin portal.",
    howItWorksNote: "A manager opens team at a glance for the summary, then the fuller workspace for a person's attendance, application activity, daily AI report and any items in the behaviour review queue.",
    features: ['managerWorkspace', 'employeeActivity', 'timeAttendance', 'behaviourIntelligence'],
    privacy: false,
    benefits: [
      "Own team only, nothing outside it",
      "Attendance, activity, reports and screenshots in one place",
      "A behaviour review queue with the activity behind each item",
    ],
    useCases: [
      { title: "Daily Review by a Remote Lead", description: "Start on team at a glance, then open any person whose day looks unusual and read their daily AI report before messaging them." },
      { title: "Sharing a Team Between Managers", description: "Two managers assigned to the same team both see it in their workspace; neither sees teams they are not assigned to." },
    ],
    faq: [
      { question: "Can a manager change capture settings from the Workspace?", answer: "No. The workspace is for reviewing data. Settings are managed centrally by admins in the admin portal, and managers cannot change them." },
      { question: "Can a remote manager see employees outside their assigned team?", answer: "No. Access is scoped to the manager's own assigned team, wherever the manager or their people are working. More than one manager can share a team." },
      { question: "What is in the behaviour review queue?", answer: "Behaviour intelligence compares a person's activity with their own baseline and routes meaningful changes to the queue for a person to review. Nothing is actioned or judged automatically." },
      { question: "What does a manager see for one employee?", answer: "Attendance, application activity, the daily AI report, screenshots where enabled, behaviour insights and anomaly review, for people on their own team." },
      { question: "Can a manager export from the Workspace?", answer: "Yes. Reports can be downloaded as PDF, or exported as CSV or Excel, for use outside ZUZU." },
      { question: "How does a manager get access?", answer: "An admin invites them from the managers page in the admin portal, and approvals & access shows whether the invite has been accepted." },
      { question: "Can a manager review screenshots?", answer: "Where screenshots are enabled, yes, for their own team. Private regions such as passwords and banking are redacted on the device before a screenshot is stored or uploaded." },
      { question: "What if an employee has no manager assigned?", answer: "The managers page lists unassigned employees under coverage, so an admin can assign them and they appear in a manager's workspace." },
    ],
    related: ['remote-work-visibility', 'remote-team-activity', 'remote-workforce-use-cases'],
    externalLinks: [{ title: 'Manager Insight Workflow', description: 'How behaviour insights fit into the manager workspace.', href: '/manager/manager-insight-workflow' }],
  },
  {
    slug: 'remote-workforce-use-cases',
    title: 'Remote Workforce Use Cases',
    cluster: 'manager',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "Remote scenarios and the ZUZU surface that handles each: dropped connections, sleep gaps, personal laptops, time zones and hybrid weeks.",
    intro:
      "This page collects the situations where remote teams most often reach for ZUZU, each tied to the surface that handles it: a home connection that drops, a laptop that slept through part of the day, a personal machine that should only be tracked during a shift. The sibling pages go deeper on each one; this page helps you find the right starting point.",
    howItWorksNote: "Each scenario maps to a specific surface: the offline queue for connection drops, away time for gaps, punch-in gating for personal laptops, and the daily AI report for time zones.",
    features: ['employeeActivity', 'timeAttendance', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "Each scenario matched to a named surface",
      "Connection drops, sleep gaps and personal laptops covered",
      "A pointer to the detailed page for each case",
    ],
    useCases: [
      { title: "A Home Connection Drops Mid-Shift", description: "The agent keeps capturing locally and syncs on reconnect, so the day's record is complete without anyone re-entering hours." },
      { title: "A Laptop Sleeps or Crashes", description: "Admins review the gap in away time next to what the employee says they were doing; approved time sits beside tracked hours." },
      { title: "An Employee on a Personal Laptop", description: "Tracking runs only between punch-in and punch-out, through a short-lived permission the agent keeps renewing." },
    ],
    faq: [
      { question: "Which scenario applies to a team spread across time zones?", answer: "See the time zone visibility page. Each device records attendance in its own local time, and daily AI reports are browsable by year, month and day." },
      { question: "Does any scenario need a separate remote mode?", answer: "No. It is the same agent and the same reports everywhere, and there is no separate remote mode to switch on." },
      { question: "Which scenarios involve screenshots?", answer: "Screenshots are optional context where enabled. The scenarios here mostly draw on attendance, application activity and the daily AI report." },
      { question: "Can one team mix remote, hybrid and office staff?", answer: "Yes. The manager workspace shows them in the same view, because attendance follows the device and not the location." },
      { question: "Is there a scenario for tracking burnout risk?", answer: "Yes. The wellbeing & burnout forecast reads long days, weekend work and late-night activity and is meant to start a conversation, not to rank anyone." },
      { question: "Do these scenarios connect to a video or chat tool?", answer: "No. ZUZU does not integrate with communication platforms; it captures activity independently through the Windows agent." },
      { question: "Do we have to re-onboard an existing team?", answer: "Existing employees only need the agent: each shows as pending in employees until it has run once with their activation code, then as activated." },
      { question: "What is out of scope for remote teams?", answer: "ZUZU does not track location, run payroll, follow tasks or tickets, or integrate with other systems. Those stay in your own tools." },
    ],
    related: ['remote-work-visibility', 'remote-manager-workspace', 'remote-workforce-faq'],
    externalLinks: [{ title: 'Remote Companies', description: 'The industries-page overview for remote-first organizations.', href: '/industries/remote-companies' }],
  },
  {
    slug: 'remote-workforce-faq',
    title: 'Remote & Hybrid Workforce FAQ',
    cluster: 'manager',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "Answers for remote and hybrid rollouts: what the Windows agent needs, how employees are activated, what happens offline and what ZUZU does not do.",
    intro:
      "This page answers the practical questions that come up before a remote or hybrid rollout: what has to be installed, how an employee is activated, what happens when the connection drops, who can see what, and what ZUZU deliberately does not do. Each answer is limited to what the product does today, and the sibling pages go further on attendance, time zones and privacy.",
    howItWorksNote: "The answers cover the Windows agent and its offline queue, employees moving from pending to activated, on-device redaction, and manager and admin access.",
    features: ['employeeActivity', 'timeAttendance', 'remoteHybrid', 'managerWorkspace'],
    privacy: true,
    benefits: [
      "Rollout questions answered before installation",
      "An explicit list of what ZUZU does not do",
      "Answers you can point employees to",
    ],
    useCases: [
      { title: "Evaluating a Remote Rollout", description: "Read the setup and privacy answers first, then the offline and away time answers, before deciding who to activate first." },
      { title: "Answering an Employee's Concern", description: "Use the answers on what is captured, what the tray shows and what is redacted on the device." },
    ],
    faq: [
      { question: "What does an employee's computer need?", answer: "The Windows agent, an installer of about 80 MB. ZUZU tracks Windows devices only; there is no macOS or Linux agent." },
      { question: "How is an employee activated?", answer: "An admin adds them in employees and they receive an activation code. They stay pending until the agent has run once with that code, then show as activated." },
      { question: "What can employees see on their own device?", answer: "The agent runs from the system tray, visible to the employee and IT. Settings are not changed from the tray; they are managed centrally in the admin portal." },
      { question: "What happens if the internet drops?", answer: "The agent keeps capturing activity and attendance locally and syncs when the connection returns." },
      { question: "Does ZUZU record what people type?", answer: "No. It captures application and website usage and how long each was used, not keystrokes and not typed content." },
      { question: "Can employees use a personal laptop?", answer: "Yes, with consent. Tracking runs only between punch-in and punch-out, through a short-lived permission the agent must keep renewing." },
      { question: "Who can see the data?", answer: "Admins see the whole organisation in the admin portal; a manager sees only their own assigned team. Two-factor authentication is supported for account access." },
      { question: "What does ZUZU not do for remote teams?", answer: "No GPS or location tracking, no payroll, no task or ticket tracking, no integrations with other systems, and no tracking on macOS or Linux." },
    ],
    related: ['remote-work-visibility', 'remote-workforce-use-cases', 'hybrid-workforce-visibility'],
    externalLinks: [{ title: 'ZUZU Platform Overview', description: 'Explore the full ZUZU platform.', href: '/platform' }],
  },
  {
    slug: 'distributed-team-time-zone-visibility',
    title: 'Distributed Team Time Zone Visibility',
    cluster: 'visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "Manage a team across time zones: attendance per device in local time, and daily AI reports browsable by year, month and day.",
    intro:
      "When teammates are hours apart, \"is anyone online?\" depends on whose clock you read. In ZUZU each person's attendance is recorded per device from actual agent sessions, and the daily AI report is generated once per employee per day and browsed by year, month and day, so a manager can open a colleague's day directly. Overlap between regions is something the manager reads off the attendance records; ZUZU does not compute it.",
    howItWorksNote: "Each device timestamps its own attendance sessions in local time; the manager opens the team's attendance in the manager workspace and steps through daily AI reports by date to see when each person's day actually fell, and away time shows any gap.",
    features: ['workforceVisibility', 'timeAttendance', 'remoteHybrid', 'workforceAnalytics'],
    privacy: false,
    benefits: [
      "Attendance recorded per device, in that device's local time",
      "Daily AI reports browsable by year, month and day",
      "Overlap read directly from attendance records",
    ],
    useCases: [
      { title: "Planning a Handoff", description: "Compare two teammates' attendance sessions to see whether their days actually overlapped before fixing a handoff time." },
      { title: "Reviewing Overnight Coverage", description: "Open the daily AI reports for the people covering the other end of the day, and check attendance for when they were active." },
    ],
    faq: [
      { question: "Does ZUZU use each person's local time?", answer: "Yes. Attendance and activity timestamps reflect each device's own local time, so records line up with when the person actually worked." },
      { question: "Are reports converted to one standard time zone?", answer: "No. Reports reflect the time recorded on each device, and ZUZU does not enforce a single reporting time zone." },
      { question: "Does ZUZU calculate overlap between regions?", answer: "Not automatically. A manager compares individual attendance records to see where two people's working days overlapped." },
      { question: "How do I look at a colleague's day from another time zone?", answer: "Open that employee's daily AI report for the date. Reports are browsable by year, month and day." },
      { question: "Do teams need a shared working schedule?", answer: "No. Attendance is recorded from actual activity, so it works for teams with no fixed hours." },
      { question: "Can ZUZU flag someone working late nights across time zones?", answer: "The wellbeing & burnout forecast reads working-hour patterns such as late-night activity, weekend work and long days. It is a forecast to review, not a diagnosis." },
      { question: "Can the weekly digest go to a manager in another region?", answer: "Yes. A digest can go organisation-wide or to a specific manager, so a regional lead can receive only their own team's summary." },
      { question: "What if a laptop sleeps during someone's working day?", answer: "The stretch where the agent saw nothing appears in away time for an admin to review next to what the employee says they were doing." },
    ],
    related: ['remote-work-visibility', 'remote-workforce-analytics', 'hybrid-workforce-visibility'],
    externalLinks: [{ title: 'Workforce Analytics', description: 'The analytics capability used to review patterns across a distributed team.', href: '/ai-analytics' }],
  },
  {
    slug: 'work-from-home-attendance-tracking',
    title: 'Work-From-Home Attendance Tracking',
    cluster: 'visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "Work-from-home attendance that survives a dropped router or a sleeping laptop: offline queue, away time review and exports for your own records.",
    intro:
      "Working from home brings gaps the office doesn't: a router that drops mid-morning, a laptop that goes to sleep, a restart after an update. ZUZU's agent handles each one visibly. While the connection is down it keeps capturing attendance and activity locally and syncs on reconnect, and stretches where it could see nothing at all appear in away time for review, next to what the employee says they were doing.",
    howItWorksNote: "Attendance is recorded from agent sessions on the work device; offline stretches sync on reconnect, and unexplained gaps go to away time, where an admin approves or rejects them and approved time is added beside tracked hours, never over them.",
    features: ['timeAttendance', 'windowsAgent', 'remoteHybrid', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "Connection drops leave no hole in the record",
      "Sleep and crash gaps are reviewed, not silently lost",
      "Approved time sits beside tracked hours",
    ],
    useCases: [
      { title: "A Home Connection That Keeps Dropping", description: "Check the employee's day after it syncs; the offline stretch appears as normal tracked time once the agent reconnects." },
      { title: "Reviewing a Gap After a Laptop Restart", description: "In away time, open the needs review tab, read the employee's explanation and approve or reject it." },
    ],
    faq: [
      { question: "Does work-from-home attendance need special hardware?", answer: "No. It needs only the Windows agent on the work device the person already uses." },
      { question: "What happens to attendance while the home internet is down?", answer: "The agent keeps capturing attendance and activity locally, then syncs when the connection returns." },
      { question: "What is Away Time?", answer: "A review area in the admin portal's time & attendance section for stretches where the agent saw nothing. It has needs review, approved, rejected and all tabs." },
      { question: "Does approving Away Time change tracked hours?", answer: "No. Approved time is added beside the tracked hours and never rewrites them." },
      { question: "Does this replace a manual timesheet?", answer: "Hours are recorded automatically from agent activity, so there is no manual timesheet and, on a managed device, no manual clock-in." },
      { question: "Does ZUZU monitor a home network or router?", answer: "No. It captures activity only on the device where the agent is installed, not the network itself." },
      { question: "Does ZUZU calculate pay from home attendance?", answer: "No. ZUZU does not process payroll. Attendance can be exported as CSV, Excel or PDF for the employer's own payroll process." },
      { question: "What about a personal computer used at home?", answer: "Tracking is consent-gated and runs only between punch-in and punch-out, through a short-lived permission the agent must keep renewing." },
    ],
    related: ['remote-attendance', 'hybrid-schedule-attendance-management', 'remote-manager-workspace'],
    externalLinks: [{ title: 'Work Time Tracking Software', description: 'The time & attendance capability underlying work-from-home tracking.', href: '/time-attendance' }],
  },
  {
    slug: 'remote-employee-onboarding-visibility',
    title: 'Remote Employee Onboarding Visibility',
    cluster: 'visibility',
    visual: 'photo',
    sectionOrder: ORDER_C,
    metaDescription: "Follow a new remote hire from pending to activated in employees, then review their first days of attendance and daily AI reports.",
    intro:
      "A new remote hire's first week starts with a code, not a desk. In the employees workspace the person shows as pending until the Windows agent has run once with their activation code, then activated; from that point their attendance and application activity appear in the manager workspace and the daily AI report starts. A manager who still sees pending after the first day has found a setup problem, not a performance one.",
    howItWorksNote: "An admin adds the employee and shares the activation code; once the agent has run, the status moves from pending to activated, and the manager reviews the first days' attendance and daily AI reports in the manager workspace.",
    features: ['employeeActivity', 'remoteHybrid', 'timeAttendance', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "Pending to activated shows whether setup finished",
      "A daily AI report from the first tracked day",
      "Consent-gated punch-in on a personal laptop",
    ],
    useCases: [
      { title: "Confirming a New Hire Is Set Up", description: "Check employees for pending or activated before reading anything into a quiet first day." },
      { title: "Onboarding a Cohort", description: "Use the pending list in employees to see who in a start-date group still needs to run the agent, then review the activated ones in the manager workspace." },
    ],
    faq: [
      { question: "When does a new hire appear in the data?", answer: "Once the agent has run once with their activation code. Until then they show as pending in employees." },
      { question: "What if a new hire stays Pending?", answer: "The agent has not yet run with their code. Check that it is installed on their Windows device and has been started." },
      { question: "Does anomaly detection run from the first day?", answer: "No. In AI work, anomaly detection stays off for an employee until they have five days of tracked activity." },
      { question: "Can a new hire see that the agent is running?", answer: "Yes. It runs from the system tray, visible to the employee and IT." },
      { question: "What if the new hire uses a personal laptop?", answer: "They punch in and out. Tracking runs only in that window, through a short-lived permission the agent must keep renewing." },
      { question: "Does this replace the manager's first check-in call?", answer: "No. It gives the manager attendance and activity to look at before the call, not a substitute for it." },
      { question: "Can the new hire see their own activity data?", answer: "That depends on how access is set up in the admin portal, where access is capability-based. This page does not describe an employee self-view." },
      { question: "What if someone leaves during onboarding?", answer: "Deactivating them from employees revokes the agent's token, and tracking stops." },
    ],
    related: ['remote-manager-workspace', 'remote-work-visibility', 'work-from-home-attendance-tracking'],
    externalLinks: [{ title: 'Manager Workspace', description: "Where a manager reviews activity and attendance for a new remote hire.", href: '/manager' }],
  },
  {
    slug: 'distributed-team-behaviour-pattern-insights',
    title: 'Distributed Team Behaviour Pattern Insights',
    cluster: 'reporting',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "Behaviour intelligence compares each remote employee with their own baseline and queues changes for review; the wellbeing forecast reads late-night work.",
    intro:
      "Behaviour intelligence compares each person's activity with their own baseline, not with a rule about apps or roles, so working hours that are normal for one remote employee are not a departure for them. When a meaningful change appears it is routed to a review queue for a manager to look at, and nothing is decided or actioned automatically. Separately, the wellbeing & burnout forecast reads long days, weekend work and late-night activity, which matter most when nobody sees a person leave the office.",
    howItWorksNote: "Behaviour intelligence measures each person against their own baseline and queues meaningful changes in the manager workspace for review; the wellbeing & burnout forecast projects risk from working-hour patterns.",
    features: ['behaviourIntelligence', 'remoteHybrid', 'workforceAnalytics', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "Compared with the person's own baseline",
      "Changes wait in a review queue, with no automatic action",
      "A wellbeing forecast for long days and late-night work",
    ],
    useCases: [
      { title: "Reviewing a Change After a Team Goes Remote", description: "Work through the review queue in the manager workspace and read the activity behind each item before talking to the person." },
      { title: "Noticing Late-Night Creep", description: "Check the wellbeing & burnout forecast for people whose hours are drifting toward late nights and weekends, and open the drivers behind the forecast." },
    ],
    faq: [
      { question: "What counts as a meaningful change?", answer: "A departure from that person's own usual activity. It is not a rule about particular apps or roles, and each item in the queue shows the activity behind it." },
      { question: "Does Behaviour Intelligence take action on its own?", answer: "No. It routes changes to a review queue for a person to review, with no automatic action and no automatic judgment." },
      { question: "Can it predict who will leave?", answer: "No. ZUZU does not predict turnover or attrition." },
      { question: "Can it predict how a distributed team will perform?", answer: "No. It surfaces patterns in existing data; it does not forecast performance." },
      { question: "Does it adjust for local holidays in different regions?", answer: "No. ZUZU records activity and attendance as they occur and does not adjust for regional calendars." },
      { question: "Is this the same as productivity scoring?", answer: "No. Behaviour patterns are for a manager to interpret. ZUZU also includes a productivity score, which this page does not describe." },
      { question: "What does the Wellbeing & Burnout Forecast show?", answer: "Predicted burnout risk from working-hour patterns, the drivers behind it, and a weeks-to-risk view where available. It is a forecast to review, not a diagnosis or a ranking." },
      { question: "Can behaviour insights be exported?", answer: "Yes. Behaviour insight data can be included in exports the same way as other reports, as CSV, Excel or PDF." },
    ],
    related: ['remote-workforce-analytics', 'remote-manager-workspace', 'hybrid-office-day-vs-remote-day-comparison'],
    externalLinks: [{ title: 'Behaviour Intelligence', description: 'The underlying capability behind distributed team pattern insights.', href: '/manager/behaviour-intelligence' }],
  },
  {
    slug: 'hybrid-schedule-attendance-management',
    title: 'Hybrid Schedule Attendance Management',
    cluster: 'reporting',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "ZUZU keeps no hybrid rota: attendance for rotating or flexible office days is what each person's agent sessions show, in one record.",
    intro:
      "ZUZU doesn't hold a hybrid rota, so there are no planned office days to check against. Attendance for someone on a rotation is simply what their agent sessions show, day after day, in one record. That gives a manager a clear view of the days someone actually worked and for how long, including a Wednesday swapped for a Thursday, while the rota itself stays in whichever tool you keep it.",
    howItWorksNote: "Each day's agent sessions become attendance in the manager workspace; away time picks up stretches the agent could not see, and admins can export the attendance & activity roster.",
    features: ['timeAttendance', 'remoteHybrid', 'adminPortal', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "Swapped days show as they happened",
      "One record, not separate office and remote logs",
      "Roster export for the employer's own records",
    ],
    useCases: [
      { title: "Checking a Fixed Rotation", description: "Open the team's attendance in the manager workspace beside the rota you keep elsewhere, and note the days that differ." },
      { title: "Flexible Office Days", description: "Employees choose their office days week to week; the record shows the days worked without anyone updating a schedule in ZUZU." },
    ],
    faq: [
      { question: "Does ZUZU need a schedule to record attendance?", answer: "No. Attendance reflects actual working hours, not a fixed shift, so it works for fixed and flexible rotations alike." },
      { question: "Can I mark planned remote days in advance?", answer: "No. ZUZU records attendance as it happens and does not manage a schedule of planned days." },
      { question: "Can a manager tell in-person days from remote days?", answer: "No. Attendance follows the device, not the location, and there is no GPS." },
      { question: "What if an employee swaps their office days that week?", answer: "Nothing needs updating. The record shows the days they actually worked." },
      { question: "Are there attendance settings per employee or per team?", answer: "Capture cadence, retention and password redaction are one organisation-wide monitoring policy set in the admin portal, and it applies to everyone. Attendance itself follows agent activity." },
      { question: "Which reports carry hybrid attendance?", answer: "The day-end report, the daily attendance reports and the attendance & activity roster, exportable as CSV, Excel or PDF." },
      { question: "What if the laptop was off on a rota day?", answer: "No session is recorded. If the agent could not see part of a working day because of sleep or a crash, that stretch goes to away time for review." },
      { question: "Is hybrid attendance formatted differently from office-only staff?", answer: "No. All attendance appears in the same format regardless of work arrangement." },
    ],
    related: ['hybrid-workforce-visibility', 'hybrid-office-day-vs-remote-day-comparison', 'work-from-home-attendance-tracking'],
    externalLinks: [{ title: 'Admin Portal', description: 'Where hybrid attendance settings are configured.', href: '/admin' }],
  },
  {
    slug: 'hybrid-office-day-vs-remote-day-comparison',
    title: 'Hybrid Office-Day vs Remote-Day Comparison',
    cluster: 'reporting',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "ZUZU does not label office days, so you set them side by side yourself using daily AI reports, attendance and the period comparison report.",
    intro:
      "ZUZU doesn't know which days were office days, because it records device activity and never location. The comparison is one you set up yourself: pick the days you know were in the office and the days you know were remote, then read them side by side. The daily AI reports, attendance records and the period comparison report supply the material; the labels come from your own calendar.",
    howItWorksNote: "The manager opens the daily AI reports and manager workspace attendance for the chosen days, or runs period comparison over two date ranges, and applies their own knowledge of which days were which.",
    features: ['remoteHybrid', 'workforceAnalytics', 'behaviourIntelligence', 'employeeActivity'],
    privacy: false,
    benefits: [
      "A day-level view beside the weekly summary",
      "Period comparison for two date ranges",
      "Labels come from your calendar, not location tracking",
    ],
    useCases: [
      { title: "Reviewing a Hybrid Policy", description: "Run period comparison for office-heavy weeks against remote-heavy weeks and read what changed in activity and attendance." },
      { title: "Preparing for a Schedule Conversation", description: "Open the daily AI reports for a few of each kind of day and bring the actual records to the conversation." },
    ],
    faq: [
      { question: "Does ZUZU mark which days were office days?", answer: "No. It records device activity, not location, so the office or remote label has to come from your own schedule." },
      { question: "Can I compare a whole team at once?", answer: "Period comparison sits in the report library, while individual days are reviewed per employee in the manager workspace." },
      { question: "What is Period Comparison?", answer: "A report in the library that sets one period beside another, so you can read what changed between two date ranges." },
      { question: "Can the comparison be exported?", answer: "Yes, reports export as CSV, Excel or PDF for use outside ZUZU." },
      { question: "Does ZUZU say which arrangement suits an employee?", answer: "No. It presents activity and attendance; it does not recommend one arrangement over another." },
      { question: "Can behaviour data join the comparison?", answer: "Yes. Behaviour intelligence compares activity with the person's own baseline, and you can read it alongside the same days." },
      { question: "What if the schedule changes often?", answer: "You can still compare, but it is clearest when you have a history of both kinds of day for the same person." },
      { question: "Do differences between day types reflect performance?", answer: "Not necessarily. Activity data differs for many reasons, and ZUZU makes no performance claim from it." },
    ],
    related: ['hybrid-schedule-attendance-management', 'distributed-team-behaviour-pattern-insights', 'hybrid-workforce-visibility'],
    externalLinks: [{ title: 'AI Reports + Workforce Analytics', description: 'The analytics capability behind day-by-day comparisons.', href: '/ai-analytics' }],
  },
  {
    slug: 'distributed-team-privacy-controls',
    title: 'Distributed Team Privacy Controls',
    cluster: 'manager',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "One monitoring policy for every remote device, redaction on the device before upload, own-team manager access and audit logs of admin changes.",
    intro:
      "For a team working from many homes, the privacy questions are about what a laptop sends and who reads it. ZUZU answers them centrally: capture cadence, retention and password redaction form one organisation-wide monitoring policy in the admin portal, and private regions such as passwords, banking, webmail, messaging apps, password managers and desktop notifications are redacted on the device before a screenshot is stored or uploaded. Managers read only their own team, and every admin write lands in audit logs.",
    howItWorksNote: "Admins set the monitoring policy once in the admin portal and it applies to everyone; the agent applies redaction on the device, managers see only their assigned team, and audit logs record admin changes.",
    features: ['privacyControls', 'remoteHybrid', 'adminPortal', 'employeeActivity'],
    privacy: true,
    benefits: [
      "One monitoring policy for every device",
      "Redaction on the device, before upload",
      "Role-scoped access, with changes recorded in audit logs",
    ],
    useCases: [
      { title: "Settling the Policy Before Rollout", description: "Decide screenshot cadence, retention and redaction in the admin portal once, before anyone's agent is activated." },
      { title: "Answering \"what do you capture?\"", description: "Explain that the tray shows the agent is running, what is redacted on the device, and that keystrokes and typed content are not captured." },
    ],
    faq: [
      { question: "Can privacy settings differ between offices or homes?", answer: "No. Cadence, retention and password redaction are one organisation-wide monitoring policy, and they apply to everyone." },
      { question: "Who can change the policy?", answer: "Admins, in the admin portal. Managers cannot change settings." },
      { question: "Where does redaction happen?", answer: "On the employee's device, before a screenshot is stored or uploaded, rather than being cleaned up afterwards." },
      { question: "Which regions are redacted?", answer: "Passwords, banking, webmail, messaging apps, password managers and desktop notifications." },
      { question: "Can employees tell the agent is running?", answer: "Yes. It runs from the system tray, visible to the employee and IT, though settings are not changed from the tray." },
      { question: "How does a personal laptop differ?", answer: "A personal laptop is consent-gated: the agent records only between punch-in and punch-out, and it has to keep renewing a short-lived permission, so a family laptop is not watched outside a work session." },
      { question: "How can we check who changed a setting?", answer: "Audit logs record actor, action, target and timestamp for every write in the admin portal, and can be exported as CSV. They do not store IP addresses or device details." },
      { question: "Is two-factor authentication supported, and are there certifications?", answer: "Two-factor authentication (MFA/OTP) is supported for account access. ZUZU does not claim compliance certifications such as SOC 2 or ISO." },
    ],
    related: ['remote-manager-workspace', 'hybrid-workforce-visibility', 'remote-team-communication-and-activity-context'],
    externalLinks: [{ title: 'Security & Governance', description: "How privacy and access settings fit into ZUZU's broader security controls.", href: '/security' }],
  },
  {
    slug: 'remote-team-communication-and-activity-context',
    title: 'Remote Team Communication & Activity Context',
    cluster: 'manager',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "ZUZU does not read chat or video. It adds the device record: attendance, application usage and the daily AI report beside a status update.",
    intro:
      "Your team's conversations happen in chat and video calls, and ZUZU is deliberately not part of them: it doesn't connect to those platforms, read messages or listen to calls. What it adds is the other half of the picture, the device record. A manager reading a status update in a channel can open that day's attendance, application usage and daily AI report and see whether the two fit together, then decide for themselves whether to ask.",
    howItWorksNote: "The Windows agent records attendance and application usage on the device, independent of any chat or video tool; the manager reads it in the manager workspace, with the daily AI report, next to the update they received; top applications shows where a team's time goes.",
    features: ['employeeActivity', 'remoteHybrid', 'workforceVisibility', 'aiReports'],
    privacy: false,
    benefits: [
      "A device record beside a chat update",
      "No message or call content is read",
      "The manager decides whether the two fit",
    ],
    useCases: [
      { title: "Preparing for a One-to-One", description: "Read the employee's recent daily AI reports before the call, then use the call to ask about anything that stands out." },
      { title: "After a Status Update", description: "Open that day's attendance and application activity in the manager workspace when the update and the day's pattern seem at odds." },
    ],
    faq: [
      { question: "Does ZUZU integrate with chat or video tools?", answer: "No. It does not connect to or read data from communication platforms; it captures activity through the Windows agent independently." },
      { question: "Can ZUZU read team chat messages?", answer: "No. It has no access to message content from any communication platform." },
      { question: "Does a chat app show up in reports?", answer: "As application usage, with how long it was used. The content of messages is not captured, and messaging-app regions are redacted from screenshots on the device." },
      { question: "Does ZUZU record video calls?", answer: "No. There is no call recording and no live camera or streaming." },
      { question: "Does ZUZU flag a mismatch between a status update and activity?", answer: "No. It does not compare or flag discrepancies automatically; a manager reads both and judges for themselves." },
      { question: "Can this replace stand-ups or check-ins?", answer: "No. It adds context and leaves your team's communication routines as they are." },
      { question: "What about chat on a personal laptop outside a shift?", answer: "Tracking on a personal laptop runs only between punch-in and punch-out, so activity outside that window is not captured." },
      { question: "Where does a manager see time spent in chat and video apps?", answer: "Application usage appears in the manager workspace for their own team, and admins see top applications and where time goes across the organisation." },
    ],
    related: ['remote-manager-workspace', 'distributed-team-privacy-controls', 'remote-work-reports'],
    externalLinks: [{ title: 'AI Reports', description: 'How activity data feeds into AI-generated reports for context.', href: '/ai-analytics' }],
  },
]

export const remoteWorkforceCluster = {
  key: 'remote-workforce',
  basePath: '/remote-workforce',
  badgeLabel: 'Remote & Hybrid',
  hubTitle: 'Remote & Hybrid Workforce',
  hubDescription:
    'How ZUZU gives organizations visibility into remote, hybrid and distributed teams, using the same activity, attendance, reporting and analytics capabilities built for any team, wherever people work from.',
  hubMetaDescription:
    'The ZUZU remote & hybrid workforce ecosystem: visibility, attendance, reporting and analytics for remote, hybrid and distributed teams.',
  groups: REMOTE_WORKFORCE_GROUPS,
  groupsHeading: 'Explore Remote & Hybrid Workforce Pages',
  directorySections: REMOTE_WORKFORCE_DIRECTORY,
  pages: REMOTE_WORKFORCE_PAGES,
  faq: REMOTE_WORKFORCE_HUB_FAQ,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Time & Attendance Management', href: '/time-attendance' },
    { label: 'Behaviour Intelligence + Manager Workspace', href: '/manager' },
    { label: 'Reports + Exports Ecosystem', href: '/reports' },
  ],
}
