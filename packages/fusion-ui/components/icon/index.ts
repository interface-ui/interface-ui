import { withInstall } from '../install'
import Icon from './src/index.vue'

export const FnIcon = withInstall(Icon, 'FnIcon')
FnIcon.name = 'FnIcon'
export default FnIcon
export * from './src/icon'
