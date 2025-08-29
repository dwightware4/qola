'use client'

import { SignUpButton } from '@clerk/nextjs'

import { Button } from '@/components'

export const BlueprintButton = () => {
  return (
    <SignUpButton mode="modal"><Button>Get My Free Blueprint</Button></SignUpButton>
  )
}
