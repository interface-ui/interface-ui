<script lang="ts" setup>
import { FnCheckbox } from '@fusion-ui-vue/components'
import { ref } from 'vue'

const checkedNames = ref<string[]>([])
</script>

<template>
  <div space-y-2>
    <div>{{ checkedNames }}</div>
    <div fscw gap-2>
      <fn-form-label
        v-model="checkedNames"
        :control="FnCheckbox"
        label="Jack"
        value="Jack"
      />
      <fn-form-label
        v-model="checkedNames"
        :control="FnCheckbox"
        label="John"
        value="John"
      />
      <fn-form-label
        v-model="checkedNames"
        :control="FnCheckbox"
        label="Mike"
        value="Mike"
        disabled
      />
    </div>
  </div>
</template>
