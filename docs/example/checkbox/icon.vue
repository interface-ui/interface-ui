<script lang="ts" setup>
import { reactive } from 'vue'
import Star from '@interface-ui/icons/StarFilled'
import StarOutline from '@interface-ui/icons/StarOutlineFilled'
import Bedtime from '@interface-ui/icons/BedtimeFilled'
import BedtimeOutlined from '@interface-ui/icons/BedtimeOutlined'
const checked = reactive<boolean[]>([false, false])
</script>

<template>
  <in-checkbox v-model="checked[0]" color="#6366f1">
    <star v-show="checked[0]" />
    <star-outline v-show="!checked[0]" />
  </in-checkbox>
  <in-checkbox v-model="checked[1]" :color="theme => theme.colors.yellow[900]">
    <bedtime v-show="checked[1]" />
    <bedtime-outlined v-show="!checked[1]" />
  </in-checkbox>
</template>
