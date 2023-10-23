<script lang="ts" setup>
import { FnTextField } from '@fusion-ui-vue/components'
import { ref } from 'vue'

const content = ref<string>('')
</script>

<template>
  <div class="content">
    <fn-text-field
      size="small"
      v-model="content"
      variant="outlined"
      label="Outlined"
      error
      placeholder="placeholder"
    />
    <fn-text-field
      v-model="content"
      size="small"
      variant="filled"
      label="Filled"
      placeholder="placeholder"
    />
    <fn-text-field
      v-model="content"
      size="small"
      variant="standard"
      label="Standard"
      placeholder="placeholder"
    />
  </div>
  <div class="content">
    <fn-text-field
      v-model="content"
      variant="outlined"
      label="Outlined"
      supporting-text="supporting text"
      placeholder="placeholder"
    />
    <fn-text-field
      v-model="content"
      variant="filled"
      label="Filled"
      placeholder="placeholder"
    />
    <fn-text-field
      v-model="content"
      variant="standard"
      label="Standard"
      placeholder="placeholder"
    />
  </div>
  <div class="content">
    <fn-text-field
      size="large"
      v-model="content"
      variant="outlined"
      label="Outlined"
      supporting-text="supporting text"
      placeholder="placeholder"
    />
    <fn-text-field
      v-model="content"
      size="large"
      variant="filled"
      label="Filled"
      supporting-text="supporting text"
      placeholder="placeholder"
      error
    />
    <fn-text-field
      v-model="content"
      size="large"
      variant="standard"
      label="Standard"
      supporting-text="supporting text"
      placeholder="placeholder"
      error
    />
  </div>
  {{ content }}
</template>
