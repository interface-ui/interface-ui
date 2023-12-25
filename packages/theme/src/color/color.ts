import colorCSS from '@interface-ui/theme/styles/palette.less?inline'
import type { Colors } from './types'

const match = colorCSS.matchAll(
  /--\b(md|in)\b-ref-palette-([a-zA-Z]+)(-variant)?-([A-Z0-9]*): (#[0-9a-z]{6});/g
)
const colors: Colors = [...match].reduce((pre, cur) => {
  const [_, _source, colorName, variant, level, value] = cur
  if (level) {
    pre[colorName] = pre[colorName] ?? {}
    if (variant) {
      pre[colorName].variant = pre[colorName].variant ?? {}
      pre[colorName].variant[level] = value
    } else {
      pre[colorName][level] = value
    }
  } else {
    pre[colorName] = value
  }
  return pre
}, {} as any)

export default colors
