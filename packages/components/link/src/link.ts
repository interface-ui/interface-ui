import type { ExtractPropTypes } from 'vue'

export const linkProps = {
  underline: {
    type: String,
    values: ['none', 'hover', 'always'] as const,
    default: 'hover',
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
}

export type LlinkProps = ExtractPropTypes<typeof linkProps>
