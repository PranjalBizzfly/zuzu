/*
  Structured content for the ZUZU Admin Portal + Security & Governance
  Ecosystem (Phase 10). Same pattern as the other cluster data files.

  These are public marketing/explainer pages ABOUT the Admin Portal's
  capabilities -- not the private, authenticated admin application
  itself. No live employee data, no functional settings forms, no
  demo credentials, and no fake dashboard metrics appear anywhere in
  this file, consistent with the phase brief's explicit instruction
  not to expose a private interface as an SEO landing page.

  Pruned from the phase brief's suggested list for one reason:
  Near-duplication with itself -- "Admin Dashboard"/"Admin Workspace",
  the four separate "*Settings" pages, and the five separate
  "*Access"/"*Permissions" pages were each collapsed into one page
  covering that territory (Admin Dashboard, Admin Settings, Access &
  Permissions respectively), consistent with how the phase brief
  itself frames these as "areas" of one settings/access ecosystem
  rather than mandating one page per synonym.

  Audit Logs: confirmed as a real ZUZU capability (audit trails across
  employee, team, manager, shift, leave, report, payment, live-capture
  and organisation events, with severity filtering, a timeline view and
  export -- see the 'governance' and 'permissions' pages' own FAQ
  answers, already live before this comment was corrected) and given
  the "audit" group of dedicated pages below, rather than staying
  folded into a couple of FAQ answers. An earlier version of this
  comment said the opposite (that audit logs had "never been named as
  a ZUZU capability" and were "intentionally excluded rather than
  invented") -- that was true when written, went stale once the FAQ
  answers above were added, and is corrected here rather than left
  contradicting the rest of the file.

  No compliance certifications (SOC 2, ISO, GDPR, HIPAA), encryption
  standards, SSO/SAML/OAuth, biometric auth, or a detailed
  role-permission matrix are claimed anywhere in this file -- several
  FAQ answers explicitly state these are NOT claimed, rather than
  leaving the question unanswered.
*/

const ORDER_DEFAULT = ['visual', 'benefits', 'features', 'howItWorks']
const ORDER_B = ['visual', 'howItWorks', 'benefits', 'features']
const ORDER_C = ['visual', 'features', 'howItWorks', 'benefits']

export const ADMIN_SECURITY_GROUPS = [
  { key: 'admin', label: 'Admin Portal' },
  { key: 'governance', label: 'Access & Governance' },
]

// Hub-level FAQ for /admin -- see timeAttendance.js for the pattern.
const ADMIN_SECURITY_HUB_FAQ = [
  {
    question: 'What can be configured in the Admin Portal?',
    answer: 'Employees, teams, monitoring and privacy policy, and access permissions, centrally, for the whole organization.',
  },
  {
    question: "What's the difference between admin and manager access?",
    answer: "Admins get organization-wide configuration and visibility through the admin portal; managers see activity, attendance and reports scoped to their own assigned team in the manager workspace.",
  },
  {
    question: 'Does ZUZU support two-factor authentication?',
    answer: 'Yes, as an extra verification step for admin and manager accounts, on top of capability-based access.',
  },
  {
    question: 'Is there an audit trail for changes made in the Admin Portal?',
    answer: 'Yes, covering employee, team, manager and organization-level events, filterable by severity and exportable.',
  },
  {
    question: "Can privacy and monitoring settings be changed after they're first configured?",
    answer: 'Yes, admins can revisit and adjust monitoring and privacy policy in the admin portal at any time.',
  },
  {
    question: 'Does the Admin Portal apply settings automatically to newly added employees?',
    answer: 'Yes, once policy is set it applies automatically going forward, including to employees added after that point.',
  },
  {
    question: 'What is capability-based access?',
    answer: 'A permissions model where access is granted by specific capability rather than a single all-or-nothing admin role.',
  },
  {
    question: 'Can Admin Portal data be exported for a compliance review?',
    answer: 'Yes, audit trails and other admin portal data can be exported for review.',
  },
]

export const ADMIN_SECURITY_PAGES = [
  {
    slug: 'dashboard',
    title: 'Admin Dashboard',
    cluster: 'admin',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'The ZUZU admin dashboard is where admins configure employees, teams, monitoring settings and policy for the whole organization.',
    intro:
      "The admin dashboard is where an organization's ZUZU deployment is configured and reviewed from, employees and teams, monitoring settings, and the policies that shape how the rest of the platform behaves. It's built for admins, distinct from the team-scoped manager workspace.",
    howItWorksNote: 'The admin portal centralizes organization-wide configuration; day-to-day team review happens separately, in the manager workspace.',
    features: ['adminPortal', 'managerWorkspace', 'privacyControls', 'timeAttendance'],
    privacy: true,
    benefits: [
      'Organization-wide configuration in one place',
      "Separate from day-to-day team review in the manager workspace",
      'Covers employees, teams, monitoring settings and policy together',
    ],
    useCases: [
      { title: 'Setting Up a New Organization', description: 'Configure employees, teams and monitoring policy from one place.' },
      { title: 'Reviewing Organization-Wide Configuration', description: 'Check settings across the deployment, not just one team.' },
    ],
    faq: [
      { question: 'How is the Admin Dashboard different from the Manager Workspace?', answer: "The admin dashboard covers organization-wide configuration; the manager workspace is scoped to a manager's own team." },
      { question: 'Who has access to the Admin Dashboard?', answer: 'Admins, for organization-wide configuration.' },
      { question: 'Does the Admin Dashboard show audit trail activity?', answer: 'Yes, audit trails covering employee, team, manager and other organisation-level events are part of the admin portal, alongside configuration.' },
      { question: 'Is two-factor authentication required to access the Admin Dashboard?', answer: 'ZUZU supports two-factor authentication (MFA/OTP-based) for account access, including admin accounts.' },
      { question: 'Can more than one person have admin access?', answer: 'The admin portal supports capability-based access, so more than one person can hold admin-level access to organisation-wide configuration.' },
      { question: 'Does the dashboard show API key activity?', answer: 'API keys and their activity logs are managed through the admin portal, alongside employee and team configuration.' },
      { question: 'Is the Admin Dashboard where screenshot retention is configured?', answer: 'Screenshot retention is one of the monitoring settings configured through the admin portal, alongside other policy choices.' },
      { question: 'Can I see organisation-wide reports directly from the dashboard?', answer: 'Yes, the admin dashboard is where organisation-wide configuration and reporting are reviewed from.' },
    ],
    related: ['employees', 'teams-and-managers', 'settings'],
    externalLinks: [{ title: 'Admin Portal', description: 'The product-page overview of this capability.', href: '/product/admin-portal' }],
  },
  {
    slug: 'employees',
    title: 'Employee Management',
    cluster: 'admin',
    visual: 'photo',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU employee management lets admins organize employees and configure their monitoring settings through the admin portal.',
    intro:
      "Employee management is how an organization keeps its ZUZU deployment aligned with who's actually on the team, adding employees, organizing them, and configuring the monitoring settings that apply to each one, through the admin portal.",
    howItWorksNote: 'Employees are organized and configured through the admin portal, which is also where monitoring settings for each employee are set.',
    features: ['adminPortal', 'employeeActivity', 'timeAttendance', 'privacyControls'],
    privacy: true,
    benefits: [
      'Employee records and monitoring settings managed in one place',
      'Consistent configuration across the organization',
      'Ties directly into activity and attendance data already captured',
    ],
    useCases: [
      { title: 'Onboarding a New Employee', description: 'Add someone to the organization and configure their settings.' },
      { title: 'Adjusting Settings for a Role Change', description: "Update monitoring configuration when someone's role changes." },
    ],
    faq: [
      { question: 'What does employee management cover in ZUZU?', answer: 'Organizing employees and configuring their monitoring settings, through the admin portal.' },
      { question: 'Does ZUZU handle payroll or leave management?', answer: 'No, employee management in ZUZU is scoped to organizing employees and their monitoring configuration.' },
      { question: 'How is a new employee added to ZUZU?', answer: "Admins add employees through the admin portal; each employee's device runs the Windows desktop agent, activated with a 16-character activation code." },
      { question: 'Can I configure screenshot settings per employee?', answer: 'Yes, monitoring settings, including screenshot behaviour, can be configured per employee through the admin portal.' },
      { question: 'Does employee management include performance reviews or goal-setting?', answer: 'No, employee management in ZUZU covers organizing employees and their monitoring configuration, not performance review workflows.' },
      { question: "What happens to an employee's data when they're removed from ZUZU?", answer: 'Retention is governed by the same configurable settings admins manage.' },
      { question: 'Can employees be grouped without being assigned to a formal team?', answer: 'Team and manager assignment is configured centrally in the admin portal as part of organizing employees.' },
      { question: "Does ZUZU track non-Windows devices for an employee?", answer: 'No, the ZUZU desktop agent is Windows-only; there\'s no macOS or Linux agent.' },
    ],
    related: ['dashboard', 'teams-and-managers', 'permissions'],
    externalLinks: [{ title: 'Employee Work Activity', description: 'The activity data tied to each managed employee.', href: '/activity/employee-work-activity' }],
  },
  {
    slug: 'teams-and-managers',
    title: 'Team & Manager Management',
    cluster: 'admin',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'ZUZU team and manager management lets admins group employees into teams and assign managers through the admin portal.',
    intro:
      "Beyond individual employees, an organization needs teams to mean something, who's grouped together, and who manages them. Team and manager management is how that structure is set up in the admin portal, feeding directly into the manager workspace each manager sees.",
    howItWorksNote: 'Team structure and manager assignments are configured in the admin portal and determine what each manager sees in their manager workspace.',
    features: ['adminPortal', 'managerWorkspace', 'employeeActivity', 'timeAttendance'],
    privacy: false,
    benefits: [
      'Team structure feeds directly into the manager workspace',
      'Manager assignments configured centrally',
      'Consistent scoping across activity, attendance and reports',
    ],
    useCases: [
      { title: 'Setting Up a New Team', description: 'Group employees together and assign a manager.' },
      { title: 'Reassigning a Manager', description: 'Update who manages a team as the organization changes.' },
    ],
    faq: [
      { question: 'How does team structure affect the Manager Workspace?', answer: "A manager only sees activity, attendance and reports for the team they're assigned to." },
      { question: 'Can an employee belong to more than one team?', answer: 'Team and manager assignment is configured centrally through the admin portal.' },
      { question: 'Can a manager be assigned to more than one team?', answer: 'Team and manager assignment is configured centrally in the admin portal; the specific structure depends on how your organization sets it up.' },
      { question: 'What happens in the Manager Workspace when a manager is reassigned?', answer: 'The manager workspace reflects whatever team a manager is currently assigned to in the admin portal, reassignment updates what they see.' },
      { question: "Can admins see every team's data the way a manager sees their own?", answer: "Yes, admins have organisation-wide visibility through the admin portal, while a manager's manager workspace is scoped to their assigned team." },
      { question: 'Who configures team structure?', answer: 'Admins configure team structure through the admin portal to fit the organization; each manager then sees their own team in the manager workspace.' },
      { question: 'Does setting up teams require any device-level configuration?', answer: "No, team and manager structure is configured in the admin portal and doesn't require reinstalling or reconfiguring the Windows agent." },
      { question: 'Can a manager see historical data from before they were assigned to a team?', answer: 'What a manager can review depends on current team assignment and configured retention settings.' },
    ],
    related: ['employees', 'dashboard', 'permissions'],
    externalLinks: [{ title: 'Manager Insight Workflow', description: 'What a manager sees for their assigned team.', href: '/manager/manager-insight-workflow' }],
  },
  {
    slug: 'settings',
    title: 'Admin Settings',
    cluster: 'admin',
    visual: 'dashboard',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: 'ZUZU admin settings cover organization-wide account and policy configuration, set through the admin portal.',
    intro:
      'Admin settings are the organization-wide defaults everything else runs on, account details, policy choices, and the baseline configuration new employees and teams inherit. It\'s the layer above per-employee or per-team configuration.',
    howItWorksNote: 'Organization-wide settings are configured once in the admin portal and apply as the default across employees and teams.',
    features: ['adminPortal', 'privacyControls', 'timeAttendance', 'managerWorkspace'],
    privacy: true,
    benefits: [
      'Organization-wide defaults, set once',
      'A clear baseline for new employees and teams',
      'Consistent with per-employee configuration, not a separate system',
    ],
    useCases: [
      { title: 'Setting Organization-Wide Policy', description: 'Establish defaults before adding employees and teams.' },
      { title: 'Reviewing Configuration Periodically', description: 'Revisit organization settings as the organization changes.' },
    ],
    faq: [
      { question: 'What do admin settings cover?', answer: 'Organization-wide account and policy configuration, through the admin portal.' },
      { question: 'Do admin settings override employee-level configuration?', answer: 'Admin settings establish the organization-wide baseline that employee and team configuration builds on.' },
      { question: 'Are admin settings applied retroactively to existing employees?', answer: "Admin settings establish an organisation-wide baseline; how it interacts with existing employee-level configuration depends on what's already been set." },
      { question: 'Is two-factor authentication configured under admin settings?', answer: "Account security options, including two-factor authentication, are part of the admin portal's settings." },
      { question: 'Can admin settings be different for different departments?', answer: 'Admin settings establish an organisation-wide baseline; more granular configuration happens at the employee or team level.' },
      { question: 'Does changing an admin setting require a new activation code?', answer: "No, activation codes are used to set up the Windows agent during installation; changing admin settings afterward doesn't require re-activation." },
      { question: 'Who can change admin settings?', answer: 'Admins, through the admin portal.' },
      { question: 'Are payroll or accounting settings part of Admin Settings?', answer: "No, ZUZU does not process payroll or integrate with payroll or accounting systems; admin settings cover ZUZU's own account and policy configuration." },
    ],
    related: ['dashboard', 'monitoring-settings', 'permissions'],
    externalLinks: [{ title: 'Digital Workforce Management', description: 'How centralized settings tie into workforce management.', href: '/platform/digital-workforce-management' }],
  },
  {
    slug: 'monitoring-settings',
    title: 'Monitoring Settings',
    cluster: 'governance',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'ZUZU monitoring settings cover screenshot intervals, privacy controls and attendance policy, configured through the admin portal.',
    intro:
      'Monitoring settings are where screenshot intervals, privacy controls and attendance policy actually get configured, the specific dials an admin adjusts to shape how ZUZU monitors an organization, as distinct from broader account and policy settings.',
    howItWorksNote: 'Monitoring settings, screenshot intervals, privacy controls, attendance policy, are configured in the admin portal and apply across the organization.',
    features: ['adminPortal', 'privacyControls', 'screenshotMonitoring', 'timeAttendance'],
    privacy: true,
    benefits: [
      'Screenshot intervals and privacy controls configured in one place',
      'Consistent monitoring policy across the organization',
      'Separate from broader account settings, easy to review on its own',
    ],
    useCases: [
      { title: 'Adjusting Monitoring for a Role', description: 'Set a different screenshot interval or privacy configuration where it fits.' },
      { title: 'Reviewing Monitoring Policy', description: 'Check current monitoring settings across the organization.' },
    ],
    faq: [
      { question: 'What counts as a monitoring setting?', answer: 'Screenshot intervals, privacy controls, and attendance-related configuration.' },
      { question: 'Where are monitoring settings configured?', answer: 'In the admin portal.' },
      { question: 'Can the screenshot interval be customized?', answer: 'Yes, the screenshot interval is configurable, from 1 to 5 minutes or a custom interval.' },
      { question: 'How long are screenshots retained by default?', answer: "The default retention is 90 days, and it's configurable by admins through monitoring settings." },
      { question: 'Are private areas like passwords redacted automatically?', answer: 'Yes, private regions such as passwords, banking, webmail, messaging apps and password managers are redacted on-device before a screenshot is stored or uploaded.' },
      { question: 'Do monitoring settings apply to personal laptops the same way?', answer: 'No, on personal laptops, capture is session-gated to only between punch-in and punch-out, through a short-lived permission the agent must keep renewing.' },
      { question: 'Can attendance policy be configured alongside screenshot settings?', answer: 'Yes, attendance policy configuration is part of the same monitoring settings area in the admin portal.' },
      { question: 'Can monitoring settings differ between employees?', answer: 'Yes, monitoring settings, including screenshot behaviour, can be configured per employee through the admin portal.' },
    ],
    related: ['settings', 'permissions', 'governance'],
    externalLinks: [{ title: 'Screenshot Intervals', description: 'The specific interval configuration this setting controls.', href: '/screenshot-privacy/screenshot-intervals' }],
  },
  {
    slug: 'permissions',
    title: 'Access & Permissions',
    cluster: 'governance',
    visual: 'dashboard',
    sectionOrder: ORDER_C,
    metaDescription: 'How access is scoped in ZUZU between the org-wide admin portal and the team-scoped manager workspace.',
    intro:
      "ZUZU scopes what people see by role: admins configure the organization through the admin portal, while managers see activity, attendance and reports for their own team through the manager workspace.",
    howItWorksNote: "Access is scoped by role: the admin portal for organization-wide configuration, the manager workspace for a manager's assigned team.",
    features: ['adminPortal', 'managerWorkspace', 'privacyControls', 'employeeActivity'],
    privacy: true,
    benefits: [
      'Clear scoping between organization-wide and team-level access',
      "Manager access limited to their assigned team",
      'Consistent with how team structure is configured',
    ],
    useCases: [
      { title: 'Understanding What a Manager Can See', description: "Know that a manager's view is scoped to their own team." },
      { title: 'Reviewing Who Has Admin Access', description: 'Check who can configure organization-wide settings.' },
    ],
    faq: [
      { question: 'Can every manager see the whole organization?', answer: "No, a manager's manager workspace is scoped to their assigned team." },
      { question: 'How granular is access scoping in ZUZU?', answer: 'Access is scoped at the admin (organization-wide) and manager (team-level) level.' },
      { question: 'Does ZUZU support two-factor authentication for account access?', answer: 'Yes, ZUZU supports two-factor authentication (MFA/OTP-based) for account access.' },
      { question: 'Is access based on roles or on individual capabilities?', answer: "ZUZU uses capability-based access rather than a single fixed role, admin and manager access reflect what each capability allows." },
      { question: 'Can a manager grant another manager access to their team?', answer: 'Team and manager assignment is configured centrally by admins through the admin portal, not by managers themselves.' },
      { question: 'Are API keys covered under access and permissions?', answer: 'Yes, API keys are managed through the admin portal, with a dedicated API key logs feature for reviewing their activity.' },
      { question: 'Does ZUZU log who accessed what?', answer: 'Yes, audit trails covering organisation events, with severity filtering and a timeline view, are part of the admin portal.' },
      { question: "How far does an admin's access reach?", answer: "Admins have organisation-wide visibility through the admin portal, while a manager's manager workspace is scoped to their assigned team." },
    ],
    related: ['dashboard', 'teams-and-managers', 'governance'],
    externalLinks: [{ title: 'Manager Insight Workflow', description: 'What a manager can see within their scoped access.', href: '/manager/manager-insight-workflow' }],
  },
  {
    slug: 'governance',
    title: 'Governance',
    cluster: 'governance',
    visual: 'photo',
    sectionOrder: ORDER_DEFAULT,
    metaDescription: "How ZUZU's admin portal, manager workspace and privacy controls work together to give organizations accountable control over monitoring.",
    intro:
      'Governance, in ZUZU, is less about a single feature and more about how the pieces work together to keep monitoring accountable: admins configure policy centrally, managers operate within a scoped view, and privacy controls set boundaries everyone works within.',
    howItWorksNote: 'Governance here means the combination of centralized admin configuration, scoped manager access, and configurable privacy controls, not a separate feature.',
    features: ['adminPortal', 'privacyControls', 'managerWorkspace', 'screenshotMonitoring'],
    privacy: true,
    benefits: [
      'Accountability built from existing configuration, not a new system',
      'Centralized policy with scoped, team-level access',
      'Privacy controls set boundaries everyone operates within',
    ],
    useCases: [
      { title: 'Explaining Monitoring Governance to Leadership', description: 'Describe how policy, access and privacy fit together.' },
      { title: 'Reviewing Governance Before Rollout', description: 'Check that policy, access and privacy configuration are set deliberately.' },
    ],
    faq: [
      { question: 'Is governance a separate ZUZU feature?', answer: 'No, it\'s how the admin portal, manager workspace and privacy controls work together.' },
      { question: 'Does ZUZU provide a compliance certification?', answer: "No, ZUZU does not claim compliance certifications; it provides its own administrative and privacy controls, including capability-based access, two-factor authentication and audit trails." },
      { question: 'Does ZUZU maintain an audit trail of administrative actions?', answer: 'Yes, audit trails cover categories including employee, team, manager, shift, leave, report, payment, live-capture and organisation events, with severity filtering, a timeline view and export.' },
      { question: 'Is there a dedicated log for API key usage?', answer: 'Yes, a dedicated API key logs feature is part of the admin portal.' },
      { question: 'How does ZUZU handle consent for monitoring personal devices?', answer: 'On personal laptops, capture is session-gated to only between punch-in and punch-out, using a short-lived permission the agent must keep renewing, rather than running continuously.' },
      { question: "Does ZUZU set an organization's monitoring or consent policy for it?", answer: "No, ZUZU doesn't prescribe legal or consent policy; that responsibility stays with your organization. ZUZU provides the configuration and session-gating mechanism." },
      { question: "Is two-factor authentication part of ZUZU's governance approach?", answer: 'Yes, two-factor authentication (MFA/OTP-based) is available for account access as part of ZUZU\'s security controls.' },
      { question: 'Can audit trail data be exported?', answer: 'Yes, audit trail data can be exported, alongside the timeline and severity-filtered views.' },
    ],
    related: ['permissions', 'monitoring-settings', 'faq'],
    externalLinks: [{ title: 'Privacy-Aware Employee Monitoring', description: 'The privacy philosophy this governance approach builds on.', href: '/screenshot-privacy/privacy-aware-monitoring' }],
  },
  {
    slug: 'faq',
    title: 'Admin, Security & Governance FAQ',
    cluster: 'governance',
    visual: 'dashboard',
    sectionOrder: ORDER_B,
    metaDescription: 'Answers to common questions about the ZUZU admin portal, employee and team management, access scoping and governance.',
    intro: "Common questions about ZUZU's admin portal, access scoping and governance approach, gathered in one place.",
    howItWorksNote: 'Every answer here reflects how the admin portal, manager workspace and privacy controls already work, nothing here is a separate feature.',
    features: ['adminPortal', 'privacyControls', 'managerWorkspace', 'timeAttendance'],
    privacy: true,
    benefits: [
      'Straight answers on the admin portal and manager workspace',
      'Covers admin, access and governance together',
      'One place instead of piecing answers from separate pages',
    ],
    useCases: [
      { title: "Evaluating ZUZU's Admin Controls", description: 'Check what admin and governance capabilities exist before rollout.' },
      { title: 'Answering a Security Question', description: 'Have a clear, honest answer ready for a security-conscious buyer.' },
    ],
    faq: [
      { question: 'What does the Admin Portal cover?', answer: 'Organization-wide configuration: employees, teams, monitoring settings and policy.' },
      { question: 'How is the Admin Portal different from the Manager Workspace?', answer: "The admin portal is organization-wide; the manager workspace is scoped to a manager's own team." },
      { question: 'Does ZUZU support payroll, leave management or recruitment?', answer: 'No, employee management in ZUZU is scoped to organizing employees and their monitoring configuration.' },
      { question: 'How granular is access scoping in ZUZU?', answer: 'Access is scoped at the admin (organization-wide) and manager (team-level) level.' },
      { question: 'Where are monitoring settings like screenshot intervals configured?', answer: 'In the admin portal, under monitoring settings.' },
      { question: 'Does ZUZU hold any specific security certifications?', answer: "No, ZUZU does not claim third-party security certifications; it provides its own administrative and privacy controls, including capability-based access, two-factor authentication and audit trails." },
      { question: 'What is governance in the ZUZU context?', answer: 'How the admin portal, manager workspace and privacy controls work together to keep monitoring accountable, not a separate feature.' },
      { question: 'How does team structure affect access?', answer: 'A manager only sees activity, attendance and reports for the team they\'re assigned to in the admin portal.' },
    ],
    related: ['dashboard', 'permissions', 'governance'],
    externalLinks: [{ title: 'ZUZU Platform Overview', description: 'Explore the full ZUZU platform.', href: '/platform' }],
  },
]

export const adminSecurityCluster = {
  key: 'admin',
  basePath: '/admin',
  badgeLabel: 'Admin & Governance',
  hubTitle: 'Admin Portal + Security & Governance',
  hubDescription:
    'How organizations configure ZUZU, manage employees and teams, scope access between admins and managers, and keep monitoring accountable.',
  hubMetaDescription:
    'The ZUZU admin portal + security & governance ecosystem: employee and team management, admin and monitoring settings, access scoping and governance.',
  groups: ADMIN_SECURITY_GROUPS,
  pages: ADMIN_SECURITY_PAGES,
  faq: ADMIN_SECURITY_HUB_FAQ,
  crossLinks: [
    { label: 'ZUZU Platform Overview', href: '/platform' },
    { label: 'Screenshot + Privacy Ecosystem', href: '/screenshot-privacy' },
    { label: 'Behaviour Intelligence + Manager Workspace', href: '/manager' },
    { label: 'Security', href: '/security' },
    { label: 'Reports + Exports Ecosystem', href: '/reports' },
    { label: 'Remote & Hybrid Workforce', href: '/remote-workforce' },
  ],
}
