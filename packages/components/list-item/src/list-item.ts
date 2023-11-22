import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const listItemProps = buildProps({
  cs: {
    type: [Object, String],
  },
  indent: {
    type: [Number, String],
    default: 0,
  },
  selectable: {
    type: Boolean,
    default: true,
  },
  highlight: {
    type: Boolean,
    default: false,
  },
  highlightColor: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primaryContainer',
  },
})

export type ListItemProps = ExtractPropTypes<typeof listItemProps>
