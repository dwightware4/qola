import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core'

import { ACCENT_COLORS, MAIN_COLORS } from '@/constants/colors'

const THEME_OVERRIDE = createTheme({
  fontFamily: 'Inter',
  fontSizes: {
    'xs': '0.75rem',
    'sm': '0.875rem',
    'md': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  primaryColor: 'accent',
  primaryShade: 5,
  colors: { accent: ACCENT_COLORS, main: MAIN_COLORS },
  defaultGradient: { from: 'accent', to: 'main' },
})

export const MANTINE_THEME = mergeMantineTheme(DEFAULT_THEME, THEME_OVERRIDE)
