import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import HeadlineText from './src/index.vue'

export const InHeadlineText: SFCWithInstall<typeof HeadlineText> = withInstall(
  HeadlineText,
  'InHeadlineText'
)
InHeadlineText.name = 'InHeadlineText'
export default InHeadlineText
export * from './src/headline-text'
export type HeadlineTextInstance = InstanceType<typeof HeadlineText>
