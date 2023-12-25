import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const dialogContentProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type DialogContentProps = ExtractPropTypes<typeof dialogContentProps>
