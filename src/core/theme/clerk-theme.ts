import { ACCENT, MAIN_DARK, MAIN_LIGHT, SURFACE_DARK } from '@/constants'
import { merge } from '@/utils'

export const LIGHT_THEME = {
  variables: {
    colorPrimary: ACCENT,
    colorSuccess: ACCENT,
    colorNeutral: MAIN_LIGHT,
    colorText: MAIN_LIGHT,
  },
  elements: {
    headerTitle: 'text-3xl',
    cardBox: { boxShadow: 'none' },
    card: { boxShadow: 'none' },
  },
}

export const DARK_THEME = merge(structuredClone(LIGHT_THEME), {
  variables: {
    colorNeutral: MAIN_DARK,
    colorText: MAIN_DARK,
    colorInputBackground: SURFACE_DARK,
    colorInputText: MAIN_DARK,
    colorBackground: SURFACE_DARK,
  },
  elements: {
    card: { background: SURFACE_DARK },
    footer: { background: SURFACE_DARK },
  },
})

export const getClerkTheme = (resolvedTheme: 'light' | 'dark') => resolvedTheme === 'dark' ? DARK_THEME : LIGHT_THEME
