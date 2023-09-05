import theme from './src/themeRelate'
import '@fusion-ui/theme/styles/baseline.less?inline'

// Check if the user has dark mode turned on
// const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// Apply the theme to the body by updating custom properties for material tokens
// applyTheme(dTheme, { target: document.body, dark: systemDark })
export default theme

// const curTheme = createTheme({
//   palette: {
//     primary: '#fff',
//     primaryContainer: '#3382u9',
//   },
// })

// // eslint-disable-next-line no-console
// console.log(curTheme)
