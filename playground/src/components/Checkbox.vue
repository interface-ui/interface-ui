<script lang="ts" setup>
import '@core/icon-button/src/index.less'
import { InCheckbox } from '@core'
import { ref } from 'vue'
import Star from '@interface-ui/icons/StarFilled'
import StarOutline from '@interface-ui/icons/StarOutlineFilled'
import Bedtime from '@interface-ui/icons/BedtimeFilled'
import BedtimeOutlined from '@interface-ui/icons/BedtimeOutlined'

const checked = ref<boolean>(true)
const checkedNames = ref<string[]>([])
</script>

<template>
  <div space-y-2>
    <div>{{ checkedNames }}</div>
    <div class="content">
      <in-form-label
        v-model="checkedNames"
        :control="InCheckbox"
        label="Jack"
        value="Jack"
      />
      <in-form-label
        v-model="checkedNames"
        :control="InCheckbox"
        label="John"
        value="John"
      />
      <in-form-label
        v-model="checkedNames"
        :control="InCheckbox"
        label="Mike"
        value="Mike"
        disabled
      />
    </div>
  </div>

  <div class="content">
    <in-checkbox v-model="checked" size="small" />
    <in-checkbox v-model="checked" />
    <in-checkbox v-model="checked" size="large" />
  </div>

  <div class="content">
    <in-checkbox v-model="checked" />
    <in-checkbox v-model="checked" color="secondary" />
    <in-checkbox v-model="checked" color="tertiary" />
    <in-checkbox v-model="checked" color="error" />
    <in-checkbox v-model="checked" :color="theme => theme.colors.cyan[400]" />
    <in-checkbox v-model="checked" color="#2E7D32" />
  </div>

  <div class="content">
    <in-checkbox v-model="checked" color="#6366f1">
      <star v-show="checked" />
      <star-outline v-show="!checked" />
    </in-checkbox>
    <in-checkbox v-model="checked" :color="theme => theme.colors.yellow[900]">
      <bedtime v-show="checked" />
      <bedtime-outlined v-show="!checked" />
    </in-checkbox>
  </div>
</template>
