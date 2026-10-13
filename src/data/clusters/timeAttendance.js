/*
  Structured content for the ZUZU Time & Attendance SEO cluster
  (Phase 05). Same pattern as src/data/clusters/platform.js: one entry
  per page, rendered by the shared ClusterHub/ClusterPage templates.
  `visual: 'photo'` marks pages where human imagery fits better than
  the abstract dashboard mock (workday-centric pages); everything else
  defaults to the dashboard visual.
*/

export const TIME_ATTENDANCE_GROUPS = [
  { key: 'tracking', label: 'Time Tracking' },
  { key: 'attendance', label: 'Attendance Management' },
  { key: 'reporting', label: 'Dashboards & Reports' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'monitoring', label: 'Idle & Monitoring' },
]

// Hub-level FAQ for the /time-attendance cluster page itself -- distinct
// from each leaf page's own feature-specific FAQ below. These stay at the
// "whole cluster" altitude (what it covers, who sees what, does it touch
// payroll/GPS/remote work) rather than repeating any single leaf page's
// deep-dive questions, and reuse the same facts already established
// throughout this file so nothing here contradicts a leaf page's answer.
const TIME_ATTENDANCE_HUB_FAQ = [
  {
    question: "What does ZUZU's Time & Attendance system include?",
    answer:
      'Time tracking, attendance records, dashboards and reports, analytics, and idle/monitoring data -- all built from the same underlying Windows agent capture, from a single clock-in up to organization-wide trends.',
  },
  {
    question: 'Do employees need to clock in or fill out a timesheet manually?',
    answer: 'No. Attendance and hours are recorded automatically as soon as the Windows agent is running, with no manual sign-in or timesheet.',
  },
  {
    question: 'Where do managers and admins view Time & Attendance data?',
    answer:
      "Managers see attendance, hours and dashboards for their own assigned team in the manager workspace. Admins get organization-wide visibility and configuration through the admin portal.",
  },
  {
    question: 'Does Time & Attendance work the same for remote and hybrid employees?',
    answer: 'Yes, tracking, attendance and reporting all work the same way regardless of where the Windows agent is running.',
  },
  {
    question: 'Does ZUZU calculate payroll or overtime pay from this data?',
    answer:
      'No. ZUZU does not process payroll or integrate with payroll or accounting systems. It records accurate hours and attendance that admins can export and use in their own payroll process.',
  },
  {
    question: 'Can Time & Attendance data be exported?',
    answer: 'Yes, hours, attendance and reporting data can all be exported as CSV, Excel or PDF, and they also feed into AI daily reports.',
  },
  {
    question: "What happens to attendance and hours tracking if a device loses its internet connection?",
    answer: 'The Windows agent queues captures locally while offline and syncs them once the connection returns, so no attendance or hours data is lost.',
  },
  {
    question: "Does ZUZU track an employee's physical location as part of Time & Attendance?",
    answer: "No. ZUZU does not track GPS or physical location. Attendance and time data are based on Windows agent activity on the employee's device.",
  },
]

export const TIME_ATTENDANCE_PAGES = [
  {
    slug: 'employee-time-tracking',
    title: 'Employee Time Tracking',
    cluster: 'tracking',
    visual: 'photo',
    metaDescription:
      'ZUZU employee time tracking automatically records hours worked through the Windows agent, no manual timesheets required.',
    intro:
      'Employee time tracking gives every team member an automatic, consistent record of hours worked. ZUZU captures this through the Windows agent, so no one is filling out a manual timesheet.',
    howItWorksNote: 'Clock-ins and hours are logged automatically as soon as the Windows agent is running.',
    features: ['timeAttendance', 'windowsAgent', 'managerWorkspace', 'aiReports'],
    privacy: false,
    benefits: [
      'No manual timesheets to fill out or chase',
      'Consistent records across every employee',
      'Hours roll up automatically into reports',
    ],
    useCases: [
      { title: 'Replacing Manual Timesheets', description: 'Move a team off spreadsheets onto automatic tracking.' },
      { title: 'A Consistent Hours Record', description: 'Give admins a consistent record of tracked hours to work from.' },
    ],
    faq: [
      {
        question: 'Does employee time tracking require manual clock-in?',
        answer: 'No, hours are captured automatically through the Windows agent.',
      },
      {
        question: 'Where can I review tracked hours?',
        answer: 'In the manager workspace, alongside activity and reports.',
      },
      {
        question: 'Does employee time tracking calculate or process payroll?',
        answer:
          'No, ZUZU does not process payroll or integrate with payroll or accounting systems. It records accurate hours that an admin can export and use in their own payroll process.',
      },
      {
        question: 'What happens to time tracking if an employee loses their internet connection?',
        answer: 'The Windows agent queues captures locally while offline and syncs them once the connection returns, so hours worked are not lost.',
      },
      {
        question: 'Does employee time tracking work on Mac or Linux computers?',
        answer: 'No, the desktop agent is Windows-only. ZUZU does not currently track macOS or Linux devices.',
      },
      {
        question: 'What does an employee need to install for time tracking to work?',
        answer:
          'A roughly 80 MB Windows desktop agent, set up with a 16-character activation code, running quietly from the system tray.',
      },
      {
        question: 'Is employee time tracking the same as screenshot capture?',
        answer:
          'No, time tracking is about hours worked. Screenshots are a separate, configurable capture governed by privacy controls.',
      },
      {
        question: 'Can tracked hours be exported?',
        answer: 'Yes, hours data can be exported as CSV, Excel or PDF, and it also feeds into AI daily reports.',
      },
    ],
    related: ['employee-hours-tracking', 'employee-workday-tracking', 'employee-attendance-tracking'],
  },
  {
    slug: 'workforce-time-tracking',
    title: 'Workforce Time Tracking',
    cluster: 'tracking',
    visual: 'dashboard',
    metaDescription:
      'ZUZU workforce time tracking rolls up time & attendance data across the whole organization for admins.',
    intro:
      'Workforce time tracking looks at hours across an entire organization, not just one employee at a time. ZUZU rolls up time & attendance data so admins can see how time is spent at the workforce level.',
    howItWorksNote: 'Individual attendance records are aggregated into a workforce-level view for admins.',
    features: ['timeAttendance', 'workforceAnalytics', 'adminPortal', 'remoteHybrid'],
    privacy: false,
    benefits: [
      'A single, organization-wide view of hours worked',
      'Consistent tracking across remote, hybrid and in-office teams',
      'Feeds directly into workforce analytics',
    ],
    useCases: [
      { title: 'Org-Wide Hours Visibility', description: 'See total hours worked across departments, not just individuals.' },
      { title: 'Comparing Sites or Teams', description: 'Compare time patterns across different parts of the organization.' },
    ],
    faq: [
      {
        question: 'Does workforce time tracking cover remote teams?',
        answer: 'Yes, tracking works the same way regardless of where an employee is located.',
      },
      { question: 'Who can see workforce-level time data?', answer: 'Admins, through the admin portal.' },
      {
        question: 'How is workforce time tracking different from employee time tracking?',
        answer:
          "Employee time tracking is the individual hours record. Workforce time tracking aggregates those same records into an organization-wide view for admins in the admin portal.",
      },
      {
        question: 'Does workforce time tracking need separate setup for remote employees?',
        answer: 'No, the same Windows agent captures data regardless of location, so remote, hybrid and in-office hours roll up the same way.',
      },
      {
        question: 'Can workforce time tracking data feed directly into a payroll system?',
        answer:
          'No, ZUZU does not integrate with payroll or accounting systems. Admins can export the aggregated hours data as CSV, Excel or PDF to use in their own payroll process.',
      },
      {
        question: 'Does workforce time tracking show trends over weeks or months, or just current totals?',
        answer:
          'Workforce time tracking itself is the organization-wide hours rollup. Trend analysis over time sits under workforce attendance analytics and workforce time analytics.',
      },
      {
        question: 'Can a manager see workforce-level time data for teams other than their own?',
        answer: "No, the manager workspace is scoped to a manager's own assigned team. Organization-wide totals are visible to admins through the admin portal.",
      },
      {
        question: 'Does workforce time tracking require managers to configure anything per team?',
        answer: "No, it's built automatically from the same attendance data employee time tracking already captures. There is no separate per-team setup step.",
      },
    ],
    related: ['workforce-attendance-analytics', 'digital-attendance-management', 'employee-time-tracking'],
  },
  {
    slug: 'employee-hours-tracking',
    title: 'Employee Hours Tracking',
    cluster: 'tracking',
    visual: 'photo',
    metaDescription:
      'ZUZU employee hours tracking calculates hours worked automatically from Windows agent activity, not self-reported estimates.',
    intro:
      'Employee hours tracking answers a simple question: how many hours did someone actually work today? ZUZU logs this automatically and makes it available to managers without extra data entry.',
    howItWorksNote: 'Hours are calculated from Windows agent activity and attendance data, not self-reported estimates.',
    features: ['timeAttendance', 'employeeActivity', 'managerWorkspace', 'aiReports'],
    privacy: false,
    benefits: [
      'Accurate hours without relying on self-reporting',
      'Immediately visible to managers',
      'Consistent across the whole team',
    ],
    useCases: [
      { title: 'Daily Hours Check-Ins', description: 'Managers can see hours worked without asking.' },
      { title: 'Flagging Unusual Patterns', description: 'Spot days where hours look off from the norm.' },
    ],
    faq: [
      {
        question: 'Is employee hours tracking based on self-reported time?',
        answer: 'No, hours are calculated automatically from Windows agent data.',
      },
      { question: 'Can hours tracking data be exported into reports?', answer: 'Yes, it feeds directly into AI reports.' },
      {
        question: 'Does employee hours tracking calculate overtime pay?',
        answer:
          'No, ZUZU does not process payroll, so it does not calculate overtime pay. It records the hours worked, which admins can use with their own payroll process.',
      },
      {
        question: 'Does hours tracking rely on an employee clocking in and out?',
        answer:
          'No, hours are calculated automatically by combining Windows agent attendance and activity data, not a manual clock action.',
      },
      {
        question: 'Can employee hours tracking flag an unusually long day?',
        answer:
          "Long or trending-long hours show up through the wellbeing & burnout forecast and behaviour intelligence, which compare activity against an individual's own baseline rather than a fixed threshold.",
      },
      {
        question: "Who can see an individual employee's tracked hours?",
        answer: "Their manager, scoped to their own team in the manager workspace, and admins organization-wide in the admin portal.",
      },
      {
        question: 'Does employee hours tracking work the same for remote employees?',
        answer: 'Yes, hours are calculated the same way regardless of where the Windows agent is running.',
      },
      {
        question: 'Can hours tracking data be exported for a single employee?',
        answer: 'Yes, individual hours data can be exported as CSV, Excel or PDF.',
      },
    ],
    related: ['employee-time-tracking', 'employee-hours-reports', 'daily-work-hours'],
  },
  {
    slug: 'daily-work-hours',
    title: 'Daily Work Hours',
    cluster: 'tracking',
    visual: 'photo',
    metaDescription: 'ZUZU daily work hours gives a same-day view of hours worked, built from live attendance data.',
    intro:
      "Daily work hours is the simplest view ZUZU provides: how long someone worked today, at a glance. It's built from the same attendance data used everywhere else in ZUZU, just narrowed to a single day.",
    howItWorksNote: 'Attendance data is filtered down to a single day at a time, for a quick daily check.',
    features: ['timeAttendance', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A quick daily snapshot, no digging through history',
      'Same underlying data as weekly and monthly reports',
      'Available to managers in real time',
    ],
    useCases: [
      { title: 'End-of-Day Check-Ins', description: 'See who worked what hours today, without a full report.' },
      { title: 'Spotting a Short Day Early', description: 'Notice unusually short hours the same day, not weeks later.' },
    ],
    faq: [
      {
        question: 'Is daily work hours data updated in real time?',
        answer: "Yes, it reflects attendance data as it's captured through the day.",
      },
      { question: 'Can I see daily work hours for a past date?', answer: 'Yes, through the manager workspace.' },
      {
        question: 'Does daily work hours show a running total, or only a final end-of-day number?',
        answer: 'It updates continuously as attendance data is captured through the day, so it reflects a running total, not just an end-of-day figure.',
      },
      {
        question: 'Is daily work hours the same data as weekly or monthly reports?',
        answer: "Yes, it's the same underlying time & attendance data, just filtered down to a single day instead of aggregated over a period.",
      },
      {
        question: "Can a single day's work hours be exported?",
        answer: 'Yes, day-level data can be exported as CSV, Excel or PDF like other time & attendance data.',
      },
      {
        question: 'Does daily work hours account for idle or screen-off periods?',
        answer:
          'Idle and screen-off periods are tracked separately as part of employee activity data. Daily work hours itself reflects attendance-based hours for the day.',
      },
      {
        question: 'Who can view daily work hours for a team?',
        answer: "Managers, scoped to their own assigned team, through the manager workspace.",
      },
      {
        question: 'Does daily work hours require any special setup beyond the Windows Agent?',
        answer: "No, it's simply the same attendance data used elsewhere in ZUZU, narrowed to a single day.",
      },
    ],
    related: ['employee-hours-tracking', 'employee-workday-tracking', 'working-hours-monitoring'],
  },
  {
    slug: 'employee-workday-tracking',
    title: 'Employee Workday Tracking',
    cluster: 'tracking',
    visual: 'photo',
    metaDescription:
      'ZUZU employee workday tracking combines attendance and activity data into a full per-employee workday timeline.',
    intro:
      'Employee workday tracking follows the shape of a single day, when it started, when it ended, and what happened in between. ZUZU combines attendance and activity data to reconstruct that picture for each employee.',
    howItWorksNote: 'Attendance and activity timestamps are combined into a single per-employee workday timeline.',
    features: ['timeAttendance', 'employeeActivity', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      "A complete picture of each employee's workday",
      'Built from existing attendance and activity data',
      'No separate tool required',
    ],
    useCases: [
      { title: 'Understanding a Specific Day', description: "Reconstruct what an employee's day looked like, start to finish." },
      { title: 'Comparing Workdays Over a Week', description: 'See how workday shape varies day to day.' },
    ],
    faq: [
      {
        question: 'What does employee workday tracking show?',
        answer: "A timeline of attendance and activity for a given employee's day.",
      },
      {
        question: 'Is workday tracking a separate feature to set up?',
        answer: "No, it's built from data time & attendance and employee activity already capture.",
      },
      {
        question: "What's the difference between employee workday tracking and daily work hours?",
        answer:
          'Daily work hours is a single hours figure for the day. Employee workday tracking is the fuller timeline of when the day started, ended, and what activity happened in between.',
      },
      {
        question: 'Does employee workday tracking include screenshots?',
        answer:
          'Workday tracking itself combines attendance and activity timestamps, not screenshot images. Screenshots are a separate capture that can be reviewed alongside it if enabled.',
      },
      {
        question: 'Does workday tracking show idle or screen-off periods?',
        answer: 'Yes, idle stretches and screen-off periods captured through employee activity are part of the fuller workday picture.',
      },
      {
        question: 'Can workday tracking data be exported for a specific day?',
        answer: 'Yes, workday data draws on the same time & attendance and employee activity records that support CSV, Excel and PDF export.',
      },
      {
        question: 'Is employee workday tracking available for remote employees?',
        answer: 'Yes, it works the same way regardless of where the Windows agent is running.',
      },
      {
        question: "Does workday tracking capture an employee's physical location during the day?",
        answer: 'No, ZUZU does not track GPS or physical location. The workday timeline is built from device attendance and activity data.',
      },
    ],
    related: ['daily-work-hours', 'employee-time-tracking', 'attendance-visibility'],
  },
  {
    slug: 'employee-attendance-tracking',
    title: 'Employee Attendance Tracking',
    cluster: 'attendance',
    visual: 'photo',
    metaDescription:
      'ZUZU employee attendance tracking records attendance automatically through the Windows agent, replacing manual sign-in.',
    intro:
      'Employee attendance tracking keeps a reliable record of who was working and when. ZUZU captures attendance automatically through the Windows agent, replacing manual sign-in sheets or spreadsheets.',
    howItWorksNote: "Attendance is recorded as soon as the Windows agent is active on an employee's device.",
    features: ['timeAttendance', 'windowsAgent', 'adminPortal', 'aiReports'],
    privacy: false,
    benefits: [
      'Automatic attendance records, no manual sign-in',
      'Consistent format across the whole organization',
      'Ready to feed into reports and analytics',
    ],
    useCases: [
      { title: 'Replacing Sign-In Sheets', description: 'Move a team off manual attendance registers.' },
      { title: 'Org-Wide Consistency', description: 'Keep attendance records in the same format across every team.' },
    ],
    faq: [
      {
        question: 'How is attendance recorded in ZUZU?',
        answer: 'Automatically, through the Windows agent, rather than manual sign-in.',
      },
      { question: 'Can attendance records be reviewed by admins?', answer: 'Yes, through the admin portal.' },
      {
        question: "What's the difference between attendance tracking and hours tracking in ZUZU?",
        answer:
          'Attendance tracking records when an employee was present, while hours tracking calculates how long they worked from that same underlying data.',
      },
      {
        question: 'Does employee attendance tracking track physical location?',
        answer: "No, ZUZU does not track GPS or physical location. Attendance is based on Windows agent activity on the employee's device.",
      },
      {
        question: 'What happens to attendance tracking on a personal laptop?',
        answer:
          "On a personal device, capture is session-gated to only between punch-in and punch-out, through a short-lived permission the agent keeps renewing, so it expires automatically outside work sessions.",
      },
      {
        question: 'Can attendance records be exported?',
        answer: 'Yes, as CSV, Excel or PDF, in addition to being reviewed in AI daily reports.',
      },
      {
        question: 'Does attendance tracking work differently for remote employees?',
        answer: 'No, the same automatic recording applies regardless of whether an employee is remote, hybrid or in-office.',
      },
      {
        question: 'Does employee attendance tracking require installing anything besides the Windows Agent?',
        answer: 'No, attendance is captured as part of the same Windows agent installation used for the rest of time & attendance.',
      },
    ],
    related: ['digital-attendance-management', 'attendance-visibility', 'employee-time-tracking'],
  },
  {
    slug: 'digital-attendance-management',
    title: 'Digital Attendance Management',
    cluster: 'attendance',
    visual: 'dashboard',
    metaDescription:
      "ZUZU digital attendance management centralizes attendance policy in the admin portal, replacing spreadsheets.",
    intro:
      "Digital attendance management moves attendance out of spreadsheets and into a connected system admins can configure once and rely on. ZUZU's admin portal is where that configuration happens.",
    howItWorksNote: 'Attendance policy is set once in the admin portal and applied automatically from then on.',
    features: ['adminPortal', 'timeAttendance', 'managerWorkspace', 'workforceAnalytics'],
    privacy: false,
    benefits: [
      'No manual spreadsheet upkeep',
      'Centralized configuration for the whole organization',
      'Connected directly to workforce analytics',
    ],
    useCases: [
      { title: 'Replacing Spreadsheet Attendance Logs', description: 'Move attendance tracking into a connected system.' },
      { title: 'Setting Policy Once, Applying It Everywhere', description: 'Configure attendance rules centrally through the admin portal.' },
    ],
    faq: [
      { question: 'Where is digital attendance configured?', answer: 'In the admin portal.' },
      {
        question: 'Does digital attendance management replace manual registers entirely?',
        answer: 'Yes, attendance is captured automatically rather than logged by hand.',
      },
      {
        question: 'Does digital attendance management replace the need for a separate HR attendance system?',
        answer:
          'ZUZU does not integrate with payroll or HR systems. It centralizes attendance capture and policy configuration in the admin portal, and admins can export data as CSV, Excel or PDF to use elsewhere.',
      },
      {
        question: 'Can attendance policy differ by team?',
        answer: "Policy configuration happens centrally in the admin portal, while day-to-day visibility is scoped to each manager's own team in the manager workspace.",
      },
      {
        question: 'Is there an audit trail for changes to attendance configuration?',
        answer: 'Yes, the admin portal keeps audit trails covering categories such as employee, team, manager and organisation events, with severity filtering and export.',
      },
      {
        question: 'Does setting up digital attendance management require installing anything per employee?',
        answer: 'Yes, each employee still needs the Windows desktop agent installed and activated. The admin portal is where policy is configured once that data starts flowing in.',
      },
      {
        question: 'Can digital attendance management be adjusted after it is first configured?',
        answer: "Yes, admins can revisit and change attendance and monitoring policy in the admin portal at any time. It isn't a one-time, locked setup.",
      },
      {
        question: 'Does digital attendance management apply automatically to newly added employees?',
        answer:
          'Yes, once attendance policy is set in the admin portal it applies automatically going forward, including for employees added and activated after that point.',
      },
    ],
    related: ['employee-attendance-tracking', 'workforce-time-tracking', 'attendance-reporting-software'],
  },
  {
    slug: 'attendance-visibility',
    title: 'Attendance Visibility',
    cluster: 'attendance',
    visual: 'photo',
    metaDescription:
      'ZUZU attendance visibility keeps attendance status current for managers and admins, for remote and in-office teams alike.',
    intro:
      "Attendance visibility means never having to ask who's working right now. ZUZU keeps attendance data current, so managers and admins can check it whenever they need to.",
    howItWorksNote: 'Attendance status updates continuously as the Windows agent reports in, not on a fixed schedule.',
    features: ['timeAttendance', 'workforceVisibility', 'managerWorkspace', 'remoteHybrid'],
    privacy: false,
    benefits: [
      'Up-to-date attendance status, not a stale report',
      'Works the same for remote and in-office teams',
      'No need to ask employees directly',
    ],
    useCases: [
      { title: "Checking Who's Working Right Now", description: 'See current attendance status without messaging the team.' },
      { title: 'Distributed Team Coordination', description: 'Keep visibility consistent when a team is spread across locations.' },
    ],
    faq: [
      {
        question: 'How current is attendance visibility in ZUZU?',
        answer: 'It reflects attendance data as reported by the Windows agent.',
      },
      { question: 'Does attendance visibility work for remote employees?', answer: 'Yes, the same way it works for in-office employees.' },
      {
        question: 'Does attendance visibility show the exact physical location of an employee?',
        answer: 'No, ZUZU does not track GPS or physical location. Attendance visibility is based on Windows agent activity, not location data.',
      },
      {
        question: 'Can a manager see attendance visibility for employees outside their team?',
        answer: "No, the manager workspace is scoped to a manager's own assigned team. They cannot see employees outside it.",
      },
      {
        question: 'Does attendance visibility require employees to actively check in?',
        answer: "No, it's based on automatic attendance data captured by the Windows agent, not a manual check-in action.",
      },
      {
        question: "Is attendance visibility affected if an employee's device goes offline briefly?",
        answer:
          'The Windows agent queues captures while offline and syncs once reconnected, so status catches up automatically rather than needing a manual update.',
      },
      {
        question: 'Can admins see attendance visibility across the whole organization?',
        answer: 'Yes, through the admin portal, in addition to the team-scoped view managers get in the manager workspace.',
      },
      {
        question: 'Does attendance visibility show hours worked, or just current status?',
        answer:
          "It's focused on current attendance status. For hours worked so far today, that's covered by daily work hours and working hours monitoring.",
      },
    ],
    related: ['employee-attendance-tracking', 'daily-attendance-reports', 'employee-workday-tracking'],
  },
  {
    slug: 'daily-attendance-reports',
    title: 'Daily Attendance Reports',
    cluster: 'reporting',
    visual: 'dashboard',
    metaDescription: 'ZUZU generates daily attendance reports automatically from time & attendance data.',
    intro:
      'Daily attendance reports give managers a same-day summary of who was present, when they started, and how the day looked. ZUZU generates these automatically from time & attendance data.',
    howItWorksNote: 'A report is assembled automatically at the end of each day from attendance data already captured.',
    features: ['timeAttendance', 'aiReports', 'managerWorkspace', 'adminPortal'],
    privacy: false,
    benefits: [
      'A ready-made daily summary, no manual compilation',
      'Consistent format every day',
      'Available to both managers and admins',
    ],
    useCases: [
      { title: 'Daily Team Stand-Ins', description: 'Check who was present before a morning stand-up.' },
      { title: 'End-of-Day Summaries', description: "Review the day's attendance without pulling raw data." },
    ],
    faq: [
      {
        question: 'Are daily attendance reports generated automatically?',
        answer: 'Yes, from time & attendance data already captured that day.',
      },
      { question: 'Can admins see daily reports across the whole organization?', answer: 'Yes, through the admin portal.' },
      {
        question: 'Can daily attendance reports be emailed automatically?',
        answer: 'Yes, ZUZU supports organisation-wide or manager-specific email digests of reports.',
      },
      {
        question: 'Can I download a daily attendance report as a PDF?',
        answer: 'Yes, AI daily reports support PDF downloads.',
      },
      {
        question: 'Does a daily attendance report include screenshots or application activity?',
        answer:
          'Daily attendance reports focus on attendance data, such as who was present and when they started. Employee activity and screenshot data are reviewed separately.',
      },
      {
        question: 'Can I look at a daily attendance report from a previous day?',
        answer: 'Yes, AI daily reports are browsable by year, month and day, not just the current day.',
      },
      {
        question: 'Is a daily attendance report the same for every manager, or scoped by team?',
        answer: 'Managers see reports for their own assigned team. Admins can review daily reports across the whole organization through the admin portal.',
      },
      {
        question: 'Does generating a daily attendance report require any manual review or approval?',
        answer: "No, the report is assembled automatically from that day's time & attendance data with no manual compilation step.",
      },
    ],
    related: ['employee-attendance-dashboard', 'team-attendance-dashboard', 'employee-hours-reports'],
  },
  {
    slug: 'employee-attendance-dashboard',
    title: 'Employee Attendance Dashboard',
    cluster: 'reporting',
    visual: 'dashboard',
    metaDescription: "ZUZU's employee attendance dashboard gives managers a single-screen view of one employee's attendance history.",
    intro:
      "The employee attendance dashboard gives a manager a single screen to check on one employee's attendance history. ZUZU pulls this together from ongoing time & attendance data.",
    howItWorksNote: 'Attendance history for a single employee is aggregated into one dashboard view.',
    features: ['timeAttendance', 'managerWorkspace', 'aiReports', 'workforceAnalytics'],
    privacy: false,
    benefits: [
      'A single view per employee, not scattered records',
      "Historical context, not just today's status",
      'Built into the manager workspace',
    ],
    useCases: [
      { title: "Reviewing One Employee's History", description: "Check an individual's attendance pattern before a 1:1." },
      { title: 'Spotting a Change in Pattern', description: "See when an employee's attendance shifted." },
    ],
    faq: [
      { question: 'What does the employee attendance dashboard show?', answer: "A single employee's attendance history over time." },
      { question: 'Where is the employee attendance dashboard located?', answer: 'In the manager workspace.' },
      {
        question: 'How is the employee attendance dashboard different from a daily attendance report?',
        answer:
          "A daily attendance report is a same-day summary. The employee attendance dashboard shows one employee's attendance history over a longer period, on a single screen.",
      },
      {
        question: "How far back does the employee attendance dashboard's history go?",
        answer:
          "The dashboard draws on ongoing time & attendance data as it accumulates for that employee.",
      },
      {
        question: 'Can a manager see the employee attendance dashboard for someone outside their team?',
        answer: "No, the manager workspace only shows employees on the manager's own assigned team.",
      },
      {
        question: 'Does the employee attendance dashboard include hours as well as attendance status?',
        answer: 'Yes, since it draws on the same time & attendance data that underlies hours tracking, not attendance alone.',
      },
      {
        question: 'Can employee attendance dashboard data be exported before a 1:1?',
        answer: 'Yes, attendance data can be exported as CSV, Excel or PDF to bring into a conversation.',
      },
      {
        question: 'Does viewing the employee attendance dashboard require the employee to consent each time?',
        answer:
          "No, ongoing tracking on a work device doesn't require per-view consent. Consent-gating applies specifically to personal laptop sessions, which are gated between punch-in and punch-out.",
      },
    ],
    related: ['team-attendance-dashboard', 'daily-attendance-reports', 'employee-hours-reports'],
  },
  {
    slug: 'team-attendance-dashboard',
    title: 'Team Attendance Dashboard',
    cluster: 'reporting',
    visual: 'dashboard',
    metaDescription: 'ZUZU team attendance dashboard aggregates attendance data across a team for managers.',
    intro:
      'The team attendance dashboard shifts the view from one employee to a whole team. ZUZU aggregates attendance data so a manager can see team-level patterns at a glance.',
    howItWorksNote: 'Individual attendance records are rolled up to the team level in a single dashboard.',
    features: ['timeAttendance', 'managerWorkspace', 'workforceAnalytics', 'aiReports'],
    privacy: false,
    benefits: [
      'Team-level view without opening individual records',
      'Patterns easier to spot across a group',
      'Same data as individual dashboards, aggregated',
    ],
    useCases: [
      { title: 'Weekly Team Reviews', description: 'Check overall team attendance before a weekly review.' },
      { title: 'Comparing Teams', description: 'See how attendance patterns differ across teams.' },
    ],
    faq: [
      {
        question: 'How is the team attendance dashboard different from the employee dashboard?',
        answer: 'It aggregates data across a team instead of showing one employee.',
      },
      { question: 'Can admins see team dashboards across the organization?', answer: 'Yes, through the admin portal.' },
      {
        question: "Can a manager compare their team's attendance dashboard against another team's?",
        answer: "Managers are scoped to their own assigned team in the manager workspace. Cross-team comparison is available to admins through the admin portal.",
      },
      {
        question: 'Does the team attendance dashboard show individual employees, or only the aggregate?',
        answer: 'It aggregates data to the team level. Individual detail is available separately through the employee attendance dashboard.',
      },
      {
        question: 'How current is the data shown on the team attendance dashboard?',
        answer: "It's built from the same ongoing time & attendance data captured throughout the day, so it reflects current records rather than a periodic batch refresh.",
      },
      {
        question: 'Can the team attendance dashboard be exported for a weekly review?',
        answer: 'Yes, team-level data can be exported as CSV, Excel or PDF.',
      },
      {
        question: 'Does the team attendance dashboard flag unusual attendance patterns automatically?',
        answer:
          "Pattern changes are surfaced through behaviour intelligence, which compares activity to an individual's own baseline. The team dashboard itself is a rollup view rather than an anomaly detector.",
      },
      {
        question: 'Is the team attendance dashboard available for remote or hybrid teams?',
        answer: 'Yes, it aggregates attendance the same way regardless of whether team members are remote, hybrid or in-office.',
      },
    ],
    related: ['employee-attendance-dashboard', 'workforce-attendance-analytics', 'daily-attendance-reports'],
  },
  {
    slug: 'employee-hours-reports',
    title: 'Employee Hours Reports',
    cluster: 'reporting',
    visual: 'dashboard',
    metaDescription: "ZUZU's AI reports generate employee hours reports automatically from time & attendance data.",
    intro:
      "Employee hours reports turn tracked hours into something ready to review or share, without manual compilation. ZUZU's AI reports generate these directly from time & attendance data.",
    howItWorksNote: 'Reports are generated automatically from hours already tracked, not assembled by hand.',
    features: ['timeAttendance', 'aiReports', 'managerWorkspace', 'adminPortal'],
    privacy: false,
    benefits: [
      'No manual report building',
      'Consistent structure across employees and teams',
      'A clear hours record for reviews and 1:1 conversations',
    ],
    useCases: [
      { title: 'Preparing an Hours Summary', description: 'Give admins a ready hours report instead of raw logs.' },
      { title: 'Reviewing Hours in a 1:1', description: 'Bring a clear hours report into a manager conversation.' },
    ],
    faq: [
      {
        question: 'Are employee hours reports generated automatically?',
        answer: 'Yes, from time & attendance data already tracked.',
      },
      { question: 'Can hours reports be reviewed at the admin level?', answer: 'Yes, through the admin portal.' },
      {
        question: 'Do employee hours reports feed directly into payroll?',
        answer:
          'No, ZUZU does not process payroll or integrate with payroll or accounting systems. Hours reports give admins accurate figures to bring into their own payroll process.',
      },
      {
        question: 'What formats can employee hours reports be exported in?',
        answer: 'CSV, Excel or PDF.',
      },
      {
        question: 'Are employee hours reports generated per employee, or can they be run for a whole team?',
        answer: 'Both. Reports can be reviewed for an individual employee or aggregated at the team or organization level through the manager workspace and admin portal.',
      },
      {
        question: 'How current is the data in an employee hours report?',
        answer: 'Reports are generated from hours already tracked through the Windows agent, reflecting the latest captured data rather than a stale periodic export.',
      },
      {
        question: 'Can employee hours reports be emailed automatically?',
        answer: 'Yes, ZUZU supports weekly report emails and team daily digests in addition to on-demand report generation.',
      },
      {
        question: 'Do employee hours reports include attendance status as well as totals?',
        answer: 'Yes, since hours are calculated from the same underlying attendance and activity data.',
      },
    ],
    related: ['daily-attendance-reports', 'employee-hours-tracking', 'attendance-reporting-software'],
  },
  {
    slug: 'attendance-reporting-software',
    title: 'Attendance Reporting Software',
    cluster: 'reporting',
    visual: 'dashboard',
    metaDescription: 'ZUZU attendance reporting software generates attendance reports automatically as part of AI reports.',
    intro:
      'Attendance reporting software is the layer that turns ongoing attendance data into something a manager can actually present. ZUZU generates these reports automatically as part of AI reports.',
    howItWorksNote: 'Reports draw on live attendance data rather than a manually maintained log.',
    features: ['timeAttendance', 'aiReports', 'workforceAnalytics', 'adminPortal'],
    privacy: false,
    benefits: [
      'Reports generated automatically, not built by hand',
      'Consistent across every team using ZUZU',
      'Backed by the same data as dashboards and analytics',
    ],
    useCases: [
      { title: 'Monthly Attendance Summaries', description: 'Generate a reporting-ready summary without manual work.' },
      { title: 'Sharing Attendance Data Upward', description: 'Give leadership a clear attendance report.' },
    ],
    faq: [
      { question: 'Is ZUZU attendance reporting automatic?', answer: 'Yes, reports are generated from live attendance data.' },
      {
        question: 'Can attendance reports be customized by team?',
        answer: 'Reports can be reviewed at the team or organization level through the manager workspace and admin portal.',
      },
      {
        question: "Is ZUZU's attendance reporting software a separate product to buy?",
        answer: 'No, attendance reporting is generated automatically as part of AI reports within the same ZUZU platform, not a separate add-on.',
      },
      {
        question: 'What formats does attendance reporting software export to?',
        answer: 'CSV, Excel or PDF.',
      },
      {
        question: 'Can attendance reporting software generate a monthly summary?',
        answer:
          'AI reports are generated daily and are browsable by year, month and day, so a month can be reviewed across that browsable history rather than needing a separate manual compilation.',
      },
      {
        question: 'Does attendance reporting software require manual data entry before generating a report?',
        answer: 'No, reports draw on live attendance data captured automatically through the Windows agent.',
      },
      {
        question: 'Who has access to attendance reporting at the organization level?',
        answer: 'Admins, through the admin portal. Managers see reporting scoped to their own team in the manager workspace.',
      },
      {
        question: "Can attendance reports be shared with people who don't use ZUZU directly, like leadership?",
        answer: 'Yes, reports can be downloaded as PDF or exported to CSV or Excel to share outside the platform.',
      },
    ],
    related: ['employee-hours-reports', 'daily-attendance-reports', 'digital-attendance-management'],
  },
  {
    slug: 'workforce-attendance-analytics',
    title: 'Workforce Attendance Analytics',
    cluster: 'analytics',
    visual: 'dashboard',
    metaDescription: "ZUZU workforce attendance analytics surfaces attendance trends over time using workforce analytics.",
    intro:
      "Workforce attendance analytics looks for patterns across attendance data, trends over weeks or months, not just a single day. ZUZU's workforce analytics builds this view from ongoing time & attendance data.",
    howItWorksNote: 'Attendance data is analyzed over time to surface trends, not just point-in-time status.',
    features: ['timeAttendance', 'workforceAnalytics', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Trends over time, not just daily snapshots',
      'Built from data already being captured',
      'Available at the team or org level',
    ],
    useCases: [
      { title: 'Spotting Seasonal Patterns', description: 'See how attendance shifts over weeks or months.' },
      { title: 'Org-Wide Attendance Trends', description: 'Track attendance trends across the whole company.' },
    ],
    faq: [
      {
        question: 'What period does workforce attendance analytics cover?',
        answer: 'It can be reviewed across days, weeks or months of time & attendance data.',
      },
      { question: 'Where can I view attendance analytics?', answer: 'In the manager workspace or admin portal.' },
      {
        question: 'How is workforce attendance analytics different from a daily attendance report?',
        answer:
          "A daily attendance report is a same-day summary. Workforce attendance analytics looks for trends across days, weeks or months rather than a single day's snapshot.",
      },
      {
        question: 'Does workforce attendance analytics predict who is likely to leave the organization?',
        answer:
          'No, ZUZU does not predict turnover or attrition. It surfaces attendance trends and pattern changes, not predictions about who will quit.',
      },
      {
        question: 'Can workforce attendance analytics be filtered to a single department?',
        answer: 'Yes, it can be reviewed at the team or organization level through the manager workspace and admin portal, supporting department-level benchmarking.',
      },
      {
        question: 'Does workforce attendance analytics connect to burnout risk?',
        answer:
          'Related working-hour patterns, like long days and weekend work, also feed the wellbeing & burnout forecast, a separate but connected view of risk trends rather than part of attendance analytics itself.',
      },
      {
        question: 'How far back does workforce attendance analytics trend data go?',
        answer: 'It reflects time & attendance data as it accumulates.',
      },
      {
        question: 'Who can view workforce attendance analytics?',
        answer: 'Admins organization-wide through the admin portal, and managers for their own team through the manager workspace.',
      },
    ],
    related: ['working-time-analytics', 'workforce-time-analytics', 'team-attendance-dashboard'],
  },
  {
    slug: 'working-time-analytics',
    title: 'Working Time Analytics',
    cluster: 'analytics',
    visual: 'dashboard',
    metaDescription: 'ZUZU working time analytics shows how working hours are distributed across teams and individuals.',
    intro:
      'Working time analytics looks at how working hours are actually distributed, across days, teams or individuals. ZUZU builds this from the same time & attendance and employee activity data used elsewhere in the platform.',
    howItWorksNote: 'Hours data is analyzed for distribution and trends rather than shown as a raw log.',
    features: ['timeAttendance', 'employeeActivity', 'workforceAnalytics', 'aiReports'],
    privacy: false,
    benefits: [
      'A trend view of working hours, not just totals',
      'Consistent across individuals and teams',
      'No separate data source required',
    ],
    useCases: [
      { title: 'Understanding Hours Distribution', description: 'See how working hours vary across a team or week.' },
      { title: 'Identifying Overtime Patterns', description: 'Spot where hours regularly run long.' },
    ],
    faq: [
      {
        question: 'What does working time analytics measure?',
        answer: 'Trends in how working hours are distributed across time, teams or individuals.',
      },
      { question: 'Is working time analytics available per employee?', answer: 'Yes, alongside team and organization-level views.' },
      {
        question: 'Does working time analytics calculate overtime pay?',
        answer:
          'No, ZUZU does not process payroll. Working time analytics identifies where hours run long, but admins apply their own overtime policy and payroll process to that data.',
      },
      {
        question: 'How is working time analytics different from workforce time analytics?',
        answer:
          'Working time analytics can go down to individual and team-level distribution. Workforce time analytics aggregates specifically to the organization level for admins and leadership.',
      },
      {
        question: 'Does working time analytics use different data than employee hours tracking?',
        answer: 'No, it draws on the same time & attendance and employee activity data, analyzed for distribution and trends rather than shown as a raw log.',
      },
      {
        question: 'Can working time analytics data be exported for a report?',
        answer: 'Yes, as CSV, Excel or PDF.',
      },
      {
        question: 'Does working time analytics flag burnout risk from long hours?',
        answer:
          'Long-hour and weekend-work trends specifically feed the wellbeing & burnout forecast, a related but separate feature with its own weeks-to-risk estimate.',
      },
      {
        question: 'Can working time analytics be viewed for a single week rather than a longer period?',
        answer: 'Yes, it can be reviewed across days, weeks or months of time & attendance and employee activity data.',
      },
    ],
    related: ['workforce-attendance-analytics', 'workforce-time-analytics', 'employee-hours-reports'],
  },
  {
    slug: 'workforce-time-analytics',
    title: 'Workforce Time Analytics',
    cluster: 'analytics',
    visual: 'dashboard',
    metaDescription: 'ZUZU workforce time analytics aggregates time data to the organization level for admins and leadership.',
    intro:
      'Workforce time analytics is the organization-wide view of how time is spent, built for admins and leadership rather than a single manager. ZUZU aggregates time & attendance data up to that level.',
    howItWorksNote: 'Time data is aggregated to the organization level for a leadership-facing view.',
    features: ['timeAttendance', 'workforceAnalytics', 'adminPortal', 'behaviourIntelligence'],
    privacy: false,
    benefits: [
      'An organization-wide view, not just team-level',
      'Built for leadership and admin reporting',
      'Connects time data to broader workforce patterns',
    ],
    useCases: [
      { title: 'Leadership Reporting', description: 'Give leadership an org-wide view of time patterns.' },
      { title: 'Cross-Team Comparisons', description: 'Compare time patterns across departments.' },
    ],
    faq: [
      {
        question: 'Who is workforce time analytics built for?',
        answer: 'Admins and leadership looking at organization-wide time patterns.',
      },
      {
        question: 'How is this different from working time analytics?',
        answer: 'Workforce time analytics aggregates to the organization level; working time analytics can go down to the individual.',
      },
      {
        question: 'Does workforce time analytics include department-level benchmarking?',
        answer: 'Yes, the related workforce analytics capability includes department benchmarking alongside organization health and executive highlights.',
      },
      {
        question: 'Can workforce time analytics be broken down within the organization, or only shown as one company-wide number?',
        answer: 'It aggregates to the organization level but supports cross-team and department comparisons within that view.',
      },
      {
        question: 'Does workforce time analytics connect to behaviour pattern detection?',
        answer:
          "Yes, it can be reviewed alongside behaviour intelligence, which flags changes from an individual's own baseline rather than generic job-title rules.",
      },
      {
        question: 'Can workforce time analytics be exported for a leadership presentation?',
        answer: 'Yes, as CSV, Excel or PDF.',
      },
      {
        question: 'Is workforce time analytics real-time, or a periodic summary?',
        answer: "It reflects time & attendance data as it's captured and aggregated, rather than being limited to a fixed periodic batch.",
      },
      {
        question: 'Does workforce time analytics predict future turnover or attrition?',
        answer: 'No, ZUZU does not predict who will quit. It surfaces time and activity patterns for admins and leadership to interpret.',
      },
    ],
    related: ['workforce-attendance-analytics', 'working-time-analytics', 'digital-attendance-management'],
  },
  {
    slug: 'working-hours-monitoring',
    title: 'Working Hours Monitoring',
    cluster: 'monitoring',
    visual: 'dashboard',
    metaDescription: 'ZUZU working hours monitoring shows hours as they accrue through the day, governed by privacy controls.',
    intro:
      "Working hours monitoring keeps an ongoing check on hours as they happen, not just after the fact. ZUZU surfaces this in real time through the manager workspace.",
    howItWorksNote: "Hours data updates continuously through the day rather than being calculated only at day's end.",
    features: ['timeAttendance', 'employeeActivity', 'managerWorkspace', 'privacyControls'],
    privacy: true,
    benefits: [
      'Real-time visibility into hours as they accrue',
      'No need to wait for an end-of-day report',
      'Governed by configurable privacy controls',
    ],
    useCases: [
      { title: 'Real-Time Hours Checks', description: 'See hours worked so far today, at any point.' },
      { title: 'Early Attention to Long Days', description: 'Notice unusually long hours before the day ends.' },
    ],
    faq: [
      { question: 'Is working hours monitoring real-time?', answer: 'Yes, it updates continuously through the day.' },
      { question: 'Can working hours monitoring be configured?', answer: 'Yes, through privacy controls in the admin portal.' },
      {
        question: "Does working hours monitoring track what's on an employee's screen?",
        answer:
          'No, working hours monitoring tracks hours accrued through the day. Screenshot capture and application usage are separate, related captures governed by the same privacy controls.',
      },
      {
        question: 'Can an employee opt out of working hours monitoring on a personal laptop?',
        answer:
          'Capture on a personal laptop is session-gated to only between punch-in and punch-out, through a short-lived permission the agent keeps renewing, so it expires automatically outside work sessions.',
      },
      {
        question: 'Does working hours monitoring track GPS or physical location?',
        answer: 'No, ZUZU does not track GPS or physical location.',
      },
      {
        question: 'How is working hours monitoring different from daily work hours?',
        answer:
          'Daily work hours is a same-day total that can be checked at any point, including after the fact. Working hours monitoring emphasizes the real-time, continuously updating view through the manager workspace.',
      },
      {
        question: 'Does working hours monitoring connect to the burnout forecast?',
        answer:
          'Related long-day and weekend-work trends feed the wellbeing & burnout forecast, which surfaces drivers and a weeks-to-risk estimate. Monitoring itself is the real-time hours view, not an alerting system.',
      },
      {
        question: 'Who configures what working hours monitoring captures?',
        answer: 'Admins, through privacy controls in the admin portal.',
      },
    ],
    related: ['employee-idle-time-tracking', 'screen-off-time-monitoring', 'daily-work-hours'],
  },
  {
    slug: 'employee-idle-time-tracking',
    title: 'Employee Idle Time Tracking',
    cluster: 'monitoring',
    visual: 'dashboard',
    metaDescription: "ZUZU employee idle time tracking notes inactive stretches as part of employee activity data.",
    intro:
      "Employee idle time tracking is part of how ZUZU's employee activity feature understands a workday, noting stretches where a device shows no activity, alongside the active time it already tracks.",
    howItWorksNote: 'Idle periods are detected as part of ongoing activity tracking through the Windows agent.',
    features: ['employeeActivity', 'windowsAgent', 'timeAttendance', 'privacyControls'],
    privacy: true,
    benefits: [
      'Idle periods shown alongside active time, in context',
      'Part of existing activity tracking, no extra setup',
      'Configurable through privacy controls',
    ],
    useCases: [
      { title: 'Understanding Gaps in a Workday', description: 'See idle stretches alongside active work time.' },
      { title: 'Distinguishing Breaks From Activity', description: 'Separate idle time from tracked working time in reports.' },
    ],
    faq: [
      { question: 'How does ZUZU detect idle time?', answer: 'As part of employee activity tracking through the Windows agent.' },
      { question: 'Is idle time tracking configurable?', answer: 'Yes, through privacy controls in the admin portal.' },
      {
        question: 'Does idle time tracking count a scheduled break as idle time?',
        answer:
          'Idle periods are shown alongside active time, in context, for a manager to interpret.',
      },
      {
        question: 'Does idle time tracking take screenshots during idle periods?',
        answer:
          'Idle time tracking itself just notes inactive stretches. Screenshot capture is a separate, configurable feature governed by privacy controls.',
      },
      {
        question: 'Is idle time tracking available on personal laptops?',
        answer:
          'Yes, but on personal devices capture is session-gated between punch-in and punch-out through a short-lived, renewable permission, consistent with how other activity data is consent-gated there.',
      },
      {
        question: "Is idle time automatically excluded from an employee's total hours?",
        answer:
          'Idle periods are shown in context alongside active time so managers and admins can interpret them.',
      },
      {
        question: 'Who can adjust how idle time is detected or displayed?',
        answer: 'Admins, through privacy controls in the admin portal.',
      },
      {
        question: 'Does idle time tracking require a separate feature to be turned on?',
        answer: "No, it's part of the same employee activity tracking the Windows agent already performs, with no separate setup.",
      },
    ],
    related: ['working-hours-monitoring', 'screen-off-time-monitoring', 'employee-workday-tracking'],
  },
  {
    slug: 'screen-off-time-monitoring',
    title: 'Screen-Off Time Monitoring',
    cluster: 'monitoring',
    visual: 'dashboard',
    metaDescription: 'ZUZU screen-off time monitoring accounts for periods when a device screen is off, as part of employee activity data.',
    intro:
      "Screen-off time monitoring is the counterpart to activity tracking, accounting for periods when a device's screen is off, so a workday record isn't missing that context. It's part of the same employee activity data ZUZU already captures.",
    howItWorksNote: 'Screen state is recorded as part of ongoing activity tracking through the Windows agent.',
    features: ['employeeActivity', 'windowsAgent', 'timeAttendance', 'privacyControls'],
    privacy: true,
    benefits: [
      'A more complete workday record, not just active-screen time',
      'Built from existing Windows agent activity data',
      'Configurable through privacy controls',
    ],
    useCases: [
      { title: 'Completing the Workday Picture', description: 'Account for screen-off periods alongside active time.' },
      { title: 'Auditing Attendance Against Activity', description: 'Cross-check attendance records with screen activity context.' },
    ],
    faq: [
      {
        question: 'What does screen-off time monitoring track?',
        answer: 'Periods when a device screen is off, as part of employee activity data.',
      },
      {
        question: 'Can screen-off monitoring be adjusted per organization?',
        answer: 'Yes, through privacy controls in the admin portal.',
      },
      {
        question: 'Does screen-off time monitoring take a screenshot when the screen turns back on?',
        answer:
          'No, screen-off monitoring just records the screen-off state as part of employee activity. Screenshot capture is a separate, configurable feature on its own interval.',
      },
      {
        question: 'Is screen-off time the same as idle time?',
        answer:
          "They're related but distinct. Screen-off time monitoring tracks whether the device screen is off, while idle time tracking looks at stretches of no activity on a screen that may still be on.",
      },
      {
        question: 'How is screen-off time recorded?',
        answer:
          'Screen state is recorded as part of ongoing Windows agent activity tracking.',
      },
      {
        question: 'Does screen-off time monitoring apply on personal laptops?',
        answer:
          'Yes, subject to the same session-gated consent as other activity capture: only between punch-in and punch-out, through a short-lived, renewable permission.',
      },
      {
        question: 'Can screen-off time monitoring data be used to audit attendance records?',
        answer: 'Yes, screen-off and activity data can be cross-checked against attendance records to complete the workday picture.',
      },
      {
        question: 'Who can turn screen-off time monitoring on or off for the organization?',
        answer: 'Admins, through privacy controls in the admin portal.',
      },
    ],
    related: ['employee-idle-time-tracking', 'working-hours-monitoring', 'employee-attendance-tracking'],
  },
]

export const timeAttendanceCluster = {
  key: 'time-attendance',
  basePath: '/time-attendance',
  badgeLabel: 'Time & Attendance',
  hubTitle: 'Time & Attendance Management',
  hubDescription:
    'Every way ZUZU tracks, reports on and gives visibility into time and attendance, from a single clock-in to organization-wide analytics.',
  hubMetaDescription:
    'ZUZU time & attendance management: employee time tracking, attendance dashboards, reporting and analytics, all built on the same underlying data.',
  groups: TIME_ATTENDANCE_GROUPS,
  pages: TIME_ATTENDANCE_PAGES,
  faq: TIME_ATTENDANCE_HUB_FAQ,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Time & Attendance feature page', href: '/product/time-attendance' },
    { label: 'Activity & Attendance Ecosystem', href: '/activity' },
    { label: 'Screenshot + Privacy Ecosystem', href: '/screenshot-privacy' },
    { label: 'AI Reports + Workforce Analytics', href: '/ai-analytics' },
    { label: 'Behaviour Intelligence + Manager Workspace', href: '/manager' },
    { label: 'Admin Portal + Security & Governance', href: '/admin' },
    { label: 'Reports + Exports Ecosystem', href: '/reports' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
  ],
}
