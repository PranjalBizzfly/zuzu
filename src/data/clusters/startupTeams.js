/*
  Structured content for the ZUZU Startup Teams cluster. Same shape as
  the other cluster data files (see roles.js), rendered by the existing
  ClusterHub/ClusterPage templates -- zero new components.

  Each page targets a genuinely different stage or angle of a startup's
  life -- early-stage/founder-led, scaling, remote-distributed, and
  founder/leadership -- using a relevant subset of existing ZUZU
  capabilities rather than repeating the same paragraph with the stage
  noun swapped. This cluster intentionally does not include an umbrella
  "ZUZU for Startups" page, since /industries/startups already covers
  that ground; this file cross-links to it instead.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const STARTUP_TEAMS_GROUPS = [
  { key: 'early-stage', label: 'Early-Stage & Founder-Led' },
  { key: 'scaling', label: 'Scaling Teams' },
  { key: 'remote-distributed', label: 'Remote-First Startups' },
  { key: 'leadership', label: 'Founder & Leadership' },
]

export const STARTUP_TEAMS_PAGES = [
  {
    slug: 'early-stage-startup-team-visibility',
    title: 'Early-Stage Startup Team Visibility',
    cluster: 'early-stage',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Set up a founding team in ZUZU: add employee, pending to activated with a 16-character code, and a 7-day trial for up to 10 employees, no card.',
    intro:
      'With three or four people, the founder is also the admin, the manager and the one who would notice a laptop going quiet. The first ZUZU setup is short: add each person under employees, and they stay pending until the Windows agent has run once with their 16-character activation code, then show as activated. The 7-day free trial covers up to 10 employees and needs no card, so a founding team can see real attendance and application data before deciding anything.',
    howItWorksNote: 'The founder works in the employees workspace (pending, activated, deactivated) and reviews each person\'s attendance and application activity from the moment their agent first reports in.',
    features: ['workforceVisibility', 'employeeActivity', 'timeAttendance', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'One admin setup: add employee, then pending turns to activated once the agent has run with the person\'s code',
      'Real attendance and application data during the trial, before any commitment',
      'Last-seen time on each employee shows whether their agent is running',
    ],
    useCases: [
      { title: 'Running the First Trial With the Founding Team', description: 'Add the first employees, hand out activation codes, and watch the employees list move from pending to activated as each agent runs.' },
      { title: 'Checking the Setup Worked', description: 'Use last activity and agent activity in employees to confirm each machine is reporting before relying on the data.' },
    ],
    faq: [
      { question: 'How does a new person get from Pending to Activated?', answer: 'The founder adds them with add employee. They stay pending until the desktop agent has run once on their Windows machine with their 16-character activation code, then show as activated.' },
      { question: 'Can we try it before committing?', answer: 'Yes. The 7-day free trial covers up to 10 employees, includes the agent, and needs no card.' },
      { question: 'Does a small team need an IT person to install it?', answer: 'Not a dedicated one. The installer is about 80 MB and is run on each device individually. It only runs on Windows.' },
      { question: 'What if someone\'s agent is not reporting?', answer: 'Check the employee\'s last-seen time, which shows whether the agent is running. The documented causes of tracking stopping are a deactivated employee, a personal device where the employee has not punched in, or an organisation suspended for billing.' },
      { question: 'Does ZUZU replace the tool we use to run the work itself?', answer: 'No. It does not track tasks or projects. It records attendance and application activity on each Windows device, so it sits next to whatever tool you use for the work.' },
      { question: 'Who sees what in a very small company?', answer: 'The admin sees the whole organisation in the admin portal. A manager assigned to the team reviews it in the manager workspace, scoped to that team, and cannot change settings.' },
      { question: 'What does the agent capture on an employee\'s machine?', answer: 'Application and website usage with how long each was used, attendance, idle and screen-off periods, and screenshots where enabled. It does not capture keystrokes or typed content.' },
      { question: 'Do we need shifts or timesheets set up first?', answer: 'No. Hours and attendance are recorded automatically from agent activity, so there are no manual timesheets and no manual clock-in on company-managed devices.' },
    ],
    related: ['founder-led-team-oversight', 'startup-first-hires-activity-tracking', 'lean-team-attendance-tracking'],
    externalLinks: [
      { title: 'Platform Overview', description: "A broader look at ZUZU's core capabilities.", href: '/platform' },
      { title: 'Manager Workspace', description: 'The team-scoped manager workspace.', href: '/manager' },
    ],
  },
  {
    slug: 'founder-led-team-oversight',
    title: 'Founder-Led Team Oversight',
    cluster: 'early-stage',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'A founder who manages the team directly can review it in the manager workspace and read the daily AI report and weekly digest instead of chasing updates.',
    intro:
      'When the founder is the only manager, the question is less "who is working" than "what do I look at, and how often". In the manager workspace the founder sees the team they are assigned to: attendance and application activity by day, plus one AI report per employee per day, with team at a glance as the summarised overview. The weekly digest can be emailed to a specific manager, so the founder can read a summary on Monday morning instead of asking everyone for a written update.',
    howItWorksNote: 'The founder reviews the assigned team in the manager workspace (daily AI reports, attendance, application activity) and receives the weekly digest by email; settings stay with the admin.',
    features: ['managerWorkspace', 'employeeActivity', 'timeAttendance', 'workforceVisibility'],
    privacy: false,
    benefits: [
      'A daily AI report per employee in place of written status updates',
      'Weekly digest by email, sent to a specific manager',
      'A workspace scoped to the founder\'s own team, with no settings to change by accident',
    ],
    useCases: [
      { title: 'Reading the Weekly Digest First', description: 'Read the digest, then open the manager workspace only for the people it points to.' },
      { title: 'Handing the Team to a First Manager', description: 'Assign the team to the new manager; they get the same team-scoped manager workspace the founder used.' },
    ],
    faq: [
      { question: 'Can a founder be the manager of a team?', answer: 'Yes. The manager workspace is scoped to whoever is assigned as manager of a team, and more than one manager can share a team, so a co-founder can be assigned alongside the founder.' },
      { question: 'What does the founder read each day?', answer: 'One AI report per employee per day, built from activity, attendance and screenshot context and browsable by year, month and day.' },
      { question: 'Can the digest reach the founder by email?', answer: 'Yes. Daily AI reports and the weekly digest are delivered by email, and digests can go organisation-wide or to a specific manager.' },
      { question: 'Can the founder change monitoring settings from the Manager Workspace?', answer: 'No. The workspace is for reviewing. Capture cadence, retention and redaction are set once in the admin portal monitoring policy and apply to everyone.' },
      { question: 'Do I have to open every screenshot?', answer: 'No. Screenshots appear where enabled, but the daily AI report and the activity summaries carry the picture, so screenshots are for checking a specific point.' },
      { question: 'What changes once a manager is hired?', answer: 'An admin assigns the team to the new manager in the admin portal. That manager sees only their own team and cannot change settings.' },
      { question: 'Does ZUZU tell a founder what to do about a quiet day?', answer: 'No. It shows signals such as overloaded or may need coaching with the activity behind them, for the founder to review. Any action is the founder\'s decision.' },
      { question: 'How is this different from the business-owner view?', answer: 'This is team-scoped, day-to-day review in the manager workspace. The business-owner view is the organisation-wide picture that admins see in the admin portal.' },
    ],
    related: ['early-stage-startup-team-visibility', 'startup-founder-decision-support', 'lean-team-attendance-tracking'],
    externalLinks: [
      { title: 'Manager Workspace', description: 'The workspace a founder can use to manage the team directly.', href: '/manager' },
      { title: 'Roles', description: 'How ZUZU adapts to different roles as a team grows.', href: '/roles' },
    ],
  },
  {
    slug: 'startup-first-hires-activity-tracking',
    title: 'Startup First-Hires Activity Tracking',
    cluster: 'early-stage',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'How a startup\'s first hires are tracked on personal laptops: consent, punch-in gating, and a daily AI report per hire for the founder.',
    intro:
      'Early hires often start on their own laptops, before the company owns any equipment. On a personal device ZUZU tracking is consent-gated and runs only between punch-in and punch-out, through a short-lived permission the agent must keep renewing. On company-managed machines clock-in is captured automatically when the agent starts recording. Either way the founder reads the same daily AI report per person, so there is no reporting process to build first.',
    howItWorksNote: 'Personal-laptop hires punch in and out and the agent tracks only between the two; the founder reviews attendance, application activity and each hire\'s daily AI report in the manager workspace.',
    features: ['employeeActivity', 'timeAttendance', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Consent-gated tracking that runs only between punch-in and punch-out on personal laptops',
      'Automatic clock-in on company-managed devices when the agent starts recording',
      'A daily AI report per hire, with no reporting process to build first',
    ],
    useCases: [
      { title: 'Onboarding a Hire on Their Own Laptop', description: 'Add the employee, have them run the agent once with their 16-character activation code, and confirm the status moves from pending to activated.' },
      { title: 'Working Out Why a Hire Shows No Activity', description: 'Check whether they punched in for the shift and look at last-seen time before assuming anything else.' },
    ],
    faq: [
      { question: 'Does tracking run outside working hours on a personal laptop?', answer: 'No. It is consent-gated and only runs between punch-in and punch-out, through a short-lived permission the agent must keep renewing.' },
      { question: 'What if a hire forgot to punch in?', answer: 'Tracking does not run for that shift. An employee on a personal device who has not punched in is one of the documented reasons the agent stops tracking, and last-seen time shows whether it is running.' },
      { question: 'Do company-provided machines work differently?', answer: 'Yes. On company-managed devices clock-in is captured automatically when the agent starts recording.' },
      { question: 'Can first hires be added before they install anything?', answer: 'Yes. Add employee creates the entry, and it stays pending until the desktop agent has run once with that person\'s 16-character activation code.' },
      { question: 'Does the agent record what a hire types?', answer: 'No. It records which applications and websites were used and for how long, not keystrokes and not typed content.' },
      { question: 'Where does a first hire\'s daily AI report come from?', answer: 'One AI report is produced per employee per day from activity, attendance and screenshot context, and the founder browses them by year, month and day.' },
      { question: 'What if a hire\'s laptop goes offline?', answer: 'The agent keeps capturing activity and attendance locally and syncs when the connection returns.' },
      { question: 'Does this replace a probation or ramp-up review?', answer: 'No. It supplies attendance and activity as context; the review and any decision stay with the founder.' },
    ],
    related: ['early-stage-startup-team-visibility', 'startup-onboarding-activity-tracking', 'founder-led-team-oversight'],
    externalLinks: [
      { title: 'AI Analytics', description: 'How AI-generated reports are built from activity data.', href: '/ai-analytics' },
      { title: 'Windows Agent', description: 'The desktop agent that activity tracking relies on.', href: '/windows-agent' },
    ],
  },
  {
    slug: 'lean-team-attendance-tracking',
    title: 'Lean Team Attendance Tracking',
    cluster: 'early-stage',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'Automatic attendance for a small team, recorded from agent sessions and exportable as CSV, Excel or PDF for your own payroll or contractor process.',
    intro:
      'A team of a few people does not need a shift scheduler, but it does need to know who was working when, for the company\'s own payroll or contractor process and for the odd "was that laptop asleep?" question. ZUZU records attendance automatically from agent activity, in sessions, so breaks and reconnects show as separate tracked periods. ZUZU does not process payroll or invoicing; it records attendance that you can export as CSV, Excel or PDF for whatever process you already run.',
    howItWorksNote: 'Attendance is recorded from agent sessions and reviewed in the manager workspace; the attendance & activity roster and the CSV, Excel and PDF exports carry it into the company\'s own process, and an admin reviews gaps in away time.',
    features: ['timeAttendance', 'windowsAgent', 'managerWorkspace', 'workforceVisibility'],
    privacy: false,
    benefits: [
      'Attendance from real sessions, with no manual timesheets',
      'Attendance & activity roster and CSV, Excel or PDF exports for your own payroll or contractor process',
      'Away time to explain gaps without rewriting tracked hours',
    ],
    useCases: [
      { title: 'Feeding Your Own Payroll or Contractor Run', description: 'Export attendance as CSV, Excel or PDF and use it as a reference in the process the company already runs; ZUZU does not calculate pay or produce invoices.' },
      { title: 'Explaining a Gap in a Day', description: 'When a laptop slept or restarted, an admin reviews the stretch in away time next to what the employee says they were doing; approving adds the time beside tracked hours.' },
    ],
    faq: [
      { question: 'Is attendance tracking overkill for a team of two or three?', answer: 'It can be used from a very small team size, though whether it is worth setting up that early is a judgment call for the founder.' },
      { question: 'Does attendance tracking require a fixed schedule?', answer: 'No. It records actual attendance patterns rather than requiring the team to conform to a fixed schedule first.' },
      { question: 'Can attendance data be exported for payroll purposes?', answer: 'Attendance data can be exported to CSV, Excel or PDF through reports as a reference alongside payroll; ZUZU does not process payroll or integrate directly with payroll systems.' },
      { question: 'What does the Windows Agent need to run?', answer: 'It runs on each employee\'s Windows machine; ZUZU\'s desktop agent does not support other operating systems.' },
      { question: 'What if a laptop sleeps or restarts during the day?', answer: 'The gap appears as away time in the admin portal, next to what the employee says they were doing, under needs review, approved, rejected and all. Approving adds the time beside tracked hours and never rewrites them.' },
      { question: 'Does ZUZU apply hourly rates or work out pay?', answer: 'No. ZUZU does not process payroll, calculate billable hours or produce invoices. It records attendance and activity; pay and contractor invoicing stay in your own process.' },
      { question: 'Is attendance tracking useful before there is a formal HR process?', answer: 'Yes. It can provide a baseline record while a formal HR process is still being built out.' },
      { question: 'Does attendance tracking flag lateness automatically?', answer: 'It records attendance patterns; how those patterns are reviewed and acted on is up to the manager or founder.' },
    ],
    related: ['early-stage-startup-team-visibility', 'founder-led-team-oversight', 'async-startup-team-attendance'],
    externalLinks: [
      { title: 'Time & Attendance', description: 'How ZUZU records attendance automatically.', href: '/time-attendance' },
      { title: 'Installation', description: 'How to install the Windows agent for a small team.', href: '/installation' },
    ],
  },
  {
    slug: 'scaling-startup-team-activity',
    title: 'Scaling Startup Team Activity',
    cluster: 'scaling',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Read a growing startup team through workforce analytics team and organisation views, needs attention and where time goes.',
    intro:
      'Somewhere along the way the founder stops being able to keep every person in their head, and "how is the team doing?" becomes a question about patterns rather than individuals. Workforce analytics shows trends over time in individual, team and organisation views for any date range, and the admin portal dashboard adds needs attention and where time goes for the day-to-day. Read together they show where activity is uneven before it turns into something people raise in a one-to-one.',
    howItWorksNote: 'Admins switch between individual, team and organisation views in workforce analytics and check needs attention and where time goes on the dashboard, while each manager keeps their own team in the manager workspace.',
    features: ['employeeActivity', 'workforceAnalytics', 'managerWorkspace', 'aiReports'],
    privacy: false,
    benefits: [
      'Team and organisation views for any date range, exportable',
      'Needs attention on the dashboard to pick who to look at first',
      'Managers keep a team-scoped view while admins see the whole organisation',
    ],
    useCases: [
      { title: 'Reading the Organisation View Each Week', description: 'Open workforce analytics for the recent past and compare team views to see where activity thins out or piles up.' },
      { title: 'Triaging With Needs Attention', description: 'Use needs attention on the dashboard to choose which employees to open, then read their daily AI reports for the activity behind the flag.' },
    ],
    faq: [
      { question: 'What views does Workforce Analytics have?', answer: 'Individual, team and organisation views, with trends over time for any date range, and it is exportable.' },
      { question: 'What does adding a hire involve as headcount grows?', answer: 'Add employee, then the person stays pending until the agent has run once with their 16-character activation code. After that they show as activated and appear in the analytics.' },
      { question: 'Where do I see who needs a look first?', answer: 'Needs attention on the admin portal dashboard, plus the AI executive summary groups (most improved, top performers, overloaded, disengaged). They are signals for review, with the activity behind them.' },
      { question: 'Do managers see everyone as headcount grows?', answer: 'No. A manager sees only their own assigned team in the manager workspace and cannot change settings; admins see the whole organisation.' },
      { question: 'Will a quieter new hire be flagged automatically?', answer: 'Behaviour intelligence compares activity to an individual\'s own baseline rather than to peers, and routes meaningful changes to a review queue for a person to review. It takes no automatic action.' },
      { question: 'Can I export what I see?', answer: 'Yes. Reports offer on-demand exports as PDF, Excel and CSV, and workforce analytics is exportable.' },
      { question: 'Can the weekly digest go to managers instead of me?', answer: 'Yes. Weekly digest emails can go organisation-wide or to a specific manager.' },
      { question: 'Does ZUZU assign work or track tasks as the team grows?', answer: 'No. ZUZU does not track tasks, sprints or projects. It shows attendance and application activity, and work assignment stays in your own tools.' },
    ],
    related: ['startup-department-formation-visibility', 'startup-onboarding-activity-tracking', 'startup-cross-functional-team-visibility'],
    externalLinks: [
      { title: 'AI Analytics', description: 'Where workforce analytics and AI reports live.', href: '/ai-analytics' },
      { title: 'Reports', description: 'ZUZU reporting.', href: '/reports' },
    ],
  },
  {
    slug: 'startup-department-formation-visibility',
    title: 'Startup Department Formation Visibility',
    cluster: 'scaling',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'Assign employees to departments and managers in the admin portal, then check managers coverage, span of control and team health.',
    intro:
      'When engineering, sales and support each get a lead, the employees table needs a department and a manager against every name. In the admin portal the admin assigns employees to teams and managers, and the managers view then shows coverage: employees with a manager, unassigned employees, average span of control and managers with no reports. That is how people who slipped through a reorganisation become visible, while each new manager works in a manager workspace scoped to their own team.',
    howItWorksNote: 'The admin sets department and manager in employees, checks managers coverage (unassigned employees, span of control) and team health, and uses workforce analytics department benchmarking to compare the new groups.',
    features: ['workforceAnalytics', 'employeeActivity', 'adminPortal', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Unassigned employees surfaced by managers coverage',
      'Team health states (healthy, watch, needs attention, not enough data) for each manager\'s team',
      'Department benchmarking in workforce analytics without losing team detail',
    ],
    useCases: [
      { title: 'Assigning the First Departments', description: 'In employees, set each person\'s department and manager, then filter by department to confirm nobody is left out.' },
      { title: 'Checking the New Structure Holds Together', description: 'Open managers to see employees with a manager, unassigned employees, average span of control and any manager with no reports.' },
    ],
    faq: [
      { question: 'Where do I assign employees to teams and managers?', answer: 'In the admin portal. The employees table shows department and manager for each person and has department and productivity filters.' },
      { question: 'How do I find people nobody manages yet?', answer: 'The managers view reports coverage: employees with a manager, unassigned employees, average span of control and managers with no reports.' },
      { question: 'What does Team Health show?', answer: 'Each manager\'s team is shown as healthy, watch, needs attention or not enough data, next to direct reports, on shift now and team productivity. They are prompts to look, not verdicts.' },
      { question: 'Can a manager see only their own newly formed department?', answer: 'Yes. The manager workspace is scoped to their own assigned team, and more than one manager can share a team.' },
      { question: 'Does department formation require re-installing the Windows Agent?', answer: 'No. The agent installation is unrelated to how employees are grouped into departments.' },
      { question: 'Do existing activity records carry over when a team is restructured?', answer: 'Historical activity data is tied to the employee, so it remains available even as team assignments change.' },
      { question: 'Can the new departments be compared?', answer: 'Workforce analytics includes department benchmarking and can be set to any date range.' },
      { question: 'Who sets up departments, and is it recorded?', answer: 'An admin does, in the admin portal; managers cannot change settings. Changes to employees, teams and managers land in audit logs.' },
    ],
    related: ['scaling-startup-team-activity', 'startup-cross-functional-team-visibility', 'startup-growth-stage-workforce-analytics'],
    externalLinks: [
      { title: 'Admin Portal', description: 'Where department and team structure is configured.', href: '/admin' },
      { title: 'Industries', description: 'Browse ZUZU content by industry.', href: '/industries' },
    ],
  },
  {
    slug: 'startup-onboarding-activity-tracking',
    title: 'Startup Onboarding Activity Tracking',
    cluster: 'scaling',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Follow new hires from pending to activated in employees, then read their attendance, application activity and daily AI report.',
    intro:
      'In a fast hiring stretch the first week is when a new person is most likely to be quietly stuck: no access yet, the agent not installed, nobody sure who they report to. Start with employees, where a new hire shows pending until the agent has run once with their activation code and the manager column shows who is expected to look after them. After that the hire\'s attendance and application activity appear day by day, with a daily AI report the manager can read instead of shadowing.',
    howItWorksNote: 'The admin watches employees move a new hire from pending to activated; the manager then reads the hire\'s attendance, application activity and daily AI report in the manager workspace.',
    features: ['employeeActivity', 'timeAttendance', 'managerWorkspace', 'aiReports'],
    privacy: false,
    benefits: [
      'Pending and activated status shows who has actually started reporting',
      'A daily AI report per new hire instead of shadowing them',
      'Application and website usage shows which tools a new hire actually opens',
    ],
    useCases: [
      { title: 'A Day-One Setup Check', description: 'Confirm in employees that each new hire has moved from pending to activated and that last activity is recent.' },
      { title: 'Reading the First Week', description: 'Read the daily AI report and application usage for each new hire, and use them to decide who needs a check-in.' },
    ],
    faq: [
      { question: 'How do I know a new hire\'s agent is actually running?', answer: 'Employees shows pending until the agent has run once with their 16-character code, then activated. The last-seen time shows whether the agent is running.' },
      { question: 'Can I see which apps a new hire spends time in?', answer: 'Yes, application and website usage with how long each was used. It does not capture keystrokes or typed content.' },
      { question: 'A new hire shows no activity on day one. What should I check?', answer: 'Whether they are still pending, whether they have been deactivated, and, on a personal laptop, whether they punched in for the shift. Those are among the documented reasons tracking does not run.' },
      { question: 'Does this replace a structured onboarding checklist?', answer: 'No. ZUZU provides activity and attendance visibility; onboarding content and checklists remain a separate process.' },
      { question: 'Who can read a new hire\'s report?', answer: 'The manager assigned to their team, in the manager workspace scoped to that team. Managers cannot change settings; admins see the whole organisation.' },
      { question: 'Is onboarding tracking useful for remote new hires specifically?', answer: 'Yes. It works the same for remote and in-office new hires, since it is based on device activity rather than location.' },
      { question: 'Does ZUZU rate a new hire\'s performance?', answer: 'No. It produces no ratings or rankings. Findings such as may need coaching are signals with the activity behind them, for a manager to review.' },
      { question: 'Can we onboard a first group before paying?', answer: 'The 7-day free trial covers up to 10 employees, includes the agent, and needs no card.' },
    ],
    related: ['scaling-startup-team-activity', 'startup-first-hires-activity-tracking', 'startup-department-formation-visibility'],
    externalLinks: [
      { title: 'Learning Center', description: 'Guides on getting the most out of ZUZU during onboarding.', href: '/learning' },
      { title: 'Use Cases', description: 'More ways ZUZU is used across different team situations.', href: '/use-cases' },
    ],
  },
  {
    slug: 'startup-cross-functional-team-visibility',
    title: 'Startup Cross-Functional Team Visibility',
    cluster: 'scaling',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU has no project view: a cross-functional team is read through each lead\'s manager workspace and the admin\'s workforce analytics.',
    intro:
      'ZUZU does not have a project view. People are grouped by team, department and manager, so a launch that pulls from engineering, sales and support is seen in pieces: each lead reviews their own contributors in the manager workspace, and an admin reads across them in workforce analytics with department benchmarking. More than one manager can share a team, which is how a single lead can be given a mixed group, and behaviour intelligence queues changes against each person\'s own baseline for review.',
    howItWorksNote: 'Each lead reviews their own contributors in the manager workspace, and an admin reads across the departments involved in workforce analytics team and organisation views; project tracking itself stays in your own tool.',
    features: ['employeeActivity', 'workforceVisibility', 'managerWorkspace', 'behaviourIntelligence'],
    privacy: false,
    benefits: [
      'Each department lead sees their own contributors in the manager workspace',
      'Department benchmarking and organisation views for the admin reading across teams',
      'Behaviour intelligence flags changes against each person\'s own baseline for review',
    ],
    useCases: [
      { title: 'Reviewing Across a Launch Push', description: 'The admin opens workforce analytics for the launch dates and compares department views; each lead checks their own contributors\' attendance and application activity.' },
      { title: 'Noticing a Change Worth a Conversation', description: 'Behaviour intelligence compares each person\'s activity with their own baseline and queues meaningful changes for a person to review; nothing is actioned automatically.' },
    ],
    faq: [
      { question: 'Can ZUZU group people by project?', answer: 'No. Grouping follows teams, departments and managers. Project membership and tracking stay in your own tool, though a single team can be shared by more than one manager.' },
      { question: 'What does Behaviour Intelligence compare against?', answer: 'An individual\'s own baseline, never a rule about apps or roles. Meaningful changes go to a review queue for a person; it takes no automatic action and does not predict turnover.' },
      { question: 'Who sees a contributor from another department?', answer: 'A manager sees only their own assigned team. An admin sees the whole organisation in the admin portal.' },
      { question: 'How can an admin compare the departments involved?', answer: 'Workforce analytics has department benchmarking and team and organisation views, for any date range.' },
      { question: 'Does a cross-functional push change what is captured?', answer: 'No. The agent captures the same attendance and application activity for everyone; only how it is grouped and reviewed differs.' },
      { question: 'Can we see when the whole organisation is working during a launch?', answer: 'Insights includes when the organisation works and where time goes, which give the admin an organisation-wide picture.' },
      { question: 'Does it work for a short-lived project?', answer: 'The data is the same however long a group works together, and workforce analytics accepts any date range, so a launch window can be reviewed on its own.' },
      { question: 'Can two managers see the same employee?', answer: 'Only if both are assigned to that employee\'s team; more than one manager can share a team.' },
    ],
    related: ['scaling-startup-team-activity', 'startup-department-formation-visibility', 'distributed-startup-team-reports'],
    externalLinks: [
      { title: 'Activity Monitoring', description: 'How ZUZU captures employee activity.', href: '/activity' },
      { title: 'Manager Workspace', description: 'Where cross-functional visibility is reviewed.', href: '/manager' },
    ],
  },
  {
    slug: 'remote-first-startup-monitoring',
    title: 'Remote-First Startup Monitoring',
    cluster: 'remote-distributed',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Remote-first visibility from the device, not the location: offline queue, last-seen time and away time review, with no GPS.',
    intro:
      'With no office to walk through, a remote-first founder learns about a problem the slow way: someone goes quiet and nobody knows whether they are offline, away or their laptop died. ZUZU works from the device, not the location, so there is no GPS and no separate remote mode. The agent keeps capturing while offline and syncs when the connection returns, the employee\'s last-seen time shows whether it is running, and gaps where nothing was visible go to away time for review.',
    howItWorksNote: 'The Windows agent queues attendance and activity through connectivity drops; admins see on shift now and last-seen time, and review any unexplained gap in away time.',
    features: ['employeeActivity', 'remoteHybrid', 'timeAttendance', 'windowsAgent'],
    privacy: false,
    benefits: [
      'Offline queue: capture continues through connectivity drops and syncs on reconnect',
      'Last-seen time shows whether an agent is running',
      'Away time puts unexplained gaps next to the employee\'s own account',
    ],
    useCases: [
      { title: 'A Hire Goes Quiet Mid-Week', description: 'Check last-seen time, and the punch-in state for a personal laptop, before assuming anything about the day.' },
      { title: 'Explaining a Dropped-Connection Day', description: 'Review the stretch in away time; activity captured while offline is synced when the laptop reconnects.' },
    ],
    faq: [
      { question: 'Does ZUZU track where people are?', answer: 'No. There is no GPS; attendance is tied to the device, not a location.' },
      { question: 'What operating systems does the remote monitoring agent support?', answer: 'ZUZU\'s desktop agent is Windows-only; it does not support other operating systems.' },
      { question: 'What happens when a home connection drops?', answer: 'The agent keeps capturing activity and attendance locally and syncs on reconnect.' },
      { question: 'Is there a separate remote mode?', answer: 'No. It is the same agent and the same reports whether the team is remote, hybrid or in-office.' },
      { question: 'How does a remote hire on a personal laptop work?', answer: 'Tracking is consent-gated and runs only between punch-in and punch-out, through a short-lived permission the agent must keep renewing.' },
      { question: 'How is attendance defined without office hours?', answer: 'Time & attendance reflects actual recorded activity rather than requiring a fixed office schedule.' },
      { question: 'How do I tell whether an agent has stopped?', answer: 'Look at the employee\'s last-seen time. Documented causes are a deactivated employee, a personal-device hire who has not punched in, or an organisation suspended for billing.' },
      { question: 'Does ZUZU require employees to be in a specific time zone?', answer: 'No. Attendance and activity reflect whenever an employee is actually working, and AI reports can be browsed across time zones.' },
    ],
    related: ['distributed-startup-team-reports', 'async-startup-team-attendance', 'lean-team-attendance-tracking'],
    externalLinks: [
      { title: 'Remote & Hybrid Workforce', description: 'ZUZU for remote and hybrid teams.', href: '/remote-workforce' },
      { title: 'Windows Agent', description: 'The desktop agent remote monitoring depends on.', href: '/windows-agent' },
    ],
  },
  {
    slug: 'distributed-startup-team-reports',
    title: 'Distributed Startup Team Reports',
    cluster: 'remote-distributed',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'Daily AI reports and the weekly digest give a distributed startup team a shared picture across time zones, without a live meeting.',
    intro:
      'A distributed team has no all-hands where the picture is shared aloud, so the report has to carry it. ZUZU produces one AI report per employee per day, browsable by year, month and day across time zones, and emails daily AI reports and a weekly digest, organisation-wide or to a specific manager. A founder in one time zone and a lead in another read the same summary, and admins get the organisation-wide counterpart as AI workforce reports.',
    howItWorksNote: 'Daily AI reports and the weekly digest arrive by email, managers browse their own team\'s reports in the manager workspace by day, and admins read the organisation-wide AI workforce reports and download PDFs.',
    features: ['aiReports', 'employeeActivity', 'workforceAnalytics', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Weekly digest emailed organisation-wide or to a specific manager',
      'AI reports browsable by year, month and day across time zones',
      'PDF downloads of the reports',
    ],
    useCases: [
      { title: 'Reading Overnight Activity at the Start of Your Day', description: 'Open yesterday\'s AI reports for teammates who worked while you slept, instead of waiting for an update.' },
      { title: 'Preparing a Leadership Sync', description: 'Download the reports as PDF and use them as the shared reference in the meeting.' },
    ],
    faq: [
      { question: 'Do AI Reports account for different working hours across time zones?', answer: 'Reports reflect the activity and attendance data actually recorded for each employee, whatever hours they worked.' },
      { question: 'Can distributed team reports be reviewed asynchronously?', answer: 'Yes. Reports and analytics are available to review at any time rather than requiring a live meeting.' },
      { question: 'What arrives by email?', answer: 'Daily AI reports and the weekly digest. Digests can go organisation-wide or to a specific manager.' },
      { question: 'Can a manager see the organisation-wide report?', answer: 'No. A manager sees only their own assigned team. Admins and leadership read the AI workforce reports for the whole organisation.' },
      { question: 'What formats can we save?', answer: 'Reports can be downloaded as PDF, and activity and attendance can be exported as CSV, Excel or PDF. ZUZU does not integrate with other systems, so exports are how the data leaves.' },
      { question: 'Does this replace a weekly all-hands meeting?', answer: 'No. It provides supporting data; whether and how a distributed team runs a synchronous meeting is a separate decision.' },
      { question: 'Is Workforce Analytics reliable for a very small distributed team?', answer: 'It reflects whatever activity data is available; with a very small team, patterns may rest on fewer data points than with a larger one.' },
      { question: 'Can founders in different locations both open the same reports?', answer: 'Yes, as long as each has admin access in the admin portal; the reports are the same wherever they are read.' },
    ],
    related: ['remote-first-startup-monitoring', 'async-startup-team-attendance', 'startup-investor-readiness-reporting'],
    externalLinks: [
      { title: 'AI Analytics', description: 'AI reports and workforce analytics.', href: '/ai-analytics' },
      { title: 'Reports', description: 'Browse the broader reporting capability.', href: '/reports' },
    ],
  },
  {
    slug: 'async-startup-team-attendance',
    title: 'Async Startup Team Attendance',
    cluster: 'remote-distributed',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Attendance recorded from actual sessions rather than a fixed shift, for startup teams that work on their own schedules.',
    intro:
      'Async teams don\'t share a 9-to-5, so "late" and "on time" mean very little. ZUZU records hours and attendance from actual agent activity, in sessions: a long break or a restart shows up as a separate tracked period, and total hours reflect what was worked rather than a fixed shift. The attendance & activity roster lays those sessions next to activity so a manager can see when each person\'s day actually happens, and a stretch where the agent saw nothing, such as a slept laptop, goes to away time for review.',
    howItWorksNote: 'Attendance is recorded as separate sessions from agent activity and reviewed in the attendance & activity roster and the manager workspace; there is no fixed shift to compare it against.',
    features: ['timeAttendance', 'remoteHybrid', 'windowsAgent', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Sessions instead of a fixed shift; breaks and reconnects show as separate periods',
      'The roster shows each person\'s own pattern, with no overlap requirement',
      'Away time keeps unexplained gaps reviewable without rewriting tracked hours',
    ],
    useCases: [
      { title: 'Reading one person\'s week', description: 'Open the roster for someone who works split days and see each session and the activity within it.' },
      { title: 'Finding Overlap for a Meeting', description: 'Check the attendance patterns of two people who rarely share hours before picking a time.' },
    ],
    faq: [
      { question: 'Does async attendance tracking require setting core working hours?', answer: 'No. It records actual attendance patterns; whether the organisation also defines core hours is a separate policy choice.' },
      { question: 'How are breaks handled?', answer: 'Attendance is recorded in sessions, so breaks and reconnects show as separate tracked periods.' },
      { question: 'Does this work if two employees never overlap in working hours?', answer: 'Yes. Each employee\'s attendance is recorded independently, regardless of overlap with others.' },
      { question: 'Where do I see attendance for a period?', answer: 'In the attendance & activity roster from the report library, in the daily attendance reports and the day-end report, and as CSV, Excel or PDF exports.' },
      { question: 'Does async attendance tracking penalise unconventional hours?', answer: 'No. ZUZU records attendance data; it does not apply penalties or judgments to unconventional working hours.' },
      { question: 'What if a laptop slept in the middle of a session?', answer: 'The stretch where the agent saw nothing appears in away time next to what the employee says they were doing. Approving it adds the time beside tracked hours and never rewrites them.' },
      { question: 'Can attendance summaries be reviewed weekly rather than daily?', answer: 'Attendance data can be reviewed over whatever period is relevant, including a weekly summary.' },
      { question: 'Is attendance still useful if the team never has a shared clock-in time?', answer: 'Yes, since it reflects each person\'s own recorded activity rather than a shared clock-in requirement.' },
    ],
    related: ['remote-first-startup-monitoring', 'distributed-startup-team-reports', 'lean-team-attendance-tracking'],
    externalLinks: [
      { title: 'Time & Attendance', description: 'How ZUZU records attendance automatically.', href: '/time-attendance' },
      { title: 'Remote & Hybrid Workforce', description: 'ZUZU for remote and hybrid teams.', href: '/remote-workforce' },
    ],
  },
  {
    slug: 'startup-investor-readiness-reporting',
    title: 'Startup Investor-Readiness Reporting',
    cluster: 'leadership',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU does not produce investor reports. Founders can draw on AI reports, workforce analytics and CSV, Excel or PDF exports as operational context.',
    intro:
      'ZUZU does not produce investor materials, and it calculates nothing an investor would expect from a financial pack. What a founder can honestly draw on is operational context about the team: the daily AI reports and weekly digest, the team and organisation views in workforce analytics for any date range, and CSV, Excel or PDF exports of activity and attendance. The founder decides what goes into an update and writes the narrative; the data only shows how the team has been working.',
    howItWorksNote: 'An admin reads the weekly digest and the workforce analytics organisation view for the period in question and exports activity and attendance as CSV, Excel or PDF, then assembles the update in the company\'s own documents.',
    features: ['aiReports', 'workforceAnalytics', 'adminPortal', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'The weekly digest and workforce analytics organisation view as operational background',
      'CSV, Excel or PDF exports of activity and attendance for the founder\'s own documents',
      'Any date range, so an update can cover exactly the period being discussed',
    ],
    useCases: [
      { title: 'Gathering Operational Context for an Update', description: 'Open the workforce analytics organisation view for the reporting period, note the trends, and write them up yourself.' },
      { title: 'Backing a Headcount Statement With Attendance', description: 'Export the attendance & activity roster as CSV, Excel or PDF when you want the underlying attendance record beside your own headcount figures.' },
    ],
    faq: [
      { question: 'Does ZUZU generate investor-ready reports?', answer: 'No. It produces AI reports, the weekly digest and workforce analytics views; it does not produce investor materials. Any update is assembled by the founder.' },
      { question: 'Which ZUZU sources are fair to draw on?', answer: 'Daily AI reports, the weekly digest, workforce analytics team and organisation views, and CSV, Excel or PDF exports of activity and attendance, as operational context only.' },
      { question: 'Can this data stand in for financial or revenue figures?', answer: 'No. ZUZU does not forecast revenue or produce financial statements; it shows attendance and application activity.' },
      { question: 'Can we cover a specific reporting period?', answer: 'Workforce analytics accepts any date range and is exportable, so an admin can pull exactly the period an update covers.' },
      { question: 'Who pulls the data?', answer: 'An admin in the admin portal. A manager sees only their own team in the manager workspace and cannot change settings.' },
      { question: 'Should individual employee data go into an external update?', answer: 'That is the founder\'s decision; ZUZU does not decide what is shared externally. Team and organisation views are aggregates, while exports and daily AI reports are per employee, so check what an export contains before it leaves the company.' },
      { question: 'Is there an investor-specific template?', answer: 'No. The report library (team analytics overview, period comparison and the rest) is the same one used internally.' },
      { question: 'Does an export show what the team worked on?', answer: 'No. It shows attendance and application activity, not projects, tasks or outcomes; those stay in your own tools.' },
    ],
    related: ['startup-founder-decision-support', 'startup-growth-stage-workforce-analytics', 'distributed-startup-team-reports'],
    externalLinks: [
      { title: 'AI Analytics', description: 'Where AI workforce reports and analytics are generated.', href: '/ai-analytics' },
      { title: 'Admin Portal', description: 'Where organization-wide reporting is administered.', href: '/admin' },
    ],
  },
  {
    slug: 'startup-founder-decision-support',
    title: 'Startup Founder Decision Support',
    cluster: 'leadership',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Founder decisions on hiring and workload, informed by overloaded findings, the wellbeing & burnout forecast and workforce intelligence Q&a.',
    intro:
      'A founder deciding whether to hire another engineer, or whether support is quietly overloaded, usually has gut feel and a few offhand complaints. ZUZU adds evidence from the device side: the overloaded finding in the AI reports and AI executive summary, the wellbeing & burnout forecast built from working-hour patterns such as long days and weekend work, and where time goes across applications. Plain-English questions in workforce intelligence Q&a help the founder look further; the data informs the decision and does not make it.',
    howItWorksNote: 'The admin reads overloaded findings, the wellbeing & burnout forecast and where time goes, asks workforce intelligence Q&a questions such as attention areas, and uses period comparison to see how a team looked before and after a change.',
    features: ['workforceAnalytics', 'aiReports', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Overloaded findings shown with the activity behind them',
      'A wellbeing & burnout forecast from working-hour patterns, to review rather than act on blindly',
      'Plain-English questions answered in workforce intelligence Q&a',
    ],
    useCases: [
      { title: 'Before Opening a Role', description: 'Check overloaded findings and working-hour patterns for the team that asked for help, alongside your own view of the workload.' },
      { title: 'Before Restructuring a Team', description: 'Use period comparison and team health to see how teams looked over the period, then decide with the managers involved.' },
    ],
    faq: [
      { question: 'Does ZUZU tell a founder who to hire or fire?', answer: 'No. ZUZU provides activity and workforce data; hiring and personnel decisions remain entirely the founder\'s call.' },
      { question: 'Can ZUZU forecast how many people we need?', answer: 'No. It does not forecast staffing, revenue or sales. The wellbeing & burnout forecast is separate: predicted burnout risk from working-hour patterns, to review, not a performance ranking or a headcount prediction.' },
      { question: 'What does the Overloaded finding mean?', answer: 'It is a signal in the AI executive summary and AI reports, shown with the activity behind it, that someone may be carrying a heavy load. It is for review, not a rating.' },
      { question: 'How reliable is activity data for a very small team?', answer: 'It reflects real recorded activity, but with a very small team patterns rest on fewer data points, so founders should weigh that alongside other context.' },
      { question: 'Can I ask questions in plain English?', answer: 'Yes. Workforce intelligence Q&a takes plain-English questions and has predefined ones such as workforce productivity, declining trends, burnout signals and attention areas.' },
      { question: 'Is this the same as the investor-readiness page?', answer: 'No. This page is about internal decisions. The investor-readiness page covers what a founder can draw on when writing an update of their own, since ZUZU does not produce investor materials.' },
      { question: 'Can a founder see this without going through a manager?', answer: 'Yes. Admins see the whole organisation in the admin portal, while managers see only their own team.' },
      { question: 'Does this replace one-on-one conversations with the team?', answer: 'No. It supplements the conversations a founder has with the team and does not stand in for them.' },
    ],
    related: ['founder-led-team-oversight', 'startup-investor-readiness-reporting', 'startup-growth-stage-workforce-analytics'],
    externalLinks: [
      { title: 'ZUZU for Business Owners', description: 'A related, broader look at ownership-level visibility.', href: '/roles/business-owners' },
      { title: 'AI Analytics', description: 'The reporting engine behind founder decision support.', href: '/ai-analytics' },
    ],
  },
  {
    slug: 'startup-team-privacy-controls',
    title: 'Startup Team Privacy Controls',
    cluster: 'leadership',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'Set the monitoring policy once in the admin portal: screenshot interval, retention and on-device redaction, applied to everyone.',
    intro:
      'A first rollout to a small team raises obvious questions: what is captured, how often, and who can see it? ZUZU answers them with one organisation-wide monitoring policy set in the admin portal: screenshot interval (1–5 minutes or custom), retention (default 90 days, admin-configurable) and password redaction. Private regions (passwords, banking, webmail, messaging apps, password managers and desktop notifications) are redacted on the device before a screenshot is stored or uploaded, and the policy applies to everyone.',
    howItWorksNote: 'The monitoring policy is set once in the admin portal and applies to every employee; the agent runs in the system tray where the employee can see it, and changes made in the admin portal are recorded in audit logs.',
    features: ['privacyControls', 'adminPortal', 'employeeActivity', 'timeAttendance'],
    privacy: true,
    benefits: [
      'One policy for cadence, retention and redaction, applied to everyone',
      'On-device redaction of private regions before anything is stored or uploaded',
      'A tray agent the employee can see, that never captures keystrokes or typed content',
    ],
    useCases: [
      { title: 'Deciding the Policy Before the First Activation', description: 'Set the screenshot interval, retention and redaction in the admin portal first, so the first activation code an employee uses already runs under a policy you can describe.' },
      { title: 'Answering "What Do You See?" in a Team Meeting', description: 'Walk through the tray agent, the redacted regions, and the fact that application and website usage is recorded but keystrokes and typed content are not.' },
    ],
    faq: [
      { question: 'What is set in the monitoring policy?', answer: 'Screenshot interval (1–5 minutes or custom), retention (default 90 days, admin-configurable) and password redaction. It is one organisation-wide policy, so it applies to everyone.' },
      { question: 'What is redacted before a screenshot is stored?', answer: 'Private regions (passwords, banking, webmail, messaging apps, password managers and desktop notifications) are redacted on the device before a screenshot is stored or uploaded.' },
      { question: 'Does ZUZU monitor personal devices?', answer: 'ZUZU is primarily intended for company-managed Windows devices via the Windows agent. Where a team member uses their own personal laptop, ZUZU supports consent-gated tracking instead: capture is session-gated to only between punch-in and punch-out, through a short-lived permission the agent must keep renewing, so it expires automatically outside work sessions.' },
      { question: 'Can employees see that the agent is running?', answer: 'Yes. It runs from the system tray, visible to the employee and IT. Settings are not changed from the tray; they are managed centrally in the admin portal.' },
      { question: 'Does ZUZU capture keystrokes?', answer: 'No. It captures application and website usage and how long each was used, not keystrokes or typed content.' },
      { question: 'Can a manager change privacy settings?', answer: 'No. A manager sees only their own assigned team and cannot change settings; admins do that in the admin portal.' },
      { question: 'Is a record kept of who changed a setting?', answer: 'Yes. Every write in the admin portal lands in audit logs, including capture changes, with actor, action, target and timestamp. A record does not store IP addresses or device details.' },
      { question: 'Is there a legal review required before turning on monitoring?', answer: 'ZUZU doesn\'t provide legal advice; a startup should consider its own legal or compliance obligations separately from the product configuration.' },
    ],
    related: ['founder-led-team-oversight', 'early-stage-startup-team-visibility', 'startup-department-formation-visibility'],
    externalLinks: [
      { title: 'Screenshot & Privacy', description: 'Screenshot monitoring and privacy controls.', href: '/screenshot-privacy' },
      { title: 'Security', description: "ZUZU's approach to security more broadly.", href: '/security' },
    ],
  },
  {
    slug: 'startup-growth-stage-workforce-analytics',
    title: 'Startup Growth-Stage Workforce Analytics',
    cluster: 'leadership',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'Move from one team view to organisation-wide analytics: department benchmarking, period comparison and organisation health.',
    intro:
      'Once a startup has several teams and a first layer of managers, the founder\'s question shifts from "how is this person doing?" to "which team is drifting?". Workforce analytics adds the organisation-wide layer: department benchmarking, workforce trend and organisation health from insights, and period comparison to set one stretch against another. Each manager keeps reviewing their own team in the manager workspace, and the same activity data feeds both, so nothing needs migrating.',
    howItWorksNote: 'The admin uses workforce analytics organisation and team views, department benchmarking and period comparison, while managers keep reviewing their own teams in the manager workspace.',
    features: ['workforceAnalytics', 'employeeActivity', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Department benchmarking across teams for any date range',
      'Period comparison to set one stretch against another',
      'Organisation health and workforce trend in insights',
    ],
    useCases: [
      { title: 'Comparing This Period With the Last', description: 'Run period comparison over two stretches to see where activity moved after a change such as a new hire or a team split.' },
      { title: 'Reading Department Benchmarks With New Leads', description: 'Go through each department\'s benchmark and team health with its lead, who reviews their own team in the manager workspace.' },
    ],
    faq: [
      { question: 'Does moving to Workforce Analytics require migrating data?', answer: 'No. Workforce analytics builds on the same activity data already being collected; there is no separate migration.' },
      { question: 'What does department benchmarking compare?', answer: 'Departments against each other on the activity data already collected, over any date range. It is a comparison to review, not a performance rating or ranking of people.' },
      { question: 'What is Period Comparison?', answer: 'A report in the report library that sets one period against another.' },
      { question: 'What else is in Insights?', answer: 'Organisation health, workforce trend, where focus is lost, where time goes, when the organisation works and actionable recommendations tied to specific observations.' },
      { question: 'Can department leads see this analytics view?', answer: 'A manager sees only their own assigned team in the manager workspace. The organisation-wide analytics stay with admins in the admin portal.' },
      { question: 'Does growth-stage analytics require a dedicated analyst?', answer: 'Not necessarily. Daily AI reports and the weekly digest arrive by email, and workforce intelligence Q&a answers plain-English questions.' },
      { question: 'Can the analytics be exported?', answer: 'Yes. Reports offer on-demand exports as PDF, Excel and CSV.' },
      { question: 'Do the early-stage features stay in use as a startup grows?', answer: 'Yes. The manager workspace and the daily AI reports keep working for each team, with workforce analytics added on top.' },
    ],
    related: ['scaling-startup-team-activity', 'startup-founder-decision-support', 'startup-investor-readiness-reporting'],
    externalLinks: [
      { title: 'AI Analytics', description: 'Where workforce analytics and AI reports are generated.', href: '/ai-analytics' },
      { title: 'Free Trial', description: 'Try ZUZU\'s analytics features directly.', href: '/free-trial' },
    ],
  },
]

export const startupTeamsCluster = {
  key: 'startup-teams',
  basePath: '/startup-teams',
  badgeLabel: 'Startup Teams',
  hubTitle: 'Startup Team Visibility',
  hubDescription: 'Visibility built for startup stages, early-stage, scaling and remote-first, cross-linked to the existing startups industry page.',
  hubMetaDescription: 'How ZUZU supports startup teams across early-stage, scaling and remote-first stages.',
  groups: STARTUP_TEAMS_GROUPS,
  pages: STARTUP_TEAMS_PAGES,
  // The hub page had no FAQ section. Reused verbatim from this cluster's own
  // 'early-stage-startup-team-visibility' page (same array reference, not a copy) rather than writing new
  // questions -- already-verified, on-topic content for this cluster.
  faq: STARTUP_TEAMS_PAGES.find((page) => page.slug === 'early-stage-startup-team-visibility').faq,
  crossLinks: [
    { label: 'Startups Industry Overview', href: '/industries/startups' },
    { label: 'ZUZU for Business Owners', href: '/roles/business-owners' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
    { label: 'AI Reports & Workforce Analytics', href: '/ai-analytics' },
  ],
}
