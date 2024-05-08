import type { ComponentSizes } from '@interface-ui/constants'
import { componentSizes } from '@interface-ui/constants'
import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const textFieldVariants = ['outlined', 'filled', 'standard'] as const
export type TextFieldVariants = (typeof textFieldVariants)[number]

export const textFieldProps = buildProps({
  modelValue: {
    type: String,
    required: true,
    default: '',
  },
  variant: {
    type: String as PropType<TextFieldVariants>,
    values: textFieldVariants,
    default: 'outlined',
  },
  label: {
    type: String,
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'large',
  },
  error: {
    type: Boolean,
    default: false,
  },
  supportingText: {
    type: String,
  },
  cs: {
    type: [String, Array, Object] as PropType<TemplateStringsArray>,
  },
})

export type TextFieldProps = ExtractPropTypes<typeof textFieldProps>
