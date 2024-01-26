---
title: Dialog
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/dialog/description/zh-props.ts";
  import slots from "../../../example/dialog/description/zh-slots.ts";
</script>

# Dialog 对话框

弹框展示并承载用户相关操作。

## 基础用法

需要 `v-model` 来控制 Dialog 的显示状态, Dialog 分为三个部分：`title`、`content`、`footer`，根据需要自行组合来展示内容。

<demo src="../../../example/dialog/base.vue" />

## 全屏显示

`fullscreen`可以让 Dialog 全屏显示。

<demo src="../../../example/dialog/fullscreen.vue" />

<demo src="../../../example/dialog/modal.vue" />

## 属性

<data-table type="props" lang="zh" :data="props" />
