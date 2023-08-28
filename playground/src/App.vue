<script setup lang="ts">
import { ref } from 'vue'
const button = ref('深色')

const changTheme = () => {
  const html = document.documentElement as HTMLElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    html.setAttribute('data-theme', 'light');
    button.value = '浅色';
  } else {
    html.classList.add('dark');
    html.setAttribute('data-theme', 'dark');
    button.value = '深色';
  }
}

const yyy = ref(true)
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
  <FnSwtich v-model="yyy" checked-text="dfa" un-checked-text="dfa" un-checked-icon="ri:alarm-line" />
</div>
  
</template>

<style scoped>
header{
  float: right;
}
.content{
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
