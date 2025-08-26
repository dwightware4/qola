import type { MetadataT } from '@/types'

import { SignUp } from '@clerk/nextjs'
import { ROOT_ROUTE, SIGN_UP_ROUTE } from '@/core'

import { AuthPageContainer } from '../../components'

export const metadata: MetadataT = {
  title: 'Sign Up',
}

const SignInPage = () => (
  <AuthPageContainer>
    <SignUp path={SIGN_UP_ROUTE} fallbackRedirectUrl={ROOT_ROUTE} />
  </AuthPageContainer>
)

export default SignInPage
