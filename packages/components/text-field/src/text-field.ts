import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import type { ThemeCallBack, ThemePaletteColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const textFiedlVariants = ['outlined', 'filled', 'standard'] as const
export type TextFieldVariants = typeof textFiedlVariants[number]

export const textFieldProps = buildProps({
  modelValue: {
    type: String,
    required: true,
    default: '',
  },
  variant: {
    type: String as PropType<TextFieldVariants>,
    values: textFiedlVariants,
    default: 'outlined',
  },
  label: {
    type: String,
  },
  color: {
    type: [String, Function] as PropType<
      ThemeCallBack | ThemePaletteColor | string
    >,
    default: 'primary',
  },
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'medium',
  },
})

export type TextFieldProps = ExtractPropTypes<typeof textFieldProps>
