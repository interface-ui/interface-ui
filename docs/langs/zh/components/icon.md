---
title: Button
lang: zh
---

# Icon 图标

集成了```Iconify```上千个常用的图标。

# 使用图标

* 如果你想像用例一样直接使用，你需要简单操作一下，才能够直接在项目里使用。

# 安装

```
# 选择一个你喜欢的包管理器

# NPM
$ npm install fusion-ui-iconify
# Yarn
$ yarn add fusion-ui-iconify
# pnpm
$ pnpm install fusion-ui-iconify
```

# 注册图标
您需要从 ```fusion-ui-iconify``` 中导入图标并进行全局注册。
```
// main.ts

import Icon form 'fusion-ui-iconify'

app.use(Icon)
```

## 使用图标

* 你可以在任何地方使用图标，只需要在标签中添加图标名称即可。


<demo src="../../../example/icon/icon.vue"></demo>

## 默认大小

<demo src="../../../example/icon/size.vue"></demo>

