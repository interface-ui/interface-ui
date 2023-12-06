import { withInstall } from '@fusion-ui-vue/utils'
import Menu from './src/index.vue'

export const FnMenu = withInstall(Menu, 'FnMenu')
FnMenu.name = 'FnMenu'
export default FnMenu
export type MenuInstance = InstanceType<typeof Menu>
