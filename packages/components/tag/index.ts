import { withInstall } from '../install'
import Tag from './src/index.vue'

export const FnTag = withInstall(Tag, 'FnTag')
FnTag.name = 'FnTag'
export default FnTag
export * from './src/tag'
