<script setup lang="ts">
import { FnButton, FnBadge } from '@fusion-ui-vue/components'
import createTheme from '@fusion-ui-vue/theme'
// import { ref } from 'vue'
import Child from './Child.vue'

// const checked = ref<boolean>(false)
// const picked = ref<string>('apple')
const theme = createTheme()
console.log(theme.value)

const changTheme = () => {
  theme.value.mode = theme.value.mode === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      <!-- @vue-skip -->
      {{ theme.mode }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->
  <div class="content">
    <fn-badge content="1000" max="999">
      <fn-button>Button</fn-button>
    </fn-badge>
    <fn-badge variant="dot" :color="theme => theme.colors.cyan[400]">
      <fn-button>Button</fn-button>
    </fn-badge>
  </div>
  <div class="content">
    <Child />
  </div>
</template>
