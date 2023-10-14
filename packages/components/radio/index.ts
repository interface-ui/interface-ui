import { withInstall } from '../install'
import Radio from './src/index.vue'

export const FnRadio = withInstall(Radio, 'FnRadio')
FnRadio.name = 'FnRadio'
export default FnRadio
export * from './src/radio'
export type RadioInstance = InstanceType<typeof Radio>
