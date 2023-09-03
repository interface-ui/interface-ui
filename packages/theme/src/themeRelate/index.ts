import type { Scheme } from '@material/material-color-utilities'
import {
  applyTheme,
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import state from '../state'
import type FnTheme from './theme'
import type { Palette } from './theme'

const dynamicTheme = themeFromSourceColor(argbFromHex('#3894ff'))
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

applyTheme(dynamicTheme, { target: document.documentElement, dark: systemDark })

// const toKebabize = (str: string) =>
//   str.replace(
//     /[A-Z]+(?![a-z])|[A-Z]/g,
//     ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
//   )

// export const createTheme = (theme: ThemeConfig) => {
//   const { palette } = theme
//   const curPalette = Object.keys(palette).reduce((pre, cur) => {
//     const key = `--md-sys-color-${toKebabize(cur)}`
//     pre[key] = palette[cur as keyof PaletteConfig]
//     return pre
//   }, {} as any)
//   return { ...curPalette }
// }

export const parseShceme = (scheme: Scheme): Palette => {
  const newScheme: Record<keyof Scheme, string> = {} as any
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    newScheme[key as keyof Scheme] = hexFromArgb(value)
  }

  return newScheme
}

const theme: FnTheme = {
  palette: systemDark
    ? parseShceme(dynamicTheme.schemes.dark)
    : parseShceme(dynamicTheme.schemes.light),
  state,
}
// eslint-disable-next-line no-console
console.log(theme)

export default theme
