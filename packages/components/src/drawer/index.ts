import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Drawer from './src/index.vue'

export const InDrawer: SFCWithInstall<typeof Drawer> = withInstall(
  Drawer,
  'InDrawer'
)
InDrawer.name = 'InDrawer'
export default InDrawer
export * from './src/drawer'
export type DrawerInstance = InstanceType<typeof Drawer>
