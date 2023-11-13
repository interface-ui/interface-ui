import { useTheme } from '@fusion-ui-vue/theme'
import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'
import {
  CorePalette,
  argbFromHex,
  hexFromArgb,
} from '@material/material-color-utilities'
import type { AcceptableColor, Theme } from '../core'

/**
 * The function returns a valuable color from props.color
 * The props.color can be any key in theme.schemes, a function, or a hex color
 * (e.g. "primary" | "onPrimary") | (theme: Theme) => string | "string" (e.g. "red") | HexColor (e.g. "#fff")
 * @param {T extends { [k: string]: AcceptableColor | any }} props The props of component
 * @param {keyof T} key The key of props
 * @return {ComputedRef<string>} Return the computed string.
 * The value can be CSS variable, color in hex, or the color name in string (e.g. "red")
 */
const genColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T,
  theme: Ref<Theme>
): ComputedRef<string> => {
  return computed(() => {
    const color: AcceptableColor = props?.[key]

    if (typeof color === 'function') {
      return color(theme.value)
    }
    if (color in theme.value.schemes) {
      const _color = color.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return `var(--md-sys-color-${_color})`
    }
    return color
  })
}

/**
 * The function returns a valuable on-color from props.color
 * The props.color can be any key in theme.schemes, a function, or a hex color
 * (e.g. "primary" | "onPrimary") | (theme: Theme) => string | "string" (e.g. "red") | HexColor (e.g. "#fff")
 * @param {T extends { [k: string]: AcceptableColor | any }} props The props of component
 * @param {keyof T} key The key of props
 * @return {ComputedRef<string>} Return the computed string.
 * The value can be CSS variable, color in hex, or the color name in string (e.g. "red")
 */
const genOnColor = <T extends { [k: string]: AcceptableColor | any }>(
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
        ? `var(--md-sys-color-${_color})`
        : `var(--md-sys-color-on-${_color})`
    } else if (color.startsWith('#')) {
      computedColor = color
    } else {
      return '#ffffff'
    }

    const tones = CorePalette.of(argbFromHex(computedColor)).a1
    const onColor =
      theme.value.mode === 'dark' ? tones.tone(20) : tones.tone(100)
    return hexFromArgb(onColor)
  })
}

/**
 * The function returns the pair of valuable [color, onColor] from props.color
 * The props.color can be any key in theme.schemes, a function, or a hex color
 * (e.g. "primary" | "onPrimary") | (theme: Theme) => string | "string" (e.g. "red") | HexColor (e.g. "#fff")
 * @param {T extends { [k: string]: AcceptableColor | any }} props The props of component
 * @param {keyof T} key The key of props
 * @return {Ref<null>[] | ComputedRef<string>[]} The pair of color and onColor, [color, onColor]
 */
export const useColor = <T extends { [k: string]: AcceptableColor | any }>(
  props: T,
  key: keyof T
): Ref<null>[] | ComputedRef<string>[] => {
  const theme = useTheme()
  if (
    !key ||
    !(key in props) ||
    !['string', 'function'].includes(typeof props[key])
  ) {
    return [ref(null), ref(null)]
  }

  const color = genColor(props, key, theme)
  const onColor = genOnColor(props, key, theme)
  return [color, onColor]
}
