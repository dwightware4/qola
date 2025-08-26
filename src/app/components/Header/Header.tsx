'use client'

import { Button, Desktop, PageSection } from '@/components'
import { Logo, SIGN_IN_ROUTE } from '@/core'

import { WaitlistButton } from '../WaitlistButton'
import { MobileNavigation } from './components'

export const Header = () => (
  <PageSection as="header" className="py-10">
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <Logo />

        <Desktop>
          <Button variant="subtle" href="#pricing">
            Pricing
          </Button>
        </Desktop>
      </div>

      <div>
        <Desktop className="items-center md:gap-x-8">
          <Button variant="subtle" href={SIGN_IN_ROUTE}>
            Sign In
          </Button>

          <WaitlistButton />
        </Desktop>

        <MobileNavigation />
      </div>
    </nav>
  </PageSection>
)
