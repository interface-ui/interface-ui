<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { NavigateNextFilled } = pkg
</script>

<template>
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
</template>
