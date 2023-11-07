import { useTheme } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import { argbFromHex, rgbaFromArgb } from '@material/material-color-utilities'
import type { AcceptableColor } from '../core'

/**
 * The function to compute color from props
 * The props.color can be "primary" | "secondary" | "tertiary" | "error" | (theme: Theme) => string | "string"
 * Use this function to get the final color value
 * @param {T extends { [k: string]: AcceptableColor | any }} props The props of component
 * @param {keyof T | undefined | null} key The key of props
 * Set the key to null or undefined to use default color
 * @param {[string]} defaultColor The default color
 * @return Return the computed string. The value can be CSS variable or color in hex
 */
export const useRgbColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T | undefined | null,
  defaultColor?: string
) => {
  const theme = useTheme()
  return computed(() => {
    if (
      !key ||
      !(key in props) ||
      !['string', 'function'].includes(typeof props[key])
    ) {
      return defaultColor ?? null
    }

    const color: AcceptableColor = props?.[key]

    if (typeof color === 'function') {
      const { r, g, b } = rgbaFromArgb(argbFromHex(color(theme.value)))
      return `${r} ${g} ${b}`
    }
    if (color in theme.value.schemes) {
      const _color = color.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return `var(--md-sys-color-${_color}-rgb)`
    } else if (!color.startsWith('#')) {
      return color
    }

    const { r, g, b } = rgbaFromArgb(argbFromHex(color as string))
    return `${r} ${g} ${b}`
  })
}
