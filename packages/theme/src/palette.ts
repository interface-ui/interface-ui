import paletteCSS from '../css/palette.less'
import type { Palette } from './theme'

const match = paletteCSS.matchAll(
  /--\b(md|fn)\b-ref-palette-([a-z]+)(-variant)?([0-9]*): (#[0-9a-z]{6});/g
)
const palette: Palette = [...match].reduce((pre, cur) => {
  const [_, _source, key, variant, level, value] = cur
  if (level) {
    pre[key] = pre[key] ?? {}
    if (variant) {
      pre[key].variant = pre[key].variant ?? {}
      pre[key].variant[level] = value
    } else {
      pre[key][level] = value
    }
  } else {
    pre[key] = value
  }
  return pre
}, {} as any)

export default palette
