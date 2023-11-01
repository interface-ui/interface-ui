import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const svgIconProps = buildProps({
  size: {
    type: [Number, String],
    default: 'inherit',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'inherit',
  },
  cs: {
    type: [Object, String, Array] as PropType<TemplateStringsArray>,
  },
})

export type SvgIconProps = ExtractPropTypes<typeof svgIconProps>
