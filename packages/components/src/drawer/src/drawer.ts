import type { ExtractPropTypes, PropType } from 'vue'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ComponentDirections } from '@fusion-ui-vue/constants'
import { componentDirections } from '@fusion-ui-vue/constants'
import type { AcceptableColor } from '@fusion-ui-vue/theme'

export const drawerVariants = ['persistent', 'temporary'] as const
export type DrawerVariants = typeof drawerVariants[number]

export const drawerProps = buildProps({
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
    type: String as PropType<DrawerVariants>,
    values: drawerVariants,
    default: 'temporary',
  },
  background: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'surface',
  },
  placement: {
    type: String as PropType<ComponentDirections>,
    values: componentDirections,
    default: 'right',
  },
  cs: {
    type: [Object, String],
  },
} as const)

export type DrawerProps = ExtractPropTypes<typeof drawerProps>
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type DrawerEmits = {
  close: []
}
