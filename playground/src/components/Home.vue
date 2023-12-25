<script lang="ts" setup>
import { InButton } from '@interface-ui/components'
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
      cs="text-transform: none;"
    >
      {{ item.name }}
    </in-button>
  </div>
</template>
