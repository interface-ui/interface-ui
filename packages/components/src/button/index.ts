import { withInstall } from '@fusion-ui-vue/utils'
import Button from './src/index.vue'

export const FnButton = withInstall(Button, 'FnButton')
FnButton.name = 'FnButton'
export default FnButton
export * from './src/button'
export type ButtonInstance = InstanceType<typeof Button>
