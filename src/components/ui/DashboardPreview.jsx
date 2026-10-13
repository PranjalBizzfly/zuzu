/*
  Enterprise-grade SaaS product and dashboard mockups for ZUZU.
  Renders either a real image screenshot if `src` is provided, or a
  dedicated, polished ZUZU UI demonstration mockup (analytics, activity,
  attendance, ai, privacy, manager, admin, windows).

  Motion: the card is a ProductReveal main container. Its header, cards and
  panels are staggered from the mockup's own structure (`pr-mock`, see
  styles/product-motion.css); the few chart bars opt in explicitly with
  `pr-col` / `pr-bar`. All values shown are static -- only their
  presentation animates.
*/
import ProductReveal from '../motion/ProductReveal'
import { seq } from '../motion/seq'

function AnalyticsMockup() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 text-ink">
      {/* Top filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-green animate-pulse" />
          <span className="text-xs font-semibold text-green uppercase tracking-wider">Live System Telemetry</span>
          <span className="text-xs text-muted">· All Teams</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md border border-line bg-elevated px-2.5 py-1 text-xs font-medium text-muted">
            Last 7 Days
          </span>
          <span className="rounded-md bg-green/10 text-green px-2.5 py-1 text-xs font-medium">
            All Devices Synced
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-line bg-elevated p-3">
          <span className="text-[11px] font-medium text-muted">Total Active Time</span>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-bold text-ink">1,428h</span>
            <span className="text-[11px] font-semibold text-green">+4.2%</span>
          </div>
          <span className="text-[10px] text-muted">Across 46 devices</span>
        </div>

        <div className="rounded-xl border border-line bg-elevated p-3">
          <span className="text-[11px] font-medium text-muted">Productivity Rate</span>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-bold text-ink">88.4%</span>
            <span className="text-[11px] font-semibold text-green">Optimal</span>
          </div>
          <span className="text-[10px] text-muted">High focus index</span>
        </div>

        <div className="rounded-xl border border-line bg-elevated p-3">
          <span className="text-[11px] font-medium text-muted">Attendance Rate</span>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-bold text-ink">97.8%</span>
            <span className="text-[11px] font-semibold text-green">On Track</span>
          </div>
          <span className="text-[10px] text-muted">45 present today</span>
        </div>

        <div className="rounded-xl border border-line bg-elevated p-3">
          <span className="text-[11px] font-medium text-muted">AI Insights</span>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-bold text-ink">12</span>
            <span className="text-[11px] font-semibold text-green">Generated</span>
          </div>
          <span className="text-[10px] text-muted">Weekly digest ready</span>
        </div>
      </div>

      {/* Charts & Application breakdown */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Weekly Productivity Trend Bar Chart */}
        <div className="sm:col-span-2 rounded-xl border border-line bg-elevated p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-ink">Weekly Productive vs Idle Distribution</span>
            <div className="flex items-center gap-3 text-[11px] text-muted">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green" /> Productive</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-line-strong" /> Neutral/Idle</span>
            </div>
          </div>
          <div className="flex h-32 items-end justify-between gap-2 pt-4 px-2">
            {[
              { day: 'Mon', p: 88, n: 12 },
              { day: 'Tue', p: 92, n: 8 },
              { day: 'Wed', p: 85, n: 15 },
              { day: 'Thu', p: 94, n: 6 },
              { day: 'Fri', p: 82, n: 18 },
              { day: 'Sat', p: 45, n: 55 },
            ].map((col, i) => (
              <div key={col.day} className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end">
                <div className="pr-col w-full max-w-[28px] flex flex-col gap-0.5 rounded overflow-hidden" style={seq(4 + i * 0.4)}>
                  <div className="w-full bg-line-strong rounded-t" style={{ height: `${col.n * 0.7}px` }} />
                  <div className="w-full bg-green rounded-b" style={{ height: `${col.p * 0.9}px` }} />
                </div>
                <span className="text-[10px] font-medium text-muted">{col.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Share */}
        <div className="rounded-xl border border-line bg-elevated p-4 flex flex-col justify-between">
          <span className="text-xs font-semibold text-ink">Top Productive Applications</span>
          <div className="flex flex-col gap-2.5 my-2">
            {[
              { name: 'VS Code', pct: '38%', bar: 'w-[38%]', color: 'bg-green' },
              { name: 'Figma', pct: '26%', bar: 'w-[26%]', color: 'bg-green' },
              { name: 'Chat app', pct: '18%', bar: 'w-[18%]', color: 'bg-blue-400' },
              { name: 'Documentation', pct: '12%', bar: 'w-[12%]', color: 'bg-muted' },
            ].map((app, i) => (
              <div key={app.name} className="flex flex-col gap-1">
                <div className="flex justify-between text-[11px]">
                  <span className="font-medium text-ink">{app.name}</span>
                  <span className="text-muted">{app.pct}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-overlay">
                  <div className={`pr-bar h-full rounded-full ${app.bar} ${app.color}`} style={seq(4.5 + i * 0.4)} />
                </div>
              </div>
            ))}
          </div>
          <span className="text-[10px] text-muted">Auto-classified via ZUZU engine</span>
        </div>
      </div>
    </div>
  )
}

function ActivityMockup() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 text-ink">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div>
          <span className="text-xs font-semibold text-ink">Employee Activity Log</span>
          <span className="text-xs text-muted block">Live timeline and application engagement tracking</span>
        </div>
        <span className="rounded-md bg-green/10 text-green px-2.5 py-1 text-xs font-semibold">Active Now</span>
      </div>

      {/* Timeline Bar */}
      <div className="rounded-xl border border-line bg-elevated p-3">
        <div className="flex justify-between text-[11px] text-muted mb-2">
          <span>09:00 AM</span>
          <span>11:00 AM</span>
          <span>01:00 PM</span>
          <span>03:00 PM</span>
          <span>05:00 PM</span>
        </div>
        <div className="flex h-6 w-full gap-0.5 rounded-lg overflow-hidden p-0.5 bg-overlay">
          <div className="pr-bar w-[20%] bg-green rounded-l" style={seq(2.6)} title="Productive Deep Work" />
          <div className="pr-bar w-[15%] bg-green" style={seq(2.95)} title="Productive" />
          <div className="pr-bar w-[10%] bg-blue-400" style={seq(3.3)} title="Team Sync" />
          <div className="pr-bar w-[12%] bg-overlay" style={seq(3.65)} title="Break" />
          <div className="pr-bar w-[25%] bg-green" style={seq(4)} title="Development" />
          <div className="pr-bar w-[18%] bg-green rounded-r" style={seq(4.35)} title="Testing & Review" />
        </div>
      </div>

      {/* Activity Table */}
      <div className="rounded-xl border border-line bg-elevated overflow-hidden text-xs">
        <div className="grid grid-cols-4 border-b border-line bg-surface p-2.5 font-semibold text-muted">
          <span>Application</span>
          <span>Category</span>
          <span>Duration</span>
          <span className="text-right">Engagement</span>
        </div>
        {[
          { app: 'Visual Studio Code', cat: 'Development', dur: '2h 14m', eng: '94% Active', color: 'text-green' },
          { app: 'Figma Design System', cat: 'Product Design', dur: '1h 35m', eng: '91% Active', color: 'text-green' },
          { app: 'Team Workspace & Chat', cat: 'Collaboration', dur: '42m', eng: '86% Active', color: 'text-blue-400' },
          { app: 'Chrome, Technical Docs', cat: 'Research', dur: '38m', eng: '89% Active', color: 'text-green' },
        ].map((item, idx) => (
          <div key={idx} className="grid grid-cols-4 p-2.5 border-b border-line last:border-0 items-center">
            <span className="font-medium text-ink">{item.app}</span>
            <span className="text-muted">{item.cat}</span>
            <span className="text-muted">{item.dur}</span>
            <span className={`text-right font-semibold ${item.color}`}>{item.eng}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AttendanceMockup() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 text-ink">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div>
          <span className="text-xs font-semibold text-ink">Time & Attendance System</span>
          <span className="text-xs text-muted block">Automated shift detection and verified hours</span>
        </div>
        <span className="rounded-md border border-line bg-elevated px-2.5 py-1 text-xs font-medium">Standard Shift 09:00 - 18:00</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-line bg-elevated p-3">
          <span className="text-[11px] text-muted">First Activity</span>
          <div className="text-base font-bold text-green mt-1">08:58 AM</div>
          <span className="text-[10px] text-muted">On-Time punch</span>
        </div>
        <div className="rounded-xl border border-line bg-elevated p-3">
          <span className="text-[11px] text-muted">Total Hours Logged</span>
          <div className="text-base font-bold text-ink mt-1">8h 12m</div>
          <span className="text-[10px] text-muted">Today's shift</span>
        </div>
        <div className="rounded-xl border border-line bg-elevated p-3">
          <span className="text-[11px] text-muted">Weekly Total</span>
          <div className="text-base font-bold text-ink mt-1">40.8 hrs</div>
          <span className="text-[10px] text-green font-semibold">Example data</span>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-elevated overflow-hidden text-xs">
        <div className="grid grid-cols-4 border-b border-line bg-surface p-2.5 font-semibold text-muted">
          <span>Day</span>
          <span>Clock In</span>
          <span>Clock Out</span>
          <span className="text-right">Total Hours</span>
        </div>
        {[
          { day: 'Monday', in: '08:58 AM', out: '06:05 PM', hrs: '8h 15m' },
          { day: 'Tuesday', in: '09:02 AM', out: '06:10 PM', hrs: '8h 10m' },
          { day: 'Wednesday', in: '08:55 AM', out: '06:00 PM', hrs: '8h 20m' },
          { day: 'Thursday', in: '09:00 AM', out: '06:02 PM', hrs: '8h 05m' },
        ].map((row) => (
          <div key={row.day} className="grid grid-cols-4 p-2.5 border-b border-line last:border-0">
            <span className="font-medium text-ink">{row.day}</span>
            <span className="text-muted">{row.in}</span>
            <span className="text-muted">{row.out}</span>
            <span className="text-right font-semibold text-green">{row.hrs}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AiReportsMockup() {
  return (
    <div className="flex flex-col gap-3.5 p-4 sm:p-5 text-ink">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-green/10 text-green font-bold text-xs">
            AI
          </div>
          <div>
            <span className="text-xs font-semibold text-ink">ZUZU AI Executive Report</span>
            <span className="text-[11px] text-muted block">Automated weekly digest for managers</span>
          </div>
        </div>
        <span className="rounded-md bg-green/10 text-green border border-green/30 px-2.5 py-1 text-[11px] font-semibold">
          Export PDF
        </span>
      </div>

      {/* Embedded Real Human Image and Synthesis */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
        <div className="sm:col-span-5 relative min-h-[130px] rounded-xl overflow-hidden border border-line bg-elevated shadow-sm">
          <img
            src="/images/people/zuzu-analyst-working.webp?v=2"
            alt="Workforce data analyst analyzing AI executive report"
            className="h-full w-full object-cover object-[50%_20%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A13]/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 rounded-md bg-[#060A13]/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
              <span>Data Analyst</span>
            </div>
            <span className="text-[9px] text-slate-300 font-medium bg-black/40 px-1.5 py-0.5 rounded">Verified AI</span>
          </div>
        </div>

        <div className="sm:col-span-7 rounded-xl border border-line bg-elevated p-3 flex flex-col justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green" />
              <span className="text-[11px] font-bold text-ink uppercase tracking-wide">Key Synthesis & Trends</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mt-1">
              High-focus engineering blocks concentrated in the morning, tapering off after hours.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line">
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="text-[9px] font-semibold text-green uppercase block">Peak Window</span>
              <span className="text-xs font-semibold text-ink">10:00 AM – 12:45 PM</span>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="text-[9px] font-semibold text-green uppercase block">Top Tool</span>
              <span className="text-xs font-semibold text-ink truncate block">Example application</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-elevated px-3 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-muted text-[11px]">Anomaly check: no unusual after-hours activity flagged.</span>
        </div>
        <span className="font-semibold text-green text-[11px]">Nothing Flagged</span>
      </div>
    </div>
  )
}

function PrivacyMockup() {
  return (
    <div className="flex flex-col gap-3.5 p-4 sm:p-5 text-ink">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-blue-400/10 text-blue-400 px-2 py-0.5 text-xs font-semibold">Privacy Shield</span>
          <span className="text-xs font-semibold text-ink">On-Device Screenshot Redaction</span>
        </div>
        <span className="text-xs font-semibold text-green">Active & Enforced</span>
      </div>

      {/* Simulated Screen with Real Human Employee and Redaction */}
      <div className="relative rounded-xl border border-line bg-surface p-3 sm:p-4 overflow-hidden">
        <div className="flex items-center justify-between border-b border-line pb-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-danger/50" />
              <span className="h-2 w-2 rounded-full bg-warning/50" />
              <span className="h-2 w-2 rounded-full bg-success/50" />
            </div>
            <span className="text-[11px] text-muted font-medium ml-1">Employee Screen Capture (Sample)</span>
          </div>
          <span className="text-[10px] text-muted">Interval: Every 10 min</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 min-h-[130px]">
          {/* Left: Real Human Employee focused at workstation */}
          <div className="sm:col-span-6 relative rounded-lg border border-line overflow-hidden bg-elevated min-h-[110px]">
            <img
              src="/images/workforce/zuzu-developer-focused.webp?v=2"
              alt="Indian software developer engaged in deep work at dual-monitor workstation in ZUZU privacy preview"
              className="h-full w-full object-cover object-[75%_35%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060A13]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded bg-[#060A13]/80 px-2 py-0.5 text-[10px] font-medium text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
              <span>Active Workstation</span>
            </div>
          </div>

          {/* Right: Personal Region Redacted box */}
          <div className="sm:col-span-6 relative rounded-lg border border-blue-400/40 bg-blue-500/10 p-3 flex flex-col items-center justify-center text-center backdrop-blur-sm">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-400/20 text-blue-400 mb-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-blue-400">Personal Region Redacted</span>
            <span className="text-[10px] text-muted mt-0.5">Masked on device before upload</span>
            <span className="mt-2 rounded-full bg-blue-400/20 px-2 py-0.5 text-[9px] font-semibold text-blue-400">
              Zero PII Transmitted
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-xl border border-line bg-elevated p-2.5">
          <span className="text-muted block text-[11px]">Private Regions</span>
          <span className="font-semibold text-ink">Redacted on Device</span>
        </div>
        <div className="rounded-xl border border-line bg-elevated p-2.5">
          <span className="text-muted block text-[11px]">Retention Control</span>
          <span className="font-semibold text-ink">Auto-purge on custom window</span>
        </div>
      </div>
    </div>
  )
}

function ManagerMockup() {
  return (
    <div className="flex flex-col gap-3.5 p-4 sm:p-5 text-ink">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400 font-bold text-xs">
            M
          </div>
          <div>
            <span className="text-xs font-semibold text-ink">Manager Workspace, Core Team</span>
            <span className="text-[11px] text-muted block">Real-time team presence, active focus, and 1-on-1s</span>
          </div>
        </div>
        <span className="rounded-md bg-green/10 text-green border border-green/30 px-2.5 py-1 text-[11px] font-semibold">
          8 of 8 Online
        </span>
      </div>

      {/* Embedded Real Human Image and Team Telemetry */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
        <div className="sm:col-span-5 relative min-h-[130px] rounded-xl overflow-hidden border border-line bg-elevated shadow-sm">
          <img
            src="/images/workforce/zuzu-manager-workspace.webp?v=2"
            alt="Engineering Team Manager reviewing real-time workflow"
            className="h-full w-full object-cover object-[50%_20%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A13]/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 rounded-md bg-[#060A13]/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
              <span>Team Manager</span>
            </div>
            <span className="text-[9px] text-slate-300 font-medium bg-black/40 px-1.5 py-0.5 rounded">Team Scoped</span>
          </div>
        </div>

        <div className="sm:col-span-7 rounded-xl border border-line bg-elevated p-3 flex flex-col justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-400" />
              <span className="text-[11px] font-bold text-ink uppercase tracking-wide">Workload & 1-on-1 Insights</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mt-1">
              Team is actively in flow across core sprint tasks with balanced workload allocation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line">
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="text-[9px] font-semibold text-green uppercase block">Workload Balance</span>
              <span className="text-xs font-semibold text-ink">Optimal (No Drift)</span>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="text-[9px] font-semibold text-green uppercase block">1-on-1 Cadence</span>
              <span className="text-xs font-semibold text-ink truncate block">Example data</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-elevated px-3 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green" />
          <span className="text-muted text-[11px]">Sprint sync: Alex, Elena, David & Sarah actively logging progress.</span>
        </div>
        <span className="font-semibold text-green text-[11px]">All Synced</span>
      </div>
    </div>
  )
}

function RemoteWorkforceMockup() {
  return (
    <div className="flex flex-col gap-3.5 p-4 sm:p-5 text-ink">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 font-bold text-xs">
            R
          </div>
          <div>
            <span className="text-xs font-semibold text-ink">ZUZU Remote & Hybrid Telemetry</span>
            <span className="text-[11px] text-muted block">Distributed asynchronous cadence and coverage</span>
          </div>
        </div>
        <span className="rounded-md bg-green/10 text-green border border-green/30 px-2.5 py-1 text-[11px] font-semibold">
          Global Sync Active
        </span>
      </div>

      {/* Embedded Real Human Image and Remote Telemetry */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
        <div className="sm:col-span-5 relative min-h-[130px] rounded-xl overflow-hidden border border-line bg-elevated shadow-sm">
          <img
            src="/images/workforce/zuzu-remote-workforce.webp"
            alt="Distributed remote workforce professional collaborating"
            className="h-full w-full object-cover object-[50%_20%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A13]/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 rounded-md bg-[#060A13]/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
              <span>Remote Team Lead</span>
            </div>
            <span className="text-[9px] text-slate-300 font-medium bg-black/40 px-1.5 py-0.5 rounded">Async Focus</span>
          </div>
        </div>

        <div className="sm:col-span-7 rounded-xl border border-line bg-elevated p-3 flex flex-col justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-[11px] font-bold text-ink uppercase tracking-wide">Async Overlap & Focus Windows</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mt-1">
              Core overlap hours synchronized across 3 timezones with deep focus protection and offline buffer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line">
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="text-[9px] font-semibold text-green uppercase block">Async Overlap</span>
              <span className="text-xs font-semibold text-ink">5.2 hrs / day</span>
            </div>
            <div className="rounded-lg bg-surface p-2 border border-line">
              <span className="text-[9px] font-semibold text-green uppercase block">Meeting Load</span>
              <span className="text-xs font-semibold text-ink truncate block">1.4 hrs (-18%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-elevated px-3 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-muted text-[11px]">Example: team members working across several time zones.</span>
        </div>
        <span className="font-semibold text-green text-[11px]">Example data</span>
      </div>
    </div>
  )
}

function AdminMockup() {
  return (
    <div className="flex flex-col gap-3.5 p-4 sm:p-5 text-ink">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-green/10 text-green font-bold text-xs">
            A
          </div>
          <div>
            <span className="text-xs font-semibold text-ink">ZUZU Central Admin Portal</span>
            <span className="text-[11px] text-muted block">Organization policies, permissions, and device agents</span>
          </div>
        </div>
        <span className="rounded-md bg-elevated border border-line px-2.5 py-1 text-xs font-semibold text-ink">
          Org: Global Enterprise
        </span>
      </div>

      {/* Embedded Real Human Image and KPI grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
        <div className="sm:col-span-5 relative min-h-[130px] rounded-xl overflow-hidden border border-line bg-elevated shadow-sm">
          <img
            src="/images/workforce/zuzu-admin-governance.webp?v=2"
            alt="Enterprise Systems Administrator managing portal governance"
            className="h-full w-full object-cover object-[50%_25%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A13]/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 rounded-md bg-[#060A13]/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
              <span>Enterprise Admin</span>
            </div>
            <span className="text-[9px] text-slate-300 font-medium bg-black/40 px-1.5 py-0.5 rounded">Super Admin</span>
          </div>
        </div>

        <div className="sm:col-span-7 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-line bg-elevated p-2.5 flex flex-col justify-between">
            <span className="text-[10px] font-medium text-muted">Deployed Agents</span>
            <div className="text-base sm:text-lg font-bold text-ink">142</div>
            <span className="text-[9px] text-green font-semibold">100% Active</span>
          </div>
          <div className="rounded-xl border border-line bg-elevated p-2.5 flex flex-col justify-between">
            <span className="text-[10px] font-medium text-muted">Workspaces</span>
            <div className="text-base sm:text-lg font-bold text-ink">Managers & Teams</div>
            <span className="text-[9px] text-muted">Role-scoped</span>
          </div>
          <div className="rounded-xl border border-line bg-elevated p-2.5 flex flex-col justify-between">
            <span className="text-[10px] font-medium text-muted">Policy State</span>
            <div className="text-base sm:text-lg font-bold text-green">Enforced</div>
            <span className="text-[9px] text-muted">All Active</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-elevated p-3 flex flex-col gap-1.5">
        <span className="text-xs font-semibold text-ink">Deployment & Privacy Governance</span>
        {[
          { label: 'On-Device Private-Region Redaction', state: 'Active' },
          { label: 'Organization-Wide Monitoring Policy', state: 'Active' },
          { label: 'Data Retention Window (90 days default)', state: 'Active' },
        ].map((p, idx) => (
          <div key={idx} className="flex items-center justify-between py-0.5 border-b border-line last:border-0 text-xs">
            <span className="text-muted text-[11px]">{p.label}</span>
            <span className="font-semibold text-green text-[11px]">{p.state}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WindowsAgentMockup() {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 text-ink">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-green/10 text-green font-bold text-xs">
            W
          </div>
          <div>
            <span className="text-xs font-semibold text-ink">ZUZU Agent for Windows</span>
            <span className="text-[11px] text-muted block">Lightweight background desktop client</span>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-green/10 text-green px-2.5 py-1 text-xs font-semibold">
          <span className="h-2 w-2 rounded-full bg-green" /> Connected
        </span>
      </div>

      <div className="rounded-xl border border-line bg-elevated p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-bold text-ink block">Session Active</span>
            <span className="text-xs text-muted">Clocked in at 08:58 AM · Official Shift</span>
          </div>
          <span className="text-xs font-bold text-green">05h 42m Logged</span>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line text-xs">
          <div>
            <span className="text-muted block text-[11px]">Installer Size</span>
            <span className="font-medium text-ink">~80 MB</span>
          </div>
          <div>
            <span className="text-muted block text-[11px]">Runs From</span>
            <span className="font-medium text-green">Windows System Tray</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-elevated p-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-muted">System Tray Integration Active</span>
        </div>
        <span className="text-muted font-medium">Auto-start with Windows</span>
      </div>
    </div>
  )
}

const MOCKUP_COMPONENTS = {
  analytics: AnalyticsMockup,
  activity: ActivityMockup,
  attendance: AttendanceMockup,
  ai: AiReportsMockup,
  privacy: PrivacyMockup,
  manager: ManagerMockup,
  admin: AdminMockup,
  windows: WindowsAgentMockup,
  remote: RemoteWorkforceMockup,
  hybrid: RemoteWorkforceMockup,
}

export default function DashboardPreview({
  src,
  alt = 'ZUZU dashboard preview with sample data',
  type = 'analytics',
  className = '',
}) {
  const Mockup = MOCKUP_COMPONENTS[type] || AnalyticsMockup

  return (
    <ProductReveal
      className={`pr-main pr-lift overflow-hidden rounded-2xl border border-line card-glass shadow-2xl ${className}`}
    >
      {/* Browser window chrome frame */}
      <div className="flex items-center justify-between border-b border-line bg-elevated/70 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
        </div>
        <div className="rounded-md border border-line bg-surface px-4 py-0.5 text-[11px] font-medium text-muted">
          Illustrative example · sample data
        </div>
        <div className="w-8" />
      </div>

      {src ? (
        <img src={src} alt={alt} className="h-auto w-full object-cover" loading="lazy" />
      ) : (
        <div className="pr-mock">
          <Mockup />
        </div>
      )}
    </ProductReveal>
  )
}
