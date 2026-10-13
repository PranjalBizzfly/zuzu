/*
  Structured content for the ZUZU Roles ecosystem (Phase 13). Same
  shape as the other cluster data files, rendered by the existing
  ClusterHub/ClusterPage templates -- zero new components.

  Each role page selects a genuinely different SUBSET of existing
  capabilities relevant to that persona (HR: attendance/records;
  IT admins: Windows Agent/Admin Portal; executives: high-level
  analytics; etc.) rather than repeating the same paragraph with the
  audience noun swapped -- no role-specific feature is invented.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const ROLES_GROUPS = [
  { key: 'frontline', label: 'HR, Managers & Operations' },
  { key: 'leadership', label: 'Business Owners, IT & Executives' },
]

export const ROLES_PAGES = [
  {
    slug: 'hr',
    title: 'ZUZU for HR',
    cluster: 'frontline',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU for HR: employees, managers and audit logs in the admin portal, the attendance & activity roster, and away time review, without replacing your HR system.',
    intro:
      'HR tends to own the questions nobody else does: is the attendance record complete, who changed a manager assignment, who has been deactivated. In the admin portal, HR works from employees, managers and audit logs, with the attendance & activity roster in the report library. None of it replaces an HR system of record, and ZUZU does not process payroll or manage leave.',
    howItWorksNote: 'HR reviews employees (activated, pending, deactivated), the managers page for coverage and audit logs for who changed what, and exports the attendance & activity roster as CSV, Excel or PDF.',
    features: ['timeAttendance', 'adminPortal', 'aiReports', 'employeeActivity'],
    privacy: true,
    benefits: ['Employees, managers and audit logs in one portal', 'Attendance & activity roster exportable as CSV, Excel or PDF', 'Approved away time added beside tracked hours, never overwriting them'],
    useCases: [
      { title: 'Closing Out a Leaver', description: 'Deactivate the employee from employees, which revokes the agent\'s token, then confirm the deactivation appears in audit logs.' },
      { title: 'Reviewing an Attendance Query', description: 'Open away time for the gap, read what the employee says they were doing, and approve or reject it; approved time sits beside tracked hours.' },
    ],
    faq: [
      { question: 'Does ZUZU handle payroll or leave management for HR?', answer: 'No, ZUZU provides attendance and activity data; payroll and leave management are not ZUZU capabilities.' },
      { question: 'Can HR access organization-wide attendance data?', answer: 'Yes, through the admin portal, including the attendance & activity roster in the report library. Other admins have the same organisation-wide access; managers see attendance only for their own assigned team.' },
      { question: 'How does HR handle a gap in an employee\'s tracked hours?', answer: 'Away time lists stretches where the agent could not see anything, next to what the employee says they were doing, with tabs for needs review, approved, rejected and all. Approving adds the time beside tracked hours and never rewrites them.' },
      { question: 'Can HR export attendance and workforce data for a review or audit?', answer: 'Yes, the attendance & activity roster and other reports export as CSV, Excel or PDF, and audit logs export as CSV.' },
      { question: 'How does ZUZU track attendance for employees using personal laptops?', answer: 'Capture on a personal laptop is session-gated, the agent requests a short-lived permission that must be renewed, and it only applies between an employee\'s punch-in and punch-out, expiring automatically outside that work session. Consent policy itself is the organization\'s responsibility, not something ZUZU prescribes.' },
      { question: 'Does HR only see attendance, or also application activity and screenshots?', answer: 'HR\'s access isn\'t limited to attendance, through the admin portal, HR can also see employee activity and AI daily reports, the same data available to other admin roles, not a separate cut-down HR view. Screenshot data defaults to 90 days of retention, configurable by admins in the admin portal, so HR should confirm the window set for the organisation.' },
      { question: 'Does ZUZU sync attendance data into a payroll system or HRIS?', answer: 'No, ZUZU does not process payroll or integrate with payroll, accounting or HR information systems. Attendance and activity data stays inside ZUZU and can be exported manually if HR needs to move it elsewhere.' },
      { question: 'What can HR see in Audit Logs?', answer: 'Every write in the admin portal, for example employee, manager and leave events, with actor, action, target and timestamp, filterable by action, severity, actor and date range, in a table or timeline.' },
    ],
    related: ['managers', 'operations', 'executives'],
    externalLinks: [{ title: 'Employee Management', description: 'The admin workflow for organizing employees.', href: '/admin/employees' }],
  },
  {
    slug: 'managers',
    title: 'ZUZU for Managers',
    cluster: 'frontline',
    visual: 'photo',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU for managers: the manager workspace for your own team, team at a glance, attendance, application activity, daily AI reports and a behaviour review queue.',
    intro:
      'A manager\'s question is how the team is doing today, not how the organisation is configured. The manager workspace answers it for their own assigned team only: attendance, application activity, daily AI reports, screenshots where enabled, and behaviour intelligence items in a review queue. Managers review; they cannot change settings or see anyone outside their team.',
    howItWorksNote: 'Managers start in team at a glance and drop into the manager workspace for detail; a shift from an employee\'s own baseline arrives as a review-queue item, never as an automatic action.',
    features: ['managerWorkspace', 'employeeActivity', 'timeAttendance', 'behaviourIntelligence'],
    privacy: false,
    benefits: ['Own team only, with no settings to change', 'Team at a glance first, the fuller workspace when needed', 'Changes from an employee\'s own baseline, routed for review'],
    useCases: [
      { title: 'The Morning Look', description: 'Team at a glance for the summary, then the workspace for the attendance and daily AI reports behind it.' },
      { title: 'Reviewing a Flagged Change', description: 'Open the behaviour item, compare it with the employee\'s application activity and daily AI report, and talk to them before drawing any conclusion.' },
    ],
    faq: [
      { question: 'Is the Manager Workspace scoped to just one team?', answer: 'Yes, a manager sees data for their assigned team only, and more than one manager can share a team.' },
      { question: 'Can I change monitoring settings or add employees?', answer: 'No. Managers see only their own reports and cannot change settings. Employees, teams and monitoring policy are managed by admins in the admin portal.' },
      { question: 'Can a manager see employees who aren\'t on their assigned team?', answer: 'No, access is scoped strictly to the manager\'s own assigned team; managers cannot see employees or data outside that team.' },
      { question: 'Does the Manager Workspace show burnout risk for my team?', answer: 'Yes, behaviour insights include a wellbeing and burnout forecast that projects risk per employee from working-hour patterns (long days, weekend work, late-night activity, and how those are trending), with a weeks-to-risk estimate when a trend is rising. It\'s framed in-product as a forecast meant to prompt a conversation, not to rank anybody.' },
      { question: 'How does a flagged behaviour change actually reach me as a manager?', answer: 'When an employee\'s activity shifts from their own baseline, it routes into a review queue in behaviour intelligence. ZUZU doesn\'t predict who will quit or rank employees, it just surfaces the pattern change as a prompt for a conversation.' },
      { question: 'Can I see my team\'s screenshots, or just summarized activity?', answer: 'Both are available through the manager workspace, screenshots (with private regions like passwords and banking redacted on-device) alongside summarized activity and AI daily reports for the team.' },
      { question: 'What is the difference between Team at a Glance and the Workspace?', answer: 'Team at a glance is the summarised overview of your team; the manager workspace is the fuller view, with activity, attendance, reports, screenshots where enabled, AI reports, behaviour insights and anomaly review.' },
      { question: 'Do I need IT to set anything up before I can use the Manager Workspace?', answer: 'No separate setup on your side, once IT or an admin has deployed the Windows agent and assigned you as a manager over a team in the admin portal, the manager workspace is available with that team\'s data already populated.' },
    ],
    related: ['hr', 'it-admins', 'executives'],
    externalLinks: [{ title: 'Manager Insight Workflow', description: "How insights and reports fit into a manager's day-to-day.", href: '/manager/manager-insight-workflow' }],
  },
  {
    slug: 'operations',
    title: 'ZUZU for Operations',
    cluster: 'frontline',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU for operations: on shift now per manager, the attendance & activity roster and away time review across departments, for desk-based Windows devices.',
    intro:
      'Operations needs to know who is actually on shift and where the gaps are, across departments, not one team. In the admin portal that means on shift now beside each manager\'s team, the attendance & activity roster in the report library, and away time for stretches the agent could not see, shown next to what the employee says they were doing. It covers desk-based Windows devices only.',
    howItWorksNote: 'Operations reads on shift now per manager on the managers page, exports the attendance & activity roster, and settles unexplained gaps in away time; workforce analytics adds department benchmarking.',
    features: ['workforceAnalytics', 'timeAttendance', 'employeeActivity', 'adminPortal'],
    privacy: false,
    benefits: ['On shift now for every manager\'s team', 'Away time shows each gap next to the employee\'s own explanation', 'Attendance & activity roster exportable as CSV, Excel or PDF'],
    useCases: [
      { title: 'Checking Coverage at the Start of a Shift', description: 'Scan on shift now for each manager\'s team on the managers page, and open the roster where a team looks thin.' },
      { title: 'Clearing Unexplained Gaps', description: 'Work through the away time tabs, needs review, approved, rejected, all, so tracked hours and approved time stay side by side.' },
    ],
    faq: [
      { question: 'Can operations see data across multiple teams?', answer: 'Yes, through department and workforce-level reports and analytics.' },
      { question: 'What is On Shift Now?', answer: 'A column in the managers table, alongside direct reports, team productivity and team health, so operations can see who is on shift under each manager.' },
      { question: 'Does Workforce Analytics let operations compare departments against each other?', answer: 'Yes, department benchmarking is part of workforce analytics, alongside organisation health indicators and executive highlights, so operations can compare patterns across departments rather than just within one team.' },
      { question: 'How does operations deal with a gap in tracked hours?', answer: 'Away time in the admin portal lists stretches where the agent could not see anything, a sleeping laptop, restart or crash, with the employee\'s own explanation beside it. Approving adds the time beside tracked hours and never rewrites them.' },
      { question: 'Does operations need to review individual employees\' screenshots to spot patterns?', answer: 'No, operations typically works from workforce analytics and rolled-up reports rather than individual screenshots; screenshot-level detail is still available through the admin portal if needed, but it isn\'t the primary view for a cross-department role.' },
      { question: 'Can operations export department or organization-wide reports?', answer: 'Yes, CSV, Excel and PDF exports are available, along with weekly report emails and organisation-level exports, so operations can pull cross-department data out for further analysis.' },
      { question: 'Does operations set monitoring policy, or just view the reports?', answer: 'Monitoring policy, screenshot intervals, retention, access scoping, is configured in the admin portal, typically by IT admins. Operations consumes the resulting reports and analytics rather than owning the policy configuration itself.' },
      { question: 'Does ZUZU cover field or warehouse staff?', answer: 'No. ZUZU tracks desk-based Windows devices only; it does not track field or warehouse staff and has no GPS or location tracking.' },
    ],
    related: ['hr', 'business-owners', 'executives'],
    externalLinks: [{ title: 'Department Activity Reports', description: 'Activity data rolled up to the department level.', href: '/activity/department-activity-reports' }],
  },
  {
    slug: 'business-owners',
    title: 'ZUZU for Business Owners',
    cluster: 'leadership',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU for business owners: the weekly digest, the dashboard AI executive summary and plain-English insights questions, with team-level review left to managers.',
    intro:
      'An owner cannot read every report and does not need to. Two things arrive without asking, the weekly digest by email and the AI executive summary on the dashboard, and workforce intelligence Q&a answers a plain-English question when one comes up. Team-level review stays with managers in their own manager workspace.',
    howItWorksNote: 'Owners open the dashboard for real-time activity and the AI executive summary, receive the weekly digest by email, and use workforce intelligence Q&a for questions such as attention areas.',
    features: ['workforceAnalytics', 'aiReports', 'remoteHybrid', 'managerWorkspace'],
    privacy: false,
    benefits: ['AI executive summary on the dashboard', 'Weekly digest delivered by email', 'Plain-English questions in workforce intelligence Q&a'],
    useCases: [
      { title: 'The Monday Read', description: 'Skim the weekly digest before the week starts and open the dashboard only for what stands out.' },
      { title: 'Asking One Question', description: 'Ask workforce intelligence Q&a for overall workforce or burnout signals instead of requesting a custom report.' },
    ],
    faq: [
      { question: 'Do business owners need to review individual employee data?', answer: 'No, workforce analytics and AI workforce reports provide an organization-level view.' },
      { question: 'Does ZUZU work for a fully remote business?', answer: 'Yes, the same capabilities apply regardless of where the team works.' },
      { question: 'How much setup does a business owner need to do to get value from ZUZU?', answer: 'Installation is straightforward, download the installer, run it, and enter a 16-character activation code to connect a device. From there, workforce analytics and AI workforce reports populate on their own, without the owner having to configure individual team settings.' },
      { question: 'Can a business owner try ZUZU before committing to a paid plan?', answer: 'Yes, there\'s a 7-day free trial covering up to 10 employees, no card required. Paid organizations activate after payment, with pricing based on employee headcount at checkout.' },
      { question: 'Does ZUZU guarantee that visibility will increase productivity or revenue?', answer: 'No, ZUZU does not guarantee productivity or revenue increases. It provides workforce visibility and analytics; what an owner does with that information is up to them.' },
      { question: 'Can a business owner delegate day-to-day review to managers while still keeping the high-level view?', answer: 'Yes, managers get their own team-scoped manager workspace, while the owner\'s workforce analytics and AI workforce reports stay at the organization level, so day-to-day review and high-level oversight don\'t have to be the same task.' },
      { question: 'Does ZUZU flag burnout risk that an owner would otherwise only notice after someone quits?', answer: 'ZUZU includes a wellbeing and burnout forecast that projects risk from working-hour patterns, with the drivers behind it and a weeks-to-risk estimate for rising trends. It\'s explicitly a forecast meant to prompt a conversation, not a diagnosis, and ZUZU does not predict who will quit.' },
      { question: 'What is in the AI Executive Summary an owner sees?', answer: 'Most improved, top performers, overloaded and disengaged, shown on the dashboard as signals to review with the activity behind them, not as automatic actions.' },
    ],
    related: ['operations', 'executives', 'it-admins'],
    externalLinks: [{ title: 'AI Workforce Reports', description: 'The organization-wide report this role relies on.', href: '/ai-analytics/ai-workforce-reports' }],
  },
  {
    slug: 'it-admins',
    title: 'ZUZU for IT Administrators',
    cluster: 'leadership',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU for IT admins: roll out the Windows agent with activation codes, track pending to activated, and use platform status, API key logs and contact support.',
    intro:
      'For IT, a rollout is measured in devices that are actually reporting. The agent is a Windows-only installer of roughly 80 MB, run on each machine; the employee stays pending in employees until it has run once with their 16-character activation code, then shows activated. After that IT watches last activity, platform status and API key logs, and raises questions through contact support.',
    howItWorksNote: 'IT tracks the rollout as employees move from pending to activated in employees, sets the monitoring policy centrally in the admin portal rather than from the tray, and uses platform status, API key logs and contact support afterwards.',
    features: ['windowsAgent', 'adminPortal', 'privacyControls', 'managerWorkspace'],
    privacy: true,
    benefits: ['Pending to activated shows rollout progress', 'One monitoring policy set centrally, not from the tray', 'Platform status, API key logs and contact support in the portal'],
    useCases: [
      { title: 'Rolling Out to a Department', description: 'Install the agent on each device, enter each activation code, and watch employees until nobody is left pending.' },
      { title: 'A Device Stops Reporting', description: 'Check last activity in employees, then the documented causes: the employee was deactivated, is on a personal laptop without having punched in, or the organisation is suspended for billing.' },
    ],
    faq: [
      { question: 'Why is an employee still Pending?', answer: 'An employee stays pending until the desktop agent has run once with their activation code, then shows as activated. Deactivating from employees revokes the agent\'s token and tracking stops.' },
      { question: 'Where does IT check whether ZUZU itself is healthy, and get help?', answer: 'Platform status shows live checks, incidents, maintenance and 30 days of history; contact support raises tickets from inside the admin portal, and suggest a feature sits alongside them.' },
      { question: 'What does the Windows Agent installer actually involve for IT to deploy?', answer: 'It\'s a Windows-only installer, roughly 80 MB, run on each device. After setup, the device is connected using a 16-character activation code. Once installed, the agent runs from the system tray, queues captures while offline, and updates itself from the organization\'s release feed.' },
      { question: 'Does ZUZU support macOS or Linux devices, or non-Windows endpoints generally?', answer: 'No, the desktop agent is Windows-only; there is no macOS or Linux agent, so non-Windows devices can\'t be monitored.' },
      { question: 'What screenshot capture settings can IT configure?', answer: 'IT admins can set the capture interval, 1–5 minutes, or a custom interval, and configure retention (90 days by default) through the admin portal. Private regions such as passwords, banking, webmail, messaging, password managers and desktop notifications are redacted on-device before anything is stored or uploaded.' },
      { question: 'How is admin and API access secured?', answer: 'ZUZU supports two-factor authentication (MFA/OTP-based) and capability-based access control, with audit trails covering events like employee, team, manager, shift, leave, report, payment and live-capture activity, plus a dedicated API key logs feature for tracking API key usage.' },
      { question: 'Why has an agent stopped tracking?', answer: 'The documented causes are: the employee was deactivated in employees; the employee is on a personal device and has not punched in for the shift; or the organisation is suspended for billing. The employee\'s last-seen time shows whether the agent is running.' },
      { question: 'How does the agent behave when a device loses network connectivity?', answer: 'It keeps working, captures are queued locally while the device is offline and sync once it reconnects, so IT doesn\'t need to worry about gaps from short connectivity drops.' },
    ],
    related: ['business-owners', 'managers', 'hr'],
    externalLinks: [{ title: 'Admin Dashboard', description: 'The organization-wide configuration IT admins manage.', href: '/admin/dashboard' }],
  },
  {
    slug: 'executives',
    title: 'ZUZU for Executives',
    cluster: 'leadership',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU for executives: organisation-level insights, organisation health, department benchmarking, period comparison and the weekly digest, with team detail left to managers.',
    intro:
      'An executive reads the organisation, not individuals. The dashboard\'s AI executive summary, the organisation-wide AI workforce reports and the weekly digest give that altitude, and insights adds organisation health, department benchmarking and workforce intelligence Q&a. Wellbeing forecasts appear as a pattern to discuss rather than a ranking, and ZUZU does not predict attrition.',
    howItWorksNote: 'Executives read the AI executive summary and weekly digest, ask workforce intelligence Q&a about trends, and export a period comparison or AI workforce report as PDF for a leadership meeting.',
    features: ['aiReports', 'workforceAnalytics', 'adminPortal', 'behaviourIntelligence'],
    privacy: false,
    benefits: ['Organisation health and executive highlights at the top', 'Period comparison ready for a leadership meeting', 'Team-level detail stays with managers'],
    useCases: [
      { title: 'Preparing for a Leadership Meeting', description: 'Export a period comparison and the organisation\'s AI workforce report as PDF, and add the latest weekly digest.' },
      { title: 'Following Up a Shift', description: 'When department benchmarking shows one department diverging, ask workforce intelligence Q&a about it and hand the follow-up to that department\'s managers.' },
    ],
    faq: [
      { question: 'Do executives need to review individual team data?', answer: 'No, executive workforce insights are framed at the organization level.' },
      { question: 'What sits in the AI Executive Summary?', answer: 'Most improved, top performers, overloaded and disengaged, alongside organisation health and department benchmarking in insights, all reviewable signals with the observation behind them.' },
      { question: 'Does ZUZU give executives an organization-wide burnout or wellbeing signal?', answer: 'Yes, the wellbeing and burnout forecast rolls up into workforce analytics at the organization level, showing risk patterns and drivers across the company. This is framed in-product as a forecast to prompt conversations, not a performance ranking or a clinical diagnosis.' },
      { question: 'Can executives export workforce data for a board or leadership meeting?', answer: 'Yes, AI workforce reports and workforce analytics can be exported as CSV, Excel or PDF, and organisation-level exports are available, so executives can bring a report into a leadership or board meeting without rebuilding it manually.' },
      { question: 'Does ZUZU predict attrition or turnover risk that executives could act on strategically?', answer: 'No, ZUZU does not predict turnover or who will quit. Behaviour intelligence surfaces changes from an individual\'s own baseline as a review-queue item, not an organization-wide attrition forecast.' },
      { question: 'How is the executive view different from what operations or business owners see?', answer: 'It\'s the same underlying workforce analytics and AI workforce reports, executives get it framed at the full-organization level (organisation health, executive highlights, department benchmarking) rather than the department-level or team-level cuts operations and managers work from.' },
      { question: 'Would an executive ever end up looking at an individual employee\'s screenshots or activity log?', answer: 'That\'s not the point of the executive view, executive workforce insights are built from organization-level analytics and reports; individual screenshots and activity logs are accessed through the admin portal or manager workspace, not the executive framing.' },
      { question: 'Do executives have to log in to keep up?', answer: 'Not necessarily, the weekly digest is delivered by email, to the whole organisation or a specific manager, and reports can be exported as PDF for a meeting.' },
    ],
    related: ['business-owners', 'operations', 'it-admins'],
    externalLinks: [{ title: 'Executive Workforce Insights', description: 'The dedicated page for this audience.', href: '/ai-analytics/executive-workforce-insights' }],
  },
]

export const rolesCluster = {
  key: 'roles',
  basePath: '/roles',
  badgeLabel: 'Roles',
  hubTitle: 'ZUZU for Every Role',
  hubDescription:
    'How ZUZU supports HR, managers, operations, business owners, IT administrators and executives, each with a different, genuinely relevant subset of the same underlying capabilities.',
  hubMetaDescription:
    'ZUZU for HR, managers, operations, business owners, IT administrators and executives.',
  groups: ROLES_GROUPS,
  pages: ROLES_PAGES,
  // The hub page had no FAQ section. Reused verbatim from this cluster's own
  // 'hr' page (same array reference, not a copy) rather than writing new
  // questions -- already-verified, on-topic content for this cluster.
  faq: ROLES_PAGES.find((page) => page.slug === 'hr').faq,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Industries', href: '/industries' },
    { label: 'Use Cases', href: '/use-cases' },
  ],
}
