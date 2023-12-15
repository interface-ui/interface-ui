import type { ComponentSizes } from '@interface-ui/constants'
import { componentSizes } from '@interface-ui/constants'
import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
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
