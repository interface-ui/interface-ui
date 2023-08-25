import { ExtractPropTypes } from 'vue'

export type RippleStyle = { x: number; y: number; size: number }

export const rippleProps = {
  color: {
    type: String,
    default: '#fff',
    required: true,
  },
  center: {
    type: Boolean,
    default: false,
  },
}

export type RippleProps = ExtractPropTypes<typeof rippleProps>
