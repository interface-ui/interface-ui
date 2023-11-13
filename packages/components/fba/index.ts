import { withInstall } from '../install'
import Fba from './src/index.vue'

export const FnFba = withInstall(Fba, 'FnFba')
FnFba.name = 'FnFba'
export default FnFba
export * from './src/fba'
export type FbaInstance = InstanceType<typeof Fba>
