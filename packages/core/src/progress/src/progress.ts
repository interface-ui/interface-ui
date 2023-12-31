import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const progressVariants = ['circular', 'linear'] as const
export type ProgressVariants = (typeof progressVariants)[number]
export const progressStatus = ['determinate', 'indeterminate'] as const
export type ProgressStatus = (typeof progressStatus)[number]

export const progressProps = buildProps({
  variant: {
    type: String as PropType<ProgressVariants>,
    values: progressVariants,
    default: 'circular',
  },
  status: {
    type: String as PropType<ProgressStatus>,
    values: progressStatus,
    default: 'indeterminate',
  },
  value: {
    type: [Number, String],
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  cs: {
    type: [Object, String],
  },
})

export type ProgressProps = ExtractPropTypes<typeof progressProps>
