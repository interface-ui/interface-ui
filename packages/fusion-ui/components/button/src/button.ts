import type { ExtractPropTypes, PropType } from 'vue'

import type { ComponentState } from '../../type'

export type ButtonNativeType = 'button' | 'reset' | 'submit'
export type ButtonShape = 'round' | 'pill' | 'circle' | 'plain'
export type ButtonSize = 'mini' | 'small' | 'medium' | 'large'
export type ButtonType =
    | 'default'
    | 'primary'
    | 'link'
    | 'dashed'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: '',
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'round',
  },
  state: {
    type: String as PropType<ComponentState>,
    default: '',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: '',
  },
  disabled: Boolean,
}

/** ButtonProps 组件 props 类型 */
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
