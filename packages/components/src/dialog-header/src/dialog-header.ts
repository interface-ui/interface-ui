import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const dialogHeaderProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type DialogHeaderProps = ExtractPropTypes<typeof dialogHeaderProps>
