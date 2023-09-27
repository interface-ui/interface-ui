import type { ExtractPropTypes, PropType } from 'vue'
import { buttonProps } from '../../button'

export const buttonGroupOrientation = ['horizontal', 'vertical'] as const
export type ButtonGroupOrientation = typeof buttonGroupOrientation[number]

export const buttonGroupProps = {
  ...buttonProps,
  orientation: {
    type: String as PropType<ButtonGroupOrientation>,
    values: buttonGroupOrientation,
    default: 'horizontal',
  },
}

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
