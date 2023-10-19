export const componentSizes = ['small', 'medium', 'large'] as const

export type ComponentSizes = typeof componentSizes[number]

export const iconSize: Record<ComponentSizes, string> = {
  small: '20',
  medium: '24',
  large: '28',
}
