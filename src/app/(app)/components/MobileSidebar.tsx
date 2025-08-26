import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@/components'
import { Logo } from '@/core'
import { XMarkIcon } from '@/icons'

import { Nav } from './Nav/Nav'

type PropsT = {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export const MobileSidebar = (props: PropsT) => {
  const { sidebarOpen, setSidebarOpen } = props

  return (
    <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
      <DialogBackdrop
        transition
        className="bg-accent-900/60 fixed inset-0 transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
        >
          <TransitionChild>
            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
              <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon aria-hidden="true" className="size-6 text-white" />
              </button>
            </div>
          </TransitionChild>

          <div className="dark:bg-charcoal flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ring-1 ring-white/10">
            <div className="flex h-16 shrink-0 items-center">
              <Logo />
            </div>

            <Nav />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
