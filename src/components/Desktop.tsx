import type { ReactNodeT } from '@/types'
import { cn } from '@/utils'

type PropsT = {
  children: ReactNodeT
  as?: 'div'
  className?: string
}

export const Desktop = (props: PropsT) => {
  const { children, className, as: Tag = 'div' } = props

  return <Tag className={cn('hidden', 'md:flex', className)}>{children}</Tag>
}
