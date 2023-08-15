import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import type { ButtonProps } from '../../button/src/button'

/** class 类名集合类型 */
export type ClassList = (string | Record<string, unknown>)[]

/**
 * UseButtonReturn 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseButtonReturn {
  classList: ComputedRef<ClassList>
  styleList: ComputedRef<CSSProperties>
}

/**
 * 返回Badge组件的类名列表
 * @param prop
 * @returns
 */
export const UseButton = (prop: ButtonProps): UseButtonReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return [
      'fn-button',
      `fn-button--${prop.type}`,
      `fn-button--${prop.state}`,
      `fn-button--${prop.shape}`,
      `fn-button--${prop.size}`,
      {
        'is-disabled': prop.disabled,
      },
    ]
  })

  /** 样式列表 */
  const styleList = computed((): CSSProperties => {
    const { color, background } = prop
    const style: CSSProperties = {}

    if (color) {
      style['--fn-button-text-color'] = color
      style['--fn-button-text-hover-color'] = color
      style['--fn-button-disabled-text-color'] = color
    }

    if (background) {
      const lighterColor = new TinyColor(background)
      style['--fn-button-bg-color'] = background
      style['--fn-button-disabled-bg-color'] = background
      style['--fn-button-disabled-border-color'] = lighterColor.tint(50).toString()
      style['--fn-button-bg-hover-color'] = lighterColor.tint(50).toString()
      style['--fn-button-border-hover-color'] = lighterColor.tint(50).toString()
      style['--fn-button-border-color'] = lighterColor.tint(50).toString()
    }

    return style
  })

  return {
    styleList,
    classList,
  }
}
