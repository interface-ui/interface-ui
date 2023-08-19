import type { ExtractPropTypes, PropType } from 'vue'
export type BadgeType = String | Number

export const alertProps = {
  title: {
    type: [String, Number] as PropType<BadgeType>,
    default: '',
  },
  description: {
    type: [String, Number] as PropType<BadgeType>,
    default: '',
  },
  fixedTip: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<'left' | 'top'>,
    default: 'left',
  },

  closable: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  scrollable: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 2,
  },
  state: {
    type: String as PropType<'success' | 'warning' | 'error' | 'info'>,
    default: 'info',
  },
}

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}

/** AlertProps 组件 props 类型 */
export type AlertProps = ExtractPropTypes<typeof alertProps>
