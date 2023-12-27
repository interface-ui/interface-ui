import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Menu from './src/index.vue'

export const InMenu: SFCWithInstall<typeof Menu> = withInstall(Menu, 'InMenu')
InMenu.name = 'InMenu'
export default InMenu
export type MenuInstance = InstanceType<typeof Menu>
