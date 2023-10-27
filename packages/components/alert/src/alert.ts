import type { ExtractPropTypes, PropType } from 'vue'
import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { type ComponentSeverity } from '@fusion-ui-vue/constants'
export type AlertType = String | Boolean
export const alertVariants = ['filled', 'outlined'] as const
export type AlertVariant = typeof alertVariants[number]
export const alertProps = {
  title: {
    type: String as PropType<AlertType>,
    default: '',
  },
  severity: {
    type: String as PropType<ComponentSeverity>,
    default: 'info',
  },
  icon: {
    type: String as PropType<AlertType>,
    default: '',
  },
  variant: {
    type: String as PropType<AlertVariant>,
    values: alertVariants,
    default: '',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: '',
  },
}

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}

/** AlertProps 组件 props 类型 */
export type AlertProps = ExtractPropTypes<typeof alertProps>
