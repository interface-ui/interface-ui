export const componentSeverity = ['error', 'warning', 'info', 'success'] as const

export type ComponentSeverity = typeof componentSeverity[number]
