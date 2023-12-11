import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const dialogVariants = ['basic', 'full-screen'] as const
export type DialogVariants = typeof dialogVariants[number]

export const dialogProps = buildProps({
  open: {
    type: Boolean,
    required: true,
    default: false,
  },
  backdrop: {
    type: Boolean,
    default: true,
  },
  keepMounted: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<DialogVariants>,
    values: dialogVariants,
    default: 'basic',
  },
  cs: {
    type: [Object, String],
  },
})

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type DialogEmits = {
  close: []
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
