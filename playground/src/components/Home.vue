<script lang="ts" setup>
import { FnChip } from '@fusion-ui-vue/components'
import { RouterLink } from 'vue-router'
import routes from '../routes'
</script>

<template>
  <div class="grid-container">
    <fn-chip
      v-for="item in routes"
      clickable
      :cs="{
        width: '215px',
        height: '75px',
        display: 'flex',
        fontSize: '18px',
        justifyContent: 'center',
      }"
      :component="RouterLink"
      :to="item.path"
    >
      {{ item.name }}
    </fn-chip>
  </div>
</template>
