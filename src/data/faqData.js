/*
  Central FAQ data for the enriched /resources/faqs hub (Phase 16).
  Every answer here restates a fact already established somewhere else
  in this project (a capability page, a phase brief's stated
  commercial fact, or an explicit "not tracked" clarification already
  used elsewhere) -- nothing new is introduced. Organized by the
  category list this phase's brief specifies.
*/
export const FAQ_CATEGORIES = [
  {
    label: 'General',
    items: [
      {
        question: 'What is ZUZU?',
        answer: 'ZUZU is an AI-powered workforce visibility and intelligence platform that helps organizations understand how work actually happens.',
      },
      { question: 'Who is ZUZU for?', answer: 'Managers and admins overseeing remote, hybrid or in-office teams, across industries such as IT & SaaS, BPO, digital agencies, consulting, startups and enterprise organizations.' },
      { question: 'What does ZUZU help organizations understand?', answer: 'How work happens across a team, activity, attendance, and the reports and analytics built from that data.' },
    ],
  },
  {
    label: 'Activity & Attendance',
    items: [
      { question: 'What does ZUZU track?', answer: 'Employee activity (apps, sites and tasks) and attendance, captured through the Windows agent.' },
      { question: 'How is attendance captured?', answer: "Automatically, through the Windows agent, rather than manual sign-in or self-reported timesheets." },
      { question: 'Does activity tracking work for remote employees?', answer: 'Yes, the Windows agent works the same way regardless of network or location.' },
    ],
  },
  {
    label: 'Screenshots & Privacy',
    items: [
      { question: 'How often are screenshots captured?', answer: 'On an interval your organization configures, not continuously.' },
      { question: 'How is sensitive information protected in screenshots?', answer: 'Through on-device private-region redaction, applied before a screenshot is stored or uploaded.' },
      { question: 'What is private-region redaction?', answer: "A process that redacts sensitive regions of a screenshot, such as login/password screens, banking or financial pages, personal webmail, or private messaging, on the device, before storage or upload." },
    ],
  },
  {
    label: 'AI & Analytics',
    items: [
      { question: 'What are AI reports?', answer: 'AI-generated reports that combine activity, attendance and screenshot context into a single summary.' },
      { question: 'What is workforce analytics?', answer: 'Trends and patterns across your workforce, built from activity, attendance and behaviour data.' },
      { question: 'Does ZUZU make decisions automatically?', answer: 'No, ZUZU provides reports and analytics as evidence; decisions are made by your organization.' },
    ],
  },
  {
    label: 'Manager & Admin',
    items: [
      { question: 'What is the Manager Workspace?', answer: "The single place managers review activity, attendance, reports and behaviour insights for their own team." },
      { question: 'What is the Admin Portal?', answer: 'Where admins configure employees, teams, monitoring settings and policy for the whole organization.' },
      { question: 'How is access scoped between admins and managers?', answer: "Admins have organization-wide access through the admin portal; managers see only their assigned team through the manager workspace." },
    ],
  },
  {
    label: 'Remote & Hybrid',
    items: [
      { question: 'Does ZUZU work for fully remote teams?', answer: 'Yes, the Windows agent, activity and attendance capabilities work the same regardless of location.' },
      { question: "Does ZUZU track an employee's physical location?", answer: 'No, ZUZU captures activity and attendance data; it does not track physical or GPS location.' },
      { question: 'Does ZUZU work for hybrid teams?', answer: 'Yes, the same capabilities apply consistently whether someone is working from the office or remotely on a given day.' },
    ],
  },
  {
    label: 'Windows Agent',
    items: [
      { question: 'What is the ZUZU Windows Agent?', answer: 'A desktop installer for Windows devices that captures activity, attendance and, where configured, screenshots.' },
      { question: 'How large is the installer?', answer: 'Approximately 80 MB.' },
      { question: "What happens if a device loses its internet connection?", answer: 'The Windows agent continues capturing activity and attendance locally and queues it for sync once connectivity returns.' },
    ],
  },
  {
    label: 'Reports & Exports',
    items: [
      { question: 'What reports does ZUZU provide?', answer: 'Employee, team, department, workforce, activity, attendance and AI-generated reports, all built from the same underlying data.' },
      { question: 'Which export formats are supported?', answer: 'CSV, Excel and PDF.' },
      { question: 'Can reports be exported as PDF?', answer: 'Yes, PDF export produces a fixed, shareable document for reading, printing or presenting.' },
    ],
  },
  {
    label: 'Trial & Pricing',
    items: [
      { question: 'How long is the ZUZU free trial?', answer: '7 days.' },
      { question: 'How many employees can I add during the trial?', answer: 'Up to 10 employees.' },
      { question: 'Do I need a card to start the trial?', answer: 'No, the trial does not require a card.' },
      { question: 'How does paid activation work?', answer: 'After payment, once you decide to continue beyond the trial, with pricing based on employee headcount during checkout.' },
    ],
  },
  {
    label: 'Support',
    items: [
      { question: 'Where do I find setup instructions?', answer: 'In the knowledge base, starting with the Windows installation guide.' },
      { question: "The Windows Agent isn't showing in the system tray. What should I check?", answer: "Confirm the installer completed successfully, and restart the device if the installer required it, see the troubleshooting page for more." },
      { question: 'How do I contact support?', answer: 'Through the contact page, our team can help with questions this FAQ doesn\'t cover.' },
    ],
  },
]
