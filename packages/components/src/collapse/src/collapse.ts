import type { ComponentOrientations } from '@fusion-ui-vue/constants'
import { componentOrientations } from '@fusion-ui-vue/constants'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const collapseProps = buildProps({
  orientation: {
    type: String as PropType<ComponentOrientations>,
    values: componentOrientations,
    default: 'vertical',
  },
})

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
