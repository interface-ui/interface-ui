import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import { addUnit } from '../../../utils/style'
import type { SwitchProps } from '../../switch/src/switch'

/** class 类名集合类型 */
export type ClassList = (string | Record<string, unknown>)[]

/**
 * useSwitchInner 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseSwitchInnerReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
}

/**
 * useSwitch返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseSwitchReturn {
  fnClassList: ComputedRef<ClassList>
}

/**
 * 返回Switch组件的类名列表
 * @param prop
 * @returns
 */
export const useSwitchInner = (prop: SwitchProps): UseSwitchInnerReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return [
      {
        'is-checked': prop.modelValue,
        'no-checked': !prop.modelValue,
      },
    ]
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const { color } = prop
    const style: CSSProperties = {}
    // const style = {
    //   '--switch-background': '#70a3f3',
    //   '--leftStart': '0',
    //   '--leftEnd': '0',
    //   'float': 'left',
    // } as CSSProperties
    style.width = addUnit(prop.width)
    // if (prop.checkedIcon || prop.unCheckedIcon) {
    if (prop.modelValue)
      style['--switch-float'] = 'left'

    else style['--switch-float'] = 'right'
    // }

    if (prop.color) {
      if (prop.modelValue)
        style['--switch-background'] = color
      else
        style['--switch-background'] = '#ccc'
    }
    else {
      if (prop.modelValue)
        style['--switch-background'] = '#5a9cf8'
      else
        style['--switch-background'] = '#ccc'
    }
    if (prop.modelValue) {
      style['--leftStart'] = '0'
      style['--leftEnd'] = '100%'
    }
    else {
      style['--leftStart'] = '100%'
      style['--leftEnd'] = '0'
    }

    return style
  })

  return {
    styleList,
    classList,
  }
}

/**
 * 返回Switch组件的类名列表
 * @param prop
 * @returns
 */
export const useSwitch = (prop: SwitchProps): UseSwitchReturn => {
  /** 类名列表 */
  const fnClassList = computed((): ClassList => {
    return [
      'fn-switch',
      {
        'switch-is-disabled': prop.disabled,
      },
    ]
  })
  return {
    fnClassList,
  }
}
