import type { ExtractPropTypes } from 'vue'

import {
  buildProps,
} from '../../../utils/vue/props'

export const avatarGroupProps = buildProps({
  max: {
    type: String || Number,
    default: '5',
  },
  total: {
    type: String || Number,
    default: '0',
  },
} as const)

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
