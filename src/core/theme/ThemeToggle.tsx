'use client'

import { Affix } from '@/components'
import { useTheme } from '@/hooks'

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const isDev = process.env.NODE_ENV === 'development'

  if (!isDev || !resolvedTheme) {
    return null
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Affix position={{ bottom: 25, right: 25 }}>
      <span className="cursor-pointer p-2" onClick={toggleTheme}>
        {resolvedTheme === 'dark' ? '☀️' : '🌒'}
      </span>
    </Affix>
  )
}
