import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Avatar from './src/index.vue'

export const InAvatar: SFCWithInstall<typeof Avatar> = withInstall(
  Avatar,
  'InAvatar'
)
InAvatar.name = 'InAvatar'
export default InAvatar
export * from './src/avatar'
export type AvatarInstance = InstanceType<typeof Avatar>
