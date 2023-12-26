<script lang="ts" setup>
import '@interface-ui/core/src/breadcrumb/src/index.less' // 开发调试的样式
import { InLink, InBreadcrumb } from '@interface-ui/core'
import {
  NavigateNextFilled,
  HomeFilled,
  FlagFilled,
  AppsFilled,
} from 'fusion-ui-iconify'
</script>

<template>
  <!-- Basic -->
  <in-breadcrumb>
    <in-link>Interface UI</in-link>
    <in-link>Components</in-link>
    <in-link>Breadcrumb</in-link>
  </in-breadcrumb>

  <!-- Separator -->
  <in-breadcrumb separator="-">
    <in-link>Interface UI</in-link>
    <in-link>Components</in-link>
    <in-link>Breadcrumb</in-link>
  </in-breadcrumb>

  <in-breadcrumb :separator="NavigateNextFilled">
    <in-link>Interface UI</in-link>
    <in-link>Components</in-link>
    <in-link>Breadcrumb</in-link>
  </in-breadcrumb>

  <!-- underline -->
  <in-breadcrumb underline="none">
    <in-link>Interface UI</in-link>
    <in-link>Components</in-link>
    <in-link>Breadcrumb</in-link>
  </in-breadcrumb>

  <in-breadcrumb underline="always">
    <in-link>Interface UI</in-link>
    <in-link>Components</in-link>
    <in-link>Breadcrumb</in-link>
  </in-breadcrumb>

  <!-- Collapsed -->
  <in-breadcrumb max="2" :separator="NavigateNextFilled">
    <in-link>Interface UI</in-link>
    <in-link>Components</in-link>
    <in-link>Breadcrumb</in-link>
  </in-breadcrumb>

  <!-- Color -->
  <in-breadcrumb color="primary">
    <in-link>Interface UI</in-link>
    <in-link>Components</in-link>
    <in-link>Breadcrumb</in-link>
  </in-breadcrumb>
  <in-breadcrumb :color="theme => theme.colors.cyan[400]">
    <in-link>Interface UI</in-link>
    <in-link>Components</in-link>
    <in-link>Breadcrumb</in-link>
  </in-breadcrumb>

  <!-- Icon -->
  <in-breadcrumb>
    <in-link><home-filled /> Interface UI</in-link>
    <in-link><flag-filled /> Components</in-link>
    <in-link><apps-filled /> Breadcrumb</in-link>
  </in-breadcrumb>
</template>
