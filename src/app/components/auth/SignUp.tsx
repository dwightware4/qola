import { SignUpButton } from '@clerk/nextjs'

import { Button } from '@/components'

export const SignUp = () => {
  return <SignUpButton mode="modal"><Button>Get My Free Blueprint</Button></SignUpButton>
}
