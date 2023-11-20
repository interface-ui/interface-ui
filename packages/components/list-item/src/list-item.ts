import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const listItemProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type ListItemProps = ExtractPropTypes<typeof listItemProps>
