import { withInstall } from '../install'
import AvatarGroup from './src/index.vue'

export const FnAvatarGroup = withInstall(AvatarGroup, 'FnAvatarGroup')
FnAvatarGroup.name = 'FnAvatarGroup'
export default FnAvatarGroup
