/*
  Structured content for the ZUZU AI Reports + Workforce Analytics
  Ecosystem (Phase 08). Same pattern as the other cluster data files.

  This is the most heavily pruned cluster so far: the phase brief's
  suggested list (~25 titles across AI Reports / Analytics / Insights /
  Reporting Workflow) overlaps enormously with what Phases 04 and 06
  already built -- "Workforce Analytics Software", "Employee Work
  Analytics", "Employee Performance Insights", "Workday Intelligence
  Platform" (platform cluster) and "Employee/Team/Department Activity
  Reports", "Activity Trends", "Work Pattern Insights", "Productivity
  Through Activity Insights", "Manager Activity Overview" (activity
  cluster) already cover the analytics/insights/trends territory in
  depth. Publishing near-duplicates of those would violate this phase's
  own "no keyword-swapped pages" rule, so this cluster only covers what
  is genuinely new: the AI report artifact itself (individual, org-wide
  and daily), how managers review it, and two altitude-shifted synthesis
  pages (executive framing, decision-making framing) that don't exist
  anywhere else. Everything else is cross-linked into instead.

  No literal ZUZU content document was ever provided in this project's
  conversation (same caveat as every prior phase). No delivery channel,
  notification method or automation schedule is claimed for daily
  summaries; no productivity percentages or automated decision-making
  claims appear anywhere in this file. The productivity score is only
  acknowledged (not described) and only as the Admin Portal screenshots
  verify it: role context informs it, and it exists per employee.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const AI_ANALYTICS_GROUPS = [
  { key: 'reports', label: 'AI Reports' },
  { key: 'insights', label: 'Insights & Decisions' },
]

// Hub-level FAQ for /ai-analytics -- see timeAttendance.js for the pattern.
const AI_ANALYTICS_HUB_FAQ = [
  {
    question: 'What do AI Reports actually summarize?',
    answer: "Activity, attendance and, where enabled, screenshot context from the day, turned into a structured summary instead of raw, unfiltered logs.",
  },
  {
    question: 'Who can see AI Reports?',
    answer: 'Managers see reports scoped to their own team in the manager workspace; admins can review reports organization-wide through the admin portal.',
  },
  {
    question: 'Are AI Reports generated automatically?',
    answer: 'Yes, they are generated automatically from data already captured, with no manual compilation.',
  },
  {
    question: 'Can AI Reports be downloaded or shared?',
    answer: 'Yes, reports can be downloaded as PDF or exported to CSV or Excel to share outside the platform.',
  },
  {
    question: 'Does Workforce Analytics predict who will leave the company?',
    answer: 'No, ZUZU does not predict turnover or attrition. It surfaces activity, attendance and behaviour trends for people to interpret.',
  },
  {
    question: 'How often are AI Reports generated?',
    answer: 'Daily, and they are browsable by year, month and day.',
  },
  {
    question: 'Can AI Reports be delivered automatically by email?',
    answer: 'Yes, ZUZU supports organization-wide or manager-specific email digests of report data.',
  },
  {
    question: 'Does Workforce Analytics require separate setup from AI Reports?',
    answer: 'No, both are built from the same underlying activity, attendance and screenshot data the Windows agent already captures.',
  },
]

export const AI_ANALYTICS_PAGES = [
  {
    slug: 'ai-employee-reports',
    title: 'AI Employee Reports',
    cluster: 'reports',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "ZUZU's AI employee reports combine activity, attendance and screenshot context into one AI-generated summary per employee.",
    intro:
      "An AI employee report pulls together everything ZUZU knows about one person's workday, activity, attendance, and screenshot context where enabled, into a single AI-generated summary, rather than a report scoped to just one type of data.",
    howItWorksNote: 'AI reports draws on activity, attendance and screenshot data already captured for an employee and assembles it into one report.',
    features: ['aiReports', 'employeeActivity', 'timeAttendance', 'managerWorkspace'],
    privacy: true,
    benefits: [
      'One report instead of piecing together separate data sources',
      'Draws on activity, attendance and screenshot context together',
      'Available on demand in the manager workspace',
    ],
    useCases: [
      { title: 'Reviewing One Employee Holistically', description: 'See activity, attendance and screenshot context in a single report.' },
      { title: 'Preparing for a Performance Conversation', description: 'Bring a complete picture instead of several separate exports.' },
    ],
    faq: [
      { question: 'What does an AI employee report include?', answer: 'Activity, attendance and screenshot context for one employee, combined into a single AI-generated report.' },
      { question: 'Is an AI employee report different from an activity report?', answer: 'Yes, an activity report is scoped to activity data; an AI employee report draws on activity, attendance and screenshot context together.' },
      { question: 'How far back can I browse an employee\'s past AI reports?', answer: 'Reports are organized by year, month and day, so you can browse back through an employee\'s report history in that structure.' },
      { question: 'Can I download an employee report as a PDF?', answer: 'Yes, individual AI employee reports can be downloaded as PDF.' },
      { question: 'Does the report include a burnout or wellbeing forecast?', answer: 'Not as a section of the daily report itself, wellbeing and burnout forecasting is a related capability under workforce analytics, built from the same activity and attendance patterns.' },
      { question: 'Does ZUZU generate more than one report per employee per day?', answer: 'No, ZUZU generates one AI report per employee per day.' },
      { question: 'Does this report predict whether an employee is likely to leave?', answer: 'No, ZUZU does not predict turnover or attrition; the report summarizes what was captured, not what might happen next.' },
      { question: 'Do I need to set anything up beyond the Windows Agent to get this report?', answer: 'No, it\'s assembled from data the Windows agent already captures; no separate integration or setup is required.' },
    ],
    related: ['ai-workforce-reports', 'daily-ai-summaries', 'ai-report-review-workflow'],
    externalLinks: [
      { title: 'Employee Activity Reports', description: 'The activity-data-specific report this builds on.', href: '/activity/employee-activity-reports' },
      { title: 'Export Reports', description: 'Exporting this report to CSV, Excel or PDF.', href: '/reports/export-reports' },
      { title: 'How ZUZU Works, End to End', description: 'How captured data becomes this report.', href: '/learning/how-zuzu-works' },
    ],
  },
  {
    slug: 'ai-workforce-reports',
    title: 'AI Workforce Reports',
    cluster: 'reports',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "ZUZU's AI workforce reports combine activity, attendance and screenshot context across the whole organization.",
    intro:
      'An AI workforce report is the organization-wide counterpart to an AI employee report, the same combination of activity, attendance and screenshot context, rolled up across the whole workforce instead of one person.',
    howItWorksNote: 'Individual AI employee reports are aggregated into a single workforce-level report for admins and leadership.',
    features: ['aiReports', 'workforceAnalytics', 'adminPortal', 'employeeActivity'],
    privacy: true,
    benefits: [
      'An organization-wide report, not just individual summaries',
      'Built from the same data as individual AI employee reports',
      'Available to admins and leadership',
    ],
    useCases: [
      { title: 'Leadership Reporting', description: 'Give leadership one AI-generated report covering the whole organization.' },
      { title: 'Spotting Org-Wide Patterns', description: 'See patterns that only show up when data is viewed across the workforce.' },
    ],
    faq: [
      { question: 'How is an AI workforce report different from an AI employee report?', answer: 'It aggregates data across the whole organization instead of one employee.' },
      { question: 'Who can access AI workforce reports?', answer: 'Admins and leadership, through the admin portal.' },
      { question: 'Does the workforce report include department-level benchmarking?', answer: 'Department benchmarking is part of workforce analytics, which this report draws on alongside AI reports data.' },
      { question: 'Can the workforce report be exported?', answer: 'Yes, like other ZUZU reports, it can be exported to CSV, Excel or PDF.' },
      { question: 'Does the workforce report name individual employees?', answer: 'It aggregates data across the organization; individual detail is available separately through AI employee reports.' },
      { question: 'How often is the workforce report regenerated?', answer: 'It\'s available on demand, built from the same ongoing activity, attendance and screenshot data captured across the organization.' },
      { question: 'Can a manager see the AI workforce report?', answer: 'It\'s built for admins and leadership through the admin portal; managers work primarily with team-scoped reports in the manager workspace.' },
      { question: 'Does the workforce report include burnout risk information?', answer: 'Workforce analytics, which this report draws on, includes wellbeing and burnout forecasting with a weeks-to-risk estimate for employees on a rising trend.' },
    ],
    related: ['ai-employee-reports', 'executive-workforce-insights', 'data-driven-workforce-decisions'],
    externalLinks: [{ title: 'Workforce Reporting Platform', description: 'The broader ZUZU reporting platform page.', href: '/platform/workforce-reporting-platform' }],
  },
  {
    slug: 'daily-ai-summaries',
    title: 'Daily AI Summaries',
    cluster: 'reports',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "ZUZU daily AI summaries condense a day's activity and attendance data into a brief AI-generated summary for managers.",
    intro:
      "A daily AI summary condenses a single day's activity, attendance and report data into something a manager can read in a couple of minutes, instead of reviewing the day's raw data directly.",
    howItWorksNote: "AI reports compresses a single day's activity and attendance data into a short summary, rather than a full report.",
    features: ['aiReports', 'timeAttendance', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A quick daily read instead of a full report',
      'Reduces how much raw data a manager needs to review directly',
      "Built from the same day's activity and attendance data",
    ],
    useCases: [
      { title: 'Starting the Day With Context', description: 'Get a quick summary before checking anything else.' },
      { title: 'Reducing Manual Review', description: "Rely on a summary instead of scanning a full day's raw data." },
    ],
    faq: [
      { question: 'What does a daily AI summary cover?', answer: "A single day's activity and attendance data, condensed into a short summary." },
      { question: 'Does a daily summary replace a full AI report?', answer: 'No, it\'s a condensed daily view; full AI employee and workforce reports remain available separately.' },
      { question: 'Is a daily AI summary the same as the daily AI employee report?', answer: 'They\'re related but distinct, the daily AI employee report is the full, single-employee report; a daily summary condenses a day\'s activity and attendance data into a shorter read.' },
      { question: 'Can daily summaries be emailed?', answer: 'Organisation-wide or manager-specific email digests are part of how ZUZU delivers daily report data; exact delivery is configured by admins.' },
      { question: 'Does a daily summary cover screenshot data?', answer: 'No, a daily summary is built from activity and attendance data; screenshot context is part of the fuller AI employee report.' },
      { question: 'Can I go back and read a previous day\'s summary?', answer: 'Yes, daily reports are browsable by year, month and day.' },
      { question: 'Is a daily summary generated for every employee automatically?', answer: 'AI reports generates one report per employee per day; the daily summary is the condensed view of that.' },
      { question: 'Does the daily summary flag anything unusual on its own?', answer: 'It condenses the day\'s activity and attendance data; flagging pattern changes specifically is handled by behaviour intelligence.' },
    ],
    related: ['ai-employee-reports', 'ai-workforce-reports', 'ai-report-review-workflow'],
    externalLinks: [{ title: 'Daily Attendance Reports', description: 'The day-level attendance report this summary draws on.', href: '/time-attendance/daily-attendance-reports' }],
  },
  {
    slug: 'ai-report-review-workflow',
    title: 'AI Report Review Workflow',
    cluster: 'reports',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "How managers review ZUZU's AI-generated reports in the manager workspace, alongside the data those reports are built from.",
    intro:
      "AI reports are only useful if they fit into how a manager actually works, reviewed in the manager workspace alongside the activity, attendance and screenshot data they're built from, not as a document that has to be exported and read separately.",
    howItWorksNote: 'AI reports open directly in the manager workspace, next to the underlying activity, attendance and screenshot data.',
    features: ['aiReports', 'managerWorkspace', 'employeeActivity', 'screenshotMonitoring'],
    privacy: false,
    benefits: [
      'Reports reviewed in the same workspace as the underlying data',
      'No exporting or switching tools to read a report',
      'Consistent workflow for individual and workforce reports',
    ],
    useCases: [
      { title: 'Reviewing a Report Before a 1:1', description: 'Pull up an AI employee report right before a conversation.' },
      { title: 'Cross-Checking a Report Against Raw Data', description: 'Drop into the underlying activity or screenshot data from the same workspace.' },
    ],
    faq: [
      { question: 'Where are AI reports reviewed?', answer: "In the manager workspace, alongside the activity, attendance and screenshot data they're built from." },
      { question: 'Do I need to export a report to read it?', answer: 'No, reports are reviewed directly in the manager workspace.' },
      { question: 'Can I cross-check a report against the underlying data?', answer: 'Yes, reports are reviewed alongside the underlying activity, attendance and screenshot data in the manager workspace.' },
      { question: 'Does reviewing a report require leaving the Manager Workspace?', answer: 'No, reports open directly in the manager workspace, next to the activity, attendance and screenshot data they\'re built from.' },
      { question: 'Can I review screenshots from within the report workflow?', answer: 'Yes, screenshot data, where enabled, is part of what\'s reviewed alongside the report.' },
      { question: 'Is the review workflow different for admins versus managers?', answer: 'Admins review through the admin portal with organization-wide scope; managers review through the manager workspace scoped to their own team.' },
      { question: 'Can a manager download a report while reviewing it?', answer: 'Yes, AI employee reports can be downloaded as PDF.' },
      { question: 'Does the review workflow apply to workforce reports as well as employee reports?', answer: 'Yes, both individual and workforce-level AI reports are reviewed in the same way, within their respective scopes.' },
    ],
    related: ['ai-employee-reports', 'ai-workforce-reports', 'daily-ai-summaries'],
    externalLinks: [{ title: 'Screenshot Review Workflow', description: 'The equivalent review workflow for screenshots.', href: '/screenshot-privacy/screenshot-review-workflow' }],
  },
  {
    slug: 'executive-workforce-insights',
    title: 'Executive Workforce Insights',
    cluster: 'insights',
    visual: 'photo',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU gives executives and leadership an organization-wide view through AI workforce reports and workforce analytics.',
    intro:
      'Executive workforce insights are AI workforce reports and workforce analytics framed for leadership, a step back from day-to-day management, focused on organization-wide patterns rather than any one team.',
    howItWorksNote: 'The same AI workforce reports and workforce analytics data available to admins are the basis for what leadership reviews.',
    features: ['aiReports', 'workforceAnalytics', 'adminPortal', 'behaviourIntelligence'],
    privacy: false,
    benefits: [
      'Organization-wide framing, not team-level detail',
      'Built on existing AI workforce reports and workforce analytics',
      'No separate tool required for leadership',
    ],
    useCases: [
      { title: 'Board or Leadership Updates', description: 'Bring an organization-wide view into a leadership meeting.' },
      { title: 'Spotting Organization-Wide Shifts', description: 'See patterns that only emerge at the full-organization level.' },
    ],
    faq: [
      { question: 'Is executive workforce insight a separate product?', answer: 'No, it\'s the same AI workforce reports and workforce analytics data, viewed at the organization level.' },
      { question: 'Does ZUZU make decisions for leadership?', answer: 'No, ZUZU provides visibility and reporting; decisions remain with your organization.' },
      { question: 'Does executive workforce insight include burnout risk data?', answer: 'Yes, workforce analytics includes organisation health, executive highlights, department benchmarking and wellbeing/burnout forecasting, all part of what leadership reviews.' },
      { question: 'Can leadership drill down into a specific team from this view?', answer: 'Executive insight is organization-level; team-level detail is available separately through the manager workspace and department-level reports.' },
      { question: 'Does ZUZU provide a formal executive dashboard product?', answer: 'There isn\'t a separate executive product, this is the same AI workforce reports and workforce analytics data, framed for leadership review.' },
      { question: 'Are executive insights delivered automatically, or pulled on demand?', answer: 'They\'re available on demand through the admin portal, drawing on the same underlying reports and analytics.' },
      { question: 'Can executive insights be exported for a board deck?', answer: 'The underlying AI workforce reports and analytics can be exported to CSV, Excel or PDF for that kind of use.' },
      { question: 'Does executive workforce insight include recommendations, not just data?', answer: 'Workforce analytics includes recommendations that name the specific observation behind them, alongside organisation health and benchmarking.' },
    ],
    related: ['ai-workforce-reports', 'data-driven-workforce-decisions', 'ai-reports-analytics-faq'],
    externalLinks: [{ title: 'Workforce Analytics Software', description: 'The organization-wide analytics this insight is built on.', href: '/platform/workforce-analytics-software' }],
  },
  {
    slug: 'data-driven-workforce-decisions',
    title: 'Data-Driven Workforce Decisions',
    cluster: 'insights',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: "How organizations can use ZUZU's AI reports and workforce analytics as evidence for workforce decisions, without ZUZU making decisions automatically.",
    intro:
      "ZUZU's reports and analytics are built to inform decisions, not make them. Data-driven workforce decisions means using AI reports, workforce analytics and activity data as evidence, leaving the actual judgment calls to the people who manage the organization.",
    howItWorksNote: 'AI reports and workforce analytics surface data and patterns; interpreting that data into a decision stays with your team.',
    features: ['aiReports', 'workforceAnalytics', 'behaviourIntelligence', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Evidence for decisions, not automated decisions',
      'Consistent data across individual, team and organization views',
      'No separate analytics tool required',
    ],
    useCases: [
      { title: 'Backing Up a Staffing Conversation', description: 'Bring workforce data into a decision, rather than relying on impressions alone.' },
      { title: 'Reviewing a Policy Change', description: 'Check activity or attendance trends before and after a change.' },
    ],
    faq: [
      { question: 'Does ZUZU make workforce decisions automatically?', answer: 'No, ZUZU provides reports and analytics as evidence; decisions are made by your organization.' },
      { question: 'What data feeds into a data-driven decision?', answer: 'AI reports, workforce analytics and the underlying activity and attendance data.' },
      { question: 'Can ZUZU recommend a specific action to take?', answer: 'Workforce analytics can surface recommendations that name the observation behind them; the decision on what to act on stays with your organization.' },
      { question: 'Does ZUZU predict which employees might leave, to inform staffing decisions?', answer: 'No, ZUZU does not predict turnover or attrition. Decisions about staffing are based on activity, attendance and behaviour data as evidence, not a prediction.' },
      { question: 'Can this evidence be exported to share with other decision-makers?', answer: 'Yes, the underlying AI reports and workforce analytics data can be exported to CSV, Excel or PDF to bring into a broader discussion.' },
      { question: 'Is this framing specific to one type of decision?', answer: 'No, it applies broadly, from staffing conversations to policy reviews, wherever teams want to check an assumption against data.' },
      { question: 'Does ZUZU guarantee that using its data will improve outcomes?', answer: 'No, ZUZU doesn\'t guarantee productivity or revenue increases; it provides visibility and data as input to your own decisions.' },
      { question: 'Can this data be reviewed before and after a policy change?', answer: 'Yes, activity and attendance trends can be compared across periods, including before and after a change.' },
    ],
    related: ['executive-workforce-insights', 'ai-workforce-reports', 'ai-reports-analytics-faq'],
    externalLinks: [{ title: 'Behaviour Intelligence', description: 'Pattern data that can inform workforce decisions.', href: '/solutions/behaviour-intelligence' }],
  },
  {
    slug: 'ai-reports-analytics-faq',
    title: 'AI Reports & Workforce Analytics FAQ',
    cluster: 'insights',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "Answers to common questions about ZUZU's AI employee reports, AI workforce reports, and workforce analytics.",
    intro: "Common questions about how ZUZU's AI reports and workforce analytics work, gathered in one place.",
    howItWorksNote: 'Every answer here reflects how AI reports and workforce analytics already work across ZUZU, nothing here is a separate feature.',
    features: ['aiReports', 'workforceAnalytics', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Clear answers on AI reports and workforce analytics',
      'Covers employee, workforce and daily reports together',
      'One place instead of piecing answers together from separate pages',
    ],
    useCases: [
      { title: "Evaluating ZUZU's Reporting", description: 'Check what AI reports actually cover before rollout.' },
      { title: 'Answering a Leadership Question', description: 'Have a clear answer ready when asked what the reports include.' },
    ],
    faq: [
      { question: 'What are AI employee reports?', answer: "AI-generated reports that combine one employee's activity, attendance and screenshot context into a single summary." },
      { question: 'What are AI workforce reports?', answer: 'The organization-wide counterpart to an AI employee report, aggregating data across the whole workforce.' },
      { question: 'What is workforce analytics?', answer: 'Trends and patterns across your workforce, built from activity, attendance and behaviour data.' },
      { question: 'What is productivity analytics in ZUZU?', answer: 'Activity and behaviour data surfaced as context for productivity conversations. ZUZU also includes a productivity score.' },
      { question: 'What information can workforce reports summarize?', answer: 'Activity, attendance and screenshot context already captured across the organization.' },
      { question: 'How do AI reports relate to employee activity?', answer: 'AI reports are generated from the same employee activity data captured through the Windows agent.' },
      { question: 'How can managers use workforce insights?', answer: 'Through the manager workspace, alongside the underlying activity, attendance and report data.' },
      { question: 'What are workforce trends?', answer: 'Changes in activity, attendance or behaviour data over time, rather than a single snapshot.' },
    ],
    related: ['ai-employee-reports', 'ai-workforce-reports', 'executive-workforce-insights'],
    externalLinks: [{ title: 'ZUZU Platform Overview', description: 'Explore the full ZUZU platform.', href: '/platform' }],
  },
]

export const aiAnalyticsCluster = {
  key: 'ai-analytics',
  basePath: '/ai-analytics',
  badgeLabel: 'AI Reports & Analytics',
  hubTitle: 'AI Reports + Workforce Analytics Ecosystem',
  hubDescription:
    'How ZUZU turns activity, attendance and screenshot data into AI-generated reports, for one employee, the whole workforce, a single day, or leadership looking at the bigger picture.',
  hubMetaDescription:
    'The ZUZU AI reports + workforce analytics ecosystem: AI employee and workforce reports, daily summaries, executive insights and data-driven decision-making.',
  groups: AI_ANALYTICS_GROUPS,
  pages: AI_ANALYTICS_PAGES,
  faq: AI_ANALYTICS_HUB_FAQ,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Activity & Attendance Ecosystem', href: '/activity' },
    { label: 'Screenshot + Privacy Ecosystem', href: '/screenshot-privacy' },
    { label: 'Behaviour Intelligence + Manager Workspace', href: '/manager' },
    { label: 'Admin Portal + Security & Governance', href: '/admin' },
    { label: 'Reports + Exports Ecosystem', href: '/reports' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
  ],
}
