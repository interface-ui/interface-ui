import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Alert from './src/index.vue'

export const FnAlert: SFCWithInstall<typeof Alert> = withInstall(
  Alert,
  'FnAlert'
)
FnAlert.name = 'FnAlert'
export default FnAlert
export * from './src/alert'
export type AlertInstance = InstanceType<typeof Alert>
