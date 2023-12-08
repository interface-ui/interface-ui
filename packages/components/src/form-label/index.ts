import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import FormLabel from './src/index.vue'

export const FnFormLabel: SFCWithInstall<typeof FormLabel> = withInstall(
  FormLabel,
  'FnFormLabel'
)
FnFormLabel.name = 'FnFormLabel'
export default FnFormLabel
export * from './src/form-label'
export type FormLabelInstance = InstanceType<typeof FormLabel>
