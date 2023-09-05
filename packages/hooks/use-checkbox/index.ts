import { useJSS } from '../useJSS'

export const UseCheckbox = () => {
  const jss = useJSS()

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
