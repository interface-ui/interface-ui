import { createApp } from 'vue'
// import fusionUi from 'fusion-ui-vue'
import fusionUi from '@fusion-ui-vue/components'
// import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
// import 'fusion-ui-vue/dist/styles/base.css'
import 'interface-ui/dist/styles/index.css' // 打包后的全量样式
import '@fusion-ui-vue/components/src/ripple/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/src/button-base/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/src/button/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/src/alert/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/src/message/src/index.less' // 开发调试的样式
// import RouterView from './RouterHello.vue'

import 'virtual:uno.css'
import 'uno.css'
import App from './App.vue'

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/user', component: RouterView },
//   ],
// })

// createApp(App).use(fusionUi).mount('#app')
createApp(App).use(fusionUi).mount('#app')
// createApp(App).mount('#app')
