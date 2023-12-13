<script lang="ts" setup>
import { FnButton } from '@fusion-ui-vue/components'
import { RouterLink } from 'vue-router'
import routes from '../routes'
</script>

<template>
  <div class="grid-container">
    <fn-button
      v-for="item in routes"
      :component="RouterLink"
      :to="item.path"
      variant="text"
      cs="text-transform: none;"
    >
      {{ item.name }}
    </fn-button>
  </div>
</template>
