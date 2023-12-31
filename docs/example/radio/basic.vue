<script lang="ts" setup>
import { InRadio } from '@interface-ui/core'
import { ref } from 'vue'

const picked = ref<string>('apple')
</script>

<template>
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
</template>
