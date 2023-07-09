import { fileURLToPath } from 'node:url'
import Unocss from 'unocss/vite'

export const vite = {
  resolve: {
    alias: [
      {
        find: /^.*\/VPNavBarMenu\.vue$/,
        replacement: fileURLToPath(
          new URL('../components/nav-bar-menu/index.vue', import.meta.url),
        ),
      },
    ],
  },
  plugins: [
    Unocss(),
  ],
  server: {
    fs: {
      allow: ['..'],
    },
  },
}
