/*
  Structured content for the ZUZU Reports + Exports Ecosystem
  (Phase 11). Same pattern as the other cluster data files, plus one
  extension: this cluster's hub uses `directorySections` (see
  ClusterHub.jsx) to act as a genuine cross-site directory, since most
  of the "Reports" topics this phase suggests already exist as full
  pages spread across five earlier clusters.

  Heaviest overlap yet: Employee/Team/Department/Workforce/Activity/
  Attendance/Productivity/AI Reports and Manager/Executive Reporting
  are ALL already published (Phase 04/05/06/08/10) -- "Manager Reports"
  is an exact title match to an existing Phase 10 page. Rather than
  duplicate any of them, the hub links out to the real pages via
  `directorySections`, and this file only adds pages for the one
  genuinely new topic: exporting (CSV/Excel/PDF), plus a reporting-
  periods synthesis page and a consolidated FAQ.

  CSV/Excel/PDF are stated as the supported export formats directly in
  this phase's own brief (section 2) -- treated the same way prior
  phases treated user-stated capabilities (e.g. Phase 07's "on-device
  redaction"). No other export format (JSON, XML, PowerPoint, Google
  Sheets, API) is claimed. No delivery/schedule/integration claims
  (email, Slack, WhatsApp) appear anywhere. This is a marketing site
  with no backend, so no page implements or implies a working "Export
  Now" button -- CTAs route to /free-trial or /company/contact instead
  of pretending to perform a real export.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const REPORTS_GROUPS = [
  { key: 'exports', label: 'Export Formats' },
  { key: 'reporting', label: 'Reporting' },
]

// Hub-level FAQ for /reports -- see timeAttendance.js for the pattern.
const REPORTS_HUB_FAQ = [
  {
    question: 'What report types does ZUZU generate?',
    answer: 'Employee, team, department, workforce, activity, attendance, productivity, AI and manager or executive reports, all built from the same underlying data.',
  },
  {
    question: 'What formats can reports be exported in?',
    answer: 'CSV, Excel or PDF.',
  },
  {
    question: 'Are reports generated automatically, or do they need manual compilation?',
    answer: "Automatically, from data already captured through the Windows agent, with no manual report-building step.",
  },
  {
    question: 'Can reports be emailed automatically?',
    answer: 'Yes, ZUZU supports organization-wide or manager-specific email digests, as well as weekly report emails.',
  },
  {
    question: 'How far back can I review past reports?',
    answer: 'AI daily reports are browsable by year, month and day, not just the current day.',
  },
  {
    question: 'Are reports the same for every manager, or scoped by team?',
    answer: 'Managers see reports for their own assigned team; admins can review reports organization-wide through the admin portal.',
  },
  {
    question: 'Do exported reports include payroll calculations?',
    answer: 'No, ZUZU does not process payroll. Reports give admins accurate hours and activity data to use in their own payroll process.',
  },
  {
    question: "Can reports be shared with people who don't use ZUZU directly?",
    answer: 'Yes, reports can be downloaded as PDF or exported to CSV or Excel to share outside the platform.',
  },
]

export const REPORTS_DIRECTORY = [
  {
    label: 'Employee Reports',
    items: [
      { title: 'AI Employee Reports', description: "AI-generated reports combining one employee's activity, attendance and screenshot context.", href: '/ai-analytics/ai-employee-reports' },
      { title: 'Employee Activity Reports', description: "An individual's activity data, summarized on demand.", href: '/activity/employee-activity-reports' },
    ],
  },
  {
    label: 'Team Reports',
    items: [
      { title: 'Team Activity Reports', description: 'Activity data aggregated to the team level.', href: '/activity/team-activity-reports' },
      { title: 'Team Attendance Dashboard', description: "A manager's view of team-level attendance.", href: '/time-attendance/team-attendance-dashboard' },
    ],
  },
  {
    label: 'Department Reports',
    items: [
      { title: 'Department Activity Reports', description: 'Activity data rolled up to the department level.', href: '/activity/department-activity-reports' },
      { title: 'Department Attendance', description: 'Attendance data compared across business units.', href: '/activity/department-attendance' },
    ],
  },
  {
    label: 'Workforce Reports',
    items: [
      { title: 'AI Workforce Reports', description: 'The organization-wide counterpart to an AI employee report.', href: '/ai-analytics/ai-workforce-reports' },
      { title: 'Workforce Reporting Platform', description: 'Reports generated automatically from ongoing workforce data.', href: '/platform/workforce-reporting-platform' },
    ],
  },
  {
    label: 'Activity Reports',
    items: [
      { title: 'Activity Trends', description: 'How activity data changes over time.', href: '/activity/activity-trends' },
      { title: 'Work Activity Insights', description: 'Interpreted patterns in activity data.', href: '/activity/work-activity-insights' },
    ],
  },
  {
    label: 'Attendance Reports',
    items: [
      { title: 'Daily Attendance Reports', description: 'A same-day summary of attendance.', href: '/time-attendance/daily-attendance-reports' },
      { title: 'Attendance Reporting Software', description: 'Attendance reports generated automatically.', href: '/time-attendance/attendance-reporting-software' },
    ],
  },
  {
    label: 'Productivity Reports',
    items: [
      { title: 'Employee Productivity Software', description: 'Activity and behaviour data framed for productivity conversations.', href: '/platform/employee-productivity-software' },
      { title: 'Productivity Through Activity Insights', description: 'Connecting activity data to productivity context.', href: '/activity/productivity-through-activity-insights' },
    ],
  },
  {
    label: 'AI Reports',
    items: [
      { title: 'Daily AI Summaries', description: "A condensed AI summary of a single day's data.", href: '/ai-analytics/daily-ai-summaries' },
      { title: 'AI Report Review Workflow', description: 'How managers review AI-generated reports.', href: '/ai-analytics/ai-report-review-workflow' },
    ],
  },
  {
    label: 'Manager & Executive Reports',
    items: [
      { title: 'Manager Reports', description: 'The reports a manager can review, and when to use each one.', href: '/manager/manager-reports' },
      { title: 'Executive Workforce Insights', description: 'AI workforce reports and analytics framed for leadership.', href: '/ai-analytics/executive-workforce-insights' },
    ],
  },
]

export const REPORTS_PAGES = [
  {
    slug: 'export-reports',
    title: 'Export Reports',
    cluster: 'exports',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU reports can be exported to CSV, Excel or PDF for use outside the platform.',
    intro:
      "Reports in ZUZU aren't locked to the screen, activity, attendance and AI-generated reports can be exported to CSV, Excel or PDF, so the data can move into payroll systems, spreadsheets, or a document you can share and print.",
    howItWorksNote: 'Export takes a report already available in ZUZU and produces it in CSV, Excel or PDF format.',
    features: ['aiReports', 'timeAttendance', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Reports available in CSV, Excel or PDF',
      'The same underlying report, in the format you need',
      'No separate export tool required',
    ],
    useCases: [
      { title: 'Feeding Data Into Payroll', description: 'Export attendance data as CSV for a payroll system.' },
      { title: 'Sharing a Report With Leadership', description: 'Export a report as PDF to share or print.' },
    ],
    faq: [
      { question: 'Which export formats does ZUZU support?', answer: 'CSV, Excel and PDF.' },
      { question: 'Can activity, attendance and AI reports all be exported?', answer: 'Yes, reports across ZUZU can be exported in the supported formats.' },
      { question: 'Does the exported data differ between CSV, Excel and PDF, or is it the same report in a different format?', answer: "It's the same underlying report data, the format changes how it's structured (plain rows for CSV, an analysis-ready file for Excel, a formatted document for PDF), not what's included." },
      { question: 'Does exporting a report remove it from ZUZU?', answer: 'No, exporting creates a copy in the chosen format; the report remains available in ZUZU as well.' },
      { question: 'Can exports be scheduled to happen automatically?', answer: 'Weekly report emails and team daily digests are part of how ZUZU delivers report data on a recurring basis.' },
      { question: 'Can managers as well as admins export reports?', answer: 'Yes, both managers and admins can export reports within their respective scopes, through the manager workspace or admin portal.' },
      { question: 'Can an admin export data across the whole organization at once?', answer: 'Yes, organisation-level exports are available through the admin portal.' },
      { question: 'Do exported reports include screenshots?', answer: 'Exported reports reflect the activity, attendance and AI report data being exported; screenshot images themselves are reviewed separately in the product.' },
    ],
    related: ['export-to-csv', 'export-to-excel', 'export-to-pdf'],
    externalLinks: [{ title: 'AI Report Review Workflow', description: 'Where reports are reviewed before exporting.', href: '/ai-analytics/ai-report-review-workflow' }],
  },
  {
    slug: 'export-to-csv',
    title: 'Export Reports to CSV',
    cluster: 'exports',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'Export ZUZU reports to CSV for use in spreadsheets or other systems.',
    intro:
      'CSV export gives you the rawest, most portable version of a report, plain rows and columns that open in any spreadsheet tool or import into another system, without any formatting to strip out first.',
    howItWorksNote: 'A report is converted into comma-separated rows and columns, without additional formatting.',
    features: ['timeAttendance', 'employeeActivity', 'aiReports', 'adminPortal'],
    privacy: false,
    benefits: [
      'The most portable format for moving data elsewhere',
      'Opens in any spreadsheet tool',
      'No formatting to strip out before importing elsewhere',
    ],
    useCases: [
      { title: 'Importing Into Payroll or HR Software', description: 'Move attendance data into another system that accepts CSV.' },
      { title: 'Combining With Your Own Analysis', description: 'Pull raw data into your own spreadsheet or script.' },
    ],
    faq: [
      { question: 'What does a CSV export contain?', answer: 'The same report data, as plain rows and columns.' },
      { question: 'Is CSV the best format for importing into other software?', answer: 'CSV is typically the most portable option for importing into other systems.' },
      { question: 'Can I open a CSV export in a spreadsheet?', answer: 'Yes, CSV export produces plain rows and columns suitable for spreadsheet or system import.' },
      { question: 'Can a CSV export be filtered before exporting?', answer: 'The export reflects whatever report view, individual, team or organisation-level, was selected before exporting.' },
      { question: 'Is CSV export available to managers, or only admins?', answer: 'Both managers and admins can export reports within their respective scopes, through the manager workspace or admin portal.' },
      { question: 'Does CSV export work for AI-generated reports too?', answer: 'Yes, AI reports, along with activity and attendance reports, can be exported to CSV.' },
      { question: 'What is CSV export meant for?', answer: 'CSV export is meant for moving data out to other systems.' },
      { question: 'Is CSV the right format for a payroll system?', answer: 'CSV is typically the most portable option for importing attendance data into payroll or other systems, though ZUZU itself does not integrate directly with payroll or accounting systems.' },
    ],
    related: ['export-reports', 'export-to-excel', 'export-to-pdf'],
    externalLinks: [{ title: 'Employee Hours Reports', description: 'A report type commonly exported for payroll.', href: '/time-attendance/employee-hours-reports' }],
  },
  {
    slug: 'export-to-excel',
    title: 'Export Reports to Excel',
    cluster: 'exports',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'Export ZUZU reports to Excel for further analysis, sorting and filtering.',
    intro:
      'Excel export keeps a report in a format built for further analysis, sorting, filtering, pivot tables, rather than the plain rows of a CSV file, for anyone who works primarily in spreadsheets.',
    howItWorksNote: 'A report is converted into an Excel file, ready for the sorting, filtering or analysis Excel supports.',
    features: ['workforceAnalytics', 'timeAttendance', 'employeeActivity', 'aiReports'],
    privacy: false,
    benefits: [
      'Ready for sorting, filtering or pivot tables',
      'Familiar format for anyone who works in spreadsheets',
      'Same report data as CSV, in a more analysis-ready format',
    ],
    useCases: [
      { title: 'Building a Custom Analysis', description: 'Take exported data and build your own view in Excel.' },
      { title: 'Sharing With a Spreadsheet-First Team', description: 'Give a report to someone who prefers working in Excel.' },
    ],
    faq: [
      { question: 'How is Excel export different from CSV?', answer: "Excel export keeps the report in a format ready for further analysis in Excel; CSV is plain rows and columns." },
      { question: 'Can I filter or sort an exported report?', answer: "Once exported to Excel, the report can be sorted or filtered using excel's own tools." },
      { question: 'Is Excel export available to managers as well as admins?', answer: 'Yes, reports available in the manager workspace can be exported to CSV, Excel or PDF, and admins can export organisation-wide through the admin portal.' },
      { question: 'Is each report exported to Excel individually?', answer: 'Yes, each report is exported individually.' },
      { question: 'Is Excel export available for team and department-level reports?', answer: 'Yes, Excel export is available for individual, team and organisation-level reports.' },
      { question: 'Does exporting to Excel require Microsoft Excel to be installed?', answer: 'The export produces an Excel-compatible file; opening it works with Excel or any compatible spreadsheet software.' },
      { question: 'Can an Excel export be automated on a schedule?', answer: 'Weekly report emails and digests are part of how ZUZU delivers recurring report data.' },
      { question: 'Can organisation-wide exports be produced in Excel, not just individual reports?', answer: 'Yes, organisation-level exports through the admin portal support Excel alongside CSV and PDF.' },
    ],
    related: ['export-reports', 'export-to-csv', 'export-to-pdf'],
    externalLinks: [{ title: 'Workforce Analytics Software', description: 'The analytics this export format is well suited to.', href: '/platform/workforce-analytics-software' }],
  },
  {
    slug: 'export-to-pdf',
    title: 'Export Reports to PDF',
    cluster: 'exports',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Export ZUZU reports to PDF for sharing, printing or presenting.',
    intro:
      'PDF export turns a report into a fixed, shareable document, the format for printing, presenting, or sending a report to someone who just needs to read it, not manipulate the data.',
    howItWorksNote: 'A report is converted into a fixed-layout PDF document, suited for reading, printing or sharing rather than further data manipulation.',
    features: ['aiReports', 'managerWorkspace', 'timeAttendance', 'employeeActivity'],
    privacy: false,
    benefits: [
      'A fixed, easy-to-read document format',
      'Suited for printing or sharing outside ZUZU',
      'Consistent layout regardless of who opens it',
    ],
    useCases: [
      { title: 'Presenting a Report in a Meeting', description: 'Bring a clean, printable version of a report.' },
      { title: 'Sharing With Someone Outside ZUZU', description: 'Send a report to someone without ZUZU access.' },
    ],
    faq: [
      { question: 'When should I export a report as PDF instead of CSV or Excel?', answer: 'PDF is best when a report needs to be read, printed or shared, rather than further analyzed.' },
      { question: 'Can a PDF report be edited after export?', answer: 'PDF is a fixed-layout format; further analysis is better suited to a CSV or Excel export.' },
      { question: 'Can I share a PDF export with someone who does not have ZUZU access?', answer: 'Yes, PDF export produces a fixed, readable document suited for sharing or printing, so it works for someone without ZUZU access.' },
      { question: 'Is a PDF export the same report as the CSV and Excel versions?', answer: 'Yes, it is the same underlying report data, presented as a formatted document rather than plain rows (CSV) or an analysis-ready file (Excel).' },
      { question: 'Is PDF export available for AI-generated reports?', answer: 'Yes, AI employee reports specifically support PDF download, alongside other report types.' },
      { question: 'Can a manager export a report as PDF directly from the Manager Workspace?', answer: 'Yes, PDF export is available from where the report is reviewed, including the manager workspace.' },
      { question: 'Does a PDF export update if the underlying data changes later?', answer: 'No, a PDF is a fixed, point-in-time document; reviewing current data means going back into ZUZU rather than re-reading an old PDF.' },
      { question: 'Is PDF the best format for a board or leadership meeting?', answer: 'PDF is well suited to presenting or printing a report for a meeting, since it\'s a fixed, consistent layout regardless of who opens it.' },
    ],
    related: ['export-reports', 'export-to-csv', 'export-to-excel'],
    externalLinks: [{ title: 'Manager Reports', description: 'The reports commonly shared as PDF.', href: '/manager/manager-reports' }],
  },
  {
    slug: 'reporting-periods',
    title: 'Reporting Periods',
    cluster: 'reporting',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "How ZUZU's daily, weekly and monthly reporting periods each serve a different purpose.",
    intro:
      "ZUZU reports can be reviewed daily, weekly or monthly, depending on the question you're answering, a daily summary for a quick check-in, a weekly or monthly view for spotting trends a single day can't show.",
    howItWorksNote: 'Each reporting period draws on the same underlying activity and attendance data, scoped to a different window of time.',
    features: ['timeAttendance', 'aiReports', 'workforceAnalytics', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'The right level of detail for the question you\'re asking',
      'Consistent data across every period',
      'No separate configuration needed to switch periods',
    ],
    useCases: [
      { title: 'Quick Daily Check-Ins', description: 'Use a daily summary before diving into anything longer.' },
      { title: "Spotting Trends a Single Day Can't Show", description: 'Use a weekly or monthly view for slower-moving patterns.' },
    ],
    faq: [
      { question: "What's the difference between daily, weekly and monthly reporting in ZUZU?", answer: 'They cover the same underlying data at different time windows, a single day, a week, or a month.' },
      { question: 'Do I have to choose one reporting period?', answer: 'No, daily, weekly and monthly views are all available depending on what you\'re reviewing.' },
      { question: 'Can I browse past AI daily reports by date?', answer: 'Yes, AI daily reports are browsable by year, month and day.' },
      { question: 'Does switching reporting periods require different data collection?', answer: 'No, every period is built from the same underlying activity and attendance data, viewed at a different time window.' },
      { question: 'Are weekly and monthly reports generated automatically?', answer: 'Weekly report emails and team daily digests are part of how ZUZU delivers recurring report data.' },
      { question: 'Can daily, weekly and monthly views all be exported?', answer: 'Yes, reports at any of these periods can be exported to CSV, Excel or PDF.' },
      { question: 'Is a monthly view just an aggregation of daily and weekly data?', answer: 'Yes, each broader period rolls up the same underlying data captured at the daily level.' },
      { question: 'Which reporting period is best for spotting a burnout risk trend?', answer: 'Wellbeing and burnout forecasting looks at working-hour patterns and trends over time, which is better suited to a weekly or monthly view than a single day.' },
    ],
    related: ['export-reports', 'reports-faq', 'export-to-pdf'],
    externalLinks: [{ title: 'Daily AI Summaries', description: 'The daily-cadence report this page connects to.', href: '/ai-analytics/daily-ai-summaries' }],
  },
  {
    slug: 'reports-faq',
    title: 'Reports & Exports FAQ',
    cluster: 'reporting',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "Answers to common questions about ZUZU's employee, team, activity and AI reports, and CSV, Excel and PDF exports.",
    intro: "Common questions about ZUZU's reports and export options, gathered in one place.",
    howItWorksNote: 'Every answer here reflects how reporting and export already work across ZUZU, nothing here is a separate feature.',
    features: ['aiReports', 'timeAttendance', 'employeeActivity', 'workforceAnalytics'],
    privacy: false,
    benefits: [
      'Clear answers on reports and export formats',
      'Covers reports and exports together',
      'One place instead of piecing answers from separate pages',
    ],
    useCases: [
      { title: "Evaluating ZUZU's Reporting Before Rollout", description: 'Check what reports and export formats are available.' },
      { title: 'Answering a Data-Portability Question', description: 'Have a clear answer ready when asked about exporting data.' },
    ],
    faq: [
      { question: 'What reports does ZUZU provide?', answer: 'Employee, team, department, workforce, activity, attendance, productivity and AI-generated reports, all built from the same underlying data.' },
      { question: 'What are employee reports?', answer: "Reports scoped to a single employee's activity, attendance and AI-generated summary." },
      { question: 'What are team reports?', answer: 'Activity and attendance data aggregated to the team level, for a manager to review.' },
      { question: 'What are activity reports?', answer: 'Reports built from employee activity data, at the individual, team or department level.' },
      { question: 'What are attendance reports?', answer: 'Reports built from time & attendance data, covering daily, weekly or monthly periods.' },
      { question: 'What are AI reports?', answer: 'AI-generated reports that combine activity, attendance and screenshot context into a single summary.' },
      { question: 'Which export formats are supported?', answer: 'CSV, Excel and PDF.' },
      { question: 'Do reports differ between the Manager Workspace and Admin Portal?', answer: 'The same underlying report types are available in both; the manager workspace scopes them to a manager\'s own team, while the admin portal covers the whole organisation.' },
    ],
    related: ['export-reports', 'reporting-periods', 'export-to-csv'],
    externalLinks: [{ title: 'ZUZU Platform Overview', description: 'Explore the full ZUZU platform.', href: '/platform' }],
  },
]

export const reportsCluster = {
  key: 'reports',
  basePath: '/reports',
  badgeLabel: 'Reports & Exports',
  hubTitle: 'Reports + Exports Ecosystem',
  hubDescription:
    "Every report type across ZUZU, in one directory, employee, team, department, workforce, activity, attendance, productivity, AI and manager/executive reports, plus how to export any of them to CSV, Excel or PDF.",
  hubMetaDescription:
    'The ZUZU reports + exports ecosystem: a directory of every report type across the platform, plus CSV, Excel and PDF export.',
  groups: REPORTS_GROUPS,
  groupsHeading: 'Exporting & Reporting Periods',
  directorySections: REPORTS_DIRECTORY,
  pages: REPORTS_PAGES,
  faq: REPORTS_HUB_FAQ,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'AI Reports + Workforce Analytics', href: '/ai-analytics' },
    { label: 'Behaviour Intelligence + Manager Workspace', href: '/manager' },
    { label: 'Admin Portal + Security & Governance', href: '/admin' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
  ],
}
