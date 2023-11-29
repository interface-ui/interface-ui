<script lang="ts" setup>
import '@fusion-ui-vue/components/breadcrumb/src/index.less' // 开发调试的样式
import { FnLink, FnBreadcrumb } from '@fusion-ui-vue/components'
import {
  NavigateNextFilled,
  HomeFilled,
  FlagFilled,
  AppsFilled,
} from 'fusion-ui-iconify'
</script>

<template>
  <!-- Basic -->
  <fn-breadcrumb>
    <fn-link>Home</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Button</fn-link>
  </fn-breadcrumb>

  <!-- Separator -->
  <fn-breadcrumb separator="-">
    <fn-link>Home</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Button</fn-link>
  </fn-breadcrumb>

  <fn-breadcrumb :separator="NavigateNextFilled">
    <fn-link>Home</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Button</fn-link>
  </fn-breadcrumb>

  <!-- underline -->
  <fn-breadcrumb underline="none">
    <fn-link>Home</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Button</fn-link>
  </fn-breadcrumb>

  <fn-breadcrumb underline="always">
    <fn-link>Home</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Button</fn-link>
  </fn-breadcrumb>

  <!-- Collapsed -->
  <fn-breadcrumb max="2" :separator="NavigateNextFilled">
    <fn-link>Home</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Button</fn-link>
  </fn-breadcrumb>

  <!-- Color -->
  <fn-breadcrumb color="primary">
    <fn-link>Home</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Button</fn-link>
  </fn-breadcrumb>
  <fn-breadcrumb :color="theme => theme.colors.cyan[400]">
    <fn-link>Home</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Button</fn-link>
  </fn-breadcrumb>

  <!-- Icon -->
  <fn-breadcrumb>
    <fn-link><home-filled /> Interface UI</fn-link>
    <fn-link><flag-filled /> Getting Start</fn-link>
    <fn-link><apps-filled /> Components</fn-link>
  </fn-breadcrumb>
</template>
