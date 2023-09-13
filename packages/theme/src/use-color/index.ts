import type {
  ThemeCallBack,
  ThemePaletteColor,
} from '@fusion-ui/theme/src/use-theme/theme'
import useTheme from '@fusion-ui/theme/src/use-theme'
import { computed } from 'vue'

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
  defaultVal?: string
) => {
  const theme = useTheme()
  return computed(() => {
    if (!color) {
      return defaultVal ?? null
    }
    if (typeof color === 'function') {
      return color(theme)
    }
    if (['primary', 'secondary', 'tertiary', 'error'].includes(color)) {
      return `var(--md-sys-color-${color})`
    }
    return color
  })
}

export default useColor
