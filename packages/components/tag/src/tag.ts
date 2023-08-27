import type { ExtractPropTypes, PropType } from 'vue'

export type TagType = 'success' | 'info' | 'warning'|'danger'|'';
export type SizeType = 'large' | 'small';

export const tagProps = {
  type: {
    type: String as PropType<TagType>,
    default: '',
  },
  closable: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<SizeType>,
    default: '',
  },
  round: {
    type: Boolean,
    default: false,
  },
}

export type TagProps = ExtractPropTypes<typeof tagProps>
