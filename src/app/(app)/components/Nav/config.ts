import type { ComponentTypeT, SVGPropsT, SVGSVGElementT } from '@/types'
import { COMPANY_INFO_ROUTE, GAP_ANALYSIS_ROUTE, ICP_ROUTE, LP_ANALYSIS_ROUTE, OFFER_BLUEPRINT_ROUTE } from '@/core'
import { ChartBarIcon, DocumentMagnifyingGlassIcon, IdentificationIcon, MapIcon, UserIcon } from '@/icons'

type NavItemT = {
  name: string
  href: string
  icon?: ComponentTypeT<SVGPropsT<SVGSVGElementT>>
}
export type NavItemsT = NavItemT[]

export const NAV_ITEMS: NavItemsT = [
  { name: 'Company Info', href: COMPANY_INFO_ROUTE, icon: IdentificationIcon },
  { name: 'Offer Blueprint', href: OFFER_BLUEPRINT_ROUTE, icon: MapIcon },
  { name: 'Ideal Customer Profile', href: ICP_ROUTE, icon: UserIcon },
  { name: 'Landing Page Insights', href: LP_ANALYSIS_ROUTE, icon: ChartBarIcon },
  { name: 'Validation Gap Analysis', href: GAP_ANALYSIS_ROUTE, icon: DocumentMagnifyingGlassIcon },
]
