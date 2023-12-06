import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const fbaVariants = ['circle', 'extended'] as const
export type FbaVariants = typeof fbaVariants[number]

export const fbaProps = buildProps({
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primaryContainer',
  },
})

export type FbaProps = ExtractPropTypes<typeof fbaProps>
