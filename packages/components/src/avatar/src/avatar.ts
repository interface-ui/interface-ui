import type { ExtractPropTypes, PropType } from 'vue'
import { buildProps } from '@fusion-ui-vue/utils'
import { isString } from '@vue/shared'
import { isNumber } from '@vueuse/core'

import type { AcceptableColor } from '@fusion-ui-vue/theme'

export const avatarVariants = ['circle', 'square', 'rounded'] as const
export type AvatarVariants = typeof avatarVariants[number]

export const avatarProps = buildProps({
  size: {
    type: [String, Number] as PropType<string | number>,
    default: 40,
    validator: (val: unknown): val is string | number => {
      return isNumber(val) || (isString(val) && !isNaN(parseFloat(val)))
    },
  },
  variant: {
    type: String as PropType<AvatarVariants>,
    values: avatarVariants,
    default: 'circle',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'onSurface',
  },
  background: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'surfaceVariant',
  },
  cs: {
    type: [Object, String],
  },
})

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
