'use client'

import { SignIn, SignUp } from '@/app/components'
import { Desktop, PageSection } from '@/components'
import { Logo } from '@/core'

import { MobileNavigation } from './components'

export const Header = () => (
  <PageSection as="header" className="py-5">
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <Logo />

        {/* <Desktop>
          <Button variant="subtle" href="#pricing">
            Pricing
          </Button>
        </Desktop> */}
      </div>

      <Desktop className="items-center md:gap-x-8">
        <SignIn />

        <SignUp />
      </Desktop>

      <MobileNavigation />
    </nav>
  </PageSection>
)
