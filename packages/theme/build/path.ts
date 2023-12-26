import { resolve } from 'node:path'

export const pathRoot = resolve(__dirname, '..')
export const pathSrc = resolve(pathRoot, 'src')
export const pathStyles = resolve(pathSrc, 'styles')
export const pathEsOutput = resolve(pathRoot, 'es')
export const pathLibOutput = resolve(pathRoot, 'lib')
