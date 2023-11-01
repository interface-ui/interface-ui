import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const inputBaseProps = buildProps({
  modelValue: {
    type: String,
    required: true,
    default: '',
  },
  cs: {
    type: [Object, String, Array] as PropType<TemplateStringsArray>,
  },
})

export type InputBaseProps = ExtractPropTypes<typeof inputBaseProps>
