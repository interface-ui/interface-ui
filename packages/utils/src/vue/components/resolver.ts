import type {
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components'

export interface PlayResolverOptions {
  importStyle?: boolean | 'less'
  from?: string
}

export const isSSR = Boolean(
  (import.meta as any).env.SSR ||
    (import.meta as any).env.SSG ||
    (import.meta as any).env.VITE_SSR ||
    (import.meta as any).env.VITE_SSG
)

export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

function getSideEffects(
  dirName: string,
  options: PlayResolverOptions
): SideEffectsInfo | undefined {
  const { importStyle = true } = options

  if (!importStyle || isSSR) {
    return
  }

  const noStyleComps = ['on-click-outside']

  if (noStyleComps.includes(dirName)) {
    return
  }

  if (importStyle)
    return [
      'interface-ui/dist/styles/base.css',
      `interface-ui/dist/styles/${dirName}/src/index.css`,
    ]

  return [`interface-ui/dist/lib/components/${dirName}/index.js`]
  // return [`interface-ui/dist/styles/${dirName}/src/index.js`]
}

export function PlayResolver(
  options: PlayResolverOptions = {}
): ComponentResolver {
  const { from = 'interface-ui' } = options
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Fn')) {
        const partialName = name.slice(2)
        return {
          name,
          from,
          sideEffects: getSideEffects(kebabCase(partialName), options),
        }
      }
    },
  }
}
