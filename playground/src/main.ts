import { createApp } from 'vue'
import fusionUi from '@fusion-ui-vue/components'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

import './style.css'
import 'interface-ui/dist/styles/index.css'
import '@fusion-ui-vue/components/src/ripple/src/index.less'
import '@fusion-ui-vue/components/src/button-base/src/index.less'
import '@fusion-ui-vue/components/src/button/src/index.less'
import '@fusion-ui-vue/components/src/message/src/index.less'
import '@fusion-ui-vue/components/src/modal/src/index.less'

import 'virtual:uno.css'
import 'uno.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('./components/Home.vue') },
    ...routes,
  ],
})

createApp(App).use(router).use(fusionUi).mount('#app')
