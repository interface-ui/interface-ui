import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  exclude: ['node_modules', '.git', '.gitlab', '.husky', '.vscode', 'build', 'dist', 'mock', 'public', './stats.html'],
  presets: [presetUno(), presetAttributify(), presetIcons()],
  shortcuts: [],
  rules: [
    ['flex', { display: 'flex' }],
  ],
})
