import type { ExtractPropTypes } from 'vue'
import type { StandardLonghandProperties } from 'csstype'
import { componentSizes } from '../../../constans/size'
import { isNumber } from '../../../utils/types'

import {
  buildProps,
  definePropType,
} from '../../../utils/vue/props'

export const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: 'default',
    validator: (val: unknown): val is number => isNumber(val),
  },
  width: {
    type: Number,
    default: 24,
    validator: (val: unknown): val is number => isNumber(val),
  },
  height: {
    type: Number,
    default: 24,
    validator: (val: unknown): val is number => isNumber(val),
  },

  shape: {
    type: String,
    values: ['circle', 'square'],
    default: 'circle',
  },

  type: {
    type: String,
    default: 'secondary',
    values: ['primary', 'error', 'secondary', 'tertiary'],
    validator: value =>
      ['primary', 'error', 'secondary', 'tertiary'].includes(value),
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

export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
}
