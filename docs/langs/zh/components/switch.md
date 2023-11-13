---
title: Input
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/switch/description/zh-props.ts";
</script>


# Switch 开关

表示两种相互对立的状态间的切换


## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量，即可使用。

<demo src="../../../example/switch/basic.vue" />


# 开关颜色

```color``` 属性可以设置开关的颜色。

<demo src="../../../example/switch/size-color.vue" />

# 显示自定义图标

使用 ```checked-icon``` 和 ```un-checked-icon``` 属性来添加图标。```checkedIconColor``` 和 ```unCheckedIconColor``` 可以设置图标的颜色。

<demo src="../../../example/switch/icon.vue" />

## 属性
<table-block type="propsZh" :data="props" />
