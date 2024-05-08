import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Fab from './src/index.vue'

export const InFab: SFCWithInstall<typeof Fab> = withInstall(Fab, 'InFab')
InFab.name = 'InFab'
export default InFab
export * from './src/fab'
export type FabInstance = InstanceType<typeof Fab>
