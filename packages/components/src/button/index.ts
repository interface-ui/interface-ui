import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Button from './src/index.vue'

export const InButton: SFCWithInstall<typeof Button> = withInstall(
  Button,
  'InButton'
)
InButton.name = 'InButton'
export default InButton
export * from './src/button'
export type ButtonInstance = InstanceType<typeof Button>
