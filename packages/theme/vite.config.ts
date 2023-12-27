import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts({ outDir: ['es', 'lib'], rollupTypes: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'modules',
    minify: true,
    rollupOptions: {
      input: 'src/index.ts',
      external: ['vue', '@interface-ui/utils', '@emotion/css'],
      output: [
        {
          format: 'es',
          dir: path.resolve(__dirname, 'es'),
          entryFileNames: '[name].js',
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'cjs',
          dir: path.resolve(__dirname, 'lib'),
          entryFileNames: '[name].js',
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'theme',
      formats: ['es', 'cjs'],
    },
  },
})
