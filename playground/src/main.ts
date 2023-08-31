import { createApp } from 'vue'
import fusionUi from 'fusion-ui-vue'

import './style.css'
import 'fusion-ui-vue/dist/styles/base.css'
import 'fusion-ui-vue/dist/styles/index.css' // 打包后的全量样式
import '@fusion-ui/components/alert/src/index.less' // 开发调试的样式

import 'virtual:uno.css'
import 'uno.css'
import App from './App.vue'

createApp(App).use(fusionUi).mount('#app')
