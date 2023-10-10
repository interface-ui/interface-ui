import jss from 'jss'
import preset from 'jss-preset-default'
import type { Scheme } from '@material/material-color-utilities'
import {
  argbFromHex,
  hexFromArgb,
  rgbaFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import type { Ref } from 'vue'
import { inject, provide, ref, watch } from 'vue'
import Theme from './theme'
import type { Palette, ParsedScheme, ThemeConfig } from './theme'

const parseShceme = (scheme: Scheme): ParsedScheme => {
  const palette: Palette = {} as any
  const styles: Record<string, string> = {} as any
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const color = hexFromArgb(value)
    const { r, g, b } = rgbaFromArgb(value)
    palette[key as keyof Palette] = color
    styles[`--md-sys-color-${token}`] = color
    styles[`--md-sys-color-${token}-rgb`] = `${r}, ${g}, ${b}`
  }

  return { palette, styles }
}

const injectJSS = (lightPalette: ParsedScheme, darkPalette: ParsedScheme) => {
  jss.setup(preset())
  const cssStyles = {
    '@global': {
      ':root': {
        'color-scheme': 'light',
        ...lightPalette?.styles,
      },
      ':root[data-theme="dark"]': {
        'color-scheme': 'dark',
        ...darkPalette?.styles,
      },
    },
  }
  jss.createStyleSheet(cssStyles).attach()
}

/**
 * The hook to provide theme obj to the child components
 * @param {Ref<Theme>} theme The theme obj
 */
export const uesThemeProvider = (theme: Ref<Theme>) => {
  provide('ThemeContext', theme)
}

/**
 * The hook to create the theme
 * @param {string} source The source color of the theme, the value should be "Hex"
 * @param {ThemeConfig} config The object to customize the theme
 * @returns {Ref<Theme> } Theme object
 */
export const createTheme = (
  source = '#3894ff',
  config: ThemeConfig = {}
): Ref<Theme> => {
  const { palette: $palette, mode } = config
  const theme = ref<Theme>(new Theme({} as Palette, mode))
  const html = document.documentElement as HTMLElement

  const dynamicTheme = themeFromSourceColor(argbFromHex(source))
  const lightPalette = parseShceme(dynamicTheme.schemes.light)
  const darkPalette = parseShceme(dynamicTheme.schemes.dark)

  watch(
    () => theme.value.mode,
    newVal => {
      html.setAttribute('data-theme', newVal)
      const { palette } = newVal === 'dark' ? darkPalette! : lightPalette!
      theme.value = new Theme({ ...palette, ...$palette }, newVal)
    },
    { immediate: true }
  )

  injectJSS(lightPalette, darkPalette)

  uesThemeProvider(theme)
  return theme
}

/**
 * Get the current theme object
 * @returns {Ref<Theme> } Theme object
 */
const useTheme = (): Ref<Theme> => {
  const theme = inject<Ref<Theme>>('ThemeContext')!
  return theme
}

export default useTheme
