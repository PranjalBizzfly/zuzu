/*
  Pure directory data for /knowledge-base -- every link points to a
  real, already-existing page from an earlier phase (or this phase's
  new Windows Agent / Installation clusters). No content is duplicated
  here; this is navigation only.
*/
export const KNOWLEDGE_BASE_CATEGORIES = [
  {
    label: 'Getting Started',
    items: [
      { title: 'ZUZU Windows Agent', description: 'What the agent is and how it behaves.', href: '/windows-agent' },
      { title: 'Download the Windows Agent', description: 'Get the installer.', href: '/windows-agent/download' },
      { title: 'Windows Installation Guide', description: 'Step-by-step installation.', href: '/installation/windows' },
      { title: 'Activation', description: 'The 7-day trial and paid activation.', href: '/installation/activation' },
      { title: 'Employee Setup', description: 'Installing the agent and configuring an employee together.', href: '/installation/employee-setup' },
    ],
  },
  {
    label: 'Activity & Attendance',
    items: [
      { title: 'Activity & Attendance Ecosystem', description: 'Activity, attendance and workday tracking.', href: '/activity' },
      { title: 'Time & Attendance Management', description: 'Attendance tracking, dashboards and reports.', href: '/time-attendance' },
      { title: 'Reports + Exports Ecosystem', description: 'Every report type across ZUZU.', href: '/reports' },
    ],
  },
  {
    label: 'Screenshots & Privacy',
    items: [
      { title: 'Screenshot + Privacy Ecosystem', description: 'Screenshot monitoring and privacy protections.', href: '/screenshot-privacy' },
      { title: 'Screenshot Intervals', description: 'How capture intervals are configured.', href: '/screenshot-privacy/screenshot-intervals' },
      { title: 'Private Region Redaction', description: 'How sensitive regions are redacted on-device.', href: '/screenshot-privacy/private-region-redaction' },
      { title: 'Sensitive Information Protection', description: 'What kinds of information redaction addresses.', href: '/screenshot-privacy/sensitive-information-protection' },
    ],
  },
  {
    label: 'Reports & Analytics',
    items: [
      { title: 'Export Reports', description: 'Exporting to CSV, Excel or PDF.', href: '/reports/export-reports' },
      { title: 'AI Reports + Workforce Analytics', description: 'AI-generated reports and analytics.', href: '/ai-analytics' },
      { title: 'Workforce Analytics Software', description: 'Trends and patterns across your workforce.', href: '/platform/workforce-analytics-software' },
    ],
  },
  {
    label: 'Manager & Admin',
    items: [
      { title: 'Behaviour Intelligence + Manager Workspace', description: 'Manager tools and work-pattern insight.', href: '/manager' },
      { title: 'Admin Portal + Security & Governance', description: 'Organization-wide configuration.', href: '/admin' },
      { title: 'Access & Permissions', description: 'How access is scoped between admins and managers.', href: '/admin/permissions' },
      { title: 'Admin Settings', description: 'Organization-wide account and policy configuration.', href: '/admin/settings' },
    ],
  },
  {
    label: 'Remote & Hybrid',
    items: [
      { title: 'Remote & Hybrid Workforce', description: 'Visibility for distributed and hybrid teams.', href: '/remote-workforce' },
      { title: 'Hybrid Workforce Visibility', description: 'Consistent visibility across office and remote days.', href: '/remote-workforce/hybrid-workforce-visibility' },
      { title: 'Remote Team Activity', description: 'Team-level activity for distributed teams.', href: '/remote-workforce/remote-team-activity' },
      { title: 'Remote Attendance', description: 'Attendance visibility for remote employees.', href: '/remote-workforce/remote-attendance' },
    ],
  },
  {
    label: 'Troubleshooting & Support',
    items: [
      { title: 'Troubleshooting', description: 'General checks if something looks wrong.', href: '/troubleshooting' },
      { title: 'Support', description: 'Get help with ZUZU.', href: '/resources/support' },
      { title: "FAQ's", description: 'Frequently asked questions.', href: '/resources/faqs' },
    ],
  },
]
