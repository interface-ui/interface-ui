import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Typography from './src/index.vue'

export const FnTypography: SFCWithInstall<typeof Typography> = withInstall(
  Typography,
  'FnTypography'
)
FnTypography.name = 'FnTypography'
export default FnTypography
export * from './src/typography'
export type TypographyInstance = InstanceType<typeof Typography>
