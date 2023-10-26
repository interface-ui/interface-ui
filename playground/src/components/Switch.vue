<script lang="ts" setup>
import '@fusion-ui-vue/components/switch/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/icon-button/src/index.less' // 开发调试的样式
import { FnSwitch } from '@fusion-ui-vue/components'

import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <div class="content">
    <fn-switch size="small" v-model="value" />
    <fn-switch size="small" v-model="value" disabled />
  </div>
  <div class="content">
    <fn-switch color="tertiary" v-model="value" />
    <fn-switch v-model="value" disabled />
  </div>
  <div class="content">
    <fn-switch size="large" v-model="value" />
    <fn-switch size="large" v-model="value" disabled />
  </div>
</template>
