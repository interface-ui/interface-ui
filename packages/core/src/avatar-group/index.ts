import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import AvatarGroup from './src/index'

export const InAvatarGroup: SFCWithInstall<typeof AvatarGroup> = withInstall(
  AvatarGroup,
  'InAvatarGroup'
)
InAvatarGroup.name = 'InAvatarGroup'
export default InAvatarGroup
export * from './src/avatar-group'
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>
