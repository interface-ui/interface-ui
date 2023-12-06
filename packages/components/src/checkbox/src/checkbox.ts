import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { type ComponentSizes, componentSizes } from '@fusion-ui-vue/constants'
import type { ExtractPropTypes, PropType } from 'vue'

export type CheckboxStatus = 'blank' | 'checked'

export const checkboxProps = {
  modelValue: {
    type: [Boolean, Array] as PropType<boolean | string[]>,
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ComponentSizes>,
    value: componentSizes,
    default: 'medium',
  },
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
