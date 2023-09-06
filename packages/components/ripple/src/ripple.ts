import type { ExtractPropTypes } from 'vue'
import useTheme from '@fusion-ui/theme'

export interface RippleStyle {
  x: number
  y: number
  size: number
}

const theme = useTheme()
export const rippleProps = {
  color: {
    type: [String, Function],
    default: theme.color.white,
  },
  center: {
    type: Boolean,
    default: false,
  },
}

export type RippleProps = ExtractPropTypes<typeof rippleProps>
