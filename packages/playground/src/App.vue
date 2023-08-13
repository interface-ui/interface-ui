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

const optionList = [
  { value: 0, label: '选项一' },
  { value: 1, label: '选项二' },
  { value: 3, label: '选项二', disabled: true },
]
const yyy = ref(true)
const pp = (p: any) => {
  console.log(p)
}
const xxx = ref('1234')
const process = ref(10)
// const time = setInterval(() => {
//   process.value += 1
//   if (process.value === 100)
//     clearInterval(time)
// }, 100)
const dialogVisible = ref(false)
</script>

<template>
  <div style="width: 900px;height: 700px;border: 1px solid transparent">
    <fn-progress :percentage="process" color="red" height="10" background="red" />
    <br>

    <fn-progress :percentage="process" type="circle" color="red" height="10">
      <template #default>
        <div>
          <fn-icon icon="twemoji:calendar" />
        </div>
      </template>
    </fn-progress>
    <br>
    <div>
      <fn-progress :percentage="process" type="circle" background="#fff" color="pink" height="10">
        123
      </fn-progress>
    </div>

    <br>
    <!-- <fn-progress :percentage="70" background="yellow" status="danger" />
    <br>

    <fn-progress :percentage="70" background="yellow" status="success" />
    <br>

    <fn-progress :percentage="70" background="yellow" status="warning" /> -->
  </div>
  <fn-badge :value="xxx" flashing color="blue">
    <fn-input v-model="xxx" placeholder="Please input" prefix-icon="twemoji:calendar" />
  </fn-badge>
  <div class=" flex w-100% justify-between">
    <fn-progerss v-model="xxx" />

    <FnSwtich v-model="yyy" checked-text="dfa" un-checked-text="dfa" un-checked-icon="ri:alarm-line" />
    <FnSwtich v-model="yyy" checked-icon="mdi:check-outline" un-checked-icon="mdi:close-outline" color="#62c553" checked-icon-color="red" un-checked-icon-color="red" />
    222
    <fn-input v-model="aa" placeholder="Please input" prefix-icon="twemoji:calendar" />
    <div class="content">
      <FnButton @click="FnMessage({ message: 'this is a message.' })">
        Show message
      </FnButton>
      <fn-button type="outline" @click=" dialogVisible = true">
        open Dialog
      </fn-button>
      <fn-dialog
        v-model="dialogVisible"
        title="Tips"
      >
        <span>This is a message</span>
        <template #footer>
          <span class="dialog-footer">
            <fn-button type="outline" @click="dialogVisible = false">Cancel</fn-button>
            <fn-button @click="dialogVisible = false">
              Confirm
            </fn-button></span>
        </template>
      </fn-dialog>
      111
      <fn-button @click="changTheme">
        {{ button }}
      </fn-button>
      <br>
      <fn-radio v-model="ccc1" color="red" :value="ccc" @change="pp">
        Radio
      </fn-radio>

      <fn-radio v-model="ccc1" :horizontal="true" :option-list="optionList" @change="pp" />
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
