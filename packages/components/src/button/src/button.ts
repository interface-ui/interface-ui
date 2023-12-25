import type { AcceptableColor } from '@interface-ui/theme'
import type { ExtractPropTypes, PropType } from 'vue'
import { type ComponentSizes, componentSizes } from '@interface-ui/constants'
import { buildProps } from '@interface-ui/utils'

export const buttonVariants = ['text', 'filled', 'outlined'] as const
export type ButtonVariants = typeof buttonVariants[number]
export const buttonShapes = ['rounded', 'fullRounded', 'square'] as const
export type ButtonShapes = typeof buttonShapes[number]
export const buttonHeight: Record<ComponentSizes, number> = {
  small: 32,
  medium: 40,
  large: 48,
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
    default: 'rounded',
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
  disableElevation: {
    type: Boolean,
    default: false,
  },
})

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
