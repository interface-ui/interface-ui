import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import TextField from './src/index.vue'

export const InTextField: SFCWithInstall<typeof TextField> = withInstall(
  TextField,
  'InTextField'
)
InTextField.name = 'InTextField'
export default InTextField
export * from './src/text-field'
export type TextFieldInstance = InstanceType<typeof TextField>
