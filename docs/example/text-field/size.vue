<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div flex flex-col gap-10>
    <div fscw gap-5 flex-nowrap>
      <in-text-field v-model="value" size="small" label="Outlined" />
      <in-text-field
        v-model="value"
        size="small"
        variant="filled"
        label="Filled"
      />
      <in-text-field
        v-model="value"
        size="small"
        variant="standard"
        label="Standard"
      />
    </div>
    <div fscw gap-5 flex-nowrap>
      <in-text-field v-model="value" size="medium" label="Outlined" />
      <in-text-field
        v-model="value"
        size="medium"
        variant="filled"
        label="Filled"
      />
      <in-text-field
        v-model="value"
        size="medium"
        variant="standard"
        label="Standard"
      />
    </div>
    <div fscw gap-5 flex-nowrap>
      <in-text-field v-model="value" label="Outlined" />
      <in-text-field v-model="value" variant="filled" label="Filled" />
      <in-text-field v-model="value" variant="standard" label="Standard" />
    </div>
  </div>
</template>
