<script lang="ts" setup>
import '@core/button/src/index.less'
import '@core/button-group/src/index.less'
import { InButton, InButtonGroup } from '@core'
import { ref } from 'vue'
import { useTheme } from '@interface-ui/theme'

const color = ref('tertiary')
const theme = useTheme()
</script>

<template>
  <div class="content">
    <in-button-group variant="elevated" :color="color">
      <in-button>One</in-button>
      <in-button color="error">Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group variant="elevated" color="tertiary" disabled>
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
  <div class="content">
    <in-button-group variant="filled">
      <in-button @click="color = theme.colors.yellow[400]">One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group variant="filled" disabled>
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
  <div class="content">
    <in-button-group variant="tonal">
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group variant="tonal" disabled>
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
  <div class="content">
    <in-button-group variant="outlined" color="tertiary">
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group variant="outlined" color="tertiary" disabled>
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
  <div class="content">
    <in-button-group variant="text">
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group variant="text" disabled>
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>

  <div class="content">
    <in-button-group
      orientation="vertical"
      shape="rounded"
      variant="elevated"
      color="tertiary"
    >
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group
      orientation="vertical"
      shape="rounded"
      variant="elevated"
      color="tertiary"
      disabled
    >
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
  <div class="content">
    <in-button-group orientation="vertical" shape="rounded" variant="filled">
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group
      orientation="vertical"
      shape="rounded"
      variant="filled"
      disabled
    >
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
  <div class="content">
    <in-button-group orientation="vertical" shape="rounded" variant="tonal">
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group
      orientation="vertical"
      shape="rounded"
      variant="tonal"
      disabled
    >
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
  <div class="content">
    <in-button-group
      orientation="vertical"
      shape="rounded"
      variant="outlined"
      color="tertiary"
    >
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group
      orientation="vertical"
      shape="rounded"
      variant="outlined"
      color="tertiary"
      disabled
    >
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
  <div class="content">
    <in-button-group orientation="vertical" shape="rounded" variant="text">
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
    <in-button-group
      orientation="vertical"
      shape="rounded"
      variant="text"
      disabled
    >
      <in-button>One</in-button>
      <in-button>Two</in-button>
      <in-button>Three</in-button>
    </in-button-group>
  </div>
</template>
