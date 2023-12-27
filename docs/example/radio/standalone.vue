<script lang="ts" setup>
import { InRadio } from '@interface-ui/core'
import { ref } from 'vue'

const picked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <in-radio v-model="picked" :value="true" />
      <in-radio v-model="picked" :value="false" />
    </div>
  </div>
</template>
