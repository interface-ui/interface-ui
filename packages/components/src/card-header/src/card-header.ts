import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const cardHeaderProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type CardHeaderProps = ExtractPropTypes<typeof cardHeaderProps>
