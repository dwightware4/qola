import type { ComponentTypeT, SVGPropsT, SVGSVGElementT } from '@/types'
import { BookOpenIcon, WrenchScrewdriverIcon } from '@/icons'

type NavItemT = {
  name: string
  href: string
  icon?: ComponentTypeT<SVGPropsT<SVGSVGElementT>>
}
export type NavItemsT = NavItemT[]

export const NAV_ITEMS: NavItemsT = [
  { name: 'Project', href: '/project', icon: WrenchScrewdriverIcon },
  { name: 'Spec Book', href: '/specbook', icon: BookOpenIcon },
]
