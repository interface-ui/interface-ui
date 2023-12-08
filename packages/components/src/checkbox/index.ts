import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Checkbox from './src/index.vue'

export const FnCheckbox: SFCWithInstall<typeof Checkbox> = withInstall(
  Checkbox,
  'FnCheckbox'
)
FnCheckbox.name = 'FnCheckbox'
export default FnCheckbox
export * from './src/checkbox'
export type CheckboxInstance = InstanceType<typeof Checkbox>
