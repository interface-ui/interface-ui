<script lang="ts" setup>
import { FnTextField } from '@fusion-ui-vue/components'
import { ref } from 'vue'

const content = ref<string>('')
</script>

<template>
  {{ content }}
  <div class="content">
    <fn-text-field
      v-model="content"
      variant="outlined"
      label="Outlined"
      type="password"
    />
    <fn-text-field v-model="content" variant="outlined" label="Outlined" />
    <fn-text-field v-model="content" variant="filled" label="Filled" />
    <fn-text-field v-model="content" variant="standard" label="Standard" />
  </div>
</template>
