export const componentSeverity = ['error', 'warning', 'info', 'success'] as const

export type ComponentSeverity = typeof componentSeverity[number]

export const componentSeverityIcon = {
  error: 'material-symbols:error-outline',
  warning: 'material-symbols:warning-outline',
  info: 'material-symbols:info-outline',
  success: 'mdi:success',
}
