import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const cardContentProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type CardContentProps = ExtractPropTypes<typeof cardContentProps>
