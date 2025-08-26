import type { ColorsT, FontSizesT, FontWeightsT, ReactNodeT } from '@/types'

import NextLink from 'next/link'
import { cn } from '@/utils'

const COLORS = {
  main: 'text-main-500 hover: text-main-400',
  accent: 'text-accent-500 hover: text-accent-400',
  white: 'text-white hover:text-white',
  base: '',
}

type PropsT = {
  href: string
  children: ReactNodeT
  color?: ColorsT
  size?: FontSizesT
  weight?: FontWeightsT
}

export const Link = (props: PropsT) => {
  const { children, href, color = 'accent', size = 'base', weight = 'semibold' } = props

  return (
    <NextLink
      className={cn(`text-${size} text-pretty`, weight && `font-${weight}`, COLORS[color])}
      href={href}
    >
      {typeof children === 'string'
        ? (
            <span className="text-accent-500 hover:text-accent-400">{children}</span>
          )
        : (
            children
          )}
    </NextLink>
  )
}
