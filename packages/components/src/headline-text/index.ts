import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import HeadlineText from './src/index.vue'

export const FnHeadlineText: SFCWithInstall<typeof HeadlineText> = withInstall(
  HeadlineText,
  'FnHeadlineText'
)
FnHeadlineText.name = 'FnHeadlineText'
export default FnHeadlineText
export * from './src/headline-text'
export type HeadlineTextInstance = InstanceType<typeof HeadlineText>
