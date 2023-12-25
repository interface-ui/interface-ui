import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type { ListAlignItems } from '../../list'
import { listAlignItems } from '../../list'

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
  alignItems: {
    type: String as PropType<ListAlignItems>,
    values: listAlignItems,
    default: 'center',
  },
  highlight: {
    type: Boolean,
    default: false,
  },
  highlightColor: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'secondaryContainer',
  },
})

export type ListItemProps = ExtractPropTypes<typeof listItemProps>
