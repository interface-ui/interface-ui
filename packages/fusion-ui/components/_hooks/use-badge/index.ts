import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import type { BadgeProps } from '../../badge/src/badge'

/** class 类名集合类型 */
export type ClassList = (string | Record<string, unknown>)[]

/**
 * UseBadgeReturn 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseBadgeReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
}

/**
 * 返回Badge组件的类名列表
 * @param prop
 * @returns
 */
export const UseBadge = (prop: BadgeProps): UseBadgeReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return [
      'fn-badge',
      {
        'badge-is-dot': prop.dot,
        'badge-is-flashing': prop.flashing,
      },
    ]
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const { color } = prop
    const style: CSSProperties = {}

    if (prop.color)
      style['--sup-bg-color'] = color
    else style.color = '#eee'

    return style
  })

  return {
    styleList,
    classList,
  }
}
