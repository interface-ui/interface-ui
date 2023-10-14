import type { ExtractPropTypes, PropType } from 'vue'
import type { ThemeCallBack, ThemePaletteColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'

export interface RippleStyle {
  x: number
  y: number
  size: number
}

export const rippleProps = buildProps({
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
    default: 'var(--fn-sys-color-ripple)',
  },
  center: {
    type: Boolean,
    default: false,
  },
})

export type RippleProps = ExtractPropTypes<typeof rippleProps>
