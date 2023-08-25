import { withInstall } from '../install'
import AvatarGroup from './src/index.vue'

export const FnAvatarGroup = withInstall(AvatarGroup, 'FnAvatar')
FnAvatarGroup.name = 'FnAvatarGroup'
export default FnAvatarGroup
