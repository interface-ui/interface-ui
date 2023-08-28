import type { ExtractPropTypes } from 'vue'
import type { StandardLonghandProperties } from 'csstype'
import { definePropType } from '../../../utils/vue/props/runtime'
import { componentSizes } from '../../../constans/size'
import { isNumber } from '../../../utils/types'

import {
  buildProps,
} from '../../../utils/vue/props'

export const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: '',
    validator: (val: unknown): val is number => isNumber(val),
  },
  width: {
    type: [Number, String],
    default: 40,
  },
  height: {
    type: [Number, String],
    default: 40,
  },

  type: {
    type: String,
    default: 'secondary',
    values: ['primary', 'error', 'secondary', 'tertiary'],
    validator: value =>
      ['primary', 'error', 'secondary', 'tertiary'].includes(value),
  },
  shape: {
    type: String,
    default: 'circle',
    values: ['circle', 'square', 'rounded'],
    validator: value =>
      ['circle', 'square', 'rounded'].includes(value),
  },
  src: {
    type: String,
    default: '',
  },
  alt: String,
  srcSet: String,
  background: String,
  color: {
    type: String,
    default: 'white',
  },
  fit: {
    type: definePropType<StandardLonghandProperties['objectFit']>(String),
    default: 'cover',
  },
} as const)
// type: definePropType<StandardLonghandProperties['objectFit']>(String),
export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
}
