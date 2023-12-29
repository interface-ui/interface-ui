<script lang="ts" setup>
import '@core/button/src/index.less'
import { InButton } from '@core'
import { ref } from 'vue'

const color = ref('primary')
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
    <in-button variant="filled" :color="color">Button</in-button>
    <in-button variant="tonal">Button</in-button>
    <in-button variant="outlined" color="error" @click="color = 'error'">
      Button
    </in-button>
    <in-button variant="text" color="secondary">Button</in-button>
    <in-button variant="outlined" :color="theme => theme.colors.cyan[400]">
      Button
    </in-button>
    <in-button :color="theme => theme.colors.cyan[400]"> Button </in-button>
  </div>
  <div class="content">
    <in-button size="large" variant="elevated">Button</in-button>
    <in-button size="large" variant="filled">Button</in-button>
    <in-button size="large" variant="tonal">Button</in-button>
    <in-button size="large" variant="outlined">Button</in-button>
    <in-button size="large" variant="text" disabled>Button</in-button>
  </div>
  <in-button size="large" variant="filled" color="rgb(0, 0, 0)">
    Button
  </in-button>
</template>
