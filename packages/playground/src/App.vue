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
const ccc = ref(2)
const ccc1 = ref(1)

const vvv = (a: any) => {
  consola.log('@', a)
}
const optionList = [
  { value: 0, label: '选项一' },
  { value: 1, label: '选项二' },
  { value: 3, label: '选项二' },
]
</script>

<template>
  <div class=" flex w-100% justify-between">
    <div class="content">
      111
      <fn-button @click="changTheme">
        {{ button }}
      </fn-button>
      <br>
      <fn-radio v-model="ccc1" :value="ccc">
        Radio
      </fn-radio>

      <fn-radio v-model="ccc1" :option-list="optionList" />
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
