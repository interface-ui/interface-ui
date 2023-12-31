<script lang="ts" setup>
import '@core/icon-button/src/index.less'
import { InRadio } from '@core'
import { ref } from 'vue'

const picked = ref<string>('apple')
const value = ref<number>(1)
</script>

<template>
  <div class="content">
    <in-form-label
      v-model="picked"
      :control="InRadio"
      label="🍎 Apple"
      value="apple"
    />
    <in-form-label
      v-model="picked"
      :control="InRadio"
      label="🍌 Banana"
      value="banana"
    />
    <in-form-label
      v-model="picked"
      :control="InRadio"
      label="🍇 Grape"
      value="grape"
    />
    <in-form-label
      v-model="picked"
      :control="InRadio"
      label="🍊 Orange"
      value="orange"
      disabled
    />
  </div>

  <div class="content">
    <in-radio v-model="picked" :value="true" />
    <in-radio v-model="picked" :value="false" />
  </div>

  <div>
    <in-radio v-model="value" size="small" :value="1" />
    <in-radio v-model="value" size="small" color="error" :value="2" />
    <in-radio
      v-model="value"
      size="small"
      :color="theme => theme.colors.cyan[400]"
      :value="3"
    />
  </div>
  <div>
    <in-radio v-model="value" :value="1" />
    <in-radio v-model="value" color="error" :value="2" />
    <in-radio
      v-model="value"
      :color="theme => theme.colors.cyan[400]"
      :value="3"
    />
  </div>
  <div>
    <in-radio v-model="value" size="large" :value="1" />
    <in-radio v-model="value" size="large" color="error" :value="2" />
    <in-radio
      v-model="value"
      size="large"
      :color="theme => theme.colors.cyan[400]"
      :value="3"
    />
  </div>
</template>
