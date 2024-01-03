import theme from 'vitepress/theme'
import InterfaceUI from '@interface-ui/core'
import Layout from '../components/Layout'
import '@interface-ui/theme/styles' // Theme styles
import '@interface-ui/core/styles' // All components styles

import DemoBlock from '../components/demo-block'
import TeamMember from '../components/team-member'
import DataTable from '../components/data-table'
import 'uno.css'
import './main.css'
import './style/table-block.less'
import './style/scrollbar.less'

export default {
  extends: theme,
  enhanceApp({ app }) {
    app.use(InterfaceUI)
    app.component('Demo', DemoBlock)
    app.component('DataTable', DataTable)
    app.component('TeamMember', TeamMember)
  },
  Layout,
}
