import { withInstall } from '../install'
import Link from './src/index.vue'

export const FnLink = withInstall(Link, 'FnLink')
FnLink.name = 'FnLink'
export * from './src/link'
export default FnLink
