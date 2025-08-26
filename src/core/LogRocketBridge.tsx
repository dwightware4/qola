'use client'

import LogRocket from 'logrocket'

import { PROD_MODE } from '@/constants'
import { useEffect, useUser } from '@/hooks'

export const LogRocketBridge = () => {
  const { isLoaded, user } = useUser()

  useEffect(() => {
    if (PROD_MODE) {
      LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_ID!)
    }
  }, [])

  useEffect(() => {
    if (PROD_MODE && isLoaded && user) {
      LogRocket.identify(user.id, { email: user.primaryEmailAddress?.emailAddress || '' })
    }
  }, [isLoaded, user])

  return null
}
