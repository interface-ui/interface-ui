import type { ExtractPropTypes, PropType } from 'vue'
import { type ComponentSizes, componentSizes } from '@fusion-ui-vue/constants'
import type { ThemeCallBack, ThemePaletteColor } from '@fusion-ui-vue/theme'

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
  size: {
    type: String as PropType<ComponentSizes>,
    value: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
    default: 'primary',
  },
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
