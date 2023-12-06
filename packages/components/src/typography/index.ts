import { withInstall } from '@fusion-ui-vue/utils'
import Typography from './src/index.vue'

export const FnTypography = withInstall(Typography, 'FnTypography')
FnTypography.name = 'FnTypography'
export default FnTypography
export * from './src/typography'
export type TypographyInstance = InstanceType<typeof Typography>
