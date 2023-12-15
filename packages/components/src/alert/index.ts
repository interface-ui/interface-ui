import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Alert from './src/index.vue'

export const InAlert: SFCWithInstall<typeof Alert> = withInstall(
  Alert,
  'InAlert'
)
InAlert.name = 'InAlert'
export default InAlert
export * from './src/alert'
export type AlertInstance = InstanceType<typeof Alert>
