<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { HomeFilled, FlagFilled, AppsFilled } = pkg
</script>

<template>
  <in-breadcrumb>
    <in-link><home-filled /> Interface UI</in-link>
    <in-link><flag-filled /> Components</in-link>
    <in-link><apps-filled /> Breadcrumb</in-link>
  </in-breadcrumb>
</template>
