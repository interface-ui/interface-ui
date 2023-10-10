import { withInstall } from '../install'
import FormLabel from './src/index.vue'

export const FnFormLabel = withInstall(FormLabel, 'FnFormLabel')
FnFormLabel.name = 'FnFormLabel'
export default FnFormLabel
export * from './src/form-label'
export type FormLabelInstance = InstanceType<typeof FormLabel>
