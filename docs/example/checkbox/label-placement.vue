<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-form-label v-model="checked" label="Top" label-placement="top" />
      <fn-form-label v-model="checked" label="Left" label-placement="left" />
      <fn-form-label
        v-model="checked"
        label="Bottom"
        label-placement="bottom"
      />
      <fn-form-label v-model="checked" label="Right" label-placement="right" />
    </div>
  </div>
</template>
