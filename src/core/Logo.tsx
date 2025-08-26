import { Image, Link, Text } from '@/components'
import { APP_NAME, ROOT_ROUTE } from '@/core'

export const Logo = () => (
  <Link href={ROOT_ROUTE} aria-label="Home">
    <span className="flex gap-6">
      <Image src="/logo.svg" width={40} height={40} description={`${APP_NAME} Company Logo`} />

      <Text weight="bold" size="3xl" className="text-3xl">
        {APP_NAME}
      </Text>
    </span>
  </Link>
)
