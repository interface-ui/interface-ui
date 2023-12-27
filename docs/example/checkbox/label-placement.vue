<script lang="ts" setup>
import { InCheckbox } from '@interface-ui/core'
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <in-form-label
        v-model="checked"
        :control="InCheckbox"
        label="Top"
        label-placement="top"
      />
      <in-form-label
        v-model="checked"
        :control="InCheckbox"
        label="Left"
        label-placement="left"
      />
      <in-form-label
        v-model="checked"
        :control="InCheckbox"
        label="Bottom"
        label-placement="bottom"
      />
      <in-form-label
        v-model="checked"
        :control="InCheckbox"
        label="Right"
        label-placement="right"
      />
    </div>
  </div>
</template>
