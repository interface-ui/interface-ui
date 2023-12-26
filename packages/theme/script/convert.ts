import path from 'path'
import { readFile, writeFile } from 'node:fs/promises'
import { ensureFile } from 'fs-extra'
import { format } from 'prettier'
import { pathSrc, pathStyles } from './path'

export default [
  {
    name: 'colors',
    path: path.resolve(pathStyles, 'palette.css'),
    dir: path.resolve(pathSrc, 'color/color.ts'),
    resolver: async (file: string, dir: string) => {
      await ensureFile(dir)
      const content = await readFile(file, 'utf-8')
      const match = content.matchAll(
        /--\b(md|in)\b-ref-palette-([a-zA-Z]+)(-variant)?-([A-Z0-9]*): (#[0-9a-z]{6});/g
      )
      const colors = [...match].reduce((pre, cur) => {
        const [_, _source, colorName, variant, level, value] = cur
        if (level) {
          pre[colorName] = pre[colorName] ?? {}
          if (variant) {
            pre[colorName].variant = pre[colorName].variant ?? {}
            pre[colorName].variant[level] = value
          } else {
            pre[colorName][level] = value
          }
        } else {
          pre[colorName] = value
        }
        return pre
      }, {} as any)

      const template = await format(
        `
        import type { Colors } from './types'

        export default ${JSON.stringify(colors, null, 2)} as Colors
      `,
        { parser: 'typescript', singleQuote: true, semi: false }
      )

      writeFile(dir, template, 'utf-8')
    },
  },
  {
    name: 'elevations',
    path: path.resolve(pathStyles, 'elevation.css'),
    dir: path.resolve(pathSrc, 'elevation/elevation.ts'),
    resolver: async (file: string, dir: string) => {
      await ensureFile(dir)
      const content = await readFile(file, 'utf-8')
      const match = content
        .replace(/\n/g, '')
        .replace(/;/g, ';\n')
        .matchAll(/--\b(md|in)\b-sys-elevation-level-([0-9]+): (.+);/g)
      const elevations = [...match].map(item => {
        const [_, _source, _level, value] = item
        return value.replace(/,\s+/g, ', ')
      })

      const template = await format(
        `
      import type { Elevations } from './types'

      export default ${JSON.stringify(elevations, null, 2)} as Elevations
    `,
        { parser: 'typescript', singleQuote: true, semi: false }
      )

      writeFile(dir, template, 'utf-8')
    },
  },
  {
    name: 'states',
    path: path.resolve(pathStyles, 'state.css'),
    dir: path.resolve(pathSrc, 'state/state.ts'),
    resolver: async (file: string, dir: string) => {
      await ensureFile(dir)
      const content = await readFile(file, 'utf-8')
      const match = content.matchAll(
        /--\b(md|in)\b-sys-state-([a-z]+)-state-layer-opacity: ([\.0-9]+);/g
      )

      const states = [...match].reduce((pre, cur) => {
        const [_, _source, state, value] = cur
        pre[state] = value
        return pre
      }, {} as any)

      const template = await format(
        `
        import type { States } from './types'

      export default ${JSON.stringify(states, null, 2)} as States
    `,
        { parser: 'typescript', singleQuote: true, semi: false }
      )

      writeFile(dir, template, 'utf-8')
    },
  },
  {
    name: 'z-index',
    path: path.resolve(pathStyles, 'z-index.css'),
    dir: path.resolve(pathSrc, 'z-index/z-index.ts'),
    resolver: async (file: string, dir: string) => {
      await ensureFile(dir)
      const content = await readFile(file, 'utf-8')
      const match = content.matchAll(/--in-sys-z-index-(.+): ([0-9]+);/g)

      const zIndex = [...match].reduce((pre, cur) => {
        const [_, key, value] = cur
        const camelCaseKey = key.replace(/-(\w)/g, (_: any, c: string) =>
          c.toUpperCase()
        )
        pre[camelCaseKey] = Number(value)
        return pre
      }, {} as any)

      const template = await format(
        `
        import type { ZIndex } from './types'

      export default ${JSON.stringify(zIndex, null, 2)} as ZIndex
    `,
        { parser: 'typescript', singleQuote: true, semi: false }
      )

      writeFile(dir, template, 'utf-8')
    },
  },
]
