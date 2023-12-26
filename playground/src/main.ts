import { createApp } from 'vue'
import InterfaceUI from '@interface-ui/core'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

import './style.css'
import '@interface-ui/theme/styles'
import '@interface-ui/core/styles'
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

createApp(App).use(router).use(InterfaceUI).mount('#app')
