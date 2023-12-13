import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const dialogActionProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type DialogActionProps = ExtractPropTypes<typeof dialogActionProps>
