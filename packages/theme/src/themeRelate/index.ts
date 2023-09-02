import type Theme from './theme'
import type { PaletteConfig } from './theme'

const toKebabize = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )

export const createTheme = (theme: Theme) => {
  const { palette } = theme
  const curPalette = Object.keys(palette).reduce((pre, cur) => {
    const key = `--md-sys-color-${toKebabize(cur)}`
    pre[key] = palette[cur as keyof PaletteConfig]
    return pre
  }, {} as any)
  return { ...curPalette }
}
