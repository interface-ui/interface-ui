<script lang="ts" setup>
import '@css/switch/src/index.less'
import { InSwitch } from '@interface-ui/core'
import { computed, ref } from 'vue'

const value = ref(false)
const color = computed(() => (value.value ? 'primary' : 'error'))
</script>

<template>
  {{ color }}
  <div class="content">
    <in-switch size="small" v-model="value" :color="color" />
    <in-switch size="small" v-model="value" disabled />
    <!-- <in-switch size="small" v-model="value" disabled /> -->
  </div>
  <!-- <div class="content">
    <in-switch color="tertiary" v-model="value" />
    <in-switch v-model="value" disabled />
  </div>
  <div class="content">
    <in-switch size="large" v-model="value" />
    <in-switch size="large" v-model="value" disabled />
  </div> -->
</template>
