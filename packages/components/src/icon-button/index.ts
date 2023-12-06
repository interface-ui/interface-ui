import { withInstall } from '@fusion-ui-vue/utils'
import IconButton from './src/index.vue'

export const FnIconButton = withInstall(IconButton, 'FnIconButton')
FnIconButton.name = 'FnIconButton'
export default FnIconButton
export * from './src/icon-button'
export type IconButtonInstance = InstanceType<typeof IconButton>
