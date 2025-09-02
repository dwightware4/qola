'use client'

import { Button } from '@/components'

import { initiateMarketResearch } from '../actions/initiate'

export const InitiateButton = () => {
  return <Button onClick={initiateMarketResearch}>Initiate Market Research</Button>
}
