import type { ExtractPropTypes, PropType } from 'vue'
import { type ComponentSize, componentSizes } from '@fusion-ui/constants'
import type { ThemeCallBack, ThemePaletteColor } from '@fusion-ui/theme'

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
  size: {
    type: String as PropType<ComponentSize>,
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
