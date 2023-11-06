import { h, onMounted, toRaw } from 'vue'
import theme from 'vitepress/theme'

// 导入本地源码样式--测试
import 'fusion-ui-vue/dist/styles/index.css' // 全部样式
import '@fusion-ui-vue/components/alert/src/index.less' // 单文件样式
import '@fusion-ui-vue/components/link/src/index.less' // 单文件样式

// 注册本地组件
import FusionUi from '@fusion-ui-vue/components'
import createTheme from '@fusion-ui-vue/theme'

import DemoBlock from '../components/demo-block'
import TableBlock from '../components/table-block'
import TeamMember from '../components/team-member'
import BpTable from '../components/table'
import 'uno.css'
import './main.css'
import './style/var.css'
import './style/table-block.less'
import './style/scrollbar.less'

export default {
  ...theme,
  setup() {
    onMounted(() => {
      const uiTheme = createTheme()

      ;(window as any).theme = toRaw(uiTheme.value)

      const html = document.documentElement
      const toggleTheme = () => {
        if (html.classList.contains('dark')) {
          uiTheme.value.mode = 'dark'
        } else {
          uiTheme.value.mode = 'light'
        }
      }

      toggleTheme()

      const observer = new MutationObserver(() => {
        toggleTheme()
        observer.takeRecords()
      })

      observer.observe(html, {
        attributes: true,
        childList: false,
        subtree: false,
      })
    })
  },
  enhanceApp({ app }) {
    app.use(FusionUi)
    app.component('Demo', DemoBlock)
    app.component('BpTable', BpTable)
    app.component('TableBlock', TableBlock)
    app.component('TeamMember', TeamMember)
  },
  Layout() {
    return h(theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
}
