import { createApp } from 'vue'
import fusionUi from '@interface-ui/components'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

import './style.css'
import 'interface-ui/dist/styles/index.css'
import '@interface-ui/components/src/ripple/src/index.less'
import '@interface-ui/components/src/button-base/src/index.less'
import '@interface-ui/components/src/button/src/index.less'
import '@interface-ui/components/src/message/src/index.less'
import '@interface-ui/components/src/modal/src/index.less'

import 'virtual:uno.css'
import 'uno.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Playground',
      component: () => import('./components/Home.vue'),
    },
    ...routes,
  ],
})

router.beforeResolve(to => {
  document.title = `${to.name as string} ｜ Interface UI`
})

createApp(App).use(router).use(fusionUi).mount('#app')
