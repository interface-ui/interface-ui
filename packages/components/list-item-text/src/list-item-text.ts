import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const listItemTextProps = buildProps({
  headline: {
    type: String,
    required: true,
  },
  supportingText: {
    type: String,
  },
})

export type ListItemTextProps = ExtractPropTypes<typeof listItemTextProps>
