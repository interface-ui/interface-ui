<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref<boolean>(false)
const change = () => {
  console.log(1)
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-checkbox v-model="checked" @change.native="change" />
    </div>
  </div>
</template>
