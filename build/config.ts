import path from 'node:path'
import type { OutputOptions } from 'rollup'
import { buildOutput, componentsRoot } from './path'

export const modulesOutputConfig: OutputOptions[] = [
  {
    format: 'esm',
    dir: path.resolve(buildOutput, 'es'),
    exports: undefined,
    preserveModules: true,
    preserveModulesRoot: componentsRoot,
    sourcemap: true,
    entryFileNames: '[name].mjs',
  },
  {
    format: 'cjs',
    dir: path.resolve(buildOutput, 'lib'),
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: componentsRoot,
    sourcemap: true,
    entryFileNames: '[name].js',
  },
]

export const bundleOutputConfig: OutputOptions[] = [
  {
    format: 'umd',
    file: path.resolve(buildOutput, 'bundle', 'index.min.js'),
    exports: 'named',
    name: 'FusionUi',
    globals: {
      vue: 'Vue',
    },
    sourcemap: true,
  },
  {
    format: 'esm',
    file: path.resolve(buildOutput, 'bundle', 'index.min.mjs'),
    sourcemap: true,
  },
]
