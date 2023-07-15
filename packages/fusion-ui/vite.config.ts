import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, './components/index.ts'),
      name: 'dist',
      fileName: 'dist',
    }, // 库编译模式配置

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
