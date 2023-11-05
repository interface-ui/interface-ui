<script lang="ts" setup>
import { ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'
const { BedtimeFilled, BedtimeOutlined, StarFilled, StarOutlineFilled } = pkg
// import {
//   BedtimeFilled,
//   BedtimeOutlined,
//   StarFilled,
//   StarOutlineFilled,
// } from 'fusion-ui-iconify'

const checked = ref<boolean>(false)
</script>

<template>
  <fn-checkbox v-model="checked" color="#6366f1">
    <star-filled v-show="checked" />
    <star-outline-filled v-show="!checked" />
  </fn-checkbox>
  <fn-checkbox v-model="checked" color="#f59e0b">
    <bedtime-filled v-show="checked" />
    <bedtime-outlined v-show="!checked" />
  </fn-checkbox>
</template>
