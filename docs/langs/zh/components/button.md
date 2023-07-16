---
title: Button
lang: zh
---

# Button

常见的操作按钮。

# 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<demo src="../../../example/button/types.vue"></demo>
<demo src="../../../example/button/states.vue"></demo>

# 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large和small两种值。

<demo src="../../../example/button/sizes.vue"></demo>



# 按钮形状
使用 ```shape``` 属性来定义按钮的形状。


<demo src="../../../example/button/shapes.vue"></demo>

# 禁用状态

你可以使用  ```disabled``` 属性来定义按钮是否被禁用。

使用 ```disabled``` 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<demo src="../../../example/button/disabled.vue"></demo>

# 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 ```icon``` 属性来为按钮添加图标。

<demo src="../../../example/button/icon.vue"></demo>

## 属性

| 属性名      | 可选值                                               | 默认值    | 描述             |
| ----------- | ---------------------------------------------------- | --------- | ---------------- |
| type        | `solid` \| `white` \| `outline` \| `ghost` \| `link` \| `dashed` \| `diplonema`  | `solid`   | 设置按钮类型     |
| native-type | `button` \| `reset` \| `submit`                      | `button`  | 设置按钮原生类型 |
| shape       | `round` \| `pill` \| `circle` \| `plain`         | `round` | 设置按钮形状     |
| size        | `small` \| `medium` \| `large`                       | `medium`  | 设置按钮尺寸     |
| state       | `info` \| `success` \| `warning` \| `danger`         | `info`    | 设置按钮状态     |
| disabled    | `boolean`                                            | `false`   | 设置按钮禁用状态 |
| icon        | `样式名`                                               | `' '`   | 设置按钮图标 |

## 插槽

| 插槽名  | 参数 | 描述           |
| ------- | ---- | -------------- |
| default | `()` | 自定义默认内容 |
