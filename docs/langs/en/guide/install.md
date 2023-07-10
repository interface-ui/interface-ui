# Installation

This section explains how to properly install and use an Fusion Ui.

## Install Package

```shell
# npm
npm i fusion-ui-vue

# yarn
yarn add fusion-ui-vue

# pnpm
pnpm add fusion-ui-vue
```

## On-demand Import

You need to use an additional plugin to import components you used. First you need to install [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) and [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import).

```shell
npm install -D unplugin-vue-components
```

<!-- unplugin-auto-import -->

Then add the code below into your Vite config file.

```ts
// vite.config.ts
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

<!-- ## Get Volar Typescript support

You can add the `OnuUI` global component type definition to `compilerOptions.types` in your project's `tsconfig.json`. Then [volar](https://github.com/johnsoncodehk/volar) will help you have a better experience while developing.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["onu-ui/volar"]
  }
}
``` -->
