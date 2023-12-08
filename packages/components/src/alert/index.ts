import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Alter from './src/index.vue'

export const FnAlter: SFCWithInstall<typeof Alter> = withInstall(
  Alter,
  'FnAlter'
)
FnAlter.name = 'FnAlter'
export default FnAlter
export * from './src/alert'
export type AlterInstance = InstanceType<typeof Alter>
