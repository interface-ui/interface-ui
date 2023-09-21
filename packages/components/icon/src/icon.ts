import type {
  ThemeCallBack,
  ThemePaletteColor,
} from 'packages/theme/src/use-theme/theme'
import type { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '24',
  },
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
  },
}

export type LIconProps = ExtractPropTypes<typeof iconProps>
