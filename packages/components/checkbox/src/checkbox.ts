import type { ExtractPropTypes, PropType } from 'vue'

export type CheckboxSize = 'small' | 'medium' | 'large'
export type CheckboxStatus = 'blank' | 'checked'

export const checkboxProps = {
  modelValue: {
    type: Boolean,
  },
  color: {
    type: String,
    default: '#3894ff',
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

export const iconType: Record<CheckboxStatus, string> = {
  blank: 'ic:baseline-check-box-outline-blank',
  checked: 'ic:baseline-check-box',
  // indeterminate: 'ic:baseline-indeterminate-check-box',
}

export const iconSize: Record<CheckboxSize, string> = {
  small: '20',
  medium: '24',
  large: '28',
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
