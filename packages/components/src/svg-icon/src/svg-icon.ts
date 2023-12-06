import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
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
  component: {
    type: [Object, String] as PropType<string | Component>,
    default: 'svg',
  },
  cs: {
    type: [Object, String],
  },
})

export type SvgIconProps = ExtractPropTypes<typeof svgIconProps>
