import { withInstall } from '../install'
import Button from './src/index.vue'

export const FnButton = withInstall(Button, 'FnButton')
// FnButton.name = 'FnButton'
export default FnButton
export * from './src/button'
/** button 组件实例类型 */
export type ButtonInstance = InstanceType<typeof Button>
