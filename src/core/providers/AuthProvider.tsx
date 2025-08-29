'use client'

import type { ReactNodeT } from '@/types'

import { ClerkProvider } from '@clerk/nextjs'
import { getClerkTheme, PRIVACY_ROUTE, TERMS_ROUTE } from '@/core'
import { useTheme } from '@/hooks'

import './auth-provider.css'

const LABELS = {
  formButtonPrimary: 'Continue',
  signUp: {
    start: {
      title: 'Get Your Free Blueprint',
      subtitle: 'Please enter your email to get started',
    },
  },
}

type PropsT = {
  children?: ReactNodeT
}

export const AuthProvider = (props: PropsT) => {
  const { children } = props
  const { resolvedTheme = 'light' } = useTheme()

  return (
    <ClerkProvider
      // waitlistUrl={WAITLIST_ROUTE}
      // signInUrl={SIGN_IN_ROUTE}
      // signUpUrl={SIGN_UP_ROUTE}
      localization={LABELS}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      appearance={{
        ...getClerkTheme(resolvedTheme as 'light' | 'dark'),
        layout: {
          privacyPageUrl: PRIVACY_ROUTE,
          termsPageUrl: TERMS_ROUTE,
          // unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      {children}
    </ClerkProvider>
  )
}
