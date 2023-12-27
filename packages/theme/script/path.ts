import path from 'path'
import { fileURLToPath } from 'node:url'

const dir = path.dirname(fileURLToPath(import.meta.url))

export const pathRoot = path.resolve(dir, '..')
export const pathSrc = path.resolve(pathRoot, 'src')
export const pathStyles = path.resolve(pathSrc, 'styles')
