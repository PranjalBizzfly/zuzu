import {
  ClockIcon,
  ActivityIcon,
  CameraIcon,
  SparklesIcon,
  BarChartIcon,
  LayersIcon,
  UsersIcon,
  SettingsIcon,
  ShieldIcon,
  MonitorIcon,
  EyeIcon,
  GlobeIcon,
} from '../components/ui/icons'

/*
  Structured content for the ZUZU "platform" SEO cluster (Phase 04).
  20 keyword-intent pages sharing one ProductPage template -- adding a
  page here is the only step needed to publish it; nothing is
  hand-duplicated in components. Copy is written to be genuinely
  distinct per page (unique angle, not a find/replace of the same
  paragraph), while features are drawn from a shared library since the
  underlying capabilities they describe are the same across pages.
*/

export const FEATURE_LIBRARY = {
  timeAttendance: {
    icon: ClockIcon,
    title: 'Time & Attendance',
    description: 'Clock-ins, hours and attendance in one place.',
    href: '/product/time-attendance',
  },
  employeeActivity: {
    icon: ActivityIcon,
    title: 'Employee Activity',
    description: 'Activity across apps, sites and tasks.',
    href: '/product/employee-activity',
  },
  screenshotMonitoring: {
    icon: CameraIcon,
    title: 'Screenshot Monitoring',
    description: 'Visual context alongside activity data.',
    href: '/screenshot-privacy/screenshot-monitoring',
  },
  aiReports: {
    icon: SparklesIcon,
    title: 'AI Reports',
    description: 'AI-assisted reporting for managers and admins.',
    href: '/product/ai-reports',
  },
  workforceAnalytics: {
    icon: BarChartIcon,
    title: 'Workforce Analytics',
    description: 'Trends and analytics across your workforce.',
    href: '/product/workforce-analytics',
  },
  behaviourIntelligence: {
    icon: LayersIcon,
    title: 'Behaviour Intelligence',
    description: 'Patterns and behaviour across your teams.',
    href: '/solutions/behaviour-intelligence',
  },
  managerWorkspace: {
    icon: UsersIcon,
    title: 'Manager Workspace',
    description: 'Day-to-day tools for team managers.',
    href: '/product/manager-workspace',
  },
  adminPortal: {
    icon: SettingsIcon,
    title: 'Admin Portal',
    description: 'Centralized administration and controls.',
    href: '/product/admin-portal',
  },
  privacyControls: {
    icon: ShieldIcon,
    title: 'Privacy Controls',
    description: "Configurable controls over what's monitored.",
    href: '/security',
  },
  windowsAgent: {
    icon: MonitorIcon,
    title: 'Windows Agent',
    description: 'The ZUZU agent for Windows devices.',
    href: '/windows-agent',
  },
  workforceVisibility: {
    icon: EyeIcon,
    title: 'Workforce Visibility',
    description: 'A clear view across your workforce.',
    href: '/solutions/workforce-visibility',
  },
  remoteHybrid: {
    icon: GlobeIcon,
    title: 'Remote & Hybrid Support',
    description: 'Visibility for distributed and hybrid teams.',
    href: '/solutions/remote-workforce',
  },
}

export const CLUSTERS = [
  { key: 'monitoring', label: 'Monitoring' },
  { key: 'management', label: 'Productivity & Management' },
  { key: 'tracking', label: 'Activity & Time Tracking' },
  { key: 'intelligence', label: 'Visibility & Intelligence' },
  { key: 'analytics', label: 'Analytics & Reporting' },
]

export const PRODUCT_PAGES = [
  {
    slug: 'workforce-monitoring-software',
    title: 'ZUZU Workforce Monitoring Software',
    cluster: 'monitoring',
    metaDescription:
      'ZUZU workforce monitoring software combines activity, attendance and AI reports into one monitoring layer for managers and admins.',
    intro:
      "ZUZU workforce monitoring software gives managers and admins visibility into how work happens across their organization. It combines activity data, attendance and AI-generated reports into a single monitoring layer.",
    howItWorksNote: 'Monitoring starts at the device, through the Windows agent, and ends as a report a manager can actually use.',
    features: ['employeeActivity', 'screenshotMonitoring', 'timeAttendance', 'privacyControls'],
    privacy: true,
    faq: [
      {
        question: 'What does ZUZU workforce monitoring software track?',
        answer:
          "It tracks employee activity, attendance and screen context through the Windows agent, subject to the privacy controls an admin configures.",
      },
      {
        question: 'Is ZUZU workforce monitoring visible to employees?',
        answer: 'Visibility depends on how an admin configures privacy controls for the organization.',
      },
      {
        question: 'What screenshot interval does ZUZU workforce monitoring use?',
        answer: 'Admins can set capture anywhere from 1 to 5 minutes or a custom interval; organizations control screenshot retention (90 days by default) themselves.',
      },
      {
        question: 'Does ZUZU redact sensitive content before a screenshot is stored?',
        answer: 'Yes, private regions like passwords, banking, webmail, messaging apps, password managers and desktop notifications are redacted on-device before anything is stored or uploaded.',
      },
      {
        question: 'Does workforce monitoring run on personal laptops the same way as company devices?',
        answer: "On a personal laptop, tracking is consent-gated and only active between punch-in and punch-out, through a short-lived permission the agent has to keep renewing, it isn't running continuously in the background.",
      },
      {
        question: 'Is workforce monitoring data secured with anything beyond a login password?',
        answer: 'Admin and manager accounts support two-factor authentication, and the admin portal keeps an audit trail of account and policy activity.',
      },
      {
        question: 'Can workforce monitoring data be pulled out of ZUZU for another system?',
        answer: 'Activity and attendance data can be exported as CSV, Excel or PDF; ZUZU does not integrate directly with payroll, CRM or other third-party software.',
      },
      {
        question: 'Does ZUZU monitor devices other than Windows PCs?',
        answer: 'No, the monitoring agent is Windows-only. ZUZU does not offer a macOS or Linux agent, and it does not track GPS or physical location.',
      },
    ],
    related: ['employee-monitoring-software', 'remote-workforce-monitoring', 'desktop-activity-monitoring'],
  },
  {
    slug: 'employee-monitoring-software',
    title: 'Employee Monitoring Software',
    cluster: 'monitoring',
    metaDescription:
      'Employee monitoring software from ZUZU pairs activity tracking with AI reports, governed by configurable privacy controls.',
    intro:
      "Employee monitoring software helps organizations understand how individual employees spend their working time. ZUZU pairs activity tracking with AI reports so monitoring data turns into something managers can actually act on.",
    howItWorksNote: 'Activity is captured on the device and organized by role, so managers and admins see only what they need to.',
    features: ['employeeActivity', 'timeAttendance', 'aiReports', 'privacyControls'],
    privacy: true,
    faq: [
      {
        question: 'How is employee monitoring different from surveillance?',
        answer: "ZUZU's privacy controls let admins define what's monitored and how, rather than capturing everything by default.",
      },
      {
        question: 'Who can see employee monitoring data in ZUZU?',
        answer: 'Access is managed through the manager workspace and admin portal, based on each organization\'s configuration.',
      },
      {
        question: "How is ZUZU installed on an employee's computer?",
        answer: 'An admin or employee downloads the roughly 80 MB installer, runs it, and enters a 16-character activation code during setup; after that the agent runs quietly from the system tray.',
      },
      {
        question: "What happens if an employee's laptop is offline?",
        answer: 'The agent queues captured activity locally and syncs it once the device reconnects, so nothing needs to be recaptured.',
      },
      {
        question: 'Does ZUZU update itself?',
        answer: "Yes, the agent receives updates automatically from the organization's release feed rather than requiring manual reinstalls.",
      },
      {
        question: 'Does ZUZU tell managers whether an employee is about to quit?',
        answer: "No, ZUZU does not predict turnover or attrition; behaviour intelligence only flags changes from an individual's own activity baseline as a prompt for a conversation.",
      },
      {
        question: 'Is there a trial before committing to employee monitoring software?',
        answer: 'Yes, ZUZU offers a 7-day free trial for up to 10 employees, with no card required.',
      },
      {
        question: 'Does employee monitoring cover contractors as well as full-time staff?',
        answer: "ZUZU tracks whoever the agent is installed and activated for; it doesn't distinguish employment type on its own, that's an organization's own admin decision.",
      },
    ],
    related: ['workforce-monitoring-software', 'employee-activity-tracking-software', 'remote-workforce-monitoring'],
  },
  {
    slug: 'employee-productivity-software',
    title: 'Employee Productivity Software',
    cluster: 'management',
    metaDescription:
      'ZUZU employee productivity software combines activity data and behaviour intelligence to show how work actually gets done.',
    intro:
      "Employee productivity software looks at how work gets done, not just how long someone is logged in. ZUZU combines employee activity and behaviour intelligence to help managers understand productivity patterns across a team.",
    howItWorksNote: 'Activity and behaviour data are combined into AI reports that a manager can review without extra spreadsheets.',
    features: ['employeeActivity', 'behaviourIntelligence', 'aiReports', 'managerWorkspace'],
    privacy: false,
    faq: [
      {
        question: 'Does ZUZU measure productivity automatically?',
        answer: 'ZUZU surfaces activity and behaviour patterns through AI reports; managers interpret what productivity means for their team.',
      },
      {
        question: 'Can managers see productivity trends over time?',
        answer: 'Yes, through workforce analytics and AI reports in the manager workspace.',
      },
      {
        question: "Does ZUZU's productivity software score or rank employees?",
        answer: "ZUZU includes a productivity score, informed by role context that describes what each role is expected to do. AI reports and behaviour intelligence surface activity and pattern data for managers to interpret rather than ranking employees.",
      },
      {
        question: 'How does Behaviour Intelligence decide what counts as unusual?',
        answer: "It compares an employee's activity against their own historical baseline, not a generic rule tied to their job title, and routes flagged changes to a review queue rather than automatically flagging the employee.",
      },
      {
        question: 'Can ZUZU forecast burnout as part of productivity insights?',
        answer: "Yes, the wellbeing & burnout forecast projects risk from working-hour patterns like long days, weekend work and late-night activity, with a weeks-to-risk estimate when a trend is rising; it's framed as a forecast, not a performance measure.",
      },
      {
        question: 'Does productivity software guarantee output will increase?',
        answer: 'No, ZUZU does not guarantee productivity or revenue gains; it provides activity and behaviour data for managers to interpret.',
      },
      {
        question: "Can a manager only see their own team's productivity data?",
        answer: "Yes, the manager workspace is scoped to a manager's own assigned team; managers can't see employees outside their teams.",
      },
      {
        question: 'How often is a productivity-relevant AI Report generated?',
        answer: 'One AI report is generated per employee per day, browsable by year, month or day, with PDF downloads available.',
      },
    ],
    related: ['team-productivity-monitoring', 'employee-work-analytics', 'workforce-management-software'],
  },
  {
    slug: 'workforce-management-software',
    title: 'Workforce Management Software',
    cluster: 'management',
    metaDescription:
      'ZUZU workforce management software brings attendance, activity and reporting together under one admin portal.',
    intro:
      "Workforce management software brings attendance, activity and reporting together so admins can run day-to-day operations from one place. ZUZU's admin portal centralizes those controls for the whole organization.",
    howItWorksNote: 'Admins configure policy once in the admin portal; managers work from the same data in their own workspace.',
    features: ['timeAttendance', 'adminPortal', 'managerWorkspace', 'workforceAnalytics'],
    privacy: false,
    faq: [
      {
        question: 'What does ZUZU workforce management software include?',
        answer: 'Time & attendance, manager workspace and admin portal, backed by workforce analytics.',
      },
      {
        question: 'Can workforce management settings be customized per team?',
        answer: 'Admins configure settings for the organization through the admin portal.',
      },
      {
        question: 'What does the Admin Portal actually control?',
        answer: "It's the central control point for employees, teams, managers, monitoring policies, reports, security settings, audit activity, API keys and other org-wide settings.",
      },
      {
        question: 'Does ZUZU workforce management include payroll processing?',
        answer: 'No, ZUZU does not process payroll or integrate with payroll or accounting software; it provides attendance and activity data an organization can reference alongside its own payroll process.',
      },
      {
        question: 'Can admins see a log of who changed what in the system?',
        answer: 'Yes, the admin portal includes audit trails covering categories like employee, team, manager, shift, leave, report, payment, live-capture and organisation events, with severity filtering and a timeline view.',
      },
      {
        question: 'Is there a separate log for API key activity?',
        answer: 'Yes, ZUZU has a dedicated API key logs feature for tracking API key usage specifically.',
      },
      {
        question: 'How is workforce management priced?',
        answer: 'Pricing is confirmed by employee headcount at checkout, after a 7-day free trial for up to 10 employees with no card required.',
      },
      {
        question: 'Can workforce management policy differ from team to team?',
        answer: "Admins configure monitoring policy centrally in the admin portal; managers then work within that policy for their own team in the manager workspace.",
      },
    ],
    related: ['digital-workforce-management', 'team-productivity-monitoring', 'workforce-reporting-platform'],
  },
  {
    slug: 'employee-activity-tracking-software',
    title: 'Employee Activity Tracking Software',
    cluster: 'tracking',
    metaDescription:
      'ZUZU employee activity tracking software captures apps, sites and tasks through the Windows agent and turns them into structured data.',
    intro:
      "Employee activity tracking software captures what happens during the workday, the apps, sites and tasks that make up someone's work. ZUZU's Windows agent collects this activity and turns it into structured data for managers.",
    howItWorksNote: 'The Windows agent records activity locally, then syncs it into a structured timeline for managers and admins.',
    features: ['employeeActivity', 'windowsAgent', 'screenshotMonitoring', 'privacyControls'],
    privacy: true,
    faq: [
      {
        question: 'How does ZUZU track employee activity?',
        answer: 'Through the Windows agent installed on employee devices.',
      },
      {
        question: 'Can employees see their own activity data?',
        answer: 'That depends on how an organization configures access in the admin portal.',
      },
      {
        question: 'What exactly does the Windows Agent capture?',
        answer: 'It captures activity, attendance, application usage and screenshots from the system tray on Windows devices.',
      },
      {
        question: 'Can activity tracking see inside a password manager or banking site?',
        answer: 'No, those are private regions the agent redacts on-device before any screenshot is stored or uploaded, alongside webmail, messaging apps and desktop notifications.',
      },
      {
        question: 'Does activity tracking work if an employee is offline for part of the day?',
        answer: 'Yes, captures are queued locally on the device while offline and sync once the connection returns.',
      },
      {
        question: 'How large is the activity tracking installer?',
        answer: 'The Windows agent installer is about 80 MB and is set up with a 16-character activation code.',
      },
      {
        question: 'Does ZUZU activity tracking integrate with project management tools to show task assignment?',
        answer: 'No, ZUZU does not integrate with project management, CRM or similar third-party software; it reports on activity and attendance captured directly on the device.',
      },
      {
        question: 'Can activity tracking data be downloaded as a report?',
        answer: 'Yes, activity data feeds into AI reports with PDF downloads, and can also be exported as CSV or Excel.',
      },
    ],
    related: ['workplace-activity-intelligence', 'work-time-tracking-software', 'desktop-activity-monitoring'],
  },
  {
    slug: 'work-time-tracking-software',
    title: 'Work Time Tracking Software',
    cluster: 'tracking',
    metaDescription:
      'ZUZU work time tracking software keeps attendance consistent across on-site, remote and hybrid teams.',
    intro:
      "Work time tracking software records when work starts, stops and pauses across a team. ZUZU's time & attendance feature keeps that record consistent, whether teams work on-site, remote or hybrid.",
    howItWorksNote: 'Attendance is logged automatically by the Windows agent rather than relying on manual clock-ins.',
    features: ['timeAttendance', 'employeeActivity', 'remoteHybrid', 'aiReports'],
    privacy: false,
    faq: [
      {
        question: 'Does ZUZU work time tracking support remote teams?',
        answer: 'Yes, time & attendance works the same way for remote, hybrid and in-office teams.',
      },
      {
        question: 'Can time tracking data feed into reports?',
        answer: 'Yes, time & attendance data feeds into AI reports for managers.',
      },
      {
        question: 'Does work time tracking require employees to manually clock in?',
        answer: 'No, attendance is logged automatically by the Windows agent rather than relying on manual clock-ins.',
      },
      {
        question: 'Does time tracking work the same for a hybrid schedule as a fully remote one?',
        answer: "Yes, time & attendance behaves the same regardless of whether someone is on-site, hybrid or fully remote; there's no separate remote mode to configure.",
      },
      {
        question: 'Can time tracking data be reviewed as a daily report?',
        answer: 'Yes, one AI report is generated per employee per day, viewable by year, month or day, with PDF downloads and optional email digests.',
      },
      {
        question: 'Does work time tracking track how long someone spends on a specific client or project?',
        answer: "No, ZUZU records time and activity on the device; it doesn't track project or client-specific assignment.",
      },
      {
        question: 'Is time tracking data available to export for payroll reference?',
        answer: 'Time & attendance data can be exported as CSV, Excel or PDF, but ZUZU does not process payroll itself or integrate with payroll systems.',
      },
      {
        question: 'What happens to work time tracking if a laptop goes offline mid-shift?',
        answer: 'The agent queues attendance and activity data locally and syncs it once the device is back online, so the record stays intact.',
      },
    ],
    related: ['employee-time-tracking-software', 'workforce-reporting-platform', 'remote-workforce-monitoring'],
  },
  {
    slug: 'employee-time-tracking-software',
    title: 'Employee Time Tracking Software',
    cluster: 'tracking',
    metaDescription:
      'ZUZU employee time tracking software logs clock-ins and hours automatically through the Windows agent.',
    intro:
      "Employee time tracking software gives each team member a consistent, automatic attendance record. ZUZU logs clock-ins and hours through the Windows agent, so managers aren't relying on manual timesheets.",
    howItWorksNote: 'Each employee\'s hours are captured automatically and rolled up for managers in one workspace.',
    features: ['timeAttendance', 'windowsAgent', 'managerWorkspace', 'aiReports'],
    privacy: false,
    faq: [
      {
        question: 'Is employee time tracking automatic in ZUZU?',
        answer: 'Yes, attendance is captured through the Windows agent rather than manual entry.',
      },
      {
        question: 'Where do managers review time tracking data?',
        answer: 'In the manager workspace, alongside activity and reports.',
      },
      {
        question: "How does the Windows Agent know when an employee's day starts?",
        answer: 'It captures attendance automatically from the system tray once the agent is running, rather than requiring a manual punch-in step.',
      },
      {
        question: "Can a manager see time tracking for employees outside their own team?",
        answer: "No, the manager workspace is scoped to a manager's assigned team; they can't view attendance for employees outside it.",
      },
      {
        question: 'Is there a limit to how far back time tracking reports go?',
        answer: 'AI reports are browsable by year, month and day, so historical attendance can be reviewed rather than only the current period.',
      },
      {
        question: 'Does employee time tracking apply differently to seasonal or contract staff?',
        answer: 'No, the same Windows agent and time & attendance capability apply to any employee it is installed for, regardless of employment type.',
      },
      {
        question: 'How is a new employee added to time tracking?',
        answer: 'An admin adds them in the admin portal, and the employee installs the roughly 80 MB Windows agent and activates it with a 16-character code.',
      },
      {
        question: 'Does ZUZU guarantee time tracking accuracy for compliance purposes?',
        answer: 'ZUZU does not hold or claim specific compliance certifications; it provides an automatic attendance record an organization can use as it sees fit.',
      },
    ],
    related: ['work-time-tracking-software', 'workforce-management-software', 'employee-productivity-software'],
  },
  {
    slug: 'workforce-visibility-platform',
    title: 'Workforce Visibility Platform',
    cluster: 'intelligence',
    metaDescription:
      'ZUZU is a workforce visibility platform bringing activity, attendance and AI reports into one view for leaders.',
    intro:
      "A workforce visibility platform gives leaders a clear picture of how their organization actually works, beyond what status updates or check-ins can show. ZUZU brings activity, attendance and AI reports into one visibility layer.",
    howItWorksNote: 'Visibility is built up from the same activity and attendance data used across the rest of ZUZU.',
    features: ['workforceVisibility', 'employeeActivity', 'aiReports', 'workforceAnalytics'],
    privacy: true,
    faq: [
      {
        question: 'What makes ZUZU a workforce visibility platform?',
        answer: 'It combines activity, attendance and AI reports into a single view for managers and admins.',
      },
      {
        question: 'Does visibility come at the cost of employee privacy?',
        answer: "ZUZU's privacy controls let admins balance visibility with employee trust.",
      },
      {
        question: "What does 'organisation health' mean in ZUZU's visibility platform?",
        answer: 'It is part of workforce analytics, a rollup view that includes executive highlights, department benchmarking and recommendations tied to specific observations.',
      },
      {
        question: 'Does workforce visibility include a burnout indicator?',
        answer: 'Yes, workforce analytics includes a wellbeing & burnout forecast with a weeks-to-risk estimate for employees on a rising-risk trend, framed as a forecast rather than a performance measure.',
      },
      {
        question: 'How far up the organisation can visibility data be seen?',
        answer: "Admins get organisation-wide visibility through the admin portal; each manager's visibility in the manager workspace is limited to their own assigned team.",
      },
      {
        question: 'Does visibility require employees to self-report their status?',
        answer: 'No, visibility is built from data the Windows agent captures automatically, not self-reported updates.',
      },
      {
        question: 'Can visibility data be shared outside ZUZU, like in a board deck?',
        answer: 'Yes, reports and analytics can be exported as CSV, Excel or PDF, and organisation-wide or manager-specific digests can be sent by email.',
      },
      {
        question: 'Does workforce visibility extend to non-Windows devices?',
        answer: "No, visibility is built from the Windows agent, so devices running macOS or Linux aren't covered.",
      },
    ],
    related: ['ai-workforce-intelligence-platform', 'employee-performance-insights', 'workforce-analytics-software'],
  },
  {
    slug: 'ai-workforce-intelligence-platform',
    title: 'AI Workforce Intelligence Platform',
    cluster: 'intelligence',
    metaDescription:
      'ZUZU is an AI workforce intelligence platform that turns activity and attendance data into insight through AI reports and behaviour intelligence.',
    intro:
      "An AI workforce intelligence platform applies AI to workforce data so patterns don't stay buried in raw logs. ZUZU's AI reports and behaviour intelligence turn activity and attendance data into insight for managers and admins.",
    howItWorksNote: 'AI reports and behaviour intelligence process the same underlying activity data into something readable.',
    features: ['aiReports', 'behaviourIntelligence', 'workforceAnalytics', 'privacyControls'],
    privacy: true,
    faq: [
      {
        question: 'How does ZUZU use AI in workforce intelligence?',
        answer: 'AI reports and behaviour intelligence process activity and attendance data into structured insight.',
      },
      {
        question: 'Is AI workforce intelligence only for large enterprises?',
        answer: "ZUZU's platform is built to scale from smaller teams to enterprise organizations.",
      },
      {
        question: 'Does ZUZU\'s AI diagnose burnout?',
        answer: 'No, it does not diagnose burnout clinically. The wellbeing & burnout forecast projects risk from working-hour patterns and is meant to prompt a conversation, not to rank or diagnose anyone.',
      },
      {
        question: 'Does the AI predict which employees are about to leave?',
        answer: "No, ZUZU does not predict turnover or attrition; behaviour intelligence only flags activity changes from an individual's own baseline.",
      },
      {
        question: 'What does an AI Report actually recommend?',
        answer: 'Recommendations are tied to the specific observation behind them, for example a pattern in activity or hours, rather than offering generic advice.',
      },
      {
        question: 'Is behaviour intelligence based on generic rules for a given job title?',
        answer: "No, it detects change from an individual's own established baseline, not rules applied uniformly across a role or title.",
      },
      {
        question: 'How does privacy factor into AI workforce intelligence?',
        answer: 'Privacy controls govern what is captured and redacted before AI processing ever sees it, for example, private regions like passwords and banking screens are redacted on-device first.',
      },
      {
        question: 'Does flagged behaviour go straight to a manager automatically?',
        answer: 'Flagged activity routes to a review queue rather than being pushed automatically to a manager as an alert.',
      },
    ],
    related: ['workday-intelligence-platform', 'workforce-visibility-platform', 'workforce-analytics-software'],
  },
  {
    slug: 'employee-performance-insights',
    title: 'Employee Performance Insights',
    cluster: 'intelligence',
    metaDescription:
      'ZUZU employee performance insights summarize activity, attendance and behaviour data inside the manager workspace.',
    intro:
      "Employee performance insights turn scattered activity and attendance data into something a manager can review in minutes. ZUZU's AI reports summarize performance-relevant signals inside the manager workspace.",
    howItWorksNote: 'Signals from activity, attendance and behaviour data are summarized automatically, ready for a 1:1.',
    features: ['aiReports', 'managerWorkspace', 'behaviourIntelligence', 'workforceAnalytics'],
    privacy: false,
    faq: [
      {
        question: 'What data feeds into employee performance insights?',
        answer: 'Activity, attendance and behaviour data, summarized through AI reports.',
      },
      {
        question: 'Who can access performance insights?',
        answer: 'Managers and admins, through the manager workspace and admin portal.',
      },
      {
        question: 'Are performance insights based on a productivity score?',
        answer: "ZUZU includes a productivity score. AI reports summarize activity, attendance and behaviour signals for a manager to interpret.",
      },
      {
        question: "Can performance insights flag a change in someone's work pattern?",
        answer: "Yes, behaviour intelligence compares activity against an individual's own baseline and routes meaningful changes to a review queue as a conversation prompt.",
      },
      {
        question: 'Do performance insights include department-level comparisons?',
        answer: 'Yes, workforce analytics includes department benchmarking alongside individual-level insight.',
      },
      {
        question: 'Can performance insight data be used to predict who might quit?',
        answer: 'No, ZUZU does not predict turnover or attrition; it surfaces activity-pattern changes, not predictions about future employee decisions.',
      },
      {
        question: 'Who beyond a direct manager can see performance insights?',
        answer: "Managers see their own team through the manager workspace; admins have organisation-wide access through the admin portal.",
      },
      {
        question: 'Are performance insight reports available as downloadable files?',
        answer: 'Yes, AI reports can be downloaded as PDFs, and broader data can be exported as CSV or Excel.',
      },
    ],
    related: ['workforce-visibility-platform', 'employee-work-analytics', 'team-productivity-monitoring'],
  },
  {
    slug: 'remote-workforce-monitoring',
    title: 'Remote Workforce Monitoring',
    cluster: 'monitoring',
    metaDescription:
      'ZUZU remote workforce monitoring gives distributed teams the same visibility as an in-office team, wherever they log in from.',
    intro:
      "Remote workforce monitoring gives distributed teams the same visibility as an in-office team. ZUZU's Windows agent works the same way regardless of where an employee is logging in from.",
    howItWorksNote: "Because monitoring runs on the device itself, it doesn't depend on being on a company network.",
    features: ['employeeActivity', 'timeAttendance', 'remoteHybrid', 'privacyControls'],
    privacy: true,
    faq: [
      {
        question: 'Does remote workforce monitoring work outside the office network?',
        answer: "Yes, the Windows agent works on any device it's installed on, regardless of network.",
      },
      {
        question: 'How does ZUZU handle privacy for remote monitoring?',
        answer: 'Through the same privacy controls used for any ZUZU deployment.',
      },
      {
        question: 'Does remote monitoring behave differently on a personal laptop than a company one?',
        answer: 'Yes, on a personal laptop, tracking is consent-gated and only runs between punch-in and punch-out, through a short-lived permission the agent must keep renewing.',
      },
      {
        question: 'How does ZUZU confirm a remote employee is actually working?',
        answer: 'Through activity and attendance data captured by the Windows agent, the same way it would for anyone in an office, it does not rely on GPS or physical location.',
      },
      {
        question: 'Does remote monitoring track where in the world an employee is logging in from?',
        answer: 'No, ZUZU does not track GPS or physical location; it only captures activity and attendance on the device.',
      },
      {
        question: 'What happens to remote monitoring data if home internet drops?',
        answer: 'The agent queues captured activity locally and uploads it once the connection is restored.',
      },
      {
        question: "Can a remote employee's manager see monitoring data for people on other teams?",
        answer: 'No, the manager workspace only shows a manager their own assigned team, regardless of where those employees are located.',
      },
      {
        question: 'Does remote monitoring require the employee to be on a company VPN or network?',
        answer: 'No, the Windows agent works directly on the device itself and does not depend on being connected to a company network.',
      },
    ],
    related: ['workforce-monitoring-software', 'desktop-activity-monitoring', 'work-time-tracking-software'],
    externalLinks: [{ title: 'Remote Work Visibility', description: 'The manager-facing view built on this same monitoring capability.', href: '/remote-workforce/remote-work-visibility' }],
  },
  {
    slug: 'desktop-activity-monitoring',
    title: 'Desktop Activity Monitoring',
    cluster: 'monitoring',
    metaDescription:
      'ZUZU desktop activity monitoring captures application and screen context at the device level through the Windows agent.',
    intro:
      "Desktop activity monitoring captures what's happening on an employee's device, the applications, windows and screen context behind their work. ZUZU's Windows agent handles this at the device level.",
    howItWorksNote: 'The Windows agent watches application and window context locally, then reports it upstream.',
    features: ['screenshotMonitoring', 'employeeActivity', 'windowsAgent', 'privacyControls'],
    privacy: true,
    faq: [
      {
        question: 'What does desktop activity monitoring capture?',
        answer: 'Application and activity context, including optional screenshots, through the Windows agent.',
      },
      {
        question: 'Can desktop monitoring settings be adjusted?',
        answer: 'Yes, through privacy controls in the admin portal.',
      },
      {
        question: 'What screenshot interval can be set for desktop activity monitoring?',
        answer: 'Admins can configure anywhere from 1 to 5 minutes, or a custom interval.',
      },
      {
        question: "How long is a desktop screenshot kept before it's deleted?",
        answer: 'The default retention is 90 days, and admins can adjust that window.',
      },
      {
        question: 'Are sensitive apps like password managers captured in desktop screenshots?',
        answer: 'No, those private regions are redacted on-device before a screenshot is stored, along with banking, webmail, messaging and desktop notifications.',
      },
      {
        question: 'Does desktop activity monitoring run without the employee installing anything?',
        answer: 'No, it requires installing the roughly 80 MB Windows agent and activating it with a 16-character code; there is no agentless option.',
      },
      {
        question: 'Can desktop monitoring be paused temporarily?',
        answer: "Configuration is handled by admins through privacy controls in the admin portal; ZUZU doesn't prescribe a specific pause policy, that's up to the organization.",
      },
      {
        question: 'Does desktop activity monitoring cover tablets or phones?',
        answer: 'No, the agent only runs on Windows desktop and laptop devices, not tablets or phones.',
      },
    ],
    related: ['employee-activity-tracking-software', 'workforce-monitoring-software', 'remote-workforce-monitoring'],
  },
  {
    slug: 'digital-workforce-management',
    title: 'Digital Workforce Management',
    cluster: 'management',
    metaDescription:
      'ZUZU digital workforce management connects attendance, activity and admin controls into one portal.',
    intro:
      "Digital workforce management replaces spreadsheets and manual check-ins with a connected system. ZUZU ties attendance, activity and admin controls together so digital teams can be managed from one portal.",
    howItWorksNote: 'Every part of the system, attendance included, reports into the same admin portal.',
    features: ['adminPortal', 'timeAttendance', 'managerWorkspace', 'workforceAnalytics'],
    privacy: false,
    faq: [
      {
        question: "What makes workforce management 'digital' in ZUZU?",
        answer: 'Attendance, activity and admin controls run through a connected system rather than manual processes.',
      },
      {
        question: 'Can digital workforce management scale across departments?',
        answer: 'The admin portal is built to manage settings across an entire organization.',
      },
      {
        question: "Can digital workforce management replace a company's existing HR system?",
        answer: 'No, ZUZU does not process payroll or integrate with HR, payroll or accounting software; it provides attendance, activity and analytics data alongside those systems.',
      },
      {
        question: 'How are new managers set up in the system?',
        answer: "Admins create manager accounts and assign teams through the admin portal, which then scopes that manager's workspace to their own team.",
      },
      {
        question: 'Does digital workforce management include a security audit trail?',
        answer: 'Yes, the admin portal logs audit activity across categories like employee, team, manager, shift, leave, report and organisation events, with severity filtering and export.',
      },
      {
        question: 'Are digital workforce management settings applied per employee or per organization?',
        answer: 'Admins set monitoring policy at the organization level through the admin portal; it applies consistently rather than being configured employee by employee.',
      },
      {
        question: 'Can digital workforce management reports be scheduled to arrive automatically?',
        answer: 'Yes, weekly report emails and team daily digests can be set up, alongside on-demand CSV, Excel and PDF exports.',
      },
      {
        question: 'Is two-factor authentication available for admin accounts?',
        answer: 'Yes, ZUZU supports two-factor authentication for account security.',
      },
    ],
    related: ['workforce-management-software', 'team-productivity-monitoring', 'workforce-reporting-platform'],
  },
  {
    slug: 'workday-intelligence-platform',
    title: 'Workday Intelligence Platform',
    cluster: 'intelligence',
    metaDescription:
      'ZUZU workday intelligence platform pulls attendance, activity and AI reports into one picture of how a workday unfolds.',
    intro:
      "A workday intelligence platform looks at the shape of a workday, when work happens, how long tasks take, and where attention goes. ZUZU pulls that picture together from attendance, activity and AI reports.",
    howItWorksNote: 'Attendance and activity data are stitched into a single timeline for each working day.',
    features: ['timeAttendance', 'aiReports', 'workforceAnalytics', 'behaviourIntelligence'],
    privacy: false,
    faq: [
      {
        question: "What does 'workday intelligence' mean in ZUZU?",
        answer: "It's the combined picture of attendance, activity and behaviour across a working day.",
      },
      {
        question: 'Does workday intelligence require extra setup?',
        answer: "It's built from data already captured through time & attendance and employee activity.",
      },
      {
        question: 'Does workday intelligence include a burnout forecast?',
        answer: 'Yes, the wellbeing & burnout forecast is part of workforce analytics, projecting risk from working-hour patterns with a weeks-to-risk estimate when the trend is rising.',
      },
      {
        question: "How does ZUZU determine the shape of someone's workday?",
        answer: 'From attendance and activity data captured continuously by the Windows agent, stitched into a daily timeline rather than self-reported.',
      },
      {
        question: 'Does workday intelligence flag unusual working hours automatically?',
        answer: "Behaviour intelligence compares hours and activity against an individual's own baseline and routes meaningful changes to a review queue, rather than flagging every deviation.",
      },
      {
        question: 'Is workday intelligence available as a daily digest email?',
        answer: 'Yes, organisation-wide or manager-specific email digests can be configured alongside the daily AI report for each employee.',
      },
      {
        question: 'Can workday intelligence data be reviewed a month later?',
        answer: 'Yes, AI reports are browsable by year, month and day, so a specific past workday can still be reviewed.',
      },
      {
        question: 'Does workday intelligence make hiring or firing recommendations?',
        answer: "No, it surfaces patterns and forecasts for managers to interpret; it doesn't make personnel decisions or recommendations of that kind.",
      },
    ],
    related: ['ai-workforce-intelligence-platform', 'workforce-analytics-software', 'employee-work-analytics'],
  },
  {
    slug: 'workforce-analytics-software',
    title: 'Workforce Analytics Software',
    cluster: 'analytics',
    metaDescription:
      'ZUZU workforce analytics software shows trends and patterns across teams, built from activity and attendance data.',
    intro:
      "Workforce analytics software turns raw activity and attendance records into trends leadership can actually use. ZUZU's workforce analytics sits alongside AI reports to show patterns across teams, not just individuals.",
    howItWorksNote: 'Analytics run continuously in the background, ready whenever a manager or admin needs them.',
    features: ['workforceAnalytics', 'aiReports', 'behaviourIntelligence', 'managerWorkspace'],
    privacy: false,
    faq: [
      {
        question: 'What can I see in ZUZU workforce analytics?',
        answer: 'Trends and patterns across your workforce, built from activity, attendance and behaviour data.',
      },
      {
        question: 'Is workforce analytics available at the team or org level?',
        answer: 'Both, analytics can be reviewed through the manager workspace or the admin portal.',
      },
      {
        question: "What's included in ZUZU's workforce analytics beyond basic trends?",
        answer: 'Organisation health, executive highlights, department benchmarking, and a wellbeing & burnout forecast with weeks-to-risk estimates for rising-risk employees.',
      },
      {
        question: 'Does workforce analytics compare departments against each other?',
        answer: 'Yes, department benchmarking is part of workforce analytics.',
      },
      {
        question: 'Are workforce analytics recommendations generic or tied to specific data?',
        answer: 'Each recommendation names the observation behind it rather than offering generic advice.',
      },
      {
        question: 'Can workforce analytics be exported for a leadership meeting?',
        answer: 'Yes, analytics and reports can be exported as CSV, Excel or PDF.',
      },
      {
        question: 'Does workforce analytics use behaviour intelligence to spot pattern changes?',
        answer: "Yes, behaviour intelligence compares activity to an individual's own baseline and surfaces meaningful changes into a review queue that feeds broader analytics.",
      },
      {
        question: 'Is workforce analytics limited to the admin level, or can managers see it too?',
        answer: 'Both, admins see organisation-wide analytics through the admin portal, while managers see analytics scoped to their own team in the manager workspace.',
      },
    ],
    related: ['employee-work-analytics', 'workforce-reporting-platform', 'ai-workforce-intelligence-platform'],
  },
  {
    slug: 'employee-work-analytics',
    title: 'Employee Work Analytics',
    cluster: 'analytics',
    metaDescription:
      'ZUZU employee work analytics shows individual work patterns over time, available directly in the manager workspace.',
    intro:
      "Employee work analytics focuses the same underlying data on the individual level, how one person's work patterns compare over time. ZUZU makes this available to managers without requiring a separate reporting tool.",
    howItWorksNote: "The same activity data behind team analytics can be viewed at the individual level, in context.",
    features: ['workforceAnalytics', 'aiReports', 'employeeActivity', 'managerWorkspace'],
    privacy: false,
    faq: [
      {
        question: 'How is employee work analytics different from workforce analytics?',
        answer: 'Work analytics focuses on individual patterns; workforce analytics looks across the whole team or org.',
      },
      {
        question: 'Where can managers review employee work analytics?',
        answer: 'In the manager workspace.',
      },
      {
        question: 'How far back can employee work analytics be reviewed?',
        answer: 'AI reports are browsable by year, month and day, so individual work patterns can be reviewed over time, not just the current day.',
      },
      {
        question: 'Does employee work analytics include a burnout signal at the individual level?',
        answer: 'Yes, the wellbeing & burnout forecast projects individual risk from working-hour patterns like long days, weekend work and late-night activity.',
      },
      {
        question: "Can an individual employee's work analytics be compared to their own past patterns?",
        answer: "Yes, behaviour intelligence is specifically built around comparing activity to an individual's own historical baseline rather than a peer group.",
      },
      {
        question: "Who can see one employee's individual work analytics?",
        answer: "Their assigned manager, through the manager workspace, and admins through the admin portal, not managers outside that employee's team.",
      },
      {
        question: 'Is employee work analytics data downloadable for a 1:1 conversation?',
        answer: 'Yes, AI reports can be downloaded as PDFs for use in a manager conversation.',
      },
      {
        question: 'Does employee work analytics rank employees against each other?',
        answer: "No, it focuses on an individual's own patterns over time rather than ranking employees against peers.",
      },
    ],
    related: ['workforce-analytics-software', 'employee-performance-insights', 'employee-productivity-software'],
  },
  {
    slug: 'workplace-activity-intelligence',
    title: 'Workplace Activity Intelligence',
    cluster: 'tracking',
    metaDescription:
      'ZUZU workplace activity intelligence turns Windows agent activity data into patterns through behaviour intelligence and AI reports.',
    intro:
      "Workplace activity intelligence connects raw activity logs to patterns that actually mean something, busy periods, tool usage, and where time goes during the day. ZUZU builds this from the same activity data captured by the Windows agent.",
    howItWorksNote: 'Raw activity events are grouped into patterns before they ever reach a manager\'s screen.',
    features: ['employeeActivity', 'behaviourIntelligence', 'aiReports', 'windowsAgent'],
    privacy: true,
    faq: [
      {
        question: 'What is workplace activity intelligence built from?',
        answer: 'Activity data captured by the Windows agent, processed into patterns through behaviour intelligence and AI reports.',
      },
      {
        question: 'Does activity intelligence identify individual employees?',
        answer: 'Visibility depends on the privacy controls an admin configures.',
      },
      {
        question: 'How does workplace activity intelligence turn raw logs into patterns?',
        answer: 'The Windows agent captures raw activity events, which behaviour intelligence and AI reports then process into patterns like busy periods and tool usage before a manager ever sees them.',
      },
      {
        question: "Does activity intelligence work if the employee's device is asleep or off?",
        answer: 'No, capture only happens while the Windows agent is running; there is nothing to record when the device is off.',
      },
      {
        question: "Can workplace activity intelligence identify a specific individual's behaviour change?",
        answer: "Yes, behaviour intelligence flags changes from that individual's own baseline, and flagged activity routes to a review queue rather than being broadcast automatically.",
      },
      {
        question: 'Does workplace activity intelligence require a separate install from regular activity tracking?',
        answer: 'No, it runs on the same Windows agent and activity data as the rest of ZUZU; there is nothing extra to install.',
      },
      {
        question: 'Is workplace activity intelligence data retained indefinitely?',
        answer: "Screenshot retention defaults to 90 days and is admin-configurable; other activity and attendance data retention is set through the organization's own configuration.",
      },
      {
        question: 'Can workplace activity intelligence be used to predict who will underperform?',
        answer: "No, it surfaces pattern changes as a prompt for a manager conversation; it doesn't generate predictions about future performance.",
      },
    ],
    related: ['employee-activity-tracking-software', 'workforce-visibility-platform', 'desktop-activity-monitoring'],
  },
  {
    slug: 'team-productivity-monitoring',
    title: 'Team Productivity Monitoring',
    cluster: 'management',
    metaDescription:
      'ZUZU team productivity monitoring aggregates activity and attendance data to show team-level patterns for managers.',
    intro:
      "Team productivity monitoring shifts the focus from individuals to how a whole team operates together. ZUZU aggregates activity and attendance data so managers can spot team-level patterns, not just individual ones.",
    howItWorksNote: 'Individual activity data is rolled up to the team level before it reaches a manager\'s dashboard.',
    features: ['employeeActivity', 'workforceAnalytics', 'managerWorkspace', 'aiReports'],
    privacy: false,
    faq: [
      {
        question: 'How does team productivity monitoring differ from individual monitoring?',
        answer: 'It aggregates data across a team rather than focusing on any one employee.',
      },
      {
        question: 'Where do managers view team productivity data?',
        answer: 'In the manager workspace.',
      },
      {
        question: "How is team-level data different from what an individual employee's manager sees?",
        answer: 'Team productivity monitoring rolls individual activity up into aggregated, team-level views inside workforce analytics, rather than showing each person\'s raw data by default.',
      },
      {
        question: "Can a manager see productivity data for a team that isn't theirs?",
        answer: 'No, the manager workspace only shows a manager their own assigned team.',
      },
      {
        question: 'Does team productivity monitoring include a report a manager can bring to a team meeting?',
        answer: 'Yes, AI reports and workforce analytics can be reviewed in the manager workspace and downloaded as PDFs.',
      },
      {
        question: 'How is team productivity data kept up to date?',
        answer: 'Activity and attendance are captured continuously by the Windows agent and rolled up automatically, rather than requiring a manual refresh.',
      },
      {
        question: "Does team productivity monitoring flag when a team's hours trend upward over time?",
        answer: 'Yes, workforce analytics includes trend information, and the wellbeing & burnout forecast flags individuals on a rising-hours trend with a weeks-to-risk estimate.',
      },
      {
        question: 'Is team-level data exportable for an operations review?',
        answer: 'Yes, team and workforce-level data can be exported as CSV, Excel or PDF.',
      },
    ],
    related: ['employee-productivity-software', 'workforce-management-software', 'employee-performance-insights'],
  },
  {
    slug: 'workforce-reporting-platform',
    title: 'Workforce Reporting Platform',
    cluster: 'analytics',
    metaDescription:
      'ZUZU is a workforce reporting platform that generates AI reports automatically from ongoing activity and attendance data.',
    intro:
      "A workforce reporting platform turns ongoing activity and attendance data into reports managers and admins can actually use in a meeting. ZUZU's AI reports generate that reporting layer automatically.",
    howItWorksNote: 'Reports are generated from live activity and attendance data rather than assembled by hand.',
    features: ['aiReports', 'workforceAnalytics', 'timeAttendance', 'adminPortal'],
    privacy: false,
    faq: [
      {
        question: 'Are ZUZU workforce reports generated automatically?',
        answer: 'Yes, AI reports are generated from ongoing activity and attendance data.',
      },
      {
        question: 'Can reports be reviewed at the admin level?',
        answer: 'Yes, through the admin portal, alongside manager workspace views for individual teams.',
      },
      {
        question: 'What formats can workforce reports be exported in?',
        answer: 'CSV, Excel and PDF are all supported, alongside weekly report emails and team daily digests.',
      },
      {
        question: 'How often are workforce reports generated?',
        answer: 'One AI report is generated per employee per day, and analytics update continuously in the background.',
      },
      {
        question: 'Can workforce reports be scoped to a single department?',
        answer: 'Yes, reports and analytics can be reviewed at the department or team level as well as organisation-wide.',
      },
      {
        question: 'Does the reporting platform include a burnout or wellbeing section?',
        answer: 'Yes, workforce analytics includes a wellbeing & burnout forecast with a weeks-to-risk estimate for employees on a rising-risk trend.',
      },
      {
        question: 'Who controls which admins and managers can access which reports?',
        answer: 'The admin portal manages capability-based access, so admins control who can see which reports and settings.',
      },
      {
        question: 'Can reporting data be pulled into an existing BI or payroll tool?',
        answer: 'ZUZU does not integrate directly with third-party BI, payroll or accounting tools; exported CSV, Excel or PDF files can be used with those systems manually.',
      },
    ],
    related: ['workforce-analytics-software', 'workforce-management-software', 'work-time-tracking-software'],
  },
]

export function findProductPage(slug) {
  return PRODUCT_PAGES.find((page) => page.slug === slug)
}

export function getResolvedFeatures(page) {
  return page.features.map((key) => FEATURE_LIBRARY[key])
}

export function getRelatedPages(page) {
  return page.related.map((slug) => findProductPage(slug)).filter(Boolean)
}

export function getPagesByCluster(clusterKey) {
  return PRODUCT_PAGES.filter((page) => page.cluster === clusterKey)
}
