import type { ReactNodeT } from '@/types'
import { MantineProvider } from '@mantine/core'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { MANTINE_THEME, ThemeToggle } from '../theme'
import { AuthProvider } from './AuthProvider'

type PropsT = {
  children: ReactNodeT
}

export const Providers = (props: PropsT) => {
  const { children } = props

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      forcedTheme="dark"
    >
      <MantineProvider theme={MANTINE_THEME} defaultColorScheme="dark">
        <ThemeToggle />

        <AuthProvider>{children}</AuthProvider>
      </MantineProvider>
    </NextThemesProvider>
  )
}
