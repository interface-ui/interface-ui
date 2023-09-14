import { withInstall } from '../install'
import Typography from './src/index.vue'

export const FnTypography = withInstall(Typography, 'FnTypography')
export default FnTypography
export * from './src/typography'
export type TypographyInstance = InstanceType<typeof Typography>
