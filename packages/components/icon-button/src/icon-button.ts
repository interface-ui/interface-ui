import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import type { AcceptableColor } from '@fusion-ui-vue/theme'
import type { Component, ExtractPropTypes, PropType } from 'vue'

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
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'button',
  },
}

export type IconButtonProps = ExtractPropTypes<typeof iconButtonProps>
