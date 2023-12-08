import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import AvatarGroup from './src/index'

export const FnAvatarGroup: SFCWithInstall<typeof AvatarGroup> = withInstall(
  AvatarGroup,
  'FnAvatarGroup'
)
FnAvatarGroup.name = 'FnAvatarGroup'
export default FnAvatarGroup
export * from './src/avatar-group'
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>
