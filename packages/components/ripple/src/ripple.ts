import type { ExtractPropTypes, PropType } from 'vue'
import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'

export interface RippleStyle {
  x: number
  y: number
  size: number
}

export const rippleProps = buildProps({
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'var(--fn-sys-color-ripple)',
  },
  center: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 600,
  },
})

export type RippleProps = ExtractPropTypes<typeof rippleProps>
