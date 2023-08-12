import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import { isNumber } from '@vueuse/core'
import type { ProgressProps } from '../../progress/src/progress'
import { addUnit } from '../../../utils/style'

/** class 类名集合类型 */
export type ClassList = (string | Record<string, unknown>)[]

/**
 * UseProgressReturn 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseProgressReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
  styleListCircle: ComputedRef<CSSProperties>
}

/**
 * 返回Badge组件的类名列表
 * @param prop
 * @returns
 */
export const UseProgress = (prop: ProgressProps): UseProgressReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return [
      'fn-badge',
      {
        'badge-is-dot': true,
        'badge-is-flashing': true,
      },
    ]
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const style: CSSProperties = {}
    if (prop.percentage && isNumber(prop.percentage) && prop.percentage > 0) {
      style['--progress-bar-width'] = `${prop.percentage}%`
      style.height = '0.5rem'
    }

    style.height = addUnit(prop.height)

    style['--progress-bar-out-bg'] = prop.background

    style['--progress-bar-bg'] = prop.color

    style['--current-progress'] = `${(Number(prop.percentage) / 100) * 360}deg`

    return style
  })

  /** 样式列表 */
  const styleListCircle = computed((): CSSProperties => {
    const style: CSSProperties = {
      height: 'auto',
    }
    style['--current-progress'] = `${(Number(prop.percentage) / 100) * 360}deg`
    return style
  })

  return {
    styleList,
    classList,
    styleListCircle,
  }
}
