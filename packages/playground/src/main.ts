import { createApp } from 'vue'
import './style.css'
import '../../fusion-ui/dist/styles/index.css'
import '../../fusion-ui/components/switch/src/index.less'
import '../../fusion-ui/components/radio/src/index.less'
import '../../fusion-ui/components/badge/src/index.less'
import '../../fusion-ui/components/progress/src/index.less'
import fusionUi from '../../fusion-ui/components/index'
import App from './App.vue'
import 'virtual:uno.css'
import 'uno.css'
createApp(App).use(fusionUi).mount('#app')
// createApp(App).use(fusionUi).use(Icon).mount('#app')
