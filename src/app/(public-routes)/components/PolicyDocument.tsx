import type { ReactNodeT } from '@/types'
import { Text } from '@/components'
import { Logo } from '@/core'

type PropsT = {
  children: ReactNodeT
  effectiveDate: string
  title: string
}

export const PolicyDocument = (props: PropsT) => {
  const { children, effectiveDate, title } = props

  return (
    <div className="mx-auto max-w-7xl p-20">
      <Text className="text-center" size="sm">
        Effective Date
        {' '}
        {effectiveDate}
        .
      </Text>

      <br />

      <div className="mb-8 flex justify-center">
        <Logo />
      </div>

      <Text size="3xl" weight="bold" className="text-center">
        {title}
      </Text>

      {children}
    </div>
  )
}
