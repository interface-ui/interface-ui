import { resolve } from 'node:path'

export const projectRoot = resolve(__dirname, '..')
export const projectRoot2 = resolve(__dirname, '../packages')

export const componentsRoot = resolve(projectRoot, 'packages')
export const componentsRoot2 = resolve(projectRoot, 'packages/components')
export const componentsRoot3 = resolve(projectRoot, 'packages/styles')
export const pluginsRoot = resolve(projectRoot, 'plugins')
export const stylesRoot = resolve(projectRoot, 'styles')
export const utilsRoot = resolve(projectRoot, 'utils')

export const buildOutput = resolve(projectRoot2, 'dist')
