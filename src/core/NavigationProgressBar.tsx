'use client'

import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import { useEffect, useRef } from 'react'

export const NavigationProgressBar = () => {
  const pathname = usePathname()
  const previousPath = useRef<string | null>(null)

  useEffect(() => {
    if (previousPath.current !== pathname) {
      NProgress.start()

      const timer = setTimeout(() => {
        NProgress.done()
      }, 300) // artificial delay for visibility / debug

      return () => {
        clearTimeout(timer)
        previousPath.current = pathname
      }
    }
  }, [pathname])

  return (
    <style jsx global>
      {`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: var(--color-accent-500);
        position: fixed;
        z-index: 50;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow:
          0 0 10px #3b82f6,
          0 0 5px #3b82f6;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}
    </style>
  )
}
