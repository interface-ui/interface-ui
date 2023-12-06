<script lang="ts" setup>
import { FnCheckbox } from 'interface-ui'
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-form-label v-model="checked" :control="FnCheckbox" label="Label" />
      <fn-form-label
        v-model="checked"
        :control="FnCheckbox"
        label="Label"
        required
      />
      <fn-form-label
        v-model="checked"
        :control="FnCheckbox"
        label="Label"
        disabled
      />
    </div>
  </div>
</template>
