import jss from 'jss'
import preset from 'jss-preset-default'
import type { Scheme } from '@material/material-color-utilities'
import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import color from '../color'
import state from '../state'
import type Theme from './theme'
import type { Palette, ParsedScheme } from './theme'

const theme: Theme = { color, state } as Theme
let lightPalette: ParsedScheme | null = null
let darkPalette: ParsedScheme | null = null

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

  lightPalette = parseShceme(dynamicTheme.schemes.light)
  darkPalette = parseShceme(dynamicTheme.schemes.dark)

  if (typeof window !== 'undefined') {
    const themeMatch = window.matchMedia('(prefers-color-scheme: dark)')
    const onThemeChange = () => {
      const { palette } = themeMatch.matches ? darkPalette! : lightPalette!
      theme.palette = { ...palette, ...scheme }
    }
    jss.setup(preset())
    const cssStyles = {
      '@media (prefers-color-scheme: light)': {
        '@global': {
          ':root': {
            ...lightPalette?.styles,
            '--fn-sys-color-disabled-0':
              'rgba(0, 0, 0, var(--md-sys-state-disabled-state-layer-opacity))',
            '--fn-sys-color-disabled-1': 'rgba(0, 0, 0, 0.15)',
          },
          ':root[data-theme="dark"]': {
            ...darkPalette?.styles,
            '--fn-sys-color-disabled-0':
              'rgba(255, 255, 255, var(--md-sys-state-disabled-state-layer-opacity))',
            '--fn-sys-color-disabled-1': 'rgba(255, 255, 255, 0.15)',
          },
        },
      },
      '@media (prefers-color-scheme: dark)': {
        '@global': {
          ':root': {
            ...lightPalette?.styles,
            '--fn-sys-color-disabled-0':
              'rgba(0, 0, 0, var(--md-sys-state-disabled-state-layer-opacity))',
            '--fn-sys-color-disabled-1': 'rgba(0, 0, 0, 0.15)',
          },
          ':root[data-theme="dark"]': {
            ...darkPalette?.styles,
            '--fn-sys-color-disabled-0':
              'rgba(255, 255, 255, var(--md-sys-state-disabled-state-layer-opacity))',
            '--fn-sys-color-disabled-1': 'rgba(255, 255, 255, 0.15)',
          },
        },
      },
    }
    jss.createStyleSheet(cssStyles).attach()
    onThemeChange()
    themeMatch.addEventListener('change', onThemeChange)
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
