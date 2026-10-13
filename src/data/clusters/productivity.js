/*
  Structured content for the ZUZU Productivity Playbook cluster.
  Same shape as the other cluster data files, rendered by the existing
  ClusterHub/ClusterPage templates -- zero new components.

  Unlike the Learning Center (definitional "what is X" pages), every
  page here is written as a practical "how to" guide answering the
  question in its own title. Wording is deliberately hedged throughout
  ("can help", "may help inform", "one way to") -- nothing here claims
  a guaranteed outcome, and no statistic, customer, or unsupported
  integration/OS/AI capability is invented.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const PRODUCTIVITY_GROUPS = [
  { key: 'time-visibility', label: 'Time Visibility' },
  { key: 'work-pattern-visibility', label: 'Work-Pattern Visibility' },
  { key: 'task-completion-capacity', label: 'Task Completion & Capacity' },
  { key: 'operational-business-decision', label: 'Operational & Business Decisions' },
]

export const PRODUCTIVITY_PAGES = [
  // ---------------------------------------------------------------
  // Group 1: time-visibility
  // ---------------------------------------------------------------
  {
    slug: 'how-to-get-visibility-into-remote-work-hours',
    title: 'How to Get Visibility Into Remote Work Hours',
    cluster: 'time-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'A practical guide to seeing when remote employees are working, without relying on self-reported timesheets.',
    intro:
      "When a team works remotely, the simplest question -- who's working, and when -- stops being obvious. This guide walks through one practical way to get that visibility: recording actual sign-in and activity timestamps from each employee's device rather than asking people to log their own hours. It's not about catching anyone out; it's about replacing guesswork with a record that a manager or HR can actually check.",
    howItWorksNote: "ZUZU's Windows agent records sign-in and activity timestamps automatically on each device, so remote work hours don't depend on employees self-reporting a timesheet.",
    features: ['timeAttendance', 'employeeActivity', 'remoteHybrid', 'workforceVisibility'],
    privacy: false,
    benefits: [
      'A record of remote hours that does not depend on self-reported timesheets',
      'The same visibility for remote staff as for anyone working in an office',
      'Data that can be checked without asking an employee to report in',
    ],
    useCases: [
      { title: 'Replacing a Manual Remote Timesheet', description: 'Move from an honor-system spreadsheet to device-recorded sign-in and activity times.' },
      { title: 'Confirming Hours Across Time Zones', description: 'See when a distributed team is actually online, regardless of where each person is based.' },
    ],
    faq: [
      { question: 'What counts as a "work hour" when a team is remote?', answer: "ZUZU treats it as time the device is signed in and active -- it doesn't infer intent beyond that, so the record reflects activity rather than a judgment about productivity." },
      { question: 'Does ZUZU require employees to clock in manually?', answer: "No -- the Windows agent can capture sign-in and activity data automatically, though attendance workflows can still include manual entries if an organization wants them." },
      { question: 'Can this work across multiple time zones?', answer: 'Yes -- timestamps are recorded per device, so a distributed team spread across time zones can still be viewed consistently.' },
      { question: 'What happens if someone works outside normal hours?', answer: 'Activity recorded outside a typical schedule still shows up in the data; it can help inform a conversation but is not treated as a violation on its own.' },
      { question: 'Is this different from an attendance system built for an office?', answer: 'The underlying time & attendance capability is the same one used for in-office teams -- it applies to remote work without a separate system.' },
      { question: 'Does it cover hybrid employees who split time between home and office?', answer: 'Yes -- the remote & hybrid workforce capability is designed to give consistent visibility regardless of where a given day is worked.' },
      { question: 'Can a manager see hours for just their own team?', answer: 'Yes -- the manager workspace scopes this data to a manager\'s own team rather than the whole organization.' },
      { question: 'Does visibility into hours require monitoring screen content?', answer: 'No -- time and attendance visibility is based on sign-in and activity timestamps, separate from screenshot monitoring.' },
    ],
    related: ['how-to-track-work-hours-without-micromanaging', 'how-companies-verify-hours-worked-remotely', 'how-to-see-when-your-team-is-actually-working'],
    externalLinks: [
      { title: 'Time & Attendance', description: 'The underlying capability this guide relies on.', href: '/time-attendance' },
      { title: 'Remote Workforce', description: 'How ZUZU approaches distributed and hybrid teams.', href: '/remote-workforce' },
    ],
  },
  {
    slug: 'how-to-track-work-hours-without-micromanaging',
    title: 'How to Track Work Hours Without Micromanaging',
    cluster: 'time-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'How to keep a reliable record of work hours while keeping day-to-day oversight light-touch.',
    intro:
      "Tracking work hours and micromanaging a team are not the same thing, but it's easy for one to slide into the other. This guide looks at how to keep an accurate hours record while limiting what a manager actually watches day to day -- using automatic attendance data for the record-keeping, and privacy controls to keep the day-to-day view light.",
    howItWorksNote: 'Automatic time & attendance data covers the record-keeping, while privacy controls limit what a manager sees on a routine basis, so oversight can stay light-touch.',
    features: ['timeAttendance', 'employeeActivity', 'privacyControls', 'managerWorkspace'],
    privacy: true,
    benefits: [
      'An accurate hours record without watching every minute of the day',
      'Privacy controls that limit what is visible on a routine basis',
      'A workspace scoped to a manager\'s own team rather than the whole organization',
    ],
    useCases: [
      { title: 'Setting a Lighter Default View', description: 'Configure what a manager sees day-to-day, separate from the underlying attendance record.' },
      { title: 'Reviewing Hours Only When Needed', description: 'Keep automatic attendance data available for the occasions it is actually needed, rather than checking it constantly.' },
    ],
    faq: [
      { question: "What's the difference between tracking hours and micromanaging?", answer: 'Tracking hours is keeping a record of when people work; micromanaging is acting on every detail of how they work. ZUZU is built for the former and leaves the latter to how an organization chooses to manage.' },
      { question: 'Can Privacy Controls limit what a manager sees?', answer: 'Yes -- privacy controls can be configured to limit visibility, so day-to-day oversight does not have to mean seeing everything.' },
      { question: 'Does light-touch tracking still produce a reliable record?', answer: 'Yes -- the underlying attendance data is recorded the same way regardless of how much of it a manager chooses to review regularly.' },
      { question: 'Should employees be told they are being tracked?', answer: "ZUZU doesn't set organizational policy, but transparency about what's tracked and why is generally part of using workforce visibility tools responsibly." },
      { question: 'Can hour tracking work without screenshot monitoring?', answer: 'Yes -- time & attendance and screenshot monitoring are separate features and can be used independently.' },
      { question: 'How much detail does a manager actually need day-to-day?', answer: 'That varies by team, which is part of why visibility settings are configurable rather than fixed.' },
      { question: 'Does this replace one-on-one conversations with employees?', answer: 'No -- data can help inform a conversation, but ZUZU does not replace the conversation itself.' },
      { question: 'Can these settings be adjusted per team?', answer: 'Visibility and access are generally managed through the admin portal and manager workspace, which can be scoped by team.' },
    ],
    related: ['how-to-get-visibility-into-remote-work-hours', 'how-to-see-when-your-team-is-actually-working', 'how-to-understand-your-teams-work-patterns'],
    externalLinks: [
      { title: 'Screenshot & Privacy Controls', description: 'How privacy settings fit alongside attendance tracking.', href: '/screenshot-privacy' },
      { title: 'Manager Workspace', description: 'Where team-scoped oversight lives.', href: '/manager' },
    ],
  },
  {
    slug: 'how-companies-verify-hours-worked-remotely',
    title: 'How Companies Verify Hours Worked Remotely',
    cluster: 'time-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'How organizations confirm remote hours were actually worked, using device-recorded data instead of self-reports.',
    intro:
      "Verifying remote hours is a different problem from simply recording them -- it's about having a record an organization can actually trust. This guide covers how companies typically approach that: pairing device-level sign-in data with activity signals, so the hours on file are backed by something more than a self-reported entry.",
    howItWorksNote: 'The Windows agent generates device-level timestamps and activity signals that back an attendance record, which AI reports can then summarize for review.',
    features: ['timeAttendance', 'windowsAgent', 'remoteHybrid', 'aiReports'],
    privacy: false,
    benefits: [
      'An hours record backed by device data rather than self-reporting alone',
      'Consistent verification whether staff are remote, hybrid, or in-office',
      'Summaries that make it easier to review verified hours at a glance',
    ],
    useCases: [
      { title: 'Reviewing Contractor Hours', description: 'Set reported hours beside device-level tracked hours and activity.' },
      { title: 'Cross-Checking a Remote Timesheet', description: 'Compare a self-reported timesheet against recorded sign-in and activity data.' },
    ],
    faq: [
      { question: 'How do companies confirm remote hours without physical presence?', answer: 'By using device-recorded sign-in and activity data as the source of truth, rather than relying only on what an employee reports.' },
      { question: 'Is verification based on self-reported timesheets or system data?', answer: 'It is based on system-recorded data from the Windows agent, which can be compared against a self-reported timesheet if one exists.' },
      { question: 'Does the Windows Agent run continuously in the background?', answer: 'Yes -- it is designed to run on the device throughout the workday to capture attendance and activity data.' },
      { question: 'Can verified hours feed into payroll systems?', answer: "ZUZU doesn't run payroll itself; verified hours data can be exported for use in whatever payroll process an organization already has." },
      { question: "What if an employee's device is offline for part of the day?", answer: "Offline periods won't generate activity data, which is worth accounting for when reviewing a record rather than assuming it always means no work happened." },
      { question: 'Is verification different for contractors versus full-time remote staff?', answer: 'The underlying data collection is the same; how it gets used in a review process is up to the organization.' },
      { question: 'Can AI Reports summarize verified hours automatically?', answer: 'Yes -- AI reports can help summarize attendance data so it is easier to review without going line by line.' },
      { question: 'Does verification apply to hybrid schedules too?', answer: 'Yes -- the same data collection applies regardless of whether a day is worked remotely or in an office.' },
    ],
    related: ['how-to-get-visibility-into-remote-work-hours', 'how-to-reduce-manual-attendance-check-ins', 'how-to-see-when-your-team-is-actually-working'],
    externalLinks: [
      { title: 'Windows Agent', description: 'The desktop agent that generates the underlying data.', href: '/windows-agent' },
      { title: 'AI Reports & Workforce Analytics', description: 'Where verified hours can be summarized for review.', href: '/ai-analytics' },
    ],
  },
  {
    slug: 'how-to-see-when-your-team-is-actually-working',
    title: 'How to See When Your Team Is Actually Working',
    cluster: 'time-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'A guide to getting a real-time read on when your team is actively working, not just when they signed in.',
    intro:
      "Signing in and actually working are two different things, and a schedule alone won't tell you which one is happening. This guide is about getting a more current read on a team's active work hours -- using activity data alongside attendance records so a manager isn't left guessing between the start of a shift and the end of it.",
    howItWorksNote: "Employee activity data updates through the day, giving a manager a more current view than an attendance record checked only at day's end.",
    features: ['timeAttendance', 'employeeActivity', 'workforceVisibility', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A more current view than checking attendance only at the end of the day',
      'A way to distinguish signed-in time from active work time',
      'Visibility scoped to a manager\'s own team through the manager workspace',
    ],
    useCases: [
      { title: 'Mid-Day Team Check-Ins', description: 'Get a current sense of who is actively working without interrupting anyone directly.' },
      { title: 'Spotting a Quiet Stretch Early', description: 'Notice an unusually quiet period during the day rather than only after the fact.' },
    ],
    faq: [
      { question: 'What does "actually working" mean if activity varies through the day?', answer: 'It generally refers to recorded activity on the device -- it will naturally vary, which is expected rather than a problem to fix.' },
      { question: 'Can this show real-time status or only historical data?', answer: 'The manager workspace is designed to reflect activity as it happens through the day, not only after the fact.' },
      { question: 'Does it distinguish between idle time and active work?', answer: 'Employee activity data is built to reflect activity signals, which can help distinguish idle stretches from active periods.' },
      { question: 'Can a manager see this without interrupting the employee?', answer: 'Yes -- reviewing activity data does not require messaging or calling the employee directly.' },
      { question: 'Is this useful for split-shift or flexible schedules?', answer: 'It can be, since it reflects actual recorded activity rather than assuming a fixed 9-to-5 pattern.' },
      { question: 'Does the data update throughout the day or only at end of day?', answer: 'It is designed to update through the day rather than only being available in an end-of-day summary.' },
      { question: 'Can this be reviewed at the end of the week instead of daily?', answer: 'Yes -- the same data can be reviewed daily or rolled up into a weekly view, depending on what a manager needs.' },
      { question: 'Is this the same view HR uses for attendance?', answer: 'It draws on related data, but the manager workspace view is scoped to a manager\'s own team rather than the organization-wide view HR typically uses.' },
    ],
    related: ['how-to-get-visibility-into-remote-work-hours', 'how-to-reduce-manual-attendance-check-ins', 'how-to-track-task-completion-without-extra-tools'],
    externalLinks: [
      { title: 'Employee Activity Monitoring', description: 'The activity data behind this real-time view.', href: '/activity' },
      { title: 'Manager Workspace', description: 'Where a manager reviews this team-scoped view.', href: '/manager' },
    ],
  },
  {
    slug: 'how-to-reduce-manual-attendance-check-ins',
    title: 'How to Reduce Manual Attendance Check-Ins',
    cluster: 'time-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'How to move away from manual sign-in sheets and chat check-ins toward automatic attendance data.',
    intro:
      'Manual check-ins -- a sign-in sheet, a daily "I\'m online" message -- are easy to set up but tedious to maintain and easy to forget. This guide covers how to shift that workload onto automatically recorded attendance data instead, so the record exists whether or not anyone remembers to check in.',
    howItWorksNote: 'The Windows agent records sign-in and activity data automatically, reducing how much of the attendance record depends on someone remembering to check in.',
    features: ['timeAttendance', 'windowsAgent', 'managerWorkspace', 'aiReports'],
    privacy: false,
    benefits: [
      'An attendance record that does not depend on someone remembering to check in',
      'Less time spent compiling sign-in sheets or chat messages manually',
      'Summaries that make gaps in the record easier to spot',
    ],
    useCases: [
      { title: 'Replacing a Daily Chat Check-In', description: 'Move from a manual "online" message to automatically recorded sign-in data.' },
      { title: 'Cutting Down Spreadsheet-Based Attendance', description: 'Reduce reliance on a manually maintained attendance spreadsheet.' },
    ],
    faq: [
      { question: 'What manual check-in process does this typically replace?', answer: "It's commonly a sign-in sheet, a daily chat message, or a spreadsheet someone updates by hand." },
      { question: 'Does automatic attendance data still need occasional spot checks?', answer: 'It can be useful to review the data periodically, but that is a lighter task than maintaining a manual log every day.' },
      { question: 'Can this reduce the need for a sign-in sheet or chat check-in?', answer: 'Yes -- device-recorded sign-in data is designed to serve the same purpose without needing a manual step.' },
      { question: "What happens on days an employee doesn't open their laptop?", answer: 'No activity will be recorded for that period, which is itself useful information rather than a gap to work around.' },
      { question: 'Can automated attendance data be exported for reporting?', answer: 'Yes -- attendance and activity data can be reviewed through reports and exported as needed.' },
      { question: 'Does removing manual check-ins reduce accuracy?', answer: 'Generally the opposite -- automatic data removes the risk of a forgotten or inaccurate manual entry.' },
      { question: 'Is this suited to teams that previously used spreadsheets for attendance?', answer: 'Yes -- that is one of the more common transitions organizations make when adopting automatic attendance data.' },
      { question: 'Can AI Reports flag missing check-ins automatically?', answer: 'AI reports can help summarize attendance data, which can make an unusual gap easier to notice during a review.' },
    ],
    related: ['how-companies-verify-hours-worked-remotely', 'how-to-see-when-your-team-is-actually-working', 'how-to-get-visibility-into-remote-work-hours'],
    externalLinks: [
      { title: 'Windows Agent', description: 'The agent that records attendance automatically.', href: '/windows-agent' },
      { title: 'Installation', description: 'How the Windows agent gets deployed across an organization.', href: '/installation' },
    ],
  },

  // ---------------------------------------------------------------
  // Group 2: work-pattern-visibility
  // ---------------------------------------------------------------
  {
    slug: 'how-to-understand-your-teams-work-patterns',
    title: "How to Understand Your Team's Work Patterns",
    cluster: 'work-pattern-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'A guide to reading the rhythm behind a team\'s workday using activity and behaviour data.',
    intro:
      "Attendance tells you when someone signed in; it doesn't tell you much about how their day actually unfolds. This guide is about reading the rhythm behind the numbers -- when a team tends to be most active, how that varies person to person, and how to use that picture without turning it into a judgment.",
    howItWorksNote: 'Behaviour intelligence and workforce analytics surface patterns in activity data over time, giving a manager a rhythm to read rather than a single day\'s snapshot.',
    features: ['behaviourIntelligence', 'employeeActivity', 'workforceAnalytics', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A rhythm to read, rather than just a single day\'s attendance record',
      'Patterns that can vary meaningfully from one person to the next',
      'A team-scoped view through the manager workspace',
    ],
    useCases: [
      { title: 'Getting Oriented on a New Team', description: 'Build a baseline understanding of how a team tends to work before making changes.' },
      { title: 'Reviewing Patterns Ahead of a 1:1', description: 'Bring a general sense of someone\'s recent pattern into a scheduled check-in.' },
    ],
    faq: [
      { question: 'What is a "work pattern" as distinct from an attendance record?', answer: "An attendance record shows when someone signed in and out; a work pattern is the recurring shape of activity across days -- peaks, lulls, and how consistent that shape is." },
      { question: 'How much history is useful before patterns become meaningful?', answer: 'A single day rarely tells you much; looking across at least a couple of weeks generally gives a more reliable picture.' },
      { question: 'Can patterns differ between individuals on the same team?', answer: 'Yes, often significantly -- which is part of why pattern data is reviewed per person as well as at the team level.' },
      { question: 'Does reading patterns require reviewing screenshots?', answer: 'No -- behaviour intelligence and workforce analytics are based on activity signals, separate from screenshot monitoring.' },
      { question: 'Can Behaviour Intelligence flag a pattern without labeling it good or bad?', answer: 'It is designed to surface a pattern; interpreting whether it is a concern is left to the manager reviewing it.' },
      { question: 'Is this useful for fully in-office teams too?', answer: 'Yes -- pattern visibility is not limited to remote work; it applies to any team generating activity data.' },
      { question: 'How does a manager act on a pattern once it is visible?', answer: 'Typically by using it to inform a conversation or a scheduling decision, rather than treating the pattern itself as a conclusion.' },
      { question: 'Can pattern data be compared week over week?', answer: 'Yes -- workforce analytics is built to let patterns be compared across different time periods.' },
    ],
    related: ['how-to-spot-shifts-in-team-work-habits', 'how-to-build-a-clearer-picture-of-a-typical-workday', 'how-to-compare-work-patterns-across-teams'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'Where pattern data is reviewed over time.', href: '/ai-analytics' },
      { title: 'Manager Workspace', description: 'The team-scoped view for reviewing patterns.', href: '/manager' },
    ],
  },
  {
    slug: 'how-to-spot-shifts-in-team-work-habits',
    title: 'How to Spot Shifts in Team Work Habits',
    cluster: 'work-pattern-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'How to notice a meaningful change in work habits early, using pattern data rather than guesswork.',
    intro:
      "A single off day rarely means much on its own; a sustained change in habits is a different story. This guide focuses on the gap between those two things -- how to notice when a shift in someone's work habits is worth paying attention to, before it turns into a bigger issue.",
    howItWorksNote: 'AI reports and behaviour intelligence can surface a sustained change in activity patterns, which may help a manager notice a shift earlier than a purely manual review would.',
    features: ['behaviourIntelligence', 'workforceAnalytics', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A way to notice a sustained change rather than react to a single unusual day',
      'Pattern data reviewed at the team level, not just person by person',
      'Reports that can help surface a shift without a fully manual review',
    ],
    useCases: [
      { title: 'Noticing a Gradual Change', description: 'Catch a habit that has been shifting slowly over several weeks, not just a one-off.' },
      { title: 'Preparing for a Check-In', description: 'Bring a specific, pattern-backed observation into a conversation rather than a vague impression.' },
    ],
    faq: [
      { question: 'What counts as a meaningful shift versus normal day-to-day variation?', answer: 'Normal variation tends to be short-lived; a meaningful shift is a change that holds over a longer stretch of time, such as several weeks rather than a day or two.' },
      { question: 'How quickly can a shift in habits be surfaced?', answer: 'That depends on how often reports are reviewed -- the underlying data updates continuously, but noticing a shift still depends on someone looking at it.' },
      { question: 'Does spotting a shift replace checking in with the employee?', answer: 'No -- a pattern can help inform when a check-in might be worthwhile, but it does not replace the conversation itself.' },
      { question: 'Can shifts be tracked at the team level rather than individual?', answer: 'Yes -- workforce analytics can be reviewed at a team level to see whether a shift is isolated or broader.' },
      { question: 'What role does AI Reports play in surfacing a shift?', answer: 'AI reports can help summarize activity trends, which can make a sustained change easier to notice than scanning raw data manually.' },
      { question: 'Is a single unusual day treated the same as a sustained shift?', answer: 'No -- a single day is generally treated as noise; a sustained shift is what pattern data is meant to help distinguish it from.' },
      { question: 'Can a manager set what they want to be alerted to?', answer: 'Reporting can be configured within the manager workspace, though the specifics depend on how an organization sets it up.' },
      { question: 'Does this work the same for remote and in-office habits?', answer: 'Yes -- the underlying activity data is collected the same way regardless of where the work happens.' },
    ],
    related: ['how-to-understand-your-teams-work-patterns', 'how-companies-identify-burnout-risk-patterns', 'how-to-know-if-a-team-is-overloaded'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'The reporting layer used to surface a shift.', href: '/ai-analytics' },
      { title: 'Use Cases', description: 'Broader examples of how pattern visibility gets used.', href: '/use-cases' },
    ],
  },
  {
    slug: 'how-companies-identify-burnout-risk-patterns',
    title: 'How Companies Identify Burnout Risk Patterns',
    cluster: 'work-pattern-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: "How ZUZU's burnout forecast projects per-employee risk from working-hour patterns, as one input alongside direct conversations with employees.",
    intro:
      "ZUZU includes a burnout forecast that projects risk per employee from working-hour patterns -- long days, weekend work, late-night activity, and how those are trending -- with an estimate of how long a rising trend has before it crosses the line. ZUZU frames it as a forecast, not a performance measure: something meant to prompt a conversation, not to rank anybody. This guide looks at how companies use that forecast alongside actual conversations with employees, rather than as a substitute for them.",
    howItWorksNote: 'Behaviour intelligence and employee activity data feed a burnout forecast in the admin portal, which projects risk per employee with the drivers behind each forecast and an estimated weeks-to-risk where a trend is rising. Employees with stable patterns are not forced into an estimate.',
    features: ['behaviourIntelligence', 'employeeActivity', 'workforceAnalytics', 'adminPortal'],
    privacy: true,
    benefits: [
      'A forecast that names the drivers behind it, not just a bare score',
      'Framed in-product as a conversation starter, not a ranking or performance measure',
      'A team-level view that does not have to single out one person',
    ],
    useCases: [
      { title: 'Reviewing a Rising Burnout Forecast', description: 'Check the drivers behind a rising forecast -- long hours, weekend work, late-night activity -- before deciding whether a conversation is warranted.' },
      { title: 'Team-Level Pattern Review', description: 'Look at forecasted risk across a team to see whether a pattern is isolated to one person or showing up more broadly.' },
    ],
    faq: [
      { question: 'Can ZUZU tell a company that someone is burned out?', answer: "ZUZU doesn't diagnose burnout in a clinical sense, but it does include a burnout forecast that projects risk per employee from working-hour patterns, with the drivers behind each forecast. It's designed to prompt a conversation, not to stand in for one or to rank anybody." },
      { question: 'What kind of pattern data feeds the forecast?', answer: 'Working-hour patterns such as long days, weekend work and late-night activity, and how those are trending over time -- not a single data point.' },
      { question: 'Should the forecast be the only basis for a conversation?', answer: "No -- ZUZU frames it as a forecast meant to prompt a conversation, not replace one; the drivers behind a rising forecast are a starting point, not a verdict." },
      { question: 'Does Privacy Controls limit how much individual detail is visible?', answer: 'Yes -- privacy controls can be configured to limit day-to-day visibility into individual detail, even while pattern-level signals remain available.' },
      { question: "Can this be reviewed at a team level instead of singling out one person?", answer: 'Yes -- workforce analytics can be reviewed at a team level, which can help spot a broader pattern rather than focusing on one individual.' },
      { question: 'What is a reasonable first step after noticing a risk pattern?', answer: 'Generally, having a direct conversation with the employee -- the pattern data is meant to inform that conversation, not replace it.' },
      { question: 'Is sustained overtime activity the only signal considered?', answer: 'No -- overtime is one example; other signals like unusual timing shifts or activity drop-offs can also be part of the picture.' },
      { question: 'Can HR access this the same way a manager does?', answer: 'HR can typically access relevant workforce reports through the admin portal, though exact access depends on how an organization configures roles.' },
    ],
    related: ['how-to-spot-shifts-in-team-work-habits', 'how-to-know-if-a-team-is-overloaded', 'how-to-understand-your-teams-work-patterns'],
    externalLinks: [
      { title: 'Screenshot & Privacy Controls', description: 'How privacy settings limit individual detail.', href: '/screenshot-privacy' },
      { title: 'Security', description: 'How ZUZU approaches data handling more broadly.', href: '/security' },
    ],
  },
  {
    slug: 'how-to-compare-work-patterns-across-teams',
    title: 'How to Compare Work Patterns Across Teams',
    cluster: 'work-pattern-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'A guide to comparing work-pattern data between different teams without assuming identical jobs or schedules.',
    intro:
      "Comparing two teams' work patterns can surface something useful -- or it can be misleading, if the jobs and schedules aren't actually comparable. This guide covers how to approach a cross-team comparison carefully, using it to spot outliers worth a closer look rather than to rank teams against each other.",
    howItWorksNote: 'Workforce analytics can roll activity and behaviour data up to a cross-team view, scoped through the admin portal to whoever needs to review it.',
    features: ['workforceAnalytics', 'behaviourIntelligence', 'employeeActivity', 'adminPortal'],
    privacy: false,
    benefits: [
      'A cross-team view built from the same underlying data as team-level reports',
      'A way to spot an outlier team worth a closer look',
      'Access to comparisons scoped through the admin portal',
    ],
    useCases: [
      { title: 'Spotting an Outlier Department', description: 'Notice one team whose pattern looks meaningfully different from the rest.' },
      { title: 'Informing a Resourcing Conversation', description: 'Bring a cross-team comparison into a broader resourcing or planning discussion.' },
    ],
    faq: [
      { question: 'Is it fair to compare patterns across teams with different jobs?', answer: 'Not always directly -- differences in job type and schedule matter, so a comparison is more useful for spotting outliers than for ranking teams against each other.' },
      { question: 'What does Workforce Analytics show at a cross-team level?', answer: 'It can roll up activity and behaviour data across teams so patterns can be viewed side by side, rather than one team at a time.' },
      { question: 'Can this comparison be scoped to a department instead of the whole company?', answer: 'Yes -- comparisons can be scoped more narrowly, depending on what is configured in the admin portal.' },
      { question: 'Does comparing patterns require identical schedules?', answer: 'No, but it is worth accounting for schedule differences when interpreting the comparison rather than assuming they are equivalent.' },
      { question: 'Who typically reviews cross-team comparisons?', answer: 'Usually operations, HR, or leadership roles with organization-wide or multi-team access through the admin portal.' },
      { question: 'Can a comparison surface a team that is an outlier?', answer: 'Yes -- that is one of the more common reasons to run a cross-team comparison in the first place.' },
      { question: 'Should comparisons be a one-time exercise or ongoing?', answer: 'Either can work; an ongoing comparison can help catch a change over time rather than only a one-time snapshot.' },
      { question: 'Does this replace individual manager reviews?', answer: 'No -- a cross-team comparison complements manager-level reviews rather than replacing them.' },
    ],
    related: ['how-to-understand-your-teams-work-patterns', 'how-to-get-operational-visibility-across-departments', 'how-companies-make-staffing-decisions-with-workforce-data'],
    externalLinks: [
      { title: 'Admin Portal', description: 'Where cross-team access and reporting is managed.', href: '/admin' },
      { title: 'Reports', description: 'The reporting layer behind cross-team comparisons.', href: '/reports' },
    ],
  },
  {
    slug: 'how-to-build-a-clearer-picture-of-a-typical-workday',
    title: 'How to Build a Clearer Picture of a Typical Workday',
    cluster: 'work-pattern-visibility',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'How to turn scattered attendance and activity data into one coherent view of what a typical workday actually looks like.',
    intro:
      "Attendance data, activity data, and behaviour signals often live as separate pieces until someone sits down to make sense of them together. This guide is about pulling those pieces into one coherent picture of what a typical workday actually looks like -- useful before making a scheduling decision or just to check assumptions against reality.",
    howItWorksNote: 'AI reports can pull attendance, activity, and behaviour data together into a single summary, rather than leaving each piece as a separate view to check manually.',
    features: ['employeeActivity', 'behaviourIntelligence', 'workforceAnalytics', 'aiReports'],
    privacy: false,
    benefits: [
      'One coherent view instead of several separate data sources',
      'A picture built from actual recorded data, not assumptions',
      'A summary that can be generated without manually cross-referencing reports',
    ],
    useCases: [
      { title: 'Checking Assumptions Before a Schedule Change', description: 'Confirm what a typical day actually looks like before proposing a change to it.' },
      { title: 'Onboarding a New Manager', description: 'Give a new manager a realistic starting picture of how their team\'s day tends to unfold.' },
    ],
    faq: [
      { question: 'What data gets combined into a single workday view?', answer: 'Typically attendance timestamps, activity signals, and behaviour patterns, brought together rather than reviewed as separate reports.' },
      { question: 'Is a "typical" workday an average, or does it show real variation?', answer: 'It can show both -- an average gives a baseline, while looking at variation around it shows how consistent or inconsistent a day actually is.' },
      { question: 'Can this view be built for one person or a whole team?', answer: 'Yes -- it can be scoped to an individual or rolled up to a team, depending on what is needed.' },
      { question: 'Does this require pulling data from multiple separate tools?', answer: 'No -- the relevant data already lives within ZUZU, so building the picture does not require combining separate external tools.' },
      { question: 'How far back should a review look to find a "typical" pattern?', answer: 'A few weeks is usually more informative than a single day, since it smooths out one-off variation.' },
      { question: 'Can AI Reports generate this summary automatically?', answer: 'Yes -- AI reports is built to help summarize this kind of data rather than requiring a fully manual review.' },
      { question: 'Does a clearer workday picture change how schedules are planned?', answer: "It can inform scheduling decisions, though the decision itself still rests with the people managing the schedule." },
      { question: 'Is this different from a simple attendance log?', answer: 'Yes -- an attendance log shows sign-in and sign-out times; this view adds activity and behaviour context on top of that.' },
    ],
    related: ['how-to-understand-your-teams-work-patterns', 'how-to-track-task-completion-without-extra-tools', 'how-to-turn-raw-activity-data-into-decisions'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'The reporting layer used to build this view.', href: '/ai-analytics' },
      { title: 'Platform Overview', description: 'How the underlying data sources fit together.', href: '/platform' },
    ],
  },

  // ---------------------------------------------------------------
  // Group 3: task-completion-capacity
  // ---------------------------------------------------------------
  {
    slug: 'how-to-track-task-completion-without-extra-tools',
    title: 'How to Track Task Completion Without Extra Tools',
    cluster: 'task-completion-capacity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'How to get a sense of task completion using activity data alone, without adding a separate project tool.',
    intro:
      "Not every team runs on a formal task board, and adding one just to get visibility can feel like overkill. This guide looks at what's possible using the activity data already being generated -- enough to get a general sense of progress and completion without introducing a whole new tool for the team to adopt.",
    howItWorksNote: 'Employee activity data, summarized through AI reports, can give a general sense of progress without requiring a separate task-tracking tool.',
    features: ['employeeActivity', 'aiReports', 'managerWorkspace', 'workforceVisibility'],
    privacy: false,
    benefits: [
      'A general sense of progress without adopting a new tool',
      'Visibility built from data already being generated',
      'A team-scoped summary through the manager workspace',
    ],
    useCases: [
      { title: 'Teams Without a Formal Task Board', description: 'Get a rough sense of progress for teams that work informally rather than through a ticketing system.' },
      { title: 'Reducing Status-Update Requests', description: 'Rely on activity signals for a general read, cutting down on how often status is requested manually.' },
    ],
    faq: [
      { question: 'Does this replace a project management tool?', answer: "No -- if a team already uses a project management tool, that remains the source of task-level detail. This is for teams that don't, or want a general activity-based view alongside it." },
      { question: 'What does "task completion" mean without a task-tracking app?', answer: 'It generally means inferring progress from activity patterns rather than from checked-off tickets -- a general read, not a precise count.' },
      { question: 'Can activity data show progress without task-level detail?', answer: 'It can suggest whether work is ongoing, has stalled, or has wrapped up, though it will not show which specific task is complete.' },
      { question: 'Is this suited to teams that don\'t use formal task boards?', answer: 'Yes -- that is generally where this approach adds the most value, compared to teams that already have detailed task tracking.' },
      { question: 'Can a manager see completion signals without asking for status updates?', answer: 'To an extent -- activity data can reduce how often a manual status update is needed, though it is not a full substitute for one.' },
      { question: 'Does this work for teams with unstructured, ad hoc work?', answer: 'It can, since it is based on general activity rather than requiring predefined tasks or tickets.' },
      { question: 'Can AI Reports summarize completion trends over a week?', answer: 'Yes -- AI reports can help summarize activity trends over a chosen period, including a week.' },
      { question: 'Is this reliable for creative or non-repetitive work?', answer: 'It is less precise for that kind of work than for repetitive tasks, since activity levels alone don\'t capture creative output directly.' },
    ],
    related: ['how-companies-gain-visibility-into-project-progress', 'how-to-see-team-capacity-before-taking-on-more-work', 'how-to-build-a-clearer-picture-of-a-typical-workday'],
    externalLinks: [
      { title: 'Employee Activity Monitoring', description: 'The underlying activity data behind this approach.', href: '/activity' },
      { title: 'Manager Workspace', description: 'Where this data is reviewed for a manager\'s own team.', href: '/manager' },
    ],
  },
  {
    slug: 'how-companies-gain-visibility-into-project-progress',
    title: 'How Companies Gain Visibility Into Project Progress',
    cluster: 'task-completion-capacity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'How organizations use activity data as one signal for tracking project progress alongside status conversations.',
    intro:
      "Project status is usually pieced together from stand-ups, status calls, and whatever's in a project tool -- all useful, but all dependent on someone updating them. This guide looks at how activity data can add another signal to that picture, one that doesn't rely on someone remembering to report in.",
    howItWorksNote: 'Employee activity data, rolled up through workforce analytics, can add an activity-based signal to a project view, alongside whatever status process already exists.',
    features: ['employeeActivity', 'aiReports', 'workforceAnalytics', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'An activity-based signal that does not depend on someone remembering to report status',
      'A way to notice when progress on a project has stalled',
      'A view that can be scoped to a specific project team',
    ],
    useCases: [
      { title: 'Cross-Checking a Status Update', description: 'Compare a reported "on track" status against recent activity trends.' },
      { title: 'Noticing a Stalled Project Early', description: 'Catch a drop in project-related activity before it shows up in a missed deadline.' },
    ],
    faq: [
      { question: 'How does activity data translate into project progress?', answer: 'It reflects how much work is happening, which can be a useful signal alongside -- not a replacement for -- explicit status updates.' },
      { question: 'Is this a substitute for a dedicated project management system?', answer: "No -- a project management system tracks tasks and milestones directly; ZUZU adds an activity-based signal on top of whatever system is already in use." },
      { question: 'Can progress visibility be scoped to a single project team?', answer: 'Yes -- the manager workspace can be scoped to the specific team working on a project.' },
      { question: 'What happens when progress stalls without an obvious explanation?', answer: 'Activity data can flag that something has slowed, but understanding why still requires a conversation with the team.' },
      { question: 'Does this require employees to log progress manually?', answer: 'No -- the activity signal is generated automatically rather than requiring a manual log entry.' },
      { question: 'Can Workforce Analytics show trends across multiple projects?', answer: 'It can show activity trends across teams, which can be mapped to multiple projects depending on how teams are organized.' },
      { question: 'Is this useful for client-facing or internal projects specifically?', answer: 'It applies to both -- the underlying activity data does not distinguish between client and internal work on its own.' },
      { question: 'Can a manager combine this with a quick status conversation?', answer: 'Yes -- that combination is generally the most reliable way to use this kind of signal.' },
    ],
    related: ['how-to-track-task-completion-without-extra-tools', 'how-to-identify-inefficient-workflows-with-activity-data', 'how-to-see-team-capacity-before-taking-on-more-work'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'Where activity-based project signals are reviewed.', href: '/ai-analytics' },
      { title: 'Use Cases', description: 'Broader examples of activity data in practice.', href: '/use-cases' },
    ],
  },
  {
    slug: 'how-to-see-team-capacity-before-taking-on-more-work',
    title: 'How to See Team Capacity Before Taking on More Work',
    cluster: 'task-completion-capacity',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'A guide to checking whether a team has room for more work before committing to a new deadline or project.',
    intro:
      "Saying yes to a new deadline is easy; knowing whether the team actually has room for it is harder. This guide walks through checking recent activity and workload data before committing to more work, so the decision is based on something more current than a gut feeling or an outdated headcount number.",
    howItWorksNote: 'Workforce analytics and employee activity data give a more current read on workload than a static headcount figure, which can help before committing a team to more work.',
    features: ['workforceAnalytics', 'employeeActivity', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A more current read on workload than a static headcount number',
      'A check that can be run before, not after, committing to a deadline',
      'A view that can be scoped to part of a team, not just the whole group',
    ],
    useCases: [
      { title: 'Evaluating a New Project Request', description: 'Check current workload before agreeing to take on additional scope.' },
      { title: 'Deciding Who on the Team Has Room', description: 'Look at activity data to see which individuals have more capacity than others.' },
    ],
    faq: [
      { question: 'What counts as "capacity" in this context?', answer: 'Generally, how much room current activity and workload data suggest a team has, rather than a fixed number defined in advance.' },
      { question: 'Can capacity be checked before committing to a new deadline?', answer: 'Yes -- that is one of the more useful times to check it, before a commitment is made rather than after.' },
      { question: 'Does this show if a team is already stretched thin?', answer: 'Sustained high activity or overtime patterns can suggest a team is stretched, though it is worth confirming with the team directly.' },
      { question: 'Is capacity data different from a simple headcount count?', answer: 'Yes -- headcount is static; activity-based capacity data reflects current workload, which can change week to week.' },
      { question: 'Can a manager check capacity for just part of a team?', answer: 'Yes -- the manager workspace can be scoped down to specific individuals within a team.' },
      { question: 'How current does capacity data need to be to be useful?', answer: 'Recent data, generally the last few weeks, tends to be more useful than a single day or a much older snapshot.' },
      { question: 'Does checking capacity replace asking the team directly?', answer: 'No -- it is a useful input, but confirming with the team is still worthwhile before finalizing a decision.' },
      { question: 'Can AI Reports flag a capacity concern automatically?', answer: 'AI reports can help summarize workload trends, which can make a capacity concern easier to notice during a review.' },
    ],
    related: ['how-to-know-if-a-team-is-overloaded', 'how-to-plan-headcount-with-real-usage-data', 'how-to-track-task-completion-without-extra-tools'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'The reporting layer used to check capacity.', href: '/ai-analytics' },
      { title: 'Manager Workspace', description: 'Where a manager reviews team-level capacity.', href: '/manager' },
    ],
  },
  {
    slug: 'how-to-know-if-a-team-is-overloaded',
    title: 'How to Know If a Team Is Overloaded',
    cluster: 'task-completion-capacity',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'How to read workload and activity signals that may suggest a team is overloaded, and what to do next.',
    intro:
      "Overload rarely announces itself outright -- it tends to show up first as sustained long hours or activity that keeps creeping later into the evening. This guide looks at what signals are worth watching for and, just as importantly, how to treat them as a starting point for a conversation rather than a final verdict.",
    howItWorksNote: 'Behaviour intelligence and workforce analytics can surface sustained workload signals across a team, which may help a manager notice overload earlier.',
    features: ['behaviourIntelligence', 'workforceAnalytics', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Sustained workload signals that may help catch overload earlier',
      'A team-level view alongside individual-level detail',
      'A starting point for a conversation, not a final judgment',
    ],
    useCases: [
      { title: 'Checking a Team After a Busy Stretch', description: 'Review whether elevated activity after a deadline has settled back down or stayed elevated.' },
      { title: 'Deciding Whether to Redistribute Work', description: 'Use sustained overload signals to inform a decision about rebalancing workload.' },
    ],
    faq: [
      { question: 'What are the actual signals that suggest overload?', answer: 'Commonly, sustained long hours, activity extending later into evenings, or a consistent pattern that does not ease off after a busy period.' },
      { question: 'Can overload be confirmed by data alone?', answer: "No -- data can suggest a pattern worth looking at, but confirming overload generally requires talking with the team as well." },
      { question: 'Is occasional overtime activity the same as being overloaded?', answer: "Not necessarily -- a single busy week is different from a sustained pattern that does not let up over time." },
      { question: 'Does Behaviour Intelligence flag overload automatically?', answer: 'It can surface sustained patterns that may be worth reviewing, though it does not label anything definitively as "overload."' },
      { question: 'What is an appropriate next step after seeing an overload signal?', answer: 'Generally, a direct conversation with the team or individual to understand what is driving the pattern before deciding what to change.' },
      { question: 'Can overload be assessed for a whole team, not just one person?', answer: 'Yes -- workforce analytics can be reviewed at a team level to see whether a pattern is widespread or isolated.' },
      { question: 'Does Privacy Controls limit what a manager can see here?', answer: 'Yes -- privacy controls can limit how much individual-level detail is visible, even when a broader pattern is flagged.' },
      { question: 'Is this a one-time check or something reviewed regularly?', answer: 'It tends to be more useful as an ongoing review than a single check, since sustained patterns take time to show up.' },
    ],
    related: ['how-companies-identify-burnout-risk-patterns', 'how-to-see-team-capacity-before-taking-on-more-work', 'how-to-spot-shifts-in-team-work-habits'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'Where workload signals are reviewed.', href: '/ai-analytics' },
      { title: 'Screenshot & Privacy Controls', description: 'How privacy settings apply alongside workload review.', href: '/screenshot-privacy' },
    ],
  },
  {
    slug: 'how-to-plan-headcount-with-real-usage-data',
    title: 'How to Plan Headcount With Real Usage Data',
    cluster: 'task-completion-capacity',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'How to use actual activity and workload data as one input into headcount planning, alongside other business factors.',
    intro:
      "Headcount planning usually starts with a forecast and a budget -- this guide adds a third input: what current activity data actually shows about workload. It's not a replacement for judgment or business context, but it can ground a planning conversation in something more concrete than intuition alone.",
    howItWorksNote: 'Workforce analytics can summarize actual usage and workload trends, giving headcount planning an additional, data-backed input alongside budget and forecast.',
    features: ['workforceAnalytics', 'aiReports', 'adminPortal', 'employeeActivity'],
    privacy: false,
    benefits: [
      'A data-backed input alongside budget and forecast for headcount planning',
      'Usage trends that can be reviewed across departments through the admin portal',
      'Summaries that make a planning conversation easier to ground in evidence',
    ],
    useCases: [
      { title: 'Annual or Quarterly Planning Cycles', description: 'Bring actual usage trends into a recurring headcount planning process.' },
      { title: 'Justifying a Staffing Request', description: 'Support a request for additional headcount with recent workload data.' },
    ],
    faq: [
      { question: 'How does activity data factor into a headcount decision?', answer: 'It can show whether current workload is trending up, staying flat, or easing off, which is one useful input alongside budget and business forecasts.' },
      { question: 'Is usage data meant to replace judgment in headcount planning?', answer: "No -- it's meant to inform the decision, not make it. Business context and judgment still matter." },
      { question: 'Can Workforce Analytics show whether a team is understaffed?', answer: 'It can surface sustained workload pressure that may suggest understaffing, though confirming that still involves broader business context.' },
      { question: 'What time period of data is reasonable to base a plan on?', answer: 'Longer periods -- a quarter or more -- tend to give a steadier picture than a short, potentially unrepresentative window.' },
      { question: 'Does this work for planning across multiple departments?', answer: 'Yes -- the admin portal can provide a cross-department view for broader planning purposes.' },
      { question: 'Can AI Reports summarize usage trends for a planning meeting?', answer: 'Yes -- AI reports is designed to help summarize this kind of trend data for a planning discussion.' },
      { question: 'Should headcount decisions rely on data alone?', answer: 'No -- data is one input; the decision itself should weigh business priorities and budget as well.' },
      { question: 'Is this useful for seasonal or temporary staffing decisions?', answer: 'It can be, since usage trends can help show whether a busy period looks temporary or more sustained.' },
    ],
    related: ['how-to-see-team-capacity-before-taking-on-more-work', 'how-companies-make-staffing-decisions-with-workforce-data', 'how-to-justify-a-new-hire-with-workload-data'],
    externalLinks: [
      { title: 'Admin Portal', description: 'Where cross-department usage data is reviewed.', href: '/admin' },
      { title: 'AI Reports & Workforce Analytics', description: 'The reporting layer behind this planning input.', href: '/ai-analytics' },
    ],
  },

  // ---------------------------------------------------------------
  // Group 4: operational-business-decision
  // ---------------------------------------------------------------
  {
    slug: 'how-to-get-operational-visibility-across-departments',
    title: 'How to Get Operational Visibility Across Departments',
    cluster: 'operational-business-decision',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'How to build a single operational view across departments instead of pulling separate reports from each one.',
    intro:
      "Operational visibility often falls apart at the seams between departments -- each one has its own numbers, in its own format, updated on its own schedule. This guide is about building a single view that pulls those pieces together, so an operational picture doesn't depend on manually stitching together separate reports.",
    howItWorksNote: 'Workforce analytics can roll activity and attendance data up across departments into one view, managed through the admin portal.',
    features: ['workforceVisibility', 'workforceAnalytics', 'adminPortal', 'aiReports'],
    privacy: false,
    benefits: [
      'One operational view instead of separate reports pulled department by department',
      'Access managed centrally through the admin portal',
      'A view built from the same underlying data as department-level reports',
    ],
    useCases: [
      { title: 'Weekly Operations Reviews', description: 'Pull a cross-department view together for a recurring operations meeting.' },
      { title: 'Spotting a Lagging Department', description: 'Compare departments side by side to notice one that needs closer attention.' },
    ],
    faq: [
      { question: 'What does an operational view across departments actually include?', answer: 'Typically a combination of attendance, activity, and workforce analytics data, rolled up so departments can be viewed together rather than separately.' },
      { question: 'Can this be built without pulling reports from each department separately?', answer: 'Yes -- that is the point of a cross-department view: consolidating what would otherwise be separate department-level reports.' },
      { question: 'Who typically owns a cross-department operational view?', answer: 'Usually operations leadership or an admin role with organization-wide access through the admin portal.' },
      { question: 'Does this require every department to use the same processes?', answer: 'No -- the underlying data collection (attendance, activity) is consistent even if departments work differently day to day.' },
      { question: 'Can Admin Portal be used to manage access to this view?', answer: 'Yes -- the admin portal is where access to cross-department data is generally configured.' },
      { question: 'How often should an operational view be refreshed?', answer: 'That depends on the organization\'s rhythm -- weekly is common, though the underlying data itself updates continuously.' },
      { question: "Is this different from a single department's own reporting?", answer: 'It builds on the same data, just aggregated to a broader level rather than scoped to one department.' },
      { question: 'Can this scale as more departments are added?', answer: 'Yes -- the underlying reporting is designed to accommodate additional departments as an organization grows.' },
    ],
    related: ['how-to-compare-work-patterns-across-teams', 'how-to-build-an-operational-visibility-dashboard-for-leadership', 'how-companies-make-staffing-decisions-with-workforce-data'],
    externalLinks: [
      { title: 'Admin Portal', description: 'Where cross-department access is managed.', href: '/admin' },
      { title: 'Reports', description: 'The reporting layer behind an operational view.', href: '/reports' },
    ],
  },
  {
    slug: 'how-companies-make-staffing-decisions-with-workforce-data',
    title: 'How Companies Make Staffing Decisions With Workforce Data',
    cluster: 'operational-business-decision',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'How workforce data can be one input into a staffing decision, alongside conversations with the people affected.',
    intro:
      "Staffing decisions are rarely made from data alone, but going in without any data at all usually means relying on whoever's opinion is loudest in the room. This guide looks at how to bring workforce activity and analytics data into a staffing discussion as one useful input, not as the whole basis for the call.",
    howItWorksNote: 'Workforce analytics and AI reports can prepare a summary of relevant activity trends ahead of a staffing discussion, scoped through the manager workspace or admin portal.',
    features: ['workforceAnalytics', 'aiReports', 'adminPortal', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A data-backed starting point for a staffing conversation',
      'Reports that can be prepared ahead of a discussion rather than compiled on the spot',
      'A view that applies whether the decision is scoped to one team or the whole organization',
    ],
    useCases: [
      { title: 'Preparing for a Staffing Review Meeting', description: 'Bring recent activity trends into a scheduled staffing discussion.' },
      { title: 'Evaluating Shift Coverage', description: 'Look at activity patterns to inform a shift-based staffing decision.' },
    ],
    faq: [
      { question: 'Can workforce data alone justify a staffing decision?', answer: "Rarely on its own -- it works better as one input alongside business context and conversations with the people affected." },
      { question: 'What kind of data is useful to bring into a staffing conversation?', answer: 'Activity trends, workload patterns, and attendance data are the most common inputs, summarized through workforce analytics.' },
      { question: 'Does this apply to shift-based staffing as well as salaried roles?', answer: 'Yes -- the underlying activity and attendance data applies to both, though how it is used may differ.' },
      { question: 'Can Workforce Analytics highlight where staffing is thin?', answer: 'It can surface sustained workload pressure that may point to thin staffing, though confirming that still requires broader context.' },
      { question: 'Is this meant for one-off decisions or ongoing staffing reviews?', answer: 'It can support both, though an ongoing review tends to give a steadier picture than a single snapshot.' },
      { question: 'Should managers be involved when staffing data is reviewed?', answer: 'Generally yes -- managers often have context on their team that the data alone won\'t capture.' },
      { question: 'Can AI Reports prepare a summary for a staffing discussion?', answer: 'Yes -- AI reports can help summarize relevant trends ahead of a meeting rather than requiring a manual compile.' },
      { question: 'Does this replace conversations with the people actually affected?', answer: 'No -- it is meant to inform those conversations, not substitute for them.' },
    ],
    related: ['how-to-plan-headcount-with-real-usage-data', 'how-to-justify-a-new-hire-with-workload-data', 'how-to-get-operational-visibility-across-departments'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'Where staffing-relevant trends are reviewed.', href: '/ai-analytics' },
      { title: 'Admin Portal', description: 'Where broader staffing data is accessed.', href: '/admin' },
    ],
  },
  {
    slug: 'how-to-justify-a-new-hire-with-workload-data',
    title: 'How to Justify a New Hire With Workload Data',
    cluster: 'operational-business-decision',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'How to back a hiring request with actual workload evidence rather than a general sense that the team is busy.',
    intro:
      "\"We're busy\" is a hard case to make on its own; \"here's what the workload has actually looked like for the last two months\" is a stronger one. This guide walks through pulling together workload evidence to support a hiring request, distinguishing a genuinely sustained need from a temporary crunch.",
    howItWorksNote: 'AI reports can summarize sustained workload trends for a specific team, giving a hiring request something more concrete than a general impression.',
    features: ['workforceAnalytics', 'employeeActivity', 'aiReports', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'Workload evidence that is more concrete than a general sense of being busy',
      'A way to distinguish a sustained need from a temporary spike',
      'A summary that a manager can pull directly for their own team',
    ],
    useCases: [
      { title: 'Building the Case for a Hiring Request', description: 'Support a request to leadership with recent, sustained workload data.' },
      { title: 'Timing a Hiring Request Appropriately', description: 'Confirm workload has been elevated for a sustained period before making the request.' },
    ],
    faq: [
      { question: 'What workload data is useful when requesting a new hire?', answer: 'Sustained activity levels, overtime patterns, and workload trends over a period of weeks or months tend to be the most persuasive.' },
      { question: 'Can this replace a business case entirely?', answer: "No -- workload data supports a business case, but a hiring request generally also needs budget and business justification alongside it." },
      { question: 'How is sustained workload distinguished from a temporary spike?', answer: 'By looking at the trend over time -- a spike tends to ease off, while a sustained need holds steady or keeps climbing.' },
      { question: 'Can a manager pull this data themselves, or does it require admin access?', answer: 'A manager can generally pull team-scoped data directly through the manager workspace, without needing broader admin access.' },
      { question: 'Does AI Reports help summarize workload for a hiring request?', answer: 'Yes -- AI reports can help condense workload trends into a summary that is easier to present.' },
      { question: 'Is this evidence typically presented alongside other business reasons?', answer: 'Yes -- workload data works best as supporting evidence alongside broader business reasoning, not as a stand-alone argument.' },
      { question: 'Can this be scoped to just the team requesting the hire?', answer: 'Yes -- the manager workspace scopes data to a manager\'s own team by default.' },
      { question: 'How much history should back a hiring request?', answer: 'Generally more than a few days -- a couple of months of sustained data tends to make a stronger case than a short window.' },
    ],
    related: ['how-to-plan-headcount-with-real-usage-data', 'how-to-see-team-capacity-before-taking-on-more-work', 'how-companies-make-staffing-decisions-with-workforce-data'],
    externalLinks: [
      { title: 'Manager Workspace', description: 'Where a manager pulls team-scoped workload data.', href: '/manager' },
      { title: 'AI Reports & Workforce Analytics', description: 'Where workload trends are summarized.', href: '/ai-analytics' },
    ],
  },
  {
    slug: 'how-to-support-business-decisions-with-activity-data',
    title: 'How to Support Business Decisions With Activity Data',
    cluster: 'operational-business-decision',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'How to bring workforce activity data into broader business decisions without treating it as the whole answer.',
    intro:
      "Activity data rarely makes a business decision by itself, but it can fill in a gap that intuition alone tends to leave open. This guide covers how to bring that data into a broader decision-making process -- as a supporting input, reviewed alongside everything else already informing the call.",
    howItWorksNote: 'Workforce analytics and AI reports can summarize relevant activity trends, which can then be brought into a broader business decision alongside other data sources.',
    features: ['aiReports', 'workforceAnalytics', 'employeeActivity', 'adminPortal'],
    privacy: false,
    benefits: [
      'A supporting data input for decisions that would otherwise rely on intuition alone',
      'Summaries that make activity data easier to bring into a broader discussion',
      'Access managed centrally so the right stakeholders can pull relevant data',
    ],
    useCases: [
      { title: 'Informing a Resourcing Decision', description: 'Bring activity trends into a discussion about where to allocate people or budget.' },
      { title: 'Supporting a Process Change Proposal', description: 'Use activity data to help make the case for changing how a team works.' },
    ],
    faq: [
      { question: 'What kinds of business decisions can activity data reasonably inform?', answer: 'Resourcing, staffing, workflow, and process decisions are common examples -- generally decisions where workload or usage patterns are relevant.' },
      { question: 'Should activity data be the sole basis for a decision?', answer: 'No -- it works best as one input alongside business context, financial considerations, and input from the people involved.' },
      { question: 'Can this data be combined with data from outside ZUZU?', answer: "ZUZU doesn't natively combine data from external systems, but exported ZUZU data can be brought together with other sources manually as part of a broader analysis." },
      { question: 'Who typically pulls this data together for a decision?', answer: 'Often whoever is preparing the decision -- a manager, an operations lead, or someone with admin portal access, depending on scope.' },
      { question: 'Does Admin Portal control who can access this data?', answer: 'Yes -- access to broader workforce data is generally managed through the admin portal.' },
      { question: 'Can Workforce Analytics summarize trends relevant to a decision?', answer: 'Yes -- that is one of its core purposes, summarizing trends rather than requiring a manual review of raw data.' },
      { question: 'Is this suited to recurring reviews or only one-off decisions?', answer: 'Both -- the same data and reports can support a recurring review process or a single, specific decision.' },
      { question: 'What is a reasonable way to present this data to stakeholders?', answer: 'A short summary of relevant trends, generated through AI reports, tends to be more useful in a meeting than raw activity logs.' },
    ],
    related: ['how-to-turn-raw-activity-data-into-decisions', 'how-to-build-an-operational-visibility-dashboard-for-leadership', 'how-to-identify-inefficient-workflows-with-activity-data'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'Where activity trends get summarized for a decision.', href: '/ai-analytics' },
      { title: 'Use Cases', description: 'Broader examples of activity data informing decisions.', href: '/use-cases' },
    ],
  },
  {
    slug: 'how-to-build-an-operational-visibility-dashboard-for-leadership',
    title: 'How to Build an Operational Visibility Dashboard for Leadership',
    cluster: 'operational-business-decision',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'How to assemble a leadership-facing operational view that stays at the right altitude without individual-level detail.',
    intro:
      "A dashboard built for a manager's day-to-day and one built for leadership shouldn't look the same -- leadership generally needs the altitude of an organization-wide trend, not the detail of an individual's activity log. This guide is about assembling that higher-level view deliberately, rather than just handing leadership the same reports a manager uses.",
    howItWorksNote: 'AI reports and workforce analytics can be framed at an organization-wide level, and the admin portal can scope exactly what each leader sees.',
    features: ['workforceAnalytics', 'aiReports', 'adminPortal', 'workforceVisibility'],
    privacy: false,
    benefits: [
      'A dashboard framed at the right altitude for leadership, not team-level detail',
      'Access scoped per leader through the admin portal',
      'Built from existing reporting rather than a custom tool built from scratch',
    ],
    useCases: [
      { title: 'Monthly Leadership Reviews', description: 'Assemble an organization-level view for a recurring leadership meeting.' },
      { title: 'Onboarding a New Executive', description: 'Give a new leader a scoped, high-level view without exposing individual-level detail.' },
    ],
    faq: [
      { question: 'What should a leadership-facing dashboard actually include?', answer: 'Generally organization or department-level trends from workforce analytics and AI reports, rather than individual-level activity detail.' },
      { question: 'Does this require building custom reports from scratch?', answer: 'No -- it typically involves framing existing AI reports and workforce analytics at the right level, rather than building something new.' },
      { question: 'Can Admin Portal control which leaders see which data?', answer: 'Yes -- access can be scoped per role or department through the admin portal.' },
      { question: 'How often should a leadership dashboard be updated?', answer: 'That depends on the organization\'s reporting cadence -- monthly or quarterly is common for leadership-level reviews.' },
      { question: 'Is this different from the reports a manager reviews day to day?', answer: 'Yes -- a manager\'s view is typically team-scoped and more frequent; a leadership view is broader and less granular.' },
      { question: 'Can AI Reports feed directly into a leadership summary?', answer: 'Yes -- AI reports is designed to produce summaries that can be framed for a leadership audience.' },
      { question: 'Should a leadership dashboard show individual-level detail?', answer: 'Generally not -- keeping it at a department or organization level tends to be more appropriate for this audience.' },
      { question: 'Can this dashboard be scoped to specific departments for different leaders?', answer: 'Yes -- the admin portal allows access to be scoped so different leaders can see the departments relevant to them.' },
    ],
    related: ['how-to-get-operational-visibility-across-departments', 'how-to-support-business-decisions-with-activity-data', 'how-companies-make-staffing-decisions-with-workforce-data'],
    externalLinks: [
      { title: 'Admin Portal', description: 'Where leadership access and scoping is configured.', href: '/admin' },
      { title: 'AI Reports & Workforce Analytics', description: 'The reporting layer behind a leadership dashboard.', href: '/ai-analytics' },
    ],
  },
  {
    slug: 'how-to-identify-inefficient-workflows-with-activity-data',
    title: 'How to Identify Inefficient Workflows With Activity Data',
    cluster: 'operational-business-decision',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'How to spot friction in a workflow by reading activity patterns, as a starting point for a closer look.',
    intro:
      "Inefficiency in a workflow rarely shows up as one obvious problem -- it tends to show up as a pattern: recurring delays, activity concentrated in odd places, a step that consistently takes longer than it seems like it should. This guide is about using activity data to spot that kind of pattern, as a starting point for investigating further rather than a finished diagnosis.",
    howItWorksNote: 'Behaviour intelligence and workforce analytics can surface recurring activity patterns that may point to friction in a workflow, worth a closer look.',
    features: ['employeeActivity', 'workforceAnalytics', 'aiReports', 'behaviourIntelligence'],
    privacy: false,
    benefits: [
      'A way to spot a recurring pattern rather than relying on anecdote alone',
      'A starting point for investigating a workflow, not a finished diagnosis',
      'Summaries that can help concentrate attention on where time is going',
    ],
    useCases: [
      { title: 'Reviewing a Recurring Bottleneck', description: 'Look at activity data around a step in a workflow that seems to slow things down consistently.' },
      { title: 'Comparing Similar Teams', description: 'Notice when one team\'s workflow pattern looks meaningfully less efficient than a comparable team\'s.' },
    ],
    faq: [
      { question: 'What does "inefficient" look like in activity data?', answer: 'Often a recurring pattern -- activity concentrated around a particular step, or a consistent delay -- rather than a single obviously broken process.' },
      { question: 'Can this pinpoint a specific step in a workflow, or only general patterns?', answer: 'It tends to surface general patterns; pinpointing an exact step usually requires following up with a closer, more direct review.' },
      { question: 'Does this require comparing similar teams doing similar work?', answer: 'A comparison can help, since a pattern that looks unusual in isolation may look more or less normal next to a comparable team.' },
      { question: 'Can Behaviour Intelligence highlight a recurring bottleneck?', answer: 'It can surface recurring activity patterns; a closer, direct review shows whether a given pattern reflects a genuine bottleneck.' },
      { question: 'Is this useful for one team or across a whole department?', answer: 'It can work at either level -- workforce analytics can be scoped to a single team or rolled up more broadly.' },
      { question: 'What is a reasonable first step after spotting an inefficiency?', answer: 'Usually a closer, direct review of the specific step or process flagged, rather than acting on the pattern alone.' },
      { question: 'Can AI Reports summarize where time is concentrated?', answer: 'Yes -- AI reports can help summarize where activity tends to concentrate, which is a useful starting signal.' },
      { question: 'Does identifying inefficiency require detailed screenshots?', answer: 'No -- this kind of pattern analysis is based on activity signals, separate from screenshot monitoring.' },
    ],
    related: ['how-companies-gain-visibility-into-project-progress', 'how-to-turn-raw-activity-data-into-decisions', 'how-to-support-business-decisions-with-activity-data'],
    externalLinks: [
      { title: 'Employee Activity Monitoring', description: 'The activity data behind workflow pattern analysis.', href: '/activity' },
      { title: 'AI Reports & Workforce Analytics', description: 'Where activity concentration is summarized.', href: '/ai-analytics' },
    ],
  },
  {
    slug: 'how-to-turn-raw-activity-data-into-decisions',
    title: 'How to Turn Raw Activity Data Into Decisions',
    cluster: 'operational-business-decision',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'How to move from raw workforce activity data to an actual decision, without stalling out at the reporting stage.',
    intro:
      "It's possible to have plenty of activity data and still not make a decision -- the gap between having numbers and deciding what to do about them is a real one. This guide is about closing that gap: summarizing raw data into something reviewable, and then treating the review as a step toward an actual decision, not the end point.",
    howItWorksNote: 'AI reports can summarize raw activity and workforce data into a form that is easier to review, which can help move a data review toward an actual decision.',
    features: ['aiReports', 'employeeActivity', 'workforceAnalytics', 'managerWorkspace'],
    privacy: false,
    benefits: [
      'A way to close the gap between having data and making a decision',
      'Summaries that make raw activity data reviewable rather than overwhelming',
      'A repeatable process rather than a one-off analysis',
    ],
    useCases: [
      { title: 'Turning a Monthly Report Into an Action', description: 'Use a summarized report as the basis for one specific decision, rather than just filing it away.' },
      { title: 'Structuring a Decision-Making Meeting', description: 'Bring a summary of relevant data into a meeting specifically framed around deciding something.' },
    ],
    faq: [
      { question: 'What is the gap between having data and making a decision?', answer: "Having data available doesn't automatically produce a decision -- someone still has to review it, interpret it, and decide what action, if any, it suggests." },
      { question: 'Can AI Reports do the work of turning data into a recommendation?', answer: "AI reports can help summarize and highlight trends, which supports the decision-making process, but the decision itself still rests with the people reviewing it." },
      { question: 'Should raw activity data be reviewed before or after a decision is proposed?', answer: 'Generally before -- reviewing the summarized data first tends to lead to a better-grounded proposal than working backward from a decision already made.' },
      { question: 'Who should be involved in turning data into an actual decision?', answer: 'That depends on the decision\'s scope -- a manager for team-level calls, or broader stakeholders for organization-wide ones.' },
      { question: 'Can Workforce Analytics highlight what matters most in the data?', answer: 'Yes -- it is designed to surface trends rather than leave a reviewer to sort through raw activity logs.' },
      { question: 'Is this a one-time process or a repeatable habit?', answer: 'It works best as a repeatable habit -- reviewing data regularly tends to produce more timely decisions than a one-off analysis.' },
      { question: 'Does this apply equally to small and large decisions?', answer: 'The same basic process applies to both, though larger decisions typically warrant a more thorough review before acting.' },
      { question: 'What is a reasonable way to document the decision once it is made?', answer: 'Recording the summary that informed the decision, alongside the decision itself, tends to be useful for future reference.' },
    ],
    related: ['how-to-support-business-decisions-with-activity-data', 'how-to-build-a-clearer-picture-of-a-typical-workday', 'how-to-identify-inefficient-workflows-with-activity-data'],
    externalLinks: [
      { title: 'AI Reports & Workforce Analytics', description: 'The summarization layer that supports decision-making.', href: '/ai-analytics' },
      { title: 'Manager Workspace', description: 'Where a manager reviews data before acting on it.', href: '/manager' },
    ],
  },
]

export const productivityCluster = {
  key: 'productivity',
  basePath: '/productivity',
  badgeLabel: 'Productivity Playbook',
  hubTitle: 'Workforce Productivity Playbook',
  hubDescription:
    'Problem-framed "how to" pages on gaining time, work-pattern, task and operational visibility.',
  hubMetaDescription:
    'Practical how-to guidance on workforce time, work-pattern, task-completion and operational visibility.',
  groups: PRODUCTIVITY_GROUPS,
  pages: PRODUCTIVITY_PAGES,
  // The hub page had no FAQ section. Reused verbatim from this cluster's own
  // 'how-to-get-visibility-into-remote-work-hours' page (same array reference, not a copy) rather than writing new
  // questions -- already-verified, on-topic content for this cluster.
  faq: PRODUCTIVITY_PAGES.find((page) => page.slug === 'how-to-get-visibility-into-remote-work-hours').faq,
  crossLinks: [
    { label: 'Learning Center', href: '/learning' },
    { label: 'AI Reports & Workforce Analytics', href: '/ai-analytics' },
    { label: 'Manager Workspace', href: '/manager' },
    { label: 'Workforce Insights', href: '/workforce-insights' },
  ],
}
