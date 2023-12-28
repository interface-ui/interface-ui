<script lang="ts" setup>
import '@core/button/src/index.less'
import { InButton } from '@core'
</script>

<template>
  <div class="content">
    <in-button size="small" variant="elevated">Button</in-button>
    <in-button size="small" variant="filled">Button</in-button>
    <in-button size="small" variant="tonal">Button</in-button>
    <in-button size="small" variant="outlined">Button</in-button>
    <in-button size="small" variant="text">Button</in-button>
  </div>
  <div class="content">
    <in-button variant="elevated">Button</in-button>
    <in-button variant="filled">Button</in-button>
    <in-button variant="tonal">Button</in-button>
    <in-button variant="outlined">Button</in-button>
    <in-button variant="text">Button</in-button>
  </div>
  <div class="content">
    <in-button size="large" variant="elevated">Button</in-button>
    <in-button size="large" variant="filled">Button</in-button>
    <in-button size="large" variant="tonal">Button</in-button>
    <in-button size="large" variant="outlined">Button</in-button>
    <in-button size="large" variant="text">Button</in-button>
  </div>
</template>
