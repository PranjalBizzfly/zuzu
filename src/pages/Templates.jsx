import { useState, useEffect } from 'react'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import Badge from '../components/ui/Badge'
import EyebrowBadge from '../components/ui/EyebrowBadge'
import Button from '../components/ui/Button'
import CTA from '../components/ui/CTA'
import FAQ from '../components/ui/FAQ'
import Seo from '../components/Seo'
import TypewriterHeading from '../components/motion/TypewriterHeading'
import AccentWords from '../components/motion/AccentWords'
import HumanImage from '../components/ui/HumanImage'
import {
  FileTextIcon,
  ClockIcon,
  BarChartIcon,
  LayersIcon,
  UsersIcon,
  SettingsIcon,
  DownloadIcon,
  EyeIcon,
  CheckIcon,
  ActivityIcon,
  ShieldIcon,
  SparklesIcon,
  XCircleIcon,
  ArrowRightIcon,
} from '../components/ui/icons'
import SectionTitle from '../components/ui/SectionTitle'

const TEMPLATE_ITEMS = [
  {
    id: 'workforce-summary',
    title: 'Workforce Summary Report',
    category: 'Reports',
    icon: FileTextIcon,
    iconBg: 'bg-green/10 text-green',
    description: 'Get a complete overview of team activity, attendance and AI reports data in a single export.',
    fileType: 'PDF / CSV Export',
    metrics: ['Total Work Hours', 'Application & Website Activity', 'Attendance Records', 'AI Report Summaries'],
    humanImage: {
      src: '/images/workforce/zuzu-reports-executive.webp',
      alt: 'Operations Director analyzing executive workforce summary report',
      role: 'Operations Director',
      context: 'Gives operations leads one summary of team activity, attendance and AI reports data instead of several separate reports.',
    },
    sampleData: [
      { label: 'Activity', value: 'Apps & websites' },
      { label: 'Attendance', value: 'Clock-ins & hours' },
      { label: 'AI Reports', value: 'Daily summaries' },
    ],
  },
  {
    id: 'time-attendance-report',
    title: 'Time & Attendance Report',
    category: 'Reports',
    icon: ClockIcon,
    iconBg: 'bg-blue-500/10 text-blue-400',
    description: 'Review clock-ins, tracked working hours and break periods captured automatically by the Windows agent.',
    fileType: 'Shift Timesheet Format',
    metrics: ['Clock-in / Out Timestamps', 'Tracked Working Hours', 'Break Periods', 'After-Hours Activity'],
    humanImage: {
      src: '/images/workforce/zuzu-attendance-workplace.webp',
      alt: 'Workplace attendance specialist reviewing attendance records',
      role: 'Attendance Specialist',
      context: 'Attendance is recorded automatically through the Windows agent, so there is no manual timesheet to fill in.',
    },
    sampleData: [
      { label: 'Clock-ins', value: 'Recorded automatically' },
      { label: 'Hours', value: 'Tracked per employee' },
      { label: 'After Hours', value: 'Activity timing' },
    ],
  },
  {
    id: 'productivity-dashboard',
    title: 'Productivity Dashboard',
    category: 'Dashboards',
    icon: BarChartIcon,
    iconBg: 'bg-purple-500/10 text-purple-400',
    description: 'Visualize performance trends, deep-work focus blocks, and identify team improvement areas.',
    fileType: 'Live KPI Layout',
    metrics: ['Active App Time', 'Idle vs Active %', 'Category Breakdown', 'Peak Productivity Hours'],
    humanImage: {
      src: '/images/people/zuzu-analyst-working.webp',
      alt: 'Workforce data analyst analyzing real-time team productivity KPI trends',
      role: 'Workforce Data Analyst',
      context: 'Helps team leads and analysts review application usage, focus time and peak activity windows across their teams.',
    },
    sampleData: [
      { label: 'App Usage', value: 'By category' },
      { label: 'Focus Time', value: 'Versus app switching' },
      { label: 'Peak Hours', value: 'Most active windows' },
    ],
  },
  {
    id: 'behavior-intelligence-report',
    title: 'Behavior Intelligence Report',
    category: 'Reports',
    icon: LayersIcon,
    iconBg: 'bg-pink-500/10 text-pink-400',
    description: 'Understand baseline work patterns and workflow deviations without invasive surveillance.',
    fileType: 'Executive Summary',
    metrics: ['Individual Baseline Comparison', 'Anomaly Review Queue', 'Focus vs Context-Switching', 'On-Device Redaction'],
    humanImage: {
      src: '/images/workforce/zuzu-security-privacy.webp',
      alt: 'Security and compliance officer evaluating workforce behavioral patterns',
      role: 'Compliance & Privacy Lead',
      context: "Compares activity against an individual's own historical baseline rather than arbitrary fixed rules, with sensitive personal data automatically redacted at source.",
    },
    sampleData: [
      { label: 'Baseline', value: "Each person's own" },
      { label: 'Changes', value: 'Routed to review' },
      { label: 'Privacy', value: 'Redacted on-device' },
    ],
  },
  {
    id: 'manager-workspace-template',
    title: 'Manager Workspace Template',
    category: 'Dashboards',
    icon: UsersIcon,
    iconBg: 'bg-teal-500/10 text-teal-400',
    description: "Stay on top of your team's activity, attendance and daily reports, scoped to the team you manage.",
    fileType: 'Team Board Layout',
    metrics: ['Team Activity & Attendance', 'Daily Reports', 'Team Insights', 'Anomaly Review'],
    humanImage: {
      src: '/images/workforce/zuzu-manager-workspace.webp',
      alt: 'Engineering manager reviewing team activity and attendance',
      role: 'Engineering Team Manager',
      context: 'A team-scoped workspace for frontline managers to review daily reports, insights and flagged changes for the people they manage.',
    },
    sampleData: [
      { label: 'Scope', value: "Manager's own team" },
      { label: 'Reports', value: 'Daily reports' },
      { label: 'Review', value: 'Flagged changes' },
    ],
  },
  {
    id: 'custom-report-template',
    title: 'Custom Report Template',
    category: 'Workflows',
    icon: SettingsIcon,
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    description: 'Filter workforce reports by date range and share them as CSV, Excel or PDF exports, or as email digests.',
    fileType: 'CSV / Excel / PDF Export',
    metrics: ['Date-Range Filtering', 'Activity & Attendance Data', 'Email Digests', 'CSV / Excel / PDF Export'],
    humanImage: {
      src: '/images/people/zuzu-executive-manager.webp',
      alt: 'Platform architect reviewing workforce reports',
      role: 'Platform Architect',
      context: 'Lets operations and IT leads filter the activity, attendance and AI reports data ZUZU already tracks and export it.',
    },
    sampleData: [
      { label: 'Filter', value: 'By date range' },
      { label: 'Delivery', value: 'Email digests' },
      { label: 'Export', value: 'CSV, Excel or PDF' },
    ],
  },
  {
    id: 'remote-workforce-telemetry',
    title: 'Remote Workforce Telemetry',
    category: 'Dashboards',
    icon: ActivityIcon,
    iconBg: 'bg-amber-500/10 text-amber-400',
    description: 'Track activity, attendance and focus time for distributed teams, with offline captures synced when a device reconnects.',
    fileType: 'Remote KPI Matrix',
    metrics: ['Remote & Hybrid Visibility', 'Focus Time Insights', 'Punch-In / Out Sessions', 'Offline Capture Sync'],
    humanImage: {
      src: '/images/workforce/zuzu-remote-workforce.webp',
      alt: 'Distributed remote professional working from home office with ZUZU telemetry',
      role: 'Remote Operations Director',
      context: 'Gives distributed organizations one consistent view of activity and attendance for remote, hybrid and in-office teams.',
    },
    sampleData: [
      { label: 'Locations', value: 'Remote, hybrid, office' },
      { label: 'Sessions', value: 'Punch-in to punch-out' },
      { label: 'Offline', value: 'Synced on reconnect' },
    ],
  },
  {
    id: 'employee-onboarding-workflow',
    title: 'Employee Onboarding & Compliance',
    category: 'Workflows',
    icon: ShieldIcon,
    iconBg: 'bg-indigo-500/10 text-indigo-400',
    description: 'Walk each new employee through Windows agent installation, activation and privacy controls setup.',
    fileType: 'Audit Checklist & Flow',
    metrics: ['Windows Agent Installation', 'Activation Code Entry', 'Employee & Device Setup', 'Privacy Controls Review'],
    humanImage: {
      src: '/images/workforce/zuzu-onboarding-setup.webp',
      alt: 'IT onboarding coordinator validating employee workstation setup and agent status',
      role: 'IT Onboarding Lead',
      context: 'A repeatable checklist for rolling out the ZUZU Windows agent to new hires, from installation to activation.',
    },
    sampleData: [
      { label: 'Install', value: 'Windows Agent' },
      { label: 'Activate', value: 'Activation code' },
      { label: 'Configure', value: 'Privacy Controls' },
    ],
  },
  {
    id: 'executive-leadership-rollup',
    title: 'Executive Leadership Rollup',
    category: 'Reports',
    icon: SparklesIcon,
    iconBg: 'bg-cyan-500/10 text-cyan-400',
    description: 'An organization-level view of workforce activity, attendance and AI-generated insights for leadership review.',
    fileType: 'PDF / CSV / Excel Export',
    metrics: ['Workforce Analytics Trends', 'Attendance & Activity Overview', 'AI Report Insights', 'Exportable Reports'],
    humanImage: {
      src: '/images/workforce/zuzu-story-enterprise.webp',
      alt: 'Executive leadership team reviewing workforce reports',
      role: 'Chief Operating Officer',
      context: "The same AI reports and workforce analytics data, viewed at the organization level for leadership review.",
    },
    sampleData: [
      { label: 'Scope', value: 'Organization-wide' },
      { label: 'Data', value: 'Reports & analytics' },
      { label: 'Share', value: 'CSV, Excel or PDF' },
    ],
  },
]

const TABS = ['All Templates', 'Reports', 'Dashboards', 'Workflows']

const FAQ_ITEMS = [
  {
    question: 'Are these pre-built reports, or do I need to configure them myself in ZUZU?',
    answer: 'Each template reflects a report or dashboard layout already available in ZUZU, workforce summary, time & attendance, manager workspace and the rest are existing views, not something you build from scratch.',
  },
  {
    question: 'What does the Workforce Summary Report actually pull from?',
    answer: "Activity, attendance and AI reports data already collected through the Windows agent, summarized into one PDF or CSV export rather than several separate reports.",
  },
  {
    question: 'Is the Time & Attendance Report based on manually submitted timesheets?',
    answer: 'No, it reflects hours and attendance tracked automatically through the Windows agent, not a manually filled-in timesheet.',
  },
  {
    question: 'What powers the Behavior Intelligence Report template?',
    answer: "ZUZU's behaviour intelligence, which compares activity against an individual's own baseline rather than a fixed rule, with flagged changes routed to a review queue.",
  },
  {
    question: 'Can the Manager Workspace Template be scoped to just one manager’s team?',
    answer: "Yes, manager workspace is scoped to a manager's own assigned team by default; it doesn't show the wider organization.",
  },
  {
    question: 'Does the Custom Report Template let me report on anything, including data ZUZU doesn’t collect?',
    answer: 'No, custom reports can filter and combine the workforce data ZUZU already tracks (activity, attendance, AI reports, analytics); they don’t add new data sources or integrations.',
  },
  {
    question: 'Do I need a paid plan to try these templates?',
    answer: 'No, they’re available to explore during the 7-day free trial, which covers up to 10 employees with no card required.',
  },
  {
    question: 'Can I export these templates in more than one format?',
    answer: 'Depending on the template, exports are available as PDF, CSV or Excel, consistent with the export formats ZUZU supports elsewhere in reports.',
  },
]

export default function Templates() {
  const [activeTab, setActiveTab] = useState('All Templates')
  const [downloadedId, setDownloadedId] = useState(null)
  const [previewTemplate, setPreviewTemplate] = useState(null)

  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Templates' }]

  const filteredTemplates = TEMPLATE_ITEMS.filter((item) => {
    if (activeTab === 'All Templates') return true
    return item.category === activeTab
  })

  const handleDownload = (id) => {
    setDownloadedId(id)
    setTimeout(() => setDownloadedId(null), 2500)
  }

  // Handle ESC key to dismiss preview modal and lock background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPreviewTemplate(null)
      }
    }
    if (previewTemplate) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [previewTemplate])

  return (
    <>
      <Seo
        title="Ready-to-Use Templates | ZUZU"
        description="Get started quickly with curated ZUZU templates for reports, workflows, and dashboards. Real-human workforce telemetry customized to match your team's needs."
        path="/templates"
        breadcrumbs={breadcrumbItems}
        faq={FAQ_ITEMS}
      />

      {/* 1. Full-Width Hero Banner matching reference collage */}
      <section className="relative w-full overflow-hidden border-b border-line min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center bg-surface">
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <img
            src="/images/people/zuzu-person-laptop.webp"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-right md:object-right-center transition-transform duration-700 ease-out transform-gpu"
            loading="eager"
            fetchPriority="high"
          />
          {/* Dark Mode Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/90 via-55% to-[#0B1220]/30 dark:opacity-100 opacity-0 transition-opacity pointer-events-none" />
          {/* Light Mode Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 via-55% to-[#F8FAFC]/35 dark:opacity-0 opacity-100 transition-opacity pointer-events-none" />
          {/* Bottom Blend */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-page-bg via-page-bg/60 to-transparent pointer-events-none" />
        </div>

        <Container className="relative z-10 w-full py-14 sm:py-20 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-5 max-w-2xl">
              <Breadcrumb items={breadcrumbItems} />
              <EyebrowBadge>Resource Hub</EyebrowBadge>
              <TypewriterHeading as="h1" trigger="mount" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-[1.14]">
                Ready-to-Use Templates
              </TypewriterHeading>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                Get started quickly with our curated templates for reports, workflows, and dashboards.
                Each template connects real human workforce operations to automated ZUZU telemetry.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button to="/free-trial" variant="primary" size="md">
                  Start 7-Day Free Trial
                </Button>
                <Button to="/platform" variant="outline" size="md" className="bg-surface/60 backdrop-blur-sm border-line hover:bg-surface/90">
                  Explore Platform
                </Button>
              </div>
            </div>

            {/* Right Column: Floating Glass Template Badges */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col gap-4 items-center lg:items-end justify-center min-h-[160px] sm:min-h-[220px]">
              <div className="flex flex-col gap-3.5 max-w-xs w-full sm:w-auto">
                <div className="flex items-center gap-3 rounded-2xl border border-line/80 bg-surface/85 backdrop-blur-xl px-4 py-3 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:scale-105 transition-transform duration-200">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green/10 text-green font-bold">
                    <BarChartIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-ink">Dashboard</p>
                    <p className="text-[11px] text-muted">Curated productivity view</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-line/80 bg-surface/85 backdrop-blur-xl px-4 py-3 shadow-xl ring-1 ring-black/5 dark:ring-white/10 hover:scale-105 transition-transform duration-200">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 font-bold">
                    <FileTextIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-ink">Workflow template</p>
                    <p className="text-[11px] text-muted">CSV, Excel &amp; PDF export</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Filter Tabs & Template Gallery */}
      <section className="py-10 sm:py-16">
        <Container className="flex flex-col gap-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 border-b border-line pb-4 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-150 rounded-lg whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-green bg-green/10'
                    : 'text-muted hover:text-ink hover:bg-surface'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute inset-x-2 -bottom-[17px] h-0.5 bg-green rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Template Cards Grid with Real Human Content Images */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((item) => {
              const Icon = item.icon
              const isDownloaded = downloadedId === item.id

              return (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-line-strong hover:bg-elevated hover:shadow-xl"
                >
                  {/* Top Real Human Image Related to the Template Content */}
                  <div className="relative overflow-hidden">
                    <HumanImage
                      src={item.humanImage.src}
                      alt={item.humanImage.alt}
                      aspectRatio="aspect-[16/10]"
                      objectPosition="object-[50%_25%]"
                      rounded="rounded-t-2xl rounded-b-none"
                      border={false}
                      badge={item.humanImage.role}
                      imageClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 z-10">
                      <Badge variant="purple" className="shadow-md backdrop-blur-md bg-surface/90 border border-line/80">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Template Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <TypewriterHeading as="h2" className="text-base font-bold text-ink leading-snug">
                          {item.title}
                        </TypewriterHeading>
                      </div>

                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>

                      {/* Included Key Metrics / Content Indicators */}
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {item.metrics.slice(0, 3).map((metric) => (
                          <span
                            key={metric}
                            className="inline-flex items-center gap-1 rounded-md bg-page-bg/80 border border-line/60 px-2 py-0.5 text-[11px] font-medium text-muted"
                          >
                            <CheckIcon className="h-2.5 w-2.5 text-green" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Template Card Footer */}
                    <div className="mt-6 pt-4 border-t border-line/70 flex items-center justify-between gap-2">
                      <span className="text-xs text-muted font-medium truncate">{item.fileType}</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setPreviewTemplate(item)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-line hover:border-line-strong bg-surface hover:bg-elevated text-ink transition-colors"
                          title="Preview template inside with real-human workflow details"
                        >
                          <EyeIcon className="h-3.5 w-3.5 text-muted" />
                          <span>Preview</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDownload(item.id)}
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-150 ${
                            isDownloaded
                              ? 'border-green bg-green/10 text-green'
                              : 'border-green/40 bg-green/10 hover:bg-green/20 text-green'
                          }`}
                        >
                          {isDownloaded ? (
                            <>
                              <CheckIcon className="h-3.5 w-3.5 text-green" />
                              <span>Ready!</span>
                            </>
                          ) : (
                            <>
                              <DownloadIcon className="h-3.5 w-3.5 text-green" />
                              <span>Download</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 3. Interactive "Inside the Template" Preview Modal */}
      {previewTemplate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="preview-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
          onClick={() => setPreviewTemplate(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
              <div className="flex items-center gap-3.5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${previewTemplate.iconBg}`}>
                  {(() => {
                    const IconComponent = previewTemplate.icon
                    return <IconComponent className="h-6 w-6" />
                  })()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="purple">{previewTemplate.category}</Badge>
                    <span className="text-xs text-muted font-medium">{previewTemplate.fileType}</span>
                  </div>
                  <h2 id="preview-modal-title" className="text-xl sm:text-2xl font-bold text-ink mt-1">
                    <AccentWords>{previewTemplate.title}</AccentWords>
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                className="rounded-xl p-1.5 text-muted hover:text-ink hover:bg-elevated transition-colors"
                aria-label="Close template preview"
              >
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body: Inside the Template View */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Real Human Photography & Practical Workflow Context */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="overflow-hidden rounded-2xl border border-line shadow-lg">
                  <HumanImage
                    src={previewTemplate.humanImage.src}
                    alt={previewTemplate.humanImage.alt}
                    aspectRatio="aspect-[16/10]"
                    objectPosition="object-[50%_25%]"
                    badge={previewTemplate.humanImage.role}
                    border={false}
                  />
                </div>

                <div className="rounded-2xl border border-line/80 bg-elevated/70 p-4.5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-ink">
                    <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
                    <span>In Practice: {previewTemplate.humanImage.role}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed italic">
                    "{previewTemplate.humanImage.context}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-line/70 bg-page-bg p-3">
                    <span className="text-muted block text-[11px]">Format Support</span>
                    <span className="font-semibold text-ink mt-0.5 block">PDF, CSV & Excel</span>
                  </div>
                  <div className="rounded-xl border border-line/70 bg-page-bg p-3">
                    <span className="text-muted block text-[11px]">Telemetry Source</span>
                    <span className="font-semibold text-ink mt-0.5 block">Windows Agent</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Internal Metrics, Sample Telemetry, and Actions */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted">
                    Template Overview
                  </h3>
                  <p className="text-sm text-ink leading-relaxed mt-1.5">
                    {previewTemplate.description}
                  </p>
                </div>

                {/* Sample Live Output inside Template */}
                <div className="rounded-2xl border border-line bg-page-bg/90 p-4.5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-ink">What This Template Shows</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {previewTemplate.sampleData.map((item) => (
                      <div key={item.label} className="rounded-xl border border-line/70 bg-surface p-2.5 text-center">
                        <div className="text-[10px] text-muted truncate">{item.label}</div>
                        <div className="text-sm font-bold text-ink mt-1">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included telemetry attributes */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-2.5">
                    Included in This Template
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {previewTemplate.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center gap-2 rounded-lg border border-line/60 bg-surface px-3 py-2 text-xs font-medium text-ink"
                      >
                        <CheckIcon className="h-3.5 w-3.5 text-green shrink-0" />
                        <span className="truncate">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-line">
                  <button
                    type="button"
                    onClick={() => handleDownload(previewTemplate.id)}
                    className={`w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border transition-all duration-150 ${
                      downloadedId === previewTemplate.id
                        ? 'border-green bg-green/10 text-green'
                        : 'border-transparent bg-green text-surface hover:bg-green-strong'
                    }`}
                  >
                    {downloadedId === previewTemplate.id ? (
                      <>
                        <CheckIcon className="h-4 w-4" />
                        <span>Template Export Ready!</span>
                      </>
                    ) : (
                      <>
                        <DownloadIcon className="h-4 w-4" />
                        <span>Download Template ({previewTemplate.fileType.split(' ')[0]})</span>
                      </>
                    )}
                  </button>
                  <Button
                    to="/free-trial"
                    variant="outline"
                    size="md"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Try In Free Trial</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. FAQ */}
      <section className="py-14 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionTitle eyebrow="FAQ" align="center" className="text-xl sm:text-2xl">Frequently Asked Questions</SectionTitle>
          <FAQ items={FAQ_ITEMS} />
        </Container>
      </section>

      {/* 5. Call to Action */}
      <CTA
        title="Ready to Deploy These Templates With ZUZU?"
        description="Try any of these report and dashboard templates across your team with a 7-day free trial."
        primaryAction={{ label: 'Start 7-Day Free Trial', href: '/free-trial' }}
        secondaryAction={{ label: 'Schedule Demo', href: '/company/contact' }}
      />
    </>
  )
}
