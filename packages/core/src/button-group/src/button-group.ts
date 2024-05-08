import type { ExtractPropTypes, PropType } from 'vue'
import { buttonProps } from '../../button'

export const buttonGroupOrientations = ['horizontal', 'vertical'] as const
export type ButtonGroupOrientations = (typeof buttonGroupOrientations)[number]
export const BUTTON_GROUP_PROVIDE_KEY = Symbol('buttonGroup')

export const buttonGroupProps = {
  ...buttonProps,
  orientation: {
    type: String as PropType<ButtonGroupOrientations>,
    values: buttonGroupOrientations,
    default: 'horizontal',
  },
}

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
