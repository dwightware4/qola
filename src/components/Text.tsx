import type { ColorsT, FontSizesT, FontWeightsT, ReactNodeT } from '@/types'
import { cn } from '@/utils'

const COLORS = {
  main: 'text-main-500 dark:text-white',
  accent: 'text-accent-500',
  white: 'text-white',
  base: '',
}

type TextElementsT = 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'div'

type PropsT = {
  children: ReactNodeT
  className?: string
  size?: FontSizesT
  weight?: FontWeightsT
  color?: ColorsT
  as?: TextElementsT
}

export const Text = (props: PropsT) => {
  const { children, as: Tag = 'p', className, size = 'base', weight, color = 'main' } = props

  return (
    <Tag
      className={cn(
        'text-pretty',
        weight && `font-${weight}`,
        COLORS[color],
        `text-${size}`,
        className,
      )}
    >
      {children}
    </Tag>
  )
}
