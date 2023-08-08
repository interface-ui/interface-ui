import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import type { RadioProps } from '../../radio/src/radio'

/** class 类名集合类型 */
export type ClassList = (string | Record<string, unknown>)[]

/**
 * useRadio 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseRadioReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
}

/**
 * useRadioGroup 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseRadioGroupReturn {
  classList: ComputedRef<ClassList>
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

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const { color } = prop

    if (prop.color) {
      return {
        '--radio-background': color || null,
      } as CSSProperties
    }

    return {
      '--radio-background': '#70a3f3',
    } as CSSProperties
  })

  return {
    classList,
    styleList,
  }
}

/**
 * 返回RadioGroup组件的类名列表
 * @param prop
 * @returns
 */
export const useRadioGroup = (prop: RadioProps): UseRadioGroupReturn => {
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
