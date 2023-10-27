import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const iconProps = buildProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '24',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
  },
})

export type IconProps = ExtractPropTypes<typeof iconProps>
