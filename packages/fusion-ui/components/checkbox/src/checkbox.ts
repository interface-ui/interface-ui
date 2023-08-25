import type { ExtractPropTypes, PropType } from 'vue'

export type CheckboxSize = 'small' | 'medium' | 'large'

export const checkboxProps = {
  checked: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  size: {
    type: String as PropType<CheckboxSize>,
    default: 'medium',
  },
  enableRipple: {
    type: Boolean,
    default: true,
  },
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
