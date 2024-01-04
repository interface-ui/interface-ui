<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from 'vue'
import { Repl, ReplStore } from '@vue/repl'
import '@vue/repl/style.css'
import headers from './header.vue'
import { APP_CODE, COMPONENT_CODE, COMPONENT_CODE2 } from './index'

let Monaco: any
const isMounted = ref(false)

onMounted(() => {
  import('@vue/repl/monaco-editor').then(res => {
    Monaco = res.default
    nextTick(() => {
      isMounted.value = true
    })
  })
})

const theme = ref(
  document.documentElement.classList.contains('dark') ? 'dark' : 'light',
)

const store = new ReplStore({
  serializedState: window.location.hash.slice(1),
})

// watchEffect(() => window.history.replaceState({}, '', store.serialize()))

store.state.mainFile = 'src/App.vue'

const previewOptions = reactive({})

const mainFile = 'src/App.vue'
const componentFile = 'src/component.vue'
const defaultFiles = {
  [mainFile]: APP_CODE,
  'src/mainFile.js': COMPONENT_CODE2,
  //   'import-map.json': JSON.stringify({
  //     imports: {
  //       unocss: 'https://cdn.jsdelivr.net/npm/unocss@0.58.3/+esm',
  //       '@interface-ui/icons':
  //         'https://cdn.jsdelivr.net/npm/@interface-ui/icons@0.0.1-alpha.1/es/index.js',

  //       '@emotion/css': 'https://cdn.jsdelivr.net/npm/@emotion/css@11.11.2/+esm',
  //       '@interface-ui/utils':
  //         'https://cdn.jsdelivr.net/npm/temp-utils@0.0.1-alpha.2/es/index.js',
  //       '@interface-ui/constants':
  //         'https://cdn.jsdelivr.net/npm/temp-constants@0.0.1-alpha.2/es/index.js',
  //       '@interface-ui/theme':
  //         'https://cdn.jsdelivr.net/npm/temp-theme@0.0.1-alpha.2/es/index.js',
  //       '@interface-ui/core':
  //         'https://cdn.jsdelivr.net/npm/temp-core@0.0.1-alpha.2/es/index.js',
  //     },
  //   }),
}

store.setFiles(defaultFiles)
store.setActive(mainFile)
function resolveSFCExample(codeSrc: string) {
  defaultFiles[componentFile] = codeSrc
  return defaultFiles
}

function updateExample(codeSrc: string) {
  store.setFiles(resolveSFCExample(codeSrc), mainFile).then(() => {
    store.setActive(componentFile)
  })
}
const decodeSourceHash = sourceHash => {
  const originCodeString = decodeURIComponent(escape(atob(sourceHash)))
  const originCode = JSON.parse(originCodeString)
  return originCode
}

nextTick(() => {
  const hashCode = window.location.hash.slice(1)
  if (hashCode) {
    const code = decodeSourceHash(hashCode)
    const componentCode = code['component.vue'].replace(
      /import ([a-zA-Z]+) from '@interface-ui\/icons\/([a-zA-Z]+)(\.js)?'/g,
      (_, m2, m3) => `import { ${m3} as ${m2} } from '@interface-ui/icons'`,
    )

    updateExample(componentCode)
  } else updateExample(COMPONENT_CODE)
})

/**
 * 设置组件库版本
 * @param version
 */
function setUiVersion(version: string) {
  previewOptions.headHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/temp-core@0.0.1-alpha.2/styles/index.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/temp-theme@0.0.1-alpha.2/styles/index.css">
    `
  // 加载组件库的依赖
  store.setImportMap({
    imports: {
      '@emotion/css': 'https://cdn.jsdelivr.net/npm/@emotion/css@11.11.2/+esm',
      '@interface-ui/utils':
        'https://cdn.jsdelivr.net/npm/temp-utils@0.0.1-alpha.2/es/index.js',
      '@interface-ui/constants':
        'https://cdn.jsdelivr.net/npm/temp-constants@0.0.1-alpha.2/es/index.js',
      '@interface-ui/theme':
        'https://cdn.jsdelivr.net/npm/temp-theme@0.0.1-alpha.2/es/index.js',
      '@interface-ui/core':
        'https://cdn.jsdelivr.net/npm/temp-core@0.0.1-alpha.2/es/index.js',
      '@interface-ui/icons':
        'https://cdn.jsdelivr.net/npm/@interface-ui/icons@0.0.1-alpha.2/es/index.js',
    },
  })
}

const changeUiVersion = (version: string) => {
  setUiVersion(version)
}

const changeEditTheme = (EditTheme: 'dark' | 'light') => {
  theme.value = EditTheme
}
</script>

<template>
  <div v-if="isMounted">
    <headers
      :store="store"
      @change-ui-version="changeUiVersion"
      @change-eidt-theme="changeEditTheme"
    />
    <repl
      :store="store"
      :editor="Monaco"
      :auto-resize="true"
      :show-ts-config="false"
      :clear-console="false"
      :theme="theme"
      :preview-options="previewOptions"
    />
  </div>
</template>

<style scoped>
:deep(.split-pane) {
  height: calc(100vh - 50px - 38px);
}
</style>
