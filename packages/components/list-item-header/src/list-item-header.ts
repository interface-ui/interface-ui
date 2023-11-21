import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const listItemHeaderProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type ListItemHeaderProps = ExtractPropTypes<typeof listItemHeaderProps>
