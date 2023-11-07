import type { Component, ExtractPropTypes, PropType } from 'vue'
import { type ComponentSeverity } from '@fusion-ui-vue/constants'
import { buildProps } from '@fusion-ui-vue/utils'
import SuccessOutlined from '../../svg-icon/internal/SuccessOutlined.vue'
import WarningOutlined from '../../svg-icon/internal/WarningOutlined.vue'
import ErrorOutlined from '../../svg-icon/internal/ErrorOutlined.vue'
import InfoOutlined from '../../svg-icon/internal/InfoOutlined.vue'

export const alertVariants = ['filled', 'outlined'] as const
export type AlertVariants = typeof alertVariants[number]

export const alertProps = buildProps({
  variant: {
    type: String as PropType<AlertVariants>,
    values: alertVariants,
    default: 'filled',
  },
  severity: {
    type: String as PropType<ComponentSeverity>,
    required: true,
    default: 'info',
  },
  icon: {
    type: Boolean,
    default: true,
  },
  cs: {
    type: [Object, String, Array] as PropType<TemplateStringsArray>,
  },
})

export const alertIcons: Record<ComponentSeverity, Component> = {
  success: SuccessOutlined,
  warning: WarningOutlined,
  error: ErrorOutlined,
  info: InfoOutlined,
}

export type AlertProps = ExtractPropTypes<typeof alertProps>
