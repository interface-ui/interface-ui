import { withInstall } from '../install'
import Checkbox from './src/index.vue'

export const FnCheckbox = withInstall(Checkbox, 'FnCheckbox')
export default FnCheckbox
export * from './src/checkbox'
export type CheckboxInstance = InstanceType<typeof Checkbox>
