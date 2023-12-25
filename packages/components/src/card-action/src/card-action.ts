import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const cardActionProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type CardActionProps = ExtractPropTypes<typeof cardActionProps>
