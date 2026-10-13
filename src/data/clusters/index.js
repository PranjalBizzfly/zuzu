import { platformCluster } from './platform'
import { timeAttendanceCluster } from './timeAttendance'
import { activityCluster } from './activity'
import { screenshotPrivacyCluster } from './screenshotPrivacy'
import { aiAnalyticsCluster } from './aiAnalytics'
import { managerWorkspaceCluster } from './managerWorkspace'
import { adminSecurityCluster } from './adminSecurity'
import { reportsCluster } from './reports'
import { remoteWorkforceCluster } from './remoteWorkforce'
import { useCasesCluster } from './useCases'
import { rolesCluster } from './roles'
import { windowsAgentCluster } from './windowsAgent'
import { installationCluster } from './installation'
import { learningCluster } from './learning'
import { itSoftwareCluster } from './itSoftware'
import { accountingFinanceCluster } from './accountingFinance'
import { marketingAgenciesCluster } from './marketingAgencies'
import { bpoCallCentersCluster } from './bpoCallCenters'
import { consultingServicesCluster } from './consultingServices'
import { startupTeamsCluster } from './startupTeams'
import { businessSizeCluster } from './businessSize'
import { hrPeopleOpsCluster } from './hrPeopleOps'
import { engineeringProjectTeamsCluster } from './engineeringProjectTeams'
import { businessOwnerInsightsCluster } from './businessOwnerInsights'
import { productivityCluster } from './productivity'
import { workforceInsightsCluster } from './workforceInsights'

/*
  Single source of truth for "every content cluster on the site" -- App.jsx
  (route table) and SitemapPage.jsx (the human-readable /resources/sitemap
  directory) both import CLUSTERS from here instead of each hand-listing
  the same 26 files, so the two can never drift out of sync.
*/
export const CLUSTERS = [
  platformCluster,
  timeAttendanceCluster,
  activityCluster,
  screenshotPrivacyCluster,
  aiAnalyticsCluster,
  managerWorkspaceCluster,
  adminSecurityCluster,
  reportsCluster,
  remoteWorkforceCluster,
  useCasesCluster,
  rolesCluster,
  windowsAgentCluster,
  installationCluster,
  learningCluster,
  itSoftwareCluster,
  accountingFinanceCluster,
  marketingAgenciesCluster,
  bpoCallCentersCluster,
  consultingServicesCluster,
  startupTeamsCluster,
  businessSizeCluster,
  hrPeopleOpsCluster,
  engineeringProjectTeamsCluster,
  businessOwnerInsightsCluster,
  productivityCluster,
  workforceInsightsCluster,
]
