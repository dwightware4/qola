import type { NavItemsT } from './config'
import { NavLink } from './NavLink'

type PropsT = {
  navItems: NavItemsT
  title?: string
}

export const NavSection = (props: PropsT) => {
  const { navItems, title } = props

  return (
    <li>
      {title && <div className="text-xs/6 font-semibold dark:text-white">{title}</div>}

      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {navItems.map(item => (
          <li key={item.name}>
            <NavLink href={item.href}>
              {item.icon && (
                <>
                  <item.icon aria-hidden="true" className="size-6 shrink-0" />
                  {item.name}
                </>
              )}

              {!item.icon && (
                <>
                  <span className="border-accent-700 bg-accent-800 flex size-6 shrink-0 items-center justify-center rounded-lg border font-medium text-white">
                    {item.name[0].toUpperCase()}
                  </span>

                  <span className="truncate">{item.name}</span>
                </>
              )}
            </NavLink>

          </li>
        ))}
      </ul>
    </li>
  )
}
