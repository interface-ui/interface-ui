import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const listItemHeaderProps = buildProps({
  cs: {
    type: [Object, String],
  },
  indent: {
    type: [Number, String],
    default: 0,
  },
})

export type ListItemHeaderProps = ExtractPropTypes<typeof listItemHeaderProps>
