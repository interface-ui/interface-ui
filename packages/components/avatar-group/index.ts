import { withInstall } from '../install'
import AvatarGroup from './src/index.vue'

export const FnAvatarGroup = withInstall(AvatarGroup, 'FnAvatarGroup')
FnAvatarGroup.name = 'FnAvatarGroup'
export default FnAvatarGroup
export * from './src/avatar-group'
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>
