import theme from 'vitepress/theme'
import FusionUi from '@fusion-ui-vue/components'
import Layout from '../components/Layout'

// 导入本地源码样式--测试
import 'fusion-ui-vue/dist/styles/index.css' // 全部样式

import DemoBlock from '../components/demo-block'
import TableBlock from '../components/table-block'
import TeamMember from '../components/team-member'
import BpTable from '../components/table'
import 'uno.css'
import './main.css'
import './style/table-block.less'
import './style/scrollbar.less'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(FusionUi)
    app.component('Demo', DemoBlock)
    app.component('BpTable', BpTable)
    app.component('TableBlock', TableBlock)
    app.component('TeamMember', TeamMember)
  },
  Layout,
}
