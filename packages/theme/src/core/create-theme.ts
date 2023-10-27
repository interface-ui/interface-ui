import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import {
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import type { CustomColor } from '@material/material-color-utilities'
import { uesThemeProvider } from '../hooks'
import type { ThemeConfig, ThemePaletteColor } from './types'
import { Theme } from './types'
import defaultTheme from './default.theme'
import {
  injectJSS,
  mergeParsedScheme,
  parseCustomScheme,
  parseShceme,
} from './utils'

/**
 * The hook to create the theme
 * @param {string} source The source color of the theme, the value should be "Hex"
 * @param {ThemeConfig} config The object to customize the theme
 * @returns {Ref<Theme> } Theme object
 */
export const createTheme = (
  source = defaultTheme.source,
  config: ThemeConfig = {},
  customColors: CustomColor[] = defaultTheme.customColors
): Ref<Theme> => {
  const { palette: $palette, mode } = config
  const theme = ref<Theme>(new Theme({} as ThemePaletteColor, mode))
  const html = document.documentElement as HTMLElement

  const dynamicTheme = themeFromSourceColor(argbFromHex(source), [
    ...customColors,
    ...(config.customColors ?? []),
  ])

  const lightPalette = mergeParsedScheme(
    parseShceme(dynamicTheme.schemes.light),
    parseCustomScheme(dynamicTheme.customColors, 'light')
  )
  const darkPalette = mergeParsedScheme(
    parseShceme(dynamicTheme.schemes.dark),
    parseCustomScheme(dynamicTheme.customColors, 'dark')
  )

  watch(
    () => theme.value.mode,
    newVal => {
      html.setAttribute('data-theme', newVal)
      const { palette } = newVal === 'dark' ? darkPalette! : lightPalette!

      theme.value = new Theme(
        { ...palette, ...$palette } as ThemePaletteColor,
        newVal
      )
    },
    { immediate: true }
  )

  injectJSS(lightPalette, darkPalette, theme.value)

  uesThemeProvider(theme)
  return theme
}

export default createTheme
