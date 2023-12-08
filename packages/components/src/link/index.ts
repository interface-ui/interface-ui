import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Link from './src/index.vue'

export const FnLink: SFCWithInstall<typeof Link> = withInstall(Link, 'FnLink')
FnLink.name = 'FnLink'
export default FnLink
export * from './src/link'
export type LinkInstance = InstanceType<typeof Link>
