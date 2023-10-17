import { h, onMounted } from 'vue'
import theme from 'vitepress/theme'

// 导入本地源码样式--测试
import '../../../packages/fusion-ui/dist/styles/index.css' // 全部样式
import '@fusion-ui-vue/components/button/src/index.less' // 单文件样式
import '@fusion-ui-vue/components/drawer/src/index.less' // 单文件样式
import '@fusion-ui-vue/components/link/src/index.less' // 单文件样式
import '@fusion-ui-vue/components/dialog/src/index.less' // 单文件样式
import '@fusion-ui-vue/components/message/src/index.less' // 单文件样式

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
      createTheme()

      const html = document.documentElement
      const toggleTheme = () => {
        if (html.classList.contains('dark'))
          html.setAttribute('data-theme', 'dark')
        else html.removeAttribute('data-theme')
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
