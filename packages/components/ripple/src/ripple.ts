import type { ExtractPropTypes, PropType } from 'vue'
import useTheme from '@fusion-ui/theme'
import type {
  ThemeCallBack,
  ThemePaletteColor,
} from 'packages/theme/src/use-theme/theme'

const theme = useTheme()
export interface RippleStyle {
  x: number
  y: number
  size: number
}

export const rippleProps = {
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
    default: theme.colors.white,
  },
  center: {
    type: Boolean,
    default: false,
  },
}

export type RippleProps = ExtractPropTypes<typeof rippleProps>
