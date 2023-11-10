---
title: Theming
lang: en
---

# Theming

Fusion UI is a components library based on Vue 3 that implements [Google’s Material Design](https://m3.material.io/).

The theme design aims to provide a set of development specifications to ensure that components developed by different developers have the same styles.

The theme dictates component colors, surface darkness, shadow intensity, ink element opacity, and more.

Themes provide a uniform tone for your app, enabling customization of all design elements to align with your business or brand requirements.

To enhance consistency across apps, you can choose between light and dark theme modes. The default setting is the light theme mode for components.

## Core of Design

### Dynamic color

To provide a flexible way to customize the theme, we use the [dynamic color system](https://m3.material.io/styles/color/dynamic-color/overview) to create the theme schemes by passing the source color.

### Nested theme

You can use the nested theme with the `ThemeProvider` component.

All the Fusion UI components inside the `ThemeProvider` will appply the new theme.

<demo src="../../../example/theme/nested.vue"></demo>

## APIs

### createTheme()

```typescript
createTheme: (source?: string, config?: ThemeConfig) => Ref<Theme>
```

Generate the theme based on the source color and configuration. Call it at the **root component** (e.g. `<App />`)

```vue
<script setup lang="ts">
createTheme()
</script>

<template>
  <div>
    <!-- Child components -->
  </div>
</template>
```

#### Arguments

* `source?: string`: The source color used to create theme schemes and palettes.

* `config?: ThemeConfig`: The optional configuration to override the results of dynamic theme.

### styled()

```typescript
styled(comp: Component | string, props?) =>
  ((
    style: TemplateStringsArray | ((theme: Theme) => CSSInterpolation),
    ...args: CSSInterpolation[]
  ) => Component)
```

The styled component function. Return a Vue component with specific props and styles.

#### Arguments

* `comp: Component | string`: A Vue component or html tag (e.g. 'div')

* `props?`: The properities and attributes of the component or html tag

* `style: TemplateStringsArray | ((theme: Theme) => CSSInterpolation)`: The string or call back function to generate CSS
