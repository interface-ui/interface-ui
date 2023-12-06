import type { ExtractPropTypes, PropType } from 'vue'
export const status = ['success', 'danger', 'warning'] as const
export type progressStatus = typeof status[number]
export type ComponentState = 'info' | 'success' | 'warning' | 'danger'

export const progressProps = {
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100,
  },
  type: {
    type: String,
    default: 'line',
  },
  height: {
    type: String,
    default: '0.5rem',
  },
  intermediate: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 2,
  },
  width: {
    type: Number,
    default: 120,
  },
  strokeWidth: {
    type: Number,
    default: 6,
  },
  textInside: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: '#f5f5f6',
  },
  barColor: {
    type: String,
    default: '#3894ff',
  },
  color: {
    type: String,
    default: '#4987f8',
  },
  status: {
    type: String as PropType<progressStatus>,
    default: '',

  },
  striped: {
    type: Boolean,
    default: false,
  },
  stripedFlow: {
    type: Boolean,
    default: false,
  },

}
export type ProgressProps = ExtractPropTypes<typeof progressProps>
