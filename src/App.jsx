import { createBrowserRouter, Navigate, RouterProvider, useParams } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ClusterHub from './pages/clusters/ClusterHub'
import ClusterPage from './pages/clusters/ClusterPage'
import { NAV_SECTIONS } from './data/navigation'
import { INDUSTRY_CONTENT } from './data/industryContent'

/*
  Every route below uses React Router's `lazy` field instead of a static
  `element`, so route code (and, for clusters, route DATA) is fetched as
  its own chunk only when that route is actually visited -- with 500+
  content pages' worth of FAQ/intro/benefit text otherwise all landing in
  one eagerly-loaded bundle regardless of which single page a visitor
  requested. `lazy` is awaited by the data router before rendering, so no
  Suspense boundary is needed here (see reactrouter.com/en/main/route/lazy).
*/

// One entry per cluster: basePath is needed synchronously to build the
// route table, but the cluster's actual page data (FAQs, intros, etc.)
// is only fetched via `load()` when a route under that basePath is hit.
const CLUSTER_MANIFEST = [
  { basePath: '/platform', load: () => import('./data/clusters/platform').then((m) => m.platformCluster) },
  { basePath: '/time-attendance', load: () => import('./data/clusters/timeAttendance').then((m) => m.timeAttendanceCluster) },
  { basePath: '/activity', load: () => import('./data/clusters/activity').then((m) => m.activityCluster) },
  { basePath: '/screenshot-privacy', load: () => import('./data/clusters/screenshotPrivacy').then((m) => m.screenshotPrivacyCluster) },
  { basePath: '/ai-analytics', load: () => import('./data/clusters/aiAnalytics').then((m) => m.aiAnalyticsCluster) },
  { basePath: '/manager', load: () => import('./data/clusters/managerWorkspace').then((m) => m.managerWorkspaceCluster) },
  { basePath: '/admin', load: () => import('./data/clusters/adminSecurity').then((m) => m.adminSecurityCluster) },
  { basePath: '/reports', load: () => import('./data/clusters/reports').then((m) => m.reportsCluster) },
  { basePath: '/remote-workforce', load: () => import('./data/clusters/remoteWorkforce').then((m) => m.remoteWorkforceCluster) },
  { basePath: '/use-cases', load: () => import('./data/clusters/useCases').then((m) => m.useCasesCluster) },
  { basePath: '/roles', load: () => import('./data/clusters/roles').then((m) => m.rolesCluster) },
  { basePath: '/windows-agent', load: () => import('./data/clusters/windowsAgent').then((m) => m.windowsAgentCluster) },
  { basePath: '/installation', load: () => import('./data/clusters/installation').then((m) => m.installationCluster) },
  { basePath: '/learning', load: () => import('./data/clusters/learning').then((m) => m.learningCluster) },
  { basePath: '/it-software', load: () => import('./data/clusters/itSoftware').then((m) => m.itSoftwareCluster) },
  { basePath: '/accounting-finance', load: () => import('./data/clusters/accountingFinance').then((m) => m.accountingFinanceCluster) },
  { basePath: '/marketing-agencies', load: () => import('./data/clusters/marketingAgencies').then((m) => m.marketingAgenciesCluster) },
  { basePath: '/bpo-call-centers', load: () => import('./data/clusters/bpoCallCenters').then((m) => m.bpoCallCentersCluster) },
  { basePath: '/consulting-services', load: () => import('./data/clusters/consultingServices').then((m) => m.consultingServicesCluster) },
  { basePath: '/startup-teams', load: () => import('./data/clusters/startupTeams').then((m) => m.startupTeamsCluster) },
  { basePath: '/business-size', load: () => import('./data/clusters/businessSize').then((m) => m.businessSizeCluster) },
  { basePath: '/hr-people-ops', load: () => import('./data/clusters/hrPeopleOps').then((m) => m.hrPeopleOpsCluster) },
  { basePath: '/engineering-project-teams', load: () => import('./data/clusters/engineeringProjectTeams').then((m) => m.engineeringProjectTeamsCluster) },
  { basePath: '/business-owner-insights', load: () => import('./data/clusters/businessOwnerInsights').then((m) => m.businessOwnerInsightsCluster) },
  { basePath: '/productivity', load: () => import('./data/clusters/productivity').then((m) => m.productivityCluster) },
  { basePath: '/workforce-insights', load: () => import('./data/clusters/workforceInsights').then((m) => m.workforceInsightsCluster) },
]

function ClusterPageRoute({ cluster }) {
  const { slug } = useParams()
  return <ClusterPage cluster={cluster} slug={slug} />
}

const clusterRoutes = CLUSTER_MANIFEST.flatMap(({ basePath, load }) => [
  {
    path: basePath,
    lazy: async () => {
      const cluster = await load()
      return { Component: () => <ClusterHub cluster={cluster} /> }
    },
  },
  {
    path: `${basePath}/:slug`,
    lazy: async () => {
      const cluster = await load()
      return { Component: () => <ClusterPageRoute cluster={cluster} /> }
    },
  },
])

// Resources items with a richer dedicated page (Phase 15/16) render
// through it instead of the generic CategoryItem stub -- same URLs
// (/resources/comparisons etc.), improved content.
const RESOURCE_ITEM_LOADERS = {
  comparisons: () => import('./pages/resources/ComparisonsPage'),
  alternatives: () => import('./pages/resources/AlternativesPage'),
  guides: () => import('./pages/resources/GuidesPage'),
  'how-to': () => import('./pages/resources/HowToPage'),
  'knowledge-hub': () => import('./pages/resources/KnowledgeHubPage'),
  faqs: () => import('./pages/resources/FAQHubPage'),
  support: () => import('./pages/resources/SupportHubPage'),
  templates: () => import('./pages/Templates'),
  sitemap: () => import('./pages/resources/SitemapPage'),
}

/*
  Route table kept data-driven on purpose: every mega-menu / footer
  section in src/data/navigation.js automatically gets a hub route
  (/product) and one leaf route per item (/product/:slug), generated
  here instead of hand-written. Later phases that add hundreds of SEO
  pages extend the underlying data, not this file.
*/
// Industries items with an entry in industryContent.js render through
// the richer IndustryPage template instead of the generic CategoryItem
// stub -- same URLs, improved content, per Phase 13.
const sectionRoutes = NAV_SECTIONS.flatMap((section) => [
  {
    path: section.href,
    lazy: async () => {
      if (section.key === 'industries') {
        const mod = await import('./pages/industries/IndustriesHub')
        return { Component: mod.default }
      }
      const mod = await import('./pages/CategoryHub')
      const Component = mod.default
      return { Component: () => <Component sectionKey={section.key} /> }
    },
  },
  ...section.items.map((item) => {
    const resourceLoader = section.key === 'resources' ? RESOURCE_ITEM_LOADERS[item.slug] : null
    return {
      path: `${section.href}/${item.slug}`,
      lazy: async () => {
        if (section.key === 'industries' && INDUSTRY_CONTENT[item.slug]) {
          const mod = await import('./pages/industries/IndustryPage')
          const Component = mod.default
          return { Component: () => <Component slug={item.slug} /> }
        }
        if (resourceLoader) {
          const mod = await resourceLoader()
          return { Component: mod.default }
        }
        const mod = await import('./pages/CategoryItem')
        const Component = mod.default
        return { Component: () => <Component sectionKey={section.key} slug={item.slug} /> }
      },
    }
  }),
])

// One `lazy` entry per hand-written page component -- see the file-level
// comment for why this replaces static `element: <X />` imports.
const staticRoutes = [
  { path: '/', load: () => import('./pages/Home') },
  { path: '/style-guide', load: () => import('./pages/StyleGuide') },
  { path: '/knowledge-base', load: () => import('./pages/KnowledgeBase') },
  { path: '/getting-started', load: () => import('./pages/GettingStarted') },
  { path: '/troubleshooting', load: () => import('./pages/Troubleshooting') },
  { path: '/how-it-works', load: () => import('./pages/how-it-works/HowItWorksHub') },
  { path: '/how-it-works/8-step-workday', load: () => import('./pages/how-it-works/EightStepWorkday') },
  { path: '/how-it-works/desktop-app-workflow', load: () => import('./pages/how-it-works/DesktopAppWorkflow') },
  { path: '/how-it-works/why-zuzu', load: () => import('./pages/how-it-works/WhyZuzu') },
  { path: '/how-it-works/zuzu-advantage', load: () => import('./pages/how-it-works/ZuzuAdvantage') },
  { path: '/dashboard', load: () => import('./pages/dashboard/DashboardHub') },
  { path: '/dashboard/team-at-a-glance', load: () => import('./pages/dashboard/TeamAtAGlance') },
  { path: '/dashboard/manager-dashboard', load: () => import('./pages/dashboard/ManagerDashboard') },
  { path: '/dashboard/super-admin', load: () => import('./pages/dashboard/SuperAdminLayer') },
  { path: '/dashboard/workforce-analytics', load: () => import('./pages/dashboard/WorkforceAnalyticsPage') },
  { path: '/dashboard/employee-profile', load: () => import('./pages/dashboard/EmployeeProfilePage') },
  { path: '/dashboard/admin-portal', load: () => import('./pages/dashboard/AdminPortalPage') },
  { path: '/dashboard/day-end-report', load: () => import('./pages/DayEndReportPage') },
  { path: '/security', load: () => import('./pages/Security') },
  { path: '/pricing', load: () => import('./pages/Pricing') },
  { path: '/templates', load: () => import('./pages/Templates') },
  { path: '/login', load: () => import('./pages/Login') },
  { path: '/free-trial', load: () => import('./pages/FreeTrial') },
  { path: '/company/about', load: () => import('./pages/company/About') },
  { path: '/company/careers', load: () => import('./pages/company/Careers') },
  { path: '/company/contact', load: () => import('./pages/company/Contact') },
  { path: '/legal/privacy-policy', load: () => import('./pages/legal/PrivacyPolicy') },
  { path: '/legal/terms-of-service', load: () => import('./pages/legal/TermsOfService') },
].map(({ path, load }) => ({
  path,
  lazy: async () => {
    const mod = await load()
    return { Component: mod.default }
  },
}))

// The Day-End Report lives at /dashboard/day-end-report; the old
// top-level URL redirects there so existing links and bookmarks still work.
const legacyRedirectRoutes = [
  { path: '/day-end-report', element: <Navigate to="/dashboard/day-end-report" replace /> },
]

const notFoundRoute = {
  path: '*',
  lazy: async () => {
    const mod = await import('./pages/NotFound')
    return { Component: mod.default }
  },
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [...staticRoutes, ...legacyRedirectRoutes, ...sectionRoutes, ...clusterRoutes, notFoundRoute],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
