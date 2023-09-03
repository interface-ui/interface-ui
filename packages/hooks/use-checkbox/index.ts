import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import jss from 'jss'
import preset from 'jss-preset-default'
import type { CheckboxProps } from '@fusion-ui/components/checkbox/src/checkbox'

jss.setup(preset())

/** class 类名集合类型 */
export interface ClassList<T = (string | Record<string, unknown>)[]> {
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
  styleList: ComputedRef<CSSProperties>
}

export const UseCheckbox = (prop: CheckboxProps): UseCheckboxReturn => {
  /** 类名列表 */
  const classList = computed((): ClassList => {
    return {
      root: ['fn-checkbox-icon-root'],
      icon: ['fn-checkbox-icon', `fn-checkbox--${prop.size}`],
      input: ['fn-checkbox-input'],
    }
  })

  const styleList = computed((): CSSProperties => {
    const tinyColor = new TinyColor(prop.color)

    const style = {
      '--fn-checkbox-hover-background': tinyColor.setAlpha(0.05).toRgbString(),
    }

    return style
  })

  return {
    classList,
    styleList,
  }
}
