import { FEATURE_LIBRARY } from './productPages'

/*
  Generic helpers shared by every content cluster (src/data/clusters/*).
  A "cluster" is { key, basePath, badgeLabel, hubTitle, hubDescription,
  hubMetaDescription, groups: [{key,label}], pages: [...] }. Adding a
  new cluster means adding one data file, not new page logic.
*/

export function findPage(cluster, slug) {
  return cluster.pages.find((page) => page.slug === slug)
}

export function getResolvedFeatures(page) {
  return page.features.map((key) => FEATURE_LIBRARY[key])
}

export function getRelatedPages(cluster, page) {
  return page.related.map((slug) => findPage(cluster, slug)).filter(Boolean)
}

export function getPagesByGroup(cluster, groupKey) {
  return cluster.pages.filter((page) => page.cluster === groupKey)
}
