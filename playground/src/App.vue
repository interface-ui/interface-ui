<script setup lang="ts">
import { FnButton, FnBadge, FnAvatar } from '@fusion-ui-vue/components'
import createTheme from '@fusion-ui-vue/theme'
import { ref } from 'vue'
import Child from './Child.vue'

// const checked = ref<boolean>(false)
// const picked = ref<string>('apple')
const size = ref<number>(50)
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
    <fn-button @click="size += 10"> Add size </fn-button>
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
  <div class="content">
    <fn-avatar :size="size">H</fn-avatar>
  </div>
  <div class="content">
    {{ size }}
    <fn-avatar-group max="4" :size="size">
      <fn-avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <fn-avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <fn-avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
      <fn-avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/4.jpg"
      />
      <fn-avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/5.jpg"
      />
    </fn-avatar-group>
  </div>
</template>
