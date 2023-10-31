import zIndexCSS from '@fusion-ui-vue/theme/styles/z-index.less?inline'
import type { ZIndex } from './z-index'

const match = zIndexCSS.matchAll(/--fn-sys-z-index-(.+): ([0-9]+);/g)

export const zIndex: ZIndex = [...match].reduce((pre, cur) => {
  const [_, key, value] = cur
  pre[key] = Number(value)
  return pre
}, {} as any)

export default zIndex
