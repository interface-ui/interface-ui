import type { ComponentSizes } from '@interface-ui/constants'
import { componentSizes } from '@interface-ui/constants'
import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const switchHeight: Record<ComponentSizes, number> = {
  small: 28,
  medium: 32,
  large: 36,
}

export const switchProps = buildProps({
  modelValue: {
    type: Boolean,
    default: '',
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
  cs: {
    type: [Object, String],
  },
  disabledIcon: {
    type: Boolean,
    default: false,
  },
})

export type SwitchProps = ExtractPropTypes<typeof switchProps>
