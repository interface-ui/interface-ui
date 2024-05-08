<script lang="ts" setup>
import { InButton } from '@interface-ui/core'
import { RouterLink } from 'vue-router'
import routes from '../routes'
</script>

<template>
  <div class="grid-container">
    <in-button
      v-for="item in routes"
      :component="RouterLink"
      :to="item.path"
      variant="text"
    >
      {{ item.name }}
    </in-button>
  </div>
</template>
