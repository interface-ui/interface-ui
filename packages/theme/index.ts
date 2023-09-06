import '@fusion-ui/theme/styles/baseline.less'
import useTheme, { createTheme, customizeTheme } from './src/use-theme'
export { default as color } from './src/color'
export { default as state } from './src/state'

createTheme()
export { createTheme, customizeTheme }
export default useTheme
