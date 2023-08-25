import { computed, ComputedRef } from 'vue'
import { CheckboxProps } from '../../checkbox/src/checkbox'

/** class 类名集合类型 */
export type ClassList<T = (string | Record<string, unknown>)[]> = {
  root: T
  input: T
  icon: T
}

/**
 * UseCheckboxReturn 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseCheckboxReturn {
  classList: ComputedRef<ClassList>
  // styleList: ComputedRef<CSSProperties>
}

export const UseCheckbox = (prop: CheckboxProps): UseCheckboxReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return {
      root: ['fn-checkbox-root'],
      icon: ['fn-checkbox-icon', `fn-checkbox--${prop.size}`],
      input: ['fn-checkbox-input'],
    }
  })

  return {
    classList,
  }
}
