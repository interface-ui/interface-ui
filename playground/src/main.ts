import { createApp } from 'vue'
// import fusionUi from 'fusion-ui-vue'
import fusionUi from '@fusion-ui-vue/components'
// import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
// import 'fusion-ui-vue/dist/styles/base.css'
import 'fusion-ui-vue/dist/styles/index.css' // 打包后的全量样式
import '@fusion-ui-vue/components/avatar/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/ripple/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/button/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/avatar-group/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/form-label/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/badge/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/button-group/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/text-field/src/index.less' // 开发调试的样式

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
