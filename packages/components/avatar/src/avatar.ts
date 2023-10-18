import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import { buildProps, isNumber } from '@fusion-ui-vue/utils'

export const avatarVariants = ['circle', 'square', 'rounded'] as const
export type AvatarVariants = typeof avatarVariants[number]

export const avatarProps = buildProps({
  size: {
    type: [Number, String] as PropType<number | ComponentSizes>,
    values: componentSizes,
    default: 40,
    validator: (val: unknown): val is number => isNumber(val),
  },
  variant: {
    type: String as PropType<AvatarVariants>,
    values: avatarVariants,
    default: 'circle',
  },
  color: {
    type: String,
    default: 'var(--md-sys-color-on-surface)',
  },
  backgroundColor: {
    type: String,
    default: 'var(--fn-sys-color-disabled-level-1)',
  },
})

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
