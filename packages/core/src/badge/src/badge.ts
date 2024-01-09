import type { ComponentDirections } from '@interface-ui/constants'
import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const badgeVariants = ['dot', 'content'] as const
export type BadgeVariants = (typeof badgeVariants)[number]

export const badgeProps = buildProps({
  content: {
    type: [String, Number, Object] as PropType<string | number | Component>,
  },
  variant: {
    type: String as PropType<BadgeVariants>,
    values: badgeVariants,
    default: 'content',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'error',
  },
  max: {
    type: [String, Number],
  },
  overlap: {
    type: Boolean,
    default: false,
  },
  xAlign: {
    type: String as PropType<Extract<ComponentDirections, 'left' | 'right'>>,
    values: ['left', 'right'],
    default: 'right',
  },
  yAlign: {
    type: String as PropType<Extract<ComponentDirections, 'top' | 'bottom'>>,
    values: ['top', 'bottom'],
    default: 'top',
  },
  cs: {
    type: [Object, String],
  },
})

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
