import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const cardHeaderProps = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type CardHeaderProps = ExtractPropTypes<typeof cardHeaderProps>
