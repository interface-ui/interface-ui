<script setup lang="ts">
import { FnSwitchNew } from '@fusion-ui-vue/components'
import { ref } from 'vue'
const checked = ref(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-form-label
        v-model="checked"
        :control="FnSwitchNew"
        label="Top"
        label-placement="top"
      />
      <fn-form-label
        v-model="checked"
        :control="FnSwitchNew"
        label="Left"
        label-placement="left"
      />
      <fn-form-label
        v-model="checked"
        :control="FnSwitchNew"
        label="Bottom"
        label-placement="bottom"
      />
      <fn-form-label
        v-model="checked"
        :control="FnSwitchNew"
        label="Right"
        label-placement="right"
      />
    </div>
  </div>
</template>
