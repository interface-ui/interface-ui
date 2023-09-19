import type {
  ThemeCallBack,
  ThemePaletteColor,
} from '@fusion-ui/theme/src/use-theme/theme'
import type { ExtractPropTypes, PropType } from 'vue'
import { type ComponentSize, componentSizes } from '@fusion-ui/constants'

export const buttonVariants = ['text', 'filled', 'outlined'] as const
export type ButtonVariant = typeof buttonVariants[number]
export const buttonShapes = ['rounded', 'fullRounded', 'square'] as const
export type ButtonShape = typeof buttonShapes[number]

export const buttonProps = {
  variant: {
    type: String as PropType<ButtonVariant>,
    values: buttonVariants,
    default: 'filled',
  },
  shape: {
    type: String as PropType<ButtonShape>,
    values: buttonShapes,
    default: 'rounded',
  },
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
  disableRipple: {
    type: Boolean,
    default: false,
  },
  disableElevation: {
    type: Boolean,
    default: false,
  },
}

/** ButtonProps 组件 props 类型 */
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
