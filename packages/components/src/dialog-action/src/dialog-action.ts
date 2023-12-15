import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const dialogActionProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type DialogActionProps = ExtractPropTypes<typeof dialogActionProps>
