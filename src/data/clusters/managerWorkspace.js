/*
  Structured content for the ZUZU Behaviour Intelligence + Manager
  Workspace Ecosystem (Phase 09). Same pattern as the other cluster
  data files.

  Heavily pruned again: several suggested titles overlap almost
  completely with Phase 06's activity cluster ("Work Pattern Insights"
  is an exact title match there; "Employee/Team Work Patterns",
  "Productivity Changes", "Workforce Behaviour Trends" would duplicate
  "Work Pattern Insights", "Activity Trends" and "Productivity Through
  Activity Insights") and Phase 08's ai-analytics cluster ("AI Reports
  for Managers" duplicates "AI Report Review Workflow"; "Daily Manager
  Digest" duplicates "Daily AI Summaries"). "Team Analytics", "Team
  Activity", "Team Attendance" and "Workforce Overview" would duplicate
  "Manager Activity Overview" (activity cluster), "Team Activity
  Reports" (activity cluster) and "Team Attendance Dashboard"
  (time-attendance cluster). Those angles are cross-linked into instead
  of recreated here.

  No literal ZUZU content document was ever provided in this project's
  conversation (same caveat as every prior phase). Behaviour Intelligence
  content here sticks strictly to neutral, review-oriented language
  (change / anomaly / unusual pattern / review / context / insight) --
  no personality analysis, emotion detection, mental-health inference,
  risk scores, rankings, predictive termination, or invented baseline
  formulas/thresholds/accuracy figures appear anywhere in this file.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const MANAGER_WORKSPACE_GROUPS = [
  { key: 'behaviour', label: 'Behaviour Intelligence' },
  { key: 'manager', label: 'Manager Workspace' },
]

// Hub-level FAQ for /manager -- see timeAttendance.js for the pattern.
const MANAGER_WORKSPACE_HUB_FAQ = [
  {
    question: 'What is the Manager Workspace?',
    answer: "A single place where a manager reviews activity, attendance, reports and behaviour insights for their own assigned team.",
  },
  {
    question: 'What is Behaviour Intelligence?',
    answer: "A capability that flags changes from an individual's own activity baseline and routes them to a review queue, rather than applying a fixed rule to everyone.",
  },
  {
    question: 'Does Behaviour Intelligence predict who is about to quit?',
    answer: "No, it flags changes from an individual's own baseline. It does not predict turnover or attrition.",
  },
  {
    question: 'Can a manager see employees outside their own team?',
    answer: 'No, the manager workspace is scoped to a manager\'s own assigned team.',
  },
  {
    question: 'Do managers need to set up Behaviour Intelligence themselves?',
    answer: 'No, baselines and pattern detection are built automatically from existing activity data, with no separate per-team configuration.',
  },
  {
    question: 'Can data in the Manager Workspace be exported?',
    answer: 'Yes, as CSV, Excel or PDF, in addition to being reviewed in AI daily reports.',
  },
  {
    question: 'Is Behaviour Intelligence the same as screenshot monitoring?',
    answer: 'No, behaviour intelligence works from activity and attendance patterns. Screenshots are a separate, configurable capture governed by privacy controls.',
  },
  {
    question: 'Who configures what the Manager Workspace shows?',
    answer: "Admins configure organization-wide monitoring and privacy settings through the admin portal; the manager workspace reflects that configuration for each manager's team.",
  },
]

export const MANAGER_WORKSPACE_PAGES = [
  {
    slug: 'behaviour-intelligence',
    title: 'Behaviour Intelligence',
    cluster: 'behaviour',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "ZUZU's behaviour intelligence surfaces work-pattern changes for managers to review, built from activity and attendance data, not a psychological assessment of employees.",
    intro:
      "Behaviour intelligence looks at how someone's work pattern compares to their own typical activity, not who they are, but how their day-to-day work looks over time. When something shifts, ZUZU surfaces it as something for a manager to review, alongside the activity and attendance data behind it.",
    howItWorksNote: 'Behaviour intelligence is built from the same activity and attendance data already captured across ZUZU, compared over time rather than judged in isolation.',
    features: ['behaviourIntelligence', 'employeeActivity', 'timeAttendance', 'aiReports'],
    privacy: true,
    benefits: [
      "Surfaces changes worth a manager's attention, not just raw data",
      'Built entirely from existing activity and attendance data',
      'Framed as something to review, not a conclusion about a person',
    ],
    useCases: [
      { title: "Noticing a Shift Worth a Conversation", description: 'See when a work pattern changes enough to be worth checking in about.' },
      { title: 'Adding Context to a Report', description: 'Pair a behaviour insight with the activity data behind it.' },
    ],
    faq: [
      { question: 'Does Behaviour Intelligence analyze personality or emotions?', answer: 'No, it looks at work-pattern data such as activity and attendance, not personal or psychological characteristics.' },
      { question: 'Is a behaviour insight a conclusion about an employee?', answer: "No, it's surfaced for a manager to review alongside other context, not a final judgment." },
      { question: 'Does Behaviour Intelligence predict whether an employee will quit?', answer: 'No, ZUZU does not predict turnover or attrition. Behaviour intelligence only surfaces activity-pattern changes relative to someone\'s own baseline.' },
      { question: 'Where do flagged changes go for review?', answer: 'Flagged activity routes to a review queue that a manager works through, rather than triggering an automatic action.' },
      { question: 'Is burnout forecasting part of Behaviour Intelligence?', answer: 'Not exactly, wellbeing and burnout forecasting is a related, separate capability under workforce analytics; behaviour intelligence specifically compares ongoing activity to an individual\'s own baseline.' },
      { question: 'Does Behaviour Intelligence compare employees to each other?', answer: 'No, it compares someone\'s activity to their own historical baseline, not to generic job-title rules or other employees.' },
      { question: 'Does turning on Behaviour Intelligence require extra employee setup?', answer: 'No, it\'s built from the same activity and attendance data already captured by the Windows agent.' },
      { question: 'Which manager sees an employee\'s flagged changes?', answer: 'Anomaly review happens within the manager workspace, scoped to whichever manager is assigned to that employee\'s team.' },
    ],
    related: ['behaviour-baselines', 'behaviour-changes', 'activity-anomalies'],
    externalLinks: [{ title: 'Behaviour Intelligence', description: 'The product-page overview of this capability.', href: '/solutions/behaviour-intelligence' }],
  },
  {
    slug: 'behaviour-baselines',
    title: 'Behaviour Baselines',
    cluster: 'behaviour',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "A behaviour baseline is an employee's own typical work pattern, used as a reference point for identifying changes, not a fixed target or score.",
    intro:
      "A baseline is simply what a person's work pattern typically looks like, their usual activity and attendance rhythm over time. It's the reference point ZUZU uses to notice when something looks different, not a target, score or ideal to measure someone against.",
    howItWorksNote: "A baseline reflects an individual's own historical activity and attendance data, not a fixed number or a comparison to other employees.",
    features: ['behaviourIntelligence', 'employeeActivity', 'timeAttendance', 'privacyControls'],
    privacy: true,
    benefits: [
      "Compares someone to their own typical pattern, not a fixed standard",
      'No invented formula or numerical threshold to game',
      'Gives context before a change is flagged',
    ],
    useCases: [
      { title: "Understanding What 'Normal' Looks Like for a Role", description: 'See a baseline before assuming a change is unusual.' },
      { title: 'Avoiding One-Off Misreads', description: 'Use an established pattern, not a single day, as the reference point.' },
    ],
    faq: [
      { question: 'Is a baseline the same for every employee?', answer: 'No, it reflects each person\'s own typical activity and attendance pattern.' },
      { question: 'What data is a baseline built from?', answer: 'An individual\'s own captured activity and attendance history, a baseline reflects that person\'s historical pattern. The one timeframe involved is in AI work, where anomaly detection stays off until an employee has five days of tracked activity.' },
      { question: 'How long does it take to establish a baseline?', answer: 'A baseline is built from an individual\'s accumulated activity and attendance history. In AI work, anomaly detection stays off for an employee until they have five days of tracked activity, because until then there is no baseline to diverge from.' },
      { question: 'Is a baseline tied to a person or to a job role?', answer: "To the person, a baseline reflects each individual's own historical activity and attendance data, not generic job-title rules." },
      { question: 'What is a baseline used for?', answer: "A baseline is the reference point for detecting behaviour changes, so managers can review changes worth a follow-up." },
      { question: 'Does a baseline account for remote versus in-office work?', answer: "A baseline is built from an individual's own captured activity and attendance data, regardless of work location." },
      { question: 'Does an admin need to configure baselines?', answer: 'No, baselines are derived from the activity and attendance data the Windows agent already captures.' },
      { question: 'Is a baseline the same thing as a burnout forecast?', answer: 'No, a baseline is the reference point for detecting behaviour changes; the wellbeing and burnout forecast is a separate, related capability under workforce analytics.' },
    ],
    related: ['behaviour-intelligence', 'behaviour-changes', 'activity-anomalies'],
    externalLinks: [{ title: 'Employee Work Activity', description: 'The underlying activity data baselines are built from.', href: '/activity/employee-work-activity' }],
  },
  {
    slug: 'behaviour-changes',
    title: 'Behaviour Changes',
    cluster: 'behaviour',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU surfaces behaviour changes, shifts in work pattern relative to a baseline, as something for managers to review, not a conclusion about an employee.',
    intro:
      "A behaviour change is a shift in someone's work pattern relative to their own baseline, working later than usual, a change in activity levels, a different attendance rhythm. ZUZU surfaces the change; understanding why it happened is left to a manager, with the surrounding context available to review.",
    howItWorksNote: "A change is identified by comparing ongoing activity and attendance data against an individual's established baseline.",
    features: ['behaviourIntelligence', 'employeeActivity', 'managerWorkspace', 'aiReports'],
    privacy: true,
    benefits: [
      'Flags shifts worth reviewing, without assuming a cause',
      'Always reviewable alongside the underlying activity and attendance data',
      'Not framed as a negative judgment by default',
    ],
    useCases: [
      { title: 'Checking in After a Change', description: 'Use a flagged change as a prompt for a conversation, not a conclusion.' },
      { title: 'Spotting a Change Early', description: 'Notice a shift in pattern before it becomes a bigger issue.' },
    ],
    faq: [
      { question: 'Does a behaviour change always indicate a problem?', answer: "No, it indicates a shift from someone's typical pattern; the reason is for a manager to review, not something ZUZU determines." },
      { question: 'Can a manager see the data behind a flagged change?', answer: 'Yes, through the related activity and attendance data in the manager workspace.' },
      { question: 'Does every behaviour change get flagged for review?', answer: 'Meaningful shifts from someone\'s baseline are surfaced for review; ZUZU doesn\'t publish a specific threshold for what counts as meaningful.' },
      { question: 'Can a manager dismiss a flagged change without acting?', answer: 'The manager review process is where a flagged change is interpreted; ZUZU surfaces the change but doesn\'t require a specific action.' },
      { question: 'Does a behaviour change ever result in an automated consequence?', answer: 'No, ZUZU surfaces the change for a manager to review; there\'s no automated action tied to it.' },
      { question: 'How is a behaviour change different from wellbeing/burnout forecasting?', answer: 'A behaviour change is a shift from someone\'s own baseline surfaced for review; burnout forecasting specifically projects risk from working-hour patterns like long days, weekend work and late-night activity.' },
      { question: 'Can behaviour changes be reviewed after the fact, not just as they happen?', answer: 'Yes, a flagged change links to the underlying activity and attendance data, which remains available to review.' },
      { question: 'Does a single unusual day count as a behaviour change?', answer: 'A single unusual event is typically treated as an activity anomaly; a behaviour change reflects an ongoing shift in pattern.' },
    ],
    related: ['behaviour-baselines', 'activity-anomalies', 'anomaly-review'],
    externalLinks: [{ title: 'Activity Trends', description: 'How activity data changes over time, more broadly.', href: '/activity/activity-trends' }],
  },
  {
    slug: 'activity-anomalies',
    title: 'Activity Anomalies',
    cluster: 'behaviour',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'An activity anomaly in ZUZU is a single unusual event in activity data, surfaced for review rather than treated as a conclusion.',
    intro:
      "An activity anomaly is narrower than a behaviour change, a single unusual event, like an unexpected spike or gap in activity on a particular day, rather than an ongoing shift in pattern. It's surfaced the same way: as something to look at, not something already decided.",
    howItWorksNote: 'An anomaly is identified from a specific point in activity data that stands out against the surrounding pattern, on a given day.',
    features: ['employeeActivity', 'behaviourIntelligence', 'timeAttendance', 'privacyControls'],
    privacy: true,
    benefits: [
      'Points to a specific moment, not an ongoing trend',
      'Reviewed with the same activity and attendance context',
      'Not an automatic judgment about what happened',
    ],
    useCases: [
      { title: 'Investigating a Single Unusual Day', description: 'Look into a specific day that stood out, rather than a longer trend.' },
      { title: 'Confirming a One-Off Explanation', description: "Check whether a day's anomaly has an obvious, simple explanation." },
    ],
    faq: [
      { question: 'How is an anomaly different from a behaviour change?', answer: 'An anomaly is a single unusual event; a behaviour change is an ongoing shift in pattern over time.' },
      { question: 'Does ZUZU explain why an anomaly happened?', answer: 'No, it surfaces the anomaly and the surrounding data; a manager reviews the context.' },
      { question: 'Does an anomaly automatically get flagged as a security concern?', answer: 'No, an anomaly is surfaced as something to review; it doesn\'t carry an automatic security classification.' },
      { question: 'Can an anomaly be linked to a specific application or website?', answer: 'Yes, since anomalies come from activity data, they relate back to the specific activity (app or site usage) recorded that day.' },
      { question: 'What makes a day\'s activity get surfaced as an anomaly?', answer: 'It depends on how much an individual day\'s activity stands out from the surrounding pattern.' },
      { question: 'Does the underlying data stay available if an anomaly is not reviewed?', answer: 'Yes, the underlying activity and attendance data an anomaly is based on remains available.' },
      { question: 'Are anomalies specific to one employee, or can a team-wide anomaly be surfaced?', answer: 'Anomalies are identified from an individual\'s activity data; team-level patterns are covered separately through work pattern insights.' },
      { question: 'Does reviewing an anomaly require pulling a separate report?', answer: 'No, a flagged anomaly links directly to the surrounding activity and attendance data within the same review workflow.' },
    ],
    related: ['behaviour-changes', 'behaviour-baselines', 'anomaly-review'],
    externalLinks: [{ title: 'Employee Idle Time Tracking', description: 'A specific kind of activity gap this can relate to.', href: '/time-attendance/employee-idle-time-tracking' }],
  },
  {
    slug: 'manager-insight-workflow',
    title: 'Manager Insight Workflow',
    cluster: 'manager',
    visual: 'photo',
    sectionOrder: ORDER_B,
    metaDescription: "How behaviour insights and anomalies fit into a manager's day-to-day workflow in the ZUZU manager workspace.",
    intro:
      'Behaviour insights and anomalies are only useful if a manager can act on them without extra tools. In ZUZU, they surface directly in the manager workspace, next to the activity, attendance and reports a manager already reviews.',
    howItWorksNote: 'Behaviour insights and flagged changes appear in the manager workspace alongside activity, attendance and AI reports for the same team.',
    features: ['managerWorkspace', 'behaviourIntelligence', 'employeeActivity', 'aiReports'],
    privacy: false,
    benefits: [
      'Insights reviewed in the same workspace as everything else',
      'No separate tool for behaviour data',
      'Consistent with how activity and attendance are already reviewed',
    ],
    useCases: [
      { title: 'Starting a Review From an Insight', description: 'Use a surfaced insight as the starting point, then pull in supporting data.' },
      { title: 'Keeping Review Consistent Across a Team', description: 'Review insights the same way for every team member.' },
    ],
    faq: [
      { question: 'Where do managers see behaviour insights?', answer: 'In the manager workspace, alongside activity, attendance and AI reports.' },
      { question: 'Do insights require a separate dashboard?', answer: 'No, they appear in the same manager workspace used for everything else.' },
      { question: 'Do insights cover a manager\'s whole assigned team?', answer: 'Yes, insights are surfaced based on the manager\'s assigned team.' },
      { question: 'Does the Manager Workspace show insights for employees outside a manager\'s team?', answer: "No, managers cannot see employees outside the teams they're assigned to." },
      { question: 'What are insights built from?', answer: 'Insights are built from ongoing activity and attendance data as it\'s captured.' },
      { question: 'Do admins have visibility beyond a manager\'s team?', answer: 'Yes, admins have organisation-wide visibility through the admin portal, while managers see their assigned team.' },
      { question: 'Does the workflow include screenshot context?', answer: 'Yes, screenshot data, where enabled, is part of what a manager can review alongside behaviour insights.' },
      { question: 'Is the manager insight workflow different for larger teams?', answer: 'The workflow itself is consistent; it\'s scoped to whatever team size a manager is assigned.' },
    ],
    related: ['manager-reports', 'anomaly-review', 'behaviour-intelligence'],
    externalLinks: [{ title: 'Manager Workspace', description: 'The product-page overview of this capability.', href: '/product/manager-workspace' }],
  },
  {
    slug: 'manager-reports',
    title: 'Manager Reports',
    cluster: 'manager',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'The reports available to ZUZU managers, activity, attendance and AI-generated, and when to use each one.',
    intro:
      "A manager reviewing a team doesn't use one report, they move between activity reports, attendance reports and AI-generated reports depending on the question they're answering. This page maps out what's available and when to use each one.",
    howItWorksNote: 'Each report type draws on the same underlying activity, attendance and AI reports data, scoped differently for different questions.',
    features: ['managerWorkspace', 'aiReports', 'employeeActivity', 'timeAttendance'],
    privacy: false,
    benefits: [
      'A clear map of which report answers which question',
      'No duplicate reports to maintain',
      'Consistent data across every report type',
    ],
    useCases: [
      { title: 'Choosing the Right Report', description: 'Know whether an activity, attendance or AI report answers your question.' },
      { title: 'Onboarding a New Manager', description: 'Give a new manager a clear picture of what\'s available.' },
    ],
    faq: [
      { question: 'What kinds of reports can a manager review in ZUZU?', answer: 'Activity reports, attendance reports, and AI-generated reports, all available in the manager workspace.' },
      { question: 'Are these separate systems?', answer: 'No, they draw on the same underlying data, scoped to different questions.' },
      { question: 'Can a manager generate all report types from one place?', answer: 'Yes, activity reports, attendance reports and AI-generated reports are all accessible from the manager workspace.' },
      { question: 'Do manager reports include department-level data?', answer: "No, the manager workspace is scoped to a manager's own team; department-level reports are reviewed by admins through the admin portal." },
      { question: 'Can manager reports be scheduled to arrive automatically?', answer: 'Team daily digests and weekly report emails are part of how ZUZU can deliver report data to managers.' },
      { question: 'Are manager reports different from what an admin sees?', answer: "The underlying data is the same; a manager's reports are scoped to their team, while an admin's cover the whole organisation." },
      { question: "Can a manager compare their team's reports to another team's?", answer: "No, the manager workspace is scoped to a manager's own assigned team; cross-team comparison happens at the admin or department level." },
      { question: 'Do manager reports include behaviour insights?', answer: 'Yes, behaviour insights and flagged changes appear alongside activity, attendance and AI reports in the manager workspace.' },
    ],
    related: ['manager-insight-workflow', 'anomaly-review', 'behaviour-manager-faq'],
    externalLinks: [
      { title: 'AI Report Review Workflow', description: 'How AI-generated reports specifically are reviewed.', href: '/ai-analytics/ai-report-review-workflow' },
      { title: 'Export Reports', description: 'Exporting any of these reports to CSV, Excel or PDF.', href: '/reports/export-reports' },
    ],
  },
  {
    slug: 'anomaly-review',
    title: 'Anomaly Review',
    cluster: 'manager',
    visual: 'photo',
    sectionOrder: ORDER_C,
    metaDescription: 'The manager workflow for reviewing an anomaly or behaviour change in ZUZU, with activity and attendance context.',
    intro:
      'Anomaly review is the process a manager follows when ZUZU surfaces an unusual pattern or change: look at what was flagged, pull in the activity and attendance context around it, and decide what, if anything, it needs. ZUZU surfaces the anomaly; the review and any conclusion stay with the manager.',
    howItWorksNote: 'A flagged anomaly or change links directly to the activity and attendance data around it, for a manager to review in context.',
    features: ['behaviourIntelligence', 'managerWorkspace', 'employeeActivity', 'timeAttendance'],
    privacy: true,
    benefits: [
      'A consistent process for reviewing any flagged change',
      'Context available in the same place as the flag itself',
      "No automatic conclusion drawn on a manager's behalf",
    ],
    useCases: [
      { title: 'Reviewing a Flagged Change', description: 'Work through context before deciding whether to follow up.' },
      { title: 'Documenting a Review', description: 'Use the same workflow each time, for consistency across a team.' },
    ],
    faq: [
      { question: 'Does ZUZU decide what an anomaly means?', answer: 'No, ZUZU surfaces the anomaly and related data; interpreting it is left to the manager.' },
      { question: 'What context is available during a review?', answer: 'The activity and attendance data around the flagged anomaly or change.' },
      { question: 'How does the review workflow present an anomaly?', answer: 'The workflow surfaces the anomaly with linked activity and attendance context for a manager to work through.' },
      { question: 'Can more than one manager review the same anomaly?', answer: 'Anomaly review happens within the manager workspace scoped to whichever manager is assigned to that employee\'s team.' },
      { question: 'Does ZUZU record that a review took place?', answer: "Yes, in AI work, confirming or correcting a flag records a verdict against the flagged frame, and verdicts feed the organisation's precedent set. Organisation-level audit trails are covered separately in the admin portal." },
      { question: 'What happens if a manager decides a flagged anomaly needs no follow-up?', answer: "That decision stays with the manager, ZUZU doesn't require a specific action or outcome once an anomaly is reviewed." },
      { question: 'Can an anomaly review lead directly to a conversation prompt with the employee?', answer: 'Yes, a flagged anomaly or behaviour change is meant to prompt a conversation, not to serve as an automatic judgment.' },
      { question: 'Is anomaly review available for attendance data as well as activity data?', answer: 'Yes, the review workflow pulls in both activity and attendance context around a flagged anomaly or change.' },
    ],
    related: ['behaviour-changes', 'activity-anomalies', 'manager-insight-workflow'],
    externalLinks: [{ title: 'Screenshot Review Workflow', description: 'The equivalent review workflow for screenshots.', href: '/screenshot-privacy/screenshot-review-workflow' }],
  },
  {
    slug: 'behaviour-manager-faq',
    title: 'Behaviour Intelligence & Manager Workspace FAQ',
    cluster: 'manager',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "Answers to common questions about ZUZU's behaviour intelligence, baselines, anomalies and the manager workspace.",
    intro: "Common questions about how ZUZU's behaviour insights and manager tools work, gathered in one place.",
    howItWorksNote: 'Every answer here reflects how behaviour intelligence and the manager workspace already work, nothing here is a separate feature.',
    features: ['behaviourIntelligence', 'managerWorkspace', 'employeeActivity', 'aiReports'],
    privacy: true,
    benefits: [
      'Clear answers on baselines, anomalies and manager review',
      'Covers behaviour insights and manager tools together',
      'One place instead of piecing answers from separate pages',
    ],
    useCases: [
      { title: 'Evaluating Behaviour Intelligence Before Rollout', description: 'Check what it actually does before turning it on for a team.' },
      { title: "Answering a Manager's Question", description: 'Point to a clear answer when a manager asks how this works.' },
    ],
    faq: [
      {
        question: 'What is behaviour intelligence?',
        answer: "A ZUZU capability that compares ongoing work activity to a person's own typical pattern and surfaces meaningful changes for a manager to review.",
      },
      { question: 'What are behaviour baselines?', answer: 'A person\'s own typical activity and attendance pattern, used as the reference point for identifying changes.' },
      { question: 'What is an activity anomaly?', answer: 'A single unusual event in activity data, distinct from an ongoing behaviour change.' },
      { question: 'How can managers review workforce changes?', answer: 'Through the anomaly review workflow in the manager workspace, alongside the underlying activity and attendance data.' },
      { question: 'What is a manager workspace?', answer: 'The single place managers review activity, attendance, reports and behaviour insights for their team.' },
      { question: 'How does manager analytics work in ZUZU?', answer: 'Managers review workforce analytics and AI reports alongside behaviour insights, all in the manager workspace.' },
      { question: 'How do AI reports help managers?', answer: 'By summarizing activity, attendance and screenshot context into reports, rather than requiring managers to review raw data directly.' },
      { question: 'What are work pattern insights?', answer: 'Interpreted patterns in how a team works, built from the same activity data as behaviour insights.' },
    ],
    related: ['behaviour-intelligence', 'manager-insight-workflow', 'anomaly-review'],
    externalLinks: [{ title: 'ZUZU Platform Overview', description: 'Explore the full ZUZU platform.', href: '/platform' }],
  },
]

export const managerWorkspaceCluster = {
  key: 'manager',
  basePath: '/manager',
  badgeLabel: 'Behaviour & Manager Workspace',
  hubTitle: 'Behaviour Intelligence + Manager Workspace',
  hubDescription:
    'How ZUZU surfaces work-pattern changes for review, and how activity, attendance, reports and behaviour insights come together in the manager workspace.',
  hubMetaDescription:
    'The ZUZU behaviour intelligence + manager workspace ecosystem: baselines, behaviour changes, activity anomalies, manager reports and anomaly review.',
  groups: MANAGER_WORKSPACE_GROUPS,
  pages: MANAGER_WORKSPACE_PAGES,
  faq: MANAGER_WORKSPACE_HUB_FAQ,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Activity & Attendance Ecosystem', href: '/activity' },
    { label: 'AI Reports + Workforce Analytics', href: '/ai-analytics' },
    { label: 'Admin Portal + Security & Governance', href: '/admin' },
    { label: 'Reports + Exports Ecosystem', href: '/reports' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
  ],
}
