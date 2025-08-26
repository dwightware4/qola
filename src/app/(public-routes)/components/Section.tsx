import type { ReactNodeT } from '@/types'
import { Text } from '@/components'

type PropsT = {
  children: ReactNodeT
  title?: string
}

export const Section = (props: PropsT) => {
  const { title, children } = props

  return (
    <Text as="div" className="mt-10 mb-10">
      {title && <Text weight="extrabold">{title}</Text>}

      <br />

      {children}
    </Text>
  )
}
