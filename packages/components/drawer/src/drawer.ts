import type { ExtractPropTypes } from 'vue'
import {
  buildProps,
} from '@fusion-ui/utils/vue/props'
import { componentDirection, componentSizes } from '@fusion-ui/constants'

export const avatarProps = buildProps({
  size: {
    type: [Number,],
    values: componentSizes,
    default: '',
  },
  direction: {
    type: String,
    values: componentDirection,
    default: 'left',
  },
  type: {
    type: String,
    default: 'secondary',
    values: ['primary', 'error', 'secondary', 'tertiary'],
    validator: value =>
      ['primary', 'error', 'secondary', 'tertiary'].includes(value),
  },

} as const)
// type: definePropType<StandardLonghandProperties['objectFit']>(String),
export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
}
