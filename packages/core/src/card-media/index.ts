import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import CardMedia from './src/index.vue'

export const InCardMedia: SFCWithInstall<typeof CardMedia> = withInstall(
  CardMedia,
  'InCardMedia'
)
InCardMedia.name = 'InCardMedia'
export default InCardMedia
export * from './src/card-media'
export type CardMediaInstance = InstanceType<typeof CardMedia>
