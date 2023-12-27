import type { ExtractPropTypes, PropType } from 'vue'
import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'

export interface RippleStyle {
  x: number
  y: number
  size: number
}

export const rippleProps = buildProps({
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'inverseOnSurface',
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
