import type { ExtractPropTypes, PropType } from 'vue'
import { type ComponentSizes, componentSizes } from '@interface-ui/constants'
import type { AcceptableColor } from '@interface-ui/theme'

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
  size: {
    type: String as PropType<ComponentSizes>,
    value: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
