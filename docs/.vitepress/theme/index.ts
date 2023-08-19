import { h, onMounted } from 'vue'
import theme from 'vitepress/theme'
import FusionUi from '../../../packages/fusion-ui/components/index'

// 导入本地全量打包样式--测试
import '../../../packages/fusion-ui/dist/styles/index.css'

// 导入本地源码样式--测试
import '../../../packages/fusion-ui/styles/base.less' // 基础样式
import '../../../packages/fusion-ui/components/button/src/index.less'
import '../../../packages/fusion-ui/components/button/src/index.less'
import '../../../packages/fusion-ui/components/alert/src/index.less'
// import '../../../packages/fusion-ui/components/dialog/src/index.less'
// import '../../../packages/fusion-ui/components/input/src/index.less'
// import '../../../packages/fusion-ui/components/radio/src/index.less'
// import '../../../packages/fusion-ui/components/button/src/index.less'
// import '../../../packages/fusion-ui/components/switch/src/index.less'
// import '../../../packages/fusion-ui/components/progress/src/index.less'
// import '../../../packages/fusion-ui/components/card/src/index.less'
import '../../../packages/fusion-ui/components/tag/src/index.less'

// 导入 npm 包
// import FusionUi from 'fusion-ui-vue'
// import 'fusion-ui-vue/dist/styles/index.css'

import DemoBlock from '../components/demo-block'
import TableBlock from '../components/table-block'
import TeamMember from '../components/team-member'
import BpTable from '../components/table'
import 'uno.css'
import './main.css'
import './style/var.css'
import './style/table-block.less'

export default {
  ...theme,
  setup() {
    onMounted(() => {
      const html = document.documentElement
      const toggleTheme = () => {
        if (html.classList.contains('dark'))
          html.setAttribute('data-theme', 'dark')
        else html.removeAttribute ('data-theme')
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
