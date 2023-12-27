import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Checkbox from './src/index.vue'

export const InCheckbox: SFCWithInstall<typeof Checkbox> = withInstall(
  Checkbox,
  'InCheckbox'
)
InCheckbox.name = 'InCheckbox'
export default InCheckbox
export * from './src/checkbox'
export type CheckboxInstance = InstanceType<typeof Checkbox>
