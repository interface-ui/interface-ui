import path from 'node:path'
import fs from 'fs-extra'
import { copy,ensureDir } from 'fs-extra'
import consola from 'consola'
import { buildOutput } from '../path'

export async function buildType() {
  consola.info('Start copy types...')
  const src = path.resolve(buildOutput, 'types')
  
  // Ensure the types directory exists
  await fs.promises.mkdir(src, { recursive: true });  // Add this line
  
  // Copy to 'es' and 'lib' directories
  await Promise.all(
    ['es', 'lib'].map(dir =>
      copy(src, path.resolve(buildOutput, dir), { recursive: true }),
    ),
  )
  
  consola.success('copy types complete!')
}
