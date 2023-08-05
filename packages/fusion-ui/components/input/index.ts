import { withInstall } from '../install'
import Input from './src/index.vue'

export const FnInput = withInstall(Input, 'FnInput')
FnInput.name = 'FnInput'
export default FnInput
export * from './src/input'
