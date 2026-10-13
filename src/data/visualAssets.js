/*
  Central visual asset map for ZUZU.
  Binds clusters, industries, resources, and product pages to their
  corresponding photography or SaaS dashboard mockups, ensuring that
  all 500+ SEO pages automatically receive the right visual treatment.
*/

/*
  Per-image hero crop tuning -- see InternalPageHero.jsx / FullWidthHumanHero.jsx.

  Both hero banners render a photo full-bleed behind the text, at a
  min-h-[480/540/600px] box that's far wider than it is tall (roughly
  2.4:1 at a 1440px desktop up to 4.3:1 on an ultra-wide monitor). With
  object-fit: cover, only a THIN horizontal slice of the source photo
  survives that crop -- how thin, and which slice, depends on the
  individual photo's own aspect ratio and where its subject actually
  sits, not on a single sitewide number. A single hardcoded vertical
  anchor (tried at 20%, then 8%, then 35% before this) kept being right
  for whichever one photo it was tuned against and wrong for the rest,
  which is what produced the aggressively-cropped, off-composition
  banners this table replaces.

  Keyed by the image's basename with no extension (so it survives an
  extension migration -- e.g. the sitewide jpg -> webp conversion that
  happened while this table was being built -- without needing every
  entry rewritten). Values are literal `object-position` strings (used
  exactly as `object-[value]` by the two hero components), covering both
  axes so a single entry fully places the subject.

  Measured directly against each source photo (a %-gridded render of the
  image, read at 5% increments) rather than guessed, then verified against
  the live rendered banner at common desktop widths -- see the two hero
  components for how a value here is combined with the actual container
  box to compute what's really visible.

  The three PORTRAIT photos (~0.67 aspect, all headshot/torso crops) are
  the ones this actually matters for: at this component's box shape they
  only keep ~20-25% of the image's height visible, so a several-point
  miss lands squarely on hair or shoulders instead of the face. The
  landscape photos (~1.4-1.8 aspect, the other ~40 images) keep 45-75% of
  their height visible at the same box, which comfortably includes every
  subject sampled across the set without per-image tuning -- those fall
  through to getObjectPosition()'s existing default instead of needing an
  entry here.
*/
export const HERO_IMAGE_POSITIONS = {
  // 848x1264. Face (eyes-to-chin) sits at roughly 30%-40% down the frame.
  'zuzu-executive-manager': '85% 31%',
  // 1000x1498, notably taller/narrower than the other two portraits.
  // Face sits higher in the frame than the other two, roughly 26%-34%.
  'zuzu-manager-review': '85% 26%',
  // 848x1264. Face sits roughly 35%-42% down the frame, the lowest of
  // the three portraits.
  'zuzu-contact-support': '80% 34%',
}

// Strips any query string and file extension, so a lookup still matches
// regardless of a `?v=2` cache-buster or which image format is currently
// in use for that file.
function heroImageKey(imagePath) {
  if (!imagePath) return null
  const withoutQuery = imagePath.split('?')[0]
  const basename = withoutQuery.split('/').pop() || ''
  return basename.replace(/\.[a-z0-9]+$/i, '')
}

export function getHeroImagePosition(imagePath) {
  const key = heroImageKey(imagePath)
  return key ? HERO_IMAGE_POSITIONS[key] : undefined
}

export const INDUSTRY_VISUALS = {
  'it-saas': {
    src: '/images/industries/zuzu-industry-it-saas.webp',
    alt: 'Software engineering workstation with laptop displaying code and secondary display in bright office',
    title: 'Software Engineering Team',
    subtitle: 'Team Activity Visibility',
    bgImage: '/images/industries/zuzu-industry-it-saas.webp',
  },
  bpo: {
    src: '/images/industries/zuzu-industry-bpo.webp',
    alt: 'Indian BPO operations team managing multi-client shift workflows on an active corporate floor',
    title: 'BPO Operations Floor',
    subtitle: 'Shift & Attendance Visibility',
    bgImage: '/images/industries/zuzu-industry-bpo.webp',
  },
  'call-centers': {
    src: '/images/industries/zuzu-industry-call-center.webp',
    alt: 'Indian customer support specialist with enterprise headset at dual-monitor workstation',
    title: 'Customer Support Specialists',
    subtitle: 'Activity & Attendance Visibility',
    bgImage: '/images/industries/zuzu-industry-call-center.webp',
  },
  'digital-agencies': {
    src: '/images/industries/zuzu-industry-digital-agency.webp',
    alt: 'Indian digital agency creative team collaborating on digital campaign strategy',
    title: 'Agency Creative & Strategy Team',
    subtitle: 'Team Activity & Attendance',
    bgImage: '/images/industries/zuzu-industry-digital-agency.webp',
  },
  'consulting': {
    src: '/images/industries/zuzu-industry-consulting.webp',
    alt: 'Indian management consultants reviewing operational performance metrics in a conference room',
    title: 'Management Consulting Practice',
    subtitle: 'Team Activity & Attendance Visibility',
    bgImage: '/images/industries/zuzu-industry-consulting.webp',
  },
  startups: {
    src: '/images/industries/zuzu-industry-startup.webp',
    alt: 'Top-down overhead view of startup product team collaborating around wooden table with laptops and sprint plan',
    title: 'High-Growth Startup Team',
    subtitle: 'Autonomous Team Momentum',
    bgImage: '/images/industries/zuzu-industry-startup.webp',
  },
  enterprise: {
    src: '/images/industries/zuzu-industry-enterprise.webp',
    alt: 'Indian enterprise executive leadership team collaborating in a corporate boardroom',
    title: 'Enterprise Operations Leadership',
    subtitle: 'Multi-Department Governance',
    bgImage: '/images/industries/zuzu-industry-enterprise.webp',
  },
  'remote-companies': {
    src: '/images/industries/zuzu-industry-remote.webp',
    alt: 'Remote workstation laptop displaying distributed team video conference call with artisan coffee mug on desk',
    title: 'Distributed Remote Team',
    subtitle: 'Distributed Team Visibility',
    bgImage: '/images/industries/zuzu-industry-remote.webp',
  },
  legal: {
    src: '/images/industries/zuzu-industry-legal.webp',
    alt: 'Bronze statue of Lady Justice holding scales of justice on mahogany executive desk in law firm',
    title: 'Legal Services Team',
    subtitle: 'Attendance & Activity Records',
    bgImage: '/images/industries/zuzu-industry-legal.webp',
  },
  accounting: {
    src: '/images/industries/zuzu-industry-finance.webp',
    alt: 'Indian financial analyst reviewing financial reports and data on dual workstations',
    title: 'Accounting & Bookkeeping Team',
    subtitle: 'Filing-Season Visibility',
    bgImage: '/images/industries/zuzu-industry-finance.webp',
  },
  insurance: {
    src: '/images/workforce/zuzu-manager-review.webp',
    alt: 'Insurance operations professional seated by an office window, reviewing claims activity on a laptop',
    title: 'Underwriting & Claims Team',
    subtitle: 'Attendance & Activity Records',
    bgImage: '/images/workforce/zuzu-manager-review.webp',
  },
  'real-estate': {
    src: '/images/industries/zuzu-industry-real-estate.webp',
    alt: 'Architectural scale house model with keys and metal tag on conference desk in real estate office',
    title: 'Transaction Support Team',
    subtitle: 'Coordinator Visibility',
    bgImage: '/images/industries/zuzu-industry-real-estate.webp',
  },
  'staffing-recruiting': {
    src: '/images/people/zuzu-person-laptop.webp?v=2',
    alt: 'Recruiter working at a laptop screening candidates',
    title: 'Staffing & Recruiting Team',
    subtitle: 'Recruiter Activity Visibility',
    bgImage: '/images/people/zuzu-person-laptop.webp?v=2',
  },
  msp: {
    src: '/images/workforce/zuzu-developer-focused.webp',
    alt: 'IT technician focused on a client support ticket',
    title: 'Managed Services Team',
    subtitle: 'Technician Activity Records',
    bgImage: '/images/workforce/zuzu-developer-focused.webp',
  },
  'ecommerce-retail': {
    src: '/images/industries/zuzu-industry-retail.webp',
    alt: 'Modern retail store checkout counter with customer tapping contactless payment card at digital terminal',
    title: 'E-Commerce Operations Team',
    subtitle: 'Peak-Season Visibility',
    bgImage: '/images/industries/zuzu-industry-retail.webp',
  },
  'media-publishing': {
    src: '/images/people/zuzu-team-leaders.webp',
    alt: 'Editorial team leads planning a publishing schedule',
    title: 'Editorial & Production Team',
    subtitle: 'Deadline-Driven Visibility',
    bgImage: '/images/people/zuzu-team-leaders.webp',
  },
  nonprofit: {
    src: '/images/workforce/zuzu-onboarding-setup.webp',
    alt: 'Nonprofit administrative staff setting up a workflow',
    title: 'Nonprofit Administrative Team',
    subtitle: 'Lean-Team Accountability',
    bgImage: '/images/workforce/zuzu-onboarding-setup.webp',
  },
  architecture: {
    src: '/images/people/zuzu-executive-manager.webp',
    alt: 'Architecture studio staff reviewing project documentation',
    title: 'Architecture Studio Team',
    subtitle: 'Attendance & Activity Records',
    bgImage: '/images/people/zuzu-executive-manager.webp',
  },
  'engineering-firms': {
    src: '/images/workforce/zuzu-developer-focused.webp',
    alt: 'Engineering staff focused on systems analysis and technical documentation',
    title: 'Engineering Firm Team',
    subtitle: 'Cross-Discipline Visibility',
    bgImage: '/images/workforce/zuzu-developer-focused.webp',
  },
  'property-management': {
    src: '/images/industries/zuzu-industry-real-estate.webp',
    alt: 'Property management team overseeing site administration and workflows',
    title: 'Property Management Team',
    subtitle: 'Multi-Property Administration',
    bgImage: '/images/industries/zuzu-industry-real-estate.webp',
  },
  'financial-services': {
    src: '/images/industries/zuzu-industry-finance.webp',
    alt: 'Indian financial analyst reviewing financial reports and data on dual workstations',
    title: 'Financial Services Operations Team',
    subtitle: 'Privacy-Protected Visibility',
    bgImage: '/images/industries/zuzu-industry-finance.webp',
  },
  'healthcare-admin': {
    src: '/images/industries/zuzu-industry-healthcare.webp',
    alt: 'Indian healthcare administrative specialist managing patient records on workstation',
    title: 'Healthcare Administrative Team',
    subtitle: 'Non-Clinical Office Visibility',
    bgImage: '/images/industries/zuzu-industry-healthcare.webp',
  },
  'higher-education': {
    src: '/images/industries/zuzu-industry-education.webp',
    alt: 'Indian higher education administrative staff collaborating in a modern university office',
    title: 'Higher Education Administrative Team',
    subtitle: 'Academic Calendar Visibility',
    bgImage: '/images/industries/zuzu-industry-education.webp',
  },
  logistics: {
    src: '/images/industries/zuzu-industry-logistics.webp',
    alt: 'Elevated view of modern high-tech logistics fulfillment and distribution center with automated sorting racks',
    title: 'Logistics Coordination Team',
    subtitle: 'Shift-Based Visibility',
    bgImage: '/images/industries/zuzu-industry-logistics.webp',
  },
  telecom: {
    src: '/images/people/zuzu-analyst-working.webp',
    alt: 'Two telecom support analysts reviewing shift and call-activity charts together at a desk',
    title: 'Telecom Support Team',
    subtitle: 'Shift Coverage Visibility',
    bgImage: '/images/people/zuzu-analyst-working.webp',
  },
  government: {
    src: '/images/workforce/zuzu-admin-governance.webp',
    alt: 'IT systems administrator reviewing infrastructure dashboards on a tablet beside a secured server room',
    title: 'Government Administrative Office',
    subtitle: 'Policy-Aligned Records',
    bgImage: '/images/workforce/zuzu-admin-governance.webp',
  },
  'market-research': {
    src: '/images/people/zuzu-person-laptop.webp?v=2',
    alt: 'Professional reviewing research data on a laptop at a window-side desk',
    title: 'Market Research Team',
    subtitle: 'Project Deadline Visibility',
    bgImage: '/images/people/zuzu-person-laptop.webp?v=2',
  },
  'manufacturing-admin': {
    src: '/images/industries/zuzu-industry-manufacturing.webp',
    alt: 'Industrial systems test engineer working on laptop at modular diagnostics and testing bench',
    title: 'Manufacturing Operations Team',
    subtitle: 'Production-Support Visibility',
    bgImage: '/images/industries/zuzu-industry-manufacturing.webp',
  },
  'hospitality-corporate': {
    src: '/images/people/zuzu-executive-manager.webp',
    alt: 'Hospitality corporate office manager reviewing operations',
    title: 'Hospitality Corporate Team',
    subtitle: 'Multi-Property Visibility',
    bgImage: '/images/people/zuzu-executive-manager.webp',
  },
  'virtual-assistant-agencies': {
    src: '/images/workforce/zuzu-onboarding-setup.webp',
    alt: 'Virtual assistant agency staff setting up a placement',
    title: 'Virtual Assistant Agency Team',
    subtitle: 'Attendance & Activity Records',
    bgImage: '/images/workforce/zuzu-onboarding-setup.webp',
  },
  'saas-customer-support': {
    src: '/images/people/zuzu-executive-manager.webp',
    alt: 'SaaS support team member at a workstation',
    title: 'SaaS Customer Support Team',
    subtitle: 'Distributed Team Visibility',
    bgImage: '/images/people/zuzu-executive-manager.webp',
  },
  'franchise-operations': {
    src: '/images/workforce/zuzu-attendance-workplace.webp',
    alt: 'Multi-location operations staff reviewing site activity',
    title: 'Multi-Location Operations Team',
    subtitle: 'Consistent Cross-Site Records',
    bgImage: '/images/workforce/zuzu-attendance-workplace.webp',
  },
}

export const CLUSTER_VISUALS = {
  platform: {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/people/zuzu-executive-manager.webp',
    humanImage: {
      src: '/images/people/zuzu-executive-manager.webp',
      alt: 'Indian professional in a navy suit and glasses smiling in a modern office with a city skyline view',
      title: 'Platform Architect',
      subtitle: 'Workforce Platform Overview',
    },
  },
  timeAttendance: {
    visualType: 'dashboard',
    dashboardType: 'attendance',
    bgImage: '/images/workforce/zuzu-attendance-workplace.webp',
    humanImage: {
      src: '/images/workforce/zuzu-attendance-workplace.webp',
      alt: 'Indian professional reviewing a shift and attendance dashboard on a large monitor at a standing desk',
      title: 'Attendance Specialist',
      subtitle: 'Automated Shift Verifications',
    },
  },
  activity: {
    visualType: 'dashboard',
    dashboardType: 'activity',
    bgImage: '/images/workforce/zuzu-developer-focused.webp',
    humanImage: {
      src: '/images/workforce/zuzu-developer-focused.webp',
      alt: 'Open-plan tech office with rows of developers working at laptops',
      title: 'Senior Software Engineer',
      subtitle: 'Deep Work Focus Telemetry',
    },
  },
  screenshotPrivacy: {
    visualType: 'dashboard',
    dashboardType: 'privacy',
    bgImage: '/images/workforce/zuzu-security-privacy.webp',
  },
  aiAnalytics: {
    visualType: 'dashboard',
    dashboardType: 'ai',
    bgImage: '/images/people/zuzu-analyst-working.webp',
    humanImage: {
      src: '/images/people/zuzu-analyst-working.webp',
      alt: 'Two Indian professionals reviewing market analysis charts together at a desk in a brick-walled office',
      title: 'Workforce Data Analyst',
      subtitle: 'AI Productivity Patterns',
    },
  },
  managerWorkspace: {
    visualType: 'dashboard',
    dashboardType: 'manager',
    bgImage: '/images/workforce/zuzu-manager-review.webp',
    humanImage: {
      src: '/images/workforce/zuzu-manager-review.webp',
      alt: 'Professional seated by an office window with a city view, hands resting on a closed laptop',
      title: 'Engineering Team Manager',
      subtitle: 'Daily Reports & Insights',
    },
  },
  adminSecurity: {
    visualType: 'dashboard',
    dashboardType: 'admin',
    bgImage: '/images/workforce/zuzu-admin-governance.webp',
    humanImage: {
      src: '/images/workforce/zuzu-admin-governance.webp',
      alt: 'IT systems administrator reviewing an infrastructure dashboard on a tablet beside a server room',
      title: 'Enterprise Systems Admin',
      subtitle: 'Role & Policy Governance',
    },
  },
  reports: {
    visualType: 'dashboard',
    dashboardType: 'ai',
    bgImage: '/images/workforce/zuzu-reports-executive.webp',
    humanImage: {
      src: '/images/workforce/zuzu-reports-executive.webp',
      alt: 'Laptop displaying an analytics dashboard with charts and daily active user metrics on a reflective office desk',
      title: 'Operations Director',
      subtitle: 'Automated Executive Reports',
    },
  },
  remoteWorkforce: {
    visualType: 'illustration',
    illustrationVariant: 'flow',
    bgImage: '/images/workforce/zuzu-remote-workforce.webp',
    image: {
      src: '/images/workforce/zuzu-remote-workforce.webp',
      alt: 'Professional working remotely on laptop from home office',
    },
    humanImage: {
      src: '/images/workforce/zuzu-remote-workforce.webp',
      alt: 'Professional working remotely on laptop from home office',
      title: 'Distributed Professional',
      subtitle: 'Remote Active in ZUZU',
    },
  },
  windowsAgent: {
    visualType: 'dashboard',
    dashboardType: 'windows',
    bgImage: '/images/workforce/zuzu-workforce-monitoring.webp',
    humanImage: {
      src: '/images/workforce/zuzu-workforce-monitoring.webp',
      alt: 'Close-up of a hand pinning connected app-interface mockups to a planning whiteboard',
      title: 'Desktop Systems Specialist',
      subtitle: 'Windows Agent Telemetry Active',
    },
  },
  installation: {
    visualType: 'dashboard',
    dashboardType: 'windows',
    bgImage: '/images/workforce/zuzu-installation-setup.webp',
    humanImage: {
      src: '/images/workforce/zuzu-installation-setup.webp',
      alt: 'Engineering students in safety glasses working with lab equipment in a technical workshop',
      title: 'IT Infrastructure Admin',
      subtitle: 'Guided Activation Setup Ready',
    },
  },
  learning: {
    visualType: 'illustration',
    illustrationVariant: 'grid',
    bgImage: '/images/people/zuzu-person-laptop.webp?v=2',
    image: {
      src: '/images/people/zuzu-person-laptop.webp?v=2',
      alt: 'Professional reviewing documentation and learning guides',
    },
    humanImage: {
      src: '/images/people/zuzu-person-laptop.webp?v=2',
      alt: 'Professional reviewing documentation and learning guides',
      title: 'Enablement Manager',
      subtitle: 'ZUZU Knowledge Base Active',
    },
  },
  useCases: {
    visualType: 'illustration',
    illustrationVariant: 'orbit',
    bgImage: '/images/workforce/zuzu-team-collaboration.webp',
    image: {
      src: '/images/workforce/zuzu-team-collaboration.webp',
      alt: 'Cross-functional team collaborating on project delivery',
    },
    humanImage: {
      src: '/images/workforce/zuzu-team-collaboration.webp',
      alt: 'Cross-functional team collaborating on project delivery',
      title: 'Agile Delivery Squad',
      subtitle: 'Cross-Functional Collaboration',
    },
  },
  roles: {
    visualType: 'illustration',
    illustrationVariant: 'layers',
    bgImage: '/images/people/zuzu-executive-manager.webp',
    image: {
      src: '/images/people/zuzu-executive-manager.webp',
      alt: 'Team manager reviewing workforce productivity metrics',
    },
    humanImage: {
      src: '/images/people/zuzu-executive-manager.webp',
      alt: 'Team manager reviewing workforce productivity metrics',
      title: 'People Operations Lead',
      subtitle: 'Role Hierarchy Active',
    },
  },
  'it-software': {
    visualType: 'dashboard',
    dashboardType: 'activity',
    bgImage: '/images/workforce/zuzu-developer-focused.webp',
    image: {
      src: '/images/workforce/zuzu-developer-focused.webp',
      alt: 'Software engineer focused on development work',
    },
    humanImage: {
      src: '/images/workforce/zuzu-developer-focused.webp',
      alt: 'Software engineer focused on development work',
      title: 'Software Engineering Lead',
      subtitle: 'Development Team Visibility',
    },
  },
  'accounting-finance': {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/people/zuzu-analyst-working.webp',
    image: {
      src: '/images/people/zuzu-analyst-working.webp',
      alt: 'Accounting professional reviewing financial records at a desk',
    },
    humanImage: {
      src: '/images/people/zuzu-analyst-working.webp',
      alt: 'Accounting professional reviewing financial records at a desk',
      title: 'Accounting Operations Lead',
      subtitle: 'Firm Workforce Visibility',
    },
  },
  'marketing-agencies': {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/industries/zuzu-industry-digital-agency.webp',
    image: {
      src: '/images/industries/zuzu-industry-digital-agency.webp',
      alt: 'Marketing agency team planning a campaign',
    },
    humanImage: {
      src: '/images/industries/zuzu-industry-digital-agency.webp',
      alt: 'Marketing agency team planning a campaign',
      title: 'Agency Operations Lead',
      subtitle: 'Team-Level Visibility',
    },
  },
  'bpo-call-centers': {
    visualType: 'dashboard',
    dashboardType: 'attendance',
    bgImage: '/images/industries/zuzu-industry-call-center.webp',
    image: {
      src: '/images/industries/zuzu-industry-call-center.webp',
      alt: 'Call center floor with agents at workstations',
    },
    humanImage: {
      src: '/images/industries/zuzu-industry-call-center.webp',
      alt: 'Call center floor with agents at workstations',
      title: 'BPO Floor Supervisor',
      subtitle: 'Shift & Attendance Visibility',
    },
  },
  'consulting-services': {
    visualType: 'dashboard',
    dashboardType: 'ai',
    bgImage: '/images/industries/zuzu-industry-consulting.webp',
    image: {
      src: '/images/industries/zuzu-industry-consulting.webp',
      alt: 'Consultant reviewing engagement progress',
    },
    humanImage: {
      src: '/images/industries/zuzu-industry-consulting.webp',
      alt: 'Consultant reviewing engagement progress',
      title: 'Consulting Practice Lead',
      subtitle: 'Team Activity Visibility',
    },
  },
  'startup-teams': {
    visualType: 'dashboard',
    dashboardType: 'activity',
    bgImage: '/images/industries/zuzu-industry-startup.webp',
    image: {
      src: '/images/industries/zuzu-industry-startup.webp',
      alt: 'Startup team collaborating on product development',
    },
    humanImage: {
      src: '/images/industries/zuzu-industry-startup.webp',
      alt: 'Startup team collaborating on product development',
      title: 'Startup Founder',
      subtitle: 'Early Team Visibility',
    },
  },
  'business-size': {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/industries/zuzu-industry-enterprise.webp',
    image: {
      src: '/images/industries/zuzu-industry-enterprise.webp',
      alt: 'Business leadership team reviewing workforce data',
    },
    humanImage: {
      src: '/images/industries/zuzu-industry-enterprise.webp',
      alt: 'Business leadership team reviewing workforce data',
      title: 'Operations Leadership',
      subtitle: 'Scaled By Company Size',
    },
  },
  'hr-people-ops': {
    visualType: 'dashboard',
    dashboardType: 'attendance',
    bgImage: '/images/people/zuzu-team-leaders.webp',
    image: {
      src: '/images/people/zuzu-team-leaders.webp',
      alt: 'HR team reviewing workforce attendance data',
    },
    humanImage: {
      src: '/images/people/zuzu-team-leaders.webp',
      alt: 'HR team reviewing workforce attendance data',
      title: 'People Operations Lead',
      subtitle: 'Attendance & Planning Visibility',
    },
  },
  'engineering-project-teams': {
    visualType: 'dashboard',
    dashboardType: 'activity',
    bgImage: '/images/people/zuzu-executive-manager.webp',
    image: {
      src: '/images/people/zuzu-executive-manager.webp',
      alt: 'Engineering lead reviewing sprint and delivery visibility',
    },
    humanImage: {
      src: '/images/people/zuzu-executive-manager.webp',
      alt: 'Engineering lead reviewing sprint and delivery visibility',
      title: 'Engineering Manager',
      subtitle: 'Team Activity Visibility',
    },
  },
  'business-owner-insights': {
    visualType: 'dashboard',
    dashboardType: 'ai',
    bgImage: '/images/workforce/zuzu-reports-executive.webp',
    image: {
      src: '/images/workforce/zuzu-reports-executive.webp',
      alt: 'Business owner reviewing operational reports',
    },
    humanImage: {
      src: '/images/workforce/zuzu-reports-executive.webp',
      alt: 'Business owner reviewing operational reports',
      title: 'Business Owner',
      subtitle: 'Decision-Support Visibility',
    },
  },
  productivity: {
    visualType: 'photo',
    bgImage: '/images/people/zuzu-person-laptop.webp?v=2',
    image: {
      src: '/images/people/zuzu-person-laptop.webp?v=2',
      alt: 'Professional reviewing workforce productivity guidance',
    },
    humanImage: {
      src: '/images/people/zuzu-person-laptop.webp?v=2',
      alt: 'Professional reviewing workforce productivity guidance',
      title: 'Operations Lead',
      subtitle: 'Productivity Playbook Active',
    },
  },
  'workforce-insights': {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/workforce/zuzu-admin-governance.webp',
    image: {
      src: '/images/workforce/zuzu-admin-governance.webp',
      alt: 'Leadership reviewing organization-wide workforce insight',
    },
    humanImage: {
      src: '/images/workforce/zuzu-admin-governance.webp',
      alt: 'Leadership reviewing organization-wide workforce insight',
      title: 'Workforce Insights Lead',
      subtitle: 'Organization-Wide Visibility',
    },
  },
}

export const SECTION_VISUALS = {
  product: {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/people/zuzu-executive-manager.webp',
    humanImage: {
      src: '/images/people/zuzu-executive-manager.webp',
      alt: 'Indian professional in a navy suit and glasses smiling in a modern office with a city skyline view',
      title: 'Platform Architect',
      subtitle: 'Workforce Platform Overview',
    },
  },
  solutions: {
    visualType: 'dashboard',
    dashboardType: 'manager',
    bgImage: '/images/workforce/zuzu-hybrid-workforce.webp',
    humanImage: {
      src: '/images/workforce/zuzu-hybrid-workforce.webp',
      alt: 'Group of colleagues with laptops and headphones collaborating together at a wooden table',
      title: 'Workforce Operations',
      subtitle: 'Hybrid Solutions Active',
    },
  },
  industries: {
    visualType: 'photo',
    bgImage: '/images/workforce/zuzu-hybrid-workforce.webp',
    image: {
      src: '/images/workforce/zuzu-hybrid-workforce.webp',
      alt: 'Enterprise workforce teams across industries collaborating',
    },
    humanImage: {
      src: '/images/workforce/zuzu-hybrid-workforce.webp',
      alt: 'Enterprise workforce teams across industries collaborating',
      title: 'Cross-Industry Workforce',
      subtitle: 'Workforce Visibility Across Industries',
    },
  },
  resources: {
    visualType: 'illustration',
    illustrationVariant: 'grid',
    bgImage: '/images/resources/zuzu-resource-hub.webp',
    image: {
      src: '/images/resources/zuzu-resource-hub.webp',
      alt: 'Enterprise operations and engineering teams reviewing resources and guides',
    },
    humanImage: {
      src: '/images/resources/zuzu-resource-hub.webp',
      alt: 'Enterprise operations and engineering teams reviewing resources and guides',
      title: 'Resource & Enablement Center',
      subtitle: 'Documentation, Tutorials & Support',
    },
  },
}

export const NAV_ITEM_VISUALS = {
  'product:workforce-monitoring': {
    visualType: 'dashboard',
    dashboardType: 'privacy',
    bgImage: '/images/workforce/zuzu-security-privacy.webp',
  },
  'product:employee-activity': {
    visualType: 'dashboard',
    dashboardType: 'activity',
    bgImage: '/images/workforce/zuzu-developer-focused.webp',
    humanImage: {
      src: '/images/workforce/zuzu-developer-focused.webp',
      alt: 'Indian software engineer deeply engaged in coding at dual-monitor workstation in modern engineering workspace',
      title: 'Senior Software Engineer',
      subtitle: 'Deep Work Focus Telemetry',
    },
  },
  'product:time-attendance': {
    visualType: 'dashboard',
    dashboardType: 'attendance',
    bgImage: '/images/workforce/zuzu-attendance-workplace.webp',
    humanImage: {
      src: '/images/workforce/zuzu-attendance-workplace.webp',
      alt: 'Enterprise operations and engineering teams reviewing resources and guides',
      title: 'Attendance Specialist',
      subtitle: 'Automated Shift Verifications',
    },
  },
  'product:ai-reports': {
    visualType: 'dashboard',
    dashboardType: 'ai',
    bgImage: '/images/workforce/zuzu-reports-executive.webp',
    humanImage: {
      src: '/images/workforce/zuzu-reports-executive.webp',
      alt: 'Enterprise operations and engineering teams reviewing resources and guides',
      title: 'Operations Director',
      subtitle: 'Automated Executive Reports',
    },
  },
  'product:workforce-analytics': {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/people/zuzu-analyst-working.webp',
    humanImage: {
      src: '/images/people/zuzu-analyst-working.webp',
      alt: 'Enterprise operations and engineering teams reviewing resources and guides',
      title: 'Workforce Data Analyst',
      subtitle: 'AI Productivity Patterns',
    },
  },
  'product:manager-workspace': {
    visualType: 'dashboard',
    dashboardType: 'manager',
    bgImage: '/images/workforce/zuzu-manager-workspace.webp',
    humanImage: {
      src: '/images/workforce/zuzu-manager-workspace.webp',
      alt: 'Enterprise operations and engineering teams reviewing resources and guides',
      title: 'Engineering Team Manager',
      subtitle: 'Daily Reports & Insights',
    },
  },
  'product:admin-portal': {
    visualType: 'dashboard',
    dashboardType: 'admin',
    bgImage: '/images/workforce/zuzu-admin-governance.webp',
    humanImage: {
      src: '/images/workforce/zuzu-admin-governance.webp',
      alt: 'Enterprise operations and engineering teams reviewing resources and guides',
      title: 'Enterprise Systems Admin',
      subtitle: 'Role & Policy Governance',
    },
  },
  'product:windows-agent': {
    visualType: 'dashboard',
    dashboardType: 'windows',
    bgImage: '/images/workforce/zuzu-workforce-monitoring.webp',
    humanImage: {
      src: '/images/workforce/zuzu-workforce-monitoring.webp',
      alt: 'Enterprise operations and engineering teams reviewing resources and guides',
      title: 'Desktop Systems Specialist',
      subtitle: 'Windows Agent Telemetry Active',
    },
  },

  'solutions:remote-workforce': {
    visualType: 'photo',
    bgImage: '/images/workforce/zuzu-remote-workforce.webp',
    image: {
      src: '/images/workforce/zuzu-remote-workforce.webp',
      alt: 'Professional working remotely in focused workspace',
    },
    humanImage: {
      src: '/images/workforce/zuzu-remote-workforce.webp',
      alt: 'Professional working remotely in focused workspace',
      title: 'Distributed Professional',
      subtitle: 'Remote Active in ZUZU',
    },
  },
  'solutions:hybrid-workforce': {
    visualType: 'photo',
    bgImage: '/images/workforce/zuzu-hybrid-workforce.webp',
    image: {
      src: '/images/workforce/zuzu-hybrid-workforce.webp',
      alt: 'Indian remote professional working at modern home office workstation with secondary monitor video conference connecting to distributed hybrid team',
    },
    humanImage: {
      src: '/images/workforce/zuzu-hybrid-workforce.webp',
      alt: 'Indian remote professional working at modern home office workstation with secondary monitor video conference connecting to distributed hybrid team',
      title: 'Hybrid Team Member',
      subtitle: 'Seamless Cross-Site Collaboration',
    },
  },
  'solutions:workforce-visibility': {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/workforce/zuzu-platform-architect.webp',
    humanImage: {
      src: '/images/workforce/zuzu-platform-architect.webp',
      alt: 'Senior platform architect working at multi-monitor enterprise command workstation reviewing connected workforce systems and telemetry',
      title: 'Platform Architect',
      subtitle: 'Workforce Platform Overview',
    },
  },
  'solutions:employee-productivity': {
    visualType: 'dashboard',
    dashboardType: 'activity',
    bgImage: '/images/workforce/zuzu-developer-focused.webp',
    humanImage: {
      src: '/images/workforce/zuzu-developer-focused.webp',
      alt: 'Indian software engineer deeply engaged in coding at dual-monitor workstation in modern engineering workspace',
      title: 'Senior Software Engineer',
      subtitle: 'Deep Work Focus Telemetry',
    },
  },
  'solutions:workforce-reporting': {
    visualType: 'dashboard',
    dashboardType: 'ai',
    bgImage: '/images/workforce/zuzu-reports-executive.webp',
    humanImage: {
      src: '/images/workforce/zuzu-reports-executive.webp',
      alt: 'Hybrid workforce collaborating across office and remote',
      title: 'Operations Director',
      subtitle: 'Automated Executive Reports',
    },
  },
  'solutions:behaviour-intelligence': {
    visualType: 'dashboard',
    dashboardType: 'manager',
    bgImage: '/images/workforce/zuzu-manager-review.webp',
    humanImage: {
      src: '/images/workforce/zuzu-manager-review.webp',
      alt: 'Indian engineering team manager reviewing team activity patterns, workload distribution, and workforce insights on a large dashboard monitor in modern office',
      title: 'Engineering Team Manager',
      subtitle: 'Daily Reports & Insights',
    },
  },

  'resources:guides': {
    visualType: 'photo',
    bgImage: '/images/resources/zuzu-resource-guides.webp',
    image: {
      src: '/images/resources/zuzu-resource-guides.webp',
      alt: 'Professional researching workforce visibility guides on laptop',
    },
    humanImage: {
      src: '/images/resources/zuzu-resource-guides.webp',
      alt: 'Professional researching workforce visibility guides on laptop',
      title: 'Knowledge & Enablement Lead',
      subtitle: 'Workforce Guides Active',
    },
  },
  'resources:how-to': {
    visualType: 'photo',
    bgImage: '/images/resources/zuzu-resource-howto.webp',
    image: {
      src: '/images/resources/zuzu-resource-howto.webp',
      alt: 'IT specialist configuring setup step-by-step',
    },
    humanImage: {
      src: '/images/resources/zuzu-resource-howto.webp',
      alt: 'IT specialist configuring setup step-by-step',
      title: 'IT Implementation Specialist',
      subtitle: 'Step-by-Step Deployment Guides',
    },
  },
  'resources:knowledge-hub': {
    visualType: 'photo',
    bgImage: '/images/resources/zuzu-resource-knowledge-hub.webp',
    image: {
      src: '/images/resources/zuzu-resource-knowledge-hub.webp',
      alt: 'Systems architect reviewing technical documentation and knowledge base',
    },
    humanImage: {
      src: '/images/resources/zuzu-resource-knowledge-hub.webp',
      alt: 'Systems architect reviewing technical documentation and knowledge base',
      title: 'Documentation Architect',
      subtitle: 'Knowledge Hub Active',
    },
  },
  'resources:comparisons': {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/workforce/zuzu-comparisons-evaluation.webp',
    humanImage: {
      src: '/images/workforce/zuzu-comparisons-evaluation.webp',
      alt: 'Enterprise technology decision-maker evaluating workforce intelligence solutions on a large curved monitor in modern office',
      title: 'Enterprise Decision-Maker',
      subtitle: 'Workforce Platform Evaluation',
    },
  },
  'resources:alternatives': {
    visualType: 'photo',
    bgImage: '/images/resources/zuzu-resource-alternatives.webp',
    image: {
      src: '/images/resources/zuzu-resource-alternatives.webp',
      alt: 'Business operations leader reviewing software evaluation criteria',
    },
    humanImage: {
      src: '/images/resources/zuzu-resource-alternatives.webp',
      alt: 'Business operations leader reviewing software evaluation criteria',
      title: 'Technology Procurement Director',
      subtitle: 'Evaluation Framework Active',
    },
  },
  'resources:templates': {
    visualType: 'photo',
    bgImage: '/images/people/zuzu-person-laptop.webp?v=2',
    image: {
      src: '/images/people/zuzu-person-laptop.webp?v=2',
      alt: 'Professional reviewing ready-to-use workforce templates',
    },
    humanImage: {
      src: '/images/people/zuzu-person-laptop.webp?v=2',
      alt: 'Professional reviewing ready-to-use workforce templates',
      title: 'Operations Specialist',
      subtitle: 'Curated Template Library',
    },
  },
  'resources:faqs': {
    visualType: 'photo',
    bgImage: '/images/resources/zuzu-resource-faqs.webp',
    image: {
      src: '/images/resources/zuzu-resource-faqs.webp',
      alt: 'Professional discovering solutions in frequently asked questions',
    },
    humanImage: {
      src: '/images/resources/zuzu-resource-faqs.webp',
      alt: 'Professional discovering solutions in frequently asked questions',
      title: 'Customer Success Specialist',
      subtitle: 'Frequently Asked Questions',
    },
  },
  'resources:support': {
    visualType: 'photo',
    bgImage: '/images/resources/zuzu-resource-support.webp',
    image: {
      src: '/images/resources/zuzu-resource-support.webp',
      alt: 'Customer support specialist assisting enterprise clients',
    },
    humanImage: {
      src: '/images/resources/zuzu-resource-support.webp',
      alt: 'Customer support specialist assisting enterprise clients',
      title: 'Customer Engineering Specialist',
      subtitle: 'Technical Support Resources',
    },
  },
}

export function getClusterVisual(clusterKey, page) {
  const base = CLUSTER_VISUALS[clusterKey] || {
    visualType: 'dashboard',
    dashboardType: 'analytics',
    bgImage: '/images/people/zuzu-executive-manager.webp',
    humanImage: {
      src: '/images/people/zuzu-executive-manager.webp',
      alt: 'Customer support specialist assisting enterprise clients',
      title: 'Platform Architect',
      subtitle: 'Workforce Platform Overview',
    },
  }

  // If page explicitly specifies visualType override
  if (page?.visualType && page?.visualType !== 'photo') {
    return {
      ...base,
      visualType: 'dashboard',
      dashboardType: page.visualType,
    }
  }

  if (page?.visual === 'photo') {
    return {
      ...base,
      visualType: 'photo',
      image: base.image || {
        src: base.bgImage,
        alt: `${page.title || 'Workforce'} team in practice`,
      },
    }
  }

  return base
}

export function getIndustryVisual(slug) {
  return (
    INDUSTRY_VISUALS[slug] || {
      src: '/images/industries/zuzu-industry-enterprise.webp',
      alt: 'Enterprise workforce team collaborating',
      title: 'Enterprise Team',
      subtitle: 'Enterprise Workforce Visibility',
      bgImage: '/images/industries/zuzu-industry-enterprise.webp',
    }
  )
}
