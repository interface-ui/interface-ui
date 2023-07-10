import { h, onMounted } from 'vue'
import theme from 'vitepress/theme'
// import * as components from '../../../packages/fusion-ui/components/index.ts'
import * as components from 'fusion-ui-vue'
import DemoBlock from '../components/demo-block'
import TeamMember from '../components/team-member'
import 'uno.css'
import './main.css'
// import '../../../packages/fusion-ui/dist/styles/index.css'
import 'fusion-ui-vue/dist/styles/index.css'

export default {
  ...theme,
  setup() {
    onMounted(() => {
      const theme = () => localStorage.getItem('vitepress-theme-appearance')
      const htmlEl = document.querySelector('html') as HTMLHtmlElement

      htmlEl.setAttribute('data-theme', theme() !== 'dark' ? 'light' : 'dark')

      document.querySelector('.VPSwitch')?.addEventListener('click', () => {
        if (theme() !== 'dark')
          return htmlEl.setAttribute('data-theme', 'light')
        return htmlEl.setAttribute('data-theme', 'dark')
      })
    })
  },
  enhanceApp({ app }) {
    for (const name of Object.keys(components)) {
      if (name.startsWith('Fn'))
        app.component(name, components[name])
    }

    app.component('Demo', DemoBlock)
    app.component('TeamMember', TeamMember)
  },
  Layout() {
    return h(theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
}
