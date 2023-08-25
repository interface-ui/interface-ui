import type { ExtractPropTypes } from 'vue'

import {
  buildProps,
} from '../../../utils/vue/props'

export const avatarGroupProps = buildProps({
  max: {
    type: String,
    default: '0',
  },
  total: {
    type: String,
    default: '',
  },
} as const)

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
