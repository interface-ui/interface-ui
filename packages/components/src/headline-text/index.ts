import { withInstall } from '@fusion-ui-vue/utils'
import HeadlineText from './src/index.vue'

export const FnHeadlineText = withInstall(HeadlineText, 'FnHeadlineText')
FnHeadlineText.name = 'FnHeadlineText'
export default FnHeadlineText
export * from './src/headline-text'
export type ListItemTextInstance = InstanceType<typeof HeadlineText>
