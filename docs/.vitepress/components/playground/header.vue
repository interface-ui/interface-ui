<script setup lang="ts">
import { defineEmits, defineExpose, reactive, ref, watch } from 'vue'

import { DarkModeFilled, LightModeFilled } from '@interface-ui/icons'
import { InIconButton } from '@interface-ui/core'
const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['changeUiVersion', 'changeEidtTheme'])

const previewOptions = reactive({})
const theme = ref(
  document.documentElement.classList.contains('dark') ? 'dark' : 'light',
)
const uiVersion = ref('latest')
const uiVersions = ref<string[]>([])

const changeTheme = () => {
  const cls = document.documentElement.classList
  if (theme.value === 'light') {
    theme.value = 'dark'
    cls.add('dark')
    emit('changeEidtTheme', 'dark')
  } else {
    theme.value = 'light'
    cls.remove('dark')
    emit('changeEidtTheme', 'light')
  }
}

watch(
  uiVersion,
  v => {
    emit('changeUiVersion', v)
  },
  { immediate: true },
)
/**
 * 获取所有的组件库版本
 */
async function fetchUiVersions() {
  const res = await fetch('https://data.jsdelivr.com/v1/package/npm/temp-ui')
  const { versions } = (await res.json()) as { versions: string[] }
  uiVersions.value = versions
}
fetchUiVersions()
const isVueLoading = ref(false)

// vue 版本切换相关
const vueVersion = ref('latest')
const vueVersions = ref<string[]>([])

/**
 * 获取所有 Vue 版本
 */
async function fetchVueVersions() {
  const res = await fetch('https://data.jsdelivr.com/v1/package/npm/vue')
  const { versions } = (await res.json()) as { versions: string[] }
  let isInPreRelease = versions[0].includes('-')
  const filteredVersions: string[] = []
  for (let i = 0; i < versions.length; i++) {
    const v = versions[i]
    if (v.includes('-')) {
      if (isInPreRelease) {
        filteredVersions.push(v)
      }
    } else {
      filteredVersions.push(v)
      isInPreRelease = false
    }
    if (v === '3.0.10') {
      break
    }
  }
  vueVersions.value = filteredVersions
}
fetchVueVersions()

watch(vueVersion, v => {
  setVueVersion(v)
})

function setVueVersion(v: string) {
  if (isVueLoading.value) return

  isVueLoading.value = true

  props.store.setVueVersion(v).finally(() => {
    isVueLoading.value = false
  })
}

const tsVersions = ref<string[]>([])

/**
 * 获取所有的 TypeScript 版本
 */
async function fetchTsVersions() {
  const res = await fetch('https://data.jsdelivr.com/v1/package/npm/typescript')
  const { versions } = (await res.json()) as { versions: string[] }
  tsVersions.value = versions.filter(
    v => !v.includes('dev') && !v.includes('insiders'),
  )
}
fetchTsVersions()

defineExpose({
  previewOptions,
})
</script>

<template>
  <div
    class="w-100% h-50px flex items-center justify-between px-0 px-5 border-b border-solid"
  >
    <div class="flex">
      <img
        class="w-24px mr-10px"
        src="https://github.com/interface-ui/interface-ui/raw/master/docs/public/logo.svg"
        alt=""
      />
      <div class="font-extrabold">InterfaceUi Playground</div>
    </div>
    <div>
      <!-- <label class="playground-label">interface-ui/core: </label>
      <select v-model="uiVersion" class="playground-select">
        <option value="latest">latest</option>
        <option v-for="item in uiVersions" :key="item" :value="item">
          {{ item }}
        </option>
      </select> -->
      <label class="playground-label">Vue: </label>
      <select
        v-model="vueVersion"
        class="playground-select"
        :disabled="isVueLoading"
      >
        <option value="latest">latest</option>
        <option v-for="item in vueVersions" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <label class="playground-label">TypeScript: </label>
      <select
        v-model="props.store.state.typescriptVersion"
        class="playground-select"
      >
        <option value="latest">latest</option>
        <option v-for="item in tsVersions" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <in-icon-button class="m-l-10px m-t--5px" @click="changeTheme">
        <light-mode-filled v-if="theme === 'light'" />
        <dark-mode-filled v-else />
      </in-icon-button>
    </div>
  </div>
</template>

<style scoped>
.playground-label {
  margin-left: 24px;
  font-weight: 600;
}

.playground-select {
  width: 120px;
  margin-left: 8px;
  appearance: auto;
  border: 1px solid #ccc;
}

nav {
  --bg: #fff;
  --bg-light: #fff;
  --border: #ddd;
  --btn: #666;
  --highlight: #333;
  --green: #3ca877;
  --purple: #904cbc;
  --btn-bg: #eee;
  color: var(--base);
  height: var(--nav-height);
  box-sizing: border-box;
  padding: 0 1em;
  background-color: var(--bg);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.33);
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: space-between;
}
.dark nav {
  --base: #ddd;
  --bg: #1a1a1a;
  --bg-light: #242424;
  --border: #383838;
  --highlight: #fff;
  --btn-bg: #333;
  box-shadow: none;
  border-bottom: 1px solid var(--border);
}
</style>
