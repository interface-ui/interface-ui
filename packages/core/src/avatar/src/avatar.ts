import type { ExtractPropTypes, PropType } from 'vue'
import { buildProps, isNumber, isString } from '@interface-ui/utils'
import type { AcceptableColor } from '@interface-ui/theme'

export const avatarVariants = ['circle', 'square', 'rounded'] as const
export type AvatarVariants = (typeof avatarVariants)[number]

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
    default: 'surfaceVariant',
  },
  cs: {
    type: [Object, String],
  },
})

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
