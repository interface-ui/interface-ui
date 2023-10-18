import type { ThemeCallBack, ThemePaletteColor } from '@fusion-ui-vue/theme'
import { type ComponentSizes, componentSizes } from '@fusion-ui-vue/constants'
import type { ExtractPropTypes, PropType } from 'vue'

export type CheckboxStatus = 'blank' | 'checked'

export const checkboxProps = {
  modelValue: {
    type: [Boolean, Array] as PropType<boolean | string[]>,
  },
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
    default: 'primary',
  },
  size: {
    type: String as PropType<ComponentSizes>,
    value: componentSizes,
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

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
