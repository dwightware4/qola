import { Logo } from '@/core'

import { Nav } from './Nav/Nav'

export const DesktopSidebar = () => (
  <div className="border-accent-500/20 hidden border-r lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center mt-2">
        <Logo />
      </div>

      <Nav />
    </div>
  </div>
)
