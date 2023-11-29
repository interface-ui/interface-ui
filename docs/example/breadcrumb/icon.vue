<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { HomeFilled, FlagFilled, AppsFilled } = pkg
</script>

<template>
  <fn-breadcrumb>
    <fn-link><home-filled /> Interface UI</fn-link>
    <fn-link><flag-filled /> Components</fn-link>
    <fn-link><apps-filled /> Breadcrumb</fn-link>
  </fn-breadcrumb>
</template>
