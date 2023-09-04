import jss from 'jss'
import preset from 'jss-preset-default'
import color from '../color'
import state from '../state'
import type FnTheme from './theme'
import scheme from './scheme'

jss.setup(preset())
const styles = {
  '@global': {
    ':root': scheme.styles,
  },
}
jss.createStyleSheet(styles).attach()

const theme: FnTheme = {
  palette: scheme.palette,
  color,
  state,
}
// eslint-disable-next-line no-console
console.log(theme)

export default theme
