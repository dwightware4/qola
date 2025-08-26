import { NAV_ITEMS } from './config'
import { NavFooter } from './NavFooter'
import { NavSection } from './NavSection'

export const Nav = () => (
  <nav className="flex flex-1 flex-col">
    <ul role="list" className="flex flex-1 flex-col gap-y-7">
      <NavSection navItems={NAV_ITEMS} />

      <NavFooter />
    </ul>
  </nav>
)
