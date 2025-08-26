// COLOR SYSTEM NOTES
//
// MAIN_LIGHT/DARK
//  - Most text uses this color. Likely your brand's more subdued color.
//
// SURFACE_LIGHT/DARK
// - Default background color.
//
// ACCENT
// - Used for highlighting. Likely your brand's flashier color. Must look good in both light and
//   dark modes.

export const MAIN_LIGHT = '#000041'
export const MAIN_DARK = '#ffffff'

export const SURFACE_LIGHT = '#ffffff'
export const SURFACE_DARK = '#2b2b2b'

export const ACCENT = '#f7941d'
// #f7941d

type ColorThemeT = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]

export const ACCENT_COLORS: ColorThemeT = [
  '#fff7eb', // 50
  '#fde9c8', // 100
  '#fbd28c', // 200
  '#f9b350', // 300
  '#f7941d', // 400
  ACCENT, // 500
  '#d5530a', // 600
  '#b1360c', // 700
  '#902b10', // 800
  '#762311', // 900
]

export const MAIN_COLORS: ColorThemeT = [
  '#e6e6ec', // 50
  '#ccccd9', // 100
  '#9999b3', // 200
  '#66668d', // 300
  '#333367', // 400
  MAIN_LIGHT, // 500
  '#000034', // 600
  '#000027', // 700
  '#00001a', // 800
  '#00000d', // 900
]
