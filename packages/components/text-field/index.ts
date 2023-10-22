import { withInstall } from '../install'
import TextField from './src/index.vue'

export const FnTextField = withInstall(TextField, 'FnTextField')
FnTextField.name = 'FnTextField'
export default FnTextField
export * from './src/text-field'
export type TextFieldInstance = InstanceType<typeof TextField>
