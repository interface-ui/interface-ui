import type { Scheme } from '@material/material-color-utilities'
import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import type { Palette } from './theme'

const dynamicTheme = themeFromSourceColor(argbFromHex('#3894ff'))
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

export const parseShceme = (scheme: Scheme) => {
  const palette: Palette = {} as any
  const styles: Record<string, string> = {} as any
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const color = hexFromArgb(value)
    palette[key as keyof Scheme] = color
    styles[`--md-sys-color-${token}`] = color
  }

  return { palette, styles }
}

const { palette, styles } = systemDark
  ? parseShceme(dynamicTheme.schemes.dark)
  : parseShceme(dynamicTheme.schemes.light)

export default { palette, styles }
