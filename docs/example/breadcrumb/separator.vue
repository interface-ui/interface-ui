<script lang="ts" setup>
import NavigateNext from '@interface-ui/icons/NavigateNextFilled.js'
</script>

<template>
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
</template>
