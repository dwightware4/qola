import { Image, Link, Text } from '@/components'
import { ROOT_ROUTE } from '@/core'

export const Logo = () => (
  <Link href={ROOT_ROUTE} aria-label="Home">
    <span className="flex gap-6">
      <Image src="/logo.svg" width={40} height={40} description="BuildFlow Company Logo" />

      <Text weight="bold" size="3xl" className="text-3xl">
        BuildFlow
      </Text>
    </span>
  </Link>
)
