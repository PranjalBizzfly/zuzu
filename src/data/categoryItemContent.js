/*
  Body content for the generic CategoryItem template (src/pages/CategoryItem.jsx),
  keyed by `${sectionKey}:${slug}` -- covers the 8 Product items, 6 Solutions
  items, and the industries nav items that don't have a richer entry in
  src/data/industryContent.js (and so still render through CategoryItem
  instead of IndustryPage).

  Same conventions as INDUSTRY_CONTENT (src/data/industryContent.js):
  `whyItMatters` is factual and grounded only in capabilities already
  established elsewhere on the site, not invented stats or customer claims.
  `capabilities` are keys into FEATURE_LIBRARY (src/data/productPages.js) --
  reusing that shared library rather than duplicating icon/title/description
  per item, same pattern IndustryPage.jsx already uses.
*/

export const CATEGORY_ITEM_CONTENT = {
  // ---- Product ----
  // `useCases` on every Product/Solutions item below is reused verbatim
  // (not paraphrased) from that same capability's own page in its SEO
  // cluster -- see the comment on each entry for the source page. Kept as
  // a literal copy rather than an import: importing a whole cluster file
  // (15-45 pages each) just to reach two of its strings isn't worth the
  // bundle weight, and short factual use-case pairs like these are safe
  // to duplicate since they don't carry claims likely to go stale.
  //
  // `connectedSystemNote` on every Product/Solutions item ties that one
  // capability back to ZUZU's overall product positioning: a Windows
  // desktop agent that captures activity, attendance, application usage
  // and screenshots (protecting sensitive information on-device), an
  // Admin Portal that gives organizations control over employees, teams,
  // managers, monitoring policy, reporting, security and audit activity,
  // and a Manager Workspace that gives managers team-level visibility,
  // daily reports, insights and anomaly review. Every fact drawn on here
  // is already independently established elsewhere on the site (see each
  // capability's own cluster page) -- this note just states which layer
  // of that one connected system this particular page's capability sits
  // in, rather than describing it in isolation.
  'product:workforce-monitoring': {
    whyItMatters:
      'Activity and attendance data tell you how long something took, but not always what it looked like. Periodic screenshots add visual context to that data, so a manager reviewing a busy or quiet stretch of the day has more than just numbers to go on.',
    connectedSystemNote:
      'Screenshots are one of the four things the Windows desktop agent captures on the employee device, alongside activity, attendance and application usage, with sensitive on-screen information protected through on-device privacy controls before anything is stored or uploaded.',
    capabilities: ['screenshotMonitoring', 'employeeActivity', 'privacyControls'],
    // Source: /screenshot-privacy/screenshot-monitoring
    useCases: [
      { title: 'Confirming Context on an Unusual Activity Pattern', description: 'Use a screenshot alongside activity data to understand what was on screen.' },
      { title: 'Manager Spot-Checks', description: 'Give managers visual context without reviewing a live feed.' },
    ],
  },
  'product:employee-activity': {
    whyItMatters:
      'Most of the workday happens across a rotating set of apps, sites and tools rather than one screen. Employee activity captures that pattern continuously, so managers can see where time actually went without asking for a status update.',
    connectedSystemNote:
      'Activity is one of the four signals the Windows desktop agent captures directly on the employee device, alongside attendance, application usage and screenshots, feeding the same connected record the admin portal and manager workspace both draw from.',
    capabilities: ['employeeActivity', 'workforceAnalytics', 'aiReports'],
    // Source: /activity/employee-work-activity
    useCases: [
      { title: 'Understanding What ZUZU Actually Tracks', description: "Get a clear picture of the data behind ZUZU's reports." },
      { title: 'Explaining Monitoring to a New Team', description: "Give a straightforward answer when employees ask what's tracked." },
    ],
  },
  'product:time-attendance': {
    whyItMatters:
      'Clock-ins, hours and attendance are the baseline record most workforce decisions start from. Capturing them automatically through the Windows agent removes the manual timesheet as a point of friction or dispute.',
    connectedSystemNote:
      'Attendance is one of the four signals the Windows desktop agent captures on-device, alongside activity, application usage and screenshots, giving admins and managers a shared, consistent hours record rather than a separate system to reconcile.',
    capabilities: ['timeAttendance', 'managerWorkspace', 'aiReports'],
    // Source: /time-attendance/employee-time-tracking
    useCases: [
      { title: 'Replacing Manual Timesheets', description: 'Move a team off spreadsheets onto automatic tracking.' },
      { title: 'Payroll-Ready Hours', description: 'Give admins a consistent hours record to work from.' },
    ],
  },
  'product:ai-reports': {
    whyItMatters:
      "Raw activity and attendance logs are useful but time-consuming to read one row at a time. AI reports turns that same underlying data into a structured daily summary, so a manager gets the shape of the day without digging through it.",
    connectedSystemNote:
      'AI reports sit downstream of the Windows desktop agent: the same activity, attendance and application-usage data it captures on-device is what gets turned into each employee\'s daily summary and into the manager workspace\'s own daily reports.',
    capabilities: ['aiReports', 'timeAttendance', 'employeeActivity'],
    // Source: /ai-analytics/ai-employee-reports
    useCases: [
      { title: 'Reviewing One Employee Holistically', description: 'See activity, attendance and screenshot context in a single report.' },
      { title: 'Preparing for a Performance Conversation', description: 'Bring a complete picture instead of several separate exports.' },
    ],
  },
  'product:workforce-analytics': {
    whyItMatters:
      "A single day of activity tells you what happened; a trend line tells you whether it's normal. Workforce analytics aggregates activity and attendance over time so patterns and outliers are visible at the team level, not just per day.",
    connectedSystemNote:
      'Workforce analytics aggregates the same activity and attendance data the Windows desktop agent captures on every employee device, turning individual daily records into team- and organization-level trends the admin portal and manager workspace both surface.',
    capabilities: ['workforceAnalytics', 'employeeActivity', 'behaviourIntelligence'],
    // Source: /ai-analytics/data-driven-workforce-decisions
    useCases: [
      { title: 'Backing Up a Staffing Conversation', description: 'Bring workforce data into a decision, rather than relying on impressions alone.' },
      { title: 'Reviewing a Policy Change', description: 'Check activity or attendance trends before and after a change.' },
    ],
  },
  'product:manager-workspace': {
    whyItMatters:
      "Reviewing a team's day usually means checking attendance, activity and reports in three different places. Manager workspace brings that into one view scoped to a manager's own team, for day-to-day review rather than organization-wide administration.",
    connectedSystemNote:
      "Manager workspace is the team-level view onto the same underlying record the admin portal manages organization-wide, daily reports, insights and anomaly review, scoped to a manager's own assigned team rather than the whole deployment.",
    capabilities: ['managerWorkspace', 'timeAttendance', 'aiReports'],
    // Source: /manager/manager-insight-workflow
    useCases: [
      { title: 'Starting a Review From an Insight', description: 'Use a surfaced insight as the starting point, then pull in supporting data.' },
      { title: 'Keeping Review Consistent Across a Team', description: 'Review insights the same way for every team member.' },
    ],
  },
  'product:admin-portal': {
    whyItMatters:
      'Settings that affect an entire ZUZU deployment, user access, monitoring policy, retention, need one place to live, separate from day-to-day team management. The admin portal is that centralized control surface.',
    connectedSystemNote:
      'The admin portal is where organizations control the people, policies and records the Windows desktop agent and manager workspace both depend on, employees, teams, managers, monitoring policy, reporting, security and audit activity, in one place.',
    // 'privacyControls' is omitted on purpose: this page's Privacy Controls
    // explanation lives in expandedContent.js, so the generic capability
    // card would be a second, competing "Privacy Controls" heading.
    capabilities: ['adminPortal', 'windowsAgent'],
    // Source: /admin/dashboard
    useCases: [
      { title: 'Setting Up a New Organization', description: 'Configure employees, teams and monitoring policy from one place.' },
      { title: 'Reviewing Organization-Wide Configuration', description: 'Check settings across the deployment, not just one team.' },
    ],
  },
  'product:windows-agent': {
    whyItMatters:
      'Every capability on this page depends on one lightweight installer running on the employee device. The Windows agent is what actually captures attendance, activity and screenshots in the background, on Windows devices.',
    connectedSystemNote:
      "The Windows agent is the foundation the rest of ZUZU is built on: activity, attendance, application usage and screenshots all originate here, with sensitive information protected through on-device privacy controls before anything leaves the employee's computer.",
    capabilities: ['windowsAgent', 'timeAttendance', 'employeeActivity'],
    // Source: /windows-agent/system-tray
    useCases: [
      { title: 'Confirming Installation Succeeded', description: 'Check the system tray to confirm the agent installed correctly.' },
      { title: 'Employee Transparency', description: 'Employees can see the agent is present on their device.' },
    ],
  },

  // ---- Solutions ----
  // whyItMatters / connectedSystemNote / useCases below are written per page
  // from the approved capability ledger (see the page-specific feature blocks
  // in src/data/pageFeatureContent.js for the detailed sections).
  'solutions:remote-workforce': {
    whyItMatters:
      "A remote team loses the small signals an office gives a manager: who is at their desk, who has gone quiet, who is still working late. Remote workforce replaces them with a record: attendance captured in sessions, application activity, and a daily AI report per person, all recorded by the Windows agent on each employee's device wherever it is. There is no separate remote mode and no GPS or location tracking.",
    connectedSystemNote:
      "Nothing changes underneath for remote work. The same Windows agent records attendance and activity, an administrator sets one monitoring policy in the admin portal, and each manager reviews their own team in the manager workspace. When a home connection drops, the agent queues the data and syncs it once the connection returns.",
    capabilities: ['remoteHybrid', 'workforceVisibility', 'timeAttendance'],
    useCases: [
      { title: 'Starting the Day Across Time Zones', description: "Open a distributed team's attendance and application activity for the day in the manager workspace instead of collecting status messages." },
      { title: 'Onboarding a Remote Hire', description: 'Add the employee in the admin portal. They show as pending until the desktop agent has run once with their activation code, then their activity and attendance start to appear.' },
    ],
  },
  'solutions:hybrid-workforce': {
    whyItMatters:
      "A hybrid week is split between two settings but is still one person's week. ZUZU records attendance and activity on the device rather than by location, so office days and remote days land in one continuous record. There is no separate office system and remote system to reconcile, and ZUZU does not label a day as office or remote by default.",
    connectedSystemNote:
      "The Windows agent produces one history per device wherever the day was spent. The admin portal holds the organisation-wide view, the manager workspace holds the team's, and workforce analytics can be filtered to any date range. On a personal laptop used on remote days, capture is limited to the punch-in to punch-out session.",
    capabilities: ['remoteHybrid', 'managerWorkspace', 'workforceAnalytics'],
    useCases: [
      { title: "Reviewing a Hybrid Team's Week", description: "Look at the team's attendance and application activity for the week in the manager workspace, with office and remote days in the same record." },
      { title: 'Comparing Two Periods', description: 'Use a date range in workforce analytics, or the period comparison report, to see whether a change of schedule showed up in hours or activity.' },
    ],
  },
  'solutions:workforce-visibility': {
    whyItMatters:
      "Visibility has a specific meaning in ZUZU: knowing who is working, what kind of activity it was, and how the picture is changing, without asking for updates. Managers get it for their own team in the manager workspace. Administrators get it across the organisation in the admin portal, where the dashboard separates what is live, what is averaged and what needs attention. It stops at activity and attendance: no keystrokes, no live camera, and screenshots are periodic stills with private regions redacted on the device.",
    connectedSystemNote:
      "Visibility is layered, not one screen. The Windows agent captures on the device; team at a glance and the manager workspace present it for a team; the dashboard, reports and insights in the admin portal present it for the organisation. Every layer reads the same underlying record.",
    capabilities: ['workforceVisibility', 'employeeActivity', 'aiReports'],
    useCases: [
      { title: 'Replacing the Status-Update Round', description: 'Check who is working, and what they were working in, from the manager workspace instead of collecting written updates.' },
      { title: 'Giving Leadership One Starting View', description: "Start from the dashboard's real-time activity and needs attention panels, then open a team or a report only where something needs a closer look." },
    ],
  },
  'solutions:employee-productivity': {
    whyItMatters:
      "ZUZU treats productivity as context for a conversation, not a verdict: the data shows where time went and how focused it was, and the manager decides what it means. Administrators see it as where time goes, top applications, focus quality and deep work; a manager sees it in the daily AI report and the team's activity. ZUZU also includes a productivity score, which stays generic until role context tells the AI what each job is expected to do.",
    connectedSystemNote:
      "Nothing extra is collected for productivity: it is read from the application and attendance data the Windows agent already records. Administrators describe roles in role context (employee, then designation, then organisation, most specific first), and confirming or correcting a flag in AI work does not retroactively change an employee's productivity score.",
    capabilities: ['workforceAnalytics', 'aiReports', 'behaviourIntelligence'],
    useCases: [
      { title: 'Preparing for a One-to-One', description: "Open the person's daily AI report and their application activity first, so the conversation starts from data rather than an impression." },
      { title: 'Setting Up a New Role', description: "Describe what the role is expected to do in role context, so a new hire's activity is judged against their function from day one." },
    ],
  },
  'solutions:workforce-reporting': {
    whyItMatters:
      "Different readers need different altitudes. A manager reads the daily AI report for each person on their team; an administrator works in the reports library and insights across the organisation; leadership can take a weekly digest or an export. All of them are built from the record the Windows agent captures once, with no manual compilation.",
    connectedSystemNote:
      "A manager's daily digest in the manager workspace, an organisation-wide AI workforce report and the report library in the admin portal, and a PDF, Excel or CSV export all come from the same record. ZUZU does not integrate with other systems, so exports are how the data moves into them.",
    capabilities: ['aiReports', 'workforceAnalytics', 'adminPortal'],
    useCases: [
      { title: 'Giving Leadership a Weekly Picture', description: 'Use the weekly digest email, or export the period as a PDF, instead of building a summary by hand.' },
      { title: 'Handing Hours to Your Own Process', description: 'Export attendance as CSV or Excel for whatever payroll or billing process the organisation already runs. ZUZU does not process payroll or integrate with it.' },
    ],
  },
  'solutions:behaviour-intelligence': {
    whyItMatters:
      "Behaviour intelligence compares a person's activity with their own history, not with a fixed rule or a colleague, and sends a meaningful change to a review queue for a person to confirm or correct. It never acts on its own and does not predict who will leave. In AI work, the workspace where these flags are reviewed, anomaly detection stays off for an employee until they have five days of tracked activity.",
    connectedSystemNote:
      "It runs on the activity data the Windows agent already captures, so there is nothing extra to configure. A reviewer's verdict is recorded against the flagged frame and feeds the organisation's precedent set, and engine agreement shows the share of reviewed flags a human confirmed.",
    capabilities: ['behaviourIntelligence', 'workforceAnalytics', 'privacyControls'],
    useCases: [
      { title: 'Working the Review Queue', description: 'Filter flags by employee, verdict and date, read the evidence behind each one, and record a verdict.' },
      { title: 'Preparing a Check-In After a Flagged Change', description: "Open the flagged change next to the employee's activity and attendance around it, then decide whether a conversation is warranted." },
    ],
  },
}
