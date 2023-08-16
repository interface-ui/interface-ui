---
title: Button
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/button/description/zh-props.ts";
  import slots from "../../../example/button/description/zh-slots.ts";
</script>

# Button

常见的操作按钮。

##  基础用法

使用 `type`、`state` 来定义按钮的样式。

<demo src="../../../example/button/types.vue"></demo>

##  调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 `minid`、`small`、`medium` 和 `large` 四种值。

<demo src="../../../example/button/sizes.vue"></demo>



##  按钮形状

使用 ```shape``` 属性来定义按钮的形状。

<demo src="../../../example/button/shapes.vue"></demo>

## 自定义颜色

您可以自定义按钮的颜色，```state``` 属性将失效。

通过 ```color``` 属性来定义按钮的颜色，```background``` 属性来定义按钮的背景颜色。

<demo src="../../../example/button/custom.vue"></demo>


##  禁用状态

你可以使用  ```disabled``` 属性来定义按钮是否被禁用。

使用 ```disabled``` 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<demo src="../../../example/button/disabled.vue"></demo>

##  图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 ```icon``` 属性来为按钮添加图标。

<demo src="../../../example/button/icon.vue"></demo>

## 属性

<table-block type="propsZh" :data="props"></table-block>

## 插槽

<table-block type="slotsZh" :data="slots"></table-block>
