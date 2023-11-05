<script lang="ts" setup>
import '@fusion-ui-vue/components/switch/src/index.less' // 开发调试的样式
import { FnSwitch } from '@fusion-ui-vue/components'
import { computed, ref } from 'vue'

const value = ref(false)
const color = computed(() => (value.value ? 'primary' : 'error'))
</script>

<template>
  {{ color }}
  <div class="content">
    <fn-switch size="small" v-model="value" :color="color" />
    <fn-switch size="small" v-model="value" disabled />
    <!-- <fn-switch size="small" v-model="value" disabled /> -->
  </div>
  <!-- <div class="content">
    <fn-switch color="tertiary" v-model="value" />
    <fn-switch v-model="value" disabled />
  </div>
  <div class="content">
    <fn-switch size="large" v-model="value" />
    <fn-switch size="large" v-model="value" disabled />
  </div> -->
</template>
