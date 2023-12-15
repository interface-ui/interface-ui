import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const svgIconProps = buildProps({
  size: {
    type: [Number, String],
    default: 'inherit',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'inherit',
  },
  fill: {
    type: [String, Function] as PropType<AcceptableColor>,
  },
  component: {
    type: [Object, String] as PropType<string | Component>,
    default: 'svg',
  },
  cs: {
    type: [Object, String],
  },
})

export type SvgIconProps = ExtractPropTypes<typeof svgIconProps>
