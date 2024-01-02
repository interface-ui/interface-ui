<script lang="ts" setup>
import Home from '@interface-ui/icons/HomeFilled'
</script>

<template>
  <home />
  <home color="red" />
  <home color="green" />
  <in-svg-icon :component="Home" :color="theme => theme.colors.cyan[400]" />
</template>
