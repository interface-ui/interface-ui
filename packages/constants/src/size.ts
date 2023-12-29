export const componentSizes = ['small', 'medium', 'large'] as const

export type ComponentSizes = (typeof componentSizes)[number]

export const iconSize: Record<ComponentSizes, string> = {
  small: '16',
  medium: '18',
  large: '20',
}
