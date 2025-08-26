import type { ReactNodeT } from '@/types'

import { UserButton } from '@clerk/nextjs'
import { Bars3Icon } from '@/icons'

type PropsT = {
  children?: ReactNodeT
  setSidebarOpen: (open: boolean) => void
}

export const MobileHeader = (props: PropsT) => {
  const { setSidebarOpen } = props

  return (
    <header className="border-accent-500/20 sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b px-4 sm:gap-x-6 sm:px-6 lg:hidden lg:px-8">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="hover:text-accent-500 -m-2.5 cursor-pointer p-2.5 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex-1" />

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <UserButton />
        </div>
      </div>
    </header>
  )
}
