import type { ExtractPropTypes } from 'vue'

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
    default: '#363637',
  },
  color: {
    type: String,
    default: '#363637',
  },
  status: {
    type: String,
    default: '',
    values: ['', 'success', 'danger', 'warning'],
  },

}
export type ProgressProps = ExtractPropTypes<typeof progressProps>
