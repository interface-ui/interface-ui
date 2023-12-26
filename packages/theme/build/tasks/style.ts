import { resolve } from 'node:path'
import { dest, src } from 'gulp'
import consola from 'consola'
import { pathRoot, pathStyles } from '../path'

export async function buildStyle() {
  return src(resolve(pathStyles, '*.css'))
    .pipe(dest(resolve(pathRoot, 'styles')))
    .on('end', () => {
      consola.success('Build styles success')
    })
}
