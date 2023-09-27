<script setup lang="ts">
import { FnButton, FnButtonGroup } from '@fusion-ui/components'
import { ref } from 'vue'
const button = ref('深色')

const changTheme = () => {
  const html = document.documentElement as HTMLElement
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    html.setAttribute('data-theme', 'light')
    button.value = '浅色'
  } else {
    html.classList.add('dark')
    html.setAttribute('data-theme', 'dark')
    button.value = '深色'
  }
}
// const checked = ref(false)
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      {{ button }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->
  <div class="content">
    <fn-button-group>
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
    <fn-button-group variant="outlined">
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
    <fn-button-group variant="text">
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
  </div>
  <div class="content">
    <fn-button-group orientation="vertical" disabled>
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
    <fn-button-group variant="outlined" orientation="vertical" disabled>
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
    <fn-button-group variant="text" orientation="vertical" disabled>
      <fn-button>one</fn-button>
      <fn-button>two</fn-button>
      <fn-button>three</fn-button>
    </fn-button-group>
  </div>
</template>
