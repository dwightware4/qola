import { Image, Link } from '@/components'
import { APP_NAME, ROOT_ROUTE } from '@/core'
import logo from '@/core/qola-logo.png'

export const Logo = () => (
  <Link href={ROOT_ROUTE} aria-label="Home">
    <Image src={logo} width={150} description={`${APP_NAME} Company Logo`} />
  </Link>
)
