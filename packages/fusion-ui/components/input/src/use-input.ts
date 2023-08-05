import {
  computed,
  onMounted,
} from 'vue'
import type { CSSProperties, Ref } from 'vue'
import { addUnit } from '../../../utils/style'

export const useInput = (
  props: any,
  targetRef: Ref<HTMLElement | undefined>,
) => {
  const overlayInputStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}
    const varPrefix = '--fn-input' as const
    let width = 0
    if (props.suffixIcon)
      width += 25
    if (props.prefixIcon)
      width += 25
    if (props.clearable)
      width += 25
    if (props.type === 'password')
      width += 25

    if (props.width)
      style[`${varPrefix}-width`] = addUnit(props.width)
    if (props.height)
      style[`${varPrefix}-height`] = addUnit(props.height)

    if (props.prefixIcon || props.suffixIcon || props.clearable || props.type === 'password')
      style[`${varPrefix}-icon-width`] = `${width}px`
    else
      style[`${varPrefix}-icon-width`] = '0px'

    return style
  })

  onMounted(() => {

  })

  return {
    overlayInputStyle,
  }
}
