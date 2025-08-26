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

export const ACCENT = '#459a56'

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
  '#ecf5ee', // 50
  '#daebdd', // 100
  '#b5d7bb', // 200
  '#8fc29a', // 300
  '#6aae78', // 400
  ACCENT, // 500
  '#377b45', // 600
  '#295c34', // 700
  '#1c3e22', // 800
  '#0e1f11', // 900
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
