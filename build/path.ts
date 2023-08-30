import { resolve } from 'node:path'

export const projectRoot = resolve(__dirname, '..')
export const projectPackages = resolve(__dirname, '../packages')

export const componentsRoot = resolve(projectRoot, 'packages')
export const componentsComponents = resolve(projectRoot, 'packages/components')
export const componentsStyles = resolve(projectRoot, 'packages/styles')
export const pluginsRoot = resolve(projectRoot, 'plugins')
export const stylesRoot = resolve(projectRoot, 'styles')
export const utilsRoot = resolve(projectRoot, 'utils')

export const buildOutput = resolve(projectPackages, '../packages/fusion-ui/dist')
