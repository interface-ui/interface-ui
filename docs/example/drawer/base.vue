<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const direction = ref('left')
</script>

<template>
  <div space-y-5>
    <fn-button variant="text" @click="visible = true;direction = 'left'">
      LEFT
    </fn-button>
    <fn-button variant="text" @click="visible = true;direction = 'top'">
      TOP
    </fn-button>
    <fn-button variant="text" @click="visible = true;direction = 'right'">
      RIGHT
    </fn-button>
    <fn-button variant="text" @click="visible = true;direction = 'bottom'">
      BOTTOM
    </fn-button>
  </div>
  <fn-drawer
    v-model="visible"
    title="Drawer Title"
    :direction="direction"
  >
    <div class="p-5">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </div>
  </fn-drawer>
</template>
