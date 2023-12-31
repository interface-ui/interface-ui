import type { ComponentSizes } from '@interface-ui/constants'
import { componentSizes } from '@interface-ui/constants'
import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const fabVariants = ['circle', 'extended'] as const
export type FbaVariants = (typeof fabVariants)[number]

export const fabProps = buildProps({
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primaryContainer',
  },
  cs: {
    type: [Object, String],
  },
})

export type FabProps = ExtractPropTypes<typeof fabProps>
