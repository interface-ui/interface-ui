import jss from 'jss'
import preset from 'jss-preset-default'
// import type { CheckboxProps } from '@fusion-ui/components/checkbox/src/checkbox'
// import { TinyColor } from '@ctrl/tinycolor'

jss.setup(preset())

export const UseCheckbox = () => {
  // const tinyColor = new TinyColor(props.color)
  const styles = {
    'fn-checkbox-icon-root': {
      '&:hover': {
        background: 'var(--md-sys-color-primary)80',
        // opacity: theme.state.hover,
      },
    },
  }
  const { classes } = jss.createStyleSheet(styles).attach()
  return classes
}
