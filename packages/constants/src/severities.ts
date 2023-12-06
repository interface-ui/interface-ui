export const componentSeverities = [
  'error',
  'warning',
  'info',
  'success',
] as const
export type ComponentSeverities = typeof componentSeverities[number]
