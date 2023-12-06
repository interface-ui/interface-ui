import { withInstall } from '@fusion-ui-vue/utils'
import AvatarGroup from './src/index'

export const FnAvatarGroup = withInstall(AvatarGroup, 'FnAvatarGroup')
FnAvatarGroup.name = 'FnAvatarGroup'
export default FnAvatarGroup
export * from './src/avatar-group'
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>
