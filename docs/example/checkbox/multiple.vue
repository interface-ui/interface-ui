<script lang="ts" setup>
import { InCheckbox } from '@interface-ui/core'
import { ref } from 'vue'

const checkedNames = ref<string[]>([])
</script>

<template>
  <div space-y-2>
    <div>{{ checkedNames }}</div>
    <div fscw gap-2>
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
      />
    </div>
  </div>
</template>
