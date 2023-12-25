# Installation & Usage

 how to properly install and use an Interface UI

It is recommended to use ```automatic import``` to import components, which is simple and fast.

## Install Package

::: code-group
```shell [npm]
npm i interface-ui
```

```shell [yarn]
yarn add interface-ui
```

```shell [pnpm]
pnpm add interface-ui
```
:::

## Full Import

By fully importing FusionUi components, the package size will increase.

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

## On-demand Import

* You can use the import statement to import the components you use.

```ts
import { InButton } from 'interface-ui'
import 'interface-ui/dist/styles/button.css'
```

### Auto import
* You need to use an additional plugin to import components you used. First you need to install [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components).

```shell
npm install -D unplugin-vue-components
```

<!-- unplugin-auto-import -->

Then add the code below into your Vite config file.

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
Now you can start the project. Please check the document for the specific usage of each component.
