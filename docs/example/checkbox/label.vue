<script lang="ts" setup>
import { InCheckbox } from 'interface-ui'
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <in-form-label v-model="checked" :control="InCheckbox" label="Label" />
      <in-form-label
        v-model="checked"
        :control="InCheckbox"
        label="Label"
        required
      />
      <in-form-label
        v-model="checked"
        :control="InCheckbox"
        label="Label"
        disabled
      />
    </div>
  </div>
</template>
