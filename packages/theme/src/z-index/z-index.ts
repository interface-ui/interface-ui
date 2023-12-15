import zIndexCSS from '@interface-ui/theme/styles/z-index.less?inline'
import type { ZIndex } from './types'

const match = zIndexCSS.matchAll(/--in-sys-z-index-(.+): ([0-9]+);/g)

export const zIndex: ZIndex = [...match].reduce((pre, cur) => {
  const [_, key, value] = cur
  const camelCaseKey = key.replace(/-(\w)/g, (_, c) => c.toUpperCase())
  pre[camelCaseKey] = Number(value)
  return pre
}, {} as any)

export default zIndex
