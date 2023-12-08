/* eslint-disable no-var */
import { rollup } from 'rollup'
import glob from 'fast-glob'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import consola from 'consola'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { excludeFiles } from '../utils'
import { modulesOutputConfig } from '../config'
import { componentsComponents } from '../path'

/**
 * TIPS This is a temporary solution to fix the building error
 * ReferenceError: __name is not defined after upgrade the vue to @3.3.x
 */
var __defProp = Object.defineProperty
var __name = (target, value) =>
  __defProp(target, 'name', { value, configurable: true })
globalThis.__name = __name

export async function buildModule() {
  consola.info('Start building modules...')
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: componentsComponents,
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins: [
      vue({
        isProduction: false,
        script: {
          defineModel: true,
        },
      }) as any,
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        keepNames: false,
        sourceMap: false,
        target: 'es2020',
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: ['vue', /\.less/],
    treeshake: false,
  })
  await Promise.all(modulesOutputConfig.map(option => bundle.write(option)))
  await bundle.close()
  consola.success('modules built!')
}
