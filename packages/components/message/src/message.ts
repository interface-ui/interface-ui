import type { Component, ExtractPropTypes, PropType, VNode } from 'vue'
import { buildProps } from '@fusion-ui-vue/utils'
import { alertProps } from '../../alert'

const messageXPlacements = ['left', 'center', 'right'] as const
const messageYPlacements = ['top', 'bottom'] as const
export interface MessagePositions {
  x: typeof messageXPlacements[number]
  y: typeof messageYPlacements[number]
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
  action: {
    type: Object as PropType<Component | VNode>,
  },
  actionEvent: {
    type: Function as PropType<
      (e: VNode, remove: (c: string | number) => void) => void
    >,
    default: () => {},
  },
  duration: {
    type: Number,
    default: 2000,
  },
  transition: {
    type: String,
    default: 'all 0.5s ease',
  },
  placement: {
    type: Object as PropType<Partial<MessagePositions>>,
    default: () => ({
      x: 'center',
      y: 'top',
    }),
    validator: (val: Partial<MessagePositions>) => {
      const { x, y } = val
      const xValid = x ? messageXPlacements.includes(x) : true
      const yValid = y ? messageYPlacements.includes(y) : true
      return xValid && yValid
    },
  },
})

export type MessageProps = ExtractPropTypes<typeof messageProps>
