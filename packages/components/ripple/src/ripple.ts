import type { ExtractPropTypes } from 'vue'

export interface RippleStyle {
  x: number
  y: number
  size: number
}

export const rippleProps = {
  color: {
    type: [String, Function],
  },
  center: {
    type: Boolean,
    default: false,
  },
}

export type RippleProps = ExtractPropTypes<typeof rippleProps>
