<script setup lang="ts">
import { FnSwitchNew } from '@fusion-ui-vue/components'
import { ref } from 'vue'
const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-form-label
        v-model="value1"
        :control="FnSwitchNew"
        label="Label"
      />
      <fn-form-label
        v-model="value2"
        :control="FnSwitchNew"
        label="Required"
        required
      />
      <fn-form-label
        v-model="value3"
        :control="FnSwitchNew"
        label="Disabled"
        disabled
      />
    </div>
  </div>
</template>
