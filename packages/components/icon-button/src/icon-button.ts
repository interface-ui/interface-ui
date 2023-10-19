import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import type { ThemeCallBack, ThemePaletteColor } from '@fusion-ui-vue/theme'
import type { ExtractPropTypes, PropType } from 'vue'

export const iconButtonProps = {
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
    default: 'primary',
  },
}

export type IconButtonProps = ExtractPropTypes<typeof iconButtonProps>
