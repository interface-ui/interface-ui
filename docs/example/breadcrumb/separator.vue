<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { NavigateNextFilled } = pkg
</script>

<template>
  <fn-breadcrumb separator="-">
    <fn-link>Interface UI</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Breadcrumb</fn-link>
  </fn-breadcrumb>

  <fn-breadcrumb :separator="NavigateNextFilled">
    <fn-link>Interface UI</fn-link>
    <fn-link>Components</fn-link>
    <fn-link>Breadcrumb</fn-link>
  </fn-breadcrumb>
</template>
