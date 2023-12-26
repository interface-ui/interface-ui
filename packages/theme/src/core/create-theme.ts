import type { Ref } from 'vue'
import { ref } from 'vue'
import {
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import type { ThemeOptions, ThemeSchemes } from '../types'
import Theme from './theme'
import defaultTheme from './default.theme'
import {
  createCustomPalettes,
  mergeParsedSchemes,
  newSchemes,
  parseCustomSchemes,
  parsePalettes,
  parseSchemes,
  parsedNewSchemes,
} from './utils'

/**
 * The hook to create the theme
 * @param {string} source The source color of the theme, the value should be "Hex"
 * @param {ThemeOptions} options The object to customize the theme
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

  /**
   * TIPS This is the temporary solution to fix the issue of the current verison of `@material/material-color-utilities`
   * lack of the "surface" relate shcehmes according to the latest version of the Material Design schemes
   * The function can be removed after the issue is fixed
   */
  const additionalSchemes = newSchemes(dynamicTheme)
  const lightSchemes = mergeParsedSchemes(
    parseSchemes(dynamicTheme.schemes.light),
    parsedNewSchemes(additionalSchemes.light) as any,
    parseCustomSchemes(dynamicTheme.customColors, 'light')
  )
  const darkSchemes = mergeParsedSchemes(
    parseSchemes(dynamicTheme.schemes.dark),
    parsedNewSchemes(additionalSchemes.dark) as any,
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
