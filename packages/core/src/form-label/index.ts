import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import FormLabel from './src/index.vue'

export const InFormLabel: SFCWithInstall<typeof FormLabel> = withInstall(
  FormLabel,
  'InFormLabel'
)
InFormLabel.name = 'InFormLabel'
export default InFormLabel
export * from './src/form-label'
export type FormLabelInstance = InstanceType<typeof FormLabel>
