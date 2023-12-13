export const componentDirections = ['left', 'right', 'top', 'bottom'] as const
export type ComponentDirections = typeof componentDirections[number]

export const componentOrientations = ['horizontal', 'vertical'] as const
export type ComponentOrientations = typeof componentOrientations[number]
