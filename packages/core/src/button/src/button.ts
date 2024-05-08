import type { AcceptableColor } from '@interface-ui/theme'
import type { ExtractPropTypes, PropType } from 'vue'
import { type ComponentSizes, componentSizes } from '@interface-ui/constants'
import { buildProps } from '@interface-ui/utils'

export const buttonVariants = [
  'elevated',
  'filled',
  'tonal',
  'outlined',
  'text',
] as const
export type ButtonVariants = (typeof buttonVariants)[number]
export const buttonShapes = ['rounded', 'arc', 'square'] as const
export type ButtonShapes = (typeof buttonShapes)[number]
export const buttonHeight: Record<ComponentSizes, number> = {
  small: 32,
  medium: 40,
  large: 48,
}
export const textMapping: Record<ComponentSizes, string> = {
  small: 'label-medium',
  medium: 'label-large',
  large: 'title-medium',
}

export const buttonProps = buildProps({
  variant: {
    type: String as PropType<ButtonVariants>,
    values: buttonVariants,
    default: 'filled',
  },
  shape: {
    type: String as PropType<ButtonShapes>,
    values: buttonShapes,
    default: 'arc',
  },
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  disableRipple: {
    type: Boolean,
    default: false,
  },
  cs: {
    type: [Object, String],
  },
})

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
