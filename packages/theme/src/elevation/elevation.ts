import elevationCSS from '@fusion-ui-vue/theme/styles/elevation.less?inline'
import type { Elevations } from './types'

const match = elevationCSS
  .replace(/\n/g, '')
  .replace(/;/g, ';\n')
  .matchAll(/--\b(md|fn)\b-sys-elevation-level-([0-9]+): (.+);/g)
const elevations: Elevations = [...match].map(item => {
  const [_, _source, _level, value] = item
  return value.replace(/,\s+/g, ', ')
})

export default elevations
