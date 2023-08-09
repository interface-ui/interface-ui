# 安装使用

正确安装和使用 FusionUI

 推荐使用 ``自动导入`` 的方式来引入组件，简单快速。

## 获取安装包

```shell
# npm
npm i fusion-ui-vue

# yarn
yarn add fusion-ui-vue

# pnpm
pnpm add fusion-ui-vue
```

## 完整引入

完整导入 FusionUI 组件，包的体积会增大。

```main.ts```
```ts
import { createApp } from 'vue'
import fusionUi from 'fusion-ui-vue'
import 'fusion-ui-vue/dist/styles/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(fusionUi)
app.mount('#app')
```


## 按需引入

* 您可以使用 `import` 语句来导入您使用的组件。


```ts
import { FnButton } from 'fusion-ui-vue'
import 'fusion-ui-vue/dist/styles/button/src/index.css'
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
import { PlayResolver } from 'fusion-ui-vue/dist/lib/resolver'

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

