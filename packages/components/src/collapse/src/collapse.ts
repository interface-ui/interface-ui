import type { ComponentOrientations } from '@interface-ui/constants'
import { componentOrientations } from '@interface-ui/constants'
import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const collapseProps = buildProps({
  orientation: {
    type: String as PropType<ComponentOrientations>,
    values: componentOrientations,
    default: 'vertical',
  },
})

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
