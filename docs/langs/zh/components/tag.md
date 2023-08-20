---
title: Tag
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/tag/description/zh-props.ts";
  import slots from "../../../example/tag/description/zh-slots.ts";
    import events from "../../../example/tag/description/zh-events.ts";
</script>

# Tag 标签

用于标记和选择。

##  基础用法

由 type 属性来选择 tag 的类型。

<demo src="../../../example/tag/base.vue"></demo>

##  可移除的标签

设置 closable 属性可以定义一个标签是否可移除。 它接受一个 Boolean。当 Tag 被移除时会触发 close 事件。

<demo src="../../../example/tag/closable.vue"></demo>

##  动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现。

<demo src="../../../example/tag/edit.vue"></demo>
##  调整尺寸

Tag 组件提供三种尺寸，可以在不同场景下选择合适的按钮尺寸。

使用 size 属性来设置额外尺寸, 可选值包括 large, default 或 small。

<demo src="../../../example/tag/size.vue"></demo>



##  圆形标签

Tag 可以向按钮组件一样变为圆形。

<demo src="../../../example/tag/round.vue"></demo>

## 自定义颜色

可以通过 color 属性来定义 Tag 的颜色。

<demo src="../../../example/tag/color.vue"></demo>


## 属性

<table-block type="propsZh" :data="props"></table-block>

## 事件

<table-block type="eventsZh" :data="events"></table-block>

## 插槽

<table-block type="slotsZh" :data="slots"></table-block>
