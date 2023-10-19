import type { ThemeCallBack, ThemePaletteColor } from '@fusion-ui-vue/theme'
import { type ComponentSizes, componentSizes } from '@fusion-ui-vue/constants'
import type { ExtractPropTypes, PropType } from 'vue'
import { buildProps } from '@fusion-ui-vue/utils'

export const SwitchPropsNew = buildProps({
  modelValue: {
    type: Boolean,
    required: true,
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
})

export type SwitchPropsNew1 = ExtractPropTypes<typeof SwitchPropsNew>
