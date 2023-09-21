import type { ComponentSize } from '@fusion-ui/constants'
import { componentSizes } from '@fusion-ui/constants'
import type {
  ThemeCallBack,
  ThemePaletteColor,
} from '@fusion-ui/theme/src/use-theme/theme'
import type { ExtractPropTypes, PropType } from 'vue'

export const iconButtonProps = {
  size: {
    type: String as PropType<ComponentSize>,
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
