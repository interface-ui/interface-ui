---
title: Icon
lang: en
---

<script setup lang="ts">
  import props from "../../../example/icon/description/en-props.ts";
</script>

# Icon

Integration of thousands of commonly used icons from Iconify.

* If you want to use it directly like a use case, you need to perform a simple operation to use it directly in your project.

## Installation

```
# Choose your favorite package manager

# NPM
$ npm install fusion-ui-iconify
# Yarn
$ yarn add fusion-ui-iconify
# pnpm
$ pnpm install fusion-ui-iconify

```

## Register Icons

You need to import icons from fusion-ui-iconify and register them globally.

```main.ts```
```ts

import Icon form 'fusion-ui-iconify'

app.use(Icon)
```

## Using Icons

* You can use icons anywhere by simply adding the icon name in the tag.


<demo src="../../../example/icon/icon.vue"></demo>

## Size

The default size of the icon is ```16```, and you can set the icon size using the size attribute.

<demo src="../../../example/icon/size.vue"></demo>

## Color

You can set the color of the icon using the color attribute.

<demo src="../../../example/icon/color.vue"></demo>

## Attributes

<table-block type="propsEn" :data="props"></table-block>

