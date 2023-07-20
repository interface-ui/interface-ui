---
title: Button
lang: en-US
---

# Button

Common operation buttons.

## Usage

### type

You can use the type, plain, round, and circle attributes to define the style of the button.

<demo src="../../../example/button/types.vue"></demo>

### size

Buttons stacked small to large sizes.

<demo src="../../../example/button/sizes.vue"></demo>

### state


### shape

Predefined the shape of the button.

<demo src="../../../example/button/shapes.vue"></demo>

### disabled

You can use the disabled attribute to define whether the button is disabled.

<demo src="../../../example/button/disabled.vue"></demo>


### icon

Button with icon.

<demo src="../../../example/button/icon.vue"></demo>

## Props

| Name        | Type                                                 | Default   | Description                |
| ----------- | ---------------------------------------------------- | --------- | -------------------------- |
| type        | `solid` \| `white` \| `outline` \| `ghost` \| `link`\| `diplonema` | `solid`   | Set custom type attribute. |
| native-type | `button` \| `reset` \| `submit`                      | `button`  | Set native type attribute. |
| shape       | `round` \| `pill` \| `circle` \| `plain`         | `round` | Set button shape.          |
| size        | `small` \| `medium` \| `large`                       | `medium`  | Set button size.           |
| state       | `info` \| `success` \| `warning` \| `danger`         | `info`    | Set button state.          |
| disabled    | `boolean`                                            | `false`   | Disable the button.        |
| disabled    | `icon`                                            | `' '`   | Set the button icon |

## Slots

| Name    | Parameters | Description                |
| ------- | ---------- | -------------------------- |
| default | `()`       | Customize default content. |
