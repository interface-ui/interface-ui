---
title: Button
lang: en-US
---

# Button

Common operation buttons.

## Usage

### type

The most commonly used button styles.

<demo src="../../../example/button/types.vue"></demo>

### size

Buttons stacked small to large sizes.

<demo src="../../../example/button/sizes.vue"></demo>

### state

Predefined button state.

<demo src="../../../example/button/states.vue"></demo>

### shape

Predefined the shape of the button.

<demo src="../../../example/button/shapes.vue"></demo>

### disabled

You can use the disabled attribute to define whether the button is disabled.

<demo src="../../../example/button/disabled.vue"></demo>

## Props

| Name        | Type                                                 | Default   | Description                |
| ----------- | ---------------------------------------------------- | --------- | -------------------------- |
| type        | `solid` \| `white` \| `outline` \| `ghost` \| `link` | `solid`   | Set custom type attribute. |
| native-type | `button` \| `reset` \| `submit`                      | `button`  | Set native type attribute. |
| shape       | `rounded` \| `pilled` \| `circle` \| `plain`         | `rounded` | Set button shape.          |
| size        | `small` \| `medium` \| `large`                       | `medium`  | Set button size.           |
| state       | `info` \| `success` \| `warning` \| `danger`         | `info`    | Set button state.          |
| disabled    | `boolean`                                            | `false`   | Disable the button.        |

## Slots

| Name    | Parameters | Description                |
| ------- | ---------- | -------------------------- |
| default | `()`       | Customize default content. |
