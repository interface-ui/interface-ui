import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Button from './src/index.vue'

export const FnButton: SFCWithInstall<typeof Button> = withInstall(
  Button,
  'FnButton'
)
FnButton.name = 'FnButton'
export default FnButton
export * from './src/button'
export type ButtonInstance = InstanceType<typeof Button>
