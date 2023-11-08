import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import type { AcceptableColor } from '@fusion-ui-vue/theme'
import type { ExtractPropTypes, PropType } from 'vue'

export const iconButtonProps = {
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  cs: {
    type: [Object, String],
  },
}

export type IconButtonProps = ExtractPropTypes<typeof iconButtonProps>
