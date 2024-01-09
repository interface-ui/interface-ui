<script lang="ts" setup>
import '@core/breadcrumb/src/index.less'
import '@core/link/src/index.less'
import { InLink, InBreadcrumb } from '@core'
import NavigateNext from '@interface-ui/icons/NavigateNextFilled'
import Home from '@interface-ui/icons/HomeFilled'
import Flag from '@interface-ui/icons/FlagFilled'
import Apps from '@interface-ui/icons/AppsFilled'
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

  <in-breadcrumb :separator="NavigateNext">
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
  <in-breadcrumb max="2" :separator="NavigateNext">
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
    <in-link><home /> Interface UI</in-link>
    <in-link><flag /> Components</in-link>
    <in-link><apps /> Breadcrumb</in-link>
  </in-breadcrumb>
</template>
