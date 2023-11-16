import type { Component, ExtractPropTypes, PropType } from 'vue'
import { buildProps } from '@fusion-ui-vue/utils'
import { alertProps } from '../../alert'

const messageXPositions = ['left', 'center', 'right'] as const
const messageYPositions = ['top', 'bottom'] as const
export interface MessagePositions {
  x: typeof messageXPositions[number]
  y: typeof messageYPositions[number]
}

const { cs: _cs, ...restProps } = alertProps

export const messageProps = buildProps({
  ...restProps,
  title: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  customIcon: {
    type: Object as PropType<Component>,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  transition: {
    type: String,
    default: 'all 0.5s ease',
  },
  position: {
    type: Object as PropType<Partial<MessagePositions>>,
    default: () => ({
      x: 'center',
      y: 'top',
    }),
    validator: (val: Partial<MessagePositions>) => {
      const { x, y } = val
      const xValid = x ? messageXPositions.includes(x) : true
      const yValid = y ? messageYPositions.includes(y) : true
      return xValid && yValid
    },
  },
})

export type MessageProps = ExtractPropTypes<typeof messageProps>
