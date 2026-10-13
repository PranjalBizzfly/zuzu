/*
  Structured content for the ZUZU Activity & Attendance Ecosystem
  (Phase 06). Same pattern as clusters/platform.js and
  clusters/timeAttendance.js.

  This is a deliberately curated subset of the topics the phase brief
  suggested -- roughly half of the suggested list already exists almost
  verbatim in the platform and time-attendance clusters (e.g. "Time &
  Attendance", "Employee Activity Tracking", "Desktop Activity
  Monitoring", "Attendance Reports", "Team Attendance"). Rather than
  publish near-duplicate pages, those topics are left alone and this
  cluster only covers genuinely distinct angles, cross-linked into the
  existing pages via `externalLinks` instead of being re-created here.

  `sectionOrder` varies the ClusterPage template's middle-block order
  per page so the pages don't all read top-to-bottom identically.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const ACTIVITY_GROUPS = [
  { key: 'activity', label: 'Activity' },
  { key: 'attendance', label: 'Attendance' },
  { key: 'productivity', label: 'Productivity & Workflow' },
]

// Hub-level FAQ for /activity -- see timeAttendance.js for the pattern.
// Stays at "whole ecosystem" altitude rather than repeating any single
// leaf page's own FAQ below.
const ACTIVITY_HUB_FAQ = [
  {
    question: 'What does the Activity & Attendance ecosystem cover?',
    answer: 'Application and site usage, active vs. idle time, attendance cadence and productivity trends, all built from the same Windows agent activity data.',
  },
  {
    question: 'How is employee activity measured?',
    answer: 'By tracking application and website usage alongside active and idle periods through the Windows agent, not by scoring individual keystrokes.',
  },
  {
    question: 'Is activity tracking the same as screenshot monitoring?',
    answer: 'No, activity tracking covers app and site usage and active vs. idle time. Screenshots are a separate, configurable capture governed by privacy controls.',
  },
  {
    question: 'Can activity data be viewed for a whole team, not just one employee?',
    answer: 'Yes, activity and attendance data can be reviewed at the individual, team or organization level through the manager workspace and admin portal.',
  },
  {
    question: 'Does activity tracking work the same for remote employees?',
    answer: 'Yes, tracking works the same way regardless of where the Windows agent is running.',
  },
  {
    question: 'Can activity and attendance data be exported?',
    answer: 'Yes, as CSV, Excel or PDF, and it also feeds into AI daily reports.',
  },
  {
    question: 'Does ZUZU flag unusual activity patterns automatically?',
    answer: "Pattern changes are surfaced through behaviour intelligence, which compares activity to an individual's own baseline rather than a fixed productivity score.",
  },
  {
    question: 'What happens to activity tracking if a device goes offline?',
    answer: "The Windows agent queues captures locally while offline and syncs them once the connection returns, so activity data isn't lost.",
  },
]

export const ACTIVITY_PAGES = [
  {
    slug: 'employee-work-activity',
    title: 'Employee Work Activity',
    cluster: 'activity',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription:
      'Employee work activity is the underlying app, site and task data ZUZU captures through the Windows agent, the foundation for every activity report.',
    intro:
      "Employee work activity is the raw material behind everything ZUZU reports on: the apps, sites and tasks that make up someone's working day. Understanding what this data actually is makes every report and dashboard built on top of it easier to trust.",
    howItWorksNote:
      'The Windows agent captures work activity continuously; everything else in ZUZU, reports, analytics, insights, is built from this same data.',
    features: ['employeeActivity', 'windowsAgent', 'privacyControls', 'timeAttendance'],
    privacy: true,
    benefits: [
      'A single source of truth behind every ZUZU report',
      'Captured automatically, with no manual logging',
      'Governed by configurable privacy controls',
    ],
    useCases: [
      { title: 'Understanding What ZUZU Actually Tracks', description: "Get a clear picture of the data behind ZUZU's reports." },
      { title: 'Explaining Monitoring to a New Team', description: "Give a straightforward answer when employees ask what's tracked." },
    ],
    faq: [
      { question: "What counts as 'work activity' in ZUZU?", answer: 'Apps, sites and tasks captured through the Windows agent during working hours.' },
      { question: 'Is work activity data configurable?', answer: 'Yes, through privacy controls in the admin portal.' },
      { question: 'Does employee work activity tracking work when someone is offline?', answer: 'Yes, the Windows agent queues captures while offline and syncs once the device reconnects.' },
      { question: 'How large is the Windows Agent installer?', answer: 'The Windows agent installer is roughly 80 MB.' },
      { question: 'Does ZUZU track activity on Mac or Linux computers?', answer: "No, the ZUZU desktop agent is Windows-only; there's no macOS or Linux agent." },
      { question: 'Where does the Windows Agent run once installed?', answer: "It runs from the system tray on the employee's Windows device." },
      { question: "How is the agent installed on an employee's computer?", answer: 'An admin or employee downloads the installer, runs setup, and enters a 16-character activation code to connect it to the organization.' },
      { question: 'Does the agent update itself automatically?', answer: "Yes, it receives updates from the organization's release feed." },
    ],
    related: ['application-usage-monitoring', 'employee-activity-reports', 'activity-trends'],
    externalLinks: [{ title: 'Employee Activity', description: 'The product-page overview of this capability.', href: '/product/employee-activity' }],
  },
  {
    slug: 'application-usage-monitoring',
    title: 'Application Usage Monitoring',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU application usage monitoring shows which apps and sites employees use during the workday, as part of employee activity data.',
    intro:
      "Application usage monitoring looks specifically at which applications and websites employees use during the workday. It's one layer of the broader employee activity data ZUZU captures, focused on the tools people actually spend time in.",
    howItWorksNote: 'Application and site usage is recorded as employees work, then organized into a per-app breakdown.',
    features: ['employeeActivity', 'screenshotMonitoring', 'aiReports', 'privacyControls'],
    privacy: true,
    benefits: [
      'A clear breakdown of where time goes by application',
      'Built from existing employee activity data',
      'Configurable through privacy controls',
    ],
    useCases: [
      { title: 'Understanding Tool Usage Across a Team', description: 'See which applications get the most use.' },
      { title: 'Spotting Unused Licensed Software', description: 'Notice tools that are barely used day to day.' },
    ],
    faq: [
      {
        question: 'Does application usage monitoring track every app?',
        answer: 'It reflects application and site activity captured through the Windows agent, subject to privacy controls.',
      },
      { question: 'Can I see usage by individual or by team?', answer: 'Both, through the manager workspace or admin portal.' },
      { question: 'Does application usage monitoring track GPS or physical location?', answer: 'No, ZUZU does not track GPS or physical location; application usage monitoring is limited to which apps and sites are used on the device.' },
      { question: 'Can application usage be reviewed for a remote employee?', answer: "Yes, it's based on activity captured through the Windows agent, regardless of where the employee is working." },
      { question: 'Is application usage data available in real time?', answer: "Application usage is captured continuously as employees work." },
      { question: 'Can application usage monitoring be limited to certain hours?', answer: 'Working-hours scoping is handled through time & attendance and privacy controls configuration in the admin portal.' },
      { question: 'Does application usage monitoring include screenshots?', answer: "Screenshot monitoring is a separate, configurable capability; application usage is its own activity data, though the two can be reviewed together." },
      { question: 'Who configures which applications are monitored?', answer: 'Application activity is captured broadly through the Windows agent; what\'s visible and to whom is governed by privacy controls in the admin portal.' },
    ],
    related: ['employee-work-activity', 'employee-activity-reports', 'work-pattern-insights'],
    externalLinks: [
      { title: 'Workplace Activity Intelligence', description: 'How ZUZU turns activity data into patterns.', href: '/platform/workplace-activity-intelligence' },
    ],
  },
  {
    slug: 'employee-activity-reports',
    title: 'Employee Activity Reports',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "ZUZU employee activity reports summarize an individual's activity data automatically through AI reports.",
    intro:
      "Employee activity reports summarize one person's activity data over a chosen period, so a manager doesn't have to piece it together from raw logs. ZUZU generates these through AI reports, built on the same employee activity data captured by the Windows agent.",
    howItWorksNote: 'AI reports pull from ongoing activity data and summarize it into an individual report on demand.',
    features: ['employeeActivity', 'aiReports', 'managerWorkspace', 'privacyControls'],
    privacy: true,
    benefits: [
      'A ready summary, not a raw activity log',
      'Available on demand, not just on a schedule',
      'Consistent format for every employee',
    ],
    useCases: [
      { title: 'Preparing for a 1:1', description: "Review an individual's activity summary before a conversation." },
      { title: 'Answering a Specific Question', description: 'Pull a report to check on a specific period.' },
    ],
    faq: [
      { question: 'How often are employee activity reports generated?', answer: 'On demand, from ongoing activity data, not on a fixed schedule.' },
      {
        question: "Who can access an individual's activity report?",
        answer: 'Managers and admins, through the manager workspace and admin portal.',
      },
      { question: 'Can an employee activity report be exported?', answer: 'Yes, like other ZUZU reports, it can be exported to CSV, Excel or PDF.' },
      { question: 'Does an employee activity report include screenshots?', answer: 'No, this report is scoped to activity data; screenshot context is part of the broader AI employee report.' },
      { question: 'Can I generate this report for a custom date range?', answer: "Yes, it's available on demand for a selected period, not just a fixed schedule." },
      { question: 'Is an employee activity report the same as an AI employee report?', answer: 'No, an activity report is scoped to activity data alone; the AI employee report combines activity, attendance and screenshot context.' },
      { question: 'Does this report flag unusual activity automatically?', answer: 'No, flagging pattern changes is handled separately by behaviour intelligence; this report summarizes activity data.' },
      { question: 'Can this report be reviewed for a former employee?', answer: "Report availability follows the organization's configured data retention." },
    ],
    related: ['team-activity-reports', 'department-activity-reports', 'work-activity-insights'],
    externalLinks: [
      { title: 'Employee Work Analytics', description: 'Individual-level analytics across the ZUZU platform.', href: '/platform/employee-work-analytics' },
    ],
  },
  {
    slug: 'team-activity-reports',
    title: 'Team Activity Reports',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU team activity reports aggregate activity data across a team, generated automatically through AI reports.',
    intro:
      'Team activity reports roll individual activity data up to the team level, so a manager can see how the group is working without opening each person\'s record separately. ZUZU builds these from the same AI reports engine used for individual reports.',
    howItWorksNote: 'Individual activity records are aggregated to the team level before a report is generated.',
    features: ['employeeActivity', 'aiReports', 'managerWorkspace', 'workforceAnalytics'],
    privacy: false,
    benefits: [
      'Team-level view without opening individual records',
      'Same underlying data as individual reports, aggregated',
      'Useful for spotting group-level patterns',
    ],
    useCases: [
      { title: 'Weekly Team Check-Ins', description: 'Review team activity before a weekly meeting.' },
      { title: 'Comparing Teams', description: 'See how activity patterns differ between teams.' },
    ],
    faq: [
      { question: 'How is a team activity report different from an individual one?', answer: 'It aggregates activity data across a team instead of one employee.' },
      { question: 'Can admins see team reports across the organization?', answer: 'Yes, through the admin portal.' },
      { question: 'Can a team activity report be exported?', answer: 'Yes, it can be exported to CSV, Excel or PDF, like other ZUZU reports.' },
      { question: 'Does a team activity report show individual breakdowns, or only totals?', answer: 'It aggregates activity to the team level; individual detail is available separately through employee activity reports.' },
      { question: 'Can this report be generated for a custom time period?', answer: "Yes, it's available on demand for a selected period." },
      { question: 'Does a team activity report include attendance data?', answer: 'No, this report is scoped to activity data; attendance is covered through time & attendance reports.' },
      { question: 'Who can generate a team activity report?', answer: 'Managers, through the manager workspace, for their assigned team, and admins organisation-wide through the admin portal.' },
      { question: 'Is a team activity report affected by who\'s on the team changing mid-period?', answer: 'The report reflects activity data for whoever is on the team during the selected period.' },
    ],
    related: ['employee-activity-reports', 'department-activity-reports', 'manager-activity-overview'],
    externalLinks: [
      { title: 'Team Productivity Monitoring', description: 'The platform page on team-level productivity monitoring.', href: '/platform/team-productivity-monitoring' },
    ],
  },
  {
    slug: 'department-activity-reports',
    title: 'Department Activity Reports',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU department activity reports aggregate activity data at the department level for admins and leadership.',
    intro:
      'Department activity reports take the same underlying activity data and roll it up further, to the department or business-unit level. It\'s the view built for admins comparing how different parts of the organization work, not any one team.',
    howItWorksNote: 'Team-level activity data is aggregated further, up to the department level, through the admin portal.',
    features: ['employeeActivity', 'workforceAnalytics', 'adminPortal', 'privacyControls'],
    privacy: true,
    benefits: [
      'An organization-wide view, not just one team',
      'Built for comparing departments, not individuals',
      'Configurable through privacy controls',
    ],
    useCases: [
      { title: 'Comparing Departments', description: 'See how activity patterns differ across business units.' },
      { title: 'Leadership Reporting', description: 'Give leadership a department-level activity summary.' },
    ],
    faq: [
      { question: 'Who can see department activity reports?', answer: 'Admins, through the admin portal.' },
      { question: 'How is this different from a team activity report?', answer: 'It aggregates further, to the department level rather than a single team.' },
      { question: 'Can a department activity report be exported?', answer: 'Yes, it can be exported to CSV, Excel or PDF.' },
      { question: 'Is a department activity report available to managers?', answer: "It's built for admins through the admin portal; managers primarily work with team-scoped reports in the manager workspace." },
      { question: 'How is a department defined in ZUZU?', answer: 'Department structure is configured by admins in the admin portal, grouping teams together.' },
      { question: 'Does this report include attendance alongside activity?', answer: 'This report is scoped to activity data; department-level attendance is covered separately.' },
      { question: 'Can I compare two departments side by side?', answer: 'Yes, department activity reports are built for comparing how different parts of the organization work.' },
      { question: 'Does a department report show individual employee names?', answer: "It's aggregated to the department level; individual detail is available separately through employee-level reports." },
    ],
    related: ['team-activity-reports', 'activity-trends', 'department-attendance'],
    externalLinks: [
      { title: 'Workforce Analytics Software', description: 'Organization-wide analytics across the ZUZU platform.', href: '/platform/workforce-analytics-software' },
    ],
  },
  {
    slug: 'activity-trends',
    title: 'Activity Trends',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU activity trends show how activity data changes over time, built from ongoing employee activity and workforce analytics data.',
    intro:
      'Activity trends look at how activity data changes over time, busier weeks, quieter periods, shifts after a policy change, rather than a single snapshot. ZUZU builds this view from the same employee activity data used across the platform.',
    howItWorksNote: 'Activity data is compared across periods to surface trends, rather than shown only as a point-in-time report.',
    features: ['employeeActivity', 'workforceAnalytics', 'aiReports', 'behaviourIntelligence'],
    privacy: false,
    benefits: [
      'A trend view, not just a single snapshot',
      'Useful for spotting change over time',
      'Built from data already being captured',
    ],
    useCases: [
      { title: 'Tracking Change After a Policy Update', description: 'See how activity shifted after a change in working arrangements.' },
      { title: 'Spotting a Seasonal Dip', description: 'Notice recurring quiet periods across the year.' },
    ],
    faq: [
      { question: 'What period do activity trends cover?', answer: 'Trends can be reviewed across weeks or months of activity data.' },
      { question: 'Is activity trend data available per team?', answer: 'Yes, alongside organization-wide views.' },
      { question: 'Can activity trends be exported for a presentation?', answer: 'Yes, trend data can be exported to CSV, Excel or PDF, like other ZUZU reports.' },
      { question: 'Does ZUZU predict future activity trends, or only show past ones?', answer: "This view shows how activity has changed over past periods; it doesn't forecast future activity levels." },
      { question: 'Who can view activity trends, managers, admins, or both?', answer: "Managers see trend data for their own assigned team through manager workspace; admins can review it organization-wide through the admin portal and workforce analytics." },
      { question: 'How does an activity trend differ from a behaviour change?', answer: "Activity trends show data changing over time at a team or org level; behaviour changes compare an individual's activity to their own baseline." },
      { question: 'Can I compare activity trends before and after a specific event?', answer: 'Yes, trends can be reviewed across whichever periods you want to compare, such as before and after a policy change.' },
      { question: 'Is trend data available going back multiple months?', answer: 'Trends can be reviewed across weeks or months of activity data, depending on what\'s retained.' },
    ],
    related: ['department-activity-reports', 'work-pattern-insights', 'productivity-through-activity-insights'],
    externalLinks: [
      { title: 'Workday Intelligence Platform', description: 'How ZUZU builds a picture of a working day over time.', href: '/platform/workday-intelligence-platform' },
    ],
  },
  {
    slug: 'work-activity-insights',
    title: 'Work Activity Insights',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU work activity insights interpret activity data into insight for managers, through AI reports and behaviour intelligence.',
    intro:
      "Work activity insights go one step past a report, interpreting what activity data actually suggests about how a team is working, not just displaying the numbers. ZUZU builds these insights through AI reports and behaviour intelligence.",
    howItWorksNote: 'AI reports and behaviour intelligence process activity data into an interpreted insight, not just a raw summary.',
    features: ['aiReports', 'behaviourIntelligence', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Interpreted insight, not just raw activity data',
      'Built on the same data as every other ZUZU report',
      'Delivered directly in the manager workspace',
    ],
    useCases: [
      { title: 'Understanding What a Report Means', description: 'Get interpreted insight instead of just numbers.' },
      { title: 'Preparing Talking Points for a Review', description: 'Bring insight, not just data, into a team conversation.' },
    ],
    faq: [
      {
        question: 'How are work activity insights different from a report?',
        answer: 'Reports summarize data; insights interpret what it suggests, through AI reports and behaviour intelligence.',
      },
      { question: 'Where can I find work activity insights?', answer: 'In the manager workspace.' },
      { question: 'Does ZUZU generate work activity insights automatically, or on request?', answer: "They're available on demand through AI reports and behaviour intelligence, built from ongoing activity data." },
      { question: 'Can work activity insights be exported?', answer: 'The underlying reports and data feeding these insights can be exported to CSV, Excel or PDF.' },
      { question: 'Do work activity insights name a specific cause for a pattern?', answer: 'Insights are framed as interpreted context, not a definitive explanation, understanding the cause is left to a manager.' },
      { question: 'How do work activity insights relate to a productivity score?', answer: "ZUZU includes a productivity score. Work activity insights are interpreted context, built through AI reports and behaviour intelligence, for a manager to interpret." },
      { question: 'Can insights be reviewed for a whole team, not just one person?', answer: 'Yes, insights are available at both the individual and team level.' },
      { question: 'Does Behaviour Intelligence feed into work activity insights?', answer: 'Yes, these insights are built through AI reports and behaviour intelligence together.' },
    ],
    related: ['employee-activity-reports', 'activity-trends', 'work-pattern-insights'],
    externalLinks: [
      { title: 'Employee Performance Insights', description: 'Performance-focused insight across the ZUZU platform.', href: '/platform/employee-performance-insights' },
    ],
  },
  {
    slug: 'weekly-attendance',
    title: 'Weekly Attendance',
    cluster: 'attendance',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU weekly attendance rolls up daily time & attendance data into a week-at-a-glance view for managers.',
    intro:
      'Weekly attendance gives a manager a week-at-a-glance view of who was working and when, rather than checking a single day at a time. ZUZU builds this from the same time & attendance data captured every day.',
    howItWorksNote: 'Daily attendance records are grouped into a weekly view, without any extra setup.',
    features: ['timeAttendance', 'managerWorkspace', 'aiReports', 'remoteHybrid'],
    privacy: false,
    benefits: [
      'A week-at-a-glance view instead of day-by-day checking',
      'Built from existing daily attendance data',
      'Consistent for remote, hybrid and in-office teams',
    ],
    useCases: [
      { title: 'Weekly Team Reviews', description: "Check the week's attendance before a Monday review." },
      { title: 'Spotting a Pattern Across the Week', description: 'See which days attendance dips or peaks.' },
    ],
    faq: [
      { question: 'Is weekly attendance built from separate data?', answer: 'No, it rolls up the same daily attendance data ZUZU already captures.' },
      { question: 'Can weekly attendance be viewed per team?', answer: 'Yes, through the manager workspace.' },
      { question: 'Can weekly attendance be exported?', answer: 'Yes, it can be exported to CSV, Excel or PDF, like other ZUZU reports.' },
      { question: 'Does weekly attendance work the same for remote and hybrid teams?', answer: "Yes, it's built from the same time & attendance data regardless of where employees are working." },
      { question: 'Can weekly attendance be reviewed alongside activity data?', answer: 'Yes, weekly attendance and activity data can both be reviewed together in the manager workspace.' },
      { question: 'Is weekly attendance available to admins as well as managers?', answer: "Yes, admins can review it organisation-wide through the admin portal, alongside a manager's team-scoped view." },
      { question: 'Does a weekly view show which days someone was absent?', answer: 'Yes, it groups daily attendance records into a week-at-a-glance view, including which days were worked.' },
      { question: 'How does weekly attendance relate to monthly attendance?', answer: 'Weekly attendance rolls up daily data into a week; monthly attendance aggregates further into a full-month view.' },
    ],
    related: ['monthly-attendance', 'department-attendance', 'employee-work-activity'],
    externalLinks: [
      { title: 'Daily Attendance Reports', description: 'The day-level attendance report this view rolls up.', href: '/time-attendance/daily-attendance-reports' },
    ],
  },
  {
    slug: 'monthly-attendance',
    title: 'Monthly Attendance',
    cluster: 'attendance',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU monthly attendance provides a full-month view of attendance data for admins and leadership.',
    intro:
      'Monthly attendance zooms out further, giving admins a full-month view of attendance across the organization, useful for monthly reviews or spotting slower-moving trends day-to-day views can miss.',
    howItWorksNote: 'Weekly attendance data is aggregated further into a monthly view for admins.',
    features: ['timeAttendance', 'adminPortal', 'workforceAnalytics', 'aiReports'],
    privacy: false,
    benefits: [
      'A full-month view for longer review cycles',
      'Useful alongside monthly reporting reviews',
      'Built from the same underlying attendance data',
    ],
    useCases: [
      { title: 'Monthly Attendance Reviews', description: 'Review the full month before a leadership meeting.' },
      { title: 'Month-End Review', description: 'Check attendance for a calendar month before a review.' },
    ],
    faq: [
      { question: 'Who typically reviews monthly attendance?', answer: 'Admins and leadership, through the admin portal.' },
      { question: 'Does monthly attendance require separate configuration?', answer: 'No, it\'s built from the same time & attendance data as daily and weekly views.' },
      { question: 'Can monthly attendance be exported for payroll use?', answer: "Yes, it can be exported to CSV, Excel or PDF, which supports feeding attendance data into a payroll process; ZUZU itself doesn't process payroll directly." },
      { question: 'Is monthly attendance available to managers, or only admins?', answer: "It's primarily built for admins through the admin portal; managers work mainly with daily and weekly views in the manager workspace." },
      { question: 'Does monthly attendance show attendance trends, or just a summary?', answer: 'It provides a full-month summary; longer-term trend analysis is covered separately through workforce analytics.' },
      { question: 'Can monthly attendance be compared across two different months?', answer: 'Yes, monthly views can be generated for different periods and compared.' },
      { question: 'Does monthly attendance include remote and hybrid employees the same way?', answer: "Yes, it's built from the same time & attendance data regardless of work location." },
      { question: 'Is monthly attendance affected by employees joining or leaving mid-month?', answer: 'The view reflects attendance data for whoever was active during the selected month.' },
    ],
    related: ['weekly-attendance', 'department-attendance', 'productivity-through-activity-insights'],
    externalLinks: [
      { title: 'Workforce Attendance Analytics', description: 'Trend analytics built on the same attendance data.', href: '/time-attendance/workforce-attendance-analytics' },
    ],
  },
  {
    slug: 'department-attendance',
    title: 'Department Attendance',
    cluster: 'attendance',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU department attendance aggregates attendance data at the department level for admins comparing business units.',
    intro:
      'Department attendance rolls individual and team attendance data up to the department level, giving admins a way to compare attendance across business units rather than just within a single team.',
    howItWorksNote: 'Team-level attendance data is aggregated further to the department level through the admin portal.',
    features: ['timeAttendance', 'adminPortal', 'workforceAnalytics', 'privacyControls'],
    privacy: true,
    benefits: [
      'A department-level view for comparing business units',
      'Built for admins, not just individual managers',
      'Configurable through privacy controls',
    ],
    useCases: [
      { title: 'Comparing Departments', description: 'See how attendance differs across business units.' },
      { title: 'Org-Wide Attendance Reviews', description: 'Review attendance across the whole organization, not one team.' },
    ],
    faq: [
      { question: 'Who can view department attendance?', answer: 'Admins, through the admin portal.' },
      { question: 'How does department attendance relate to team attendance?', answer: 'It aggregates team-level attendance data further, to the department level.' },
      { question: 'Can department attendance be exported?', answer: 'Yes, it can be exported to CSV, Excel or PDF.' },
      { question: 'Is department attendance available to managers?', answer: "It's built for admins comparing across the organization; managers primarily see their own team's attendance in the manager workspace." },
      { question: 'How is a department defined for this report?', answer: 'Department structure is configured by admins in the admin portal, the same structure used across other department-level reports.' },
      { question: 'Does department attendance include activity data too?', answer: 'No, this report is scoped to attendance data; department-level activity is covered by department activity reports.' },
      { question: 'Can department attendance be reviewed over multiple months?', answer: 'Yes, it can be generated across a range of periods for longer comparison.' },
      { question: 'Does department attendance flag departments with lower attendance automatically?', answer: 'No, it presents the data for admins to review; interpreting what a difference means is left to your organization.' },
    ],
    related: ['weekly-attendance', 'monthly-attendance', 'department-activity-reports'],
    externalLinks: [
      { title: 'Team Attendance Dashboard', description: 'The team-level attendance view this rolls up from.', href: '/time-attendance/team-attendance-dashboard' },
    ],
  },
  {
    slug: 'productivity-through-activity-insights',
    title: 'Productivity Through Activity Insights',
    cluster: 'productivity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU connects activity data to productivity context through AI reports and behaviour intelligence, for managers to interpret.',
    intro:
      "Productivity through activity insights is about connecting the dots between activity data and what it actually means for productivity, not assuming more activity equals more output, but giving managers the context to judge that themselves.",
    howItWorksNote: 'Activity and behaviour data are combined into context a manager can use to judge productivity. ZUZU also includes a productivity score.',
    features: ['employeeActivity', 'behaviourIntelligence', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Context for productivity conversations, not just a score',
      'Built from data already captured, no extra tooling',
      'Delivered directly in the manager workspace',
    ],
    useCases: [
      { title: 'Framing a Productivity Conversation', description: 'Bring activity context into a 1:1 rather than raw numbers alone.' },
      { title: 'Checking Assumptions', description: "See whether an assumption about a team's workload holds up in the data." },
    ],
    faq: [
      { question: 'Does ZUZU have a productivity score?', answer: 'Yes, ZUZU includes a productivity score, and role context (a description of what each role is expected to do) helps the engine judge observed activity.' },
      { question: 'What data feeds into this?', answer: 'Employee activity and behaviour intelligence data, through AI reports.' },
      { question: 'Does ZUZU calculate a single productivity percentage?', answer: "The productivity rate is a separate workforce analytics metric. Activity and behaviour data are surfaced as context for managers to interpret." },
      { question: 'Can this insight be reviewed for a whole team?', answer: 'Yes, both individual and team-level views are available.' },
      { question: "Does more activity always mean more productivity in ZUZU's view?", answer: "No, more activity doesn't automatically equal more output; it's presented as context for a manager to judge, not a conclusion." },
      { question: 'Does this require any setup beyond the existing Windows Agent?', answer: "No, it's built from the same employee activity and behaviour intelligence data the Windows agent already collects, with nothing extra to configure." },
      { question: 'Is this available on demand or only on a schedule?', answer: "It's available on demand, built from data already being captured." },
      { question: 'Does ZUZU guarantee a productivity increase from using this insight?', answer: "No, ZUZU doesn't guarantee productivity or revenue increases; it provides context, and outcomes depend on how your organization acts on it." },
    ],
    related: ['work-pattern-insights', 'work-activity-insights', 'manager-activity-overview'],
    externalLinks: [
      { title: 'Employee Productivity Software', description: 'The broader ZUZU productivity software page.', href: '/platform/employee-productivity-software' },
    ],
  },
  {
    slug: 'work-pattern-insights',
    title: 'Work Pattern Insights',
    cluster: 'productivity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU work pattern insights surface team work rhythms and patterns through behaviour intelligence.',
    intro:
      "Work pattern insights look at the rhythm of how a team works, when activity peaks, when it's quiet, how patterns differ between people, using behaviour intelligence rather than a single day's data.",
    howItWorksNote: 'Behaviour intelligence analyzes activity data across time to surface recurring patterns, not just isolated events.',
    features: ['behaviourIntelligence', 'employeeActivity', 'workforceAnalytics', 'privacyControls'],
    privacy: true,
    benefits: [
      "Patterns across time, not a single day's snapshot",
      'Built on behaviour intelligence, already part of ZUZU',
      'Configurable through privacy controls',
    ],
    useCases: [
      { title: 'Understanding Team Rhythm', description: 'See when a team is typically most active.' },
      { title: 'Spotting a Shift in Pattern', description: "Notice when a team's working rhythm changes." },
    ],
    faq: [
      { question: "What does 'work pattern' mean in ZUZU?", answer: 'Recurring rhythms in activity data, surfaced through behaviour intelligence.' },
      { question: 'Is this the same as an activity trend?', answer: 'Related but different, activity trends track change over time; work pattern insights focus on recurring rhythm.' },
      { question: 'Can work pattern insights be reviewed for an individual, not just a team?', answer: 'This view is primarily built for team-level rhythm; individual pattern data is available through behaviour baselines and related activity views.' },
      { question: 'Does a work pattern insight predict future behaviour?', answer: "No, it surfaces recurring rhythms from historical activity data; it doesn't forecast future patterns." },
      { question: 'How far back does work pattern data go?', answer: 'Patterns are built from activity data across time; the exact retention depends on organisation configuration.' },
      { question: 'Can work pattern insights help with scheduling meetings?', answer: 'Yes, seeing when a team is typically most active can help with scheduling, similar to the desktop activity heatmap.' },
      { question: 'Does a shift in work pattern get flagged automatically?', answer: 'Yes, a meaningful shift is the basis for a behaviour change, surfaced through behaviour intelligence for a manager to review.' },
      { question: 'Is work pattern data specific to Windows activity, or does it include attendance too?', answer: 'It\'s built primarily from employee activity data, though time & attendance data can inform the same rhythm view.' },
    ],
    related: ['activity-trends', 'productivity-through-activity-insights', 'work-activity-insights'],
    externalLinks: [
      { title: 'AI Workforce Intelligence Platform', description: 'How ZUZU applies AI across workforce data.', href: '/platform/ai-workforce-intelligence-platform' },
    ],
  },
  {
    slug: 'manager-activity-overview',
    title: 'Manager Activity Overview',
    cluster: 'productivity',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "ZUZU's manager activity overview brings activity, attendance and reports together in the manager workspace for team managers.",
    intro:
      'Manager activity overview is the single-screen view built specifically for managers, activity, attendance and reports for their own team, without needing to piece it together from separate pages.',
    howItWorksNote: "Activity, attendance and report data for a manager's team are surfaced together in the manager workspace.",
    features: ['managerWorkspace', 'employeeActivity', 'timeAttendance', 'aiReports'],
    privacy: false,
    benefits: [
      'Everything a manager needs in one workspace',
      'No switching between separate tools or pages',
      "Scoped to a manager's own team",
    ],
    useCases: [
      { title: 'Daily Team Check-Ins', description: 'Start the day with a single view of the team.' },
      { title: 'Preparing for a Team Meeting', description: 'Pull activity, attendance and reports from one place.' },
    ],
    faq: [
      { question: 'What does the manager activity overview include?', answer: "Activity, attendance and AI reports for a manager's team, in one workspace." },
      {
        question: 'Is this different from the Admin Portal?',
        answer: "Yes, the manager workspace is scoped to a manager's own team; the admin portal covers the whole organization.",
      },
      { question: 'Are AI Reports part of the manager activity overview?', answer: "Yes, AI reports for the manager's team appear in the manager workspace alongside activity, attendance and behaviour insights." },
      { question: 'Does the manager activity overview include behaviour insights?', answer: 'Yes, behaviour insights and flagged changes appear alongside activity, attendance and AI reports in the manager workspace.' },
      { question: 'Can a manager see employees outside their assigned team from this overview?', answer: "No, a manager's view is scoped strictly to their own assigned team." },
      { question: 'Is the manager activity overview updated in real time?', answer: "It reflects ongoing activity, attendance and report data as it's captured." },
      { question: 'Can this overview be exported?', answer: 'The underlying activity, attendance and report data it draws on can be exported to CSV, Excel or PDF.' },
      { question: 'Does a newly assigned manager get this overview automatically?', answer: 'Yes, once an admin assigns a manager to a team in the admin portal, that team\'s activity overview becomes available in their manager workspace without further setup.' },
    ],
    related: ['team-activity-reports', 'work-activity-insights', 'productivity-through-activity-insights'],
    externalLinks: [
      { title: 'Manager Workspace', description: 'The product-page overview of this capability.', href: '/product/manager-workspace' },
    ],
  },
  {
    slug: 'website-usage-tracking',
    title: 'Website Usage Tracking',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU website usage tracking gives visibility into which websites are visited during work hours, as part of employee activity data.',
    intro:
      "Website usage tracking looks specifically at which websites employees visit while working, distinct from the applications they open. ZUZU surfaces this as part of the same employee activity data captured by the Windows agent, so teams can see site-level activity alongside app-level activity.",
    howItWorksNote: 'Website visits are captured as part of ongoing activity data, then organized into a site-level view subject to privacy controls.',
    features: ['employeeActivity', 'screenshotMonitoring', 'aiReports', 'privacyControls'],
    privacy: true,
    benefits: [
      'Visibility into site-level activity, not just app-level',
      'Built from existing employee activity data',
      'Configurable through privacy controls',
    ],
    useCases: [
      { title: 'Understanding Where Time Online Goes', description: 'See which websites get the most attention during work hours.' },
      { title: 'Reviewing Site Access Policies', description: 'Check whether current browsing patterns match expectations.' },
    ],
    faq: [
      { question: 'What does website usage tracking show?', answer: 'Which websites were visited during working hours, as part of employee activity data.' },
      { question: 'Is website usage tracking separate from application monitoring?', answer: "No, it's the same employee activity data, viewed at the site level rather than the app level." },
      { question: 'Can website usage tracking be turned off for certain roles?', answer: 'Yes, through privacy controls in the admin portal.' },
      { question: 'Does ZUZU track every website visited?', answer: 'It reflects site activity captured through the Windows agent, subject to privacy controls configuration.' },
      { question: 'Who can view website usage data?', answer: 'Managers and admins, through the manager workspace or admin portal.' },
      { question: 'Is website usage shown per employee or aggregated?', answer: 'Both views are available, depending on where you look.' },
      { question: 'Does website usage tracking work for remote employees?', answer: 'Yes, it captures activity from the Windows agent regardless of work location.' },
      {
        question: 'How does website usage tracking relate to app category visibility?',
        answer: "It's a related but separate view, this focuses on individual sites, while category visibility groups sites and apps into admin-configured categories.",
      },
    ],
    related: ['application-usage-monitoring', 'browser-tab-and-site-activity-tracking', 'app-category-usage-breakdown'],
    externalLinks: [
      { title: 'Screenshot + Privacy Ecosystem', description: 'How ZUZU balances visibility with configurable privacy.', href: '/screenshot-privacy' },
    ],
  },
  {
    slug: 'idle-time-tracking',
    title: 'Idle Time Tracking',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU idle time tracking shows periods of inactivity alongside active work time, built from employee activity and time & attendance data.',
    intro:
      'Idle time tracking looks at the gaps, moments with no recorded keyboard, mouse or application activity, and shows them next to active work time. It\'s a way to see the full picture of a working day, not just the busy parts.',
    howItWorksNote: 'Periods without detected activity are recorded alongside active time, then surfaced together in a single view.',
    features: ['employeeActivity', 'timeAttendance', 'aiReports', 'workforceAnalytics'],
    privacy: false,
    benefits: [
      'A fuller picture of a working day, not just active moments',
      'Built from the same activity and attendance data already captured',
      'Useful context before drawing conclusions from active time alone',
    ],
    useCases: [
      { title: 'Understanding a Quiet Stretch', description: 'Check whether a gap in activity lines up with a break or meeting.' },
      { title: 'Reviewing Idle Patterns Before a Conversation', description: 'Bring context on idle time into a 1:1 rather than raw numbers.' },
    ],
    faq: [
      { question: 'What counts as idle time in ZUZU?', answer: 'Periods with no detected keyboard, mouse or application activity.' },
      { question: "Does idle time automatically mean someone wasn't working?", answer: "No, idle time is shown as context; it doesn't label a period as non-work." },
      { question: 'Can idle time be reviewed alongside attendance data?', answer: 'Yes, idle time tracking draws on both employee activity and time & attendance data.' },
      { question: 'Is idle time tracked continuously?', answer: "Yes, through the Windows agent, for as long as it's active on a device." },
      { question: 'Can idle thresholds be adjusted?', answer: 'Idle time reflects activity captured through the Windows agent; configuration options live in the admin portal.' },
      { question: 'Who can see idle time data?', answer: 'Managers and admins, through the manager workspace or admin portal.' },
      { question: 'Does idle time tracking work the same for hybrid teams?', answer: "Yes, it's based on device activity rather than location." },
      { question: 'How is idle time different from an attendance gap?', answer: "Idle time is about activity within a logged-in session; attendance covers whether someone is clocked in at all." },
    ],
    related: ['active-vs-idle-time-reports', 'employee-work-activity', 'weekly-attendance'],
    externalLinks: [
      { title: 'Time & Attendance Management', description: 'The broader time and attendance capability idle time complements.', href: '/time-attendance' },
    ],
  },
  {
    slug: 'active-vs-idle-time-reports',
    title: 'Active vs Idle Time Reports',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU active vs idle time reports compare active work time against idle periods, generated through AI reports.',
    intro:
      'Active vs idle time reports put the two side by side for a chosen period, so a manager can see the ratio at a glance rather than reviewing active time and idle time as separate data points.',
    howItWorksNote: 'AI reports combine active and idle time data into a single comparative report for a selected period.',
    features: ['employeeActivity', 'aiReports', 'timeAttendance', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Active and idle time compared in one report, not two',
      'Available on demand for any selected period',
      'Built on data already captured, no extra setup',
    ],
    useCases: [
      { title: 'Reviewing a Specific Day or Week', description: "Pull an active-vs-idle comparison for a period worth a closer look." },
      { title: 'Comparing Across a Team', description: 'See how the active-to-idle ratio varies between team members.' },
    ],
    faq: [
      { question: 'What does an active vs idle time report show?', answer: 'A side-by-side comparison of active work time and idle periods for a chosen period.' },
      { question: 'Can I generate this report for a custom date range?', answer: 'Yes, through AI reports in the manager workspace or admin portal.' },
      { question: 'Does a high idle ratio flag a problem automatically?', answer: 'No, the report presents the comparison as context for a manager to interpret.' },
      { question: 'Is this report available at the team level?', answer: 'Yes, alongside individual-level reports.' },
      { question: 'How often can this report be generated?', answer: 'On demand, whenever it\'s needed, rather than on a fixed schedule.' },
      { question: 'What data feeds an active vs idle time report?', answer: 'The same employee activity and time & attendance data captured continuously by the Windows agent.' },
      { question: 'Can this report be exported?', answer: 'Yes, through the reports + exports ecosystem.' },
      { question: 'Is this different from idle time tracking?', answer: 'Idle time tracking surfaces the underlying data; this report specifically compares it against active time.' },
    ],
    related: ['idle-time-tracking', 'employee-activity-reports', 'work-activity-insights'],
    externalLinks: [
      { title: 'Reports + Exports Ecosystem', description: 'Where generated reports like this one can be exported.', href: '/reports' },
    ],
  },
  {
    slug: 'top-applications-usage-report',
    title: 'Top Applications Usage Report',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "ZUZU's top applications usage report ranks the most-used applications over a period, built through AI reports.",
    intro:
      "The top applications usage report ranks which applications saw the most use over a chosen period, giving a quick answer to what the team is actually using without scrolling through a full activity log.",
    howItWorksNote: 'Application usage data is ranked by time spent and surfaced as a top-N list for a selected period.',
    features: ['employeeActivity', 'aiReports', 'workforceAnalytics', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "A ranked answer to what's actually used most",
      'Useful for spotting a tool that dominates the day',
      'Generated on demand from existing activity data',
    ],
    useCases: [
      { title: 'Checking Tool Adoption', description: 'See whether a newly rolled-out application is showing up near the top of usage.' },
      { title: 'Planning a License Review', description: 'Use ranked usage as one input before a licensing conversation.' },
    ],
    faq: [
      {
        question: 'How many applications does the top applications report show?',
        answer: 'It surfaces a ranked list of the most-used applications for the selected period; the exact count can vary by view.',
      },
      { question: 'Is the ranking based on time or number of opens?', answer: 'It\'s based on recorded usage time captured through the Windows agent.' },
      { question: 'Can I filter this report by team?', answer: 'Yes, through the manager workspace.' },
      { question: 'Does this report include websites as well as applications?', answer: 'This report focuses on applications; website-level activity is covered separately.' },
      { question: 'Can admins see this ranking organization-wide?', answer: 'Yes, through the admin portal.' },
      { question: 'How far back can this report look?', answer: 'It can be generated for a range of periods, from a single day to longer stretches.' },
      { question: 'Does a high ranking mean an app is used productively?', answer: 'No, the report shows usage volume; whether that use is productive is for a manager to judge.' },
      { question: 'Is this report available for a single employee?', answer: 'Yes, individual and team-level versions are both available.' },
    ],
    related: ['application-usage-monitoring', 'app-category-usage-breakdown', 'team-application-usage-comparison'],
    externalLinks: [
      { title: 'AI Reports + Workforce Analytics', description: 'The reporting engine behind this ranked view.', href: '/ai-analytics' },
    ],
  },
  {
    slug: 'configurable-app-category-usage-visibility',
    title: 'Configurable App Category Usage Visibility',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU gives visibility into usage grouped by admin-configured app categories, rather than raw per-app data alone.',
    intro:
      'Configurable app category usage visibility lets an admin group applications and sites into categories that make sense for their organization, then view usage rolled up by those categories rather than one app at a time.',
    howItWorksNote: 'Admins define categories in the admin portal; activity data is then grouped and displayed according to those definitions.',
    features: ['employeeActivity', 'aiReports', 'privacyControls', 'managerWorkspace'],
    privacy: true,
    benefits: [
      'Usage grouped by categories your organization defines',
      'A step above raw per-app data for a quick read',
      'Category definitions stay under admin control',
    ],
    useCases: [
      { title: 'Setting Up Categories for a New Team', description: 'Group relevant tools into categories that match how the team actually works.' },
      { title: 'Reviewing Usage Without Listing Every App', description: 'Look at category-level usage instead of a long per-app list.' },
    ],
    faq: [
      { question: 'Who defines the app categories used in ZUZU?', answer: "Admins configure categories in the admin portal, ZUZU doesn't assign categories on its own." },
      { question: 'Does ZUZU label apps as productive or unproductive automatically?', answer: "No, categories are admin-configured; ZUZU doesn't apply that judgment by itself." },
      { question: 'Can categories be changed after they\'re set up?', answer: 'Yes, admins can update category definitions in the admin portal at any time.' },
      { question: 'Is category usage visible to managers as well as admins?', answer: 'Yes, through the manager workspace, based on the categories admins have configured.' },
      { question: 'How many categories can an organization define?', answer: "Categories are configurable to fit an organization's own setup." },
      { question: 'Does this replace per-app usage data?', answer: "No, it's an additional view alongside per-app data, not a replacement." },
      { question: 'Is category usage subject to Privacy Controls?', answer: 'Yes, the same privacy controls that govern other activity data apply here.' },
      { question: 'Can one application belong to more than one category?', answer: 'Category setup is managed in the admin portal, where this kind of configuration is handled.' },
    ],
    related: ['app-category-usage-breakdown', 'top-applications-usage-report', 'application-usage-monitoring'],
    externalLinks: [
      { title: 'Admin Portal + Security & Governance', description: 'Where app categories are configured.', href: '/admin' },
    ],
  },
  {
    slug: 'app-category-usage-breakdown',
    title: 'App Category Usage Breakdown',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "ZUZU's app category usage breakdown shows how time is distributed across admin-configured application categories.",
    intro:
      'The app category usage breakdown takes the categories an admin has configured and shows how time is actually distributed across them, a distribution view rather than a single ranked list.',
    howItWorksNote: 'Usage data is aggregated into admin-configured categories and displayed as a proportional breakdown for a chosen period.',
    features: ['employeeActivity', 'aiReports', 'workforceAnalytics', 'adminPortal'],
    privacy: true,
    benefits: [
      'A distribution view across categories, not just a top list',
      'Reflects categories your own organization defined',
      'Useful for spotting a shift in category balance over time',
    ],
    useCases: [
      { title: 'Checking Category Balance', description: 'See whether time distribution across categories matches expectations.' },
      { title: 'Comparing Before and After a Policy Change', description: 'Look at how the category breakdown shifts after a change in tools or policy.' },
    ],
    faq: [
      {
        question: 'How is a category breakdown different from a ranked usage report?',
        answer: 'A breakdown shows proportional distribution across categories; a ranked report lists individual apps by usage.',
      },
      { question: 'Can the breakdown be viewed by team or department?', answer: 'Yes, through the manager workspace and admin portal.' },
      { question: 'Does the breakdown update automatically as categories change?', answer: 'It reflects the categories currently configured in the admin portal.' },
      { question: 'Is this breakdown based on time spent or number of sessions?', answer: 'It\'s based on recorded usage time within each category.' },
      { question: 'Can I compare category breakdowns across two periods?', answer: 'Yes, breakdowns can be generated for different periods and compared.' },
      { question: 'Who sets up the categories this breakdown uses?', answer: "Admins, through the admin portal, ZUZU doesn't create categories on its own." },
      {
        question: 'Is category usage breakdown available at the individual level?',
        answer: "It's primarily built for team and department-level views, alongside individual activity data.",
      },
      { question: 'Does this breakdown include idle time?', answer: 'No, it reflects active usage within categorized applications and sites.' },
    ],
    related: ['configurable-app-category-usage-visibility', 'top-applications-usage-report', 'department-activity-reports'],
    externalLinks: [
      { title: 'Workforce Analytics Software', description: 'Organization-wide analytics this breakdown feeds into.', href: '/platform/workforce-analytics-software' },
    ],
  },
  {
    slug: 'browser-tab-and-site-activity-tracking',
    title: 'Browser Tab & Site Activity Tracking',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU tracks activity at the browser tab and site level, giving finer-grained visibility than application-level tracking alone.',
    intro:
      'Browser tab and site activity tracking goes one level deeper than general application monitoring, looking at which sites and tabs are active within the browser itself. It\'s a more granular view for organizations that need it, governed by the same privacy controls as other activity data.',
    howItWorksNote: 'The Windows agent captures active browser tab and site information as part of ongoing activity data, subject to privacy controls.',
    features: ['employeeActivity', 'screenshotMonitoring', 'privacyControls', 'aiReports'],
    privacy: true,
    benefits: [
      'Finer-grained visibility than application-level tracking alone',
      'Governed by the same configurable privacy controls',
      'Useful where site-level detail matters more than app-level detail',
    ],
    useCases: [
      { title: 'Reviewing Browser-Heavy Roles', description: 'Get tab-level detail for roles where most work happens in the browser.' },
      { title: 'Auditing Site Access', description: "Check specific site activity when a more general report isn't detailed enough." },
    ],
    faq: [
      { question: 'How is browser tab tracking different from website usage tracking?', answer: 'Website usage tracking shows visited sites generally; this view adds tab-level detail within the browser.' },
      { question: 'Can browser tab tracking be limited to certain roles?', answer: 'Yes, through privacy controls in the admin portal.' },
      { question: 'Does this track every open tab or the active one?', answer: 'It reflects tab and site activity captured through the Windows agent as employees work.' },
      { question: 'Is browser tab data included in screenshots?', answer: 'Screenshot monitoring is a separate, configurable capability; browser tab tracking is its own activity data.' },
      { question: 'Who can view browser tab and site activity?', answer: 'Managers and admins, through the manager workspace or admin portal, subject to privacy controls.' },
      {
        question: "Can employees see what's being tracked about their browsing?",
        answer: "Transparency around what's captured depends on how an organization configures and communicates its privacy controls.",
      },
      { question: 'Does browser tracking work across different browsers?', answer: "It's captured through the Windows agent as part of general activity data." },
      { question: 'Is this feature required, or can it be disabled?', answer: 'It can be configured through privacy controls in the admin portal.' },
    ],
    related: ['website-usage-tracking', 'application-usage-monitoring', 'daily-application-timeline-view'],
    externalLinks: [
      { title: 'Security & Privacy Controls', description: 'How ZUZU governs what activity data is captured.', href: '/security' },
    ],
  },
  {
    slug: 'daily-application-timeline-view',
    title: 'Daily Application Timeline View',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "ZUZU's daily application timeline view lays out a day's application usage in chronological order.",
    intro:
      "The daily application timeline view lays out a single day chronologically, which application was active, and when, rather than summarizing everything into totals. It's a way to walk through a day step by step instead of only seeing the end totals.",
    howItWorksNote: 'Application activity captured through the Windows agent is ordered chronologically into a per-day timeline.',
    features: ['employeeActivity', 'aiReports', 'managerWorkspace', 'windowsAgent'],
    privacy: true,
    benefits: [
      'A chronological walk-through of a day, not just totals',
      'Useful for understanding the sequence of a working day',
      'Built from the same data as other activity reports',
    ],
    useCases: [
      { title: 'Reconstructing a Specific Day', description: 'Walk through what happened during a particular day, in order.' },
      { title: 'Understanding a Reported Issue', description: 'Check the timeline around a specific point in the day.' },
    ],
    faq: [
      { question: 'What does the daily application timeline show?', answer: 'Which application was active and when, laid out in chronological order for a single day.' },
      { question: 'Is the timeline available for any past day?', answer: 'It can be generated for days within the retained activity data.' },
      { question: 'Does the timeline show idle gaps as well?', answer: 'The timeline focuses on application activity; idle time is covered in dedicated idle time views.' },
      { question: 'Can a timeline be pulled for a whole team?', answer: "It's primarily an individual-level view, alongside team-level reports elsewhere in ZUZU." },
      { question: 'Who can access a daily timeline view?', answer: 'Managers and admins, through the manager workspace or admin portal.' },
      { question: 'Does the timeline include website detail?', answer: 'It reflects application-level activity; site-level detail is available through related views.' },
      { question: 'Is the timeline generated automatically or on request?', answer: "It's generated on demand from ongoing activity data." },
      { question: 'How is this different from an activity trend?', answer: 'A timeline covers a single day in sequence; trends compare activity across multiple periods.' },
    ],
    related: ['browser-tab-and-site-activity-tracking', 'employee-work-activity', 'desktop-activity-heatmap-by-time-of-day'],
    externalLinks: [
      { title: 'Windows Agent', description: 'The agent that captures the activity data behind this timeline.', href: '/windows-agent' },
    ],
  },
  {
    slug: 'team-application-usage-comparison',
    title: 'Team Application Usage Comparison',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU compares application usage across members of a team, built through workforce analytics.',
    intro:
      'Team application usage comparison puts individual usage side by side across a team, so a manager can see how tool usage varies from person to person rather than only looking at a team-wide total.',
    howItWorksNote: 'Individual application usage data is aligned and compared across a team through workforce analytics.',
    features: ['employeeActivity', 'workforceAnalytics', 'managerWorkspace', 'aiReports'],
    privacy: false,
    benefits: [
      'Person-by-person comparison, not just a team total',
      'Useful for spotting uneven tool adoption within a team',
      'Built on the same usage data as other reports',
    ],
    useCases: [
      { title: 'Checking Rollout Consistency', description: 'See whether everyone on a team is using a newly adopted tool similarly.' },
      { title: 'Understanding Variation Within a Team', description: 'Compare how usage differs between team members before drawing conclusions.' },
    ],
    faq: [
      {
        question: 'How does team application usage comparison differ from a top applications report?',
        answer: 'A top applications report ranks apps; this view compares usage of the same apps across individual team members.',
      },
      { question: 'Can this comparison include more than one application at a time?', answer: 'Yes, usage across several applications can be compared for the same team.' },
      { question: 'Is this comparison visible to admins as well as managers?', answer: 'Yes, through the admin portal in addition to the manager workspace.' },
      { question: 'Does uneven usage automatically indicate a problem?', answer: 'No, the comparison surfaces the data; interpreting it is left to the manager.' },
      {
        question: 'Can I compare usage across two different teams?',
        answer: 'This view is built around comparing individuals within one team; cross-team comparison is available through department-level reports.',
      },
      { question: 'How far back can a usage comparison look?', answer: 'It can be generated across a range of periods, similar to other activity reports.' },
      { question: 'Is this comparison based on time spent or session count?', answer: "It's based on recorded usage time captured through the Windows agent." },
      { question: 'Does this comparison work for hybrid or remote teams?', answer: "Yes, it's based on device activity data rather than location." },
    ],
    related: ['top-applications-usage-report', 'team-activity-reports', 'new-software-tool-adoption-tracking'],
    externalLinks: [
      { title: 'Team Productivity Monitoring', description: 'The broader team-level view this comparison sits alongside.', href: '/platform/team-productivity-monitoring' },
    ],
  },
  {
    slug: 'after-hours-application-activity-tracking',
    title: 'After-Hours Application Activity Tracking',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU tracks application activity that falls outside normal working hours, using behaviour intelligence to flag the pattern.',
    intro:
      "After-hours application activity tracking looks specifically at usage that falls outside an employee's normal working hours, useful for understanding overtime patterns or unusual timing, without needing to comb through a full daily timeline.",
    howItWorksNote: 'Activity data is compared against defined working hours, and usage outside that window is surfaced through behaviour intelligence.',
    features: ['employeeActivity', 'timeAttendance', 'behaviourIntelligence', 'aiReports'],
    privacy: true,
    benefits: [
      'Focused specifically on activity outside normal hours',
      'Useful context for overtime or workload conversations',
      'Built on existing activity and attendance data',
    ],
    useCases: [
      { title: 'Reviewing Overtime Patterns', description: 'Check whether after-hours activity is a one-off or a recurring pattern.' },
      { title: 'Supporting a Workload Conversation', description: 'Bring after-hours activity data into a discussion about balance.' },
    ],
    faq: [
      { question: "What counts as 'after hours' in this tracking?", answer: 'Activity recorded outside the working hours defined for that employee or team.' },
      { question: 'Does after-hours tracking require a separate setup?', answer: 'It\'s built from existing activity and attendance data; working hours are defined through time & attendance settings.' },
      { question: 'Is after-hours activity flagged automatically?', answer: 'Behaviour intelligence surfaces it as a pattern for review, rather than an automatic alert with a predefined outcome.' },
      { question: 'Can this be reviewed at the team level?', answer: 'Yes, alongside individual-level views.' },
      { question: 'Does after-hours tracking distinguish between apps and websites?', answer: 'It reflects the same employee activity data used elsewhere, covering both.' },
      { question: 'Who can view after-hours activity data?', answer: 'Managers and admins, through the manager workspace or admin portal, subject to privacy controls.' },
      {
        question: 'Is occasional after-hours activity treated differently from a recurring pattern?',
        answer: 'Behaviour intelligence looks at data across time, so a recurring pattern is more visible than a single occurrence.',
      },
      { question: 'Can after-hours tracking help with compliance reviews?', answer: 'It provides visibility into timing that can support a broader compliance or workload review, alongside other data.' },
    ],
    related: ['idle-time-tracking', 'weekly-attendance', 'work-pattern-insights'],
    externalLinks: [
      { title: 'Remote & Hybrid Workforce', description: 'How ZUZU supports visibility across flexible working hours.', href: '/remote-workforce' },
    ],
  },
  {
    slug: 'desktop-productivity-snapshot',
    title: 'Desktop Productivity Snapshot',
    cluster: 'productivity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "ZUZU's desktop productivity snapshot gives a single, current view of desktop activity for quick review.",
    intro:
      'The desktop productivity snapshot condenses current desktop activity into a single view, active application, recent usage, current status, for a quick check rather than a full report.',
    howItWorksNote: 'Current activity data is pulled together into a single snapshot view, refreshed as new activity is captured.',
    features: ['employeeActivity', 'aiReports', 'workforceAnalytics', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A quick, single-view check rather than a full report',
      'Reflects current activity, not a historical summary',
      'Useful for a fast status check during the day',
    ],
    useCases: [
      { title: 'Quick Midday Check-In', description: 'Get a fast read on current activity without pulling a full report.' },
      { title: 'Spot-Checking Before a Message or Call', description: 'Check a snapshot before reaching out to someone.' },
    ],
    faq: [
      { question: 'How current is the data in a desktop productivity snapshot?', answer: 'It reflects recently captured activity, refreshed as new data comes in.' },
      { question: 'Is a snapshot the same as a full activity report?', answer: 'No, a snapshot is a condensed, single-view check; full reports cover more detail over a period.' },
      {
        question: 'Can a snapshot be pulled for a whole team at once?',
        answer: 'Snapshots are primarily viewed per employee, alongside team-level reports elsewhere in ZUZU.',
      },
      { question: 'Does a snapshot include historical data?', answer: "It's focused on current activity rather than a historical summary." },
      { question: 'Who can view a desktop productivity snapshot?', answer: 'Managers, through the manager workspace.' },
      { question: 'Is snapshot data stored for later reference?', answer: 'The underlying activity data is retained as part of normal activity data; the snapshot itself is a current-moment view.' },
      { question: 'Can I customize what appears in a snapshot?', answer: 'The snapshot draws on standard activity data captured through the Windows agent.' },
      { question: 'Does a snapshot replace the need for weekly reports?', answer: 'No, it\'s meant for a quick check, while weekly and monthly reports cover longer periods.' },
    ],
    related: ['work-activity-insights', 'manager-activity-overview', 'focus-time-vs-context-switching-insights'],
    externalLinks: [
      { title: 'Manager Workspace', description: 'Where a desktop productivity snapshot is typically viewed.', href: '/manager' },
    ],
  },
  {
    slug: 'software-license-utilization-visibility',
    title: 'Software Usage Visibility by Application',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'See how much time employees spend in each application, drawn from the application usage the Windows agent already records.',
    intro:
      'Software usage visibility uses the application activity ZUZU already records to show how much time goes to each tool over a chosen period. It shows usage only: ZUZU does not track licences, seats or licence terms.',
    howItWorksNote: 'Application usage recorded by the Windows agent is grouped by application to show time spent over a chosen period.',
    features: ['employeeActivity', 'workforceAnalytics', 'aiReports', 'adminPortal'],
    privacy: false,
    benefits: [
      'Time per application drawn from data already captured',
      'No separate audit process required',
      'Useful context when reviewing which tools a team relies on',
    ],
    useCases: [
      { title: 'Reviewing Which Tools a Team Uses', description: 'Check recorded usage time by application before a tooling discussion.' },
      { title: 'Spotting Little-Used Software', description: 'Spot applications with low recorded usage.' },
    ],
    faq: [
      { question: 'Does ZUZU track licence counts or seats?', answer: 'No. ZUZU shows how much time is spent in applications; licence counts, seats and terms are managed elsewhere.' },
      { question: 'How is software usage calculated?', answer: 'From recorded application usage time for the tool in question, over a selected period.' },
      { question: 'Can usage data decide whether to change a subscription?', answer: 'It gives usage context that can inform the conversation, alongside other factors. ZUZU does not audit licences.' },
      { question: 'Can usage be reviewed for a whole organization?', answer: 'Yes, admins can review application usage across the organization from the admin portal, and managers see their own team.' },
      { question: 'Does low usage always mean a tool is unnecessary?', answer: 'No. Usage data is one input; a tool can matter even when it is used briefly.' },
      { question: 'Who can access this usage data?', answer: 'Admins through the admin portal, and managers for their own team.' },
      { question: 'Does this require a separate licence management system?', answer: 'No. It is built from application usage the Windows agent already captures, and it does not replace a licence management system.' },
      { question: 'Can usage be reviewed over several months?', answer: 'Yes, usage can be reviewed across a range of periods within the retention window, which is 90 days by default and configurable by admins.' },
    ],
    related: ['top-applications-usage-report', 'new-software-tool-adoption-tracking', 'app-category-usage-breakdown'],
    externalLinks: [
      { title: 'Admin Portal + Security & Governance', description: 'Where application usage can be reviewed.', href: '/admin' },
    ],
  },
  {
    slug: 'focus-time-vs-context-switching-insights',
    title: 'Focus Time vs Context-Switching Insights',
    cluster: 'productivity',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU surfaces insight into focus time versus frequent app switching, through behaviour intelligence.',
    intro:
      "Focus time vs context-switching insights look at how often attention moves between applications, contrasting stretches of sustained focus against periods of frequent switching. It's a way to look beyond total time and into how that time was actually spent.",
    howItWorksNote: 'Behaviour intelligence analyzes the frequency of application switches within activity data to distinguish focus periods from fragmented ones.',
    features: ['employeeActivity', 'behaviourIntelligence', 'workforceAnalytics', 'aiReports'],
    privacy: true,
    benefits: [
      'Looks at how time was spent, not just how much',
      'Distinguishes sustained focus from frequent switching',
      'Built on behaviour intelligence, already part of ZUZU',
    ],
    useCases: [
      { title: 'Understanding a Fragmented Day', description: 'See whether a day was broken up by frequent switching rather than sustained work.' },
      { title: 'Supporting a Workflow Conversation', description: 'Bring focus-time context into a discussion about interruptions.' },
    ],
    faq: [
      { question: "What counts as a 'context switch' in this insight?", answer: 'A change in active application, tracked as part of ongoing activity data.' },
      { question: 'Does frequent switching automatically mean lower output?', answer: 'No, the insight surfaces the pattern; interpreting what it means is left to a manager.' },
      {
        question: 'Is focus time the same as active time?',
        answer: 'Related but different, active time is about activity being present at all; focus time looks at how long that activity stays on one thing.',
      },
      { question: 'Can this insight be reviewed for a team as well as an individual?', answer: 'Yes, both individual and team-level views are available.' },
      { question: 'Does this insight track which specific apps caused switching?', answer: 'It\'s built on the same application activity data, so switching patterns can relate back to specific apps.' },
      {
        question: 'How is this different from work pattern insights?',
        answer: 'Work pattern insights look at rhythm across a day or week; this looks specifically at focus versus switching within activity.',
      },
      { question: 'Is this available on demand or on a schedule?', answer: 'It can be generated on demand through AI reports and behaviour intelligence.' },
      { question: 'Who can view focus time vs context-switching insights?', answer: 'Managers and admins, through the manager workspace or admin portal.' },
    ],
    related: ['work-pattern-insights', 'productivity-through-activity-insights', 'desktop-productivity-snapshot'],
    externalLinks: [
      { title: 'Behaviour Intelligence + Manager Workspace', description: 'The engine behind this focus-time insight.', href: '/manager' },
    ],
  },
  {
    slug: 'new-software-tool-adoption-tracking',
    title: 'New Software Tool Adoption Tracking',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU tracks adoption of a newly rolled-out software tool using existing application usage data.',
    intro:
      'New software tool adoption tracking uses the same application usage data ZUZU already captures to show how quickly, and how consistently, a newly introduced tool is actually being picked up across a team or organization.',
    howItWorksNote: 'Usage of a specified application is tracked over time from its rollout date, without requiring separate setup.',
    features: ['employeeActivity', 'workforceAnalytics', 'aiReports', 'adminPortal'],
    privacy: false,
    benefits: [
      'Adoption tracked from data already being captured',
      'No separate rollout survey required',
      'Useful for spotting uneven adoption early',
    ],
    useCases: [
      { title: 'Monitoring a Tool Rollout', description: 'Check adoption in the weeks after introducing a new tool.' },
      { title: "Identifying Teams That Haven't Adopted a Tool", description: 'Spot where usage is lagging behind the rest of the organization.' },
    ],
    faq: [
      { question: 'How does ZUZU track adoption of a new tool?', answer: 'By tracking usage of that application over time from its rollout, using existing activity data.' },
      { question: 'Does this require configuring the new tool in ZUZU first?', answer: 'It relies on application usage already being captured through the Windows agent.' },
      { question: 'Can adoption tracking compare teams against each other?', answer: 'Yes, adoption can be reviewed across teams or departments.' },
      { question: 'How soon after a rollout can adoption be reviewed?', answer: 'As soon as usage data starts being captured, adoption trends can be reviewed.' },
      { question: "Does adoption tracking show why a tool isn't being used?", answer: 'It shows usage patterns; the reasons behind low adoption are a matter for follow-up conversations.' },
      {
        question: 'Is this different from a top applications usage report?',
        answer: 'A top applications report ranks all apps by usage; this tracks the adoption trend of one specific tool over time.',
      },
      { question: 'Who typically reviews software adoption tracking?', answer: 'Admins and managers overseeing a rollout, through the admin portal or manager workspace.' },
      { question: 'Can adoption tracking span several months?', answer: 'Yes, usage trends for a specific tool can be reviewed across an extended period.' },
    ],
    related: ['team-application-usage-comparison', 'software-license-utilization-visibility', 'activity-trends'],
    externalLinks: [
      { title: 'Learning & Resources', description: 'Guidance that can support a new tool rollout.', href: '/learning' },
    ],
  },
  {
    slug: 'desktop-activity-heatmap-by-time-of-day',
    title: 'Desktop Activity Heatmap by Time of Day',
    cluster: 'activity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "ZUZU's desktop activity heatmap shows activity intensity across the hours of the day, built through workforce analytics.",
    intro:
      'The desktop activity heatmap visualizes activity intensity across the hours of the day, making it easy to see at a glance when a team is typically busiest, rather than reading through a list of numbers by hour.',
    howItWorksNote: 'Activity data is aggregated by hour and rendered as a heatmap, with intensity reflecting recorded activity levels.',
    features: ['employeeActivity', 'workforceAnalytics', 'aiReports', 'behaviourIntelligence'],
    privacy: false,
    benefits: [
      'A visual read on busy and quiet hours, not a numbers table',
      "Useful for understanding a team's daily rhythm at a glance",
      'Built from the same activity data used across ZUZU',
    ],
    useCases: [
      { title: 'Scheduling Around Busy Hours', description: 'Use the heatmap to see when a team is typically most active before scheduling meetings.' },
      { title: 'Comparing Rhythm Across Teams', description: 'See how the busiest hours differ between two teams.' },
    ],
    faq: [
      { question: 'What does the desktop activity heatmap actually show?', answer: 'Activity intensity across the hours of the day, visualized rather than listed as numbers.' },
      { question: 'Is the heatmap based on a single day or averaged across days?', answer: 'It can reflect a single day or an aggregated view across a chosen period.' },
      { question: 'Can the heatmap be viewed per employee?', answer: 'Yes, alongside team and department-level views.' },
      {
        question: 'How does the heatmap relate to work pattern insights?',
        answer: 'Work pattern insights interpret recurring rhythms; the heatmap is a direct visual view of activity intensity by hour.',
      },
      { question: 'Does the heatmap include idle time?', answer: 'It reflects recorded activity levels; idle periods show as lower intensity.' },
      { question: 'Can I compare heatmaps across two different weeks?', answer: 'Yes, heatmaps can be generated for different periods and compared side by side.' },
      { question: 'Who can view the desktop activity heatmap?', answer: 'Managers and admins, through the manager workspace or admin portal.' },
      { question: 'Is the heatmap built from separate tracking?', answer: "No, it's built from the same employee activity data captured by the Windows agent." },
    ],
    related: ['work-pattern-insights', 'daily-application-timeline-view', 'activity-trends'],
    externalLinks: [
      { title: 'AI Workforce Intelligence Platform', description: 'How ZUZU visualizes workforce data like this heatmap.', href: '/platform' },
    ],
  },
]

export const activityCluster = {
  key: 'activity',
  basePath: '/activity',
  badgeLabel: 'Activity & Attendance',
  hubTitle: 'Activity & Attendance Ecosystem',
  hubDescription:
    "How ZUZU turns raw activity and attendance data into reports, trends and insight, from a single employee's workday up to department and organization-wide views.",
  hubMetaDescription:
    'The ZUZU activity & attendance ecosystem: application usage, activity reports, attendance cadence views and productivity insight, all built on the same underlying data.',
  groups: ACTIVITY_GROUPS,
  pages: ACTIVITY_PAGES,
  faq: ACTIVITY_HUB_FAQ,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Time & Attendance Management', href: '/time-attendance' },
    { label: 'Screenshot + Privacy Ecosystem', href: '/screenshot-privacy' },
    { label: 'AI Reports + Workforce Analytics', href: '/ai-analytics' },
    { label: 'Behaviour Intelligence + Manager Workspace', href: '/manager' },
    { label: 'Admin Portal + Security & Governance', href: '/admin' },
    { label: 'Reports + Exports Ecosystem', href: '/reports' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
  ],
}
