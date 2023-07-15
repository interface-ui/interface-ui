---
title: Button
lang: zh
---

# Icon

It integrates thousands of commonly used icons. `Iconify`.


* If you want to use it directly like a use case, you need to operate it simply before you can use it directly in the project.

# Install

```
# Choose a package manager you like.

# NPM
$ npm install fusion-ui-iconify
# Yarn
$ yarn add fusion-ui-iconify
# pnpm
$ pnpm install fusion-ui-iconify
```

# Registration icon
You need to import icons from ```fusion-ui-iconify``` and register globally.

```main.ts```

```ts

import Icon form 'fusion-ui-iconify'

app.use(Icon)
```

## Icon Usage

* You can use the icon anywhere, just add the icon name to the label.


<demo src="../../../example/icon/icon.vue"></demo>

## Default size

<demo src="../../../example/icon/size.vue"></demo>

## Props

| Name      | Type                                               | Default    | Description             |
| ----------- | ---------------------------------------------------- | --------- | ---------------- |
| icon        | `String` | ``                                         | 选Select the icon name     |
| size        | `Number`                                             | `14`  | Set the icon size |
| color       | `String`                                             | `` | Set the icon color     |
