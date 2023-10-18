export const componentDirections = ['left', 'right', 'top', 'bottom'] as const
export type ComponentDirections = typeof componentDirections[number]
