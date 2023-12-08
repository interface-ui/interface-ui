import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import TextField from './src/index.vue'

export const FnTextField: SFCWithInstall<typeof TextField> = withInstall(
  TextField,
  'FnTextField'
)
FnTextField.name = 'FnTextField'
export default FnTextField
export * from './src/text-field'
export type TextFieldInstance = InstanceType<typeof TextField>
