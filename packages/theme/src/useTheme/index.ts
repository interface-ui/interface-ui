import jss from 'jss'
import preset from 'jss-preset-default'
import { onBeforeMount, reactive } from 'vue'
import type { Scheme } from '@material/material-color-utilities'
import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities'
import color from '../color'
import state from '../state'
import type FnTheme from './theme'
import type { Palette } from './theme'

const parseShceme = (scheme: Scheme) => {
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

/**
 * The hook to create the theme
 * @param {string} source The source color of the theme, the value should be "Hex"
 * @returns {FnTheme} Theme object
 */
const useTheme = (source = '#3894ff'): FnTheme => {
  const dynamicTheme = themeFromSourceColor(argbFromHex(source))
  const theme = reactive<FnTheme>({ color, state } as FnTheme)
  // eslint-disable-next-line no-console
  console.log('useTheme')
  onBeforeMount(() => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const { palette, styles } = systemDark
      ? parseShceme(dynamicTheme.schemes.dark)
      : parseShceme(dynamicTheme.schemes.light)
    theme.palette = palette

    jss.setup(preset())
    const cssStyles = {
      '@global': { ':root': styles },
    }
    jss.createStyleSheet(cssStyles).attach()
    // eslint-disable-next-line no-console
    console.log('useTheme - onBeforeMount')
  })

  return theme
}

export default useTheme
