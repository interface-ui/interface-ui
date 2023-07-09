import path from 'node:path'
import { copy } from 'fs-extra'
import consola from 'consola'
import { buildOutput } from '../path'

export async function buildType() {
  consola.info('Start copy types...')
  const src = path.resolve(buildOutput, 'types')
  Promise.all(
    ['es', 'lib'].map(dir =>
      copy(src, path.resolve(buildOutput, dir), { recursive: true }),
    ),
  )
  consola.success('copy types complete!')
}
