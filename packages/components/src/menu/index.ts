import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Menu from './src/index.vue'

export const FnMenu: SFCWithInstall<typeof Menu> = withInstall(Menu, 'FnMenu')
FnMenu.name = 'FnMenu'
export default FnMenu
export type MenuInstance = InstanceType<typeof Menu>
