import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Fba from './src/index.vue'

export const InFba: SFCWithInstall<typeof Fba> = withInstall(Fba, 'InFba')
InFba.name = 'InFba'
export default InFba
export * from './src/fba'
export type FbaInstance = InstanceType<typeof Fba>
