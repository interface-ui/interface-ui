import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import {
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import type { CustomColor } from '@material/material-color-utilities'
import { useThemeProvider } from '../hooks'
import type { ThemeConfig, ThemeSchemes } from './types'
import Theme from './theme'
import defaultTheme from './default.theme'
import {
  createCustomPalettes,
  injectJSS,
  mergeParsedSchemes,
  parseCustomSchemes,
  parsePalettes,
  parseShcemes,
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
  const { schemes: $schemes, mode } = config

  const dynamicTheme = themeFromSourceColor(argbFromHex(source), [
    ...customColors,
    ...(config.customColors ?? []),
  ])

  const palettes = {
    ...parsePalettes(dynamicTheme.palettes),
    ...createCustomPalettes(customColors),
  }

  const theme = ref<Theme>(new Theme({} as ThemeSchemes, palettes, mode))

  const lightSchemes = mergeParsedSchemes(
    parseShcemes(dynamicTheme.schemes.light),
    parseCustomSchemes(dynamicTheme.customColors, 'light')
  )
  const darkSchemes = mergeParsedSchemes(
    parseShcemes(dynamicTheme.schemes.dark),
    parseCustomSchemes(dynamicTheme.customColors, 'dark')
  )

  watch(
    () => theme.value.mode,
    newVal => {
      const { schemes } = newVal === 'dark' ? darkSchemes! : lightSchemes!

      theme.value = new Theme(
        { ...schemes, ...$schemes } as ThemeSchemes,
        palettes,
        newVal
      )
    },
    { immediate: true }
  )

  injectJSS(lightSchemes, darkSchemes, theme.value)

  useThemeProvider(theme)
  return theme
}

export default createTheme
