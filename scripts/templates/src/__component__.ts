import type { ExtractPropTypes } from 'vue'
import { buildProps } from '@interface-ui/utils'

export const __component__Props = buildProps({
  cs: {
    type: [Object, String],
  },
})

export type __component__PascalCase__Props = ExtractPropTypes<
  typeof __component__Props
>
