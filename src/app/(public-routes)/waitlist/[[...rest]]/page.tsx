import type { MetadataT } from '@/types'

import { Waitlist } from '@clerk/nextjs'

import { AuthPageContainer } from '../../components'

export const metadata: MetadataT = {
  title: 'Join Waitlist',
}

const WaitlistPage = () => (
  <AuthPageContainer>
    <Waitlist />
  </AuthPageContainer>
)

export default WaitlistPage
