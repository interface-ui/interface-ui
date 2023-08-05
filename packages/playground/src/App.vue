<script setup lang="ts">
import { ref } from 'vue'
const button = ref('晚上')

const changTheme = () => {
  const html = document.documentElement
  if (html.classList.contains('dark')) {
    button.value = '白天'
    html.classList.remove('dark')
    // html.classList.add('light')
    html.setAttribute('data-theme', 'light')
  }
  else {
    html.classList.remove('light')
    html.classList.add('dark')
    button.value = '晚上'
    html.setAttribute('data-theme', 'dark')
  }
}
const aa = ref('')

const vvv = (a: any) => {
  consola.log('@', a)
}
</script>

<template>
  <div class=" flex w-100% justify-between">
    <div class="content">
      <fn-button @click="changTheme">
        {{ button }}
      </fn-button>
      <br>
      <fn-input v-model="aa" clearable type="text" @focus="vvv" />
      ---{{ aa }}
      <fn-input v-model="aa" placeholder="123" disabled clearable type="text" prefix-icon="material-symbols:10k-rounded" suffix-icon="ri:mv-line" />
      ---
      <br>
      <fn-input v-model="aa" type="textarea" clearable placeholder="请输入" width="400" />
    </div>
  </div>
</template>

<style scoped>
.content{
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
