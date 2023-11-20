import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

const popoverXPlacements = ['left', 'center', 'right'] as const
const popoverYPlacements = ['top', 'bottom'] as const
export interface PopoverPlacements {
  x: typeof popoverXPlacements[number]
  y: typeof popoverYPlacements[number]
}

export const popoverProps = buildProps({
  open: {
    type: Boolean,
    required: true,
    default: false,
  },
  anchor: {
    type: [Object, null, undefined] as PropType<HTMLElement | undefined | null>,
    required: true,
  },
  backdrop: {
    type: Boolean,
    default: false,
  },
  cs: {
    type: [Object, String],
  },
  placement: {
    type: Object as PropType<Partial<PopoverPlacements>>,
    default: () => ({
      x: 'left',
      y: 'bottom',
    }),
    validator: (val: Partial<PopoverPlacements>) => {
      const { x, y } = val
      const xValid = x ? popoverXPlacements.includes(x) : true
      const yValid = y ? popoverYPlacements.includes(y) : true
      return xValid && yValid
    },
  },
})

export type PopoverProps = ExtractPropTypes<typeof popoverProps>
