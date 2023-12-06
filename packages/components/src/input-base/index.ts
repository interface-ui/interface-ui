import { withInstall } from '@fusion-ui-vue/utils'
import InputBase from './src/index.vue'

export const FnInputBase = withInstall(InputBase, 'FnInputBase')
FnInputBase.name = 'FnInputBase'
export default FnInputBase
export * from './src/input-base'
export type InputBaseInstance = InstanceType<typeof InputBase>
