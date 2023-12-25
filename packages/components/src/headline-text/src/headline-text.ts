import { buildProps } from '@interface-ui/utils'
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
