// Page-specific FAQ content for the CategoryItem template (src/pages/CategoryItem.jsx),
// keyed by `${sectionKey}:${slug}` matching NAV_SECTIONS in ./navigation.js.
// Every entry has exactly 8 questions, written to be specific to that page's
// feature rather than reusable across pages, and checked against the FAQ hub
// (faqData.js), industryContent.js, and each standalone page's own FAQ_ITEMS
// to avoid repeating a question already asked elsewhere on the site.
export const CATEGORY_ITEM_FAQS = {
  'product:workforce-monitoring': [
    {
      question: 'What does Workforce Monitoring actually show?',
      answer:
        'It brings activity, attendance, and periodic screenshots together into one view, so managers can see how work happens across a team without switching between separate tools.',
    },
    {
      question: 'Is Workforce Monitoring the same thing as screenshot capture?',
      answer:
        'No. Screenshots are one input into workforce monitoring alongside activity and attendance data, the monitoring view combines all three rather than being a single feature.',
    },
    {
      question: 'Does Workforce Monitoring require software on the employee device?',
      answer:
        'Yes, it depends on the ZUZU Windows agent running on each device. There is no monitoring data without the agent installed and active.',
    },
    {
      question: 'Does Workforce Monitoring apply the same rules to every employee, or can it vary person to person?',
      answer:
        'Monitoring configuration such as privacy controls is set at the organization level through the admin portal, so it applies consistently rather than varying by individual employee by default.',
    },
    {
      question: 'Is Privacy Controls configuration part of Workforce Monitoring, or a separate setup step?',
      answer:
        'Privacy controls, including private-region redaction, are configured through the admin portal and then apply automatically wherever workforce monitoring captures screenshots.',
    },
    {
      question: 'Who is able to view Workforce Monitoring data for a team?',
      answer:
        'Access is scoped through the manager workspace and admin portal, so managers and admins see monitoring data for the teams they are responsible for.',
    },
    {
      question: 'Does Workforce Monitoring work the same way for remote employees?',
      answer:
        'Yes, monitoring behaves the same regardless of device location, which is what makes it applicable to remote and hybrid teams.',
    },
    {
      question: 'How does Workforce Monitoring relate to Employee Activity?',
      answer:
        'Employee activity is the underlying app and site-level data; workforce monitoring is the broader visibility layer that combines that data with attendance and screenshots.',
    },
  ],

  'product:employee-activity': [
    {
      question: 'What is actually captured as "activity" in ZUZU?',
      answer:
        'Application usage and website visits recorded through the Windows agent while a device is active, including how long each application or site is used.',
    },
    {
      question: 'Does Employee Activity log individual keystrokes?',
      answer:
        'No. It records which applications and sites are being used and for how long, not the content typed or individual keystrokes.',
    },
    {
      question: 'How is idle time separated from active working time?',
      answer:
        'The Windows agent detects periods with no input or foreground activity and records that time separately from active application usage.',
    },
    {
      question: 'Can activity be reviewed for one specific employee?',
      answer:
        'Yes, activity is captured at the individual level first, then summarized for managers in team-level views like team at a glance.',
    },
    {
      question: 'Does Employee Activity separate productive time from non-productive time?',
      answer:
        'Yes, applications and sites are categorized so a manager can see a breakdown of productive versus non-productive activity for a given period.',
    },
    {
      question: 'Is Employee Activity data updated throughout the day, or only afterward?',
      answer:
        'Activity is captured continuously during the workday and reflected in the manager workspace without needing manual entry from the employee.',
    },
    {
      question: "Does Employee Activity roll into a longer-term view, or is it just a single day's data?",
      answer:
        'A single day of activity also feeds into workforce analytics and the day-end report, so it contributes to ongoing trends rather than standing alone.',
    },
    {
      question: 'Can Employee Activity be viewed without also seeing screenshots?',
      answer:
        'Yes, activity data (apps, sites, and time) is tracked and reviewed independently of screenshot capture, which is a separate part of workforce monitoring.',
    },
  ],

  'product:time-attendance': [
    {
      question: 'How are clock-ins recorded in Time & Attendance?',
      answer:
        'On company-managed devices, clock-ins are captured automatically when the Windows agent starts recording activity for the day. On personal laptops, tracking is instead session-gated to a punch-in/punch-out window through a short-lived permission the agent must keep renewing.',
    },
    {
      question: 'Does Time & Attendance replace manual timesheets?',
      answer:
        'Yes, hours worked are logged automatically from agent activity, which is designed to remove the need for employees to fill out manual timesheets.',
    },
    {
      question: 'What happens to attendance if an employee closes their laptop mid-day?',
      answer:
        "The agent stops recording once the device is inactive or offline, so attendance reflects the time the device was actually running and being used.",
    },
    {
      question: 'Can Time & Attendance handle employees who work irregular hours?',
      answer:
        'Attendance is based on when the Windows agent records activity, so it reflects actual working hours rather than assuming a fixed shift pattern.',
    },
    {
      question: 'Where do managers review attendance records?',
      answer:
        'Attendance is available in the manager workspace alongside activity data, so it can be reviewed together rather than as a separate system.',
    },
    {
      question: 'Does Time & Attendance distinguish between multiple short sessions in one day?',
      answer:
        'Yes, the agent records activity in sessions, so a day with breaks or reconnects is reflected as multiple tracked periods rather than one continuous block.',
    },
    {
      question: 'Is attendance data included in the Day-End Report?',
      answer:
        'Yes, attendance is one of the components summarized in the day-end report alongside activity and focus information for that day.',
    },
    {
      question: 'Does Time & Attendance work the same for hybrid employees who split time between office and home?',
      answer:
        'Yes, since attendance is tied to the Windows agent rather than a physical location, it is recorded consistently regardless of where the device is used.',
    },
  ],

  'product:ai-reports': [
    {
      question: 'What is included in an AI Report?',
      answer:
        'An AI report summarizes a period of activity, attendance, and focus data into a written, easier-to-scan summary for a manager or admin to review.',
    },
    {
      question: 'Are AI Reports generated automatically, or do managers have to request them?',
      answer:
        'AI reports are generated from the underlying activity and attendance data without requiring a manager to manually compile the information first.',
    },
    {
      question: 'Do AI Reports make decisions about an employee?',
      answer:
        'No, AI reports summarize what was recorded during a period; interpreting that summary and deciding on any action remains with the manager or admin.',
    },
    {
      question: 'Can AI Reports be generated per employee, not just per team?',
      answer:
        'Yes, reporting is available at the individual employee level as well as rolled up across a team, depending on what a manager is reviewing.',
    },
    {
      question: 'How do AI Reports differ from Workforce Analytics?',
      answer:
        'Workforce analytics presents trends and metrics in dashboards and charts, while AI reports turn similar underlying data into a readable written summary.',
    },
    {
      question: 'Do AI Reports include screenshots?',
      answer:
        'AI reports focus on summarizing activity, attendance, and focus data; screenshots remain available separately in the workforce monitoring view.',
    },
    {
      question: 'Who has access to AI Reports for a team?',
      answer:
        'Access follows the same scoping as the rest of ZUZU, managers see reports for their own teams through the manager workspace, and admins can see more broadly through the admin portal.',
    },
    {
      question: 'Can AI Reports be exported for sharing outside ZUZU?',
      answer:
        'Yes, reporting data in ZUZU supports export so a summary can be shared or archived outside the platform.',
    },
  ],

  'product:workforce-analytics': [
    {
      question: 'What kind of trends does Workforce Analytics surface?',
      answer:
        'It turns activity, attendance, and focus data into trend views over time, such as how productive time changes across days or weeks for a team.',
    },
    {
      question: 'What is the Productivity Rate shown in Workforce Analytics?',
      answer:
        "It's an index derived from how time is split between applications and sites categorized as productive versus non-productive during tracked hours.",
    },
    {
      question: 'Can Workforce Analytics compare performance across different teams?',
      answer:
        'Yes, analytics can be viewed at the team level, which allows a manager or admin to compare patterns across the teams they have access to.',
    },
    {
      question: 'Does Workforce Analytics update in real time, or only at the end of the day?',
      answer:
        'Analytics reflect activity as it is captured through the day, so trends update continuously rather than only appearing after a day is complete.',
    },
    {
      question: 'Can Workforce Analytics be filtered to a specific date range?',
      answer:
        'Yes, analytics views support filtering by date range so trends can be reviewed for a specific week, month, or custom period.',
    },
    {
      question: 'Does Workforce Analytics show individual employees or only aggregated data?',
      answer:
        'Both, analytics can be reviewed at the individual employee level and aggregated up to team and organization views.',
    },
    {
      question: 'How does Workforce Analytics relate to the Day-End Report?',
      answer:
        "The day-end report summarizes a single day, while workforce analytics is where that same data is tracked and compared across longer periods.",
    },
    {
      question: 'Can Workforce Analytics data be exported for use outside ZUZU?',
      answer:
        'Yes, analytics and reporting data support export so trends can be shared or reviewed outside the ZUZU dashboard.',
    },
  ],

  'product:manager-workspace': [
    {
      question: 'What can a manager do from the Manager Workspace that they cannot do elsewhere in ZUZU?',
      answer:
        "It's the day-to-day view built for managers specifically, activity, attendance, and reports for their own team, without the broader administrative controls in the admin portal.",
    },
    {
      question: 'Does the Manager Workspace show every employee in the company?',
      answer:
        'No, it is scoped to the teams a manager is responsible for, rather than showing every employee across the organization.',
    },
    {
      question: 'Can a manager review screenshots directly from the Manager Workspace?',
      answer:
        'Yes, periodic screenshots captured through the Windows agent are reviewable from the manager workspace alongside activity and attendance.',
    },
    {
      question: 'Is the Manager Workspace where AI Reports are reviewed?',
      answer:
        'Yes, AI reports for a manager’s team are accessible from the manager workspace rather than a separate reporting tool.',
    },
    {
      question: 'Can a manager customize what their team is monitored for?',
      answer:
        'Monitoring configuration such as privacy controls is managed through the admin portal; the manager workspace is focused on reviewing the resulting data.',
    },
    {
      question: 'Does the Manager Workspace show attendance for the current day only?',
      answer:
        'It shows current-day attendance alongside historical data, so a manager can review both today’s status and prior trends in one place.',
    },
    {
      question: 'How is the Manager Workspace different from Team at a Glance?',
      answer:
        'Team at a glance is a summarized overview of team activity, while the manager workspace is the fuller workspace for reviewing activity, attendance, screenshots, and reports in detail.',
    },
    {
      question: 'Can multiple managers share oversight of the same team?',
      answer:
        'Access to a team in the manager workspace is based on how the admin portal assigns managers to teams, which supports more than one manager being scoped to the same team.',
    },
  ],

  'product:admin-portal': [
    {
      question: 'What does the Admin Portal control that the Manager Workspace does not?',
      answer:
        'The admin portal handles organization-wide settings, configuring privacy controls, managing which managers oversee which teams, and administering the Windows agent across devices.',
    },
    {
      question: 'Can the Admin Portal restrict what data managers are able to see?',
      answer:
        'Yes, access scoping is configured through the admin portal, which determines which teams and data a given manager can view in the manager workspace.',
    },
    {
      question: 'Is the Admin Portal where Privacy Controls like redaction are configured?',
      answer:
        'Yes, private-region redaction and other privacy controls are set at the admin level so they apply consistently before monitoring data is captured.',
    },
    {
      question: 'Does the Admin Portal manage Windows Agent deployment?',
      answer:
        'Yes, administrators use the admin portal to oversee how the Windows agent is rolled out and maintained across the organization’s devices.',
    },
    {
      question: 'Is there a separate level of access above a standard admin?',
      answer:
        'Yes, the super admin layer sits above standard admin portal access for broader oversight across admins and teams.',
    },
    {
      question: 'Can the Admin Portal be used to review company-wide reports, not just one team?',
      answer:
        'Yes, admins can access reporting and analytics across the organization rather than being limited to a single team’s data.',
    },
    {
      question: 'Does the Admin Portal handle employee onboarding?',
      answer:
        'Yes, adding employees and assigning them to teams and managers is managed through the admin portal.',
    },
    {
      question: 'Is the Admin Portal accessible to managers, or only administrators?',
      answer:
        'The admin portal is intended for administrators; managers work day-to-day from the manager workspace, which is scoped to their own teams.',
    },
  ],

  'product:windows-agent': [
    {
      question: 'Does every ZUZU feature rely on the Windows Agent, or are some parts independent of it?',
      answer:
        'Every core feature, activity, attendance, screenshots, and the reports built from them, originates from data the Windows agent records, so there is no separate data source apart from it.',
    },
    {
      question: 'Is the Windows Agent included in the free trial, or is it a separate add-on?',
      answer:
        'The Windows agent is included as part of the standard 7-day free trial covering up to 10 employees, rather than being a separate purchase.',
    },
    {
      question: "Who is responsible for rolling the Windows Agent out as a company's team grows?",
      answer:
        'Administrators manage agent deployment for new employees and devices through the admin portal as a team grows.',
    },
    {
      question: 'Does the Windows Agent need to be reinstalled if an employee changes teams?',
      answer:
        'No, the agent itself stays tied to the device; which manager or team an employee is assigned to is managed separately through the admin portal.',
    },
    {
      question: "Can Admin Portal settings change what the Windows Agent captures without reinstalling it?",
      answer:
        'Yes, configuration such as privacy controls is applied at the organization level through the admin portal and takes effect for the agent without a fresh install.',
    },
    {
      question: 'Does removing the Windows Agent from a device stop monitoring for that device right away?',
      answer:
        'Yes, since activity, attendance, and screenshot capture all depend on the agent running, removing it stops new data being recorded for that device.',
    },
    {
      question: 'Is the Windows Agent the only way activity data reaches Workforce Analytics?',
      answer:
        'Yes, workforce analytics is built from the same activity and attendance data the Windows agent records, so it has no separate data source of its own.',
    },
    {
      question: "Does the Windows Agent apply Privacy Controls consistently across every employee it's installed for?",
      answer:
        'Yes, privacy controls configured in the admin portal, such as private-region redaction, apply consistently across every device running the agent.',
    },
  ],

  'solutions:remote-workforce': [
    {
      question: "How does ZUZU work for a team that has no shared office at all?",
      answer:
        "Because the Windows agent runs on each device independently, activity, attendance, and reporting work the same way whether a team is in one office or fully distributed.",
    },
    {
      question: "Does a Remote Workforce setup need anything different from the standard ZUZU install?",
      answer:
        "No, the same Windows agent and manager workspace are used; there is no separate remote-specific installation.",
    },
    {
      question: "What can a manager actually see about a remote employee’s working day?",
      answer:
        "Attendance sessions and application activity for their own team in the manager workspace, with idle periods recorded separately from active use. That shows working time and what was in use. It does not show location, keystrokes or a continuous live view of the screen; an admin can take an on-demand live capture when needed, recorded in the audit log.",
    },
    {
      question: "Does ZUZU account for employees working across different time zones?",
      answer:
        "Attendance and activity are recorded against the time the device is active, so data from employees in different time zones is captured independently and reviewed accordingly.",
    },
    {
      question: "What happens to a remote employee’s record when their home connection drops?",
      answer:
        "The Windows agent keeps capturing activity and attendance locally, queues the data, and syncs it once the connection returns. A stretch the agent could not see at all, such as a laptop that slept or crashed, appears in away time, where it can be approved or rejected.",
    },
    {
      question: "Can remote employees use their own laptops?",
      answer:
        "Yes. On a personal laptop, tracking is consent-gated and only active between punch-in and punch-out, through a short-lived permission the agent must keep renewing, so it is not running in the background outside a work session.",
    },
    {
      question: "Does a Remote Workforce setup change how Privacy Controls are applied?",
      answer:
        "No, private-region redaction and other privacy controls apply the same way regardless of where a device is physically located.",
    },
    {
      question: "How does an administrator know a remote hire’s agent is working?",
      answer:
        "In employees, the new hire shows as pending until the desktop agent has run once with their activation code, then as activated. If tracking later stops, the employee’s last-seen time shows whether the agent is running at all.",
    },
  ],

  'solutions:hybrid-workforce': [
    {
      question: "Does ZUZU treat office days differently from work-from-home days?",
      answer:
        "No, the Windows agent records activity and attendance the same way regardless of whether a device is on the office network or at home.",
    },
    {
      question: "Can a manager see which days an employee worked from the office versus remotely?",
      answer:
        "ZUZU tracks activity and attendance from the device itself rather than physical location, so it doesn't distinguish office days from remote days by default.",
    },
    {
      question: "Does switching between a laptop and desktop affect Hybrid Workforce tracking?",
      answer:
        "Activity and attendance are tracked per device running the Windows agent, so using multiple devices means each device's activity is recorded separately.",
    },
    {
      question: "How does Time & Attendance handle a team with staggered in-office schedules?",
      answer:
        "Attendance is based on when each individual’s Windows agent records activity, so staggered schedules are captured naturally without needing a fixed shift setup.",
    },
    {
      question: "Is Workforce Analytics useful for comparing in-office versus remote productivity patterns?",
      answer:
        "Workforce analytics shows productivity trends over time for individuals and teams, which can be reviewed alongside known in-office or remote schedules if that context matters to a manager.",
    },
    {
      question: "How does a hybrid employee’s personal laptop work on remote days?",
      answer:
        "On a personal laptop, capture is consent-gated and limited to the punch-in to punch-out session, through a short-lived permission the agent must keep renewing. The same laptop is not monitored outside that session.",
    },
    {
      question: "Can a Hybrid Workforce setup mix employees who are fully remote and fully in-office?",
      answer:
        "Yes, ZUZU tracks each employee’s device the same way regardless of their individual work arrangement, so mixed setups are supported naturally.",
    },
    {
      question: "What does a manager see for a hybrid team’s week?",
      answer:
        "Attendance and application activity for each day of the week for their own team, in one record, with idle periods recorded separately. Weekly attendance groups the daily records into a week view showing which days were worked.",
    },
  ],

  'solutions:workforce-visibility': [
    {
      question: "What does \"workforce visibility\" mean in practical terms with ZUZU?",
      answer:
        "It means having activity, attendance, screenshots, and reports available in one place, rather than piecing together information from separate tools or relying on self-reporting.",
    },
    {
      question: "Which screen shows who is working right now?",
      answer:
        "Team at a glance shows who is clocked in, actively focused or on a break, with cumulative shift hours. Administrators also see active now among the dashboard’s real-time activity figures.",
    },
    {
      question: "How quickly does new activity appear once captured?",
      answer:
        "Activity is captured continuously through the workday and reflected in the manager workspace without a manual sync step.",
    },
    {
      question: "Can Workforce Visibility be limited to specific teams rather than the whole company?",
      answer:
        "Yes, visibility is scoped through the admin portal, so a manager only sees the teams they have been given access to.",
    },
    {
      question: "Does Workforce Visibility include historical data, or just what is happening right now?",
      answer:
        "Both, current activity is visible as it happens, and historical data is available through workforce analytics and past day-end reports.",
    },
    {
      question: "Is Workforce Visibility only about tracking, or does it include understanding trends too?",
      answer:
        "It covers both, raw activity and attendance data, plus AI reports and workforce analytics that turn that data into trends and summaries.",
    },
    {
      question: "What does ZUZU not show?",
      answer:
        "ZUZU does not log keystrokes or typed content, does not stream a live camera or screen feed, and does not track location. Screenshots are periodic stills, and private regions are redacted on the device before anything is stored or uploaded.",
    },
    {
      question: "Who decides how much visibility a given manager has?",
      answer:
        "Administrators configure that scoping in the admin portal, assigning which teams and data each manager can see.",
    },
  ],

  'solutions:employee-productivity': [
    {
      question: "How does ZUZU support productivity without directly managing an employee's task list?",
      answer:
        "ZUZU tracks activity, attendance, and focus patterns and surfaces them through workforce analytics, giving managers information to support their team rather than assigning tasks itself.",
    },
    {
      question: "What is the difference between activity tracking and measuring productivity?",
      answer:
        "Activity tracking records what applications and sites are used; the productivity rate in workforce analytics goes further by categorizing that activity as productive or non-productive.",
    },
    {
      question: "Can employees see their own productivity data, or is it manager-only?",
      answer:
        "Employees can review their own activity and attendance through the employee profile, so productivity information is not restricted to managers alone.",
    },
    {
      question: "Does supporting productivity involve setting fixed targets in ZUZU?",
      answer:
        "ZUZU reports on activity, attendance, and productivity trends; setting specific targets or goals is left to the manager based on that information.",
    },
    {
      question: "How does the Day-End Report help with supporting employee productivity?",
      answer:
        "It gives a same-day summary of activity, attendance, and focus so a manager can check in on a team promptly rather than waiting on a longer reporting cycle.",
    },
    {
      question: "Can idle time data be used to support a productivity conversation with an employee?",
      answer:
        "Idle time is recorded as part of activity tracking and can be reviewed alongside active time to give a fuller picture of a workday.",
    },
    {
      question: "What is Role Context, and how does it relate to productivity?",
      answer:
        "Role context is where administrators describe what each role is expected to do, resolved from the employee to their designation to the organisation, most specific first. ZUZU includes a productivity score, which stays generic until the AI knows what the job is; with a role described, a new hire can be judged against their function from day one.",
    },
    {
      question: "Is AI Reports part of supporting employee productivity, or a separate feature?",
      answer:
        "AI reports draw on the same activity and attendance data to produce a written summary, so it works alongside productivity tracking rather than separately from it.",
    },
  ],

  'solutions:workforce-reporting': [
    {
      question: "What kinds of reports can leadership pull from ZUZU?",
      answer:
        "Leadership can review AI reports, workforce analytics trends, and day-end reports, covering both written summaries and dashboard-style metrics.",
    },
    {
      question: "Are reports limited to daily summaries, or can they cover longer periods?",
      answer:
        "Workforce analytics supports filtering by date range, so reporting can cover a single day, a week, a month, or a custom period.",
    },
    {
      question: "Can reports be generated for the whole organization, not just one team?",
      answer:
        "Yes, admins can access reporting across the organization through the admin portal, while managers see reporting scoped to their own teams.",
    },
    {
      question: "Which reports arrive without anyone asking for them?",
      answer:
        "Daily AI reports and weekly digest emails. Digests can go to the whole organisation or to a specific manager.",
    },
    {
      question: "Can Workforce Reporting data be exported outside ZUZU?",
      answer:
        "Yes, reports and analytics can be exported as PDF, Excel or CSV so they can be shared or archived outside the platform. ZUZU does not integrate with other systems, so exports are how the data moves.",
    },
    {
      question: "Is there a difference between an AI Report and a Workforce Analytics report?",
      answer:
        "An AI report is a written summary of a period, while workforce analytics presents the same underlying data as charts and trend views.",
    },
    {
      question: "Does Workforce Reporting include attendance, or only activity data?",
      answer:
        "Reporting draws on attendance as well as activity and focus data, so it reflects a full picture of the tracked period rather than activity alone.",
    },
    {
      question: "Who configures which reports a given manager can access?",
      answer:
        "Reporting access follows the same scoping set in the admin portal that governs which teams a manager can see in the manager workspace.",
    },
  ],

  'solutions:behaviour-intelligence': [
    {
      question: "What does \"behaviour intelligence\" mean in the context of ZUZU?",
      answer:
        "It compares a person's activity with their own typical pattern and sends meaningful changes to a review queue for a person to review. It is built on activity and attendance data ZUZU already captures, and it is not a personality or emotion assessment.",
    },
    {
      question: "Is Behaviour Intelligence a separate tracking feature from Employee Activity?",
      answer:
        "No, it is built on the same activity and attendance data; behaviour intelligence is about analyzing patterns in that data rather than collecting anything additional.",
    },
    {
      question: "What happens when a change is flagged?",
      answer:
        "It goes to the review queue in AI work. A person reads the evidence, then confirms or corrects the flag, and the verdict is recorded against the flagged frame. Nothing happens automatically.",
    },
    {
      question: "Does Behaviour Intelligence compare employees with each other?",
      answer:
        "No. Every flag is a deviation from that employee's own behaviour, never a rule about apps or roles.",
    },
    {
      question: "Is there a minimum amount of activity before flags appear?",
      answer:
        "In AI work, anomaly detection stays off for an employee until they have five days of tracked activity, because until then there is no baseline to diverge from.",
    },
    {
      question: "Does Behaviour Intelligence require any special setup beyond the standard Windows Agent install?",
      answer:
        "No, it works from the same activity and attendance data already captured by the Windows agent, without a separate setup step.",
    },
    {
      question: "Who reviews the flags?",
      answer:
        "Whoever is responsible for that employee's team. The counts and flags in AI work are shown for the reviewer's own scope, and managers only see their own assigned team.",
    },
    {
      question: "Is Behaviour Intelligence about predicting future actions, or reviewing what already happened?",
      answer:
        "It is based on recorded activity and attendance history, so it reflects patterns in what has already happened rather than predicting future behaviour. ZUZU does not predict who will leave.",
    },
  ],
}
