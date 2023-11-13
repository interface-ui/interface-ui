---
title: ThemeProvider
lang: en
---

# ThemeProvider

The component to inject styles in child components.

## Usage

Passing the theme object created by createTheme allows you to customize the theme for the whole application or use it as the nested theme.

```vue
<script lang="ts" setup>
import createTheme, { ThemeProvider } from '@fusion-ui-vue/theme'
const theme = createTheme()
</script>

<template>
  <theme-provider v-model:theme="theme">
    <!-- Child -->
  </theme-provider>
</template>
```

ThemeProvider relies on the `provide` and `inject` feature of Vue to pass the theme down to the components, so you need to make sure that ThemeProvider is a parent of the components you are trying to customize.

::: tip
Make sure create the theme at the root component (e.g. App.vue)
:::

## Use the custom theme

Use the createTheme function to generate the theme object with custom parameters. The default theme is generated when no arguments are passed. Use the custom theme.

It comes with just one source color. To enable the default theme, pass nothing to the first argument.

```vue
<!-- App.vue -->
<script lang="ts" setup>
import createTheme, { ThemeProvider } from '@fusion-ui-vue/theme'
const theme = createTheme('#2196F3')
</script>

<template>
  <theme-provider v-model:theme="theme">
    <!-- Child -->
  </theme-provider>
</template>
```
