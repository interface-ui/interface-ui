import { withInstall } from '@fusion-ui-vue/utils'
import Link from './src/index.vue'

export const FnLink = withInstall(Link, 'FnLink')
FnLink.name = 'FnLink'
export * from './src/link'
export default FnLink
