import { withInstall } from '@fusion-ui-vue/utils'
import CardMedia from './src/index.vue'

export const FnCardMedia = withInstall(CardMedia, 'FnCardMedia')
FnCardMedia.name = 'FnCardMedia'
export default FnCardMedia
export * from './src/card-media'
export type CardMediaInstance = InstanceType<typeof CardMedia>
