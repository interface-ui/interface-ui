export const componentSizes = ['small', 'medium', 'large'] as const

export type ComponentSize = typeof componentSizes[number]

export const iconSize: Record<ComponentSize, string> = {
  small: '20',
  medium: '24',
  large: '28',
}
