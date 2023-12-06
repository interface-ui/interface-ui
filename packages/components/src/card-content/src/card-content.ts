import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const cardContentProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type CardContentProps = ExtractPropTypes<typeof cardContentProps>
