# 安装使用

正确安装和使用 FusionUi

 推荐使用 ``自动导入`` 的方式来引入组件，简单快速。

## 安装

```shell
# npm
npm i interface-ui

# yarn
yarn add interface-ui

# pnpm
pnpm add interface-ui
```

## 完整引入

完整导入 ```FusionUi``` 组件。

```main.ts```
```ts
import { createApp } from 'vue'

import fusionUi from 'interface-ui'
import 'interface-ui/dist/styles/index.css'

import App from './App.vue'
const app = createApp(App)
app.use(fusionUi)
app.mount('#app')
```


## 按需引入

* 您可以使用 `import` 语句来导入您使用的组件。


```ts
import { InButton } from 'interface-ui'
import 'interface-ui/dist/styles/button.css'
```

### 自动导入
* 您也可以使用一个额外的插件来自动导入您使用的组件，首先你需要安装 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)。

```shell
npm install -D unplugin-vue-components
```

然后将下面的代码添加到你的 Vite 配置文件。

```vite.config.ts```
```ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'interface-ui/dist/lib/components/resolver'

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [PlayResolver()],
    }),
  ],
})
```
现在你可以启动项目了，具体每个组件的使用方法，请查看文档。

