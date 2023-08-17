---
title: Switch
lang: en
---

<script setup lang="ts">
  import props from "../../../example/switch/description/en-props.ts";
  import events from "../../../example/switch/description/en-events.ts";
</script>


## Switch

Indicates the switching between two opposing states


# Basic usage

Bind the 'v model' to a variable of type 'Boolean' to use it.

<demo src="../../../example/switch/base.vue"></demo>


# Switch color

```color``` 属性可以设置开关的颜色

<demo src="../../../example/switch/color.vue"></demo>

# Text description

``` checked-text``` ```un-checked-text``` 设置开关的文字描述，超出长度会被隐藏

<demo src="../../../example/switch/text.vue"></demo>


# Show custom icons

Use the ```checked-icon``` and ```un-checked-icon```` properties to add icons. ```checkedIconColor``` and ```unCheckedIconColor``` can set the color of the icon

<demo src="../../../example/switch/icon.vue"></demo>

# Disabled state

```disabled``` property can set the disabled state of the switch

<demo src="../../../example/switch/disabled.vue"></demo>

## Attributes
<table-block type="propsZh" :data="props"></table-block>


## Events
<table-block type="eventsZh" :data="events"></table-block>
