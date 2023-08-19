import type { CSSProperties, ComputedRef } from 'vue'
import type { TagProps } from '../../tag/src/tag'
import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'

export type ClassList = (string | Record<string, unknown>)[]

export interface UseTagReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
}

export const UseTag = (prop: TagProps): UseTagReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    let arr = [];
    if(prop.round){
      arr.push('is-round')
    }
    return [
      'fn-tag',
      `fn-tag--${prop.type}`,
      `fn-tag--${prop.size}`,
      ...arr
    ]
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const { color } = prop
    const style: CSSProperties = {}

    if (color) {
      const lighterColor = new TinyColor(color)
      style['--fn-tag-bg-color'] = lighterColor.tint(70).toString()
      style['--fn-tag-text-color'] = color
      style['--fn-tag-border-color'] =lighterColor.tint(60).toString()
    }
    return style
  })

  return {
    styleList,
    classList,
  }
}
