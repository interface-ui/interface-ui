import type { Ref } from 'vue'
import { ref } from 'vue'
import {
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import type { ThemeOptions, ThemeSchemes } from './types'
import Theme from './theme'
import defaultTheme from './default.theme'
import {
  createCustomPalettes,
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
  options: ThemeOptions = { target: 'root' }
): Ref<Theme> => {
  const config = options.config ?? {}
  const target = options.target
  const { schemes: $schemes, mode } = config
  const customColors = [
    ...defaultTheme.customColors,
    ...(config.customColors ?? []),
  ]

  const dynamicTheme = themeFromSourceColor(argbFromHex(source), customColors)

  const palettes = {
    ...parsePalettes(dynamicTheme.palettes),
    ...createCustomPalettes(customColors),
  }

  const lightSchemes = mergeParsedSchemes(
    parseShcemes(dynamicTheme.schemes.light),
    parseCustomSchemes(dynamicTheme.customColors, 'light')
  )
  const darkSchemes = mergeParsedSchemes(
    parseShcemes(dynamicTheme.schemes.dark),
    parseCustomSchemes(dynamicTheme.customColors, 'dark')
  )

  const { schemes } = mode === 'dark' ? darkSchemes! : lightSchemes!
  const theme = ref<Theme>(
    new Theme(
      { ...schemes, ...$schemes } as ThemeSchemes,
      palettes,
      mode,
      lightSchemes,
      darkSchemes,
      target
    )
  )

  return theme as Ref<Theme>
}

export default createTheme
