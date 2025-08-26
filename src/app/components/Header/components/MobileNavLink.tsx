import type { ReactNodeT } from '@/types'

import Link from 'next/link'
import { PopoverButton } from '@/components'

type PropsT = {
  href: string
  children: ReactNodeT
}

export const MobileNavLink = (props: PropsT) => {
  const { href, children } = props

  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}
