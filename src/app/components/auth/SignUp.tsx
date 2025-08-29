import { SignUpButton } from '@clerk/nextjs'

import { Button } from '@/components'

SignUpButton.displayName = 'SignUpButton'

export const SignUp = () => {
  return <SignUpButton mode="modal"><Button>Get My Free Blueprint</Button></SignUpButton>
}
