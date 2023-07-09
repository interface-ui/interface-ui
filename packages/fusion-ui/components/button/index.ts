import { withInstall } from '../install'
import Button from './src/index.vue'

export const FnButton = withInstall(Button, 'FnButton')
export default FnButton
export * from './src/button'
