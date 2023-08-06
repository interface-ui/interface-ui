import type { ExtractPropTypes } from 'vue'
export type linkType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
export const linkProps = {
  type: {
    type: String as () => linkType,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  underline: {
    type: Boolean,
    default: true,
    required: false,
  },
  href: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
}
export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LlinkProps = ExtractPropTypes<typeof linkProps>
