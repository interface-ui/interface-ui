import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Drawer from './src/index.vue'

export const FnDrawer: SFCWithInstall<typeof Drawer> = withInstall(
  Drawer,
  'FnDrawer'
)
FnDrawer.name = 'FnDrawer'
export default FnDrawer
export * from './src/drawer'
export type DrawerInstance = InstanceType<typeof Drawer>
