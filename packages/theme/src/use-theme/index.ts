import jss from 'jss'
import preset from 'jss-preset-default'
import { reactive } from 'vue'
import type { Scheme } from '@material/material-color-utilities'
import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import color from '../color'
import state from '../state'
import type Theme from './theme'
import type { Palette } from './theme'

const theme = reactive<Theme>({ color, state } as Theme)

const parseShceme = (scheme: Scheme) => {
  const palette: Palette = {} as any
  const styles: Record<string, string> = {} as any
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const color = hexFromArgb(value)
    palette[key as keyof Palette] = color
    styles[`--md-sys-color-${token}`] = color
  }

  return { palette, styles }
}

/**
 * The hook to create the theme
 * @param {string} source The source color of the theme, the value should be "Hex"
 * @param {Partial<Palette>} scheme The object to customize the current theme
 * @returns {Theme} Theme object
 */
export const createTheme = (
  source = '#3894ff',
  scheme: Partial<Palette> = {}
): Theme => {
  const dynamicTheme = themeFromSourceColor(argbFromHex(source))

  const { palette, styles } = parseShceme(dynamicTheme.schemes.light)
  theme.palette = { ...palette, ...scheme }

  if (typeof window !== 'undefined') {
    jss.setup(preset())
    const cssStyles = {
      '@global': { ':root': styles },
    }
    jss.createStyleSheet(cssStyles).attach()
  }

  return theme
}

/**
 * @param {Partial<Palette>} scheme The object to customize the current theme
 * @returns {Theme} Theme object
 */
export const customizeTheme = (scheme: Partial<Palette>) => {
  theme.palette = { ...theme.palette, ...scheme }

  return theme
}

/**
 * Get the current theme object
 * @returns {Theme} Theme object
 */
const useTheme = (): Theme => {
  return theme
}

export default useTheme
