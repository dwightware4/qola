import { Mobile, Popover, PopoverBackdrop, PopoverButton, PopoverPanel } from '@/components'
import { SIGN_IN_ROUTE } from '@/core'

import { MobileNavIcon, MobileNavLink } from '.'

export const MobileNavigation = () => (
  <Mobile>
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>

      <PopoverBackdrop
        transition
        className="dark:bg-charcoal/80 bg-charcoal/50 fixed inset-0 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />

      <PopoverPanel
        transition
        className="dark:bg-charcoal dark:text-accent-500 absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileNavLink href="#pricing">Pricing</MobileNavLink>

        <hr className="m-2 border-slate-300/40" />

        <MobileNavLink href={SIGN_IN_ROUTE}>Sign in</MobileNavLink>
      </PopoverPanel>
    </Popover>
  </Mobile>
)
