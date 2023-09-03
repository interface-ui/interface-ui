import type { ExtractPropTypes } from 'vue'
import theme from '@fusion-ui/theme'

export interface RippleStyle {
  x: number
  y: number
  size: number
}

export const rippleProps = {
  color: {
    type: String,
    default: theme.palette.white,
  },
  center: {
    type: Boolean,
    default: false,
  },
}

export type RippleProps = ExtractPropTypes<typeof rippleProps>
