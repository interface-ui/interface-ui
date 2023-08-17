---
title: Progress
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/progress/description/zh-props.ts";
  import slots from "../../../example/progress/description/zh-slots.ts";
</script>


# Progress 进度条

展示操作的当前进度状态。


## 基础用法

Progress组件 ```percentage``` 属性控制当前进度的百分比。

<demo src="../../../example/progress/base.vue"></demo>


## 状态

可以通过 ```status``` 属性控制进度条的状态，可选值为 ```success```、```danger```、```warning```。

<demo src="../../../example/progress/status.vue"></demo>

## 进度条内显示百分比标识

可以通过 ```text-inside``` 属性控制进度条内是否显示百分比标识，```heihgt``` 属性控制进度条的高度。
<demo src="../../../example/progress/inner.vue"></demo>


## 自定义进度条颜色

可以通过 ```background``` 属性控制进度条的颜色, ```bar-color``` 属性控制进度条内百分比标识的颜色。 
<demo src="../../../example/progress/color.vue"></demo>

## 环形进度条

```type``` 属性控制进度条是否为环形，```stroke-width``` 属性控制环形进度条的宽度。
<demo src="../../../example/progress/circle.vue"></demo>

可以通过 ```width``` 属性控制环形进度条的大小。
<demo src="../../../example/progress/circle-width.vue"></demo>

可以通过 ```color``` 属性控制环形进度条激活背景的颜色， ```background``` 属性控制环形进度条未激活背景的颜色。
<demo src="../../../example/progress/circle-bg.vue"></demo>

可以通过 ```slots``` 属性自定义环形进度条内显示的内容。
<demo src="../../../example/progress/slots.vue"></demo>

## 动画进度条

使用 ```intermediate``` 属性来设置不确定的进度， ```duration``` 来控制动画持续时间。

<demo src="../../../example/progress/intermediate.vue"></demo>


## 条纹进度条

```striped``` 属性获取条纹进度条，可以使用 ```striped-flow``` 属性来使条纹流动起来，```duration``` 属性控制流动的速度。

<demo src="../../../example/progress/striped.vue"></demo>


 ## 属性

<table-block type="propsZh" :data="props"></table-block>


## Slots

<table-block type="slotsZh" :data="slots"></table-block>
