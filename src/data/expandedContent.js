/*
  Additional H2/H3 content blocks for existing pages, keyed by route path
  and rendered by src/components/ui/ExpandedContentSection.jsx. Each entry
  is an array of sections so a page can carry more than one block.

  Copy is supplied product content, placed on the single existing page it
  fits best; no new routes are created. Where a concept already has a page
  (e.g. Employee Management -> /admin/employees, Audit & Governance ->
  /admin/governance) the block lives there instead of on a generic hub,
  so the same content is never repeated across pages.

  A section is { eyebrow, heading, intro, items: [{ title, description,
  bullets?, note? }] } -- `bullets` renders a short pill list under the
  description, `note` a closing sentence after it.
*/

export const EXPANDED_CONTENT = {
  // 1. ZUZU Workforce Dashboard
  '/dashboard': [
    {
      eyebrow: 'ZUZU Workforce Dashboard',
      heading: 'A Clear View of Your Workforce',
      intro:
        'ZUZU brings workforce activity, tracked hours, productivity signals, focus, and team activity into a single dashboard. Instead of switching between multiple reports, managers and administrators can use the dashboard to understand what is happening across their workforce.',
      items: [
        {
          title: 'Real-Time Workforce Activity',
          description:
            'The dashboard provides a current view of active employees and available workforce activity. Managers can quickly see who is active, review tracked work information, and move into detailed employee or team views when more context is needed.',
        },
        {
          title: 'Understand Where Work Time Goes',
          description:
            'ZUZU organizes tracked work information around hours, applications, focus, and activity patterns. This helps organizations understand how tracked time is distributed across different work areas.',
        },
        {
          title: 'Executive-Level Workforce Summary',
          description:
            'The dashboard brings important workforce signals together through executive highlights, including areas such as improvement, workload, disengagement, and situations that may require further review.',
        },
      ],
    },
  ],

  // 2. Employee Management
  '/admin/employees': [
    {
      eyebrow: 'Employee Management',
      heading: 'Manage Employees From One Workspace',
      intro:
        'ZUZU provides a centralized employee management workspace where administrators can add employees, monitor activation status, review employee information, and organize workforce data.',
      items: [
        {
          title: 'Employee Activation and Status',
          description:
            'Administrators can see employees based on their current status, including activated, pending, and deactivated employees. This makes it easier to understand who has completed setup and who may still require activation.',
        },
        {
          title: 'Employee-Level Visibility',
          description:
            'The employee workspace brings together information such as department, manager, status, last activity, and productivity-related information so administrators can move from an organization-level view to individual employee context.',
        },
        {
          title: 'Search, Filters, and Views',
          description:
            'Employee information can be organized using search, department and productivity filters, recently-added views, configurable columns, and table or card layouts.',
        },
      ],
    },
  ],

  // 3. Manager Workspace
  '/product/manager-workspace': [
    {
      eyebrow: 'Manager Workspace',
      heading: 'Give Managers the Right Team-Level Visibility',
      intro:
        'ZUZU provides managers with a focused view of the people and teams assigned to them. This helps managers understand team activity without requiring access to information outside their assigned scope.',
      items: [
        {
          title: 'Understand Team Coverage',
          description:
            'Managers can review direct reports, employees without an assigned manager, span of control, and other coverage information to understand how teams are structured.',
        },
        {
          title: 'Monitor Team Health',
          description:
            'The manager workspace brings together team productivity and team-health signals, allowing managers to identify areas that may need attention and review the underlying activity information.',
        },
        {
          title: 'Manager Access and Approvals',
          description:
            'Administrators can monitor manager invitations, accepted access, account status, and other manager-level access information from the management workspace.',
        },
      ],
    },
  ],

  // 4. Reports
  '/reports': [
    {
      eyebrow: 'Reports',
      heading: 'Turn Workforce Activity Into Actionable Reports',
      intro:
        'ZUZU transforms tracked workforce information into reports that can be reviewed at employee, team, and organization levels.',
      items: [
        {
          title: 'Employee Activity Reports',
          description:
            'Review tracked activity and productivity-related information for individual employees across selected reporting periods.',
        },
        {
          title: 'Team Analytics',
          description:
            'Team-level reports bring together productivity, tracked time, focus, and work activity so managers can understand how teams are working over a selected period.',
        },
        {
          title: 'Application and Website Usage',
          description:
            'ZUZU can organize application-level activity and usage information to show where tracked work time is being spent.',
        },
        {
          title: 'Attendance and Activity Reports',
          description:
            'Combine attendance-related information with activity data to provide a broader view of employee work patterns.',
        },
        {
          title: 'Export and Delivery',
          description:
            'Reports can be generated and exported in supported formats including PDF, Excel, and CSV. ZUZU also supports automated reporting workflows such as daily AI reports and scheduled digest delivery.',
        },
      ],
    },
  ],

  // 5. AI Reports
  '/product/ai-reports': [
    {
      eyebrow: 'AI Reports',
      heading: 'Automated AI-Powered Workforce Reporting',
      intro:
        'ZUZU generates AI-based workforce reports from available activity information, helping managers and administrators review important workforce signals without manually going through every individual activity record.',
      items: [
        {
          title: 'One Reported View of the Workday',
          description:
            'AI reports organize available workforce information into a structured report that can be reviewed by employee and date.',
        },
        {
          title: 'Identify Important Workforce Signals',
          description: 'AI-generated reporting can surface signals such as:',
          bullets: ['Most improved', 'Top performers', 'Overloaded', 'Disengaged', 'May need coaching'],
          note:
            'These signals are intended to help managers identify areas for review and understand the activity context behind them.',
        },
        {
          title: 'Review Reports Across Time',
          description:
            'Administrators can work with daily, weekly, and monthly reporting views and select different reporting periods to review workforce information over time.',
        },
      ],
    },
  ],

  // 6. Workforce Insights
  '/workforce-insights': [
    {
      eyebrow: 'Workforce Insights',
      heading: 'Understand Workforce Patterns, Not Just Individual Activity',
      intro:
        'ZUZU workforce insights brings workforce information together to help organizations understand broader patterns across people, teams, departments, and time periods.',
      items: [
        {
          title: 'Ask Questions About Your Workforce',
          description:
            'The insights workspace provides an AI-assisted way to ask questions about available workforce information and review answers grounded in recent activity data.',
        },
        {
          title: 'Organization Health',
          description:
            'Organization-level information can be reviewed through workforce health indicators, productivity signals, focus, deep-work information, and areas that may require attention.',
        },
        {
          title: 'Workforce Trends',
          description:
            'Review changes in tracked hours and productivity-related information over selected periods to understand how workforce activity changes over time.',
        },
        {
          title: 'Department Benchmarking',
          description:
            'Department-level benchmarking helps organizations compare workforce productivity information across departments using the available data.',
        },
        {
          title: 'Where Time Goes',
          description:
            'ZUZU can surface application-related activity information to help organizations understand how tracked work time is distributed.',
        },
        {
          title: 'Where Focus Is Lost',
          description:
            'Focus-related information can help identify periods or patterns where attention may be reduced, providing context for further review.',
        },
      ],
    },
  ],

  // 7. AI Executive Insights
  '/ai-analytics/executive-workforce-insights': [
    {
      eyebrow: 'AI Executive Insights',
      heading: 'Bring Important Workforce Signals Into Focus',
      intro:
        "ZUZU's executive insight views summarize important workforce signals so decision-makers can quickly identify areas that deserve further attention.",
      items: [
        {
          title: 'Improvement Signals',
          description:
            'Review employees or teams showing meaningful changes in available productivity-related activity over a selected period.',
        },
        {
          title: 'Workload Signals',
          description:
            'Identify activity patterns that may indicate workload concerns and provide a starting point for deeper review.',
        },
        {
          title: 'Disengagement Signals',
          description:
            'Review activity patterns that may indicate reduced engagement signals within the available workforce data.',
        },
        {
          title: 'Coaching and Review Areas',
          description:
            'Potential coaching signals can help managers decide where additional context or a direct conversation may be useful.',
        },
      ],
    },
  ],

  // 8. Focus & Deep Work
  '/solutions/employee-productivity': [
    {
      eyebrow: 'Focus & Deep Work',
      heading: 'Understand Focus Alongside Tracked Work',
      intro:
        'ZUZU goes beyond total tracked hours by providing visibility into focus-related and deep-work signals when sufficient activity data is available.',
      items: [
        {
          title: 'Focus Quality',
          description:
            'Review available activity information to understand how tracked work time relates to focus and distraction patterns.',
        },
        {
          title: 'Deep Work Signals',
          description:
            'Deep-work information provides additional context around periods of concentrated work instead of relying only on total hours tracked.',
        },
        {
          title: 'Context Matters',
          description:
            'Focus and productivity signals should be reviewed together with the underlying activity context rather than treated as standalone measures.',
        },
      ],
    },
    {
      eyebrow: 'Role Context',
      heading: 'Tell the AI What Each Role Is Expected to Do',
      intro:
        "Role context is where administrators describe what each function is expected to do. It is learned semantic context, never an app allowlist or a rule, so the engine can judge whether observed activity advances a person's expected work, and a new hire gets a meaningful score from day one.",
      items: [
        {
          title: 'Describe What Each Role Does',
          description:
            'Administrators use add description to write, in plain language, what a function is expected to do. The workspace suggests starting with the designations your team already uses, for example "software engineer" or "SEO specialist", so a new hire can be evaluated against their function on day one. A rebuild profiles action sits alongside add description.',
        },
        {
          title: 'How Context Resolves for Each Employee',
          description:
            'Most specific wins, the engine walks a three-step chain for every employee. Each step shows how many descriptions are defined and how many employees resolve there.',
          bullets: [
            '1. Employee: written for one specific person',
            '2. Designation: everyone sharing that job title',
            '3. Organisation: the last-resort context for everyone else',
          ],
        },
        {
          title: 'See Who Is Covered',
          description:
            'Four summary cards show where role context stands. The descriptions, coverage and function profiles tabs, a search across titles, descriptions and functions, and an all scopes filter help you find gaps.',
          bullets: [
            'Descriptions (with semantic embedding)',
            'People covered',
            'Undescribed titles',
            'Function profiles',
          ],
        },
        {
          title: 'Context, Not a Rule',
          description:
            'A description does not approve or block particular apps. It is learned semantic context that gives the engine a picture of the job, so observed activity can be judged against what the role is expected to do rather than against a fixed list.',
        },
        {
          title: 'Why Generic Scores Need Role Context?',
          description:
            'The recommendation tour puts it plainly: productivity scores are generic until the AI knows what the job is. Describing what roles do is one of the six setup steps in the tour, and undescribed titles shows which job titles in the roster still have no description.',
        },
      ],
    },
  ],

  // 9. Application Usage
  '/product/employee-activity': [
    {
      eyebrow: 'Application Usage',
      heading: 'See How Tracked Time Is Distributed Across Applications',
      intro:
        'ZUZU provides application-level activity information that helps organizations understand which applications are being used during tracked work periods.',
      items: [
        {
          title: 'Application Activity',
          description:
            'The ZUZU desktop agent records relevant application and window activity so available usage information can be organized and reviewed through the platform.',
        },
        {
          title: 'Understand Work Patterns',
          description:
            'Application usage information can provide additional context when reviewing employee activity, productivity, focus, and tracked work time.',
        },
      ],
    },
  ],

  // 10. Attendance & Time Tracking
  '/product/time-attendance': [
    {
      eyebrow: 'Attendance & Time Tracking',
      heading: 'Connect Attendance With Actual Work Activity',
      intro:
        'ZUZU combines attendance-related information with tracked activity to provide a broader understanding of employee work patterns.',
      items: [
        {
          title: 'Track Working Hours',
          description:
            'Organizations can review tracked hours across employees and selected reporting periods.',
        },
        {
          title: 'Attendance Context',
          description:
            'Attendance information can be reviewed alongside activity data rather than being treated as an isolated record.',
        },
        {
          title: 'Remote Workforce Visibility',
          description:
            'For remote and distributed teams, centralized attendance and activity information helps managers maintain visibility without relying entirely on manual updates.',
        },
      ],
    },
  ],

  // 11. Wellbeing & Burnout Forecast
  '/product/workforce-analytics': [
    {
      eyebrow: 'Wellbeing & Burnout Forecast',
      heading: 'Add Workforce Wellbeing Signals to Your Review Process',
      intro:
        'ZUZU includes a wellbeing and burnout forecast capability that uses available workforce information to surface predicted burnout risk and the drivers behind each forecast.',
      items: [
        {
          title: 'Review Risk Drivers',
          description:
            'The forecast provides additional context around the factors contributing to a predicted risk so managers can review the underlying information rather than relying on a single number.',
        },
        {
          title: 'Weeks-to-Risk Context',
          description:
            'Where available, ZUZU can provide a weeks-to-risk view to add time-based context to the forecast.',
        },
        {
          title: 'A Signal for Review, Not a Performance Ranking',
          description:
            'Burnout forecasts are intended as workforce wellbeing signals for review and follow-up. They should not be treated as a performance ranking or a diagnosis.',
        },
      ],
    },
  ],

  // 12. Audit & Governance
  '/admin/governance': [
    {
      eyebrow: 'Audit & Governance',
      heading: 'Maintain Visibility Into Platform Activity',
      intro:
        'ZUZU provides audit and governance capabilities to help administrators understand important actions performed across the platform.',
      items: [
        {
          title: 'Review Audit Events',
          description:
            'Administrators can review events related to employees, teams, managers, shifts, leave, reports, payments, live capture, and organization activity.',
        },
        {
          title: 'Filter and Review Events',
          description:
            'Audit information can be reviewed using severity and timeline-based views, helping administrators investigate relevant platform activity.',
        },
        {
          title: 'Controlled Access',
          description:
            'ZUZU uses capability-based access so users can work with information according to their assigned role and scope.',
        },
      ],
    },
    {
      eyebrow: 'Audit Logs',
      heading: 'Inside the Audit Logs Workspace',
      intro:
        'Audit logs sits in the security & compliance area of the admin portal. Every write in the admin portal lands there as a privileged action, giving administrators one place to see who did what, to which target, and when.',
      items: [
        {
          title: 'Four Summary Cards',
          description:
            'The top of the page summarizes the trail before you open a single row. The two lower cards also show what share of the events in view they account for.',
          bullets: [
            'Events recorded',
            'Distinct actors',
            'Destructive actions: deletes, revokes, deactivations',
            'Access & billing: org, manager, payment and capture changes',
          ],
        },
        {
          title: 'Search and Filter the Trail',
          description:
            'Search by action, actor name or target, then narrow the trail with the all actions, all severities and any actor filters and a from and to date range. A views control is available alongside the filters, and refresh reloads the trail.',
        },
        {
          title: 'Table or Timeline',
          description:
            'Switch between a table and a timeline view. The table lists when, actor, action, target and severity for each event, each row can be expanded, and rows and page controls handle longer trails.',
        },
        {
          title: 'Severity Comes From the Action',
          description:
            'Severity is derived from the action name: destructive verbs on access, billing or capture resources rank highest. Events are tagged accordingly, an elevated badge, for example, so the most consequential changes are easy to pick out.',
        },
        {
          title: 'System Actions Are Recorded Too',
          description:
            'The actor column is not limited to people. An event such as an organisation being provisioned for its trial is recorded with system as the actor, so automated changes appear in the same trail as administrator changes.',
        },
        {
          title: 'Export and What Is Recorded',
          description:
            'Export CSV takes the trail into a review or compliance file. Each audit record stores the actor, action, target and timestamp; it does not capture IP addresses or device details.',
        },
      ],
    },
  ],

  // 13. Privacy & Screenshot Monitoring
  '/screenshot-privacy': [
    {
      eyebrow: 'Privacy & Screenshot Monitoring',
      heading: 'Workforce Visibility With Privacy Controls',
      intro:
        'ZUZU provides screenshot monitoring with configurable controls designed to give organizations visibility while supporting privacy requirements.',
      items: [
        {
          title: 'Configurable Screenshot Capture',
          description:
            'Screenshot capture can be configured using different intervals, including 1–5 minute intervals or custom settings where supported.',
        },
        {
          title: 'Private Region Protection',
          description:
            'Private regions can be marked on the employee device so sensitive areas can be painted out before screenshots are stored or uploaded.',
        },
        {
          title: 'Personal Laptop Consent',
          description:
            'When personal laptops are used, tracking is consent-gated and limited to the permitted punch-in/punch-out session rather than operating as unrestricted device monitoring.',
        },
      ],
    },
  ],

  // 14. AI Work: overview (behaviour-change detection & review)
  '/solutions/behaviour-intelligence': [
    {
      eyebrow: 'AI Work',
      heading: 'Review Behaviour Changes in the AI Work Workspace',
      intro:
        "AI work is the admin portal workspace for behaviour-change detection and review. It lists activity the engine flagged as a change from a person's own behaviour, with the evidence behind each verdict, and it records your review so the engine learns your organisation's norms.",
      items: [
        {
          title: 'Four Numbers at a Glance',
          description:
            'Summary cards show where the review stands for the people in your scope. Engine agreement is the share of reviewed flags a human confirmed.',
          bullets: ['Flagged frames', 'Reviewed', 'Engine agreement', 'Awaiting review'],
        },
        {
          title: 'Three Views of the Queue',
          description:
            'Below the cards, review queue shows progress across the loaded page, flag volume plots flags per day, and who and why summarizes the distribution of flags, so a manager can see the shape of the queue before opening any single flag.',
        },
        {
          title: 'Search and Filter the Flags',
          description:
            'Search by employee, app or reasoning, then filter by flagged status, employee, verdict and a from and to date range. The list shows how many flags are shown out of the total, with rows and page controls for longer lists.',
        },
        {
          title: 'Detection Starts After Five Days',
          description:
            'Anomaly detection stays off for an employee until they have five days of tracked activity. Until then there is no baseline to diverge from, so a new workspace shows nothing.',
        },
        {
          title: 'A Flag Is a Deviation, Not a Rule',
          description:
            "Every flag is a deviation from that employee's own behaviour, never a rule about apps or roles.",
        },
        {
          title: 'Scoped to Your Reviewers',
          description:
            'The summary cards are labelled "in your scope", so the counts and flags you see reflect the scope of the person reviewing.',
        },
      ],
    },
  ],

  // 15. AI Work: verdict workflow
  '/manager/anomaly-review': [
    {
      eyebrow: 'AI Work Review',
      heading: 'How Verdicts Feed Back Into the Engine',
      intro:
        "Reviewing in AI work is more than closing a flag. Confirming or correcting a flag is what teaches the engine your organisation's norms, every review feeds the precedent set.",
      items: [
        {
          title: 'Read the Evidence Behind Each Flag',
          description:
            "Each flagged frame comes with the evidence behind the engine's verdict, and the search box matches employee, app and reasoning text. Review it alongside the activity and attendance context around the flag.",
        },
        {
          title: 'Confirm or Correct',
          description:
            'Your verdict is recorded against the frame. The all verdicts filter and the reviewed and awaiting review counts keep track of which flags have a human verdict and which are still open.',
        },
        {
          title: 'Engine Agreement as Calibration',
          description:
            'Engine agreement shows the share of reviewed flags a human confirmed. Until verdicts exist, the workspace asks you to review a few flags to calibrate the engine.',
        },
        {
          title: 'Verdicts Build the Precedent Set',
          description:
            "A recorded verdict feeds the organisation's precedent set, which is how the engine picks up what counts as normal for your organisation.",
        },
        {
          title: 'Reviews Do Not Rewrite Scores',
          description:
            "A verdict is recorded against the flagged frame. It does not change the employee's productivity score retroactively.",
        },
        {
          title: 'Work Through the Queue',
          description:
            'Filter by employee or date range and use review queue progress to see how much of the loaded page has been reviewed, so a manager can work through flags in order without losing track.',
        },
      ],
    },
  ],

  // 16. Away Time
  '/time-attendance/employee-workday-tracking': [
    {
      eyebrow: 'Away Time',
      heading: 'Away Time & Workday Gaps: Account for Time the Agent Could Not See',
      intro:
        `Away time lists stretches where the desktop agent could not see anything and shows what the employee says they were doing. It sits in the time & attendance area of the admin portal, so a gap in a workday timeline has somewhere to be reviewed instead of staying unexplained.`,
      items: [
        {
          title: 'Away Time Detection',
          description: `Away time collects stretches where the desktop agent had no visibility. The workspace gives these examples:`,
          bullets: ['A sleeping laptop', 'A restart', 'A crash'],
          note: `Where a workday timeline shows attendance and activity, away time covers the stretches in between that the agent could not observe.`,
        },
        {
          title: 'What the Employee Says They Were Doing',
          description: `Each stretch is shown next to the employee's own account of what they were doing, so the reviewer sees the explanation alongside the gap itself.`,
        },
        {
          title: 'Review Tabs',
          description: `Away time is sorted into four tabs. When nothing is waiting, needs review reports that no away time is waiting on a decision.`,
          bullets: ['Needs Review', 'Approved', 'Rejected', 'All'],
        },
        {
          title: 'Approve or Reject',
          description: `A reviewer decides each stretch. The approved and rejected tabs keep the outcome, so earlier decisions can be revisited without searching.`,
        },
        {
          title: 'Tracked Hours vs Away Time',
          description: `Approving a stretch adds the time beside tracked hours; it never rewrites them. Tracked hours remain exactly what the agent recorded, and approved away time is shown alongside.`,
        },
        {
          title: 'Where Away Time Fits in the Workday',
          description: `Away time complements the workday picture built from attendance and activity, including the idle and screen-off periods captured as part of employee activity, by giving a reviewed explanation for stretches the agent could not see.`,
        },
      ],
    },
  ],

  // 17. Admin Portal navigation map
  '/product/admin-portal': [
    {
      eyebrow: 'Inside the Admin Portal',
      heading: 'Where Each Part of the Admin Portal Lives',
      intro:
        "The admin portal's left-hand navigation keeps every workspace under one sign-in. Alongside dashboard, employees, managers, reports, AI reports, insights and wellbeing, these workspaces are grouped by the area they belong to.",
      items: [
        {
          title: 'Workforce Intelligence',
          description:
            'Role context is where administrators describe what each role is expected to do. AI work is where flagged behaviour changes are reviewed and verdicts recorded.',
          bullets: ['Role Context', 'AI Work'],
        },
        {
          title: 'Time & Attendance',
          description:
            'Away time collects stretches the desktop agent could not see, with the employee\'s account of them, for review as needs review, approved or rejected.',
          bullets: ['Away Time'],
        },
        {
          title: 'Security & Compliance',
          description:
            'Audit logs records every privileged write in the admin portal. API key logs sits beside it; the guided tour describes it as showing token usage and spend, attributed per employee and per model.',
          bullets: ['Audit Logs', 'API Key Logs'],
        },
        {
          title: 'Guidance and Help',
          description:
            'Four workspaces at the bottom of the navigation help you learn the portal and reach the ZUZU team: the recommendation tour, suggest a feature, contact support and platform status.',
          bullets: ['Recommendation Tour', 'Suggest a Feature', 'Contact Support', 'Platform Status'],
        },
        {
          title: 'Trial Status in the Top Bar',
          description:
            'During the 7-day trial, a banner shows how many days are left and the employee limit, up to 10 employees, with an upgrade to paid action.',
        },
        {
          title: 'Portal-Wide Controls',
          description:
            'The top bar also carries text-size controls (a−, a and a+), a theme toggle, notifications, a compass that offers the tour guide for the page you are on, and the account menu.',
        },
      ],
    },
  ],

  // 18. Recommendation Tour
  '/getting-started': [
    {
      eyebrow: 'Recommendation Tour',
      heading: 'Keep Learning Inside the Product With the Recommendation Tour',
      intro:
        `After the setup roadmap, the admin portal includes a built-in recommendation tour: 15 guided walkthroughs covering every section you can open. Each one finishes by offering the next, so you can walk the whole portal in one go or take a single section and stop.`,
      items: [
        {
          title: 'Fifteen Guides, One Portal',
          description: `The guides run in order from finding your way around to checking platform status, and each is tied to the portal section it explains.`,
        },
        {
          title: 'Start From Any Page',
          description: `Use start the tour to begin at the first guide, or the compass in the top bar to get the guide for whichever page you are on without coming back to the tour page.`,
        },
        {
          title: 'Progress You Can Reset',
          description: `The tour counts guides as taken or left early and offers reset progress. Progress is remembered in your browser only, and it is cleared when you sign out.`,
        },
      ],
    },
    {
      eyebrow: 'Recommendation Tour',
      heading: 'Guided ZUZU Product Tour: All 15 Guides',
      intro:
        `Each guide is a short walkthrough of one section of the admin portal. They are listed here in the order the tour runs them, with the section each one explains.`,
      items: [
        {
          title: '1. Find Your Way Around',
          description: `What this portal is, and how its sections fit together. It is the starting point before the section-specific guides.`,
        },
        {
          title: '2. Reading the Dashboard',
          description: `What is live, what is averaged, and what needs you today, a guide to reading the dashboard's real-time activity figures and attention areas.`,
        },
        {
          title: '3. Setting Up Your Team',
          description: `Adding people, and what has to happen before data arrives. Data arrives once an employee is on the roster and their desktop agent is activated.`,
        },
        {
          title: '4. Delegating to Managers',
          description: `What a manager can see, and how their team is scoped. Managers see only their own reports and cannot change settings.`,
        },
        {
          title: '5. Working With Reports',
          description: `The library, the live workspace, and how to scope them, so a report answers the question you are actually asking.`,
        },
        {
          title: '6. The Daily Report for Each Person',
          description: `What the AI writes up every night, and the review workflow on it.`,
        },
        {
          title: '7. Asking Questions in English',
          description: `The natural-language layer over your own data, so a workforce question can be asked in plain English.`,
        },
        {
          title: '8. Burnout Signals',
          description: `An early-warning forecast, and how to read it responsibly.`,
        },
        {
          title: '9. Teaching the AI What the Job Is',
          description: `Why productivity scores are generic until you fill this in, the reason to describe roles in role context.`,
        },
        {
          title: '10. Reviewing What the AI Flagged',
          description: `How the review queue works, and why your verdicts matter. This is the review workflow behind AI work.`,
        },
        {
          title: '11. The Activity Trail',
          description: `Who changed what, and how to answer a compliance question with it, the trail recorded in audit logs.`,
        },
        {
          title: '12. What the AI Is Costing You',
          description: `Token usage and spend, attributed per employee and per model.`,
        },
        {
          title: '13. Monitoring Policy',
          description: `The settings that change what is captured, and for how long.`,
        },
        {
          title: '14. Getting Help',
          description: `Raising a ticket, and how the conversation works in contact support.`,
        },
        {
          title: '15. Is It Us, or Is It You',
          description: `Live component checks, incidents and planned maintenance, as shown on platform status.`,
        },
      ],
    },
    {
      eyebrow: 'Setup Checklist',
      heading: 'ZUZU Setup Checklist: Six Steps to Working Data',
      intro:
        `Alongside the guides, the tour tracks six setup steps and how many are done. Each step carries a one-line reason, so you know why it matters before you do it.`,
      items: [
        {
          title: 'Add Your First Employee',
          description: `Nothing is captured until someone is on the roster. Employees are added and managed in the employees workspace.`,
        },
        {
          title: 'Get an Agent Activated',
          description: `An employee is pending until the desktop agent runs once with their code. Once it has, they move to activated.`,
        },
        {
          title: 'Describe What Roles Do',
          description: `Productivity scores are generic until the AI knows what the job is. Role context is where each role is described.`,
        },
        {
          title: 'Review Flagged Activity',
          description: `Your verdicts are what calibrate the engine. Flagged activity is reviewed in AI work.`,
        },
        {
          title: 'Invite a Manager',
          description: `Managers see only their own reports, and cannot change settings.`,
        },
        {
          title: 'Set Your Monitoring Policy',
          description: `Capture cadence, retention and password redaction apply to everyone, so the policy is worth setting deliberately.`,
        },
      ],
    },
  ],

  // 19. Contact Support + Suggest a Feature (in-portal help)
  '/resources/support': [
    {
      eyebrow: 'Contact Support',
      heading: 'ZUZU Support & Ticket Management: Raise a Ticket From the Admin Portal',
      intro:
        `Inside the admin portal, the contact support workspace lets you raise a ticket and talk directly to the platform team. Replies land in the same thread, and you see them there as soon as they arrive.`,
      items: [
        {
          title: 'Raise a Support Ticket',
          description: `New ticket starts a thread with the platform team. A ticket is the fastest route: it reaches the team's queue immediately, and everything stays in one thread.`,
        },
        {
          title: 'Track Open Tickets',
          description: `The open card counts tickets waiting on the platform team, and a status badge tells you when there are no open tickets. Refresh reloads the list.`,
        },
        {
          title: 'Awaiting Your Reply',
          description: `Awaiting your reply counts the tickets where the next move is yours. When there are none, it reports that no thread is waiting on you.`,
        },
        {
          title: 'Resolved Tickets and Average Resolution',
          description: `Resolved counts what has been closed, and avg resolution reports the time to resolve; it shows a dash until there are resolved tickets.`,
        },
        {
          title: 'Ticket Conversation History',
          description: `Your tickets lists every ticket you have raised. Each one is a single thread you can return to, with replies from the platform team arriving in the same place.`,
        },
        {
          title: 'Common Questions Before You Write In',
          description: `The workspace lists the four questions the team is asked most, so you can check them first:`,
          bullets: [
            "An employee's desktop agent stopped tracking",
            'How often screenshots are captured, and whether it can be changed',
            'Who can see your screenshots and activity',
            'An activity was scored wrongly',
          ],
        },
        {
          title: 'Agent Tracking Issues',
          description: `The first of those questions has documented causes, in order: the agent was deactivated from employees, the employee is on a personal device and has not punched in for the shift, or the organisation is suspended for billing. The troubleshooting page walks through them.`,
        },
        {
          title: 'Security Issues and Other Ways to Reach the Team',
          description: `For a suspected security issue, mark the ticket urgent and describe the impact, but never paste passwords, tokens or API keys into it, the team will ask for a secure channel. Notification emails are sent from an unmonitored address, so reply in the ticket thread instead.`,
        },
      ],
    },
    {
      eyebrow: 'Suggest a Feature',
      heading: 'Suggest a Feature in ZUZU: Send Product Ideas to the Team',
      intro:
        `The suggest a feature page in the admin portal is where ideas about what would make ZUZU better for your team go. The product team reads every suggestion. If something is broken, use contact support instead.`,
      items: [
        {
          title: 'Share a Product Idea',
          description: `The first field, what would you like?, is required. It is where you name the idea, and the placeholder shows the kind of request that fits, such as exporting AI reports as Excel.`,
        },
        {
          title: 'Describe the Problem and the Use Case',
          description: `Why does it matter to you? is also required. Describe the problem it solves, who would use it and how often. It needs at least 20 characters, and a counter tracks the 4,000-character limit.`,
        },
        {
          title: 'Choose a Feature Area',
          description: `The area selector categorizes the idea. It starts on other.`,
        },
        {
          title: 'Set the Importance',
          description: `How important is it? records how much the idea matters to you. It starts on nice to have, and can be changed before you send.`,
        },
        {
          title: 'Send Your Suggestion',
          description: `Send suggestion submits the idea once the required fields are complete.`,
        },
        {
          title: 'Track Suggestions and Team Replies',
          description: `Your suggestions lists everything you have sent, with its status and replies from the ZUZU team, and shows a running count. Until you send one, it reports that your first idea will appear there.`,
        },
      ],
    },
  ],

  // 20. Platform Status + agent-stopped-tracking causes
  '/troubleshooting': [
    {
      eyebrow: 'Platform Status',
      heading: 'Monitor ZUZU Platform Status: Is It Us, or Is It You?',
      intro:
        `Before digging into a single device, the admin portal's platform status page shows live health, incidents and maintenance history for ZUZU itself, so you can tell whether a problem is on the platform or specific to your setup. The recommendation tour has a guide for it, called is it us, or is it you.`,
      items: [
        {
          title: 'Live Health Checks',
          description: `Components are live checks run at the moment you load the page and re-read every minute. While the probe runs, the page shows checking status and that it is reading the live health probe.`,
        },
        {
          title: 'Refreshing Platform Status',
          description: `The page shows when it was last checked and has a refresh button, so you can re-run the checks while you are investigating an issue.`,
        },
        {
          title: 'Active Incidents',
          description: `Anything affecting you right now appears in the active section and as a banner across the portal. When nothing is happening, it reports no active incidents or maintenance.`,
        },
        {
          title: 'Scheduled Maintenance',
          description: `Planned maintenance appears in advance, together with a banner across the portal and, depending on the notice, an email, so you can plan your work around it.`,
        },
        {
          title: '30-Day Incident History',
          description: `History covers the last 30 days of announced incidents and maintenance windows.`,
        },
        {
          title: 'Understanding Service Availability',
          description: `Announced disruption is the total length of the windows published, meaning what was announced, not measured downtime. Component results are live checks only, and historical uptime is not recorded, so no uptime percentage is shown.`,
        },
      ],
    },
    {
      eyebrow: 'Agent Tracking Stopped',
      heading: `When an Employee's Desktop Agent Stops Tracking`,
      intro:
        `The contact support workspace lists this among the four questions the team is asked most. The usual causes, in order, are below, check them before you raise a ticket.`,
      items: [
        {
          title: 'The Agent Was Deactivated',
          description: `Deactivating an employee from employees revokes the agent's token, so the agent stops tracking.`,
        },
        {
          title: 'A Personal Device Without a Punch-In',
          description: `If the employee is on a personal device and has not punched in for the shift, tracking is not running yet.`,
        },
        {
          title: 'The Organisation Is Suspended for Billing',
          description: `A billing suspension of the organisation also stops tracking.`,
        },
        {
          title: `Check the Employee's Page`,
          description: `Open the employee's page in the admin portal. The last-seen time tells you whether the agent is running at all.`,
        },
      ],
    },
  ],
}

/*
  Second-layer depth content, merged onto EXPANDED_CONTENT by
  getExpandedContent() below. Same section shape, same renderer
  (ExpandedContentSection); it lives in its own object only so each
  page's original supplied block above stays untouched and the two
  layers can be reviewed separately.

  Source rules for this layer:
  - Role Context, AI Work, Away Time, Audit Logs, Recommendation Tour,
    Suggest a Feature, Contact Support and Platform Status come from the
    Admin Portal screenshots.
  - Dashboard, Employees, Managers, Reports, AI Reports, Insights and
    Wellbeing are described at panel/label level from the supplied
    feature lists, plus facts already approved elsewhere on the site.
    Nothing here states a score format, formula, scale, ranking method or
    who can see the productivity score, and "productivity score" and
    "Productivity Rate" are kept as separate terms.
  - The five-day rule is attached only to the AI Work anomaly-detection
    workflow.
*/
const DEPTH_CONTENT = {
  // Dashboard
  '/dashboard': [
    {
      eyebrow: 'Dashboard',
      heading: 'Inside the ZUZU Admin Portal Dashboard',
      intro:
        `The dashboard is the first workspace in the admin portal navigation. It opens on real-time activity and arranges workforce information into panels, so an administrator can see what is live, what is averaged and what needs attention without opening a report.`,
      items: [
        {
          title: 'Real-Time Activity',
          description: `The headline figures give a current read of the workforce. The recommendation tour's reading the dashboard guide explains what is live, what is averaged and what needs you today.`,
          bullets: ['Active Now', 'Average Productivity', 'Hours Tracked', 'Deep Work', 'Workforce Activity'],
        },
        {
          title: 'AI Executive Summary',
          description: `The AI executive summary surfaces important workforce signals in one place, so leadership can see which areas deserve a closer look.`,
          bullets: ['Most Improved', 'Top Performers', 'Overloaded', 'Disengaged'],
          note: `These are signals for review, and the activity context behind each one stays available to check.`,
        },
        {
          title: 'Live Workforce and Employee-Level Panels',
          description: `Employee-level panels sit alongside the organisation-level figures, so a manager can move from the overall picture to individual employees.`,
          bullets: ['Live Workforce', 'Productivity Leaderboard'],
        },
        {
          title: 'Needs Attention and Quick Actions',
          description: `Needs attention collects the areas that may require review, and quick actions provide shortcuts to common next steps from the dashboard itself.`,
        },
        {
          title: 'Where Time Goes and Top Applications',
          description: `These panels show how tracked work time is distributed across applications, so it is clear where the working day is actually spent.`,
          bullets: ['Where Time Goes', 'Top Applications'],
        },
        {
          title: 'Focus Quality and Deep Work',
          description: `Focus quality and deep work add a view of concentration to tracked hours, so the dashboard is not limited to how long people were working.`,
        },
      ],
    },
  ],

  // Employees
  '/admin/employees': [
    {
      eyebrow: 'Employees',
      heading: 'Working Inside the Employees Workspace',
      intro:
        `Employees is the admin portal workspace where the roster lives. It follows an employee from being added, through activation of the desktop agent, to day-to-day activity, and it is where an employee can be deactivated.`,
      items: [
        {
          title: 'Headcount at a Glance',
          description: `Headline counts break the roster down by where each employee is in the activation journey.`,
          bullets: ['Headcount', 'Activated', 'Pending', 'Deactivated'],
        },
        {
          title: 'Add Employee',
          description: `Add employee puts someone on the roster. This comes first because nothing is captured until someone is on the roster.`,
        },
        {
          title: 'From Pending to Activated',
          description: `An employee is pending until the desktop agent runs once with their code. The activation code is 16 characters long and ties the device to your organisation.`,
        },
        {
          title: 'The Employee Table',
          description: `Each row brings the details together in one place, with the manager column showing who the employee reports to.`,
          bullets: ['Employee', 'Employee ID', 'Email', 'Department', 'Manager', 'Status', 'Last Activity', 'Productivity'],
        },
        {
          title: 'Agent Activity and Last Activity',
          description: `Agent activity and last activity show whether an employee's agent is reporting. When tracking stops, open the employee's page, the last-seen time tells you whether the agent is running at all.`,
        },
        {
          title: 'Deactivating an Employee',
          description: `Deactivating an employee from employees revokes the agent's token, so the agent stops tracking. Deactivated employees are counted separately from activated and pending ones.`,
        },
      ],
    },
  ],

  // Managers
  '/manager': [
    {
      eyebrow: 'Managers',
      heading: 'Managing Managers in the Admin Portal',
      intro:
        `The managers workspace gives administrators an overview of the people who run teams: who is active, who has been invited, how well employees are covered, and how each team is doing. It sits beside behaviour intelligence in the manager workspace area of ZUZU.`,
      items: [
        {
          title: 'Manager Headcount',
          description: `Summary counts show the state of the manager roster at a glance.`,
          bullets: ['Active managers', 'Invited managers', 'Managers needing attention'],
        },
        {
          title: 'Employee Coverage',
          description: `Coverage figures show how the organisation's employees are assigned to managers, and where gaps exist.`,
          bullets: ['Employees with manager', 'Unassigned employees', 'Average span of control', 'Managers with no reports'],
        },
        {
          title: 'Team Health',
          description: `Each manager's team is summarised in one of four states, as a signal to review alongside the underlying activity.`,
          bullets: ['Healthy', 'Watch', 'Needs attention', 'Not enough data'],
        },
        {
          title: 'Approvals & Access',
          description: `An access panel tracks the state of manager accounts, so invitations that have not been accepted and dormant accounts are easy to spot.`,
          bullets: ['Invites accepted', 'Deactivated accounts', 'No sign-in in 30 days'],
        },
        {
          title: 'Manager Table and Filters',
          description: `Filter managers by department, team health and workload. The table lists each manager with their team's figures.`,
          bullets: ['Manager', 'Department', 'Direct Reports', 'On Shift Now', 'Team Productivity', 'Team Health', 'Status'],
        },
        {
          title: 'Delegating to Managers',
          description: `The recommendation tour's delegating to managers guide covers what a manager can see and how their team is scoped. Managers see only their own reports, and cannot change settings.`,
        },
      ],
    },
  ],

  '/product/manager-workspace': [
    {
      eyebrow: 'Manager Workspace',
      heading: 'Scoped Team Visibility in Practice',
      intro:
        `The manager workspace is deliberately narrower than the admin portal. Here is how that scoping shows up when a manager gets started and reviews their team.`,
      items: [
        {
          title: 'Only Their Own Reports',
          description: `Managers see only their own reports, and cannot change settings. Organisation-wide configuration stays with administrators.`,
        },
        {
          title: 'Getting a Manager Started',
          description: `Invite a manager is one of the six setup steps in the recommendation tour. Administrators can then follow invitations, accepted access and account status from the managers workspace.`,
        },
        {
          title: 'Reviewing Flags in Scope',
          description: `In AI work, the summary cards are labelled in your scope, so flagged frames, reviewed verdicts and awaiting-review counts reflect the person doing the review.`,
        },
      ],
    },
    {
      eyebrow: 'Manager Workspace',
      heading: 'What Managers Review in Their Workspace',
      intro:
        `The manager workspace is the day-to-day view built for managers. It brings together what a manager needs to review for their own team, without the wider administrative controls.`,
      items: [
        {
          title: 'Activity, Attendance and Reports Together',
          description: `Activity, attendance and reports for the manager's own team sit in one workspace rather than in separate tools.`,
        },
        {
          title: 'Today and History',
          description: `Current-day attendance is shown alongside historical data, so a manager can see today's status and prior trends in one place.`,
        },
        {
          title: 'Screenshots and AI Reports',
          description: `Periodic screenshots captured through the Windows agent, and AI reports for the manager's team, are reviewable from the workspace.`,
        },
        {
          title: 'Review, Not Configure',
          description: `Monitoring configuration such as privacy controls is managed in the admin portal. The manager workspace is focused on reviewing the resulting data.`,
        },
        {
          title: 'Fuller Than Team at a Glance',
          description: `Team at a glance is a summarised overview of team activity. The manager workspace is the fuller place to review activity, attendance, screenshots and reports in detail.`,
        },
        {
          title: 'Shared Teams',
          description: `Access follows how the admin portal assigns managers to teams, which supports more than one manager being scoped to the same team.`,
        },
      ],
    },
  ],

  // Reports
  '/reports': [
    {
      eyebrow: 'Report Library',
      heading: 'The ZUZU Report Library and Core Metrics',
      intro:
        `Reports in the admin portal combine a live workspace with a library of report types. The same core metrics and executive highlights that appear elsewhere in ZUZU are available to scope and export here.`,
      items: [
        {
          title: 'Core Metrics',
          description: `The headline figures for a reporting period.`,
          bullets: ['Hours Tracked', 'Average Productivity', 'Average Focus', 'Deep Work'],
        },
        {
          title: 'AI Executive Highlights',
          description: `Reports carry the same executive signals used across ZUZU, so a period can be reviewed for the people and teams that stand out.`,
          bullets: ['Most Improved', 'Top Performers', 'Overloaded', 'Disengaged'],
        },
        {
          title: 'Automated Delivery',
          description: `Some reporting arrives without being requested, through daily AI reports and weekly digest emails. Digests can go to the whole organisation or to a specific manager.`,
          bullets: ['Daily AI Reports', 'Weekly Digest Emails'],
        },
        {
          title: 'On-Demand Exports',
          description: `Any report can also be exported when needed, in the formats below.`,
          bullets: ['PDF', 'Excel', 'CSV'],
        },
      ],
    },
    {
      eyebrow: 'Report Library',
      heading: 'Every Report Type in the ZUZU Report Library',
      intro:
        `The report library lists each report type by name, so you can pick the one that matches the question you are asking. Here is what each one covers.`,
      items: [
        {
          title: 'Employee Activity Export',
          description: `Tracked activity for an individual employee across a selected reporting period, which can be exported as PDF, Excel or CSV.`,
        },
        {
          title: 'Team Analytics Overview',
          description: `Team-level reporting that brings productivity, tracked time, focus and work activity together, so a manager can see how a team worked over the period.`,
        },
        {
          title: 'Focus & Distraction Report',
          description: `Relates tracked work time to focus and distraction patterns, alongside the focus quality and deep work figures used elsewhere in ZUZU.`,
        },
        {
          title: 'Application & Website Usage',
          description: `Shows which applications and websites tracked work time was spent in, drawn from the application and window activity the desktop agent records.`,
        },
        {
          title: 'Attendance & Activity Roster',
          description: `Combines attendance information with activity data for the period, giving a broader view of employee work patterns than either one alone.`,
        },
        {
          title: 'Period Comparison',
          description: `Sets one reporting period against another, so a change in hours or activity can be checked against what came before.`,
        },
        {
          title: 'AI Daily Reports',
          description: `One AI report per employee per day, browsable by year, month and day, with PDF downloads and email digests.`,
        },
        {
          title: 'Workforce Intelligence Q&A',
          description: `Plain-English questions over your own workforce data, starting from predefined questions such as workforce productivity and burnout signals.`,
        },
        {
          title: 'AI Work Review',
          description: `Brings the AI work review process into the report library. In AI work, a verdict is recorded against each flagged frame, and engine agreement shows the share of reviewed flags a human confirmed.`,
        },
        {
          title: 'Wellbeing & Burnout Forecast',
          description: `Predicted burnout risk with the drivers behind it and a weeks-to-risk view where available. It is a forecast to review, not a performance ranking or a diagnosis.`,
        },
        {
          title: 'AI Token Usage',
          description: `Token usage and spend, attributed per employee and per model.`,
        },
      ],
    },
  ],

  '/reports/export-reports': [
    {
      eyebrow: 'Delivery & Exports',
      heading: 'Automated Delivery and On-Demand Exports in ZUZU',
      intro:
        `ZUZU separates reports that arrive on their own from reports you pull when you need them. Knowing which is which makes it easier to choose the right route for a given audience.`,
      items: [
        {
          title: 'Automated Delivery',
          description: `Daily AI reports and weekly digest emails reach the people who need them on a schedule, without anyone running a report.`,
        },
        {
          title: 'On-Demand Exports',
          description: `When a report is needed for a particular question or period, it can be exported as PDF, Excel or CSV from the report library.`,
        },
        {
          title: 'Downloads From AI Reports',
          description: `The AI reports workspace has its own download reports and export CSV actions, alongside the employee activity export in the report library.`,
        },
      ],
    },
  ],

  // AI Reports
  '/product/ai-reports': [
    {
      eyebrow: 'AI Reports',
      heading: 'How ZUZU AI Reports Turn Workforce Activity Into Daily Intelligence',
      intro:
        `The AI reports workspace gathers the AI-written report for each employee into one place, with period views, summary figures and downloads. It sits in the admin portal navigation alongside insights, wellbeing and AI work.`,
      items: [
        {
          title: 'Daily Employee Reports',
          description: `ZUZU generates one AI report per employee per day. The recommendation tour describes it as what the AI writes up every night, with a review workflow on it.`,
        },
        {
          title: 'Choose a Period',
          description: `Switch between daily, weekly and monthly views and choose the span of time under review.`,
          bullets: ['7 days', '30 days', '90 days'],
        },
        {
          title: 'Summary Figures',
          description: `The figures at the top of the workspace summarise the period before you open any individual report.`,
          bullets: ['Average Productivity', 'Tracked Time', 'Coverage'],
        },
        {
          title: 'The Employee Report Table',
          description: `Reports are listed by employee and by date, and can be browsed by year, month and day, so a specific person's report on a specific day is easy to find.`,
        },
        {
          title: 'Download and Export',
          description: `Download reports and export CSV take the period out of the portal. Reports can also be downloaded as PDFs and are distributed through email digests.`,
        },
        {
          title: 'Insights, Wellbeing and AI Work',
          description: `AI reports connects to neighbouring workspaces: insights for workforce questions, wellbeing for burnout signals, and AI work for reviewing flagged behaviour changes.`,
          bullets: ['Insights', 'Wellbeing', 'AI Work'],
        },
      ],
    },
    {
      eyebrow: 'AI Reports',
      heading: 'Who Reads AI Reports, and Where',
      intro:
        `An AI report is written once per employee per day. Where it is read depends on the role of the reader.`,
      items: [
        {
          title: 'What Goes Into a Report?',
          description: `An AI employee report combines one employee's activity, attendance and screenshot context into a single summary.`,
        },
        {
          title: 'Where Managers Review',
          description: `Managers review AI reports for their own team from the manager workspace, rather than in a separate reporting tool.`,
        },
        {
          title: 'Where Admins Review',
          description: `AI workforce reports, the organisation-wide counterpart, are reviewed by admins and leadership through the admin portal.`,
        },
        {
          title: 'Who Gets the Digest?',
          description: `Reports are also distributed through email digests, which can go to the whole organisation or to a specific manager.`,
        },
      ],
    },
  ],

  // Insights
  '/workforce-insights': [
    {
      eyebrow: 'Workforce Intelligence',
      heading: 'Workforce Intelligence Q&A and Organisation Health',
      intro:
        `Insights is the admin portal workspace for asking questions about your workforce and reading organisation-level signals. It combines a question-and-answer layer with a set of areas that summarise how the organisation is working.`,
      items: [
        {
          title: 'Predefined Questions',
          description: `Workforce intelligence Q&a offers predefined questions as starting points. The recommendation tour calls it the natural-language layer over your own data.`,
          bullets: ['Workforce Productivity', 'Declining Trends', 'Overall Workforce', 'Burnout Signals', 'Attention Areas'],
        },
        {
          title: 'Organisation Health Figures',
          description: `Headline figures give a quick read of the organisation before you go deeper.`,
          bullets: ['Average Productivity', 'Focus', 'Deep Work', 'Needs Attention'],
        },
        {
          title: 'AI Executive Highlights',
          description: `Executive highlights bring forward the same workforce signals used on the dashboard and in reports.`,
          bullets: ['Most Improved', 'Top Performers', 'Overloaded', 'Disengaged'],
        },
        {
          title: 'When the Organisation Works',
          description: `This view shows when activity happens across the organisation, alongside where time goes and where focus is lost, so working patterns can be read across the day.`,
        },
        {
          title: 'Actionable Recommendations',
          description: `Recommendations are tied to specific observations in the available data, rather than being generic advice.`,
        },
        {
          title: 'Also in Insights',
          description: `Further areas of the insights workspace, covered in more detail elsewhere in ZUZU:`,
          bullets: ['Workforce Trend', 'Department Benchmarking', 'Burnout Risk', 'AI Review Trust'],
        },
      ],
    },
  ],

  '/ai-analytics/executive-workforce-insights': [
    {
      eyebrow: 'AI Executive Summary',
      heading: 'Where Executive Signals Appear Across ZUZU',
      intro:
        `The same set of executive signals turns up in several admin portal workspaces, so leadership can meet them wherever they start.`,
      items: [
        {
          title: 'On the Dashboard',
          description: `The AI executive summary on the dashboard shows most improved, top performers, overloaded and disengaged as part of the current view of the workforce.`,
        },
        {
          title: 'In Reports and Insights',
          description: `Reports and insights each carry AI executive highlights, so the same signals can be reviewed over a reporting period or alongside organisation health figures.`,
        },
        {
          title: 'In AI Reports',
          description: `AI reports also lists a may need coaching finding, so a manager can see where a conversation may be useful, with the employee's report behind it.`,
        },
      ],
    },
  ],

  // Workforce analytics + wellbeing
  '/product/workforce-analytics': [
    {
      eyebrow: 'Wellbeing',
      heading: 'Where Wellbeing and Burnout Signals Appear in ZUZU',
      intro:
        `Wellbeing is its own workspace in the admin portal, and burnout signals are also available in other places. In each of them, they are a forecast to review, not a ranking.`,
      items: [
        {
          title: 'The Wellbeing Workspace',
          description: `Wellbeing presents the burnout forecast, with predicted burnout risk, the drivers behind it and the weeks-to-risk view where available.`,
        },
        {
          title: 'Burnout Risk in Insights and Reports',
          description: `Burnout risk is one of the areas in insights, and the wellbeing & burnout forecast is part of the reporting workspaces. Burnout signals is also one of the predefined workforce intelligence questions.`,
        },
        {
          title: 'Reading Burnout Signals Responsibly',
          description: `The recommendation tour has a guide called burnout signals, described as an early-warning forecast and how to read it responsibly.`,
        },
      ],
    },
    {
      eyebrow: 'Workforce Analytics',
      heading: 'Reading Workforce Analytics Across the Admin Portal',
      intro:
        `Workforce analytics is not one screen. Its information is spread across the admin portal, so it helps to know which workspace answers which kind of question.`,
      items: [
        {
          title: 'Dashboard for Today',
          description: `Use the dashboard for what is live now: real-time activity, where time goes, top applications and focus quality.`,
        },
        {
          title: 'Insights for Patterns',
          description: `Use insights for organisation-level patterns: organisation health, workforce trend, department benchmarking and where focus is lost.`,
        },
        {
          title: 'Reports for a Period',
          description: `Use reports when a question is about a defined period, or when the answer needs to leave the portal as a PDF, Excel or CSV file.`,
        },
        {
          title: 'AI Reports for Each Person',
          description: `Use AI reports for the per-employee daily write-up, with weekly and monthly views over 7, 30 or 90 days.`,
        },
      ],
    },
    {
      eyebrow: 'Workforce Analytics',
      heading: 'What Workforce Analytics Covers in ZUZU',
      intro:
        `Workforce analytics turns the activity, attendance and focus data ZUZU already captures into trends and comparisons, at individual, team and organisation level.`,
      items: [
        {
          title: 'Trends Over Time',
          description: `Activity, attendance and focus data become trend views, such as how productive time changes across days or weeks for a team.`,
        },
        {
          title: 'Productivity Rate',
          description: `The productivity rate is an index derived from how time is split between applications and sites categorised as productive and non-productive during tracked hours.`,
        },
        {
          title: 'Individual, Team and Organisation Views',
          description: `Analytics can be reviewed for an individual employee and aggregated up to team and organisation views, so patterns can be compared across the teams a manager or admin can access.`,
        },
        {
          title: 'Any Date Range',
          description: `Views can be filtered to a specific week, month or custom period.`,
        },
        {
          title: 'Kept Current',
          description: `Analytics reflect activity as it is captured through the day, rather than appearing only after a day is complete.`,
        },
        {
          title: 'From One Day to Many',
          description: `The day-end report summarises a single day, and workforce analytics tracks and compares that same data over longer periods. Analytics and reporting data can be exported for use outside ZUZU.`,
        },
      ],
    },
  ],

  // Productivity, focus, role context
  '/solutions/employee-productivity': [
    {
      eyebrow: 'Focus & Deep Work',
      heading: 'Where to See Focus and Deep Work in ZUZU',
      intro:
        `Focus and deep-work information appears in several places in the admin portal, each suited to a different question.`,
      items: [
        {
          title: 'Focus Quality on the Dashboard',
          description: `The dashboard's focus quality and deep work panels give a current view of concentration alongside hours tracked.`,
        },
        {
          title: 'Average Focus in Reports',
          description: `Reports carry average focus and deep work as core metrics, and the report library includes a focus & distraction report.`,
        },
        {
          title: 'Where Focus Is Lost in Insights',
          description: `Insights includes where focus is lost and deep work alongside organisation health, to show patterns across the organisation.`,
        },
      ],
    },
  ],

  '/platform/employee-productivity-software': [
    {
      eyebrow: 'Productivity Score',
      heading: 'Productivity Score, Role Context and Focus in ZUZU',
      intro:
        `ZUZU includes an employee productivity score, and role context is what lets the engine understand whether observed activity advances a person's expected work.`,
      items: [
        {
          title: 'A Score That Starts Generic',
          description: `Productivity scores are generic until the AI knows what the job is. Describing roles is one of the six setup steps in the recommendation tour.`,
        },
        {
          title: 'Meaningful From Day One',
          description: `With a role described, a new hire can receive a meaningful score from day one, because the engine can judge their activity against their function.`,
        },
        {
          title: 'Reviews Do Not Rewrite the Score',
          description: `Confirming or correcting a flag in AI work records a verdict; it does not change the employee's productivity score retroactively.`,
        },
        {
          title: 'Productivity Rate Is Described Separately',
          description: `The productivity rate is a workforce analytics metric described on its own page.`,
        },
      ],
    },
  ],

  '/platform/employee-performance-insights': [
    {
      eyebrow: 'AI Work',
      heading: 'Reviewing What the AI Flagged in ZUZU',
      intro:
        `Performance-relevant signals in ZUZU come from AI reports and from AI work, where behaviour changes are flagged for a person to review rather than settled automatically.`,
      items: [
        {
          title: 'A Flag Is a Deviation From Their Own Behaviour',
          description: `Every flag is a deviation from that employee's own behaviour, never a rule about apps or roles.`,
        },
        {
          title: 'A Person Confirms or Corrects',
          description: `Each flagged frame gets a human verdict. The verdict is recorded against the frame, and engine agreement shows the share of reviewed flags a human confirmed.`,
        },
        {
          title: 'Verdicts Feed the Precedent Set',
          description: `Recorded verdicts feed the organisation's precedent set, which teaches the engine your organisation's norms.`,
        },
        {
          title: 'AI Reports Findings',
          description: `AI reports surfaces most improved, top performers, overloaded, disengaged and may need coaching findings for a manager to review with the activity context behind them.`,
        },
      ],
    },
  ],

  '/activity/productivity-through-activity-insights': [
    {
      eyebrow: 'Activity Context',
      heading: 'The Activity Context Behind Productivity in ZUZU',
      intro:
        `Productivity information is easier to read when the activity behind it is visible. These are the places in the admin portal where that context sits.`,
      items: [
        {
          title: 'Where Time Goes and Top Applications',
          description: `The dashboard's where time goes and top applications panels show how tracked time is spread across applications.`,
        },
        {
          title: 'Activity Judged Against the Role',
          description: `Role context lets the engine judge whether observed activity advances a person's expected work, so the same activity can read differently for different roles.`,
        },
        {
          title: 'When an Activity Looks Scored Wrongly',
          description: `Contact support lists an activity was scored wrongly among its four most common questions, and a ticket is the fastest way to raise it with the platform team.`,
        },
      ],
    },
  ],

  '/activity/work-activity-insights': [
    {
      eyebrow: 'Application & Website Usage',
      heading: 'Application and Website Usage Reporting in ZUZU',
      intro:
        `Work activity insights draw on application-level activity. The admin portal presents it in the dashboard and in the report library.`,
      items: [
        {
          title: 'Top Applications',
          description: `The dashboard's top applications panel shows which applications are used most during tracked work.`,
        },
        {
          title: 'Application & Website Usage Report',
          description: `The report library includes an application & website usage report, so the same view can be scoped to a period and exported.`,
        },
        {
          title: 'Focus & Distraction Report',
          description: `A focus & distraction report in the same library covers focus and distraction, so application time can be read alongside it.`,
        },
      ],
    },
  ],

  '/product/employee-activity': [
    {
      eyebrow: 'Application & Website Usage',
      heading: 'Application and Website Usage in the Admin Portal',
      intro:
        `The desktop agent's application and window activity reaches administrators through several admin portal views.`,
      items: [
        {
          title: 'Top Applications',
          description: `A dashboard panel showing the applications used most during tracked time.`,
        },
        {
          title: 'Where Time Goes',
          description: `Available on the dashboard and in insights, it shows how tracked work time is distributed.`,
        },
        {
          title: 'Application & Website Usage Report',
          description: `A report in the library that scopes application and website activity to a period and can be exported.`,
        },
        {
          title: 'Activity Judged in Context',
          description: `Role context helps the engine judge whether observed activity advances a person's expected work, rather than treating an application as good or bad on its own.`,
        },
      ],
    },
    {
      eyebrow: 'Employee Activity',
      heading: 'What the Windows Agent Records, and How It Reaches Your Reports',
      intro:
        `Employee activity is the application and website layer of ZUZU's monitoring. It is captured on the device by the Windows agent and then flows into the dashboard, the report library and AI reports.`,
      items: [
        {
          title: 'Applications and Sites, With Time',
          description: `The agent records which applications and websites are used while a device is active, and for how long each one is used.`,
        },
        {
          title: 'Not Keystrokes',
          description: `Employee activity records which applications and sites are in use, not the content typed and not individual keystrokes.`,
        },
        {
          title: 'Idle Time Kept Separate',
          description: `Periods with no input or foreground activity are recorded separately from active application usage, so idle stretches do not blur into working time.`,
        },
        {
          title: 'Reviewed per Employee or per Team',
          description: `Activity is captured at the individual level first, then summarised for managers in team-level views. It is tracked and reviewed independently of screenshots.`,
        },
        {
          title: 'Feeding Reports and Trends',
          description: `A single day of activity also feeds the day-end report and workforce analytics, and it is the data behind the daily AI report for each employee.`,
        },
        {
          title: 'Employees Can Review Their Own',
          description: `Employees can review their own activity and attendance through the employee profile.`,
        },
      ],
    },
  ],

  '/activity/activity-trends': [
    {
      eyebrow: 'Trends',
      heading: 'Where Activity Trends Appear in the Admin Portal',
      intro: `Trends over time are available in insights, reports and AI reports.`,
      items: [
        {
          title: 'Workforce Trend',
          description: `Insights includes a workforce trend view, alongside department benchmarking and organisation health.`,
        },
        {
          title: 'Period Comparison',
          description: `The report library includes a period comparison report, for setting one reporting period against another.`,
        },
        {
          title: '7, 30 And 90 Days',
          description: `AI reports can be viewed over 7, 30 and 90 days, so a trend can be checked over a short or a longer span.`,
        },
      ],
    },
  ],

  // AI Work / behaviour intelligence
  '/solutions/behaviour-intelligence': [
    {
      eyebrow: 'AI Work',
      heading: 'Where to Find AI Work Across ZUZU',
      intro:
        `AI work is the admin portal workspace for behaviour-change detection and review. It is reachable from more than one place.`,
      items: [
        {
          title: 'In the Portal Navigation',
          description: `AI work sits in the workforce intelligence area of the navigation, next to role context.`,
        },
        {
          title: 'In Reports and AI Reports',
          description: `AI work review appears in the report library, and AI reports has an AI work area beside insights and wellbeing.`,
        },
        {
          title: 'In the Recommendation Tour',
          description: `The reviewing what the AI flagged guide covers how the review queue works and why your verdicts matter.`,
        },
      ],
    },
  ],

  '/manager/behaviour-baselines': [
    {
      eyebrow: 'AI Work',
      heading: `Baselines and the Five-Day Start in AI Work`,
      intro:
        `In AI work, a flag only makes sense against a person's own behaviour. This is what the workspace shows about how that reference point is established.`,
      items: [
        {
          title: `The Employee's Own Behaviour`,
          description: `Every flag is a deviation from that employee's own behaviour, never a rule about apps or roles.`,
        },
        {
          title: 'Five Days of Tracked Activity',
          description: `In AI work, anomaly detection stays off for an employee until they have five days of tracked activity. Until then there is no baseline to diverge from.`,
        },
        {
          title: 'What a New Workspace Shows',
          description: `Because detection waits, a new workspace shows nothing: the summary cards read zero and the list reports that no behaviour change has been flagged in your scope.`,
        },
        {
          title: 'Reviewing Comes After',
          description: `Once flags exist, a person confirms or corrects each one. The verdict is recorded against the flagged frame.`,
        },
      ],
    },
  ],

  '/manager/anomaly-review': [
    {
      eyebrow: 'AI Work Review',
      heading: 'Reviewing AI Work Flags in Practice',
      intro:
        `The AI work review queue is designed to be worked through, not just glanced at. These are the parts of the workspace you will use day to day.`,
      items: [
        {
          title: 'Start With Awaiting Review',
          description: `The awaiting review card counts flags that still need a verdict, and the review queue panel shows progress across the loaded page.`,
        },
        {
          title: 'Narrow by Employee, Verdict and Date',
          description: `Filter the list by flagged status, employee and verdict, and set a from and to date range, to focus a review session.`,
        },
        {
          title: 'Reading the Empty States',
          description: `Before any flags exist, the workspace reports that nothing has been flagged in your scope, that nothing has been recorded yet under reviewed, and that engine agreement is waiting on reviews.`,
        },
        {
          title: 'Keep Reviewing to Calibrate',
          description: `Your verdicts are what calibrate the engine, which is why review flagged activity is one of the six setup steps in the recommendation tour.`,
        },
      ],
    },
  ],

  // Time & attendance
  '/product/time-attendance': [
    {
      eyebrow: 'Hours & Shifts',
      heading: 'Hours Tracked, Attendance and Shift Status in the Admin Portal',
      intro:
        `Time and attendance information appears in several admin portal views, each tuned to a different question.`,
      items: [
        {
          title: 'Hours Tracked',
          description: `Hours tracked is one of the dashboard's headline figures and a core metric in reports.`,
        },
        {
          title: 'Attendance & Activity Roster',
          description: `The report library includes an attendance & activity roster, which lays attendance and activity out together for a period.`,
        },
        {
          title: 'On Shift Now',
          description: `The managers table includes an on shift now column for each manager's team, alongside direct reports and team productivity.`,
        },
      ],
    },
    {
      eyebrow: 'Time & Attendance',
      heading: 'Automatic Attendance and Time Tracking in ZUZU',
      intro:
        `Time & attendance in ZUZU is recorded by the Windows agent rather than entered by hand, so hours reflect when work was actually tracked.`,
      items: [
        {
          title: 'No Manual Timesheets',
          description: `On company-managed devices, clock-ins are captured automatically when the agent starts recording activity for the day, and hours are logged from agent activity. This removes the need for manual timesheets.`,
        },
        {
          title: 'Personal Laptops Are Session-Gated',
          description: `On personal laptops, tracking is limited to a punch-in to punch-out window, through a short-lived permission the agent must keep renewing.`,
        },
        {
          title: 'Sessions, Not One Block',
          description: `The agent records activity in sessions, so a day with breaks or reconnects shows as multiple tracked periods rather than one continuous block. Attendance reflects actual working hours instead of assuming a fixed shift.`,
        },
        {
          title: 'Gaps the Agent Could Not See',
          description: `Stretches such as a sleeping laptop, a restart or a crash go to away time, where they can be approved or rejected. Approved time is added beside tracked hours and never rewrites them.`,
        },
        {
          title: 'The Same Everywhere',
          description: `Because attendance is tied to the Windows agent rather than a location, it is recorded the same way for remote, hybrid and in-office employees.`,
        },
        {
          title: 'Reviewed With Activity',
          description: `Attendance is available in the manager workspace alongside activity data, and it is one of the components summarised in the day-end report.`,
        },
      ],
    },
  ],

  // Governance and audit
  '/admin/governance': [
    {
      eyebrow: 'Audit Logs',
      heading: 'Reviewing the Audit Trail Step by Step',
      intro:
        `The recommendation tour has a guide called the activity trail, described as who changed what, and how to answer a compliance question with it. This is what that workflow looks like in audit logs.`,
      items: [
        {
          title: 'Start From the Summary Cards',
          description: `Events recorded, distinct actors, destructive actions and access & billing show the shape of the trail before you filter it.`,
        },
        {
          title: 'Narrow the Trail',
          description: `Search by action, actor name or target, then use the all actions, all severities and any actor filters and a date range to isolate the events in question.`,
        },
        {
          title: 'Read a Single Event',
          description: `Each event lists when, actor, action, target and severity. Expanding a row reveals further detail, and the timeline view presents the same events in time order.`,
        },
        {
          title: 'Take It Out of the Portal',
          description: `Export CSV takes the filtered trail into a file for a review or a compliance question.`,
        },
      ],
    },
  ],

  // Admin portal
  '/product/admin-portal': [
    {
      eyebrow: 'Portal Workspaces',
      heading: 'A Guide to the Admin Portal Workspaces',
      intro:
        `Beyond the newer workspaces above, the admin portal navigation begins with the workspaces most organisations use every day.`,
      items: [
        {
          title: 'People: Employees and Managers',
          description: `Employees is the roster and activation workspace. Managers tracks manager coverage, team health and access.`,
        },
        {
          title: 'Reporting and Intelligence',
          description: `Dashboard, reports, AI reports, insights and wellbeing cover live activity, report exports, per-employee AI write-ups, workforce questions and burnout forecasts.`,
        },
        {
          title: 'Settings and Monitoring Policy',
          description: `Settings holds the monitoring policy: the settings that change what is captured, and for how long. Capture cadence, retention and password redaction apply to everyone.`,
        },
      ],
    },
    {
      eyebrow: 'Administration',
      heading: 'What Administrators Control From the Admin Portal',
      intro:
        `The admin portal handles the organisation-wide side of ZUZU: who is in the organisation, what is captured, and who can see it.`,
      items: [
        {
          title: 'Employees, Teams and Managers',
          description: `Adding employees and assigning them to teams and managers is done in the admin portal, which also determines which teams and data each manager can view in the manager workspace.`,
        },
        {
          title: 'Windows Agent Rollout',
          description: `Administrators oversee how the Windows agent is rolled out and maintained across the organisation's devices.`,
        },
        {
          title: 'Privacy Controls',
          description: `Private-region redaction and other privacy controls are set at the admin level, so they apply consistently before monitoring data is captured.`,
        },
        {
          title: 'Organisation-Wide Reporting',
          description: `Admins can access reporting and analytics across the organisation, rather than being limited to one team's data.`,
        },
        {
          title: 'A Level Above',
          description: `The super admin layer sits above standard admin portal access for broader oversight across admins and teams.`,
        },
        {
          title: 'Administrators, Not Managers',
          description: `The admin portal is intended for administrators. Managers work day to day from the manager workspace, which is scoped to their own teams.`,
        },
      ],
    },
  ],

  // Privacy
  '/screenshot-privacy': [
    {
      eyebrow: 'Monitoring Policy',
      heading: 'One Monitoring Policy, Applied to Everyone',
      intro:
        `Screenshot and privacy settings are part of the admin portal's monitoring policy, so they are set once for the organisation rather than per screen.`,
      items: [
        {
          title: 'Set It Deliberately',
          description: `Set your monitoring policy is one of the six setup steps in the recommendation tour. Capture cadence, retention and password redaction apply to everyone.`,
        },
        {
          title: 'Retention',
          description: `Screenshot retention is configurable by administrators, with a default of 90 days.`,
        },
        {
          title: 'On-Device Redaction',
          description: `Passwords, banking, webmail, messaging apps and password managers are redacted on the device before a screenshot is stored or uploaded.`,
        },
        {
          title: 'Who Can See What?',
          description: `Access follows role: administrators see organisation-wide, while managers see activity, attendance and reports for their own assigned team.`,
        },
      ],
    },
  ],

  // Product menu pages without a prior block
  '/product/workforce-monitoring': [
    {
      eyebrow: 'Workforce Monitoring',
      heading: 'What Workforce Monitoring Brings Together',
      intro:
        `Workforce monitoring is the broader visibility layer in ZUZU. It combines activity, attendance and periodic screenshots into one view, so managers can see how work happens across a team without switching between tools.`,
      items: [
        {
          title: 'Three Inputs, One View',
          description: `Screenshots are one input alongside activity and attendance data. The monitoring view combines all three rather than being a single feature.`,
          bullets: ['Employee Activity', 'Time & Attendance', 'Screenshots'],
        },
        {
          title: 'Activity Underneath',
          description: `Employee activity is the application and site-level data underneath. In the admin portal it appears as top applications and where time goes on the dashboard, and in the application & website usage report.`,
        },
        {
          title: 'Attendance in the Picture',
          description: `Hours tracked and attendance sit alongside activity, and away time gives a reviewed explanation for stretches the agent could not see.`,
        },
        {
          title: 'Screenshots With Privacy Controls',
          description: `Screenshot capture is configurable, from 1 to 5 minutes or a custom interval, and retention is configurable with a default of 90 days. Private regions are redacted on the device before anything is stored or uploaded.`,
        },
        {
          title: 'One Policy for Everyone',
          description: `Monitoring policy is set once in the admin portal. Capture cadence, retention and password redaction apply to everyone, rather than varying by individual employee by default.`,
        },
        {
          title: 'Scoped Access',
          description: `Managers see monitoring data for the teams they are responsible for, while administrators see it organisation-wide.`,
        },
      ],
    },
    {
      eyebrow: 'Governance',
      heading: 'Reviewing and Governing Monitoring Data',
      intro:
        `Monitoring data is only useful if it is reviewed by people and if changes to how it is captured are accountable. Two admin portal workspaces cover those two sides.`,
      items: [
        {
          title: 'Behaviour Changes Are Reviewed by People',
          description: `In AI work, every flag is a deviation from that employee's own behaviour, never a rule about apps or roles. A person confirms or corrects each flag, and the verdict is recorded.`,
        },
        {
          title: 'Changes to Capture Are Recorded',
          description: `Audit logs records every write in the admin portal, and its access & billing card counts organisation, manager, payment and capture changes.`,
        },
        {
          title: 'Remote, Hybrid and Personal Devices',
          description: `Monitoring behaves the same regardless of where the device is used. On personal laptops, tracking is consent-gated and limited to the punch-in to punch-out session.`,
        },
      ],
    },
  ],

  // Product menu pages without a prior block
  '/product/windows-agent': [
    {
      eyebrow: 'Windows Agent',
      heading: 'How the ZUZU Windows Agent Works on Each Device',
      intro:
        `The Windows agent is the single piece of software ZUZU installs on the employee device. Everything else in the admin portal is built from what it records.`,
      items: [
        {
          title: 'Install on Each Windows Device',
          description: `A desktop installer of roughly 80 MB, run on each Windows device individually. Downloading the file does nothing by itself: capture begins only after the installer has been run, setup completed and the activation code entered.`,
        },
        {
          title: 'Activate With a 16-Character Code',
          description: `Setup asks for a 16-character activation code tied to your organisation. In employees, an employee stays pending until the desktop agent runs once with their code, and then shows as activated.`,
        },
        {
          title: 'Runs From the System Tray',
          description: `The agent shows in the system tray, near the Windows clock, so the employee and IT can see it is present and active. Monitoring settings are not changed from the tray; they are managed centrally in the admin portal.`,
        },
        {
          title: 'Keeps Capturing Offline',
          description: `If the device loses its connection, the agent keeps capturing activity and attendance locally, queues the data, and syncs it once connectivity returns.`,
        },
        {
          title: 'Updates Through a Release Feed',
          description: `The agent stays current through a release feed, so IT does not have to reinstall it on every machine.`,
        },
        {
          title: 'Windows Only',
          description: `The agent runs on Windows devices. There is no macOS or Linux agent. It is included in the 7-day free trial, which covers up to 10 employees with no card required.`,
        },
      ],
    },
    {
      eyebrow: 'Capture & Control',
      heading: 'What the Agent Captures and How It Is Controlled',
      intro:
        `The agent captures data on the device, but it does not decide what is captured. That is set centrally, and it applies to every device running the agent.`,
      items: [
        {
          title: 'What It Captures',
          description: `Four kinds of data originate on the device. Reports, AI reports and workforce analytics are all built from them, with no separate data source.`,
          bullets: ['Activity', 'Attendance', 'Application usage', 'Screenshots, where enabled'],
        },
        {
          title: 'Controlled Centrally',
          description: `Capture cadence, retention and password redaction are set in the admin portal's monitoring policy and apply to everyone. Changes take effect for the agent without a fresh install.`,
        },
        {
          title: 'Redaction on the Device',
          description: `Private regions such as passwords, banking, webmail, messaging apps, password managers and desktop notifications are redacted on the device before a screenshot is stored or uploaded, whether or not the device is online.`,
        },
        {
          title: 'Personal Devices',
          description: `On personal laptops, capture is session-gated to the punch-in to punch-out window, through a short-lived permission the agent must keep renewing.`,
        },
        {
          title: 'When the Agent Stops Tracking',
          description: `The usual causes, in order: the agent was deactivated from employees, which revokes its token; the employee is on a personal device and has not punched in for the shift; or the organisation is suspended for billing. The employee's last-seen time shows whether the agent is running at all.`,
        },
        {
          title: 'Removing the Agent',
          description: `Removing the agent from a device stops new data being recorded for that device.`,
        },
      ],
    },
  ],
}

// Base blocks first, depth blocks after, so the original supplied
// content always leads each page.
export function getExpandedContent(path) {
  const base = EXPANDED_CONTENT[path] ?? []
  const depth = DEPTH_CONTENT[path] ?? []
  const merged = [...base, ...depth]
  return merged.length ? merged : undefined
}
