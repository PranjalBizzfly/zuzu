/*
  Page-specific feature content for the generic CategoryItem template
  (src/pages/CategoryItem.jsx), keyed by `${sectionKey}:${slug}` -- the
  Product and Solutions pages. It replaces the generic "More in
  Product / Solutions" related-cards block with product-documentation-style
  content about the page's own topic, rendered by ExpandedContentSection.

  Every statement here restates something already established elsewhere on
  the site (the Windows Agent, screenshot/privacy, activity, time &
  attendance, manager, admin, AI reports and remote-workforce clusters;
  the Dashboard views; and the verified Admin Portal workspaces in
  src/data/expandedContent.js). No statistics, integrations, formulas or
  rankings are introduced.

  expandedContent.js already renders its own blocks on most of these
  pages, so each entry below covers a different angle from what is there
  (how it works, who uses it, what it does not do) rather than repeating
  it. product:windows-agent has no entry on purpose: its expandedContent
  blocks already document the install-to-capture flow in full, and they
  now occupy the slot the generic block used to.

  Section shape: { eyebrow, heading, intro, stepsHeading?, steps?,
  itemsHeading?, items: [{ title, description, bullets?, note? }] }.
*/

export const PAGE_FEATURE_CONTENT = {
  // ---- Product ----
  'product:workforce-monitoring': [
    {
      eyebrow: 'Screenshot Monitoring',
      heading: 'From Capture to Review: How a ZUZU Screenshot Is Handled',
      intro:
        'Screenshots are the visual input to workforce monitoring. Each one follows the same path: captured on an interval, protected on the device, kept for a set period, and only then reviewed, alongside the activity and attendance data for the same time.',
      stepsHeading: 'The Life of a Screenshot',
      steps: [
        {
          title: 'Captured on an Interval',
          description:
            'The Windows agent takes a still screenshot on the interval an administrator has set, rather than continuously.',
        },
        {
          title: 'Protected on the Device',
          description:
            'Private regions are redacted at the moment of capture, before the image is stored or uploaded.',
        },
        {
          title: 'Kept for the Retention Period',
          description:
            'The screenshot is held for the retention period the organization has configured.',
        },
        {
          title: 'Reviewed in Context',
          description:
            'A manager or administrator opens it next to the activity and attendance data for the same period.',
        },
      ],
      itemsHeading: 'What to Know About Screenshot Monitoring',
      items: [
        {
          title: 'Still Images, Not Recording',
          description:
            'ZUZU captures periodic still screenshots. It does not record audio or video, and it does not run as a continuous feed.',
        },
        {
          title: 'What Redaction Covers',
          description:
            'Redaction is applied automatically to every screenshot, so an employee does not have to mark anything as sensitive. The regions covered:',
          bullets: [
            'Passwords',
            'Banking and financial pages',
            'Webmail',
            'Messaging apps',
            'Password managers',
            'Desktop notifications',
          ],
        },
        {
          title: 'Capture and Redaction Are Separate Controls',
          description:
            'Screenshot monitoring decides whether screenshots are captured at all. Redaction decides what appears inside one that is captured, and it applies whatever interval is set.',
        },
        {
          title: 'Not a Live Feed',
          description:
            'Managers use screenshots for visual context when it is useful, for example to add context to an unusual pattern, rather than watching a live view of the screen.',
        },
        {
          title: 'One Agent, No Extra Install',
          description:
            'Screenshot capture runs through the same Windows agent that records activity and attendance, so there is nothing else to install.',
        },
      ],
    },
  ],

  'product:employee-activity': [
    {
      eyebrow: 'Reading an Employee\'s Day',
      heading: 'Reading an Employee\'s Day: Timeline, Gaps and Reports',
      intro:
        "Once activity has been captured, the useful questions are what a day looked like, what the agent could not see, and how to summarize it. These are the parts of employee activity that answer them.",
      itemsHeading: 'Activity Features',
      items: [
        {
          title: 'Individual Activity Timeline',
          description:
            "An employee's profile lays the workday out as a timeline, showing active focus sessions, collaborative meetings and idle intervals in the order they happened.",
        },
        {
          title: 'Away Time for What the Agent Could Not See',
          description:
            'Stretches with no visibility, such as a sleeping laptop, a restart or a crash, are collected in away time, so a gap in the timeline can be reviewed instead of staying unexplained.',
        },
        {
          title: 'Duration by Tool, Not by File',
          description:
            'Application usage is shown as duration by tool and category. It does not list the individual files or documents that were open, and ZUZU does not track GPS or physical location.',
        },
        {
          title: 'Offline Work Is Not Lost',
          description:
            'If a device loses its connection, the agent keeps capturing locally and syncs the queued activity once connectivity returns.',
        },
        {
          title: 'Reports at Employee, Team and Department Level',
          description:
            'The same activity data is summarized on demand for a selected period, at each level, and can be exported to CSV, Excel or PDF.',
        },
        {
          title: 'Governed by Privacy Controls',
          description:
            'What is captured, and who can see it, is configured through privacy controls in the admin portal. Managers see their own assigned team, and administrators see the whole organization.',
        },
      ],
    },
  ],

  'product:time-attendance': [
    {
      eyebrow: 'Attendance Views',
      heading: 'Attendance Views: From a Single Workday to a Full Month',
      intro:
        'One daily attendance record feeds every view in time & attendance, so a manager can zoom from one employee\'s day out to a full month without switching systems or reconciling figures.',
      itemsHeading: 'Attendance Features',
      items: [
        {
          title: 'Employee Workday',
          description:
            'A per-employee view of a single day, combining attendance and activity data into one picture instead of two separate records.',
        },
        {
          title: 'Daily Work Hours',
          description:
            'A same-day snapshot of how long each person has worked, available to managers in the manager workspace.',
        },
        {
          title: 'Weekly Attendance',
          description:
            'A week-at-a-glance view of who was working and when, including which days were worked, instead of checking one day at a time.',
        },
        {
          title: 'Monthly Attendance',
          description:
            'A full-month view for admins, suited to reviews, payroll cycles and slower-moving trends that day-to-day views can miss.',
        },
        {
          title: 'Employee and Team Attendance Dashboards',
          description:
            "A manager can open one employee's attendance history, or a team-level dashboard that shows patterns across the group at a glance.",
        },
        {
          title: 'Exports Without Payroll Processing',
          description:
            'Attendance and hours can be exported to CSV, Excel or PDF. ZUZU does not process payroll or integrate with payroll or accounting systems, so exports feed your own payroll process.',
        },
      ],
    },
  ],

  'product:ai-reports': [
    {
      eyebrow: 'AI Report Scope',
      heading: 'What an AI Report Is, and What It Is Not',
      intro:
        'AI reports save a manager from reading activity records one row at a time. It helps to know how a report differs from a daily summary, and what sits alongside a report rather than inside it.',
      itemsHeading: 'AI Report Features',
      items: [
        {
          title: 'Daily Summary vs Full Report',
          description:
            "A daily summary condenses one day's activity and attendance into a read of a couple of minutes. Screenshot context belongs to the fuller employee report, not the summary.",
        },
        {
          title: 'Where Flags and Forecasts Live',
          description:
            "Changes from a person's own baseline are surfaced by behaviour intelligence and reviewed in AI work, and the burnout forecast is a related capability under workforce analytics. Neither is a section of the daily report itself.",
        },
        {
          title: 'Evidence, Not a Verdict',
          description:
            'ZUZU does not predict turnover, does not make workforce decisions, and does not guarantee productivity or revenue increases. Decisions stay with your organization.',
        },
      ],
    },
  ],

  'product:workforce-analytics': [
    {
      eyebrow: 'Focus Analytics',
      heading: 'Focus, Deep Work and Benchmarks in Workforce Analytics',
      intro:
        'Beyond total hours, workforce analytics looks at how focused tracked time was and how teams and departments compare. Its data can be exported to PDF for executive decks or to CSV for further analysis.',
      itemsHeading: 'What Each Analysis Tells You',
      items: [
        {
          title: 'Focus Quality and Deep Work',
          description:
            'Focus quality relates tracked work time to focus and distraction patterns. Deep-work information adds context about periods of concentrated work. Both appear when there is sufficient activity data.',
        },
        {
          title: 'Where Focus Is Lost',
          description:
            'Points to periods or patterns where attention may be reduced, giving context for further review rather than a conclusion about anyone.',
        },
        {
          title: 'Peak Focus Windows',
          description:
            'Identifies the hours when a team consistently does its highest-impact work, so meeting-free blocks can be planned around them.',
        },
        {
          title: 'Meeting Load Against Deep Work',
          description:
            'Comparing time in communication and meeting tools with deep-work application usage shows where meeting overhead may be cutting into focus time.',
        },
        {
          title: 'Department Benchmarking',
          description:
            'Compares productivity information across departments using the available data.',
        },
        {
          title: 'Recommendations Name Their Evidence',
          description:
            'Analytics can surface recommendations that name the specific observation behind them, so a reader can see what a suggestion is based on. What to act on stays with your organization.',
        },
      ],
    },
  ],

  'product:manager-workspace': [
    {
      eyebrow: 'Manager Workflow',
      heading: "A Manager's Day in the Workspace",
      intro:
        "The manager dashboard walks through a manager's day in three review steps, each built on data the Windows agent has already captured for the manager's own team.",
      stepsHeading: 'The Daily Review',
      steps: [
        {
          title: 'Morning Shift Check-In',
          description:
            'Confirm on-time attendance as employees sign into the Windows agent, checking shift start timestamps and the first active applications.',
        },
        {
          title: 'Midday Focus and Blockers',
          description:
            'Active-versus-idle ratios and periodic visual captures help identify team members who may be blocked.',
        },
        {
          title: 'Day-End Report Sign-Off',
          description:
            "Open each team member's automated day-end summary, including total hours, peak focus periods and activity digests.",
        },
      ],
      itemsHeading: 'Also in the Workspace',
      items: [
        {
          title: 'Attendance Logs and Timesheet Exports',
          description:
            'Timesheets, attendance logs and active work ratios for the team can be exported as CSV or PDF straight from the workspace.',
        },
        {
          title: 'Behaviour Insights and the Review Queue',
          description:
            "Changes from a person's own baseline are surfaced in the same workspace. Flagged activity routes to a review queue that the manager works through, and nothing happens automatically.",
        },
        {
          title: 'Digests to the Manager',
          description:
            'Team daily digests and weekly report emails are part of how ZUZU delivers report data to managers, without opening the workspace.',
        },
      ],
    },
  ],

  'product:admin-portal': [
    {
      eyebrow: 'Policy, Access and Audit',
      heading: 'Policy, Access and Audit: The Controls Behind the Admin Portal',
      intro:
        'Three of the admin portal\'s controls shape everything else: the monitoring policy that decides what the agent captures, who can access what, and the audit trail that records changes. Here is what each one includes.',
      itemsHeading: 'Control Details',
      items: [
        {
          title: 'Monitoring Policy in Detail',
          description:
            'Screenshot interval (1 to 5 minutes or custom) and screenshot retention (90 days by default) are set here, alongside attendance policy. Personal laptops are capture-gated to the punch-in session.',
        },
        {
          title: 'Access and Sign-In Security',
          description:
            'Access is capability-based rather than a single fixed role, scoped at administrator (organization-wide) and manager (team-level). Two-factor authentication (MFA/OTP) is supported for account access, including admin accounts.',
        },
        {
          title: 'API Keys and Their Logs',
          description:
            'API keys are managed through the portal, with a dedicated API key logs feature for reviewing their activity.',
        },
        {
          title: 'Audit Trail Coverage',
          description:
            'Audit trails cover events across employees, teams, managers, shifts, leave, reports, payments, live capture and organization activity, with severity filtering, a timeline view and export.',
        },
      ],
    },
  ],

  // ---- Solutions ----
  'solutions:remote-workforce': [
    {
      eyebrow: 'Remote Team Features',
      heading: 'How ZUZU Supports a Fully Remote Team',
      intro:
        "When a team never shares an office, visibility has to come from data instead of walking past a desk. ZUZU gives managers of a remote team the same activity, attendance and reports it provides for any team, captured the same way wherever each person works.",
      itemsHeading: 'Remote Workforce Features',
      items: [
        {
          title: "Who's Working Right Now?",
          description:
            "Remote attendance answers who is working and since when without anyone sending a status update. The Windows agent records it the same way for a remote employee as an in-office one.",
        },
        {
          title: 'Time-Zone Independent',
          description:
            'Activity and attendance are captured continuously through the agent, so a manager can check a distributed team regardless of which time zone each person is in.',
        },
        {
          title: 'Work-From-Home Records',
          description:
            'Attendance is tracked through the agent installed on a work device, so working from home produces the same kind of record as any other arrangement.',
        },
        {
          title: 'Visibility for New Remote Hires',
          description:
            "A manager can see a new remote hire's activity and attendance from day one, without needing to be in the room.",
        },
        {
          title: 'Team-Level Activity',
          description:
            'Aggregated activity data shows how a distributed team works together, without opening each person\'s individual record.',
        },
        {
          title: 'Privacy Across Many Locations',
          description:
            "Devices sit in many homes, so what is captured and who can see it is configured centrally through privacy controls. If a connection drops, the agent queues data and syncs it later.",
        },
      ],
    },
  ],

  'solutions:hybrid-workforce': [
    {
      eyebrow: 'Hybrid Team Features',
      heading: 'How ZUZU Handles Office Days and Remote Days',
      intro:
        "A hybrid employee can look different in the data on an office day than on a remote day. ZUZU applies the same activity, attendance and reporting wherever someone worked that day, so the record stays consistent instead of splitting into two systems.",
      itemsHeading: 'Hybrid Workforce Features',
      items: [
        {
          title: 'One Attendance Record',
          description:
            'A hybrid schedule does not need separate attendance systems. One record works the same regardless of whether the day was in the office or remote.',
        },
        {
          title: 'Compare an Office Day With a Remote Day',
          description:
            'Activity and attendance can be reviewed day by day, so a manager can check whether an office day looked different from a remote one.',
        },
        {
          title: 'Same Capture Wherever Work Happens',
          description:
            'The Windows agent captures activity and attendance on the work device in the same way in either location, and the same reporting applies to both.',
        },
        {
          title: 'Weekly Attendance at a Glance',
          description:
            'Weekly attendance groups daily records into a week view that shows which days were worked, built from the same daily data.',
        },
        {
          title: 'Consent on Personal Devices',
          description:
            'If a personal laptop is used, capture is consent-gated and limited to the punch-in to punch-out session rather than running as unrestricted device monitoring.',
        },
      ],
    },
  ],

  'solutions:workforce-visibility': [
    {
      eyebrow: 'Visibility Features',
      heading: 'Where Workforce Visibility Comes From in ZUZU',
      intro:
        'Workforce visibility in ZUZU is not one screen. It is built from the same captured data, presented at the level each reader needs, from who is working right now to organization-wide patterns.',
      itemsHeading: 'Layers of Visibility',
      items: [
        {
          title: 'Live Team Presence',
          description:
            'Team at a glance shows who is clocked in, actively focused or on a break, with cumulative shift hours as they accrue, so an unexpected overtime or a missed shift start can be spotted before the day ends.',
        },
        {
          title: 'Current Attendance',
          description:
            'Attendance status stays current for managers and administrators, so nobody has to ask who is working right now.',
        },
        {
          title: 'Activity Across Applications',
          description:
            'Employee activity shows the apps, sites and tasks behind the hours, so visibility covers what was worked on and not only when.',
        },
        {
          title: 'Team and Organization Views',
          description:
            "A manager sees their own assigned team; administrators see the whole organization, with department-level reports for comparing business units.",
        },
        {
          title: 'Patterns Over Time',
          description:
            'Workforce analytics adds trends and department benchmarking, so visibility extends from a single day to how activity changes over selected periods.',
        },
        {
          title: 'Visibility With Boundaries',
          description:
            'Private regions are redacted on the device, screenshots are captured on an interval rather than streamed live, and privacy controls set what is captured and who can see it.',
        },
      ],
    },
  ],

  'solutions:employee-productivity': [
    {
      eyebrow: 'Productivity Conversations',
      heading: 'Supporting Productivity Conversations With ZUZU Data',
      intro:
        'ZUZU is built to give managers context for a productivity conversation, not a verdict. The data shows how time was spent, and the judgment about what it means stays with the manager.',
      itemsHeading: 'How Managers Use the Data',
      items: [
        {
          title: 'Activity Is Context, Not Output',
          description:
            "More activity does not automatically mean more output. ZUZU presents activity and behaviour data as context for a manager to judge, not as a conclusion.",
        },
        {
          title: 'Preparing for a Conversation',
          description:
            "An AI employee report brings one person's activity, attendance and screenshot context together, so a manager arrives with a complete picture instead of several separate exports.",
        },
        {
          title: 'Coaching Signals',
          description:
            'AI reporting can surface that someone may need coaching, which helps a manager decide where additional context or a direct conversation may be useful.',
        },
        {
          title: 'Changes That Prompt a Conversation',
          description:
            "A flagged change from someone's own baseline is meant to prompt a conversation, not to act as an automatic judgment, and no automated consequence follows.",
        },
      ],
    },
  ],

  'solutions:workforce-reporting': [
    {
      eyebrow: 'Reporting Features',
      heading: 'Reporting Layers and How Each One Is Used',
      intro:
        'ZUZU reports are built automatically from data already captured through the Windows agent, with no manual report-building step. Each layer answers a different question for a different reader, and all of them draw on the same underlying data.',
      itemsHeading: 'Reporting Layers',
      items: [
        {
          title: 'Employee Reports',
          description:
            "One person's activity, attendance and screenshot context in a single AI report, generated once per employee per day and browsable by year, month and day.",
        },
        {
          title: 'Team Reports',
          description:
            'Activity data aggregated to the team, and a team attendance dashboard, so a manager sees how the group worked without opening each individual record.',
        },
        {
          title: 'Department and Organization Reports',
          description:
            'Department reports let administrators compare business units, and AI workforce reports roll everything up organization-wide.',
        },
        {
          title: 'Executive View',
          description:
            'Executive workforce insights are the same AI workforce reports and workforce analytics data, framed for leadership. Decisions remain with your organization.',
        },
        {
          title: 'Automated Delivery',
          description:
            'Daily AI reports, organization-wide or manager-specific email digests and weekly report emails carry reporting to readers without anyone running a report.',
        },
        {
          title: 'Exports for Sharing',
          description:
            'Reports can be exported to PDF, Excel or CSV to share with people outside ZUZU. ZUZU does not process payroll, so exports give your own payroll process accurate hours and activity.',
        },
      ],
    },
  ],

  'solutions:behaviour-intelligence': [
    {
      eyebrow: 'Behaviour Intelligence Workflow',
      heading: 'From Baseline to Verdict: How Behaviour Intelligence Works',
      intro:
        "Behaviour intelligence compares how someone is working now with their own typical pattern, and surfaces a change for a person to review. It never decides what a change means. The steps below show how a shift becomes a recorded review.",
      stepsHeading: 'From a Shift to a Recorded Review',
      steps: [
        {
          title: 'A Baseline Forms',
          description:
            "The baseline is built from a person's own activity and attendance history, data the Windows agent already captures, so there is nothing extra to configure.",
        },
        {
          title: 'A Change Is Flagged',
          description:
            'When activity shifts from that baseline, it is surfaced as flagged activity and routes to a review queue. Nothing happens automatically.',
        },
        {
          title: 'A Person Reviews the Evidence',
          description:
            'The reviewer sees the evidence behind the flag, alongside the activity and attendance context around it and, where enabled, screenshot context.',
        },
        {
          title: 'A Verdict Is Recorded',
          description:
            'The reviewer confirms or corrects the flag, and the verdict is recorded against the flagged frame.',
        },
        {
          title: 'The Engine Learns Your Norms',
          description:
            "Verdicts feed the organisation's precedent set, and engine agreement shows the share of reviewed flags a human confirmed.",
        },
      ],
      itemsHeading: 'What It Does and Does Not Do',
      items: [
        {
          title: 'Behaviour Change vs Activity Anomaly',
          description:
            'A behaviour change is an ongoing shift in pattern. An activity anomaly is a single unusual event, such as an unexpected spike or gap on one day. Both are surfaced as something to look at, not something already decided.',
        },
        {
          title: 'Not Compared With Colleagues',
          description:
            "Comparison is against an individual's own history. It does not compare employees to each other or apply generic job-title rules.",
        },
        {
          title: 'No Automated Consequence',
          description:
            'A flag prompts a conversation. ZUZU does not take action on it, and a manager decides what, if anything, it needs.',
        },
        {
          title: 'Not Personality, Not Turnover',
          description:
            'It looks at work-pattern data such as activity and attendance, not personal or psychological characteristics, and ZUZU does not predict who will quit.',
        },
        {
          title: 'Verdicts Stay With the Flag',
          description:
            "Confirming or correcting a flag records a verdict on that flagged frame only. It is not applied back to change the employee's productivity score after the fact.",
        },
        {
          title: 'Separate From the Burnout Forecast',
          description:
            'Wellbeing and burnout forecasting is a related capability under workforce analytics. Behaviour intelligence is specifically about change from an individual baseline.',
        },
      ],
    },
  ],
}

export function getPageFeatureContent(sectionKey, slug) {
  return PAGE_FEATURE_CONTENT[`${sectionKey}:${slug}`]
}
