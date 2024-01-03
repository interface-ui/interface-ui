import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(() => {
  return {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        '@comp': './.vitepress/components',
      },
    },
  }
})
