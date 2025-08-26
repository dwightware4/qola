'use client'

import type { ReactNodeT } from '@/types'
import { usePathname } from '@/hooks'
import { cn } from '@/utils'

type PropsT = {
  children: ReactNodeT
  href: string
  className?: string
}

export const NavLink = (props: PropsT) => {
  const { children, href, className } = props

  const pathname = usePathname()

  const isActive = pathname.startsWith(href)

  return (
    <a
      href={href}
      className={cn(
        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
        isActive
          ? 'bg-accent-500 text-white pointer-events-none'
          : 'hover:bg-accent-400 hover:text-white dark:text-white',
        className,
      )}
    >
      {children}
    </a>
  )
}
