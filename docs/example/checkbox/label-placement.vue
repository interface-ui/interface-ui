<script lang="ts" setup>
import { FnCheckbox } from 'interface-ui'
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-form-label
        v-model="checked"
        :control="FnCheckbox"
        label="Top"
        label-placement="top"
      />
      <fn-form-label
        v-model="checked"
        :control="FnCheckbox"
        label="Left"
        label-placement="left"
      />
      <fn-form-label
        v-model="checked"
        :control="FnCheckbox"
        label="Bottom"
        label-placement="bottom"
      />
      <fn-form-label
        v-model="checked"
        :control="FnCheckbox"
        label="Right"
        label-placement="right"
      />
    </div>
  </div>
</template>
