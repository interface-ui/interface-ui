import '@fusion-ui/theme/styles/baseline.less'
import useTheme, { createTheme, customizeTheme } from './src/use-theme'
import useColor from './src/use-color'
export { default as color } from './src/color'
export { default as state } from './src/state'

createTheme()
export { createTheme, customizeTheme, useColor }
export default useTheme
