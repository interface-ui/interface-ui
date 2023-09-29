import { withInstall } from '../install'
import ButtonGroup from './src/index.vue'

export const FnButtonGroup = withInstall(ButtonGroup, 'FnButtonGroup')
export default FnButtonGroup
export * from './src/button-group'
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
