import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const listItemProps = buildProps({
  cs: {
    type: [Object, String],
  },
  indent: {
    type: Number,
    default: 0,
  },
})

export type ListItemProps = ExtractPropTypes<typeof listItemProps>
