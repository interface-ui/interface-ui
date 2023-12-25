import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { ProgressStatus } from '../progress'
import { progressStatus } from '../progress'

export const progressCircleSvgProps = buildProps({
  radius: {
    type: Number,
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
