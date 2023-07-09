import { resolve } from 'node:path'

export const projectRoot = resolve(__dirname, '..')

export const componentsRoot = resolve(projectRoot, 'components')
export const pluginsRoot = resolve(projectRoot, 'plugins')
export const stylesRoot = resolve(projectRoot, 'styles')
export const utilsRoot = resolve(projectRoot, 'utils')

export const buildOutput = resolve(projectRoot, 'dist')
