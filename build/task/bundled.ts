import path from 'node:path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import consola from 'consola'
import type { Plugin } from 'rollup'
import { bundleOutputConfig } from '../config'
import { componentsRoot } from '../path'

export async function buildBundled() {
  consola.info('Start building bundle...')
  const plugins: Plugin[] = [
    vue(),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    commonjs(),
    esbuild({
      sourceMap: true,
      target: 'es2018',
      loaders: {
        '.vue': 'ts',
      },
      treeShaking: true,
      legalComments: 'eof',
    }),
    minifyPlugin({
      target: 'es2018',
      sourceMap: true,
    }),
  ]
  const bundle = await rollup({
    input: path.resolve(componentsRoot, 'index.ts'),
    plugins,
    external: ['vue', /\.less/],
    treeshake: true,
  })
  await Promise.all(bundleOutputConfig.map(option => bundle.write(option)))
  await bundle.close()
  consola.success('bundle built!')
}
