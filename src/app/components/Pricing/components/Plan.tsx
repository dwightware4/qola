import type { ArrayT } from '@/types'
import { BlueprintButton } from '@/app/components'
import { Text } from '@/components'
import { MAIN_COLOR } from '@/constants'
import { CheckCircleIcon } from '@/icons'
import { cn } from '@/utils'

type PropsT = {
  name: string
  price: string
  description: string
  href: string
  features: ArrayT<string>
  featured?: boolean
}

export const Plan = (props: PropsT) => {
  const { name, price, description, features, featured } = props

  return (
    <section
      className={cn(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'bg-accent-700 order-first py-8 lg:order-none' : 'lg:py-8',
      )}
    >
      <div className="mt-5">
        <Text as="h3" size="lg" color="white" className="font-display">
          {name}
        </Text>
      </div>

      <div className="mt-2">
        <Text color={featured ? 'white' : MAIN_COLOR}>{description}</Text>
      </div>

      <Text
        size="5xl"
        color={featured ? 'white' : MAIN_COLOR}
        className="font-display order-first font-light tracking-tight"
      >
        {price}
      </Text>

      <ul role="list" className="order-last mt-10 flex flex-col gap-y-3 text-sm">
        {features.map(feature => (
          <li key={feature} className="flex">
            <CheckCircleIcon className="h-6 w-6" />

            <span className="ml-4">
              <Text size="sm" color={featured ? 'white' : MAIN_COLOR}>
                {feature}
              </Text>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col">
        <BlueprintButton />
      </div>
    </section>
  )
}
