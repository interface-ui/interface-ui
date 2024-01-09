import type { ExtractPropTypes } from 'vue'
import { buildProps } from '@interface-ui/utils'
import { avatarProps } from '../../avatar'

export const avatarGroupProps = buildProps({
  ...avatarProps,
  max: {
    type: [String, Number],
    default: Infinity,
  },
  avatarBorder: {
    type: String,
    default: 'var(--md-sys-color-background)',
  },
})

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
