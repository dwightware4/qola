import { SignInButton } from '@clerk/nextjs'

import { Button } from '@/components'

SignInButton.displayName = 'SignInButton'

export const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <Button variant="subtle">Sign In</Button>
    </SignInButton>
  )
}
