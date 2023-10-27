<script lang="ts" setup>
import '@fusion-ui-vue/components/switch/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/icon-button/src/index.less' // 开发调试的样式
import { FnSwitch } from '@fusion-ui-vue/components'

import { computed, ref } from 'vue'
const value = ref([false, true])
const color = computed(() => (value.value[1] ? 'primary' : 'error'))
</script>

<template>
  <div class="content">
    <fn-switch size="small" v-model="value[0]" :color="color" />
    <fn-switch size="small" v-model="value[1]" />
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
