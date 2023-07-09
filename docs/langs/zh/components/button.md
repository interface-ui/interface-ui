---
title: Button
lang: zh
---

# Button

常见的操作按钮。

# 基础用法

### type

设置按钮的类型。

<demo src="../../../example/button/types.vue"></demo>

### size

设置按钮的尺寸。

<demo src="../../../example/button/sizes.vue"></demo>

### state

设置按钮的状态。

<demo src="../../../example/button/states.vue"></demo>

### shape

设置按钮的形状。

<demo src="../../../example/button/shapes.vue"></demo>

### disabled

可以使用禁用属性定义是否禁用按钮。

<demo src="../../../example/button/disabled.vue"></demo>

## 属性

| 属性名      | 可选值                                               | 默认值    | 描述             |
| ----------- | ---------------------------------------------------- | --------- | ---------------- |
| type        | `solid` \| `white` \| `outline` \| `ghost` \| `link` \| `dashed` | `solid`   | 设置按钮类型     |
| native-type | `button` \| `reset` \| `submit`                      | `button`  | 设置按钮原生类型 |
| shape       | `rounded` \| `pilled` \| `circle` \| `plain`         | `rounded` | 设置按钮形状     |
| size        | `small` \| `medium` \| `large`                       | `medium`  | 设置按钮尺寸     |
| state       | `info` \| `success` \| `warning` \| `danger`         | `info`    | 设置按钮状态     |
| disabled    | `boolean`                                            | `false`   | 设置按钮禁用状态 |

## 插槽

| 插槽名  | 参数 | 描述           |
| ------- | ---- | -------------- |
| default | `()` | 自定义默认内容 |
