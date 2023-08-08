import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { RadioProps } from '../../radio/src/radio'

/** class 类名集合类型 */
export type ClassList = (string | Record<string, unknown>)[]

/**
 * useButton 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseRadioReturn {
  classList: ComputedRef<ClassList>
  // styleList: ComputedRef<CSSProperties>
}

/**
 * 返回Radio组件的类名列表
 * @param prop
 * @returns
 */
export const useRadio = (prop: RadioProps): UseRadioReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return [
      'fn-radio',
      {
        'is-disabled': prop.disabled,
        'is-checked': prop.modelValue === prop.value,
      },
    ]
  })

  return {
    classList,
  }
}

/**
 * 返回RadioGroup组件的类名列表
 * @param prop
 * @returns
 */
export const useRadioGroup = (prop: any): UseRadioReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return [
      'fn-radio-group',
      {
        'is-horizontal': prop.horizontal,
        'is-checked': prop.modelValue === prop.value,
      },
    ]
  })
  return {
    classList,
  }
}

/**
 * 返回RadioGroup组件的类名列表
 * @param prop
 * @returns
 */
export const useRadioGroupCheck = (prop: any): UseRadioReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return [
      'fn-radio-check',
      {
        'is-checked': prop.modelValue === prop.value,
      },
    ]
  })
  return {
    classList,
  }
}
