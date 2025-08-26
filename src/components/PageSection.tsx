import type { ReactNodeT } from '@/types'
import { cn } from '@/utils'

type SectionElementsT = 'section' | 'header' | 'footer'

type PropsT = {
  children: ReactNodeT
  className?: string
  fullWidth?: boolean
  as?: SectionElementsT
}

export const PageSection = (props: PropsT) => {
  const { className, as: Tag = 'section', children, fullWidth = false } = props

  return (
    <Tag className={cn('mx-auto px-4 sm:px-6 lg:px-8', fullWidth ? '' : 'max-w-7xl', className)}>
      {children}
    </Tag>
  )
}
