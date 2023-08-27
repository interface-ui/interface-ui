import { withInstall } from '../install'
import Link from './src/index.vue'

export const FnLink = withInstall(Link, 'FnLink')
FnLink.name = 'FnLink'
export default FnLink
