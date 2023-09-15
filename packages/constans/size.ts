export const componentSizes = ['small', 'medium', 'large'] as const

export type ComponentSize = typeof componentSizes[number]
