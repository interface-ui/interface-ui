<script lang="ts" setup>
import { FnRadio } from 'fusion-ui-vue'
import { ref } from 'vue'

const picked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-radio v-model="picked" :value="true" />
      <fn-radio v-model="picked" :value="false" />
    </div>
  </div>
</template>
