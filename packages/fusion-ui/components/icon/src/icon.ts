import type { ExtractPropTypes } from 'vue'

export const iconProps = {
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
}

export type LIconProps = ExtractPropTypes<typeof iconProps>
