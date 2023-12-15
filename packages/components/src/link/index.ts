import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Link from './src/index.vue'

export const InLink: SFCWithInstall<typeof Link> = withInstall(Link, 'InLink')
InLink.name = 'InLink'
export default InLink
export * from './src/link'
export type LinkInstance = InstanceType<typeof Link>
