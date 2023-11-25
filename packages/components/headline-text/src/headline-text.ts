import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const headlineTextProps = buildProps({
  headline: {
    type: String,
    required: true,
  },
  supportingText: {
    type: String,
  },
})

export type HeadlineTextProps = ExtractPropTypes<typeof headlineTextProps>
