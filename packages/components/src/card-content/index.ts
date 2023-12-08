import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import CardContent from './src/index.vue'

export const FnCardContent: SFCWithInstall<typeof CardContent> = withInstall(
  CardContent,
  'FnCardContent'
)
FnCardContent.name = 'FnCardContent'
export default FnCardContent
export * from './src/card-content'
export type CardContentInstance = InstanceType<typeof CardContent>
