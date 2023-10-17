import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), VueJsx()],
  resolve: {
    alias: {
      'fusion-ui-vue': path.resolve(__dirname, './packages/fusion-ui'),
    },
  },
})
