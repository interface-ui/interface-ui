---
title: Link
lang: zh
---

# Link 链接

文字超链接

# 基础用法

基础的文字链接用法。


<demo src="../../../example/link/base.vue"></demo>

# 禁用状态 
文字链接不可用状态。

<demo src="../../../example/link/disabled.vue"></demo>


# 下划线 
文字链接下划线。

<demo src="../../../example/link/underline.vue"></demo>

# 图标
带图标的文字链接可增强辨识度。

<demo src="../../../example/link/iconlink.vue"></demo>

# 属性

| 属性名      | 可选值                                               | 默认值    | 描述             |
| ----------- | ---------------------------------------------------- | --------- | ---------------- |
| type        | `primary`  \| `success`  \| `warning`  \| `danger`  \| `info`  \| `default`   | `default`     |设置链接类型
| disabled | `true` \| `false`                      | `false`  | 设置链接禁用 |
| href       |  `String`         | `---` | 原生 href 属性     |
| icon        | `String`                       | `---`  | 图标组件     |
| underline       | `true` \| `false`                      | `false`  | 隐藏下划线 |

