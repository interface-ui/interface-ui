import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Provider from './src/index'

export const ThemeProvider: SFCWithInstall<typeof Provider> = withInstall(
  Provider,
  'ThemeProvider',
)
ThemeProvider.name = 'ThemeProvider'
export default ThemeProvider
export * from './src/theme-provider'
export type themeProviderInstance = InstanceType<typeof Provider>
