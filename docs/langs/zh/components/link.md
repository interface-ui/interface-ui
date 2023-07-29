---
title: Link
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/link/description/zh-props.ts";
  import slots from "../../../example/link/description/zh-slots.ts";
</script>


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

<table-block type="propsZh" :data="props"></table-block>
