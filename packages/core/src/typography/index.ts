import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Typography from './src/index.vue'

export const InTypography: SFCWithInstall<typeof Typography> = withInstall(
  Typography,
  'InTypography'
)
InTypography.name = 'InTypography'
export default InTypography
export * from './src/typography'
export type TypographyInstance = InstanceType<typeof Typography>
