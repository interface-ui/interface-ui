import {
  type ThemeCallBack,
  type ThemePaletteColor,
  themePaletteColor,
} from '@fusion-ui/theme/src/use-theme/theme'
import useTheme from '@fusion-ui/theme/src/use-theme'
import { computed } from 'vue'
import { argbFromHex, rgbaFromArgb } from '@material/material-color-utilities'

/**
 * The function to compute color from props
 * The props.color can be "primary" | "secondary" | "tertiary" | "error" | (theme: Theme) => string | "string"
 * Use this function to get the final color value
 * @param {ThemePaletteColor | string | ThemeCallBack} color
 * @param {string} [defaultVal] The default value when color does not exist
 * @return Return the computed string. The value can be CSS variable or color in hex
 */
const useColor = (
  color: ThemePaletteColor | string | ThemeCallBack,
  rgb = false
) => {
  const theme = useTheme()
  return computed(() => {
    if (!color) {
      return null
    }
    if (typeof color === 'function') {
      if (rgb) {
        const argb = argbFromHex(color(theme))
        const { r, g, b } = rgbaFromArgb(argb)
        return `${r}, ${g}, ${b}`
      }
      return color(theme)
    }
    if (themePaletteColor.includes(color)) {
      return rgb
        ? `var(--md-sys-color-${color}-rgb)`
        : `var(--md-sys-color-${color})`
    }
    return color
  })
}

export default useColor
