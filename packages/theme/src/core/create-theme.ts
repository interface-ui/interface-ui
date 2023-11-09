import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import {
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import { useThemeProvider } from '../hooks'
import type { ThemeOptions, ThemeSchemes } from './types'
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
  options: ThemeOptions = {}
): Ref<Theme> => {
  const config = options.config ?? {}
  const target = options.target ?? 'root'
  const { schemes: $schemes, mode } = config
  const html = document.documentElement
  const customColors = [
    ...defaultTheme.customColors,
    ...(config.customColors ?? []),
  ]

  const dynamicTheme = themeFromSourceColor(argbFromHex(source), customColors)

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

  const injectCss = injectJSS(target, lightSchemes, darkSchemes, theme.value)

  watch(
    () => theme.value.mode,
    newVal => {
      const { schemes } = newVal === 'dark' ? darkSchemes! : lightSchemes!
      if (newVal === 'dark') {
        html.setAttribute('data-theme', 'dark')
      } else {
        html.removeAttribute('data-theme')
      }

      theme.value = new Theme(
        { ...schemes, ...$schemes } as ThemeSchemes,
        palettes,
        newVal,
        injectCss
      )
    },
    { immediate: true }
  )

  useThemeProvider(theme)
  return theme
}

export default createTheme
