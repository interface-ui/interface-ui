import type {
  ThemeCallBack,
  ThemePaletteColor,
} from '@fusion-ui/theme/src/use-theme/theme'
import type { ComponentSize } from '@fusion-ui/constants'
import type { ExtractPropTypes, PropType } from 'vue'

export type CheckboxStatus = 'blank' | 'checked'

export const checkboxProps = {
  modelValue: {
    type: Boolean,
  },
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
    default: 'primary',
  },
  size: {
    type: String as PropType<ComponentSize>,
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

export const iconSize: Record<ComponentSize, string> = {
  small: '20',
  medium: '24',
  large: '28',
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
