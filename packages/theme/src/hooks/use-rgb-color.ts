import { useTheme } from '@fusion-ui-vue/theme'
import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'
import type { Rgba } from '@material/material-color-utilities'
import {
  CorePalette,
  argbFromHex,
  rgbaFromArgb,
} from '@material/material-color-utilities'
import type { AcceptableColor, Theme } from '../core'

/**
 * The function converts hex color to rgba color
 * @param {string} hex The hex color
 * @return {Rgba} The rgba color obj
 */
export const rgbaFromHex = (hex: string): Rgba => {
  if (!hex.startsWith('#')) {
    throw new Error('The color must be the hex color')
  }
  return rgbaFromArgb(argbFromHex(hex))
}

/**
 * The function returns a valuable rgb color from props.color
 * The props.color can be any key in theme.schemes, a function, or a hex color
 * (e.g. "primary" | "onPrimary") | (theme: Theme) => string | "string" (e.g. "red") | HexColor (e.g. "#fff")
 * @param {T extends { [k: string]: AcceptableColor | any }} props The props of component
 * @param {keyof T} key The key of props
 * @return {ComputedRef<string>} Return the computed string.
 * The value can be CSS variable, color in hex, or the color name in string (e.g. "red")
 */
const genRgbColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T,
  theme: Ref<Theme>
): ComputedRef<string> => {
  return computed(() => {
    const color: AcceptableColor = props?.[key]

    if (typeof color === 'function') {
      const { r, g, b } = rgbaFromHex(color(theme.value))
      return `${r} ${g} ${b}`
    }
    if (color in theme.value.schemes) {
      const _color = color.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return `var(--md-sys-color-${_color}-rgb)`
    } else if (!color.startsWith('#')) {
      return color
    }

    const { r, g, b } = rgbaFromHex(color)
    return `${r} ${g} ${b}`
  })
}

/**
 * The function returns a valuable rgb on-color from props.color
 * The props.color can be any key in theme.schemes, a function, or a hex color
 * (e.g. "primary" | "onPrimary") | (theme: Theme) => string | "string" (e.g. "red") | HexColor (e.g. "#fff")
 * @param {T extends { [k: string]: AcceptableColor | any }} props The props of component
 * @param {keyof T} key The key of props
 * @return {ComputedRef<string>} Return the computed string.
 * The value can be CSS variable, color in hex, or the color name in string (e.g. "red")
 */
const genOnRgbColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T,
  theme: Ref<Theme>
): ComputedRef<string> => {
  return computed(() => {
    const color: AcceptableColor = props?.[key]

    let computedColor: string
    if (typeof color === 'function') {
      computedColor = color(theme.value)
    } else if (color in theme.value.schemes) {
      const _color = color.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return color.startsWith('on')
        ? `var(--md-sys-color-${_color}-rgb)`
        : `var(--md-sys-color-on-${_color}-rgb)`
    } else if (color.startsWith('#')) {
      computedColor = color
    } else {
      return '#ffffff'
    }

    const tones = CorePalette.of(argbFromHex(computedColor)).a1
    const onColor =
      theme.value.mode === 'dark' ? tones.tone(20) : tones.tone(100)
    const { r, g, b } = rgbaFromArgb(onColor)
    return `${r} ${g} ${b}`
  })
}

/**
 * The function to compute color from props
 * The props.color can be "primary" | "secondary" | "tertiary" | "error" | (theme: Theme) => string | "string"
 * Use this function to get the final color value
 * @param {T extends { [k: string]: AcceptableColor | any }} props The props of component
 * @param {keyof T | undefined | null} key The key of props
 * Set the key to null or undefined to use default color
 * @return Return the computed string. The value can be CSS variable or color in hex
 */
export const useRgbColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T | undefined | null
) => {
  const theme = useTheme()
  if (
    !key ||
    !(key in props) ||
    !['string', 'function'].includes(typeof props[key])
  ) {
    return [ref(null), ref(null)]
  }

  const rgbColor = genRgbColor(props, key, theme)
  const onRgbColor = genOnRgbColor(props, key, theme)
  return [rgbColor, onRgbColor]
}
