---
title: Progress
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/progress/description/zh-props.ts";
</script>


# Progress 进度条

进度指示器实时显示了一个过程的状态。

## 用法

有两种进度指示器的变体：`circular`（圆形）和`linear`（线性）

### 圆形

圆形进度指示器通过沿着一个不可见的圆形轨道顺时针方向进行动画显示进度。它们可以直接应用于表面，例如按钮或卡片。
<demo src="../../../example/progress/circular.vue" preview="[2]" />

### 线性

线性进度指示器通过沿着固定可见轨道的长度进行动画显示进度。指示器的行为取决于进程的进度是否已知。
<demo src="../../../example/progress/linear.vue" preview="[2]" />

### 状态

**确定指示器（determinate）** 显示了一个过程需要多长时间。当可以检测到过程完成率时，应使用它们。

使用 `value` 属性来设置进度的百分比。
<demo src="../../../example/progress/determinate.vue" preview="[15, 16]" />

**不确定指示器（indeterminate）** 表示未指定的等待时间。当进度不可检测时，或者不需要指示活动需要多长时间时，应使用它们。
<demo src="../../../example/progress/indeterminate.vue" preview="[2, 3]" />

### 颜色

使用 `color` 来自定义进度
<demo src="../../../example/progress/color.vue" preview="[2-5]" />


## 属性

<data-table type="props" lang="zh" :data="props" />

