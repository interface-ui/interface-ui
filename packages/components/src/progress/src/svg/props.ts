import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { ProgressStatus } from '../progress'
import { progressStatus } from '../progress'

export const progressCircleSvgProps = buildProps({
  radius: {
    type: Number,
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    required: true,
  },
  status: {
    type: String as PropType<ProgressStatus>,
    values: progressStatus,
    required: true,
  },
  value: {
    type: [Number, String],
  },
})

export type ProgressSvgCircleProps = ExtractPropTypes<
  typeof progressCircleSvgProps
>
