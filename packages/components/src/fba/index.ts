import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Fba from './src/index.vue'

export const FnFba: SFCWithInstall<typeof Fba> = withInstall(Fba, 'FnFba')
FnFba.name = 'FnFba'
export default FnFba
export * from './src/fba'
export type FbaInstance = InstanceType<typeof Fba>
