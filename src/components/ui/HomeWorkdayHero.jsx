import { Link } from 'react-router-dom'
import {
  ClockIcon,
  ActivityIcon,
  CameraIcon,
  FileTextIcon,
  DownloadIcon,
} from './icons'
import Reveal from '../motion/Reveal'
import { StaggerItem } from '../motion/Stagger'
import Typewriter from '../motion/Typewriter'
import TypewriterHeading from '../motion/TypewriterHeading'
import ProductReveal from '../motion/ProductReveal'
import { seq } from '../motion/seq'
import EyebrowBadge from './EyebrowBadge'
import Button from './Button'
import useTiltParallax from '../../hooks/useTiltParallax'

// Restrained ambient dots scattered around the 3D product scene (see
// styles/hero-3d.css .hero-3d-particle). Positions are percentages of the
// ProductReveal root, so they sit around the dashboard/badges rather than
// on top of them. Hidden below `sm` along with the platform/orbit rings.
const HERO_PARTICLES = [
  { id: 'p1', top: '6%', left: '3%', size: 3, dur: '9s', delay: '0s' },
  { id: 'p2', top: '14%', left: '96%', size: 2, dur: '11s', delay: '1.2s' },
  { id: 'p3', top: '50%', left: '0%', size: 2, dur: '10s', delay: '2.4s' },
  { id: 'p4', top: '88%', left: '93%', size: 3, dur: '12s', delay: '0.6s' },
  { id: 'p5', top: '36%', left: '99%', size: 2, dur: '9.5s', delay: '3.2s' },
  { id: 'p6', top: '95%', left: '16%', size: 2, dur: '10.5s', delay: '1.8s' },
]

/*
  Dashboard preview motion (shared system: styles/product-motion.css). The
  window is the `pr-main` container (slot 0); everything inside carries a
  slot via seq(n), so the window reads as progressively coming alive:

    0        window
    1        header / status row
    2 - 4.5  employee cards + KPI cards, interleaved left / right
    5.5, 6.2 floating badges
    6 - 8.9  visual-work-context heading, capture tiles and their data
    9.2      bottom action ribbon

  All figures are static -- only their presentation animates.
*/
export default function HomeWorkdayHero() {
  const sceneRef = useTiltParallax({ maxX: 5, maxY: 4 })

  return (
    <section
      ref={sceneRef}
      className="hero-3d-scene relative overflow-hidden bg-page text-ink pt-10 sm:pt-14 pb-14 sm:pb-20"
    >
      {/* Top ambient radial glow -- dark mode only; a glow bleeding into a
          white light-mode background reads as a smudge, not depth. */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[radial-gradient(ellipse_75%_45%_at_50%_-10%,rgba(89,148,255,0.2),transparent_70%)]"
        aria-hidden="true"
      />
      {/* Subtle bottom fade into the page background */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-page to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Two-column composition from xl (1280px) up: content LEFT (44%), product template RIGHT (56%),
            vertically centred against each other. Below xl it stacks: content first, dashboard after. */}
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] xl:gap-14 2xl:gap-16">
        <div className="min-w-0">
        {/* 1. Eyebrow Badge */}
        <Reveal trigger="mount" delay={0} className="flex justify-center xl:justify-start mb-6 sm:mb-8">
          <EyebrowBadge
            icon={
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
              </span>
            }
          >
            Employee Time Tracking &amp; Activity Management
          </EyebrowBadge>
        </Reveal>

        {/* 2. Main Headline */}
        <div className="text-center xl:text-left max-w-4xl mx-auto xl:mx-0">
          <Reveal as="h1" trigger="mount" delay={100} className="text-3xl sm:text-5xl lg:text-[62px] xl:text-[clamp(2rem,3.3vw,3rem)] font-extrabold tracking-tight text-ink leading-[1.12]">
            Know How Your Team's{' '}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#2A6EEB] via-[#5994FF] to-[#416AB4] bg-clip-text text-transparent dark:drop-shadow-[0_0_35px_rgba(89,148,255,0.3)]">
              <Typewriter words={["Workday Looks.", "Productivity Trends.", "Time Is Spent.", "Focus Unfolds."]} />
            </span>
          </Reveal>

          {/* 3. Subtitles */}
          <Reveal trigger="mount" delay={220} className="mt-5 space-y-2 max-w-3xl mx-auto xl:mx-0 xl:max-w-xl">
            <p className="text-sm sm:text-base font-normal text-muted leading-relaxed">
              Track working hours, monitor activity, capture screenshots, understand productivity, and generate a complete summary of the workday with ZUZU.
            </p>
            <p className="text-xs sm:text-sm font-normal text-faint leading-relaxed max-w-2xl mx-auto xl:mx-0">
              ZUZU connects the employee desktop application with centralized dashboards and reporting tools, giving managers and administrators a clear view of employee work activity.
            </p>
          </Reveal>

          {/* 4. CTA Buttons */}
          <Reveal trigger="mount" delay={320} className="mt-8 sm:mt-9 flex flex-wrap items-center justify-center xl:justify-start gap-4">
            <Button
              to="/windows-agent/download"
              variant="primary"
              size="lg"
              className="btn-landing-shimmer"
              iconLeft={<DownloadIcon className="h-5 w-5" />}
            >
              Download Desktop App
            </Button>
            <Button to="/platform" variant="outline" size="lg" className="btn-landing-shimmer">
              See How ZUZU Works
            </Button>
          </Reveal>
        </div>
        </div>

        {/* 6. Dashboard Preview Card with Overlapping Floating Badges --
            scroll-triggered (not mount) since on shorter viewports this
            sits below the fold at load. */}
        <ProductReveal className="relative mx-auto w-full min-w-0 max-w-5xl pt-6 sm:pt-8 xl:mx-0 xl:max-w-none">
          {/* 3D platform: soft concentric rings + glow behind the dashboard,
              a product-showcase pedestal rather than a gaming one. */}
          <div className="pr-item hero-3d-platform" style={seq(0.5)} aria-hidden="true">
            <span className="hero-3d-platform-ring hero-3d-platform-ring--outer" />
            <span className="hero-3d-platform-ring hero-3d-platform-ring--inner" />
            <span className="hero-3d-platform-glow" />
          </div>

          {/* Thin orbit rings -- near-imperceptibly slow, counter-rotating. */}
          <div className="hero-3d-orbit hero-3d-orbit--a" aria-hidden="true" />
          <div className="hero-3d-orbit hero-3d-orbit--b" aria-hidden="true" />

          {/* Restrained ambient particles */}
          {HERO_PARTICLES.map((particle, i) => (
            <span
              key={particle.id}
              className="hero-3d-particle"
              aria-hidden="true"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: particle.size,
                '--seq': 1 + i * 0.15,
                '--particle-dur': particle.dur,
                '--particle-delay': particle.delay,
              }}
            />
          ))}

          {/* Overlapping Floating Badge 1: Top Left -- the positioning lives
              on the .hero-3d-layer wrapper (cursor tilt) so it stays clear
              of .pr-badge's own float-loop transform on the inner element. */}
          <div
            className="hero-3d-layer relative sm:absolute sm:-top-3 sm:left-6 z-20 mb-3 sm:mb-0"
            style={{ '--tilt-depth': 1.3 }}
          >
            <div
              className="pr-badge inline-flex items-center gap-3 rounded-xl border border-line bg-elevated/95 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
              style={seq(5.5)}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-500">
                <FileTextIcon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-ink leading-tight">Day-End Report Generated</div>
                <div className="text-[11px] font-medium text-success flex items-center gap-1.5 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  <span>08h 00m Logged • 92% Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping Floating Badge 2: Top Right -- its float is phased
              1.2s behind Badge 1 so the two don't drift in lockstep, which
              reads as mechanical rather than ambient. */}
          <div
            className="hero-3d-layer relative sm:absolute sm:-top-3 sm:right-6 z-20 mb-3 sm:mb-0"
            style={{ '--tilt-depth': 1.3 }}
          >
            <div
              className="pr-badge inline-flex items-center gap-3 rounded-xl border border-line bg-elevated/95 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
              style={seq(6.2, { '--pr-float-phase': '1200ms' })}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-500">
                <CameraIcon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-ink leading-tight">5-Min Capture Synced</div>
                <div className="text-[11px] font-medium text-muted mt-0.5">
                  VS Code Window • 24 Captures
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Window -- wrapped in its own .hero-3d-layer so
              the cursor tilt (translate3d) and pr-lift's hover scale each
              own their own element's `transform`, instead of fighting over
              the same property on one node. --pr-scale is overridden here
              (0.94 vs the shared system's 0.97) for a slightly deeper
              "rises into place" entrance on this hero only. */}
          <div className="hero-3d-layer" style={{ '--tilt-depth': 1 }}>
          {/* .hero-3d-float owns the continuous 3D sway (styles/hero-3d.css)
              so it never shares a `transform` with the cursor tilt above
              or with pr-main's entrance / pr-lift's hover scale below. */}
          <div className="hero-3d-float">
          <div
            className="pr-main pr-lift border-beam-container rounded-2xl border border-line bg-elevated/95 backdrop-blur-xl p-4 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.85)] relative transition-all duration-300 hover:shadow-2xl hover:border-line-strong"
            style={{ '--pr-scale': '0.94' }}
          >
            <div className="border-beam" aria-hidden="true" />
            {/* Top Window Bar */}
            <div className="pr-item flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4" style={seq(1)}>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-ink">
                <ClockIcon className="h-4 w-4 text-indigo-500" />
                <span>ZUZU Management Dashboard, Illustrative example, sample data</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-success">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                </span>
                <span>Desktop Client Connected</span>
              </div>
            </div>

            {/* Dashboard 2-Column Grid */}
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column: Today's Employees */}
              <div className="lg:col-span-4 rounded-xl border border-line bg-surface p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-ink">Today's Employees</span>
                    <span className="rounded-full border border-success/30 bg-success/15 px-2 py-0.5 text-[10px] font-bold text-success">
                      18 ACTIVE
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {/* Employee 1 */}
                    <div className="pr-item rounded-lg border border-line bg-elevated p-2.5" style={seq(2)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/people/avatar-john.webp"
                            alt="John Doe, Full Stack Engineer"
                            className="h-7 w-7 rounded-full object-cover ring-1 ring-line"
                            loading="lazy"
                          />
                          <div>
                            <span className="text-xs font-bold text-ink block leading-none">John Doe</span>
                            <span className="text-[10px] font-medium text-indigo-500">Full Stack Engineer</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-medium text-success flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-muted mt-2 pt-1.5 border-t border-line/60">
                        <span>Workday: 08h 00m</span>
                        <span className="text-success font-medium">Active: 07h 20m</span>
                      </div>
                      <div className="text-[10px] text-faint mt-0.5">
                        Idle: 40m • Manager: David Miller
                      </div>
                    </div>

                    {/* Employee 2 */}
                    <div className="pr-item rounded-lg border border-line bg-elevated p-2.5" style={seq(3)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/people/avatar-sarah.webp"
                            alt="Sarah Jenkins, Senior Developer"
                            className="h-7 w-7 rounded-full object-cover ring-1 ring-line"
                            loading="lazy"
                          />
                          <div>
                            <span className="text-xs font-bold text-ink block leading-none">Sarah Jenkins</span>
                            <span className="text-[10px] font-medium text-indigo-500">Senior Developer</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-medium text-success flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-muted mt-2 pt-1.5 border-t border-line/60">
                        <span>Workday: 07h 45m</span>
                        <span className="text-success font-medium">Active: 07h 16m</span>
                      </div>
                      <div className="text-[10px] text-faint mt-0.5">
                        Idle: 29m • Manager: David Miller
                      </div>
                    </div>

                    {/* Employee 3 */}
                    <div className="pr-item rounded-lg border border-line bg-elevated p-2.5" style={seq(4)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/people/avatar-alex.webp"
                            alt="Alex Rivera, UI/UX Designer"
                            className="h-7 w-7 rounded-full object-cover ring-1 ring-line"
                            loading="lazy"
                          />
                          <div>
                            <span className="text-xs font-bold text-ink block leading-none">Alex Rivera</span>
                            <span className="text-[10px] font-medium text-indigo-500">UI/UX Designer</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-medium text-success flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-muted mt-2 pt-1.5 border-t border-line/60">
                        <span>Workday: 06h 20m</span>
                        <span className="text-success font-medium">Active: 05h 40m</span>
                      </div>
                      <div className="text-[10px] text-faint mt-0.5">
                        Idle: 40m • Manager: David Miller
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column Footer */}
                <div className="mt-4 pt-3 border-t border-line">
                  <div className="text-[10px] text-faint uppercase tracking-wider font-medium">
                    Total Organization Workday
                  </div>
                  <div className="pr-item text-sm sm:text-base font-bold text-ink mt-0.5" style={seq(5)}>
                    128 hrs 40 mins
                  </div>
                </div>
              </div>

              {/* Right Column: Stats & Visual Work Context */}
              <div className="lg:col-span-8 flex flex-col justify-between gap-4">
                {/* Top 3 KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="pr-item rounded-xl border border-line bg-surface p-3" style={seq(2.5)}>
                    <span className="text-[11px] font-medium text-faint">Working Time</span>
                    <div className="pr-item text-base sm:text-lg font-bold text-ink mt-0.5" style={seq(3.3)}>08h 00m</div>
                    <span className="text-[10px] text-faint block mt-0.5">
                      Start: 09:30 AM • End: 05:30 PM
                    </span>
                  </div>

                  <div className="pr-item rounded-xl border border-line bg-surface p-3" style={seq(3.5)}>
                    <span className="text-[11px] font-medium text-faint">Active vs. Idle Time</span>
                    <div className="pr-item text-base sm:text-lg font-bold text-ink mt-0.5" style={seq(4.3)}>
                      07h 20m{' '}
                      <span className="text-xs font-normal text-warning">(Idle 40m)</span>
                    </div>
                    <span className="text-[10px] font-semibold text-success block mt-0.5">
                      92% Activity Ratio
                    </span>
                  </div>

                  <div className="pr-item rounded-xl border border-line bg-surface p-3" style={seq(4.5)}>
                    <span className="text-[11px] font-medium text-faint">Productivity</span>
                    <div className="pr-item text-base sm:text-lg font-bold text-indigo-500 mt-0.5" style={seq(5.3)}>
                      High Focus
                    </div>
                    <span className="text-[10px] text-faint block mt-0.5">
                      Day-End Report Prepared
                    </span>
                  </div>
                </div>

                {/* Middle: Visual Work Context (Desktop App Periodic Captures) */}
                <div>
                  <div className="pr-item flex items-center gap-1.5 text-xs font-semibold text-ink mb-2.5" style={seq(6)}>
                    <CameraIcon className="h-3.5 w-3.5 text-indigo-500" />
                    <span>Visual Work Context (Desktop App Periodic Captures)</span>
                  </div>

                  {/* 3 Visual Captures Grid -- these mimic real desktop-captured
                      screenshots (a code editor, a design tool, a PR), so they
                      intentionally stay fixed-dark regardless of site theme,
                      the same way an embedded product screenshot would. */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Capture 1: VS Code */}
                    <div className="pr-item relative rounded-xl border border-slate-800/80 bg-[#070C18] overflow-hidden flex flex-col justify-between" style={seq(6.5)}>
                      <div className="flex items-center gap-1.5 border-b border-slate-800/70 bg-[#0D1527] px-2.5 py-1.5 text-[10px] font-mono text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                        <span className="truncate">App.tsx, ZUZU</span>
                      </div>
                      <div className="p-2.5 font-mono text-[10px] leading-relaxed text-slate-300 bg-[#050912]">
                        <div className="code-line" style={{ '--i': 0 }}><span className="text-slate-600 mr-1.5">1</span><span className="text-purple-400">const</span> report =</div>
                        <div className="code-line" style={{ '--i': 1 }}><span className="text-slate-600 mr-1.5">2</span>  <span className="text-blue-400">generateDayEndReport</span>();</div>
                        <div className="code-line" style={{ '--i': 2 }}><span className="text-slate-600 mr-1.5">3</span>  <span className="text-emerald-500/80">// 08h 00m Total Workday</span></div>
                        <div className="code-line" style={{ '--i': 3 }}><span className="text-slate-600 mr-1.5">4</span><span className="text-purple-400">return</span> report.<span className="text-amber-300">summary</span>;</div>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-800/70 bg-[#0D1527] px-2.5 py-1 text-[9px]">
                        <span className="text-slate-400">10:45 AM • VS Code</span>
                        <span className="font-semibold text-emerald-400">94% Active</span>
                      </div>
                      <div className="capture-scan" aria-hidden="true" />
                    </div>

                    {/* Capture 2: Figma */}
                    <div className="pr-item relative rounded-xl border border-slate-800/80 bg-[#070C18] overflow-hidden flex flex-col justify-between" style={seq(7.2)}>
                      <div className="flex items-center gap-1.5 border-b border-slate-800/70 bg-[#0D1527] px-2.5 py-1.5 text-[10px] font-mono text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                        <span className="truncate">ZUZU Day-End UI</span>
                      </div>
                      <div className="p-2.5 bg-[#050912] h-[82px] flex flex-col justify-center items-center">
                        <div className="w-full space-y-1.5">
                          <div className="pr-bar h-2 w-3/4 bg-slate-700/60 rounded" style={seq(8)} />
                          <div className="flex gap-1.5 items-center">
                            <div className="pr-bar h-4 w-12 bg-indigo-500/80 rounded" style={seq(8.3)} />
                            <div className="pr-bar h-4 flex-1 bg-slate-800/90 rounded border border-slate-700/50" style={seq(8.6)} />
                          </div>
                          <div className="pr-bar h-2 w-1/2 bg-slate-700/40 rounded" style={seq(8.9)} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-800/70 bg-[#0D1527] px-2.5 py-1 text-[9px]">
                        <span className="text-slate-400">10:00 AM • Figma</span>
                        <span className="font-semibold text-emerald-400">91% Active</span>
                      </div>
                      <div className="capture-scan" aria-hidden="true" />
                    </div>

                    {/* Capture 3: GitHub */}
                    <div className="pr-item relative rounded-xl border border-slate-800/80 bg-[#070C18] overflow-hidden flex flex-col justify-between" style={seq(7.9)}>
                      <div className="flex items-center gap-1.5 border-b border-slate-800/70 bg-[#0D1527] px-2.5 py-1.5 text-[10px] font-mono text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span className="truncate">GitHub: Workday #108</span>
                      </div>
                      <div className="p-2.5 bg-[#050912] h-[82px] flex flex-col justify-center">
                        <div className="rounded border border-slate-800 bg-[#0B1324] p-1.5">
                          <div className="text-[9px] font-semibold text-white truncate">PR #108: Day-End Report</div>
                          <div className="text-[8px] text-slate-400 mt-0.5 truncate">consolidated telemetry sync</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-800/70 bg-[#0D1527] px-2.5 py-1 text-[9px]">
                        <span className="text-slate-400">09:30 AM • Chrome</span>
                        <span className="font-semibold text-emerald-400">96% Active</span>
                      </div>
                      <div className="capture-scan" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Bottom Action Ribbon */}
                <div className="pr-item flex flex-wrap items-center justify-between gap-2 rounded-lg border border-indigo-500/25 bg-indigo-500/5 px-3.5 py-2.5 text-xs" style={seq(9.2)}>
                  <div className="flex items-center gap-2 text-ink font-medium">
                    <span className="check-pop text-success font-bold text-sm">✓</span>
                    <span>Complete Day-End Report is ready for download &amp; review</span>
                  </div>
                  <Link
                    to="/product/ai-reports"
                    className="group font-semibold text-indigo-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
                  >
                    <span>Open Day-End Report</span>
                    <span aria-hidden="true" className="transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </ProductReveal>
        </div>

        {/* 5. 4 Horizontal Feature Cards */}
        <div className="mt-12 sm:mt-14 xl:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto xl:max-w-none">
          {/* Card 1: Time Tracking */}
          <StaggerItem index={0} step={60} trigger="mount" className="h-full">
            <div className="hero-3d-layer h-full" style={{ '--tilt-depth': 0.35 }}>
            <div className="pr-card group flex h-full items-start gap-3 rounded-xl card-glass p-3.5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:scale-105">
                <ClockIcon className="h-5 w-5" />
              </div>
              <div>
                <TypewriterHeading as="h2" className="text-sm font-semibold text-ink">Time Tracking</TypewriterHeading>
                <p className="mt-0.5 text-xs text-muted leading-snug">
                  Track employee working sessions.
                </p>
              </div>
            </div>
            </div>
          </StaggerItem>

          {/* Card 2: Activity Monitoring */}
          <StaggerItem index={1} step={60} trigger="mount" className="h-full">
            <div className="hero-3d-layer h-full" style={{ '--tilt-depth': 0.45 }}>
            <div className="pr-card group flex h-full items-start gap-3 rounded-xl card-glass p-3.5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-teal-500/20 bg-teal-500/10 text-teal-500 transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:scale-105">
                <ActivityIcon className="h-5 w-5" />
              </div>
              <div>
                <TypewriterHeading as="h2" className="text-sm font-semibold text-ink">Activity Monitoring</TypewriterHeading>
                <p className="mt-0.5 text-xs text-muted leading-snug">
                  Understand activity throughout the workday.
                </p>
              </div>
            </div>
            </div>
          </StaggerItem>

          {/* Card 3: Screenshots */}
          <StaggerItem index={2} step={60} trigger="mount" className="h-full">
            <div className="hero-3d-layer h-full" style={{ '--tilt-depth': 0.4 }}>
            <div className="pr-card group flex h-full items-start gap-3 rounded-xl card-glass p-3.5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:scale-105">
                <CameraIcon className="h-5 w-5" />
              </div>
              <div>
                <TypewriterHeading as="h2" className="text-sm font-semibold text-ink">Screenshots</TypewriterHeading>
                <p className="mt-0.5 text-xs text-muted leading-snug">
                  Capture visual work activity through the desktop application.
                </p>
              </div>
            </div>
            </div>
          </StaggerItem>

          {/* Card 4: Day-End Reports */}
          <StaggerItem index={3} step={60} trigger="mount" className="h-full">
            <div className="hero-3d-layer h-full" style={{ '--tilt-depth': 0.5 }}>
            <div className="pr-card group flex h-full items-start gap-3 rounded-xl card-glass p-3.5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:scale-105">
                <FileTextIcon className="h-5 w-5" />
              </div>
              <div>
                <TypewriterHeading as="h2" className="text-sm font-semibold text-ink">Day-End Reports</TypewriterHeading>
                <p className="mt-0.5 text-xs text-muted leading-snug">
                  Get a complete summary of the employee's workday.
                </p>
              </div>
            </div>
            </div>
          </StaggerItem>
        </div>

      </div>
    </section>
  )
}
