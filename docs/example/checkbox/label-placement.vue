<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnFormLabel label="Top" label-placement="top">
        <fn-checkbox v-model="checked" />
      </FnFormLabel>
      <FnFormLabel label="Left" label-placement="left">
        <fn-checkbox v-model="checked" />
      </FnFormLabel>
      <FnFormLabel label="Bottom" label-placement="bottom">
        <fn-checkbox v-model="checked" />
      </FnFormLabel>
      <FnFormLabel label="Right">
        <fn-checkbox v-model="checked" />
      </FnFormLabel>
    </div>
  </div>
</template>
