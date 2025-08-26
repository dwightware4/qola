import type { MetadataT } from '@/types'

import { SignIn } from '@clerk/nextjs'
import { ROOT_ROUTE, SIGN_IN_ROUTE } from '@/core'

import { AuthPageContainer } from '../../components'

export const metadata: MetadataT = {
  title: 'Sign In',
}

const SignInPage = () => (
  <AuthPageContainer>
    <SignIn path={SIGN_IN_ROUTE} fallbackRedirectUrl={ROOT_ROUTE} />
  </AuthPageContainer>
)

export default SignInPage
