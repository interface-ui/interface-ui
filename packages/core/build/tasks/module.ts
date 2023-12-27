import consola from 'consola'
import { run } from '../utils'

export async function buildModule() {
  await run('vite build')
  consola.success('Build module success')
}
