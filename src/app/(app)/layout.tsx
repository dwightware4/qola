'use client'

import type { ReactNodeT } from '@/types'

import { useState } from 'react'
import { DesktopSidebar, MobileHeader, MobileSidebar } from './components'

type PropsT = {
  children: ReactNodeT
}

const AppLayout = (props: PropsT) => {
  const { children } = props

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <DesktopSidebar />

      <div className="min-h-screen lg:pl-72">
        <MobileHeader setSidebarOpen={setSidebarOpen} />

        <main className="py-10 inset-shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}

export default AppLayout
