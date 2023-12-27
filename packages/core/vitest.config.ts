import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [Vue() as any, VueJsx() as any],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    watch: false,
    clearMocks: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },

    include: ['src/components/**/__test__/*.spec.ts'],
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi', '@vue/composition-api'],
    },
    setupFiles: [resolve(__dirname, './vitest.setup.ts')],
    reporters: 'dot',
  },
})
